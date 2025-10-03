import { useState, useMemo } from "react";
import { LucideIcon } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { TaskList } from "@/components/TaskList";
import { AddTaskDialog } from "@/components/AddTaskDialog";
import { EditTaskDialog } from "@/components/EditTaskDialog";
import type { Task, InsertTask, CategoryId } from "@shared/schema";

interface CategoryPageProps {
  title: string;
  icon: LucideIcon;
  category: CategoryId;
  tasks: Task[];
  onAddTask: (data: InsertTask) => void;
  onToggleTask: (id: string) => void;
  onEditTask: (id: string, data: Partial<InsertTask>) => void;
  onDeleteTask: (id: string) => void;
}

export default function CategoryPage({
  title,
  icon: Icon,
  category,
  tasks,
  onAddTask,
  onToggleTask,
  onEditTask,
  onDeleteTask,
}: CategoryPageProps) {
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  const categoryTasks = useMemo(() => {
    return tasks.filter(t => t.category === category)
      .sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime());
  }, [tasks, category]);

  const stats = useMemo(() => {
    const total = categoryTasks.length;
    const completed = categoryTasks.filter(t => t.completed).length;
    const progress = total > 0 ? (completed / total) * 100 : 0;
    return { total, completed, pending: total - completed, progress };
  }, [categoryTasks]);

  const handleEdit = (task: Task) => {
    setEditingTask(task);
    setEditDialogOpen(true);
  };

  return (
    <div className="p-6 space-y-8 pb-24 md:pb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 p-3 rounded-lg">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-muted-foreground mt-1">
              {stats.completed} of {stats.total} completed
            </p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-32">
              <Progress value={stats.progress} className="h-2" />
            </div>
            <span className="text-sm font-medium">{Math.round(stats.progress)}%</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4">
          <p className="text-sm text-muted-foreground">Total</p>
          <p className="text-2xl font-bold mt-1" data-testid="text-total-tasks">{stats.total}</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground">Completed</p>
          <p className="text-2xl font-bold mt-1 text-chart-3" data-testid="text-completed-tasks">{stats.completed}</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground">Pending</p>
          <p className="text-2xl font-bold mt-1 text-chart-4" data-testid="text-pending-tasks">{stats.pending}</p>
        </Card>
      </div>

      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Tasks</h2>
          <div className="hidden md:block">
            <AddTaskDialog onAdd={onAddTask} defaultCategory={category} />
          </div>
        </div>
        <TaskList
          tasks={categoryTasks}
          onToggle={onToggleTask}
          onEdit={handleEdit}
          onDelete={onDeleteTask}
          emptyMessage={`No ${title.toLowerCase()} tasks yet. Add your first task!`}
        />
      </div>

      <div className="md:hidden">
        <AddTaskDialog onAdd={onAddTask} defaultCategory={category} variant="fab" />
      </div>

      <EditTaskDialog
        task={editingTask}
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        onUpdate={onEditTask}
      />
    </div>
  );
}
