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
    if (activeTab === 'flights') {
      navigate('/flight-results', { state: { searchData } });
    } else if (activeTab === 'hotels') {
      navigate('/hotel-results', { state: { searchData } });
    } else if (activeTab === 'packages') {
      navigate('/package-results', { state: { searchData } });
    } else {
      const activeTabData = tabs.find(tab => tab.id === activeTab);
      if (activeTabData) {
        navigate(activeTabData.route);
      }
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600 min-h-[600px] flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-white/10 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16 pt-12 lg:pt-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Your Journey Begins
            <span className="block text-sky-100">With Texitravels</span>
          </h1>
          <p className="text-xl text-sky-100 max-w-4xl mx-auto leading-relaxed px-4">
            Discover the world with our comprehensive travel platform. Book flights, hotels, 
            get visa assistance, and let AI plan your perfect trip.
          </p>
        </div>

        {/* Search Widget */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-7xl mx-auto relative z-10">
          {/* Tabs */}
          <div className="flex flex-wrap border-b border-gray-200 bg-gray-50">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-4 font-medium transition-all relative ${
                    activeTab === tab.id
                      ? 'bg-white text-sky-600 shadow-sm border-b-2 border-sky-600'
                      : 'text-gray-600 hover:text-sky-600 hover:bg-white/50'
                  }`}
                >
                  <div className={`flex items-center space-x-3 ${
                    activeTab === tab.id ? 'transform scale-105' : ''
                  }`}>
                    <div className={`p-2 rounded-lg ${
                      activeTab === tab.id ? 'bg-sky-100' : 'bg-gray-100'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold">{tab.label}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Search Forms */}
          <div className="p-8 lg:p-12 pb-12 lg:pb-16">
            {activeTab === 'flights' && <FlightSearchForm onSearch={handleSearch} />}
            {activeTab === 'hotels' && <HotelSearchForm onSearch={handleSearch} />}
            {activeTab === 'packages' && <PackageSearchForm onSearch={handleSearch} />}

            {activeTab === 'ai-planner' && (
              <div className="text-center py-8">
                <div className="bg-gradient-to-br from-sky-100 to-purple-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Bot className="w-10 h-10 text-sky-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">AI-Powered Trip Planning</h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Tell us your preferences, budget, and travel dates. Our AI will create a personalized 
                  itinerary with flights, hotels, activities, and local recommendations.
                </p>
                <div className="max-w-3xl mx-auto">
                  <textarea
                    placeholder="Describe your dream trip... (e.g., 'I want a 7-day romantic getaway to Paris with a budget of $3000, including museums and fine dining')"
                    className="w-full p-6 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 h-32 resize-none text-lg"
                  />
                  <button className="mt-6 bg-gradient-to-r from-sky-600 to-purple-600 hover:from-sky-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
                    Plan My Trip with AI
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;