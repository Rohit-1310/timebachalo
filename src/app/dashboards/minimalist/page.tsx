// app/dashboards/minimalist/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Calendar, Search } from 'lucide-react';

export default function AnalystDarkDashboard() {
  const [dateFilter, setDateFilter] = useState('Last 30 Days');

  // KPI Data
  const kpis = [
    { title: 'Active Cases', value: '2,104' },
    { title: 'Approval Rate', value: '92.3%' },
    { title: 'Avg. Processing Time', value: '2.5 Days' },
    { title: 'Total Payout (Month)', value: '$1.2M' },
  ];

  // Chart Data
  const caseVolumeTrendData = [
    { month: 'Jan', cases: 1200, processed: 900 },
    { month: 'Feb', cases: 1400, processed: 1100 },
    { month: 'Mar', cases: 1600, processed: 1300 },
    { month: 'Apr', cases: 1800, processed: 1500 },
    { month: 'May', cases: 2000, processed: 1700 },
    { month: 'Jun', cases: 2104, processed: 1900 },
  ];

  const payoutByBankData = [
    { bank: 'Axis Bank', payout: 350 },
    { bank: 'HDFC Bank', payout: 420 },
    { bank: 'ICICI Bank', payout: 380 },
    { bank: 'SBI', payout: 280 },
    { bank: 'Kotak', payout: 320 },
  ];

  // Transaction Data
  const transactions = [
    { caseId: '#LN5102', customerName: 'John Doe', amount: '$5,000', date: '15 Oct, 2025', status: 'Approved' },
    { caseId: '#LN5101', customerName: 'Jane Smith', amount: '$12,300', date: '15 Oct, 2025', status: 'Pending' },
    { caseId: '#LN5100', customerName: 'Peter Jones', amount: '$7,500', date: '14 Oct, 2025', status: 'Approved' },
    { caseId: '#LN5099', customerName: 'Sam Wilson', amount: '$2,100', date: '14 Oct, 2025', status: 'Rejected' },
  ];

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-cyan-500/10 text-cyan-400';
      case 'Pending':
        return 'bg-yellow-500/10 text-yellow-400';
      case 'Rejected':
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
          <h1 className="text-3xl font-semibold text-gray-100">Analyst&#39;s Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 gap-2">
              <Calendar size={16} className="text-gray-400" />
              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="border-none outline-none bg-transparent text-sm text-gray-100"
              >
                <option>Last 30 Days</option>
                <option>This Quarter</option>
                <option>This Year</option>
              </select>
            </div>
            <button className="bg-cyan-600 hover:bg-cyan-500 text-slate-950 p-2 rounded-lg transition-colors font-semibold">
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpis.map((kpi, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
              <p className="text-sm text-gray-400 font-medium mb-3">{kpi.title}</p>
              <p className="text-3xl font-bold text-cyan-400">{kpi.value}</p>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Case Volume Trend */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Case Volume Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={caseVolumeTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" stroke="#94a3b8" style={{ fontSize: '12px' }} />
                <YAxis stroke="#94a3b8" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #475569',
                    borderRadius: '8px',
                  }}
                  labelStyle={{ color: '#f1f5f9' }}
                />
                <Legend />
                <Line type="monotone" dataKey="cases" stroke="#00BFFF" strokeWidth={2} dot={{ fill: '#00BFFF' }} name="Total Cases" />
                <Line type="monotone" dataKey="processed" stroke="#00E5FF" strokeWidth={2} dot={{ fill: '#00E5FF' }} name="Processed" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Payout by Bank */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Payout by Bank</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={payoutByBankData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="bank" stroke="#94a3b8" style={{ fontSize: '12px' }} />
                <YAxis stroke="#94a3b8" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #475569',
                    borderRadius: '8px',
                  }}
                  labelStyle={{ color: '#f1f5f9' }}
                />
                <Legend />
                <Bar dataKey="payout" fill="#00BFFF" name="Payout Amount" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Transactions Table */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-100 mb-4">Recent Transactions</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="px-6 py-4 text-left font-medium text-gray-400">Case ID</th>
                  <th className="px-6 py-4 text-left font-medium text-gray-400">Customer Name</th>
                  <th className="px-6 py-4 text-left font-medium text-gray-400">Amount</th>
                  <th className="px-6 py-4 text-left font-medium text-gray-400">Date</th>
                  <th className="px-6 py-4 text-left font-medium text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx, i) => (
                  <tr key={i} className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4 text-gray-200 font-medium">{tx.caseId}</td>
                    <td className="px-6 py-4 text-gray-300">{tx.customerName}</td>
                    <td className="px-6 py-4 text-gray-300">{tx.amount}</td>
                    <td className="px-6 py-4 text-gray-400">{tx.date}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadgeColor(tx.status)}`}>
                        {tx.status}
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