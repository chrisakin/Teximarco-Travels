import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b border-sky-100 sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-sky-50 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm text-sky-700">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                <span>+234 800 TEXI (8394)</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-1" />
                <span>24/7 Support</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/login" className="hover:text-sky-900 transition-colors">Sign In</Link>
              <Link to="/signup" className="bg-sky-600 text-white px-4 py-1 rounded-full hover:bg-sky-700 transition-colors">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/Teximarco Travels Logo.webp" 
                alt="Texitravels" 
                className="h-12 w-auto"
              />
              <span className="ml-3 text-2xl font-bold text-sky-900">Texitravels</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/flights" 
              className={`font-medium transition-colors ${
                isActive('/flights') ? 'text-sky-600' : 'text-gray-700 hover:text-sky-600'
              }`}
            >
              Flights
            </Link>
            <Link 
              to="/hotels" 
              className={`font-medium transition-colors ${
                isActive('/hotels') ? 'text-sky-600' : 'text-gray-700 hover:text-sky-600'
              }`}
            >
              Hotels
            </Link>
            <Link 
              to="/visa" 
              className={`font-medium transition-colors ${
                isActive('/visa') ? 'text-sky-600' : 'text-gray-700 hover:text-sky-600'
              }`}
            >
              Visa Services
            </Link>
            <Link 
              to="/trip-planner" 
              className={`font-medium transition-colors ${
                isActive('/trip-planner') ? 'text-sky-600' : 'text-gray-700 hover:text-sky-600'
              }`}
            >
              Trip Planner
            </Link>
            <div className="relative group">
              <button className="font-medium text-gray-700 hover:text-sky-600 transition-colors flex items-center">
                Destinations
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link to="/destinations" className="block px-4 py-2 text-gray-700 hover:bg-sky-50 hover:text-sky-600">
                    All Destinations
                  </Link>
                  <Link to="/destinations/africa" className="block px-4 py-2 text-gray-700 hover:bg-sky-50 hover:text-sky-600">
                    Africa
                  </Link>
                  <Link to="/destinations/europe" className="block px-4 py-2 text-gray-700 hover:bg-sky-50 hover:text-sky-600">
                    Europe
                  </Link>
                  <Link to="/destinations/asia" className="block px-4 py-2 text-gray-700 hover:bg-sky-50 hover:text-sky-600">
                    Asia
                  </Link>
                  <Link to="/destinations/americas" className="block px-4 py-2 text-gray-700 hover:bg-sky-50 hover:text-sky-600">
                    Americas
                  </Link>
                  <Link to="/destinations/middle-east" className="block px-4 py-2 text-gray-700 hover:bg-sky-50 hover:text-sky-600">
                    Middle East
                  </Link>
                </div>
              </div>
            </div>
            <Link 
              to="/proof-of-funds" 
              className={`font-medium transition-colors ${
                isActive('/proof-of-funds') ? 'text-sky-600' : 'text-gray-700 hover:text-sky-600'
              }`}
            >
              Proof of Funds
            </Link>
            <a href="#" className="text-gray-700 hover:text-sky-600 font-medium transition-colors">Support</a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-sky-600 hover:bg-sky-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-sky-100">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/flights" 
                className={`font-medium transition-colors ${
                  isActive('/flights') ? 'text-sky-600' : 'text-gray-700 hover:text-sky-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Flights
              </Link>
              <Link 
                to="/hotels" 
                className={`font-medium transition-colors ${
                  isActive('/hotels') ? 'text-sky-600' : 'text-gray-700 hover:text-sky-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Hotels
              </Link>
              <Link 
                to="/visa" 
                className={`font-medium transition-colors ${
                  isActive('/visa') ? 'text-sky-600' : 'text-gray-700 hover:text-sky-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Visa Services
              </Link>
              <Link 
                to="/trip-planner" 
                className={`font-medium transition-colors ${
                  isActive('/trip-planner') ? 'text-sky-600' : 'text-gray-700 hover:text-sky-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Trip Planner
              </Link>
              <Link 
                to="/proof-of-funds" 
                className={`font-medium transition-colors ${
                  isActive('/proof-of-funds') ? 'text-sky-600' : 'text-gray-700 hover:text-sky-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Proof of Funds
              </Link>
              <div className="border-t border-sky-100 pt-4">
                <div className="text-sm font-medium text-gray-500 mb-2">Destinations</div>
                <div className="space-y-2 ml-4">
                  <Link 
                    to="/destinations" 
                    className="block text-gray-700 hover:text-sky-600 font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    All Destinations
                  </Link>
                  <Link 
                    to="/destinations/africa" 
                    className="block text-gray-700 hover:text-sky-600 font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Africa
                  </Link>
                  <Link 
                    to="/destinations/europe" 
                    className="block text-gray-700 hover:text-sky-600 font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Europe
                  </Link>
                  <Link 
                    to="/destinations/asia" 
                    className="block text-gray-700 hover:text-sky-600 font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Asia
                  </Link>
                  <Link 
                    to="/destinations/americas" 
                    className="block text-gray-700 hover:text-sky-600 font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Americas
                  </Link>
                  <Link 
                    to="/destinations/middle-east" 
                    className="block text-gray-700 hover:text-sky-600 font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Middle East
                  </Link>
                </div>
              </div>
              <a href="#" className="text-gray-700 hover:text-sky-600 font-medium transition-colors">Support</a>
              <div className="pt-4 border-t border-sky-100">
                <Link to="/login" className="block w-full text-left text-gray-700 hover:text-sky-600 mb-2">Sign In</Link>
                <Link to="/signup" className="block w-full bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors text-center">
                  Register
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;