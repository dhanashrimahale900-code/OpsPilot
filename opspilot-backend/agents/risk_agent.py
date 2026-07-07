from services.gemini_service import ask_gemini


def analyze_risks(problem):
    """
    Risk Agent

    Evaluates operational, financial, customer,
    compliance and strategic risks.
    """

    prompt = f"""
You are a Senior Enterprise Risk Consultant.

Analyze the following business problem.

Business Problem:
{problem}

Return the response ONLY in GitHub Markdown.

Use exactly this format:

# ⚠️ Business Risk Assessment

## Operational Risks
- Risk 1
- Risk 2

## Financial Risks
- Risk 1
- Risk 2

## Customer Risks
- Risk 1
- Risk 2

## Strategic Risks
- Risk 1
- Risk 2

## Risk Severity

| Risk | Severity |
|------|----------|
| Risk 1 | High |
| Risk 2 | Medium |

## Mitigation Plan

1. Action 1
2. Action 2
3. Action 3

Rules:
- Use Markdown.
- Be concise.
- Focus on enterprise business risks.
"""

    return ask_gemini(prompt)