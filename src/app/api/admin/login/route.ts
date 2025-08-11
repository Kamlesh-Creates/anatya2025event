import { NextRequest, NextResponse } from 'next/server';
import { createAdminJwt, ADMIN_SESSION_COOKIE, getSessionCookieOptions } from '@/lib/auth';
import { verifyAdminCredentials } from '@/lib/admin';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    // Verify credentials against MongoDB
    const admin = await verifyAdminCredentials(email, password);
    
    if (!admin) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Create JWT token
    const token = await createAdminJwt(admin.email);
    
    // Set session cookie
    const res = NextResponse.json({ 
      success: true, 
      message: 'Login successful',
      admin: {
        email: admin.email,
        role: admin.role
      }
    });
    
    res.cookies.set(ADMIN_SESSION_COOKIE, token, getSessionCookieOptions());
    return res;
    
  } catch (err) {
    console.error('Admin login error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
