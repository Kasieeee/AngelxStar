import { Link, useLocation } from 'react-router';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const location = useLocation();
  const isChildrenServices = location.pathname.includes('/child-care');

  return (
    <footer className="bg-[#0F4C5C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={import.meta.env.BASE_URL + "logo-white.png"} alt="Angel & Star Care Services Logo" className="h-16 w-auto" />
              <div>
                <h3 className="font-bold leading-tight">Angel & Star<br/>Care Services</h3>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              Providing compassionate and professional care services for your loved ones.
            </p>
            <div className="flex items-center flex-wrap gap-4 mt-4">
              <img src={import.meta.env.BASE_URL + "attached-image-3.png"} alt="ISO Certification" className="h-12 w-auto" />
              <img src={import.meta.env.BASE_URL + "certification-registered.png"} alt="Citation ISO Certification" className="h-12 w-auto" />
              <img src={import.meta.env.BASE_URL + "attached-image-2.jpg"} alt="ICO Logo" className="h-12 w-auto" />
              <img src={import.meta.env.BASE_URL + "cqc-logo.png"} alt="CQC Regulated" className="h-12 w-auto bg-white/90 rounded p-1" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#FFBD31] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#FFBD31] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[#FFBD31] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#FFBD31] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-[#FFBD31] transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone size={16} className="mt-1 text-[#FFBD31] flex-shrink-0" />
                <span className="text-gray-300">{isChildrenServices ? "+447404911446" : "02475263024"}</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail size={16} className="mt-1 text-[#FFBD31] flex-shrink-0" />
                <span className="text-gray-300">{isChildrenServices ? "careers@angelandstarcareservices.com" : "office@angelandstarcareservices.com"}</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 text-[#FFBD31] flex-shrink-0" />
                <span className="text-gray-300">Unit 1, The Courtyard, 17 Bond Street, Nuneaton, Warwickshire, England, CV11 4BX</span>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-[#FFBD31] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FFBD31] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FFBD31] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FFBD31] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#16697A] mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Angel & Star Care Services. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
