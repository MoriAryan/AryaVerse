import { StatCard } from '../StatCard';
import { CheckCircle2 } from 'lucide-react';

export default function StatCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      <StatCard title="Total Tasks" value={24} icon={CheckCircle2} variant="primary" />
      <StatCard title="Completed" value={18} icon={CheckCircle2} variant="success" />
      <StatCard title="Overdue" value={3} icon={CheckCircle2} variant="warning" />
    </div>
  );
}
