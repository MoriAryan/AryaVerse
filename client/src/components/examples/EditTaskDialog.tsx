import { useState } from 'react';
import { EditTaskDialog } from '../EditTaskDialog';
import { Button } from '@/components/ui/button';
import type { Task } from '@shared/schema';

export default function EditTaskDialogExample() {
  const [open, setOpen] = useState(false);
  const mockTask: Task = {
    id: '1',
    title: 'Complete Data Structures Assignment',
    description: 'Implement binary search tree',
    category: 'tutorials',
    deadline: new Date(Date.now() + 86400000),
    completed: false,
  };

  return (
    <div className="p-6">
      <Button onClick={() => setOpen(true)}>Open Edit Dialog</Button>
      <EditTaskDialog
        task={mockTask}
        open={open}
        onOpenChange={setOpen}
        onUpdate={(id, data) => console.log('Update task:', id, data)}
      />
    </div>
  );
}
