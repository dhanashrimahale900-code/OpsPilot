import os
from dotenv import load_dotenv
from google import genai

load_dotenv()

API_KEY = os.getenv("GEMINI_API_KEY")

client = None

if API_KEY:
    client = genai.Client(api_key=API_KEY)


def generate_business_analysis(problem: str) -> str:
    """
    Generate AI business analysis using Gemini.
    """

    print("API KEY FOUND:", bool(API_KEY))

    if not API_KEY:
        return "Error: GEMINI_API_KEY is not configured."

    prompt = f"""
You are a Senior Business Strategy Consultant.

Analyze the following business problem:

"{problem}"

Return the response ONLY in GitHub Markdown.

Use exactly this structure:

# 📊 Business Analysis Report

## Executive Summary
Write a concise summary.

## Root Causes
- Cause 1
- Cause 2
- Cause 3
- Cause 4

## Business Risks
- Risk 1
- Risk 2
- Risk 3
- Risk 4

## Recommendations
- Recommendation 1
- Recommendation 2
- Recommendation 3
- Recommendation 4

## KPI Metrics

| KPI | Description |
|------|-------------|
| Revenue Growth | ... |
| Customer Retention | ... |
| Conversion Rate | ... |
| Profit Margin | ... |

## Priority Actions
1. First action
2. Second action
3. Third action

Rules:
- Return ONLY markdown.
- Use proper headings (#, ##).
- Use bullet lists.
- Use the markdown table.
- Do not wrap the response in ```markdown``` code fences.
"""

    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )

        print("Gemini Response:", response)
        print("Gemini Text:", getattr(response, "text", None))

        if hasattr(response, "text") and response.text:
            return response.text

        return "No response generated."

    except Exception as e:
        print("Gemini Error:", e)
        return f"Gemini API Error: {str(e)}"
        