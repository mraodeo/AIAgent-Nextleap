# Deployment Plan: No-Backend Static Approach

This document outlines the deployment strategy for the AI App Review Pulse Agent. We are using the **"No-Backend" Static Approach**, which is highly efficient, completely free, and leverages GitHub Actions and Vercel.

## Architecture Overview

Instead of running a dedicated 24/7 API server for the Python backend, we use a static generation approach:
1. **GitHub Actions (Cron)**: Runs the Python AI Agent (`main.py`) on a weekly schedule.
2. **Data Commit**: The Python script scrapes reviews, generates the `PulseReport` JSON, and commits this `data.json` file back into the repository's frontend folder.
3. **Vercel (Frontend)**: Automatically detects the new commit on GitHub, rebuilds the React/Next.js dashboard, and serves the updated `data.json` to the users.

---

## Phase 1: GitHub Actions Setup (The "Backend")

We will automate the execution of the Python script using a GitHub Actions Cron Workflow.

### 1. Create the Workflow File
Create a new file at `.github/workflows/weekly-pulse.yml`.

### 2. Workflow Configuration
The workflow will:
- Trigger on a schedule (e.g., every Monday at 8:00 AM UTC) or manually via `workflow_dispatch`.
- Check out the repository code.
- Set up Python and install dependencies (`requirements.txt`).
- Run `src/main.py`.
- **Commit changes**: Use a step like `stefanzweifel/git-auto-commit-action` to commit the newly generated `frontend/public/data.json` back to the `main` branch.

### 3. Environment Variables (Secrets)
The following secrets must be added to the GitHub Repository Settings > Secrets and Variables > Actions:
- `GROQ_API_KEY`: For Langchain LLM reasoning.
- `TARGET_EMAIL`: For the Gmail MCP tool (if applicable).
- `GOOGLE_DOC_ID`: For the Docs MCP tool (if applicable).

---

## Phase 2: Vercel Setup (The Frontend)

Vercel will host the React/Next.js dashboard and handle continuous deployment.

### 1. Project Structure
Ensure the frontend code is located in a dedicated folder (e.g., `/frontend`) and the generated data is saved to `/frontend/public/data.json`.

### 2. Connect Vercel
1. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
2. Import the `AIAgent-Nextleap` repository from GitHub.
3. **Configure Project Settings**:
   - **Framework Preset**: Next.js or Vite (React).
   - **Root Directory**: `frontend` (or wherever your frontend code lives).
   - **Build Command**: Leave as default (`npm run build`).
4. Click **Deploy**.

### 3. Continuous Integration
Once connected, Vercel listens for commits to the `main` branch. Whenever GitHub Actions finishes running the Python script and commits the updated `data.json`, Vercel will automatically trigger a new deployment. Within seconds, the live dashboard will display the latest AI Pulse Report.

---

## Verification & Testing

1. **Manual Trigger**: Go to the Actions tab in GitHub and manually trigger the `weekly-pulse.yml` workflow to ensure it runs successfully and commits the `data.json`.
2. **Vercel Rebuild**: Verify that Vercel detects the commit and successfully completes a new build.
3. **Live Dashboard**: Visit the Vercel production URL and confirm the UI is displaying the latest data from `data.json`.
