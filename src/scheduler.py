import sys
import os
import time
import asyncio
import schedule

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from src.main import run_pulse_agent

def job():
    print("⏰ Executing scheduled weekly pulse agent job...")
    # We use weeks_back=1 to only fetch the delta (1 week's worth of new reviews)
    asyncio.run(run_pulse_agent(weeks_back=1, max_count=300))
    print("✅ Scheduled job completed.\n")

def start_scheduler():
    print("🚀 Initializing Groww App Review Pulse Agent Scheduler...")
    
    # Schedule the job every week. 
    # Example to run on a specific day: schedule.every().monday.at("09:00").do(job)
    schedule.every(1).weeks.do(job)
    
    print("⏳ Scheduler is running. Press Ctrl+C to exit.")
    
    # Run the job immediately once on startup
    job()
    
    while True:
        schedule.run_pending()
        time.sleep(60) # Wait one minute before checking the schedule again

if __name__ == "__main__":
    start_scheduler()
