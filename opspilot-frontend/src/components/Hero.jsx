export default function Hero() {
  return (
    <section
      style={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <h1
        style={{
          fontSize: "60px",
          color: "white",
          marginBottom: "20px",
          fontWeight: "800",
        }}
      >
        OpsPilot AI
      </h1>

      <h2
        style={{
          color: "#60a5fa",
          fontSize: "30px",
          marginBottom: "25px",
        }}
      >
        Enterprise Multi-Agent Business Intelligence Platform
      </h2>

      <p
        style={{
          maxWidth: "850px",
          color: "#d1d5db",
          fontSize: "20px",
          lineHeight: "1.8",
        }}
      >
        Analyze business challenges using multiple AI agents powered by
        Gemini, enterprise workflows, dashboards, automated reporting,
        Antigravity integration and collaborative decision making.
      </p>

      <button
        style={{
          marginTop: "40px",
          padding: "15px 35px",
          fontSize: "18px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "12px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Get Started
      </button>
    </section>
  );
}