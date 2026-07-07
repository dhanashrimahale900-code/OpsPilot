import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Analyzer from "./components/Analyzer";
import Dashboard from "./components/Dashboard";
import AgentWorkspace from "./components/AgentWorkspace";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #09090B 0%, #111827 40%, #0F172A 100%)",
        color: "#ffffff",
        overflowX: "hidden",
      }}
    >
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Features */}
      <Features />

      {/* AI Business Analyzer */}
      <Analyzer />

      {/* Dashboard */}
      <Dashboard />

      {/* Multi-Agent Workspace */}
      <AgentWorkspace />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;