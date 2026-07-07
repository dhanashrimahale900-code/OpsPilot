from fastmcp import FastMCP
from services.gemini_service import generate_business_analysis

mcp = FastMCP("OpsPilot MCP Server")


@mcp.tool()
def analyze_business(problem: str) -> str:
    """
    Analyze a business problem using OpsPilot AI.
    """
    return generate_business_analysis(problem)


if __name__ == "__main__":
    mcp.run()