// app/page.tsx
'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import DashboardStats from '@/components/DashboardStats';
import ProgressBar from '@/components/ProgressBar';
import TaskBoard from '@/components/TaskBoard';
import { TASKS } from '@/lib/tasks';
import type { Task } from '@/lib/types';

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>(TASKS);

  const stats = useMemo(() => {
    const completed = tasks.filter(t => t.status === 'Completed').length;
    const inProgress = tasks.filter(t => t.status === 'In Progress').length;
    const notStarted = tasks.filter(t => t.status === 'Not Started').length;
    const highPriority = tasks.filter(t => t.priority === 'High').length;
    const progress = Math.round((completed / tasks.length) * 100);

    return { completed, inProgress, notStarted, highPriority, progress, total: tasks.length };
  }, [tasks]);

  const handleStatusChange = (taskId: number, newStatus: Task['status']) => {
    setTasks(tasks.map(t => t.id === taskId ? { ...t, status: newStatus } : t));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header />
        <DashboardStats stats={stats} />
        <ProgressBar progress={stats.progress} />
        <TaskBoard tasks={tasks} onStatusChange={handleStatusChange} />
      </div>
    </div>
  );
}