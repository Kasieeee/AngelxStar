import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Care Services', href: '/services' },
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
            <img src="/logo.png" alt="Angel and Star Care Services Logo" className="h-16 w-auto" />
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
            <Link
              to="/child-care"
              className="bg-[#FFBD31] text-[#0F4C5C] px-6 py-2 rounded-lg font-semibold hover:bg-[#ffc94d] transition-colors"
            >
              Children Services
            </Link>
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
            <Link
              to="/child-care"
              className="block bg-[#FFBD31] text-[#0F4C5C] px-6 py-2 rounded-lg font-semibold text-center mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Children Services
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
