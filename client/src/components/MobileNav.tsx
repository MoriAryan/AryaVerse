import { Link, useLocation } from "wouter";
import {
  BookOpen,
  FlaskConical,
  FolderKanban,
  GraduationCap,
  LayoutDashboard,
  BookMarked,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, url: "/", label: "Dashboard" },
  { icon: BookOpen, url: "/tutorials", label: "Tutorials" },
  { icon: FlaskConical, url: "/labs", label: "Labs" },
  { icon: FolderKanban, url: "/projects", label: "Projects" },
  { icon: GraduationCap, url: "/semester", label: "Semester" },
  { icon: BookMarked, url: "/learning", label: "Learning" },
];

export function MobileNav() {
  const [location] = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-card md:hidden">
      <div className="flex items-center justify-around h-16">
        {navItems.slice(0, 5).map((item) => {
          const Icon = item.icon;
          const isActive = location === item.url;
          return (
            <Link
              key={item.url}
              href={item.url}
              data-testid={`mobile-link-${item.label.toLowerCase()}`}
            >
              <button className="flex flex-col items-center justify-center gap-1 px-3 py-2 hover-elevate active-elevate-2 rounded-md">
                <Icon className={`h-5 w-5 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                <span className={`text-xs ${isActive ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                  {item.label === "Dashboard" ? "Home" : item.label}
                </span>
              </button>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
