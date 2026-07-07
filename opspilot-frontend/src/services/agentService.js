// src/services/agentService.js

const API_URL = "http://127.0.0.1:5000";

export async function analyzeBusiness(problem) {
  try {
    const response = await fetch(`${API_URL}/analyze`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        problem,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to analyze business problem.");
    }

    return await response.json();
  } catch (error) {
    console.error("Analyze Error:", error);

    return {
      success: false,
      report:
        "Unable to connect to backend. Please make sure the backend server is running.",
    };
  }
}

export async function runAgent(agentName, problem) {
  try {
    const response = await fetch(`${API_URL}/agent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        agent: agentName,
        problem,
      }),
    });

    if (!response.ok) {
      throw new Error("Agent execution failed.");
    }

    return await response.json();
  } catch (error) {
    console.error("Agent Error:", error);

    return {
      success: false,
      output: `${agentName} is currently unavailable.`,
    };
  }
}

export async function runAllAgents(problem) {
  try {
    const response = await fetch(`${API_URL}/agents/run-all`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        problem,
      }),
    });

    if (!response.ok) {
      throw new Error("Unable to execute all agents.");
    }

    return await response.json();
  } catch (error) {
    console.error(error);

    return {
      success: false,
      outputs: [],
    };
  }
}