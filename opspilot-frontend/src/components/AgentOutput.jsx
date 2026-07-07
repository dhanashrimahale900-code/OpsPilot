import { motion } from "framer-motion";

export default function AgentOutput({
  title,
  result,
  status = "success",
  timestamp,
}) {
  if (!result) return null;

  const badgeColor =
    status === "success"
      ? "#10b981"
      : status === "running"
      ? "#f59e0b"
      : "#ef4444";

  const badgeText =
    status === "success"
      ? "Success"
      : status === "running"
      ? "Running"
      : "Error";

  const copyResult = () => {
    navigator.clipboard.writeText(result);
    alert("Copied to clipboard!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        marginTop: "20px",
        padding: "22px",
        borderRadius: "18px",
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(18px)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "18px",
        }}
      >
        <h3
          style={{
            color: "#fff",
            fontSize: "20px",
            fontWeight: "700",
            margin: 0,
          }}
        >
          {title}
        </h3>

        <span
          style={{
            background: badgeColor,
            color: "#fff",
            padding: "6px 14px",
            borderRadius: "999px",
            fontSize: "13px",
            fontWeight: "700",
          }}
        >
          {badgeText}
        </span>
      </div>

      {/* Result */}
      <div
        style={{
          whiteSpace: "pre-wrap",
          color: "#d4d4d8",
          lineHeight: "1.8",
          fontSize: "15px",
          marginBottom: "18px",
        }}
      >
        {result}
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <small
          style={{
            color: "#9ca3af",
          }}
        >
          {timestamp
            ? `Generated: ${timestamp}`
            : `Generated: ${new Date().toLocaleString()}`}
        </small>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={copyResult}
          style={{
            padding: "10px 18px",
            border: "none",
            borderRadius: "10px",
            background: "#2563eb",
            color: "#fff",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          📋 Copy Output
        </motion.button>
      </div>
    </motion.div>
  );
}