from agents.analyst_agent import analyze_problem
from agents.risk_agent import analyze_risks
from agents.recommendation_agent import generate_recommendations
from agents.report_agent import create_report


def run_multi_agent_workflow(problem):
    """
    Orchestrates all AI agents.
    """

    analysis = analyze_problem(problem)
    risks = analyze_risks(problem)
    recommendations = generate_recommendations(problem)

    report = create_report(
        analysis,
        risks,
        recommendations
    )

    return report