import { AddTaskDialog } from '../AddTaskDialog';
import type { InsertTask } from '@shared/schema';

export default function AddTaskDialogExample() {
  return (
    <div className="p-6 flex gap-4">
      <AddTaskDialog
        onAdd={(task: InsertTask) => console.log('Add task:', task)}
        variant="default"
      />
      <AddTaskDialog
        onAdd={(task: InsertTask) => console.log('Add task:', task)}
        variant="fab"
      />
    </div>
  );
}
