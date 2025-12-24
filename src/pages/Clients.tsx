import { TopBar } from "@/components/layout/TopBar";
import { Button } from "@/components/ui/button";
import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Mail,
  Phone,
  Building2,
  FolderKanban,
  FileText,
} from "lucide-react";

const clients = [
  {
    id: 1,
    name: "TechCorp Inc.",
    email: "contact@techcorp.com",
    phone: "+1 (555) 123-4567",
    company: "Technology",
    projects: 5,
    invoices: 12,
    totalSpent: 45600,
    status: "Active",
    avatar: "TC",
  },
  {
    id: 2,
    name: "StartupXYZ",
    email: "hello@startupxyz.io",
    phone: "+1 (555) 234-5678",
    company: "Startup",
    projects: 3,
    invoices: 8,
    totalSpent: 28400,
    status: "Active",
    avatar: "SX",
  },
  {
    id: 3,
    name: "Design Studio Co.",
    email: "team@designstudio.com",
    phone: "+1 (555) 345-6789",
    company: "Design Agency",
    projects: 2,
    invoices: 5,
    totalSpent: 15200,
    status: "Active",
    avatar: "DS",
  },
  {
    id: 4,
    name: "GrowthCo Agency",
    email: "info@growthco.com",
    phone: "+1 (555) 456-7890",
    company: "Marketing",
    projects: 4,
    invoices: 10,
    totalSpent: 38900,
    status: "Active",
    avatar: "GC",
  },
  {
    id: 5,
    name: "CloudTech Solutions",
    email: "support@cloudtech.io",
    phone: "+1 (555) 567-8901",
    company: "SaaS",
    projects: 2,
    invoices: 4,
    totalSpent: 22100,
    status: "Inactive",
    avatar: "CT",
  },
  {
    id: 6,
    name: "Enterprise Ltd.",
    email: "business@enterprise.com",
    phone: "+1 (555) 678-9012",
    company: "Enterprise",
    projects: 1,
    invoices: 2,
    totalSpent: 8500,
    status: "Active",
    avatar: "EL",
  },
];

export default function Clients() {
  return (
    <div className="min-h-screen">
      <TopBar title="Clients" subtitle="Manage your client relationships" />
      <div className="p-6 space-y-6">
        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search clients..."
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
              Add Client
            </Button>
          </div>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <div
              key={client.id}
              className="glass-card-hover p-6 group animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-lg font-semibold text-primary-foreground flex-shrink-0">
                  {client.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                      {client.name}
                    </h3>
                    <button className="opacity-0 group-hover:opacity-100 p-2 rounded-lg hover:bg-muted transition-all">
                      <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Building2 className="h-3.5 w-3.5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {client.company}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span className="truncate">{client.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>{client.phone}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 py-4 border-y border-border mb-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
                    <FolderKanban className="h-4 w-4" />
                  </div>
                  <p className="text-lg font-semibold text-foreground">
                    {client.projects}
                  </p>
                  <p className="text-xs text-muted-foreground">Projects</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
                    <FileText className="h-4 w-4" />
                  </div>
                  <p className="text-lg font-semibold text-foreground">
                    {client.invoices}
                  </p>
                  <p className="text-xs text-muted-foreground">Invoices</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-foreground">
                    ${(client.totalSpent / 1000).toFixed(1)}k
                  </p>
                  <p className="text-xs text-muted-foreground">Total Spent</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span
                  className={`badge-status ${
                    client.status === "Active" ? "badge-completed" : "badge-pending"
                  }`}
                >
                  {client.status}
                </span>
                <Button variant="ghost" size="sm" className="text-xs">
                  View Profile
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
