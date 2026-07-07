from fastapi import FastAPI
from pydantic import BaseModel
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

from agents.analyst_agent import analyze_problem

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ProblemRequest(BaseModel):
    problem: str


@app.get("/")
def home():
    return {"message": "OpsPilot AI Running"}


@app.post("/analyze")
def analyze(req: ProblemRequest):

    try:

        if not req.problem.strip():
            return {
                "analysis": "Please provide a business problem."
            }

        # Single Gemini Call
        analysis = analyze_problem(req.problem)

        return {
            "analysis": analysis
        }

    except Exception as e:
        return {
            "analysis": f"Error generating analysis: {str(e)}"
        }