from services.gemini_service import generate_business_analysis


def analyze_problem(problem):
    """
    Analyst Agent
    Responsible for understanding the business problem
    and identifying root causes.
    """

    prompt = f"""
You are the Analyst Agent in a Multi-Agent Business Intelligence System.

Your ONLY responsibility is to analyze the business problem.

Business Problem:
{problem}

Return the result in GitHub Markdown.

# Analyst Agent Report

## Executive Summary
Provide a short overview.

## Problem Analysis
Explain what is happening.

## Possible Root Causes
- Cause 1
- Cause 2
- Cause 3

## Business Impact
- Impact 1
- Impact 2

Do NOT provide:
- Risk assessment
- Recommendations
- Action plan

Those will be handled by other agents.
"""

    return generate_business_analysis(prompt)