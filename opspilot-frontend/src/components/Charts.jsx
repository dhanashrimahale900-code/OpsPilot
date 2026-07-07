import React from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const monthlyData = [
  { month: "Jan", revenue: 40 },
  { month: "Feb", revenue: 52 },
  { month: "Mar", revenue: 48 },
  { month: "Apr", revenue: 67 },
  { month: "May", revenue: 80 },
  { month: "Jun", revenue: 95 },
];

const pieData = [
  { name: "Sales", value: 35 },
  { name: "Marketing", value: 20 },
  { name: "HR", value: 15 },
  { name: "Operations", value: 30 },
];

const radarData = [
  { subject: "Growth", A: 90 },
  { subject: "Risk", A: 60 },
  { subject: "Revenue", A: 85 },
  { subject: "Customer", A: 80 },
  { subject: "Quality", A: 92 },
];

const COLORS = [
  "#3b82f6",
  "#22c55e",
  "#f59e0b",
  "#ef4444",
];

const cardStyle = {
  background: "rgba(255,255,255,0.05)",
  borderRadius: "20px",
  padding: "20px",
  border: "1px solid rgba(255,255,255,0.08)",
};

const Charts = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(420px,1fr))",
        gap: "25px",
        marginTop: "35px",
      }}
    >
      {/* Line Chart */}
      <div style={cardStyle}>
        <h3>Revenue Trend</h3>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#3b82f6"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div style={cardStyle}>
        <h3>Monthly Revenue</h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#22c55e" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div style={cardStyle}>
        <h3>Department Contribution</h3>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              outerRadius={100}
              label
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Radar Chart */}
      <div style={cardStyle}>
        <h3>Business Performance</h3>

        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={radarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />

            <Radar
              dataKey="A"
              stroke="#8b5cf6"
              fill="#8b5cf6"
              fillOpacity={0.5}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;