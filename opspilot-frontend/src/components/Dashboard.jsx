import Charts from "./Charts";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const kpis = [
  {
    title: "Revenue",
    value: "₹12.5L",
    color: "#3b82f6",
  },
  {
    title: "Customers",
    value: "1,284",
    color: "#10b981",
  },
  {
    title: "Projects",
    value: "32",
    color: "#8b5cf6",
  },
  {
    title: "Efficiency",
    value: "87%",
    color: "#f59e0b",
  },
];

const revenueData = [
  { month: "Jan", revenue: 40 },
  { month: "Feb", revenue: 55 },
  { month: "Mar", revenue: 48 },
  { month: "Apr", revenue: 70 },
  { month: "May", revenue: 85 },
  { month: "Jun", revenue: 92 },
];

const productivityData = [
  { week: "W1", score: 55 },
  { week: "W2", score: 62 },
  { week: "W3", score: 75 },
  { week: "W4", score: 90 },
];

const departmentData = [
  { name: "Sales", value: 35 },
  { name: "Marketing", value: 25 },
  { name: "HR", value: 15 },
  { name: "Finance", value: 25 },
];

const COLORS = [
  "#3b82f6",
  "#10b981",
  "#8b5cf6",
  "#f59e0b",
];

export default function Dashboard() {
  return (
    <section
      id="dashboard"
      style={{
        marginTop: "70px",
        padding: "20px",
      }}
    >
      <h2
        style={{
          fontSize: "38px",
          fontWeight: "800",
          marginBottom: "10px",
        }}
      >
        Business Dashboard
      </h2>

      <p
        style={{
          color: "#a1a1aa",
          marginBottom: "40px",
        }}
      >
        Live KPI Overview & Analytics
      </p>

      {/* KPI Cards */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        {kpis.map((item) => (
          <div
            key={item.title}
            style={{
              background: "#18181b",
              borderRadius: "18px",
              padding: "25px",
              border: "1px solid rgba(255,255,255,.08)",
            }}
          >
            <h3
              style={{
                color: "#a1a1aa",
                marginBottom: "10px",
              }}
            >
              {item.title}
            </h3>

            <h1
              style={{
                color: item.color,
                fontSize: "34px",
              }}
            >
              {item.value}
            </h1>
          </div>
        ))}
      </div>

      {/* Charts */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
          gap: "30px",
        }}
      >
        {/* Revenue */}

        <div
          style={{
            background: "#18181b",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <h3 style={{ marginBottom: "20px" }}>
            Revenue Trend
          </h3>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Legend />

              <Bar
                dataKey="revenue"
                fill="#3b82f6"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Productivity */}

        <div
          style={{
            background: "#18181b",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <h3 style={{ marginBottom: "20px" }}>
            Productivity
          </h3>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={productivityData}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="week" />

              <YAxis />

              <Tooltip />

              <Legend />

              <Line
                type="monotone"
                dataKey="score"
                stroke="#10b981"
                strokeWidth={4}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}

        <div
          style={{
            background: "#18181b",
            padding: "20px",
            borderRadius: "20px",
            gridColumn: "1 / -1",
          }}
        >
          <h3 style={{ marginBottom: "20px" }}>
            Department Distribution
          </h3>

          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={departmentData}
                dataKey="value"
                outerRadius={120}
                label
              >
                {departmentData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />

              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}