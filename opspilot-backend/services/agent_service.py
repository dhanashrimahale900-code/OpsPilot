from services.gemini_service import generate_business_analysis

# Agent roles and prompts
AGENTS = {
    "CEO": "You are the CEO of a company. Provide strategic business recommendations.",
    "Finance": "You are a Finance Manager. Analyze the financial impact and suggest improvements.",
    "Marketing": "You are a Marketing Expert. Suggest marketing strategies and customer acquisition ideas.",
    "HR": "You are an HR Manager. Recommend workforce and organizational improvements.",
    "Operations": "You are an Operations Manager. Suggest operational efficiency improvements.",
    "Risk": "You are a Risk Analyst. Identify potential risks and mitigation strategies."
}


def run_agent(agent_name, problem):
    """
    Run a single AI agent.
    """

    role_prompt = AGENTS.get(agent_name)

    if not role_prompt:
        return {
            "success": False,
            "message": f"Agent '{agent_name}' not found."
        }

    prompt = f"""
{role_prompt}

Business Problem:
{problem}

Provide:
1. Analysis
2. Recommendations
3. Action Plan
"""

    result = generate_business_analysis(prompt)

    return {
        "success": True,
        "agent": agent_name,
        "role": role_prompt,
        "output": result
    }


def run_all_agents(problem):
    """
    Run all AI agents and collect outputs.
    """

    outputs = []

    for agent in AGENTS:
        response = run_agent(agent, problem)

        outputs.append({
            "name": agent,
            "output": response["output"]
        })

    return outputs