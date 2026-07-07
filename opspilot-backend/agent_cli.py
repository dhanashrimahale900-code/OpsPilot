import argparse

from agents.analyst_agent import analyze_problem
from agents.risk_agent import analyze_risks
from agents.recommendation_agent import generate_recommendations
from agents.report_agent import create_report


def main():
    parser = argparse.ArgumentParser(
        description="OpsPilot AI Agent CLI"
    )

    parser.add_argument(
        "--problem",
        required=True,
        help="Business problem to analyze"
    )

    args = parser.parse_args()

    print("\n🚀 OpsPilot AI Agent CLI")
    print("=" * 50)

    analysis = analyze_problem(args.problem)
    risks = analyze_risks(args.problem)
    recommendations = generate_recommendations(args.problem)

    report = create_report(
        analysis,
        risks,
        recommendations
    )

    print(report)


if __name__ == "__main__":
    main()