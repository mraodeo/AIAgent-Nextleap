import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const execAsync = promisify(exec);

export async function POST() {
  try {
    // Determine the path to main.py. Since this runs in the 'frontend' directory,
    // the root 'src/main.py' is one level up.
    const pythonScriptPath = path.resolve(process.cwd(), '../src/main.py');
    
    // Use the virtual environment's Python executable if on Windows, otherwise use system python3
    const isWindows = process.platform === 'win32';
    let command;
    
    if (isWindows) {
      const venvPythonPath = path.resolve(process.cwd(), '../venv/Scripts/python.exe');
      command = `"${venvPythonPath}" "${pythonScriptPath}"`;
    } else {
      // For Vercel (Linux), use python3. 
      // Note: Vercel's Node environment has python3, but dependencies must be installed.
      command = `python3 "${pythonScriptPath}"`;
    }
    
    try {
       const { stdout, stderr } = await execAsync(command);
       console.log("Python stdout:", stdout);
       if (stderr) console.error("Python stderr:", stderr);
       
       // Write logs to a file so Antigravity can read them
       const fs = require('fs');
       const path = require('path');
       const os = require('os');
       fs.writeFileSync(path.join(os.tmpdir(), 'logs.txt'), `STDOUT:\n${stdout}\n\nSTDERR:\n${stderr}`);
       
       // Python catches the error and prints it, so we need to parse stdout for failures
       if (stdout.includes("Failed to append to docs") || stdout.includes("Failed to send email") || stdout.includes("No new reviews found")) {
         throw new Error(`Pipeline failed or aborted. Check logs: ${stdout.substring(0, 100)}...`);
       }
       
       return NextResponse.json({ success: true, message: "Pipeline executed successfully", logs: stdout });
    } catch (e: any) {
       console.error("Python execution failed:", e);
       const fs = require('fs');
       const path = require('path');
       const os = require('os');
       fs.writeFileSync(path.join(os.tmpdir(), 'logs.txt'), `CRASH:\n${e.message}\n\nSTDOUT:\n${e.stdout || ''}\n\nSTDERR:\n${e.stderr || ''}`);
       
       // Return the real error to the frontend
       return NextResponse.json(
         { success: false, error: e.message || "Failed to execute python script" },
         { status: 500 }
       );
    }

  } catch (error: any) {
    console.error("Execute API Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to execute synthesis pipeline." },
      { status: 500 }
    );
  }
}
