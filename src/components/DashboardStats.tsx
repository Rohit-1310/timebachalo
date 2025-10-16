import { TrendingUp, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import StatCard from './StatCard';

interface DashboardStatsProps {
  stats: {
    total: number;
    completed: number;
    inProgress: number;
    notStarted: number;
    highPriority: number;
  };
}

export default function DashboardStats({ stats }: DashboardStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
      <StatCard
        label="Total Tasks"
        value={stats.total}
        icon={<TrendingUp className="text-blue-600" size={24} />}
        bgColor="bg-blue-100"
      />
      <StatCard
        label="Completed"
        value={stats.completed}
        icon={<CheckCircle2 className="text-green-600" size={24} />}
        bgColor="bg-green-100"
        textColor="text-green-600"
      />
      <StatCard
        label="In Progress"
        value={stats.inProgress}
        icon={<Clock className="text-yellow-600" size={24} />}
        bgColor="bg-yellow-100"
        textColor="text-yellow-600"
      />
      <StatCard
        label="Not Started"
        value={stats.notStarted}
        icon={<AlertCircle className="text-gray-600" size={24} />}
        bgColor="bg-gray-100"
        textColor="text-gray-600"
      />
      <StatCard
        label="High Priority"
        value={stats.highPriority}
        icon={<AlertCircle className="text-red-600" size={24} />}
        bgColor="bg-red-100"
        textColor="text-red-600"
      />
    </div>
  );
}