import { NextResponse } from 'next/server';

const PYTHON_BACKEND_URL = process.env.PYTHON_BACKEND_URL || 'http://127.0.0.1:8000';

export async function GET() {
  try {
    const res = await fetch(`${PYTHON_BACKEND_URL}/data`, {
      headers: {
        'Content-Type': 'application/json',
      },
      // Avoid caching the data request
      cache: 'no-store'
    });
    
    if (!res.ok) {
      if (res.status === 404) {
         return NextResponse.json({ error: "No data available yet" }, { status: 404 });
      }
      throw new Error(`Backend returned status ${res.status}`);
    }
    
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Data fetch error:", error);
    return NextResponse.json(
      { error: "Failed to connect to Python backend." },
      { status: 500 }
    );
  }
}
