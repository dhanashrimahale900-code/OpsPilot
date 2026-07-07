import { useState } from "react";
import { analyzeBusiness } from "../services/agentService";

export default function Analyzer() {
  const [problem, setProblem] = useState("");
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState("");

  const handleAnalyze = async () => {
    if (!problem.trim()) {
      alert("Please enter a business problem.");
      return;
    }

    try {
      setLoading(true);

      const response = await analyzeBusiness(problem);

      if (response.success) {
        setReport(response.data.report);
      } else {
        setReport("Analysis failed.");
      }
    } catch (error) {
      console.error(error);
      setReport("Unable to connect to backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="analyzer">
      <h2>Business Problem Analyzer</h2>

      <textarea
        rows={8}
        placeholder="Describe your business problem..."
        value={problem}
        onChange={(e) => setProblem(e.target.value)}
      />

      <button onClick={handleAnalyze} disabled={loading}>
        {loading ? "Analyzing..." : "Analyze with AI"}
      </button>

      {report && (
        <div className="report-box">
          <h3>AI Report</h3>
          <pre>{report}</pre>
        </div>
      )}
    </section>
  );
}