import { NextResponse } from 'next/server';
import { ADMIN_SESSION_COOKIE } from '@/lib/auth';

export async function POST() {
  const res = NextResponse.json({ success: true });
  res.cookies.set(ADMIN_SESSION_COOKIE, '', {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  });
  return res;
}
