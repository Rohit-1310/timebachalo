import type { Task } from './types';

export const getStatusColor = (status: Task['status']) => {
  switch (status) {
    case 'Completed': return 'border-green-500 bg-green-50';
    case 'In Progress': return 'border-yellow-500 bg-yellow-50';
    default: return 'border-gray-300 bg-gray-50';
  }
};

export const getPriorityColor = (priority: Task['priority']) => {
  return priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800';
};

export const getStatusBadgeColor = (status: Task['status']) => {
  switch (status) {
    case 'Completed': return 'bg-green-100 text-green-800';
    case 'In Progress': return 'bg-yellow-100 text-yellow-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};