import { z } from 'zod';
import { monitoring, ValidationError } from '@/lib/monitoring/sentry';

// Common validation schemas
export const schemas = {
  // ID validations
  uuid: z.string().uuid('Invalid UUID format'),
  id: z.string().min(1, 'ID is required'),
  
  // Auth validations
  email: z.string().email('Invalid email format'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain uppercase letter')
    .regex(/[a-z]/, 'Password must contain lowercase letter')
    .regex(/[0-9]/, 'Password must contain number')
    .regex(/[^A-Za-z0-9]/, 'Password must contain special character'),
  username: z.string()
    .min(3, 'Username must be at least 3 characters')
    .max(30, 'Username must be at most 30 characters')
    .regex(/^[a-zA-Z0-9_-]+$/, 'Username can only contain letters, numbers, underscores, and hyphens'),
  
  // Content validations
  title: z.string()
    .min(1, 'Title is required')
    .max(200, 'Title must be at most 200 characters'),
  slug: z.string()
    .min(1, 'Slug is required')
    .max(200, 'Slug must be at most 200 characters')
    .regex(/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens'),
  content: z.string().max(50000, 'Content must be at most 50000 characters'),
  metaDescription: z.string().max(160, 'Meta description must be at most 160 characters'),
  
  // Pagination
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(10),
  
  // Sorting
  sortBy: z.string().optional(),
  sortOrder: z.enum(['asc', 'desc']).default('desc'),
  
  // Dates
  date: z.string().datetime('Invalid date format'),
  dateRange: z.object({
    start: z.string().datetime(),
    end: z.string().datetime(),
  }).refine(data => new Date(data.start) <= new Date(data.end), {
    message: 'Start date must be before end date',
  }),
  
  // File upload
  file: z.object({
    name: z.string(),
    type: z.string(),
    size: z.number().max(10 * 1024 * 1024, 'File size must be less than 10MB'),
  }),
  image: z.object({
    name: z.string(),
    type: z.string().regex(/^image\/(jpeg|jpg|png|gif|webp)$/, 'Invalid image type'),
    size: z.number().max(5 * 1024 * 1024, 'Image size must be less than 5MB'),
  }),
};

// Request validation schemas
export const requestSchemas = {
  // Auth endpoints
  login: z.object({
    body: z.object({
      username: schemas.username,
      password: z.string().min(1, 'Password is required'),
    }),
  }),
  
  register: z.object({
    body: z.object({
      username: schemas.username,
      email: schemas.email,
      password: schemas.password,
    }),
  }),
  
  refreshToken: z.object({
    body: z.object({
      refreshToken: z.string().min(1, 'Refresh token is required'),
    }),
  }),
  
  // Article endpoints
  createArticle: z.object({
    body: z.object({
      title: schemas.title,
      topic: z.string().min(1, 'Topic is required'),
      content: schemas.content.optional(),
      slug: schemas.slug,
      status: z.enum(['DRAFT', 'PROCESSING', 'PUBLISHED', 'ARCHIVED']).optional(),
    }),
  }),
  
  updateArticle: z.object({
    params: z.object({
      id: schemas.uuid,
    }),
    body: z.object({
      title: schemas.title.optional(),
      topic: z.string().optional(),
      content: schemas.content.optional(),
      slug: schemas.slug.optional(),
      status: z.enum(['DRAFT', 'PROCESSING', 'PUBLISHED', 'ARCHIVED']).optional(),
    }),
  }),
  
  // Page endpoints
  createPage: z.object({
    body: z.object({
      title: schemas.title,
      slug: schemas.slug,
      content: schemas.content.optional(),
      metaDescription: schemas.metaDescription.optional(),
      status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).optional(),
      type: z.enum(['MARKETING', 'SERVICE', 'TOOL', 'BLUEPRINT', 'LANDING']),
    }),
  }),
  
  updatePage: z.object({
    params: z.object({
      id: schemas.uuid,
    }),
    body: z.object({
      title: schemas.title.optional(),
      slug: schemas.slug.optional(),
      content: schemas.content.optional(),
      metaDescription: schemas.metaDescription.optional(),
      status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).optional(),
      type: z.enum(['MARKETING', 'SERVICE', 'TOOL', 'BLUEPRINT', 'LANDING']).optional(),
    }),
  }),
  
  // Query parameters
  list: z.object({
    query: z.object({
      page: schemas.page,
      limit: schemas.limit,
      sortBy: schemas.sortBy,
      sortOrder: schemas.sortOrder,
      search: z.string().optional(),
      status: z.string().optional(),
      type: z.string().optional(),
    }),
  }),
  
  // Analytics
  trackAnalytics: z.object({
    body: z.object({
      pagePath: z.string().min(1, 'Page path is required'),
      visitorId: z.string().optional(),
      sessionId: z.string().optional(),
      referrer: z.string().optional(),
      userAgent: z.string().optional(),
      deviceType: z.string().optional(),
      country: z.string().optional(),
      city: z.string().optional(),
      duration: z.number().optional(),
    }),
  }),
};

// Validation middleware
class RequestValidator {
  // Validate request against schema
  validate(schema, data) {
    try {
      return {
        success: true,
        data: schema.parse(data),
        errors: null,
      };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return {
          success: false,
          data: null,
          errors: this.formatZodErrors(error),
        };
      }
      throw error;
    }
  }
  
  // Format Zod errors for response
  formatZodErrors(error) {
    return error.errors.map(err => ({
      field: err.path.join('.'),
      message: err.message,
      code: err.code,
    }));
  }
  
  // Validate request body
  validateBody(schema, body) {
    return this.validate(schema, body);
  }
  
  // Validate query parameters
  validateQuery(schema, query) {
    return this.validate(schema, query);
  }
  
  // Validate route parameters
  validateParams(schema, params) {
    return this.validate(schema, params);
  }
  
  // Validate complete request
  validateRequest(schema, request) {
    const data = {
      body: request.body || {},
      query: request.query || {},
      params: request.params || {},
    };
    
    return this.validate(schema, data);
  }
  
  // Sanitize input
  sanitize(input) {
    if (typeof input === 'string') {
      // Remove null bytes
      input = input.replace(/\0/g, '');
      
      // Trim whitespace
      input = input.trim();
      
      // Remove control characters except newlines and tabs
      input = input.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
    } else if (typeof input === 'object' && input !== null) {
      // Recursively sanitize object properties
      for (const key in input) {
        if (input.hasOwnProperty(key)) {
          input[key] = this.sanitize(input[key]);
        }
      }
    } else if (Array.isArray(input)) {
      // Recursively sanitize array elements
      input = input.map(item => this.sanitize(item));
    }
    
    return input;
  }
  
  // Check for SQL injection patterns
  hasSQLInjection(input) {
    const sqlPatterns = [
      /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE|UNION|FROM|WHERE|JOIN|ORDER BY|GROUP BY|HAVING)\b)/gi,
      /(--|#|\/\*|\*\/)/g,
      /(\bOR\b\s*\d+\s*=\s*\d+)/gi,
      /(\bAND\b\s*\d+\s*=\s*\d+)/gi,
      /('|")\s*OR\s*('|")\s*=\s*('|")/gi,
    ];
    
    if (typeof input === 'string') {
      return sqlPatterns.some(pattern => pattern.test(input));
    }
    
    return false;
  }
  
  // Check for XSS patterns
  hasXSS(input) {
    const xssPatterns = [
      /<script[^>]*>.*?<\/script>/gi,
      /<iframe[^>]*>.*?<\/iframe>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
      /<img[^>]*onerror[^>]*>/gi,
      /<svg[^>]*onload[^>]*>/gi,
    ];
    
    if (typeof input === 'string') {
      return xssPatterns.some(pattern => pattern.test(input));
    }
    
    return false;
  }
  
  // Check for path traversal
  hasPathTraversal(input) {
    const pathPatterns = [
      /\.\.\//g,
      /\.\.%2F/gi,
      /\.\.%5C/gi,
      /\.\.\\/g,
    ];
    
    if (typeof input === 'string') {
      return pathPatterns.some(pattern => pattern.test(input));
    }
    
    return false;
  }
  
  // Comprehensive security check
  securityCheck(input) {
    const checks = {
      sql: false,
      xss: false,
      pathTraversal: false,
    };
    
    const checkInput = (value) => {
      if (typeof value === 'string') {
        checks.sql = checks.sql || this.hasSQLInjection(value);
        checks.xss = checks.xss || this.hasXSS(value);
        checks.pathTraversal = checks.pathTraversal || this.hasPathTraversal(value);
      } else if (typeof value === 'object' && value !== null) {
        Object.values(value).forEach(checkInput);
      } else if (Array.isArray(value)) {
        value.forEach(checkInput);
      }
    };
    
    checkInput(input);
    
    const threats = [];
    if (checks.sql) threats.push('SQL Injection');
    if (checks.xss) threats.push('XSS');
    if (checks.pathTraversal) threats.push('Path Traversal');
    
    return {
      safe: threats.length === 0,
      threats,
      checks,
    };
  }
}

// Create singleton instance
const validator = new RequestValidator();

export { validator };

// Middleware for Express/Next.js
export function validationMiddleware(schema, options = {}) {
  const {
    sanitize = true,
    securityCheck = true,
    location = 'body', // 'body', 'query', 'params', or 'request'
  } = options;
  
  return async (req, res, next) => {
    try {
      // Get data based on location
      let data;
      switch (location) {
        case 'body':
          data = req.body;
          break;
        case 'query':
          data = req.query;
          break;
        case 'params':
          data = req.params;
          break;
        case 'request':
          data = { body: req.body, query: req.query, params: req.params };
          break;
        default:
          data = req.body;
      }
      
      // Sanitize input
      if (sanitize) {
        data = validator.sanitize(data);
        
        // Update request with sanitized data
        switch (location) {
          case 'body':
            req.body = data;
            break;
          case 'query':
            req.query = data;
            break;
          case 'params':
            req.params = data;
            break;
          case 'request':
            req.body = data.body;
            req.query = data.query;
            req.params = data.params;
            break;
        }
      }
      
      // Security check
      if (securityCheck) {
        const security = validator.securityCheck(data);
        if (!security.safe) {
          monitoring.captureMessage('Security threat detected', 'warning', {
            tags: { security: 'validation' },
            extra: { threats: security.threats, data },
          });
          
          return res.status(400).json({
            error: 'Invalid input',
            message: 'Request contains potentially malicious content',
          });
        }
      }
      
      // Validate against schema
      const result = validator.validate(schema, data);
      
      if (!result.success) {
        return res.status(400).json({
          error: 'Validation failed',
          errors: result.errors,
        });
      }
      
      // Attach validated data to request
      req.validated = result.data;
      
      next();
    } catch (error) {
      monitoring.captureException(error, {
        tags: { middleware: 'validation' },
      });
      
      return res.status(500).json({
        error: 'Internal server error',
        message: 'Validation processing failed',
      });
    }
  };
}

// Helper for Next.js API routes
export async function validateRequest(request, schema, options = {}) {
  const {
    sanitize = true,
    securityCheck = true,
  } = options;
  
  try {
    // Parse request body if needed
    let body = {};
    if (request.body) {
      body = await request.json();
    }
    
    // Parse query parameters
    const url = new URL(request.url);
    const query = Object.fromEntries(url.searchParams);
    
    // Combine data
    let data = { body, query };
    
    // Sanitize
    if (sanitize) {
      data = validator.sanitize(data);
    }
    
    // Security check
    if (securityCheck) {
      const security = validator.securityCheck(data);
      if (!security.safe) {
        monitoring.captureMessage('Security threat detected', 'warning', {
          tags: { security: 'validation' },
          extra: { threats: security.threats, data },
        });
        
        return {
          valid: false,
          error: 'Request contains potentially malicious content',
          threats: security.threats,
        };
      }
    }
    
    // Validate
    const result = validator.validate(schema, data);
    
    if (!result.success) {
      return {
        valid: false,
        error: 'Validation failed',
        errors: result.errors,
      };
    }
    
    return {
      valid: true,
      data: result.data,
    };
  } catch (error) {
    monitoring.captureException(error);
    
    return {
      valid: false,
      error: 'Validation processing failed',
    };
  }
}