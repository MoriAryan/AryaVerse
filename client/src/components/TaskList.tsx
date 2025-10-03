import { TaskItem } from "./TaskItem";
import type { Task } from "@shared/schema";

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  emptyMessage?: string;
}

export function TaskList({ tasks, onToggle, onEdit, onDelete, emptyMessage = "No tasks yet" }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12" data-testid="empty-state">
        <p className="text-muted-foreground">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
