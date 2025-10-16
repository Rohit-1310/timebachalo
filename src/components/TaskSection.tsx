import type { Task } from '@/lib/types';
import TaskCard from './TaskCard';
import { TrendingUp, Lock, Zap, Layers, Users, Network } from 'lucide-react';

interface TaskSectionProps {
  pillar: string;
  tasks: Task[];
  onStatusChange: (taskId: number, newStatus: Task['status']) => void;
}

export default function TaskSection({ pillar, tasks, onStatusChange }: TaskSectionProps) {
  const getPillarIcon = (pillarName: string) => {
    if (pillarName.includes('Security')) return <Lock size={24} className="text-red-600" />;
    if (pillarName.includes('Regulatory')) return <Zap size={24} className="text-yellow-600" />;
    if (pillarName.includes('Technology')) return <Layers size={24} className="text-blue-600" />;
    if (pillarName.includes('User Experience')) return <Users size={24} className="text-purple-600" />;
    if (pillarName.includes('Integration')) return <Network size={24} className="text-green-600" />;
    return <TrendingUp size={24} className="text-gray-600" />;
  };

  const completedCount = tasks.filter(t => t.status === 'Completed').length;
  const completedPercentage = Math.round((completedCount / tasks.length) * 100);

  return (
    <section className="mb-12">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gray-100 rounded-lg">
          {getPillarIcon(pillar)}
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900">{pillar}</h2>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-2">
              <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full transition-all"
                  style={{ width: `${completedPercentage}%` }}
                />
              </div>
              <span className="text-sm font-semibold text-gray-600">
                {completedCount}/{tasks.length}
              </span>
            </div>
            <span className="text-sm text-gray-500">
              {tasks.filter(t => t.priority === 'High').length} High Priority
            </span>
          </div>
        </div>
      </div>

      {/* Tasks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} onStatusChange={onStatusChange} />
        ))}
      </div>
    </section>
  );
}