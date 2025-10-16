'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Plus, Download, ChevronDown } from 'lucide-react';

export default function ModernDashboard() {
  const [kycFilter, setKycFilter] = useState('All');
  const [caseFilter, setCaseFilter] = useState('All');

  // Customer Updates Data
  const customerUpdates = [
    {
      id: 'P50',
      date: '29-September-2025',
      customer: 'Person 50',
      loanBase: 'Status: Active',
      lastActivity: '11 Oct 2025 8:04 PM',
    },
    {
      id: 'YS',
      date: '5-August-2025',
      customer: 'Yashu Sharma',
      loanBase: 'Status: DRAFT',
      lastActivity: '5 Aug 2025 10:24 PM',
    },
    {
      id: 'SS',
      date: '5-August-2025',
      customer: 'Supriya Sharma',
      loanBase: 'Status: DRAFT',
      lastActivity: '5 Aug 2025 10:23 PM',
    },
    {
      id: 'RK',
      date: '5-August-2025',
      customer: 'Rashmi kapoor',
      loanBase: 'Status: DRAFT',
      lastActivity: '5 Aug 2025 10:22 PM',
    },
    {
      id: 'SC',
      date: '27-May-2025',
      customer: 'SUDERSHAN CHUGH',
      loanBase: 'Status: DRAFT',
      lastActivity: '28 May 2025 4:08 PM',
    },
  ];

  // Case Updates Data
  const caseUpdates = [
    {
      caseId: 'P504303O',
      date: '30-September-2025',
      bank: 'Central Bank Of India',
      customer: 'Person 50',
      banker: 'Banker 4',
      channel: 'SELF',
      assignee: 'Employee 16',
      loanBase: 'GROSS TURNOVER',
      status: 'Active',
      lastActivity: '13 Oct 2025 9:13 PM',
    },
    {
      caseId: 'P304153O',
      date: '30-September-2025',
      bank: 'ICICI Bank Limited',
      customer: 'Person 35',
      banker: 'Banker 10',
      channel: 'SELF',
      assignee: 'PUNEET SHARMA',
      loanBase: 'Status: Active',
      status: 'Active',
      lastActivity: '30 Sep 2025 8:51 PM',
    },
    {
      caseId: 'P304113O',
      date: '30-September-2025',
      bank: 'IIFL Finance Limited',
      customer: 'Person 33',
      banker: 'Banker 28',
      channel: 'Channel 21',
      assignee: 'SAGAR CHAURASIA',
      loanBase: 'BANKING',
      status: 'Active',
      lastActivity: '30 Sep 2025 8:43 PM',
    },
    {
      caseId: 'P304113O',
      date: '30-September-2025',
      bank: 'HDB Financial Services Limited',
      customer: 'Person 31',
      banker: 'Banker 26',
      channel: 'Channel 26',
      assignee: 'SAGAR CHAURASIA',
      loanBase: 'HL/AP/AUTO SARROGATE',
      status: 'Active',
      lastActivity: '30 Sep 2025 8:38 PM',
    },
  ];

  // Disbursements Data
  const disbursements = [
    {
      id: 'DISB001',
      date: '15-October-2025',
      caseId: 'P504303O',
      customer: 'Person 50',
      amount: '$45,000',
      bank: 'Central Bank Of India',
      status: 'Completed',
      reference: 'REF-2025-001',
    },
    {
      id: 'DISB002',
      date: '14-October-2025',
      caseId: 'P304153O',
      customer: 'Person 35',
      amount: '$78,500',
      bank: 'ICICI Bank Limited',
      status: 'Completed',
      reference: 'REF-2025-002',
    },
    {
      id: 'DISB003',
      date: '13-October-2025',
      caseId: 'P304113O',
      customer: 'Person 33',
      amount: '$32,000',
      bank: 'IIFL Finance Limited',
      status: 'In Progress',
      reference: 'REF-2025-003',
    },
    {
      id: 'DISB004',
      date: '12-October-2025',
      caseId: 'P304113O',
      customer: 'Person 31',
      amount: '$56,200',
      bank: 'HDB Financial Services Limited',
      status: 'Pending',
      reference: 'REF-2025-004',
    },
  ];

  // Payouts Data
  const payouts = [
    {
      id: 'PAYOUT001',
      date: '15-October-2025',
      caseId: 'P504303O',
      customer: 'Person 50',
      amount: '$45,000',
      bank: 'Central Bank Of India',
      status: 'Completed',
      payoutDate: '15-October-2025',
      reference: 'PAYOUT-2025-001',
    },
    {
      id: 'PAYOUT002',
      date: '14-October-2025',
      caseId: 'P304153O',
      customer: 'Person 35',
      amount: '$78,500',
      bank: 'ICICI Bank Limited',
      status: 'Completed',
      payoutDate: '14-October-2025',
      reference: 'PAYOUT-2025-002',
    },
    {
      id: 'PAYOUT003',
      date: '13-October-2025',
      caseId: 'P304113O',
      customer: 'Person 33',
      amount: '$32,000',
      bank: 'IIFL Finance Limited',
      status: 'In Progress',
      payoutDate: '15-October-2025',
      reference: 'PAYOUT-2025-003',
    },
    {
      id: 'PAYOUT004',
      date: '12-October-2025',
      caseId: 'P304113O',
      customer: 'Person 31',
      amount: '$56,200',
      bank: 'HDB Financial Services Limited',
      status: 'Pending',
      payoutDate: 'TBD',
      reference: 'PAYOUT-2025-004',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Active':
        return 'bg-emerald-100 text-emerald-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Case Management Dashboard</h1>
          <p className="text-lg text-gray-600">Customer Updates, Case Details, Disbursements & Payouts</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                <option>Draft</option>
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
                <option>Active</option>
                <option>Draft</option>
                <option>Completed</option>
              </select>
            </div>
            <div className="flex items-end gap-2">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
                <Plus size={18} />
                New Case
              </button>
            </div>
          </div>
        </div>

        {/* Customer Updates Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Customer Update</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">KYC Status:</span>
              <select className="px-3 py-1 border border-gray-300 rounded-lg text-sm">
                <option>Select</option>
              </select>
            </div>
          </div>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {customerUpdates.map((update, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-bold text-gray-900">{update.id} {update.date}</p>
                    <p className="text-sm text-gray-600 mt-2">Customer: <span className="font-medium">{update.customer}</span></p>
                    <p className="text-sm text-gray-600">Loan Base: <span className="font-medium">{update.loanBase}</span></p>
                    <p className="text-sm text-gray-600">Last Activity On: <span className="font-medium">{update.lastActivity}</span></p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold">View</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Updates Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Case Update</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Case Status:</span>
              <select className="px-3 py-1 border border-gray-300 rounded-lg text-sm">
                <option>Select</option>
              </select>
            </div>
          </div>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {caseUpdates.map((caseItem, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <p className="font-bold text-gray-900">{caseItem.caseId} {caseItem.date}</p>
                    <p className="text-sm text-gray-600 mt-2">Bank: <span className="font-medium">{caseItem.bank}</span></p>
                    <p className="text-sm text-gray-600">Customer: <span className="font-medium">{caseItem.customer}</span> Banker: <span className="font-medium">{caseItem.banker}</span></p>
                    <p className="text-sm text-gray-600">Channel: <span className="font-medium">{caseItem.channel}</span> Assignee: <span className="font-medium">{caseItem.assignee}</span></p>
                    <p className="text-sm text-gray-600">Loan Base: <span className="font-medium">{caseItem.loanBase}</span> Status: <span className="font-medium">{caseItem.status}</span></p>
                    <p className="text-sm text-gray-600">Last Activity On: <span className="font-medium">{caseItem.lastActivity}</span></p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold whitespace-nowrap ml-4">View</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disbursements Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Disbursements</h2>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
              <Download size={18} />
              Export
            </button>
          </div>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {disbursements.map((disburse, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <p className="font-bold text-gray-900">{disburse.id} - {disburse.date}</p>
                    <p className="text-sm text-gray-600 mt-2">Case: <span className="font-medium">{disburse.caseId}</span> | Customer: <span className="font-medium">{disburse.customer}</span></p>
                    <p className="text-sm text-gray-600">Amount: <span className="font-bold text-blue-600">{disburse.amount}</span> | Bank: <span className="font-medium">{disburse.bank}</span></p>
                    <p className="text-sm text-gray-600">Reference: <span className="font-medium">{disburse.reference}</span></p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(disburse.status)}`}>
                    {disburse.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payouts Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Payouts</h2>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
              <Download size={18} />
              Export
            </button>
          </div>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {payouts.map((payout, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <p className="font-bold text-gray-900">{payout.id} - {payout.date}</p>
                    <p className="text-sm text-gray-600 mt-2">Case: <span className="font-medium">{payout.caseId}</span> | Customer: <span className="font-medium">{payout.customer}</span></p>
                    <p className="text-sm text-gray-600">Amount: <span className="font-bold text-green-600">{payout.amount}</span> | Bank: <span className="font-medium">{payout.bank}</span></p>
                    <p className="text-sm text-gray-600">Payout Date: <span className="font-medium">{payout.payoutDate}</span> | Reference: <span className="font-medium">{payout.reference}</span></p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(payout.status)}`}>
                    {payout.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center py-4">
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