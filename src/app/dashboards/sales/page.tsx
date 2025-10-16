'use client';

import Link from 'next/link';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, ScatterChart, Scatter } from 'recharts';
import { TrendingUp, Users, ShoppingCart, DollarSign } from 'lucide-react';

export default function SalesAnalyticsDashboard() {
  // KPI Data
  const kpis = [
    { icon: ShoppingCart, label: 'Total Sales', value: '$245.5K', change: '+12.5%', color: 'bg-blue-500' },
    { icon: Users, label: 'New Customers', value: '1,240', change: '+8.2%', color: 'bg-green-500' },
    { icon: TrendingUp, label: 'Avg Order Value', value: '$385', change: '+5.1%', color: 'bg-purple-500' },
    { icon: DollarSign, label: 'Revenue Growth', value: '23.5%', change: '+3.2%', color: 'bg-orange-500' },
  ];

  // Sales by Region
  const salesByRegion = [
    { region: 'North', sales: 45000, target: 50000 },
    { region: 'South', sales: 52000, target: 50000 },
    { region: 'East', sales: 48000, target: 50000 },
    { region: 'West', sales: 61000, target: 50000 },
    { region: 'Central', sales: 55000, target: 50000 },
  ];

  // Sales Trend
  const salesTrendData = [
    { month: 'Jan', sales: 35000, target: 40000 },
    { month: 'Feb', sales: 42000, target: 40000 },
    { month: 'Mar', sales: 38000, target: 40000 },
    { month: 'Apr', sales: 51000, target: 40000 },
    { month: 'May', sales: 48000, target: 40000 },
    { month: 'Jun', sales: 61000, target: 40000 },
  ];

  // Product Category Distribution
  const productCategoryData = [
    { name: 'Electronics', value: 35, color: '#3B82F6' },
    { name: 'Clothing', value: 28, color: '#8B5CF6' },
    { name: 'Home & Garden', value: 22, color: '#EC4899' },
    { name: 'Sports', value: 15, color: '#F59E0B' },
  ];

  // Customer Acquisition
  const customerAcquisitionData = [
    { month: 'Jan', organic: 120, paid: 85, referral: 45 },
    { month: 'Feb', organic: 140, paid: 95, referral: 55 },
    { month: 'Mar', organic: 125, paid: 110, referral: 60 },
    { month: 'Apr', organic: 165, paid: 130, referral: 75 },
    { month: 'May', organic: 185, paid: 145, referral: 85 },
    { month: 'Jun', organic: 210, paid: 165, referral: 95 },
  ];

  // Customer Lifetime Value vs Acquisition Cost
  const cltVsAcqData = [
    { month: 'Jan', ltv: 800, acq: 120 },
    { month: 'Feb', ltv: 850, acq: 130 },
    { month: 'Mar', ltv: 820, acq: 125 },
    { month: 'Apr', ltv: 900, acq: 145 },
    { month: 'May', ltv: 920, acq: 155 },
    { month: 'Jun', ltv: 980, acq: 165 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Sales Analytics Dashboard</h1>
          <p className="text-gray-400">Comprehensive sales metrics and insights</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpis.map((kpi, i) => {
            const Icon = kpi.icon;
            return (
              <div key={i} className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg p-6 border border-gray-600 hover:border-gray-500 transition-all">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-400 text-sm font-medium mb-2">{kpi.label}</p>
                    <p className="text-2xl font-bold text-white mb-1">{kpi.value}</p>
                    <p className="text-green-400 text-sm font-semibold">{kpi.change}</p>
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
          {/* Sales Trend */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Sales Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={salesTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }} />
                <Legend />
                <Area type="monotone" dataKey="sales" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} name="Actual Sales" />
                <Area type="monotone" dataKey="target" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.2} name="Target" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Sales by Region */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Sales by Region</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesByRegion}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="region" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }} />
                <Legend />
                <Bar dataKey="sales" fill="#8B5CF6" name="Actual Sales" />
                <Bar dataKey="target" fill="#10B981" name="Target" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Product Category Distribution */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Product Category Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={productCategoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name} ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {productCategoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Customer Acquisition Channels */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Customer Acquisition Channels</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={customerAcquisitionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }} />
                <Legend />
                <Area type="monotone" dataKey="organic" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} name="Organic" />
                <Area type="monotone" dataKey="paid" stackId="1" stroke="#EC4899" fill="#EC4899" fillOpacity={0.3} name="Paid" />
                <Area type="monotone" dataKey="referral" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.3} name="Referral" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Charts Row 3 */}
        <div className="grid grid-cols-1 gap-6 mb-8">
          {/* CLV vs Acquisition Cost */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Customer Lifetime Value vs Acquisition Cost</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={cltVsAcqData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis yAxisId="left" stroke="#9CA3AF" />
                <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" />
                <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }} />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="ltv" stroke="#10B981" strokeWidth={2} dot={{ fill: '#10B981' }} name="LTV ($)" />
                <Line yAxisId="right" type="monotone" dataKey="acq" stroke="#F59E0B" strokeWidth={2} dot={{ fill: '#F59E0B' }} name="Acquisition Cost ($)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center py-4">
          <Link href="/dashboards">
            <span className="text-blue-400 hover:text-blue-300 font-semibold">
              ← Back to Dashboard Hub
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}