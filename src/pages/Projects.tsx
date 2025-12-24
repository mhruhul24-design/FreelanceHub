import { TopBar } from "@/components/layout/TopBar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Calendar,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    name: "E-commerce Platform Redesign",
    client: "TechCorp Inc.",
    status: "In Progress",
    priority: "High",
    progress: 68,
    startDate: "Nov 15, 2024",
    deadline: "Dec 30, 2024",
    tasks: { completed: 24, total: 35 },
    team: ["JD", "AS", "MK"],
  },
  {
    id: 2,
    name: "Mobile App Development",
    client: "StartupXYZ",
    status: "Review",
    priority: "Medium",
    progress: 90,
    startDate: "Oct 1, 2024",
    deadline: "Dec 25, 2024",
    tasks: { completed: 45, total: 50 },
    team: ["JD", "RL"],
  },
  {
    id: 3,
    name: "Brand Identity Package",
    client: "Design Studio Co.",
    status: "Pending",
    priority: "Low",
    progress: 15,
    startDate: "Dec 10, 2024",
    deadline: "Jan 15, 2025",
    tasks: { completed: 3, total: 20 },
    team: ["AS"],
  },
  {
    id: 4,
    name: "Marketing Website Launch",
    client: "GrowthCo Agency",
    status: "Completed",
    priority: "High",
    progress: 100,
    startDate: "Sep 1, 2024",
    deadline: "Dec 20, 2024",
    tasks: { completed: 42, total: 42 },
    team: ["JD", "MK", "RL", "AS"],
  },
  {
    id: 5,
    name: "SaaS Dashboard UI",
    client: "CloudTech Solutions",
    status: "In Progress",
    priority: "High",
    progress: 45,
    startDate: "Dec 1, 2024",
    deadline: "Jan 30, 2025",
    tasks: { completed: 18, total: 40 },
    team: ["JD", "AS"],
  },
  {
    id: 6,
    name: "Corporate Website Refresh",
    client: "Enterprise Ltd.",
    status: "Pending",
    priority: "Medium",
    progress: 0,
    startDate: "Jan 5, 2025",
    deadline: "Feb 28, 2025",
    tasks: { completed: 0, total: 25 },
    team: ["MK"],
  },
];

const statusStyles = {
  Pending: "badge-pending",
  "In Progress": "badge-active",
  Review: "bg-purple-500/15 text-purple-600",
  Completed: "badge-completed",
};

const priorityStyles = {
  High: "text-destructive",
  Medium: "text-warning",
  Low: "text-muted-foreground",
};

export default function Projects() {
  return (
    <div className="min-h-screen">
      <TopBar title="Projects" subtitle="Manage and track all your projects" />
      <div className="p-6 space-y-6">
        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search projects..."
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
              New Project
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card-hover p-6 group animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {project.client}
                  </p>
                </div>
                <button className="opacity-0 group-hover:opacity-100 p-2 rounded-lg hover:bg-muted transition-all">
                  <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span
                  className={cn(
                    "badge-status",
                    statusStyles[project.status as keyof typeof statusStyles]
                  )}
                >
                  {project.status}
                </span>
                <span
                  className={cn(
                    "text-xs font-medium",
                    priorityStyles[project.priority as keyof typeof priorityStyles]
                  )}
                >
                  {project.priority} Priority
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium text-foreground">
                    {project.progress}%
                  </span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <span>{project.deadline}</span>
                </div>
                <span>
                  {project.tasks.completed}/{project.tasks.total} tasks
                </span>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex -space-x-2">
                  {project.team.slice(0, 3).map((member, i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-medium text-primary-foreground border-2 border-card"
                    >
                      {member}
                    </div>
                  ))}
                  {project.team.length > 3 && (
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground border-2 border-card">
                      +{project.team.length - 3}
                    </div>
                  )}
                </div>
                <Button variant="ghost" size="sm" className="text-xs">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
