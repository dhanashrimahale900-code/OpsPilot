from services.gemini_service import ask_gemini


def generate_recommendations(problem):
    """
    Recommendation Agent

    Responsible for generating strategic recommendations
    and actionable business improvement plans.
    """

    prompt = f"""
You are the Recommendation Agent in an Enterprise Multi-Agent Business Intelligence System.

Business Problem:
{problem}

Your ONLY responsibility is to generate business recommendations.

Return the response in GitHub Markdown.

# Recommendation Agent Report

## Strategic Recommendations
- Recommendation 1
- Recommendation 2
- Recommendation 3

## KPI Metrics
- KPI 1
- KPI 2
- KPI 3

## Priority Actions
1. Action 1
2. Action 2
3. Action 3

## Expected Business Outcome
Briefly explain the expected improvement.

Do NOT perform:
- Root Cause Analysis
- Risk Assessment

Those are handled by other agents.
"""

    return ask_gemini(prompt)