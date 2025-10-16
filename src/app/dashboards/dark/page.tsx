// app/dashboards/dark/page.tsx
'use client';

import Link from 'next/link';
import { Calendar, Search } from 'lucide-react';

export default function DarkDashboard() {
  const transactions = [
    {
      id: '#LN5102',
      name: 'John Doe',
      amount: '$5,000',
      date: '15 Oct, 2025',
      status: 'approved',
    },
    {
      id: '#LN5101',
      name: 'Jane Smith',
      amount: '$12,300',
      date: '15 Oct, 2025',
      status: 'pending',
    },
    {
      id: '#LN5100',
      name: 'Peter Jones',
      amount: '$7,500',
      date: '14 Oct, 2025',
      status: 'approved',
    },
    {
      id: '#LN5099',
      name: 'Sam Wilson',
      amount: '$2,100',
      date: '14 Oct, 2025',
      status: 'rejected',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-cyan-500/10 text-cyan-400';
      case 'pending':
        return 'bg-yellow-500/10 text-yellow-400';
      case 'rejected':
        return 'bg-red-500/10 text-red-400';
      default:
        return 'bg-gray-500/10 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <h1 className="text-3xl font-semibold text-gray-100">Analyst&apos;s Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 gap-2">
              <Calendar size={16} className="text-gray-400" />
              <select className="border-none outline-none bg-transparent text-sm text-gray-100">
                <option>Last 30 Days</option>
                <option>This Quarter</option>
              </select>
            </div>
            <button className="bg-cyan-600 hover:bg-cyan-500 text-slate-950 p-2 rounded-lg transition-colors font-semibold">
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
            <p className="text-sm text-gray-400 font-medium mb-3">Active Cases</p>
            <p className="text-3xl font-bold text-cyan-400">2,104</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
            <p className="text-sm text-gray-400 font-medium mb-3">Approval Rate</p>
            <p className="text-3xl font-bold text-cyan-400">92.3%</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
            <p className="text-sm text-gray-400 font-medium mb-3">Avg. Processing Time</p>
            <p className="text-3xl font-bold text-cyan-400">2.5 Days</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
            <p className="text-sm text-gray-400 font-medium mb-3">Total Payout (Month)</p>
            <p className="text-3xl font-bold text-cyan-400">$1.2M</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Case Volume Trend</h3>
            <div className="bg-slate-800 rounded-lg h-64 flex items-center justify-center text-gray-500">
              [Dark Chart Placeholder]
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Payout by Bank</h3>
            <div className="bg-slate-800 rounded-lg h-64 flex items-center justify-center text-gray-500">
              [Dark Chart Placeholder]
            </div>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-100 mb-4">Recent Transactions</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-4 px-4 font-medium text-gray-400">Case ID</th>
                  <th className="text-left py-4 px-4 font-medium text-gray-400">Customer Name</th>
                  <th className="text-left py-4 px-4 font-medium text-gray-400">Amount</th>
                  <th className="text-left py-4 px-4 font-medium text-gray-400">Date</th>
                  <th className="text-left py-4 px-4 font-medium text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx, i) => (
                  <tr key={i} className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors">
                    <td className="py-4 px-4 text-gray-200 font-medium">{tx.id}</td>
                    <td className="py-4 px-4 text-gray-300">{tx.name}</td>
                    <td className="py-4 px-4 text-gray-300">{tx.amount}</td>
                    <td className="py-4 px-4 text-gray-400">{tx.date}</td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(tx.status)}`}>
                        {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center py-4">
          <Link href="/dashboards">
            <span className="text-cyan-400 hover:text-cyan-300 font-semibold">
              ← Back to Dashboard Hub
            </span>
          </Link>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 py-4 text-sm text-gray-500 border-t border-slate-800">
          <p>© 2024, TimeBachalo</p>
        </footer>
      </div>
    </div>
  );
}