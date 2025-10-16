'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 relative">
              <Image
                src="/logo.jpeg"
                alt="TimeBachalo Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-bold text-lg text-gray-900">TimeBachalo</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`font-medium transition-colors ${isActive('/') ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              Roadmap
            </Link>
            <Link
              href="/dashboards"
              className={`font-medium transition-colors ${pathname.startsWith('/dashboards')
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              Dashboards
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <Link href="/dashboards" className="text-blue-600 font-medium text-sm">
              Dashboards
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}