import { format, isPast, isToday, isTomorrow } from "date-fns";
import { Check, Clock, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import type { Task } from "@shared/schema";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

export function TaskItem({ task, onToggle, onEdit, onDelete }: TaskItemProps) {
  const isOverdue = isPast(task.deadline) && !task.completed;
  const deadlineText = isToday(task.deadline) 
    ? "Today" 
    : isTomorrow(task.deadline)
    ? "Tomorrow"
    : format(task.deadline, 'MMM dd, yyyy');

  return (
    <div 
      className={`flex items-center gap-4 p-4 border rounded-md bg-card hover-elevate ${isOverdue ? 'border-l-4 border-l-chart-4' : ''}`}
      data-testid={`task-item-${task.id}`}
    >
      <Checkbox
        checked={task.completed}
        onCheckedChange={() => onToggle(task.id)}
        data-testid={`checkbox-task-${task.id}`}
      />
      <div className="flex-1 min-w-0">
        <p className={`font-medium ${task.completed ? 'line-through opacity-60' : ''}`} data-testid={`text-task-title-${task.id}`}>
          {task.title}
        </p>
        {task.description && (
          <p className="text-sm text-muted-foreground truncate">{task.description}</p>
        )}
      </div>
      <div className="flex items-center gap-2">
        <Badge 
          variant={isOverdue ? "destructive" : task.completed ? "secondary" : "outline"}
          className="flex items-center gap-1"
          data-testid={`badge-deadline-${task.id}`}
        >
          <Clock className="h-3 w-3" />
          {deadlineText}
        </Badge>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onEdit(task)}
          data-testid={`button-edit-${task.id}`}
        >
          <Pencil className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onDelete(task.id)}
          data-testid={`button-delete-${task.id}`}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
