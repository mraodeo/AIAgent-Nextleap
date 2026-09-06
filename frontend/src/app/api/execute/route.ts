import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const PYTHON_BACKEND_URL = process.env.PYTHON_BACKEND_URL || 'http://127.0.0.1:8000';

export async function POST() {
  try {
    const res = await fetch(`${PYTHON_BACKEND_URL}/execute`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // Since execution can take longer than default timeout
      // Note: Vercel still has a hard timeout limit for the overall request.
      cache: 'no-store'
    });
    
    if (!res.ok) {
       const errorData = await res.json().catch(() => ({}));
       throw new Error(errorData.detail || `Backend execution failed with status ${res.status}`);
    }
    
    const result = await res.json();
    return NextResponse.json(result);

  } catch (error: any) {
    console.error("Execute API Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to execute synthesis pipeline." },
      { status: 500 }
    );
  }
}
