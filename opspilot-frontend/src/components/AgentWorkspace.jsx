import { useState } from "react";
import AgentCard from "./AgentCard";
import AgentOutput from "./AgentOutput";
import AgentToolbar from "./AgentToolbar";
import { agents } from "../data/agents";

export default function AgentWorkspace() {
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [output, setOutput] = useState("");

  const runAgent = (agent) => {
    setSelectedAgent(agent);

    setOutput(
`✅ ${agent.name} Finished

Role:
${agent.role}

Description:
${agent.description}

Status:
Completed Successfully`
    );
  };

  return (
    <section
      style={{
        padding: "70px 20px",
        maxWidth: "1300px",
        margin: "auto",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: 40,
          fontSize: 34,
          color: "white",
        }}
      >
        AI Agent Workspace
      </h2>

      <AgentToolbar />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: 20,
          marginTop: 30,
        }}
      >
        {agents.map((agent) => (
          <AgentCard
            key={agent.id}
            agent={agent}
            onRun={() => runAgent(agent)}
          />
        ))}
      </div>

      <AgentOutput
        selectedAgent={selectedAgent}
        output={output}
      />
    </section>
  );
}