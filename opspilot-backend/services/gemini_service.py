import os
from dotenv import load_dotenv
from google import genai

load_dotenv()

API_KEY = os.getenv("GEMINI_API_KEY")

client = None
if API_KEY:
    client = genai.Client(api_key=API_KEY)


def ask_gemini(prompt: str) -> str:
    """
    Generic Gemini function used by all AI agents.
    """

    if not API_KEY:
        return "Error: GEMINI_API_KEY is missing."

    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )

        if hasattr(response, "text") and response.text:
            return response.text.strip()

        return "No response generated."

    except Exception as e:
        return f"Gemini API Error: {str(e)}"


def generate_business_analysis(problem: str) -> str:
    """
    Business Analysis Agent Prompt
    """

    prompt = f"""
You are a Senior Business Strategy Consultant.

Analyze this business problem:

{problem}

Return markdown only.

# Business Analysis Report

## Executive Summary

## Root Causes

## Business Risks

## Recommendations

## KPI Metrics

## Priority Actions
"""

    return ask_gemini(prompt)