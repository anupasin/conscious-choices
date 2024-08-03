// src/app/api/products/route.ts

import { NextResponse } from 'next/server';
import { dummyProducts } from '@/lib/dummyData';

export async function GET() {
  // In a real application, you would fetch this data from a database
  return NextResponse.json(dummyProducts);
}