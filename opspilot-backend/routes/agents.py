from flask import Blueprint, request

from services.agent_service import (
    run_agent,
    run_all_agents
)

from services.report_service import generate_combined_report

from utils.helpers import (
    validate_problem,
    success_response,
    error_response
)

agents_bp = Blueprint("agents", __name__)


# ----------------------------
# Run Single Agent
# ----------------------------
@agents_bp.route("/agent", methods=["POST"])
def single_agent():

    data = request.get_json()

    if not data:
        return error_response("Request body is missing.")

    agent_name = data.get("agent")

    valid, result = validate_problem(data)

    if not valid:
        return error_response(result)

    problem = result

    response = run_agent(agent_name, problem)

    return success_response(
        response,
        message=f"{agent_name} completed successfully."
    )


# ----------------------------
# Run All Agents
# ----------------------------
@agents_bp.route("/agents/run-all", methods=["POST"])
def all_agents():

    data = request.get_json()

    valid, result = validate_problem(data)

    if not valid:
        return error_response(result)

    problem = result

    outputs = run_all_agents(problem)

    report = generate_combined_report(outputs)

    return success_response(
        {
            "outputs": outputs,
            "combined_report": report
        },
        message="All AI agents completed successfully."
    )


# ----------------------------
# Health Check
# ----------------------------
@agents_bp.route("/agents", methods=["GET"])
def health():

    return success_response(
        {
            "status": "running"
        },
        message="Agents API is running."
    )