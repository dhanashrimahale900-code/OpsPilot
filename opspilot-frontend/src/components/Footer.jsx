export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "80px",
        padding: "40px 20px",
        background: "#0f172a",
        textAlign: "center",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <h2
        style={{
          color: "#3b82f6",
          marginBottom: "10px",
        }}
      >
        OpsPilot AI
      </h2>

      <p
        style={{
          color: "#cbd5e1",
          marginBottom: "10px",
        }}
      >
        Enterprise Multi-Agent Business Intelligence Platform
      </p>

      <p
        style={{
          color: "#94a3b8",
          fontSize: "14px",
        }}
      >
        Built with React, Flask, Gemini AI, Antigravity SDK, ADK and Multi-Agent Architecture.
      </p>

      <p
        style={{
          marginTop: "20px",
          color: "#64748b",
          fontSize: "13px",
        }}
      >
        © 2026 OpsPilot AI. All Rights Reserved.
      </p>
    </footer>
  );
}