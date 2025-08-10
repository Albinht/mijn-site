import crypto from 'crypto';
import { cache } from '@/lib/cache/redis';

// CSRF token configuration
const CSRF_SECRET = process.env.CSRF_SECRET || crypto.randomBytes(32).toString('hex');
const CSRF_TOKEN_LENGTH = 32;
const CSRF_TOKEN_TTL = 3600; // 1 hour

class CSRFProtection {
  constructor() {
    this.secret = CSRF_SECRET;
  }
  
  // Generate CSRF token
  generateToken() {
    return crypto.randomBytes(CSRF_TOKEN_LENGTH).toString('hex');
  }
  
  // Create token hash
  hashToken(token) {
    return crypto
      .createHmac('sha256', this.secret)
      .update(token)
      .digest('hex');
  }
  
  // Store token for session
  async storeToken(sessionId, token) {
    const key = `csrf:${sessionId}`;
    const hashedToken = this.hashToken(token);
    await cache.set(key, hashedToken, CSRF_TOKEN_TTL);
    return token;
  }
  
  // Verify token
  async verifyToken(sessionId, token) {
    if (!token) return false;
    
    const key = `csrf:${sessionId}`;
    const storedHash = await cache.get(key);
    
    if (!storedHash) return false;
    
    const providedHash = this.hashToken(token);
    
    // Constant time comparison to prevent timing attacks
    return crypto.timingSafeEqual(
      Buffer.from(storedHash),
      Buffer.from(providedHash)
    );
  }
  
  // Middleware for CSRF protection
  middleware() {
    return async (req, res, next) => {
      // Skip for safe methods
      if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) {
        return next();
      }
      
      // Extract session ID from cookies or headers
      const sessionId = this.extractSessionId(req);
      if (!sessionId) {
        return res.status(403).json({ error: 'No session found' });
      }
      
      // Extract CSRF token from headers or body
      const token = this.extractToken(req);
      if (!token) {
        return res.status(403).json({ error: 'CSRF token missing' });
      }
      
      // Verify token
      const isValid = await this.verifyToken(sessionId, token);
      if (!isValid) {
        return res.status(403).json({ error: 'Invalid CSRF token' });
      }
      
      next();
    };
  }
  
  // Extract session ID from request
  extractSessionId(req) {
    // Try to get from auth token cookie
    const cookies = this.parseCookies(req.headers.get('cookie') || '');
    const authToken = cookies['auth-token'];
    
    if (authToken) {
      // Use auth token as session identifier
      return crypto
        .createHash('sha256')
        .update(authToken)
        .digest('hex')
        .substring(0, 16);
    }
    
    return null;
  }
  
  // Extract CSRF token from request
  extractToken(req) {
    // Check header first (preferred)
    const headerToken = req.headers.get('x-csrf-token');
    if (headerToken) return headerToken;
    
    // Check body
    if (req.body && req.body._csrf) {
      return req.body._csrf;
    }
    
    return null;
  }
  
  // Parse cookies from header string
  parseCookies(cookieString) {
    const cookies = {};
    cookieString.split(';').forEach(cookie => {
      const [key, value] = cookie.trim().split('=');
      if (key && value) {
        cookies[key] = value;
      }
    });
    return cookies;
  }
  
  // Generate and store token for API response
  async generateForSession(sessionId) {
    const token = this.generateToken();
    await this.storeToken(sessionId, token);
    return token;
  }
  
  // Clear token for session
  async clearToken(sessionId) {
    const key = `csrf:${sessionId}`;
    await cache.del(key);
  }
}

// Create singleton instance
const csrfProtection = new CSRFProtection();

export { csrfProtection };

// Helper function for API routes
export async function validateCSRF(request) {
  // Skip for safe methods
  if (['GET', 'HEAD', 'OPTIONS'].includes(request.method)) {
    return { valid: true };
  }
  
  // Extract session ID
  const cookieHeader = request.headers.get('cookie') || '';
  const cookies = {};
  cookieHeader.split(';').forEach(cookie => {
    const [key, value] = cookie.trim().split('=');
    if (key && value) {
      cookies[key] = value;
    }
  });
  
  const authToken = cookies['auth-token'];
  if (!authToken) {
    return { valid: false, error: 'No session found' };
  }
  
  const sessionId = crypto
    .createHash('sha256')
    .update(authToken)
    .digest('hex')
    .substring(0, 16);
  
  // Extract CSRF token
  const token = request.headers.get('x-csrf-token');
  if (!token) {
    return { valid: false, error: 'CSRF token missing' };
  }
  
  // Verify token
  const isValid = await csrfProtection.verifyToken(sessionId, token);
  if (!isValid) {
    return { valid: false, error: 'Invalid CSRF token' };
  }
  
  return { valid: true };
}

// Hook for client-side CSRF token management
export function useCSRFToken() {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Fetch CSRF token on mount
    fetchCSRFToken();
  }, []);
  
  const fetchCSRFToken = async () => {
    try {
      const response = await fetch('/api/auth/csrf', {
        credentials: 'include'
      });
      
      if (response.ok) {
        const data = await response.json();
        setToken(data.token);
      }
    } catch (error) {
      console.error('Failed to fetch CSRF token:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const refreshToken = async () => {
    setLoading(true);
    await fetchCSRFToken();
  };
  
  return { token, loading, refreshToken };
}