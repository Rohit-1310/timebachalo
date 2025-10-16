'use client';

import Link from 'next/link';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, ComposedChart } from 'recharts';
import { Users, TrendingUp, Award, Clock } from 'lucide-react';

export default function HRAnalyticsDashboard() {
  // KPI Data
  const kpis = [
    { icon: Users, label: 'Total Employees', value: '1,245', change: '+5.2%', color: 'bg-indigo-500' },
    { icon: TrendingUp, label: 'Employee Growth', value: '8.3%', change: '+2.1%', color: 'bg-cyan-500' },
    { icon: Award, label: 'Avg Rating', value: '4.2/5', change: '+0.3', color: 'bg-pink-500' },
    { icon: Clock, label: 'Avg Tenure', value: '4.8 yrs', change: '+0.6 yrs', color: 'bg-green-500' },
  ];

  // Department Distribution
  const departmentData = [
    { dept: 'Engineering', count: 340, color: '#3B82F6' },
    { dept: 'Sales', count: 220, color: '#8B5CF6' },
    { dept: 'Marketing', count: 180, color: '#EC4899' },
    { dept: 'HR', count: 95, color: '#F59E0B' },
    { dept: 'Finance', count: 130, color: '#10B981' },
    { dept: 'Operations', count: 280, color: '#06B6D4' },
  ];

  // Employee Status
  const employeeStatusData = [
    { name: 'Active', value: 1150, color: '#10B981' },
    { name: 'On Leave', value: 65, color: '#F59E0B' },
    { name: 'Inactive', value: 30, color: '#EF4444' },
  ];

  // Monthly Hiring Trend
  const hiringTrendData = [
    { month: 'Jan', hired: 15, left: 8, internal: 12 },
    { month: 'Feb', hired: 22, left: 5, internal: 14 },
    { month: 'Mar', hired: 18, left: 7, internal: 16 },
    { month: 'Apr', hired: 28, left: 6, internal: 18 },
    { month: 'May', hired: 32, left: 9, internal: 20 },
    { month: 'Jun', hired: 25, left: 4, internal: 15 },
  ];

  // Salary Range Distribution
  const salaryRangeData = [
    { range: '0-50K', count: 280 },
    { range: '50-75K', count: 360 },
    { range: '75-100K', count: 320 },
    { range: '100-150K', count: 210 },
    { range: '150K+', count: 75 },
  ];

  // Training Hours by Department
  const trainingData = [
    { dept: 'Engineering', hours: 240 },
    { dept: 'Sales', hours: 180 },
    { dept: 'Marketing', hours: 150 },
    { dept: 'HR', hours: 120 },
    { dept: 'Finance', hours: 140 },
  ];

  // Attrition Rate Trend
  const attritionTrendData = [
    { month: 'Jan', rate: 2.1 },
    { month: 'Feb', rate: 1.8 },
    { month: 'Mar', rate: 2.3 },
    { month: 'Apr', rate: 1.9 },
    { month: 'May', rate: 2.4 },
    { month: 'Jun', rate: 1.6 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">HR Analytics Dashboard</h1>
          <p className="text-gray-600">Employee insights and workforce metrics</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpis.map((kpi, i) => {
            const Icon = kpi.icon;
            return (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium mb-2">{kpi.label}</p>
                    <p className="text-2xl font-bold text-gray-900 mb-1">{kpi.value}</p>
                    <p className="text-green-600 text-sm font-semibold">{kpi.change}</p>
                  </div>
                  <div className={`${kpi.color} p-3 rounded-lg`}>
                    <Icon size={20} className="text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Department Distribution */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Employees by Department</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={departmentData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis type="number" stroke="#6B7280" />
                <YAxis type="category" dataKey="dept" stroke="#6B7280" width={100} />
                <Tooltip contentStyle={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }} />
                <Bar dataKey="count" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Employee Status */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Employee Status</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={employeeStatusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {employeeStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Monthly Hiring Trend */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Hiring Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={hiringTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="month" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip contentStyle={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }} />
                <Legend />
                <Bar dataKey="hired" fill="#10B981" name="Hired" />
                <Bar dataKey="left" fill="#EF4444" name="Left" />
                <Bar dataKey="internal" fill="#F59E0B" name="Internal Transfers" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Salary Range Distribution */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Salary Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salaryRangeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="range" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip contentStyle={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }} />
                <Bar dataKey="count" fill="#8B5CF6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Charts Row 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Training Hours */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Training Hours by Department</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={trainingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="dept" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip contentStyle={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }} />
                <Bar dataKey="hours" fill="#06B6D4" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Attrition Rate Trend */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Attrition Rate Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={attritionTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="month" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip contentStyle={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }} />
                <Legend />
                <Line type="monotone" dataKey="rate" stroke="#EF4444" strokeWidth={2} dot={{ fill: '#EF4444' }} name="Attrition Rate (%)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center py-4">
          <Link href="/dashboards">
            <span className="text-indigo-600 hover:text-indigo-800 font-semibold">
              ← Back to Dashboard Hub
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}