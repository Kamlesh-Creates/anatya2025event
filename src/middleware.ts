import { NextResponse, NextRequest } from 'next/server';
import { ADMIN_SESSION_COOKIE, verifyAdminJwt } from '@/lib/auth';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Public paths
  const publicPaths = [
    '/',
    '/register',
    '/thankyou',
    '/api/register',
    '/api/test-db',
    '/admin/login',
  ];
  if (publicPaths.includes(pathname) || pathname.startsWith('/_next')) {
    return NextResponse.next();
  }

  const protectedPaths = ['/admin', '/api/registrations'];
  const isProtected = protectedPaths.some((p) => pathname === p || pathname.startsWith(p));

  if (!isProtected) {
    return NextResponse.next();
  }

  const token = req.cookies.get(ADMIN_SESSION_COOKIE)?.value;
  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = '/admin/login';
    url.searchParams.set('redirect', pathname);
    return NextResponse.redirect(url);
  }

  const payload = await verifyAdminJwt(token);
  if (!payload) {
    const url = req.nextUrl.clone();
    url.pathname = '/admin/login';
    url.searchParams.set('redirect', pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/registrations'],
};
