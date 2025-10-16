import type { Task } from '@/lib/types';
import { getStatusColor, getPriorityColor, getStatusBadgeColor } from '@/lib/utils';

interface TaskCardProps {
  task: Task;
  onStatusChange: (taskId: number, newStatus: Task['status']) => void;
}

export default function TaskCard({ task, onStatusChange }: TaskCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-sm border-l-4 p-5 transition-all duration-300 hover:shadow-md ${getStatusColor(task.status)}`}>
      <div className="mb-4">
        <div className="flex justify-between items-start gap-3 mb-3">
          <h3 className="text-lg font-semibold text-gray-900 flex-1">{task.component}</h3>
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${getPriorityColor(task.priority)}`}>
            {task.priority}
          </span>
        </div>

        <div className="space-y-3 text-sm">
          <div>
            <p className="font-semibold text-gray-700 mb-1">Focus</p>
            <p className="text-gray-600">{task.focus}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700 mb-1">Tools</p>
            <p className="text-gray-600">{task.tools}</p>
          </div>
          {task.notes && (
            <div>
              <p className="font-semibold text-gray-700 mb-1">Note</p>
              <p className="text-gray-500 italic">{task.notes}</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4">
        <div className="relative">
          <select
            value={task.status}
            onChange={(e) => onStatusChange(task.id, e.target.value as Task['status'])}
            className={`w-full p-2.5 border rounded-md font-semibold text-sm appearance-none cursor-pointer transition-colors ${getStatusBadgeColor(task.status)} focus:outline-none focus:ring-2 focus:ring-blue-500`}
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
    </div>
  );
}