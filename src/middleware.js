import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import {
  buildLocalizedPath,
  defaultLocale,
  isLocaleExcludedPath,
  localeCookieName,
  normalizeLocale,
  pickPreferredLocale,
  splitLocaleFromPath,
  sourceLocale,
} from '@/lib/i18n';

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-this-in-production-niblah-2025'
);

async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    return null;
  }
}

function getTokenFromCookies(request) {
  const cookieHeader = request.headers.get('cookie');
  if (!cookieHeader) return null;
  
  const cookies = Object.fromEntries(
    cookieHeader.split('; ').map(cookie => cookie.split('='))
  );
  
  return cookies['auth-token'] || null;
}

function getLocaleFromCookies(request) {
  const cookieHeader = request.headers.get('cookie');
  if (!cookieHeader) return null;
  const cookies = Object.fromEntries(
    cookieHeader.split('; ').map(cookie => cookie.split('='))
  );
  return normalizeLocale(cookies[localeCookieName]);
}

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const { locale: localeFromPath, pathname: strippedPath } = splitLocaleFromPath(pathname);
  const isExcludedPath = isLocaleExcludedPath(strippedPath);

  if (localeFromPath === defaultLocale) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = strippedPath;
    return NextResponse.redirect(redirectUrl);
  }

  if (localeFromPath && isExcludedPath) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = strippedPath;
    return NextResponse.redirect(redirectUrl);
  }

  const authPath = strippedPath;
  
  // Protected routes that require authentication
  const protectedPaths = ['/admin/dashboard'];
  const isProtectedPath = protectedPaths.some(path => authPath.startsWith(path));
  
  if (isProtectedPath) {
    const token = getTokenFromCookies(request);
    
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
    
    const payload = await verifyToken(token);
    
    if (!payload) {
      const response = NextResponse.redirect(new URL('/admin/login', request.url));
      response.cookies.delete('auth-token');
      return response;
    }
    
    // Token is valid, allow access
    return NextResponse.next();
  }
  
  // If user is already logged in and tries to access login page, redirect to dashboard
  if (authPath === '/admin/login') {
    const token = getTokenFromCookies(request);
    if (token) {
      const payload = await verifyToken(token);
      if (payload) {
        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
      }
    }
  }

  const cookieLocale = getLocaleFromCookies(request);
  const preferredLocale = pickPreferredLocale({
    cookieLocale,
    acceptLanguage: request.headers.get('accept-language'),
  });
  const localeForPage = isExcludedPath ? sourceLocale : (localeFromPath || preferredLocale);

  if (!localeFromPath && !isExcludedPath && localeForPage !== defaultLocale) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = buildLocalizedPath(pathname, localeForPage);
    const response = NextResponse.redirect(redirectUrl);
    response.cookies.set(localeCookieName, localeForPage, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
    });
    return response;
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-locale', localeForPage);
  if (isExcludedPath) {
    requestHeaders.set('x-i18n-excluded', '1');
  }

  const response = (() => {
    if (localeFromPath) {
      const rewriteUrl = request.nextUrl.clone();
      rewriteUrl.pathname = strippedPath || '/';
      return NextResponse.rewrite(rewriteUrl, { request: { headers: requestHeaders } });
    }
    return NextResponse.next({ request: { headers: requestHeaders } });
  })();

  if (!isExcludedPath) {
    response.cookies.set(localeCookieName, localeForPage, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
    });
  }
  return response;
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)']
};
