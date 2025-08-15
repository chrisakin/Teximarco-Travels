import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plane, Building, Package, Bot } from 'lucide-react';
import FlightSearchForm from './common/FlightSearchForm';
import HotelSearchForm from './common/HotelSearchForm';
import PackageSearchForm from './common/PackageSearchForm';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('flights');
  const navigate = useNavigate();

  const tabs = [
    { id: 'flights', label: 'Flights', icon: Plane, route: '/flights' },
    { id: 'hotels', label: 'Hotels', icon: Building, route: '/hotels' },
    { id: 'packages', label: 'Packages', icon: Package, route: '/packages' },
    { id: 'ai-planner', label: 'AI Trip Planner', icon: Bot, route: '/trip-planner' },
  ];

  const handleSearch = (searchData?: any) => {
    console.log('Search data:', searchData);
    const activeTabData = tabs.find(tab => tab.id === activeTab);
    if (activeTabData) {
      navigate(activeTabData.route);
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600 min-h-[600px] flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-white/10 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12 pt-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Your Journey Begins
            <span className="block text-sky-100">With Texitravels</span>
          </h1>
          <p className="text-xl text-sky-100 max-w-3xl mx-auto leading-relaxed">
            Discover the world with our comprehensive travel platform. Book flights, hotels, 
            get visa assistance, and let AI plan your perfect trip.
          </p>
        </div>

        {/* Search Widget */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-6xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-3 rounded-t-lg font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-sky-50 text-sky-600 border-b-2 border-sky-600'
                      : 'text-gray-600 hover:text-sky-600 hover:bg-sky-50'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Search Forms */}
          {activeTab === 'flights' && <FlightSearchForm onSearch={handleSearch} />}
          {activeTab === 'hotels' && <HotelSearchForm onSearch={handleSearch} />}
          {activeTab === 'packages' && <PackageSearchForm onSearch={handleSearch} />}

          {activeTab === 'ai-planner' && (
            <div className="text-center py-8">
              <Bot className="w-16 h-16 text-sky-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">AI-Powered Trip Planning</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Tell us your preferences, budget, and travel dates. Our AI will create a personalized 
                itinerary with flights, hotels, activities, and local recommendations.
              </p>
              <textarea
                placeholder="Describe your dream trip... (e.g., 'I want a 7-day romantic getaway to Paris with a budget of $3000, including museums and fine dining')"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent h-32 resize-none"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;