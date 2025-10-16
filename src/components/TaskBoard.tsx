import type { Task } from '@/lib/types';
import TaskSection from './TaskSection';

interface TaskBoardProps {
  tasks: Task[];
  onStatusChange: (taskId: number, newStatus: Task['status']) => void;
}

export default function TaskBoard({ tasks, onStatusChange }: TaskBoardProps) {
  const pillars = [...new Set(tasks.map(t => t.pillar))];

  return (
    <main className="space-y-12">
      {pillars.map(pillar => (
        <TaskSection
          key={pillar}
          pillar={pillar}
          tasks={tasks.filter(t => t.pillar === pillar)}
          onStatusChange={onStatusChange}
        />
      ))}
    </main>
  );
}