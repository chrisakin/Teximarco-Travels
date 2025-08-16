import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Plane
} from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Travel Services': [
      { name: 'Flight Booking', path: '/flights' },
      { name: 'Hotel Reservations', path: '/hotels' },
      'Car Rentals',
      'Travel Insurance',
      { name: 'Visa Services', path: '/visa' },
      'Airport Transfers'
    ],
    'Destinations': [
      { name: 'Popular Destinations', path: '/destinations' },
      { name: 'Africa', path: '/destinations/africa' },
      { name: 'Europe', path: '/destinations/europe' },
      { name: 'Asia', path: '/destinations/asia' },
      { name: 'Americas', path: '/destinations/americas' },
      { name: 'Middle East', path: '/destinations/middle-east' }
    ],
    'Support': [
      { name: 'Help Center', path: '/help' },
      { name: 'Contact Us', path: '/contact' },
      'Travel Guides',
      'FAQs',
      'Booking Management',
      'Travel Alerts'
    ],
    'Company': [
      { name: 'About Us', path: '/about' },
      { name: 'Careers', path: '/careers' },
      'Press',
      'Partnerships',
      'Affiliate Program',
      'Corporate Travel'
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/Teximarco Travels Logo.webp" 
                alt="Texitravels" 
                className="h-10 w-auto"
              />
              <span className="ml-3 text-2xl font-bold">Texitravels</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted travel partner for seamless journeys worldwide. 
              We make travel dreams come true with personalized service and 
              cutting-edge technology.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-sky-400" />
                <span>+234 800 TEXI (8394)</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-sky-400" />
                <span>hello@texitravels.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-sky-400" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    {typeof link === 'object' ? (
                      <Link 
                        to={link.path}
                        className="text-gray-300 hover:text-sky-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a 
                        href="#" 
                        className="text-gray-300 hover:text-sky-400 transition-colors"
                      >
                        {link}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media & Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-300 hover:text-sky-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-sky-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-sky-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-sky-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <span>© 2025 Texitravels. All rights reserved.</span>
              <div className="flex space-x-4">
                <Link to="/privacy" className="hover:text-sky-400 transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-sky-400 transition-colors">Terms of Service</Link>
                <a href="#" className="hover:text-sky-400 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-wrap justify-center items-center space-x-8 opacity-60">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">SSL</span>
              </div>
              <span className="text-sm">Secure Booking</span>
            </div>
            <div className="flex items-center space-x-2">
              <Plane className="w-6 h-6 text-sky-400" />
              <span className="text-sm">IATA Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">24/7</span>
              </div>
              <span className="text-sm">Customer Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;