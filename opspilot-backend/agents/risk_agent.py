from services.gemini_service import ask_gemini

def analyze_risks(problem):
    prompt = f"""
    Business Problem:

    {problem}

    Identify business risks.
    """
    
    return ask_gemini(prompt)