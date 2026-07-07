from flask import jsonify


def validate_problem(data):
    """
    Validate incoming business problem request.
    """

    if not data:
        return False, "Request body is missing."

    problem = data.get("problem", "").strip()

    if not problem:
        return False, "Business problem is required."

    if len(problem) < 10:
        return False, "Business problem should contain at least 10 characters."

    return True, problem


def success_response(data, message="Success"):
    """
    Standard success response.
    """
    return jsonify({
        "success": True,
        "message": message,
        "data": data
    })


def error_response(message, status_code=400):
    """
    Standard error response.
    """
    return jsonify({
        "success": False,
        "message": message
    }), status_code


def clean_text(text):
    """
    Remove extra spaces from AI output.
    """
    if not text:
        return ""

    return " ".join(text.split())