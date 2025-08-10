const attempts = new Map();
const BLOCK_DURATION = 15 * 60 * 1000; // 15 minutes
const MAX_ATTEMPTS = 3;

export function checkRateLimit(identifier) {
  const now = Date.now();
  const userAttempts = attempts.get(identifier);
  
  if (!userAttempts) {
    return { allowed: true, remainingAttempts: MAX_ATTEMPTS };
  }
  
  if (userAttempts.blockedUntil && userAttempts.blockedUntil > now) {
    const remainingTime = Math.ceil((userAttempts.blockedUntil - now) / 1000 / 60);
    return { 
      allowed: false, 
      remainingAttempts: 0,
      blockedMinutes: remainingTime,
      message: `Too many failed attempts. Please try again in ${remainingTime} minutes.`
    };
  }
  
  if (userAttempts.blockedUntil && userAttempts.blockedUntil <= now) {
    attempts.delete(identifier);
    return { allowed: true, remainingAttempts: MAX_ATTEMPTS };
  }
  
  const remaining = MAX_ATTEMPTS - userAttempts.count;
  return { 
    allowed: true, 
    remainingAttempts: remaining
  };
}

export function recordFailedAttempt(identifier) {
  const now = Date.now();
  const userAttempts = attempts.get(identifier) || { count: 0 };
  
  userAttempts.count++;
  userAttempts.lastAttempt = now;
  
  if (userAttempts.count >= MAX_ATTEMPTS) {
    userAttempts.blockedUntil = now + BLOCK_DURATION;
  }
  
  attempts.set(identifier, userAttempts);
  
  return {
    attemptCount: userAttempts.count,
    isBlocked: userAttempts.count >= MAX_ATTEMPTS,
    remainingAttempts: Math.max(0, MAX_ATTEMPTS - userAttempts.count)
  };
}

export function clearAttempts(identifier) {
  attempts.delete(identifier);
}

export function getClientIdentifier(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown';
  return ip;
}