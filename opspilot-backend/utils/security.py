import re

MAX_INPUT_LENGTH = 1000

BLOCKED_PATTERNS = [
    r"<script.*?>.*?</script>",
    r"javascript:",
    r"DROP TABLE",
    r"DELETE FROM",
    r"--",
    r";"
]


def validate_input(text):
    if not text:
        return False, "Problem statement is required."

    if len(text) > MAX_INPUT_LENGTH:
        return False, "Input exceeds maximum length."

    for pattern in BLOCKED_PATTERNS:
        if re.search(pattern, text, re.IGNORECASE):
            return False, "Potentially unsafe input detected."

    return True, text.strip()