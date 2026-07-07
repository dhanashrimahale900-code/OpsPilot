import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const analyzeBusiness = async (problem) => {
  const response = await API.post("/analyze", {
    problem,
  });

  return response.data;
};

export const runSingleAgent = async (agent, problem) => {
  const response = await API.post("/agent", {
    agent,
    problem,
  });

  return response.data;
};

export const runAllAgents = async (problem) => {
  const response = await API.post("/agents/run-all", {
    problem,
  });

  return response.data;
};

export default API;