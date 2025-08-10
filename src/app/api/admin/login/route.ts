import { NextRequest, NextResponse } from 'next/server';
import { createAdminJwt, ADMIN_SESSION_COOKIE, getSessionCookieOptions } from '@/lib/auth';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@anantya2025.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const token = await createAdminJwt(email);
    const res = NextResponse.json({ success: true });
    res.cookies.set(ADMIN_SESSION_COOKIE, token, getSessionCookieOptions());
    return res;
  } catch (e) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
