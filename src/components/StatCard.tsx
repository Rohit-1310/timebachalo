import { ReactNode } from 'react';

interface StatCardProps {
  label: string;
  value: number;
  icon: ReactNode;
  bgColor: string;
  textColor?: string;
}

export default function StatCard({ label, value, icon, bgColor, textColor = 'text-gray-900' }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 font-medium">{label}</p>
          <p className={`text-3xl font-bold ${textColor} mt-1`}>{value}</p>
        </div>
        <div className={`p-3 ${bgColor} rounded-lg`}>
          {icon}
        </div>
      </div>
    </div>
  );
}