const features = [
  {
    icon: "🤖",
    title: "AI Business Analysis",
    description:
      "Analyze complex business problems using Gemini-powered AI insights.",
  },
  {
    icon: "👥",
    title: "Multi-Agent Collaboration",
    description:
      "CEO, Finance, HR, Marketing, Sales, Risk and Operations agents work together.",
  },
  {
    icon: "📊",
    title: "Interactive Dashboard",
    description:
      "View KPIs, charts and business performance in a single dashboard.",
  },
  {
    icon: "📄",
    title: "Smart Reports",
    description:
      "Generate combined AI reports and export them as PDF.",
  },
  {
    icon: "🔒",
    title: "Secure Architecture",
    description:
      "Designed with secure AI workflows and scalable backend integration.",
  },
  {
    icon: "🚀",
    title: "Production Ready",
    description:
      "Built for enterprise workflows with AI Agents and Antigravity integration.",
  },
];

export default function Features() {
  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "80px auto",
        padding: "20px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "38px",
          marginBottom: "15px",
          fontWeight: "700",
        }}
      >
        Powerful AI Features
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#9ca3af",
          maxWidth: "700px",
          margin: "0 auto 50px",
          lineHeight: "1.7",
        }}
      >
        OpsPilot combines AI Business Analysis, Multi-Agent Collaboration,
        Analytics Dashboard, Smart Reporting and Enterprise-ready architecture
        into one intelligent platform.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "25px",
        }}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "18px",
              padding: "28px",
              backdropFilter: "blur(12px)",
              transition: "0.3s",
            }}
          >
            <div
              style={{
                fontSize: "42px",
                marginBottom: "18px",
              }}
            >
              {feature.icon}
            </div>

            <h3
              style={{
                color: "white",
                marginBottom: "12px",
                fontSize: "22px",
              }}
            >
              {feature.title}
            </h3>

            <p
              style={{
                color: "#d1d5db",
                lineHeight: "1.7",
              }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}