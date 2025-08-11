import { NextRequest, NextResponse } from 'next/server';
import { createAdminUser, getAdminCollection } from '@/lib/admin';
import { verifyAdminJwt } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    // Verify admin session
    const token = req.cookies.get('admin_session')?.value;
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const payload = await verifyAdminJwt(token);
    if (!payload || payload.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { email, password } = await req.json();
    
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    if (password.length < 6) {
      return NextResponse.json({ error: 'Password must be at least 6 characters' }, { status: 400 });
    }

    const success = await createAdminUser(email, password);
    
    if (success) {
      return NextResponse.json({ 
        success: true, 
        message: 'Admin user created successfully' 
      });
    } else {
      return NextResponse.json({ error: 'Admin user already exists' }, { status: 409 });
    }
    
  } catch (err) {
    console.error('Error creating admin user:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    // Verify admin session
    const token = req.cookies.get('admin_session')?.value;
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const payload = await verifyAdminJwt(token);
    if (!payload || payload.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const collection = await getAdminCollection();
    const admins = await collection.find(
      {}, 
      { projection: { passwordHash: 0 } }
    ).toArray();

    return NextResponse.json({ 
      success: true, 
      admins: admins.map(admin => ({
        ...admin,
        _id: admin._id?.toString()
      }))
    });
    
  } catch (err) {
    console.error('Error fetching admin users:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
