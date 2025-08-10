import { SignJWT, jwtVerify } from 'jose';
import bcrypt from 'bcryptjs';

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key-change-in-production'
);

const ADMIN_USERNAME = 'Niblah';
const ADMIN_PASSWORD_HASH = '$2b$10$ddNl8mgFeaIabSDxoCQr9edN954bIlxyqhiQectK38D9uVzjLbOk.';

export async function hashPassword(password) {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword);
}

export async function verifyCredentials(username, password) {
  if (username !== ADMIN_USERNAME) {
    return false;
  }
  
  const passwordMatch = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);
  return passwordMatch;
}

export async function createToken(payload) {
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(secret);
  
  return token;
}

export async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    return null;
  }
}

export function getTokenFromCookies(request) {
  const cookieHeader = request.headers.get('cookie');
  if (!cookieHeader) return null;
  
  const cookies = Object.fromEntries(
    cookieHeader.split('; ').map(cookie => cookie.split('='))
  );
  
  return cookies['auth-token'] || null;
}