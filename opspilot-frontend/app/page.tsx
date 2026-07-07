"use client";

import { useState, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const API_URL = "http://127.0.0.1:5000"; 

export default function Home() {
  const reportRef = useRef<HTMLDivElement | null>(null);

  const [problem, setProblem] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

const analyze = async () => {
  if (!problem.trim()) {
    toast.error("Please enter a business problem");
    return;
  }

  setLoading(true);

  try {
    toast.loading("Analyzing business problem...", {
      id: "analysis",
    });

    console.log("API URL:", API_URL);
    console.log("Calling:", `${API_URL}/analyze`);

const res = await axios.post(
  `${API_URL}/analyze`,
  {
    problem,
  },
  {
    timeout: 30000,
    headers: {
      "Content-Type": "application/json",
    },
  }
);

console.log("Full Response:", res);
console.log("Response Data:", res.data);
console.log("Report:", res.data?.data?.report);

const finalResult =
  res.data?.data?.report ||
  res.data?.report ||
  res.data?.analysis ||
  res.data?.result ||
  "";

setResult(finalResult);

    toast.success("Analysis Generated!", {
      id: "analysis",
    });
  } catch (error: any) {
    console.error("API Error:", error);
    console.error("Response:", error?.response?.data);

    toast.error(
      error?.response?.data?.message || "Backend connection failed",
      {
        id: "analysis",
      }
    );
  } finally {
    setLoading(false);
  }
};

  const downloadPDF = async () => {
    if (!reportRef.current) return;

    const canvas = await html2canvas(reportRef.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#0f172a",
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);

    heightLeft -= pdfHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;
    }

    pdf.save("Business-Analysis.pdf");
  };
  const copyReport = async () => {
  try {
    await navigator.clipboard.writeText(result);
    toast.success("Report copied!");
  } catch {
    toast.error("Failed to copy report");
  }
};

  return (
    <main
      style={{
        minHeight: "100vh",
        position: "relative",
        overflowX: "hidden",
        overflowY: "auto",
        width: "100%",
        color: "white",
      }}
    >
      <Toaster position="top-right" />

  {/* RESPONSIVE NAVBAR */}

  <motion.div

 

    initial={{ y: -40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="glass"
    style={{
      padding: "16px 20px",
      borderRadius: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "15px",
      marginBottom: "25px",
      position: "sticky",
      top: "10px",
      zIndex: 100,
      background: "rgba(255,255,255,.04)",
      border: "1px solid rgba(255,255,255,.08)",
      backdropFilter: "blur(24px)",
      WebkitBackdropFilter: "blur(24px)",
      overflow: "hidden",
    }}
  >
    <motion.div
 
  
      animate={{
        opacity: [0.05, 0.12, 0.05],
        scale: [1, 1.15, 1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
      }}
      style={{
        position: "absolute",
        top: "-150px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        maxWidth: "600px",
        height: "250px",
        background:
          "linear-gradient(135deg,#22d3ee,#3b82f6,#8b5cf6)",
        filter: "blur(140px)",
        borderRadius: "50%",
        zIndex: -1,
      }}
    />

    {/* LOGO */}

    <h2
      style={{
        fontSize: "clamp(22px,4vw,30px)",
        fontWeight: "900",
        letterSpacing: "-1px",
        background:
          "linear-gradient(135deg,#22d3ee,#3b82f6,#8b5cf6)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      OpsPilot AI
    </h2>

    {/* MENU */}

    <div
      style={{
        display: "flex",
        gap: "16px",
        flexWrap: "wrap",
        justifyContent: "center",
        color: "#a1a1aa",
        fontSize: "14px",
      }}
    >
      {[
          ["Features", "features"],
          ["How It Works", "how-it-works"],
          ["Analyzer", "analyzer"],
        ].map(([label, id]) => (
          <span
            key={label}
            onClick={() =>
              document
                .getElementById(id)
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
            style={{
              cursor: "pointer",
            }}
          >
            {label}
          </span>
        ))}
    </div>

    {/* BUTTON */}

    <motion.button
  aria-label="Generate analysis"
  onClick={() =>
    document
      .getElementById("analyzer")
      ?.scrollIntoView({
        behavior: "smooth",
      })
  }
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      style={{
        padding: "12px 20px",
        borderRadius: "12px",
        border: "none",
        cursor: "pointer",
        fontWeight: "700",
        fontSize: "14px",
        color: "white",
        background:
          "linear-gradient(135deg,#06b6d4,#3b82f6,#8b5cf6)",
      }}
    >
      Start Analysis
    </motion.button>
  </motion.div>

  {/* DIVIDER */}

  <motion.div

  
    animate={{
      opacity: [0.3, 1, 0.3],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
    }}
    style={{
      height: "1px",
      width: "100%",
      marginBottom: "60px",
      background:
        "linear-gradient(90deg,transparent,#71717a,transparent)",
    }}
  />



{/* HERO SECTION */}

<motion.section
  id="hero"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  style={{
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "100vw",
    padding: "40px 20px",
    boxSizing: "border-box",
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* Background Grid */}

  <div
    style={{
      position: "absolute",
      inset: 0,
      backgroundImage:
        "linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)",
      backgroundSize: "60px 60px",
      maskImage:
        "radial-gradient(circle at center, black 30%, transparent 90%)",
      zIndex: 0,
    }}
  />

  {/* Floating Blob 1 */}

  <motion.div
 
  
    animate={{
      y: [-20, 20, -20],
      x: [-15, 15, -15],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    style={{
      position: "absolute",
      width: "clamp(180px,30vw,350px)",
      height: "clamp(180px,30vw,350px)",
      borderRadius: "50%",
      background: "rgba(255,255,255,.05)",
      filter: "blur(120px)",
      top: "5%",
      left: "-5%",
      zIndex: 0,
    }}
  />

  {/* Floating Blob 2 */}

  <motion.div
 
 
    animate={{
      y: [20, -20, 20],
      x: [10, -15, 10],
    }}
    transition={{
      duration: 14,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    style={{
      position: "absolute",
      width: "clamp(180px,28vw,300px)",
      height: "clamp(180px,28vw,300px)",
      borderRadius: "50%",
      background: "rgba(255,255,255,.04)",
      filter: "blur(120px)",
      bottom: "10%",
      right: "-5%",
      zIndex: 0,
    }}
  />

  <motion.div

 
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    style={{
  width: "100%",
  maxWidth: "1280px",
  textAlign: "center",
  boxSizing: "border-box",
  padding: "0 10px",
      position: "relative",
      zIndex: 2,
    }}
  >
    {/* Badge */}

    <motion.div

  
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className="glass"
      style={{
        display: "inline-block",
        padding: "10px 18px",
        borderRadius: "999px",
        marginBottom: "25px",
        color: "#d4d4d8",
        fontWeight: "600",
        fontSize: "clamp(12px,2vw,14px)",
      }}
    >
      AI-Powered Business Analysis
    </motion.div>

    {/* Heading */}

    <motion.h1
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
        duration: 1,
      }}
      style={{
        fontSize: "clamp(42px,10vw,95px)",
        fontWeight: "900",
        lineHeight: "1",
       letterSpacing: "clamp(-1px,-0.2vw,-3px)",
        marginBottom: "24px",
      }}
    >
      Solve Business
      <br />
      Problems With
      <br />

      <motion.span
        animate={{
          backgroundPosition: [
            "0% 50%",
            "100% 50%",
            "0% 50%",
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        style={{
          background:
            "linear-gradient(90deg,#ffffff,#d4d4d8,#71717a,#ffffff)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        AI Insights
      </motion.span>
    </motion.h1>

    {/* Description */}

    <p
      style={{
        color: "#a1a1aa",
        fontSize: "clamp(14px,2.5vw,18px)",
        lineHeight: "1.8",
        maxWidth: "650px",
        margin: "0 auto 35px",
        padding: "0 10px",
      }}
    >
      Describe your business challenge and instantly get
      risk analysis, root causes, and practical
      recommendations to improve performance.
    </p>

    {/* Pills */}

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        flexWrap: "wrap",
        marginBottom: "35px",
      }}
    >
      {[
        "Risk Detection",
        "Root Cause",
        "AI Solutions",
        "Insights",
      ].map((item) => (
        <div
          key={item}
          className="glass"
          style={{
            padding: "8px 14px",
            borderRadius: "999px",
            fontSize: "12px",
            color: "#d4d4d8",
          }}
        >
          {item}
        </div>
      ))}
    </div>

    {/* CTA */}
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() =>
    document
      .getElementById("analyzer")
      ?.scrollIntoView({
        behavior: "smooth",
      })
  }
  className="btn"
  style={{
    padding: "14px 32px",
    borderRadius: "14px",
    fontWeight: "800",
    fontSize: "clamp(14px,2vw,17px)",
  }}
>
  Start Analysis
</motion.button>
    

    {/* Stats */}

    <div
      style={{
        marginTop: "50px",
        display: "grid",
        gridTemplateColumns:
  "repeat(auto-fit,minmax(min(100%,160px),1fr))",
        gap: "15px",
      }}
    >
      {[
        ["95%", "Accuracy"],
        ["10x", "Faster Analysis"],
        ["24/7", "Availability"],
        ["100+", "Business Cases"],
      ].map(([value, label], index) => (
        <motion.div

 
          key={label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.15,
          }}
          viewport={{ once: true }}
          className="glass"
          style={{
            padding: "20px",
            borderRadius: "18px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(24px,4vw,30px)",
              fontWeight: "900",
              marginBottom: "6px",
            }}
          >
            {value}
          </h2>

          <p
            style={{
              color: "#a1a1aa",
              fontSize: "13px",
            }}
          >
            {label}
          </p>
        </motion.div>
      ))}
    </div>
  </motion.div>
</motion.section>

{/* HOW IT WORKS */}

<motion.div

 
  id="how-it-works"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  style={{
    marginTop: "80px",
    marginBottom: "40px",
    maxWidth: "1280px",
    marginInline: "auto",
    padding: "0 20px",
  }}
>
 
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    style={{
      fontSize: "clamp(28px,5vw,42px)",
      textAlign: "center",
      marginBottom: "50px",
      fontWeight: "900",
      letterSpacing: "-1px",
      lineHeight: "1.2",
    }}
  >
    How OpsPilot Works
  </motion.h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns:
"repeat(auto-fit,minmax(min(100%,260px),1fr))",
      gap: "20px",
    }}
  >
    {[
      {
        number: "01",
        title: "Business Problem",
        desc: "Describe your challenge and provide context.",
      },
      {
        number: "02",
        title: "AI Analysis",
        desc: "AI processes and evaluates the problem.",
      },
      {
        number: "03",
        title: "Risk Detection",
        desc: "Identify key risks and root causes.",
      },
      {
        number: "04",
        title: "Recommendations",
        desc: "Receive actionable business insights.",
      },
    ].map((step, index) => (
      <motion.div

 
        key={step.title}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: index * 0.1,
        }}
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        className="glass"
        style={{
          padding: "28px",
          borderRadius: "24px",
          background: "rgba(255,255,255,.03)",
          border: "1px solid rgba(255,255,255,.06)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow */}

        <motion.div
  
 
          animate={{
            opacity: [0.03, 0.1, 0.03],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          style={{
            position: "absolute",
            top: "-70px",
            right: "-70px",
            width: "160px",
            height: "160px",
            background:
              "linear-gradient(135deg,#3b82f6,#8b5cf6)",
            filter: "blur(70px)",
            borderRadius: "50%",
          }}
        />

        {/* Number */}

        <motion.div

  
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            background: "rgba(255,255,255,.05)",
            border: "1px solid rgba(255,255,255,.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "15px",
            fontWeight: "800",
            color: "#fafafa",
            marginBottom: "18px",
          }}
        >
          {step.number}
        </motion.div>

        <h3
          style={{
            fontSize: "clamp(18px,3vw,20px)",
            fontWeight: "700",
            marginBottom: "12px",
            color: "#fafafa",
          }}
        >
          {step.title}
        </h3>

        <p
          style={{
            color: "#a1a1aa",
            lineHeight: "1.8",
            fontSize: "14px",
          }}
        >
          {step.desc}
        </p>
      </motion.div>
    ))}
  </div>
</motion.div>



{/* FEATURES */}

<motion.div
 
 
  id="features"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  style={{
    marginTop: "clamp(50px,8vw,80px)",
    marginBottom: "30px",
    maxWidth: "1280px",
    marginInline: "auto",
    padding: "0 16px",
  }}
>
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    style={{
      fontSize: "clamp(30px,6vw,42px)",
      textAlign: "center",
      marginBottom: "clamp(30px,5vw,50px)",
      fontWeight: "900",
      letterSpacing: "-1px",
      lineHeight: "1.1",
    }}
  >
    AI Features
  </motion.h2>

  <div
    style={{
      display: "grid",
     gridTemplateColumns:
"repeat(auto-fit,minmax(min(100%,260px),1fr))",
      gap: "20px",
    }}
  >
    {[
      {
        icon: "RD",
        title: "Risk Detection",
        desc: "Identify business risks before they impact operations.",
      },
      {
        icon: "RC",
        title: "Root Cause Analysis",
        desc: "Discover underlying factors affecting performance.",
      },
      {
        icon: "AI",
        title: "AI Recommendations",
        desc: "Generate actionable solutions powered by AI.",
      },
      {
        icon: "PI",
        title: "Performance Insights",
        desc: "Improve efficiency through data-driven decisions.",
      },
    ].map((item, index) => (
      <motion.div
  
        key={item.title}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: index * 0.1,
        }}
        whileHover={{
  y: -10,
  scale: 1.02,
  boxShadow:
    "0 20px 40px rgba(59,130,246,.15)",
}}
        className="glass"
        style={{
          padding: "clamp(20px,4vw,30px)",
          borderRadius: "24px",
          background: "rgba(255,255,255,.03)",
          border: "1px solid rgba(255,255,255,.06)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <motion.div
  
  
          animate={{
            opacity: [0.03, 0.1, 0.03],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          style={{
            position: "absolute",
            top: "-70px",
            right: "-70px",
            width: "160px",
            height: "160px",
            background:
              "linear-gradient(135deg,#22d3ee,#3b82f6)",
            filter: "blur(70px)",
            borderRadius: "50%",
          }}
        />

        <motion.div
  
 
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            background: "rgba(255,255,255,.04)",
            border: "1px solid rgba(255,255,255,.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
            fontWeight: "800",
            color: "#fafafa",
            marginBottom: "18px",
            letterSpacing: "1px",
          }}
        >
          {item.icon}
        </motion.div>

        <h3
          style={{
            fontSize: "clamp(18px,3vw,20px)",
            fontWeight: "700",
            marginBottom: "12px",
            color: "#fafafa",
          }}
        >
          {item.title}
        </h3>

        <p
          style={{
            color: "#a1a1aa",
            lineHeight: "1.7",
            fontSize: "14px",
          }}
        >
          {item.desc}
        </p>
      </motion.div>
    ))}
  </div>
</motion.div>

{/* ================= ANALYZER SECTION ================= */}

<motion.section
  id="analyzer"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  style={{
    marginTop: "clamp(50px,8vw,70px)",
    marginBottom: "30px",
    padding: "0 16px",
  }}
>
  <motion.div
    initial={{ opacity: 0, scale: 0.97 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="glass"
    style={{
      maxWidth: "1280px",
      padding: "clamp(24px,5vw,50px)",
      margin: "0 auto",
      borderRadius: "24px",
      background: "rgba(63,63,70,.20)",
      border: "1px solid rgba(255,255,255,.06)",
      backdropFilter: "blur(24px)",
      position: "relative",
      overflow: "hidden",
      boxSizing: "border-box",
    }}
  >
        <motion.div
      animate={{
        opacity: [0.05, 0.12, 0.05],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        position: "absolute",
        top: "-120px",
        right: "-120px",
        width: "280px",
        height: "280px",
        borderRadius: "50%",
        background:
          "linear-gradient(135deg,#22d3ee,#3b82f6,#8b5cf6)",
        filter: "blur(100px)",
      }}
    />

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px 14px",
        borderRadius: "999px",
        background: "rgba(255,255,255,.04)",
        color: "#d4d4d8",
        fontSize: "12px",
        fontWeight: "600",
        marginBottom: "18px",
      }}
    >
      🤖 AI Business Analyzer
    </motion.div>

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
      style={{
        fontSize: "clamp(26px,5vw,38px)",
        fontWeight: "800",
        marginBottom: "12px",
        letterSpacing: "-1px",
      }}
    >
      Analyze Business Challenges
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      viewport={{ once: true }}
      style={{
        color: "#a1a1aa",
        lineHeight: "1.7",
        marginBottom: "24px",
      }}
    >
      Describe a business issue and receive AI-powered insights,
      risk assessment, root-cause analysis and recommendations.
    </motion.p>

        {/* Example Chips */}
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        marginBottom: "16px",
      }}
    >
      {[
        "Sales are decreasing",
        "Customer complaints are increasing",
        "Employee productivity is low",
        "Project deadlines are missed",
      ].map((example) => (
        <button
          key={example}
          onClick={() => setProblem(example)}
          style={{
            padding: "8px 14px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,.1)",
            background: "rgba(255,255,255,.05)",
            color: "#fff",
            cursor: "pointer",
            fontSize: "13px",
            transition: "0.3s",
          }}
        >
          {example}
        </button>
      ))}
    </div>

    {/* Textarea */}
    <motion.textarea
      aria-label="Business problem input"
      whileTap={{ scale: 1.01 }}
      rows={6}
      value={problem}
      onChange={(e) => setProblem(e.target.value)}
      placeholder={`Examples:
• Sales are decreasing
• Customer complaints are increasing
• Deadlines are being missed
• Costs are too high`}
      style={{
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
        padding: "16px",
        borderRadius: "16px",
        background: "rgba(255,255,255,.04)",
        border: "1px solid rgba(255,255,255,.08)",
        color: "#fff",
        fontSize: "14px",
        resize: "vertical",
        minHeight: "160px",
        marginBottom: "20px",
        lineHeight: "1.7",
      }}
    />

    {/* Analyze Button */}
    <motion.button
      aria-label="Generate analysis"
      whileHover={{
        scale: 1.03,
        y: -2,
        boxShadow: "0 20px 40px rgba(59,130,246,.35)",
      }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: [
          "0 0 0 rgba(59,130,246,0)",
          "0 0 25px rgba(59,130,246,.25)",
          "0 0 0 rgba(59,130,246,0)",
        ],
      }}
      transition={{
        boxShadow: {
          duration: 3,
          repeat: Infinity,
        },
      }}
      onClick={analyze}
      disabled={loading}
      className="btn"
      style={{
        width: "100%",
        maxWidth: "320px",
        minHeight: "52px",
        padding: "14px 28px",
        borderRadius: "12px",
        fontSize: "14px",
        fontWeight: "700",
      }}
    >
      {loading ? (
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <span
            style={{
              width: "18px",
              height: "18px",
              border: "2px solid white",
              borderTop: "2px solid transparent",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}
          />
          Analyzing...
        </span>
      ) : (
        "Generate Analysis"
      )}
    </motion.button>

        {/* Analysis Result */}
    {result && (
      <motion.div
        ref={reportRef}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          marginTop: "24px",
          padding: "clamp(16px,3vw,22px)",
          borderRadius: "18px",
          background: "rgba(255,255,255,.03)",
          border: "1px solid rgba(255,255,255,.06)",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <h3
          style={{
            fontSize: "clamp(18px,3vw,20px)",
            fontWeight: "700",
            marginBottom: "14px",
          }}
        >
          📊 Analysis Report
        </h3>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "20px",
            flexWrap: "wrap",
          }}
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadPDF}
            className="btn"
            style={{
              padding: "12px 24px",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
              color: "#fff",
              fontWeight: "700",
              background:
                "linear-gradient(135deg,#22d3ee,#3b82f6,#8b5cf6)",
            }}
          >
            📄 Download PDF
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            onClick={copyReport}
            className="btn"
            style={{
              padding: "12px 24px",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
              color: "#fff",
              fontWeight: "700",
              background:
                "linear-gradient(135deg,#10b981,#059669)",
            }}
          >
            📋 Copy Report
          </motion.button>
        </div>

        {/* Markdown Output */}
        <div className="markdown">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {result}
          </ReactMarkdown>
        </div>
      </motion.div>
    )}

</motion.div>
</motion.section>

{/* PROFESSIONAL PREMIUM FOOTER */}

<motion.footer
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  style={{
    marginTop: "clamp(70px,10vw,120px)",
    padding: "clamp(50px,8vw,70px) 20px 30px",
    borderTop: "1px solid rgba(255,255,255,.06)",
    position: "relative",
    overflow: "hidden",
  }}
>
  <motion.div
    animate={{
      opacity: [0.04, 0.1, 0.04],
      scale: [1, 1.15, 1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    style={{
      position: "absolute",
      width: "400px",
      height: "400px",
      background:
        "linear-gradient(135deg,#22d3ee,#3b82f6,#8b5cf6)",
      filter: "blur(140px)",
      borderRadius: "50%",
      top: "-200px",
      left: "50%",
      transform: "translateX(-50%)",
      opacity: 0.06,
      zIndex: 0,
    }}
  />

  <div
    style={{
      maxWidth: "1280px",
      margin: "0 auto",
      textAlign: "center",
      position: "relative",
      zIndex: 2,
      padding: "0 20px",
    }}
  >
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      style={{
        fontSize: "clamp(28px,6vw,34px)",
        fontWeight: "900",
        marginBottom: "14px",
        letterSpacing: "-1px",
        background:
          "linear-gradient(135deg,#ffffff,#d4d4d8,#71717a)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      OpsPilot AI
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      style={{
        color: "#a1a1aa",
        maxWidth: "620px",
        margin: "0 auto",
        lineHeight: "1.9",
        fontSize: "clamp(13px,2vw,15px)",
      }}
    >
      AI-powered platform helping businesses identify risks,
      uncover root causes, and generate strategic
      recommendations for smarter decision-making.
    </motion.p>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        marginTop: "35px",
        flexWrap: "wrap",
      }}
    >
      {["Features", "How It Works", "Analyzer", "Contact"].map(
        (item) => (
          <motion.span
            key={item}
            whileHover={{
              y: -3,
              color: "#fafafa",
            }}
            style={{
              color: "#71717a",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            {item}
          </motion.span>
        )
      )}
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(160px,1fr))",
        gap: "25px",
        maxWidth: "700px",
        margin: "45px auto",
      }}
    >
      {[
        ["95%", "Accuracy"],
        ["24/7", "Availability"],
        ["10x", "Faster Analysis"],
      ].map(([value, label], index) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 }}
        >
          <h3
            style={{
              fontSize: "28px",
              fontWeight: "900",
              color: "#fafafa",
              marginBottom: "6px",
            }}
          >
            {value}
          </h3>

          <p
            style={{
              color: "#71717a",
              fontSize: "13px",
            }}
          >
            {label}
          </p>
        </motion.div>
      ))}
    </div>

    <motion.div
      animate={{
        opacity: [0.3, 1, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      style={{
        height: "1px",
        width: "100%",
        background:
          "linear-gradient(90deg,transparent,#71717a,transparent)",
        marginBottom: "25px",
      }}
    />

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
      style={{
        color: "#52525b",
        fontSize: "13px",
        letterSpacing: ".5px",
      }}
    >
      © 2026 OpsPilot AI. All Rights Reserved.
    </motion.div>
  </div>
</motion.footer>

</main>
);
}