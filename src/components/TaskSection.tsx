import type { Task } from '@/lib/types';
import TaskCard from './TaskCard';

interface TaskSectionProps {
  pillar: string;
  tasks: Task[];
  onStatusChange: (taskId: number, newStatus: Task['status']) => void;
}

export default function TaskSection({ pillar, tasks, onStatusChange }: TaskSectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-3 mb-6">{pillar}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} onStatusChange={onStatusChange} />
        ))}
      </div>
    </section>
  );
}