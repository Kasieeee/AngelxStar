import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [childrenDropdownOpen, setChildrenDropdownOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Working with Us', href: '/careers' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-[#0F4C5C] text-white sticky top-0 z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={import.meta.env.BASE_URL + "logo.png"} alt="Angel & Star Care Services Logo" className="h-16 w-auto" />
            <div className="hidden lg:block">
              <h1 className="font-bold text-lg leading-tight">Angel & Star<br />Care Services</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-colors ${isActive(item.href)
                  ? 'text-[#FFBD31] font-semibold'
                  : 'text-white hover:text-[#FFBD31]'
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="relative group">
              <button
                className="bg-[#FFBD31] text-[#0F4C5C] px-6 py-2 rounded-lg font-semibold hover:bg-[#ffc94d] transition-colors flex items-center gap-1"
                onClick={() => setChildrenDropdownOpen(!childrenDropdownOpen)}
              >
                Children Services
                <svg className="w-4 h-4 text-[#0F4C5C] transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 transition-all duration-300 z-50 ${childrenDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'}`}>
                <div className="py-2">
                  <Link to="/child-care/about" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#0F4C5C] transition-colors font-medium border-b border-gray-50 last:border-0" onClick={() => setChildrenDropdownOpen(false)}>About Children's Services</Link>
                  <Link to="/child-care/residential" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#0F4C5C] transition-colors font-medium border-b border-gray-50 last:border-0" onClick={() => setChildrenDropdownOpen(false)}>Children Residential</Link>
                  <Link to="/child-care/short-breaks" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#0F4C5C] transition-colors font-medium border-b border-gray-50 last:border-0" onClick={() => setChildrenDropdownOpen(false)}>Short Breaks Services - 0-18 CQC</Link>
                  <Link to="/child-care/contact" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#0F4C5C] transition-colors font-medium border-b border-gray-50 last:border-0" onClick={() => setChildrenDropdownOpen(false)}>Contact Us</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block py-2 ${isActive(item.href)
                  ? 'text-[#FFBD31] font-semibold'
                  : 'text-white'
                  }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 border-t border-white/20 pt-4">
              <div className="block text-[#FFBD31] font-bold mb-2 px-2">
                Children Services
              </div>
              <div className="space-y-1 ml-4 border-l-2 border-[#FFBD31]/30">
                <Link
                  to="/child-care/about"
                  className="block py-2 pl-4 text-gray-200 hover:text-[#FFBD31] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Children's Services
                </Link>
                <Link
                  to="/child-care/residential"
                  className="block py-2 pl-4 text-gray-200 hover:text-[#FFBD31] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Children Residential
                </Link>
                <Link
                  to="/child-care/short-breaks"
                  className="block py-2 pl-4 text-gray-200 hover:text-[#FFBD31] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Short Breaks Services - 0-18 CQC
                </Link>
                <Link
                  to="/child-care/contact"
                  className="block py-2 pl-4 text-gray-200 hover:text-[#FFBD31] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
