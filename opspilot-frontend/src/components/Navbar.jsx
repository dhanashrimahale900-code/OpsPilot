export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 60px",
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(15,23,42,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <h2
        style={{
          color: "#3b82f6",
          fontSize: "28px",
          fontWeight: "bold",
          margin: 0,
        }}
      >
        OpsPilot AI
      </h2>

      <div
        style={{
          display: "flex",
          gap: "25px",
          color: "white",
          fontSize: "16px",
        }}
      >
        <a href="#" style={{ color: "white", textDecoration: "none" }}>Home</a>
        <a href="#features" style={{ color: "white", textDecoration: "none" }}>Features</a>
        <a href="#dashboard" style={{ color: "white", textDecoration: "none" }}>Dashboard</a>
        <a href="#agents" style={{ color: "white", textDecoration: "none" }}>Agents</a>
      </div>
    </nav>
  );
}