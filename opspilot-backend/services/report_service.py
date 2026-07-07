from datetime import datetime


def generate_combined_report(agent_outputs):
    """
    Generate a combined business report from all AI agent outputs.
    """

    report = []
    report.append("=" * 70)
    report.append("OpsPilot AI - Enterprise Business Intelligence Report")
    report.append("=" * 70)
    report.append(f"Generated On: {datetime.now().strftime('%d-%m-%Y %H:%M:%S')}")
    report.append("")

    for agent in agent_outputs:
        report.append("-" * 70)
        report.append(f"Agent: {agent.get('name', 'Unknown')}")
        report.append("-" * 70)
        report.append(agent.get("output", "No output available."))
        report.append("")

    report.append("=" * 70)
    report.append("End of Report")
    report.append("=" * 70)

    return "\n".join(report)