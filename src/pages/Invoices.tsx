import { TopBar } from "@/components/layout/TopBar";
import { Button } from "@/components/ui/button";
import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Download,
  Send,
  Eye,
} from "lucide-react";
import { cn } from "@/lib/utils";

const invoices = [
  {
    id: "INV-2024-001",
    client: "TechCorp Inc.",
    amount: 5400,
    status: "Paid",
    issueDate: "Dec 1, 2024",
    dueDate: "Dec 15, 2024",
    paidDate: "Dec 10, 2024",
  },
  {
    id: "INV-2024-002",
    client: "StartupXYZ",
    amount: 3200,
    status: "Pending",
    issueDate: "Dec 5, 2024",
    dueDate: "Dec 20, 2024",
    paidDate: null,
  },
  {
    id: "INV-2024-003",
    client: "Design Studio Co.",
    amount: 2800,
    status: "Sent",
    issueDate: "Dec 10, 2024",
    dueDate: "Dec 25, 2024",
    paidDate: null,
  },
  {
    id: "INV-2024-004",
    client: "GrowthCo Agency",
    amount: 7500,
    status: "Overdue",
    issueDate: "Nov 15, 2024",
    dueDate: "Nov 30, 2024",
    paidDate: null,
  },
  {
    id: "INV-2024-005",
    client: "CloudTech Solutions",
    amount: 4100,
    status: "Paid",
    issueDate: "Nov 20, 2024",
    dueDate: "Dec 5, 2024",
    paidDate: "Dec 2, 2024",
  },
  {
    id: "INV-2024-006",
    client: "Enterprise Ltd.",
    amount: 8500,
    status: "Draft",
    issueDate: "Dec 18, 2024",
    dueDate: "Jan 2, 2025",
    paidDate: null,
  },
];

const statusStyles = {
  Draft: "bg-muted text-muted-foreground",
  Sent: "badge-active",
  Pending: "badge-pending",
  Paid: "badge-completed",
  Overdue: "badge-overdue",
};

export default function Invoices() {
  const totalPaid = invoices
    .filter((inv) => inv.status === "Paid")
    .reduce((sum, inv) => sum + inv.amount, 0);
  const totalPending = invoices
    .filter((inv) => ["Pending", "Sent"].includes(inv.status))
    .reduce((sum, inv) => sum + inv.amount, 0);
  const totalOverdue = invoices
    .filter((inv) => inv.status === "Overdue")
    .reduce((sum, inv) => sum + inv.amount, 0);

  return (
    <div className="min-h-screen">
      <TopBar title="Invoices" subtitle="Manage your billing and invoices" />
      <div className="p-6 space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 animate-slide-up">
            <p className="text-sm font-medium text-muted-foreground mb-1">
              Total Paid
            </p>
            <p className="text-2xl font-bold text-success">
              ${totalPaid.toLocaleString()}
            </p>
          </div>
          <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: "50ms" }}>
            <p className="text-sm font-medium text-muted-foreground mb-1">
              Pending
            </p>
            <p className="text-2xl font-bold text-warning">
              ${totalPending.toLocaleString()}
            </p>
          </div>
          <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <p className="text-sm font-medium text-muted-foreground mb-1">
              Overdue
            </p>
            <p className="text-2xl font-bold text-destructive">
              ${totalOverdue.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search invoices..."
              className="input-field pl-10 w-full"
            />
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button className="btn-primary gap-2">
              <Plus className="h-4 w-4" />
              Create Invoice
            </Button>
          </div>
        </div>

        {/* Invoices Table */}
        <div className="glass-card overflow-hidden animate-slide-up" style={{ animationDelay: "150ms" }}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">
                    Invoice
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">
                    Client
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">
                    Amount
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">
                    Status
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">
                    Issue Date
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">
                    Due Date
                  </th>
                  <th className="text-right py-4 px-6 text-sm font-medium text-muted-foreground">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice, index) => (
                  <tr
                    key={invoice.id}
                    className="table-row-hover border-b border-border last:border-0 animate-fade-in"
                    style={{ animationDelay: `${index * 30}ms` }}
                  >
                    <td className="py-4 px-6">
                      <span className="font-medium text-foreground">
                        {invoice.id}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-foreground">{invoice.client}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-semibold text-foreground">
                        ${invoice.amount.toLocaleString()}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={cn(
                          "badge-status",
                          statusStyles[invoice.status as keyof typeof statusStyles]
                        )}
                      >
                        {invoice.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-muted-foreground">
                        {invoice.issueDate}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-muted-foreground">
                        {invoice.dueDate}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
                          <Download className="h-4 w-4" />
                        </button>
                        <button className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
                          <Send className="h-4 w-4" />
                        </button>
                        <button className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
