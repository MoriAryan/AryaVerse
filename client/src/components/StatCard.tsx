import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  variant: 'primary' | 'success' | 'warning';
}

export function StatCard({ title, value, icon: Icon, variant }: StatCardProps) {
  const gradients = {
    primary: 'bg-gradient-to-br from-primary to-accent',
    success: 'bg-gradient-to-br from-chart-3 to-chart-3',
    warning: 'bg-gradient-to-br from-chart-4 to-chart-4',
  };

  return (
    <Card className={`${gradients[variant]} text-white p-6`} data-testid={`stat-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium opacity-90">{title}</p>
          <p className="text-3xl font-bold mt-2" data-testid={`text-${title.toLowerCase().replace(/\s+/g, '-')}-value`}>{value}</p>
        </div>
        <div className="bg-white/20 p-3 rounded-lg">
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </Card>
  );
}
