# OpsPilot AI 🚀

## Enterprise Multi-Agent Business Intelligence Platform

OpsPilot AI is an AI-powered multi-agent platform that helps businesses analyze operational challenges, identify root causes, assess risks, and generate actionable recommendations using Google's Gemini AI.

---

## Problem Statement

Businesses often struggle to quickly analyze operational issues such as declining sales, customer complaints, low productivity, and project delays. Manual analysis is time-consuming and inconsistent.

---

## Solution

OpsPilot AI uses multiple AI agents to automatically analyze business problems, identify root causes, estimate risks, and provide strategic recommendations.

---

## Architecture

                        User
                          │
                          ▼
              Next.js Frontend (Vercel)
                          │
                     REST API
                          │
                          ▼
                 Flask Backend (Render)
                          │
                          ▼
              Multi-Agent Orchestrator
                          │
      ┌─────────────┬──────────────┬──────────────┐
      ▼             ▼              ▼
 Analyst Agent   Risk Agent   Recommendation Agent
      └─────────────┴──────────────┘
                    ▼
               Report Agent
                    ▼
           Google Gemini 2.5 Flash
                    ▼
          Final Business Report

---

## Features

- Multi-Agent AI Architecture
- MCP (Model Context Protocol) Server
- Agent CLI
- AI Business Analysis
- Risk Assessment
- Root Cause Analysis
- Strategic Recommendations
- KPI Generation
- Cloud Deployment (Render + Vercel)
- Secure Environment Variables
-  Multi-Agent Orchestration
- FastMCP Server Integration
- Markdown Report Generation
- Health Monitoring Endpoint
- Production Deployment

## Security Features

- Input validation
- Prompt injection protection
- Request size limitation
- Environment variable based API key management
- CORS enabled

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | / | Backend status |
| GET | /health | Health check |
| POST | /analyze | Generate AI business analysis |

## Multi-Agent Workflow

1. User submits a business problem.
2. Flask API validates the request.
3. Orchestrator coordinates AI agents.
4. Analyst Agent performs business analysis.
5. Risk Agent identifies business risks.
6. Recommendation Agent generates KPIs and strategies.
7. Report Agent combines all outputs.
8. Final Markdown report is returned.

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Framer Motion

### Backend

- Python
- Flask
- Flask-CORS

### AI

- Google Gemini API

### Deployment

- Vercel (Frontend)
- Render (Backend)

---

## Setup

### Clone Repository

```bash
git clone https://github.com/dhanashrimahale900-code/OpsPilot.git


# 📸 Screenshots

## 🏠 Home Page
![Home](screenshots/home.png)

## 🤖 AI Features
![AI Features](screenshots/ai%20features.png)

## 📊 Business Analysis
![Analysis](screenshots/analysis.png)

## 🧠 AI Analysis Result 1
![Result 1](screenshots/result1.png)

## 📈 AI Analysis Result 2
![Result 2](screenshots/result2.png)

## 📋 AI Analysis Result 3
![Result 3](screenshots/result3.png)

## ⚙️ Backend API
![Backend](screenshots/backend.png)

## 🏗️ System Architecture
![Architecture](screenshots/Architecture.png)

## 🔄 How OpsPilot Works
![Workflow](screenshots/how%20opspilot%20work.png)

## 📄 Footer
![Footer](screenshots/footer.png)


## 🌐 Live Demo

Frontend: 
https://business-ai-opspilot.vercel.app

Backend:  
https://opspilot-ftc0.onrender.com

GitHub Repository:  
https://github.com/dhanashrimahale900-code/OpsPilot

## Future Scope

- Authentication & User Accounts
- Business Analytics Dashboard
- PDF & Excel Report Export
- Real-time Collaboration
- Additional AI Agents
- Database Integration

## 🎯 Kaggle Capstone Requirements

This project demonstrates the following concepts from the AI Agents Intensive Vibe Coding course:

- ✅ AI Agent-based business analysis workflow
- ✅ Secure API key management using environment variables
- ✅ Cloud deployment using Vercel and Render
- ✅ REST API communication between frontend and backend
- ✅ Google Gemini AI integration for intelligent reasoning
