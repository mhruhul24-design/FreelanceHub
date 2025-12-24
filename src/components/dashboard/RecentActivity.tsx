import { FileText, UserPlus, CreditCard, FolderPlus, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const activities = [
  {
    id: 1,
    type: "invoice",
    message: "Invoice #INV-2024-001 paid by TechCorp",
    time: "2 hours ago",
    icon: CreditCard,
    iconBg: "bg-success/15 text-success",
  },
  {
    id: 2,
    type: "project",
    message: "New project 'Mobile App Redesign' created",
    time: "4 hours ago",
    icon: FolderPlus,
    iconBg: "bg-primary/15 text-primary",
  },
  {
    id: 3,
    type: "client",
    message: "New client 'StartupXYZ' added",
    time: "6 hours ago",
    icon: UserPlus,
    iconBg: "bg-accent/15 text-accent",
  },
  {
    id: 4,
    type: "task",
    message: "Task 'Homepage wireframes' completed",
    time: "Yesterday",
    icon: Check,
    iconBg: "bg-success/15 text-success",
  },
  {
    id: 5,
    type: "invoice",
    message: "Invoice #INV-2024-002 sent to Design Studio",
    time: "Yesterday",
    icon: FileText,
    iconBg: "bg-warning/15 text-warning",
  },
];

export function RecentActivity() {
  return (
    <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: "300ms" }}>
      <div className="mb-6">
        <h3 className="section-title">Recent Activity</h3>
        <p className="text-sm text-muted-foreground">
          Your latest updates and actions
        </p>
      </div>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={activity.id}
            className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className={cn("rounded-lg p-2", activity.iconBg)}>
              <activity.icon className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground">{activity.message}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 text-sm text-primary font-medium hover:text-primary/80 transition-colors">
        View all activity
      </button>
    </div>
  );
}
