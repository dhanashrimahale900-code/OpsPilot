from flask import Blueprint, request

from services.orchestrator import run_multi_agent_workflow
from utils.helpers import (
    validate_problem,
    success_response,
    error_response
)

analyze_bp = Blueprint("analyze", __name__)


@analyze_bp.route("/analyze", methods=["POST"])
def analyze():
    try:
        data = request.get_json()

        valid, result = validate_problem(data)

        if not valid:
            return error_response(result)

        problem = result

        report = run_multi_agent_workflow(problem)

        return success_response(
            {
                "problem": problem,
                "report": report
            },
            "Analysis completed successfully."
        )

    except Exception as e:
        return error_response(str(e))