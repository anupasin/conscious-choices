// src/app/api/register/route.ts

import { NextResponse } from 'next/server';
import { createUser, findUserByEmail } from '@/lib/users';

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    // Check if user already exists
    const existingUser = findUserByEmail(email);

    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    // Create the user
    await createUser(name, email, password);

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ message: 'An error occurred during registration' }, { status: 500 });
  }
}