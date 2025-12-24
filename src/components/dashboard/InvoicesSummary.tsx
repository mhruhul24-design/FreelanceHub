import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Paid", value: 45600, color: "hsl(152, 60%, 45%)" },
  { name: "Pending", value: 12300, color: "hsl(38, 92%, 50%)" },
  { name: "Overdue", value: 4200, color: "hsl(0, 72%, 55%)" },
];

export function InvoicesSummary() {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: "500ms" }}>
      <div className="mb-6">
        <h3 className="section-title">Invoice Status</h3>
        <p className="text-sm text-muted-foreground">Current billing overview</p>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative h-[180px] w-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={80}
                paddingAngle={4}
                dataKey="value"
                strokeWidth={0}
              >
                {data.map((entry, index) => (
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
                formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-foreground">
              ${(total / 1000).toFixed(1)}k
            </span>
            <span className="text-xs text-muted-foreground">Total</span>
          </div>
        </div>
        <div className="flex-1 space-y-4">
          {data.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-muted-foreground">{item.name}</span>
              </div>
              <span className="text-sm font-medium text-foreground">
                ${item.value.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
