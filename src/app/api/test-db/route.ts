// Simple test endpoint to check MongoDB connection
import { NextResponse } from 'next/server';
import { getDatabase } from '../../../lib/mongodb';

export async function GET() {
  try {
    console.log('🔍 Testing MongoDB connection...');
    console.log('📋 MONGODB_URI exists:', !!process.env.MONGODB_URI);
    console.log('🔗 MONGODB_URI prefix:', process.env.MONGODB_URI?.substring(0, 25) + '...');
    
    const db = await getDatabase();
    console.log('✅ Connected to database:', db.databaseName);
    
    // Try to list collections
    const collections = await db.listCollections().toArray();
    console.log('📦 Available collections:', collections.map(c => c.name));
    
    return NextResponse.json({ 
      success: true, 
      database: db.databaseName,
      collections: collections.map(c => c.name),
      message: 'MongoDB connection successful',
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}
