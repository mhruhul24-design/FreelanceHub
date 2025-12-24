import { TopBar } from "@/components/layout/TopBar";
import { Button } from "@/components/ui/button";
import {
  Plus,
  Search,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  Tag,
} from "lucide-react";
import { cn } from "@/lib/utils";

const posts = [
  {
    id: 1,
    title: "Q4 2024 Project Updates",
    excerpt:
      "Summary of all completed projects and milestones achieved during the fourth quarter...",
    status: "Published",
    category: "Announcements",
    date: "Dec 15, 2024",
    views: 245,
  },
  {
    id: 2,
    title: "New Service Offerings for 2025",
    excerpt:
      "Exciting new services we'll be offering in the upcoming year including AI integration and...",
    status: "Draft",
    category: "Updates",
    date: "Dec 18, 2024",
    views: 0,
  },
  {
    id: 3,
    title: "Holiday Schedule Notice",
    excerpt:
      "Important information about our availability during the holiday season and how to reach us...",
    status: "Published",
    category: "Announcements",
    date: "Dec 10, 2024",
    views: 189,
  },
  {
    id: 4,
    title: "Case Study: TechCorp E-commerce Success",
    excerpt:
      "How we helped TechCorp increase their online sales by 150% through a complete platform redesign...",
    status: "Published",
    category: "Case Studies",
    date: "Dec 5, 2024",
    views: 432,
  },
  {
    id: 5,
    title: "Best Practices for Remote Collaboration",
    excerpt:
      "Tips and tools we use to maintain effective communication with our clients across time zones...",
    status: "Draft",
    category: "Tips",
    date: "Dec 20, 2024",
    views: 0,
  },
];

const categoryColors = {
  Announcements: "bg-primary/15 text-primary",
  Updates: "bg-accent/15 text-accent",
  "Case Studies": "bg-success/15 text-success",
  Tips: "bg-warning/15 text-warning",
};

export default function Posts() {
  return (
    <div className="min-h-screen">
      <TopBar title="Posts" subtitle="Manage your announcements and updates" />
      <div className="p-6 space-y-6">
        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search posts..."
              className="input-field pl-10 w-full"
            />
          </div>
          <Button className="btn-primary gap-2">
            <Plus className="h-4 w-4" />
            New Post
          </Button>
        </div>

        {/* Posts List */}
        <div className="space-y-4">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="glass-card-hover p-6 group animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <span
                      className={cn(
                        "badge-status",
                        post.status === "Published"
                          ? "badge-completed"
                          : "bg-muted text-muted-foreground"
                      )}
                    >
                      {post.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Tag className="h-3.5 w-3.5" />
                      <span
                        className={cn(
                          "badge-status text-xs",
                          categoryColors[post.category as keyof typeof categoryColors]
                        )}
                      >
                        {post.category}
                      </span>
                    </span>
                    <span>{post.date}</span>
                    {post.status === "Published" && (
                      <span className="flex items-center gap-1">
                        <Eye className="h-3.5 w-3.5" />
                        {post.views} views
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-destructive transition-colors">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
