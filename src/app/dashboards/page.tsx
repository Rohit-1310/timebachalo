// app/dashboards/page.tsx
import Link from 'next/link';

const dashboards = [
  {
    id: 'finance',
    title: 'Finance & Banking Dashboard',
    description: 'Comprehensive financial case management with KPIs, charts, filters, and data tables',
    color: 'from-blue-500 to-cyan-500',
    icon: '💼',
    href: '/dashboards/finance',
  },
  {
    id: 'modern',
    title: 'Modern Fintech Dashboard',
    description: 'Purple/teal theme with quick actions, case distribution, and activity tracking',
    color: 'from-purple-500 to-teal-500',
    icon: '🎨',
    href: '/dashboards/modern',
  },
  {
    id: 'minimalist',
    title: "Analyst's Dashboard (Dark Mode)",
    description: 'Dark theme with cyan accents, interactive charts, and transaction tables',
    color: 'from-cyan-500 to-blue-500',
    icon: '🌙',
    href: '/dashboards/minimalist',
  },
  {
    id: 'sales',
    title: 'Sales Analytics Dashboard',
    description: 'Sales metrics with 7+ chart types including area, pie, and line charts',
    color: 'from-orange-500 to-red-500',
    icon: '📊',
    href: '/dashboards/sales',
  },
  {
    id: 'hr',
    title: 'HR Analytics Dashboard',
    description: 'Employee insights with department distribution, hiring trends, and attrition rates',
    color: 'from-indigo-500 to-blue-500',
    icon: '👥',
    href: '/dashboards/hr',
  },
];

export default function DashboardHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Dashboard Examples</h1>
          <p className="text-xl text-gray-600">
            Explore 6 different dashboard designs for your fintech and business platform
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dashboards.map((dashboard) => (
            <Link key={dashboard.id} href={dashboard.href}>
              <div className="group cursor-pointer h-full">
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full hover:-translate-y-1">
                  {/* Header with gradient */}
                  <div className={`h-24 bg-gradient-to-r ${dashboard.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20 bg-pattern"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl">{dashboard.icon}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {dashboard.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {dashboard.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-xs font-semibold text-blue-600">View Dashboard</span>
                      <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Navigation Back */}
        <div className="mt-12 text-center">
          <Link href="/">
            <span className="text-blue-600 hover:text-blue-800 font-semibold">
              ← Back to Time Bachalo Roadmap
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}