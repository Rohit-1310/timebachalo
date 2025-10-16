'use client';

import Link from 'next/link';
import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Calendar, ChevronDown, TrendingUp } from 'lucide-react';

export default function FinancialCaseDashboard() {
  const [startDate, setStartDate] = useState('01/01/2024');
  const [endDate, setEndDate] = useState('31/12/2024');
  const [kycFilter, setKycFilter] = useState('All');
  const [caseFilter, setCaseFilter] = useState('All');

  // KPI Data
  const kpis = [
    {
      label: 'Total Number of Cases (count)',
      value: '25.2K',
      change: '+14%',
      prevPeriod: 'vs prev period 22.1K',
    },
    {
      label: 'Open Cases (count)',
      value: '8.5K',
      change: '+18%',
      prevPeriod: 'vs prev period 7.2K',
    },
    {
      label: 'Total Loan Amount (USD)',
      value: '15.6M',
      change: '+27%',
      prevPeriod: 'vs prev period 12.3M',
    },
    {
      label: 'Total Disbursed Amount (USD)',
      value: '12.4M',
      change: '+26%',
      prevPeriod: 'vs prev period 9.8M',
    },
    {
      label: 'Total Bank Payout (USD)',
      value: '10.2M',
      change: '+26%',
      prevPeriod: 'vs prev period 8.1M',
    },
    {
      label: 'Current Balance (USD)',
      value: '5.3M',
      change: '+26%',
      prevPeriod: 'vs prev period 4.2M',
    },
  ];

  // Chart Data
  const caseStatusData = [
    { month: 'Jan 2024', 'In Process': 2200, 'Completed': 1400 },
    { month: 'Feb 2024', 'In Process': 2400, 'Completed': 1600 },
    { month: 'Mar 2024', 'In Process': 2600, 'Completed': 1800 },
    { month: 'Apr 2024', 'In Process': 3000, 'Completed': 2100 },
    { month: 'May 2024', 'In Process': 3200, 'Completed': 2300 },
    { month: 'Jun 2024', 'In Process': 3500, 'Completed': 2500 },
    { month: 'Jul 2024', 'In Process': 3800, 'Completed': 2700 },
    { month: 'Aug 2024', 'In Process': 4000, 'Completed': 2900 },
    { month: 'Sep 2024', 'In Process': 4100, 'Completed': 3000 },
  ];

  const disbursementData = [
    { month: 'Jan 2024', 'Total Disbursed': 10.5, 'Remaining Balance': 9.2 },
    { month: 'Feb 2024', 'Total Disbursed': 10.4, 'Remaining Balance': 9.3 },
    { month: 'Mar 2024', 'Total Disbursed': 10.2, 'Remaining Balance': 9.5 },
    { month: 'Apr 2024', 'Total Disbursed': 9.8, 'Remaining Balance': 9.8 },
    { month: 'May 2024', 'Total Disbursed': 9.5, 'Remaining Balance': 10.1 },
    { month: 'Jun 2024', 'Total Disbursed': 9.2, 'Remaining Balance': 10.3 },
    { month: 'Jul 2024', 'Total Disbursed': 8.9, 'Remaining Balance': 10.5 },
    { month: 'Aug 2024', 'Total Disbursed': 8.5, 'Remaining Balance': 10.8 },
    { month: 'Sep 2024', 'Total Disbursed': 8.2, 'Remaining Balance': 11.0 },
  ];

  const bankPayoutData = [
    { month: 'Jan 2024', 'Bank Payout': 0.8 },
    { month: 'Feb 2024', 'Bank Payout': 0.9 },
    { month: 'Mar 2024', 'Bank Payout': 1.0 },
    { month: 'Apr 2024', 'Bank Payout': 1.1 },
    { month: 'May 2024', 'Bank Payout': 1.2 },
    { month: 'Jun 2024', 'Bank Payout': 1.3 },
    { month: 'Jul 2024', 'Bank Payout': 1.4 },
    { month: 'Aug 2024', 'Bank Payout': 1.5 },
    { month: 'Sep 2024', 'Bank Payout': 1.6 },
  ];

  // Customer Updates Data
  const customerUpdates = [
    { name: 'John Smith', kycStatus: 'Verified', lastUpdated: '15/12/2024' },
    { name: 'Emily Chen', kycStatus: 'Pending', lastUpdated: '14/12/2024' },
    { name: 'Michael Rodriguez', kycStatus: 'Under Review', lastUpdated: '13/12/2024' },
    { name: 'Sarah Johnson', kycStatus: 'Verified', lastUpdated: '12/12/2024' },
  ];

  // Case Updates Data
  const caseUpdates = [
    { caseId: '4521', status: 'Approved', lastAction: '15/12/2024' },
    { caseId: '4522', status: 'In Progress', lastAction: '14/12/2024' },
    { caseId: '4523', status: 'Pending', lastAction: '13/12/2024' },
    { caseId: '4524', status: 'Completed', lastAction: '12/12/2024' },
  ];

  // Articles Data
  const articles = [
    { title: 'Financial Risk Management Strategies', type: 'Research Paper', date: '15/12/2024', author: 'Dr. Emily Chen' },
    { title: 'Risk Assessment Methodology', type: 'Subsection', date: '15/12/2024', author: 'Dr. Emily Chen' },
  ];

  // Policies Data
  const policies = [
    { name: 'KYC Compliance Guidelines', date: '01/01/2024' },
    { name: 'Risk Management Framework', date: '15/02/2024' },
    { name: 'Digital Lending Protocols', date: '01/03/2024' },
    { name: 'Customer Data Protection', date: '15/04/2024' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Verified':
      case 'Approved':
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Pending':
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'Under Review':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  const lastUpdatedDate = new Date().toLocaleDateString();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Time Bachalo Dashboard</h1>
          </div>
          <div className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-semibold">
            Data Last Updated on {lastUpdatedDate}
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Start date</label>
              <input
                type="text"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="DD/MM/YYYY"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">End date</label>
              <input
                type="text"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="DD/MM/YYYY"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">KYC Status</label>
              <select
                value={kycFilter}
                onChange={(e) => setKycFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>All</option>
                <option>Verified</option>
                <option>Pending</option>
                <option>Under Review</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Case Status</label>
              <select
                value={caseFilter}
                onChange={(e) => setCaseFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>All</option>
                <option>Approved</option>
                <option>In Progress</option>
                <option>Pending</option>
                <option>Completed</option>
              </select>
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {kpis.map((kpi, i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <p className="text-sm text-gray-600 font-medium mb-2">{kpi.label}</p>
              <div className="flex items-baseline gap-2 mb-2">
                <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
                <span className="text-green-600 text-sm font-semibold flex items-center gap-1">
                  <TrendingUp size={14} /> {kpi.change}
                </span>
              </div>
              <p className="text-xs text-gray-500">{kpi.prevPeriod}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Case Status Distribution */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Case Status Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={caseStatusData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" style={{ fontSize: '12px' }} />
                <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="In Process" stroke="#3b82f6" strokeWidth={2} dot={{ fill: '#3b82f6' }} />
                <Line type="monotone" dataKey="Completed" stroke="#8b5cf6" strokeWidth={2} dot={{ fill: '#8b5cf6' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Disbursement Analysis */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Disbursement Analysis</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={disbursementData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" style={{ fontSize: '12px' }} />
                <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Total Disbursed" stroke="#3b82f6" strokeWidth={2} dot={{ fill: '#3b82f6' }} />
                <Line type="monotone" dataKey="Remaining Balance" stroke="#10b981" strokeWidth={2} dot={{ fill: '#10b981' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bank Payout Trends */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Bank Payout Trends</h2>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={bankPayoutData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" style={{ fontSize: '12px' }} />
              <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Bank Payout" stroke="#3b82f6" strokeWidth={2} dot={{ fill: '#3b82f6' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Customer and Case Updates */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Customer Updates */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Customer Updates</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left font-medium text-gray-700">Customer Name</th>
                    <th className="px-6 py-3 text-left font-medium text-gray-700">KYC Status</th>
                    <th className="px-6 py-3 text-left font-medium text-gray-700">Last Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {customerUpdates.map((customer, i) => (
                    <tr key={i} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-3 text-gray-900 font-medium">{customer.name}</td>
                      <td className="px-6 py-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(customer.kycStatus)}`}>
                          {customer.kycStatus}
                        </span>
                      </td>
                      <td className="px-6 py-3 text-gray-600">{customer.lastUpdated}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Case Updates */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Case Updates</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left font-medium text-gray-700">Case ID</th>
                    <th className="px-6 py-3 text-left font-medium text-gray-700">Status</th>
                    <th className="px-6 py-3 text-left font-medium text-gray-700">Last Action</th>
                  </tr>
                </thead>
                <tbody>
                  {caseUpdates.map((caseItem, i) => (
                    <tr key={i} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-3 text-gray-900 font-medium">{caseItem.caseId}</td>
                      <td className="px-6 py-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(caseItem.status)}`}>
                          {caseItem.status}
                        </span>
                      </td>
                      <td className="px-6 py-3 text-gray-600">{caseItem.lastAction}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Articles and Policies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Articles */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Latest Articles</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left font-medium text-gray-700">Title</th>
                    <th className="px-6 py-3 text-left font-medium text-gray-700">Type</th>
                    <th className="px-6 py-3 text-left font-medium text-gray-700">Publication Date</th>
                    <th className="px-6 py-3 text-left font-medium text-gray-700">Author</th>
                  </tr>
                </thead>
                <tbody>
                  {articles.map((article, i) => (
                    <tr key={i} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-3 text-gray-900">{article.title}</td>
                      <td className="px-6 py-3 text-gray-600">{article.type}</td>
                      <td className="px-6 py-3 text-gray-600">{article.date}</td>
                      <td className="px-6 py-3 text-gray-600">{article.author}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Policies */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Policies</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {policies.map((policy, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                    <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                      {policy.name}
                    </a>
                    <span className="text-sm text-gray-500">{policy.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center py-6">
          <Link href="/dashboards">
            <span className="text-blue-600 hover:text-blue-800 font-semibold">
              ← Back to Dashboard Hub
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}