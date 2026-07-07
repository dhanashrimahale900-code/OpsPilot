import { motion } from "framer-motion";

export default function AgentCard({ agent, runAgent }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(20px)",
        borderRadius: "20px",
        padding: "24px",
        position: "relative",
        overflow: "hidden",
        minHeight: "260px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: "-60px",
          right: "-60px",
          width: "140px",
          height: "140px",
          borderRadius: "50%",
          background:
            "linear-gradient(135deg,#22d3ee,#3b82f6,#8b5cf6)",
          filter: "blur(70px)",
          opacity: 0.4,
        }}
      />

      <div style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            fontSize: "48px",
            marginBottom: "15px",
          }}
        >
          {agent.icon}
        </div>

        <h3
          style={{
            color: "#fff",
            fontSize: "22px",
            fontWeight: "700",
            marginBottom: "10px",
          }}
        >
          {agent.name}
        </h3>

        <p
          style={{
            color: "#b4b4b4",
            fontSize: "14px",
            lineHeight: "1.7",
            minHeight: "80px",
          }}
        >
          {agent.description}
        </p>
      </div>

      <motion.button
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={runAgent}
        style={{
          marginTop: "20px",
          padding: "12px",
          width: "100%",
          border: "none",
          borderRadius: "12px",
          cursor: "pointer",
          color: "#fff",
          fontWeight: "700",
          background:
            "linear-gradient(135deg,#06b6d4,#3b82f6,#8b5cf6)",
          boxShadow: "0 8px 20px rgba(59,130,246,.3)",
        }}
      >
        ▶ Run Agent
      </motion.button>
    </motion.div>
  );
}