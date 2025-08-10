import { NextRequest, NextResponse } from 'next/server';
import { getRegistrationsCollection } from '../../../lib/mongodb';

export async function GET(request: NextRequest) {
  try {
    // Middleware protects this route via admin session cookie.
    // Keep legacy token support if provided (optional, not required).
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');
    if (token) {
      // no-op: accepted for legacy compatibility
    }

    const collection = await getRegistrationsCollection();
    const registrations = await collection.find({}).sort({ createdAt: -1 }).toArray();

    return NextResponse.json({
      success: true,
      count: registrations.length,
      data: registrations,
      timestamp: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
