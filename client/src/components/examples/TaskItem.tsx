import { TaskItem } from '../TaskItem';
import type { Task } from '@shared/schema';

export default function TaskItemExample() {
  const mockTask: Task = {
    id: '1',
    title: 'Complete Data Structures Assignment',
    description: 'Implement binary search tree',
    category: 'tutorials',
    deadline: new Date(Date.now() + 86400000),
    completed: false,
  };

  return (
    <div className="p-6 max-w-2xl">
      <TaskItem
        task={mockTask}
        onToggle={(id) => console.log('Toggle task:', id)}
        onEdit={(task) => console.log('Edit task:', task)}
        onDelete={(id) => console.log('Delete task:', id)}
      />
    </div>
  );
}
