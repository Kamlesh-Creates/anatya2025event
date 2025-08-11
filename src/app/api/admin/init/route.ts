import { NextResponse } from 'next/server';
import { initializeDefaultAdmin } from '@/lib/admin';

export async function POST() {
  try {
   
    await initializeDefaultAdmin();
    
    return NextResponse.json({ 
      success: true, 
      message: 'Default admin user initialized successfully' 
    });
  } catch (err) {
    console.error('Error initializing admin:', err);
    return NextResponse.json({ error: 'Failed to initialize admin' }, { status: 500 });
  }
}

export async function GET() {
  try {
    // Initialize default admin user
    await initializeDefaultAdmin();
    
    return NextResponse.json({ 
      success: true, 
      message: 'Default admin user initialized successfully' 
    });
  } catch (err) {
    console.error('Error initializing admin:', err);
    return NextResponse.json({ error: 'Failed to initialize admin' }, { status: 500 });
  }
}
