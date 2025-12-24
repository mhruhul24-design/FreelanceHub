import { TopBar } from "@/components/layout/TopBar";
import { StatCard } from "@/components/dashboard/StatCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { ProjectsOverview } from "@/components/dashboard/ProjectsOverview";
import { InvoicesSummary } from "@/components/dashboard/InvoicesSummary";
import { FolderKanban, Users, DollarSign, FileText } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen">
      <TopBar
        title="Dashboard"
        subtitle="Welcome back, John! Here's what's happening."
      />
      <div className="p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Projects"
            value={24}
            change={{ value: 12, type: "increase" }}
            icon={FolderKanban}
            iconColor="text-primary"
            delay={0}
          />
          <StatCard
            title="Active Clients"
            value={18}
            change={{ value: 5, type: "increase" }}
            icon={Users}
            iconColor="text-accent"
            delay={50}
          />
          <StatCard
            title="Monthly Revenue"
            value="$24,560"
            change={{ value: 18, type: "increase" }}
            icon={DollarSign}
            iconColor="text-success"
            delay={100}
          />
          <StatCard
            title="Pending Invoices"
            value={7}
            change={{ value: 3, type: "decrease" }}
            icon={FileText}
            iconColor="text-warning"
            delay={150}
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
          <InvoicesSummary />
        </div>

        {/* Projects and Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ProjectsOverview />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}
