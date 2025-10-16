// app/dashboards/modern/page.tsx
'use client';

import Link from 'next/link';
import { Plus, Download, CheckCircle2, Clock } from 'lucide-react';

export default function ModernDashboard() {
  return (
    <div className="min-h-screen bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome Back!</h1>
          <p className="text-lg text-gray-600">Here&#39;s your week at a glance.</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 flex items-center gap-4 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">1,340</p>
              <p className="text-sm text-gray-600">Total Customers</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 flex items-center gap-4 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-teal-500 rounded-xl flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                <path d="M9.5 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5z" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">98.2%</p>
              <p className="text-sm text-gray-600">Uptime</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all">
              <Plus size={24} className="mb-2" />
              <p className="text-sm font-medium">New Case</p>
            </button>
            <button className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all">
              <Download size={24} className="mb-2" />
              <p className="text-sm font-medium">Report</p>
            </button>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Chart */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-md border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Case Distribution</h2>
            <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center text-gray-500">
              [Donut Chart Placeholder]
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-start justify-between p-3 border border-gray-100 rounded-lg">
                <p className="text-sm text-gray-700">Payout for #LN5102 confirmed.</p>
                <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full whitespace-nowrap">Paid</span>
              </div>
              <div className="flex items-start justify-between p-3 border border-gray-100 rounded-lg">
                <p className="text-sm text-gray-700">New documents for #LN5101.</p>
                <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full whitespace-nowrap">In Review</span>
              </div>
              <div className="flex items-start justify-between p-3 border border-gray-100 rounded-lg">
                <p className="text-sm text-gray-700">Payout for #LN5095 confirmed.</p>
                <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full whitespace-nowrap">Paid</span>
              </div>
              <div className="flex items-start justify-between p-3 border border-gray-100 rounded-lg">
                <p className="text-sm text-gray-700">New case #LN5103 created.</p>
                <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full whitespace-nowrap">In Review</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center py-4">
          <Link href="/dashboards">
            <span className="text-purple-600 hover:text-purple-800 font-semibold">
              ← Back to Dashboard Hub
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}