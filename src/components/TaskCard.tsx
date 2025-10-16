import type { Task } from '@/lib/types';
import { getStatusColor, getPriorityColor, getStatusBadgeColor } from '@/lib/utils';
import { CheckCircle2, Clock, AlertCircle, Zap } from 'lucide-react';

interface TaskCardProps {
  task: Task;
  onStatusChange: (taskId: number, newStatus: Task['status']) => void;
}

export default function TaskCard({ task, onStatusChange }: TaskCardProps) {
  const getStatusIcon = (status: Task['status']) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle2 size={20} className="text-green-600" />;
      case 'In Progress':
        return <Clock size={20} className="text-yellow-600" />;
      default:
        return <AlertCircle size={20} className="text-gray-400" />;
    }
  };

  const getPriorityIcon = (priority: Task['priority']) => {
    return priority === 'High' ? <Zap size={16} className="text-red-600" /> : null;
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-sm border-l-4 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${getStatusColor(
        task.status
      )}`}
    >
      {/* Card Header */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              {getStatusIcon(task.status)}
              <h3 className="text-lg font-bold text-gray-900">{task.component}</h3>
            </div>
            <p className="text-xs text-gray-500">Status: {task.status}</p>
          </div>
          <div className="flex gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${getPriorityColor(task.priority)}`}>
              {getPriorityIcon(task.priority)}
              {task.priority}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="space-y-3">
          {/* Focus Section */}
          <div>
            <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">Focus Areas</p>
            <div className="text-sm text-gray-600 leading-relaxed">
              {task.focus.split('<br>').map((line, i) => (
                <div key={i} className="flex gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>{line.replace(/^- /, '')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Section */}
          <div>
            <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">Tools & Services</p>
            <div className="flex flex-wrap gap-1">
              {task.tools.split(',').map((tool, i) => (
                <span key={i} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-md font-medium">
                  {tool.trim()}
                </span>
              ))}
            </div>
          </div>

          {/* Notes Section */}
          {task.notes && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mt-3">
              <p className="text-xs font-semibold text-yellow-900 mb-1">⚠️ Important Note</p>
              <p className="text-sm text-yellow-800">{task.notes}</p>
            </div>
          )}
        </div>
      </div>

      {/* Status Dropdown */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <label className="block text-xs font-semibold text-gray-700 mb-2">Update Status</label>
        <div className="relative">
          <select
            value={task.status}
            onChange={(e) => onStatusChange(task.id, e.target.value as Task['status'])}
            className={`w-full p-2.5 border rounded-lg font-semibold text-sm appearance-none cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${getStatusBadgeColor(
              task.status
            )}`}
            style={{
              backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3e%3cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'/%3e%3c/svg%3e")`,
              backgroundPosition: 'right 0.5rem center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '1.25rem',
              paddingRight: '2rem',
            }}
          >
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="mt-4 flex items-center justify-between text-xs">
        <span className="text-gray-500">Task #{task.id}</span>
        <span className={`font-semibold ${task.status === 'Completed' ? 'text-green-600' : 'text-gray-400'}`}>
          {task.status === 'Completed' ? '✓ Complete' : '○ Pending'}
        </span>
      </div>
    </div>
  );
}