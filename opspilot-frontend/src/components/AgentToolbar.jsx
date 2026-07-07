import { motion } from "framer-motion";

export default function AgentToolbar({
  runAllAgents,
  clearResults,
  exportReport,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px",
        marginBottom: "30px",
        borderRadius: "20px",
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(18px)",
      }}
    >
      {/* Run All */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={runAllAgents}
        style={buttonStyle("#2563eb")}
      >
        ▶ Run All Agents
      </motion.button>

      {/* Clear */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={clearResults}
        style={buttonStyle("#dc2626")}
      >
        🗑 Clear Results
      </motion.button>

      {/* Export */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={exportReport}
        style={buttonStyle("#059669")}
      >
        📄 Export Report
      </motion.button>

      {/* Status */}
      <div
        style={{
          marginLeft: "auto",
          padding: "10px 18px",
          borderRadius: "999px",
          background: "rgba(16,185,129,0.15)",
          color: "#34d399",
          fontWeight: "600",
          fontSize: "14px",
        }}
      >
        🤖 Antigravity Status: Ready
      </div>
    </motion.div>
  );
}

function buttonStyle(color) {
  return {
    padding: "12px 22px",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    color: "#fff",
    fontWeight: "700",
    fontSize: "14px",
    background: color,
    boxShadow: `0 10px 25px ${color}55`,
  };
}