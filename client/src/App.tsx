import { useState } from "react";
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { BookOpen, FlaskConical, FolderKanban, GraduationCap, BookMarked } from "lucide-react";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AppSidebar } from "@/components/AppSidebar";
import { MobileNav } from "@/components/MobileNav";
import Dashboard from "@/pages/Dashboard";
import CategoryPage from "@/pages/CategoryPage";
import type { Task, InsertTask } from "@shared/schema";

function Router() {
  //todo: remove mock functionality
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Complete React Tutorial',
      description: 'Finish hooks section',
      category: 'tutorials',
      deadline: new Date(Date.now() + 86400000),
      completed: false,
    },
    {
      id: '2',
      title: 'Database Lab Assignment',
      category: 'labs',
      deadline: new Date(Date.now() - 86400000),
      completed: false,
      description: null,
    },
    {
      id: '3',
      title: 'DRISTI Project Sprint 1',
      category: 'projects',
      deadline: new Date(Date.now() + 172800000),
      completed: true,
      description: null,
    },
  ]);

  const handleAddTask = (data: InsertTask) => {
    //todo: remove mock functionality
    const newTask: Task = {
      id: String(Date.now()),
      title: data.title,
      description: data.description || null,
      category: data.category,
      deadline: data.deadline,
      completed: data.completed || false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleToggleTask = (id: string) => {
    //todo: remove mock functionality
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handleEditTask = (id: string, data: Partial<InsertTask>) => {
    //todo: remove mock functionality
    setTasks(tasks.map(t => t.id === id ? { ...t, ...data } : t));
  };

  const handleDeleteTask = (id: string) => {
    //todo: remove mock functionality
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <Switch>
      <Route path="/">
        <Dashboard />
      </Route>
      <Route path="/tutorials">
        <CategoryPage
          title="Tutorials"
          icon={BookOpen}
          category="tutorials"
          tasks={tasks}
          onAddTask={handleAddTask}
          onToggleTask={handleToggleTask}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
        />
      </Route>
      <Route path="/labs">
        <CategoryPage
          title="Labs"
          icon={FlaskConical}
          category="labs"
          tasks={tasks}
          onAddTask={handleAddTask}
          onToggleTask={handleToggleTask}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
        />
      </Route>
      <Route path="/projects">
        <CategoryPage
          title="Projects"
          icon={FolderKanban}
          category="projects"
          tasks={tasks}
          onAddTask={handleAddTask}
          onToggleTask={handleToggleTask}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
        />
      </Route>
      <Route path="/semester">
        <CategoryPage
          title="Current Sem"
          icon={GraduationCap}
          category="semester"
          tasks={tasks}
          onAddTask={handleAddTask}
          onToggleTask={handleToggleTask}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
        />
      </Route>
      <Route path="/learning">
        <CategoryPage
          title="Learning Paths"
          icon={BookMarked}
          category="learning"
          tasks={tasks}
          onAddTask={handleAddTask}
          onToggleTask={handleToggleTask}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
        />
      </Route>
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <SidebarProvider>
            <div className="flex h-screen w-full">
              <AppSidebar />
              <div className="flex flex-col flex-1 overflow-hidden">
                <header className="flex items-center justify-between p-4 border-b bg-card">
                  <SidebarTrigger data-testid="button-sidebar-toggle" />
                  <ThemeToggle />
                </header>
                <main className="flex-1 overflow-auto">
                  <Router />
                </main>
              </div>
            </div>
            <MobileNav />
          </SidebarProvider>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
