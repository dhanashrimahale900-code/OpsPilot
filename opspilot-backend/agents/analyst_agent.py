from services.gemini_service import generate_business_analysis

def analyze_problem(problem):

    prompt = f"""
You are a senior Business Strategy Consultant.

Analyze the following business problem:

{problem}

Return the response ONLY in GitHub Markdown.

Use exactly this format:

# 📊 Business Analysis Report

## Executive Summary

## Root Causes

- Point 1
- Point 2

## Business Risks

- Point 1
- Point 2

## Recommendations

- Point 1
- Point 2

## KPI Metrics

- KPI 1
- KPI 2

## Priority Actions

1. Action 1
2. Action 2
3. Action 3

Rules:
- Use proper Markdown headings (# and ##).
- Use bullet points.
- Use **bold** where appropriate.
- Do NOT return plain text.
"""

    return generate_business_analysis(prompt)