import { useState, useMemo } from "react";
import { format } from "date-fns";
import { CheckCircle2, ListTodo, AlertCircle } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { TaskList } from "@/components/TaskList";
import { AddTaskDialog } from "@/components/AddTaskDialog";
import { EditTaskDialog } from "@/components/EditTaskDialog";
import type { Task, InsertTask } from "@shared/schema";

export default function Dashboard() {
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

  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const overdue = tasks.filter(t => new Date(t.deadline) < new Date() && !t.completed).length;
    return { total, completed, overdue };
  }, [tasks]);

  const sortedTasks = useMemo(() => {
    return [...tasks].sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime());
  }, [tasks]);

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

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setEditDialogOpen(true);
  };

  const handleUpdateTask = (id: string, data: Partial<InsertTask>) => {
    //todo: remove mock functionality
    setTasks(tasks.map(t => t.id === id ? { ...t, ...data } : t));
  };

  const handleDeleteTask = (id: string) => {
    //todo: remove mock functionality
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="p-6 space-y-8 pb-24 md:pb-6">
      <div>
        <h1 className="text-4xl font-bold text-foreground">Welcome back!</h1>
        <p className="text-muted-foreground mt-2">{format(new Date(), 'EEEE, MMMM dd, yyyy')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Tasks" value={stats.total} icon={ListTodo} variant="primary" />
        <StatCard title="Completed" value={stats.completed} icon={CheckCircle2} variant="success" />
        <StatCard title="Overdue" value={stats.overdue} icon={AlertCircle} variant="warning" />
      </div>

      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">All Tasks</h2>
          <div className="hidden md:block">
            <AddTaskDialog onAdd={handleAddTask} />
          </div>
        </div>
        <TaskList
          tasks={sortedTasks}
          onToggle={handleToggleTask}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
          emptyMessage="No tasks yet. Create your first task to get started!"
        />
      </div>

      <div className="md:hidden">
        <AddTaskDialog onAdd={handleAddTask} variant="fab" />
      </div>

      <EditTaskDialog
        task={editingTask}
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        onUpdate={handleUpdateTask}
      />
    </div>
  );
}
