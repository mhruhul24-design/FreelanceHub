import { MoreHorizontal, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

const projects = [
  {
    id: 1,
    name: "E-commerce Platform",
    client: "TechCorp Inc.",
    status: "In Progress",
    progress: 68,
    deadline: "Dec 30, 2024",
  },
  {
    id: 2,
    name: "Mobile App Redesign",
    client: "StartupXYZ",
    status: "Review",
    progress: 90,
    deadline: "Dec 25, 2024",
  },
  {
    id: 3,
    name: "Brand Identity",
    client: "Design Studio",
    status: "Pending",
    progress: 15,
    deadline: "Jan 15, 2025",
  },
  {
    id: 4,
    name: "Marketing Website",
    client: "GrowthCo",
    status: "Completed",
    progress: 100,
    deadline: "Dec 20, 2024",
  },
];

const statusStyles = {
  Pending: "badge-pending",
  "In Progress": "badge-active",
  Review: "bg-purple-500/15 text-purple-600",
  Completed: "badge-completed",
};

export function ProjectsOverview() {
  return (
    <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: "400ms" }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="section-title">Active Projects</h3>
          <p className="text-sm text-muted-foreground">
            Track your ongoing work
          </p>
        </div>
        <button className="flex items-center gap-1 text-sm text-primary font-medium hover:text-primary/80 transition-colors">
          View all <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group p-4 rounded-xl border border-border bg-background/50 hover:border-primary/30 hover:shadow-md transition-all duration-200 animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {project.name}
                </h4>
                <p className="text-sm text-muted-foreground">{project.client}</p>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "badge-status",
                    statusStyles[project.status as keyof typeof statusStyles]
                  )}
                >
                  {project.status}
                </span>
                <button className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-muted transition-all">
                  <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium text-foreground">
                  {project.progress}%
                </span>
              </div>
              <Progress value={project.progress} className="h-2" />
              <p className="text-xs text-muted-foreground">
                Due: {project.deadline}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
