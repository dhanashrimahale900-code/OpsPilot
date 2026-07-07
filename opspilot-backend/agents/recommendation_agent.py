from services.gemini_service import ask_gemini

def generate_recommendations(problem):
    prompt = f"""
    Problem:

    {problem}

    Give:
    - Recommendations
    - KPI Metrics
    - Priority Actions
    """
    return ask_gemini(prompt)