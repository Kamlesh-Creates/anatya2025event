import { NextRequest, NextResponse } from 'next/server';
import { getRegistrationsCollection } from '@/lib/mongodb';
import { Registration, RegistrationInput } from '@/types/registration';

export async function POST(request: NextRequest) {
  try {
    const body: RegistrationInput = await request.json();
    
    // Validate required fields
    const { fullName, email, phoneNumber, department, yearOfStudy } = body;
    
    if (!fullName || !email || !phoneNumber || !department || !yearOfStudy) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone number (10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber.replace(/\s/g, ''))) {
      return NextResponse.json(
        { error: 'Phone number must be 10 digits' },
        { status: 400 }
      );
    }

    // Validate full name length
    if (fullName.trim().length < 2) {
      return NextResponse.json(
        { error: 'Full name must be at least 2 characters' },
        { status: 400 }
      );
    }

    // Connect to MongoDB and save registration
    const collection = await getRegistrationsCollection();
    
    // Check if email already exists
    const existingRegistration = await collection.findOne({ email: email.toLowerCase().trim() });
    if (existingRegistration) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      );
    }

    // Generate unique registration ID
    const registrationId = `ANANTYA2025-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    
    // Prepare registration data
    const registrationData: Omit<Registration, '_id'> = {
      fullName: fullName.trim(),
      email: email.toLowerCase().trim(),
      phoneNumber: phoneNumber.replace(/\s/g, ''),
      department: department.trim(),
      yearOfStudy,
      registrationId,
      createdAt: new Date(),
      updatedAt: new Date(),
      status: 'active'
    };

    // Save to database
    const result = await collection.insertOne(registrationData);
    
    console.log('Registration saved to database:', {
      insertedId: result.insertedId,
      registrationId,
      email: email.toLowerCase().trim()
    });

    return NextResponse.json(
      { 
        message: 'Registration successful',
        registrationId,
        status: 'success',
        data: {
          ...registrationData,
          _id: result.insertedId
        }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  );
}
