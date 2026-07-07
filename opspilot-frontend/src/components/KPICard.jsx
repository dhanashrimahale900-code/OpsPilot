import { motion } from "framer-motion";

export default function KPICard({
  title,
  value,
  icon,
  color = "#3b82f6",
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        y: -5,
      }}
      transition={{ duration: 0.3 }}
      style={{
        background: "rgba(255,255,255,.04)",
        border: "1px solid rgba(255,255,255,.08)",
        borderRadius: "20px",
        padding: "22px",
        backdropFilter: "blur(18px)",
        color: "white",
        minHeight: "150px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          width: "55px",
          height: "55px",
          borderRadius: "15px",
          background: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "28px",
        }}
      >
        {icon}
      </div>

      <div>
        <h3
          style={{
            fontSize: "15px",
            color: "#cbd5e1",
            marginBottom: "8px",
          }}
        >
          {title}
        </h3>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            fontSize: "34px",
            fontWeight: "800",
          }}
        >
          {value}
        </motion.h2>
      </div>
    </motion.div>
  );
}