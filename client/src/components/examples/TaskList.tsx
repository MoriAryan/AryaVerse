import { TaskList } from '../TaskList';
import type { Task } from '@shared/schema';

export default function TaskListExample() {
  const mockTasks: Task[] = [
    {
      id: '1',
      title: 'Complete Data Structures Assignment',
      description: 'Implement binary search tree',
      category: 'tutorials',
      deadline: new Date(Date.now() + 86400000),
      completed: false,
    },
    {
      id: '2',
      title: 'Submit Lab Report',
      category: 'labs',
      deadline: new Date(Date.now() - 86400000),
      completed: false,
      description: null,
    },
    {
      id: '3',
      title: 'Project Presentation',
      category: 'projects',
      deadline: new Date(Date.now() + 172800000),
      completed: true,
      description: null,
    },
  ];

  return (
    <div className="p-6 max-w-3xl">
      <TaskList
        tasks={mockTasks}
        onToggle={(id) => console.log('Toggle:', id)}
        onEdit={(task) => console.log('Edit:', task)}
        onDelete={(id) => console.log('Delete:', id)}
      />
    </div>
  );
}
