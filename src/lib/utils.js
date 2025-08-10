export function generateSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim()
    .replace(/^-+|-+$/g, '');
}

export function generateUniqueSlug(baseSlug) {
  const timestamp = Date.now().toString(36);
  return `${baseSlug}-${timestamp}`;
}

export function getClientIp(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  const real = request.headers.get('x-real-ip');
  const ip = forwarded?.split(',')[0] || real || 'unknown';
  return ip.trim();
}

export function getUserAgent(request) {
  return request.headers.get('user-agent') || 'unknown';
}

export function detectDeviceType(userAgent) {
  const ua = userAgent.toLowerCase();
  if (/mobile|android|iphone/i.test(ua)) return 'mobile';
  if (/tablet|ipad/i.test(ua)) return 'tablet';
  return 'desktop';
}

export function formatResponse(data, meta = {}) {
  return {
    success: true,
    data,
    meta,
    timestamp: new Date().toISOString()
  };
}

export function formatError(message, code = 400) {
  return {
    success: false,
    error: {
      message,
      code
    },
    timestamp: new Date().toISOString()
  };
}