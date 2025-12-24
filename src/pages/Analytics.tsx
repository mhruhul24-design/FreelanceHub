import { TopBar } from "@/components/layout/TopBar";
import { Button } from "@/components/ui/button";
import { Download, Calendar } from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const monthlyRevenue = [
  { month: "Jan", revenue: 12400 },
  { month: "Feb", revenue: 15600 },
  { month: "Mar", revenue: 18200 },
  { month: "Apr", revenue: 14800 },
  { month: "May", revenue: 22100 },
  { month: "Jun", revenue: 19500 },
  { month: "Jul", revenue: 25800 },
  { month: "Aug", revenue: 23400 },
  { month: "Sep", revenue: 28900 },
  { month: "Oct", revenue: 31200 },
  { month: "Nov", revenue: 27600 },
  { month: "Dec", revenue: 34500 },
];

const clientRevenue = [
  { client: "TechCorp", revenue: 45600 },
  { client: "StartupXYZ", revenue: 28400 },
  { client: "Design Studio", revenue: 15200 },
  { client: "GrowthCo", revenue: 38900 },
  { client: "CloudTech", revenue: 22100 },
];

const projectTypes = [
  { name: "Web Development", value: 45, color: "hsl(226, 70%, 50%)" },
  { name: "Mobile Apps", value: 25, color: "hsl(172, 66%, 45%)" },
  { name: "Design", value: 20, color: "hsl(38, 92%, 50%)" },
  { name: "Consulting", value: 10, color: "hsl(280, 65%, 55%)" },
];

export default function Analytics() {
  const totalRevenue = monthlyRevenue.reduce((sum, m) => sum + m.revenue, 0);
  const avgMonthly = totalRevenue / 12;

  return (
    <div className="min-h-screen">
      <TopBar title="Analytics" subtitle="Track your business performance" />
      <div className="p-6 space-y-6">
        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="glass-card p-6 animate-slide-up">
            <p className="text-sm font-medium text-muted-foreground mb-1">
              Total Revenue (YTD)
            </p>
            <p className="text-2xl font-bold text-foreground">
              ${totalRevenue.toLocaleString()}
            </p>
            <p className="text-sm text-success mt-1">+24% from last year</p>
          </div>
          <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: "50ms" }}>
            <p className="text-sm font-medium text-muted-foreground mb-1">
              Average Monthly
            </p>
            <p className="text-2xl font-bold text-foreground">
              ${avgMonthly.toLocaleString()}
            </p>
            <p className="text-sm text-success mt-1">+18% from last year</p>
          </div>
          <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <p className="text-sm font-medium text-muted-foreground mb-1">
              Projects Completed
            </p>
            <p className="text-2xl font-bold text-foreground">47</p>
            <p className="text-sm text-success mt-1">+12 from last year</p>
          </div>
          <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: "150ms" }}>
            <p className="text-sm font-medium text-muted-foreground mb-1">
              Client Retention
            </p>
            <p className="text-2xl font-bold text-foreground">94%</p>
            <p className="text-sm text-success mt-1">+5% from last year</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            Last 12 Months
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Monthly Revenue Chart */}
          <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div className="mb-6">
              <h3 className="section-title">Monthly Revenue</h3>
              <p className="text-sm text-muted-foreground">
                Revenue trend over the past year
              </p>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyRevenue}>
                  <defs>
                    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(226, 70%, 50%)" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="hsl(226, 70%, 50%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 90%)" />
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(220, 10%, 45%)", fontSize: 12 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(220, 10%, 45%)", fontSize: 12 }}
                    tickFormatter={(value) => `$${value / 1000}k`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(0, 0%, 100%)",
                      border: "1px solid hsl(220, 15%, 90%)",
                      borderRadius: "12px",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="hsl(226, 70%, 50%)"
                    strokeWidth={2}
                    fill="url(#revenueGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Revenue by Client */}
          <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: "250ms" }}>
            <div className="mb-6">
              <h3 className="section-title">Revenue by Client</h3>
              <p className="text-sm text-muted-foreground">
                Top clients by total revenue
              </p>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={clientRevenue} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 90%)" />
                  <XAxis
                    type="number"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(220, 10%, 45%)", fontSize: 12 }}
                    tickFormatter={(value) => `$${value / 1000}k`}
                  />
                  <YAxis
                    type="category"
                    dataKey="client"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(220, 10%, 45%)", fontSize: 12 }}
                    width={100}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(0, 0%, 100%)",
                      border: "1px solid hsl(220, 15%, 90%)",
                      borderRadius: "12px",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]}
                  />
                  <Bar
                    dataKey="revenue"
                    fill="hsl(172, 66%, 45%)"
                    radius={[0, 8, 8, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Project Types */}
        <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: "300ms" }}>
          <div className="mb-6">
            <h3 className="section-title">Project Distribution</h3>
            <p className="text-sm text-muted-foreground">
              Revenue breakdown by project type
            </p>
          </div>
          <div className="flex items-center gap-8">
            <div className="h-[200px] w-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={projectTypes}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={4}
                    dataKey="value"
                    strokeWidth={0}
                  >
                    {projectTypes.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(0, 0%, 100%)",
                      border: "1px solid hsl(220, 15%, 90%)",
                      borderRadius: "12px",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    }}
                    formatter={(value: number) => [`${value}%`, ""]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              {projectTypes.map((type) => (
                <div key={type.name} className="flex items-center gap-3">
                  <div
                    className="h-4 w-4 rounded"
                    style={{ backgroundColor: type.color }}
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {type.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{type.value}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
