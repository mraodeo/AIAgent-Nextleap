import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from fastapi import FastAPI, HTTPException
import json

from src.main import run_pulse_agent

app = FastAPI(title="InsightAgent Backend")

# In-memory storage for the latest dashboard data
latest_data = None

# On startup, try to load the existing data.json so the dashboard isn't empty initially
frontend_dir = os.path.join(os.path.dirname(__file__), '..', 'frontend', 'public')
json_path = os.path.join(frontend_dir, 'data.json')
if os.path.exists(json_path):
    try:
        with open(json_path, 'r', encoding='utf-8') as f:
            latest_data = json.load(f)
            print("[INFO] Successfully loaded initial data from data.json")
    except Exception as e:
        print(f"[WARNING] Failed to load existing data: {e}")

@app.get("/data")
def get_data():
    if latest_data:
        return latest_data
    raise HTTPException(status_code=404, detail="No data available yet. Please run execute first.")

@app.post("/execute")
async def execute_agent():
    global latest_data
    try:
        print("[INFO] Execution triggered via API")
        new_data = await run_pulse_agent()
        
        if new_data:
            latest_data = new_data
            return {"success": True, "message": "Pipeline executed successfully"}
        else:
            return {"success": True, "message": "No new reviews found, pipeline aborted."}
            
    except Exception as e:
        import traceback
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))
