import React from 'react';
import { MapPin, Star, ArrowRight } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';

const MiddleEastPage = () => {
  const destinations = [
    {
      name: 'Dubai, UAE',
      image: 'https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦450,000',
      rating: 4.8,
      reviews: 1247,
      description: 'Luxury shopping, ultramodern architecture, and vibrant nightlife',
      highlights: ['Burj Khalifa', 'Dubai Mall', 'Desert Safari', 'Palm Jumeirah'],
    },
    {
      name: 'Abu Dhabi, UAE',
      image: 'https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦420,000',
      rating: 4.6,
      reviews: 834,
      description: 'Cultural capital with stunning mosques and modern attractions',
      highlights: ['Sheikh Zayed Mosque', 'Louvre Abu Dhabi', 'Ferrari World', 'Corniche'],
    },
    {
      name: 'Doha, Qatar',
      image: 'https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦480,000',
      rating: 4.5,
      reviews: 567,
      description: 'Modern metropolis with traditional souqs and world-class museums',
      highlights: ['Museum of Islamic Art', 'Souq Waqif', 'The Pearl', 'Katara Cultural Village'],
    },
    {
      name: 'Riyadh, Saudi Arabia',
      image: 'https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦390,000',
      rating: 4.3,
      reviews: 445,
      description: 'Historic capital with modern developments and cultural sites',
      highlights: ['Masmak Fortress', 'Kingdom Centre', 'Diriyah', 'National Museum'],
    },
    {
      name: 'Kuwait City, Kuwait',
      image: 'https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦360,000',
      rating: 4.2,
      reviews: 323,
      description: 'Modern city with rich maritime heritage and cultural attractions',
      highlights: ['Kuwait Towers', 'Grand Mosque', 'Liberation Tower', 'Souq Al-Mubarakiya'],
    },
    {
      name: 'Muscat, Oman',
      image: 'https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦380,000',
      rating: 4.4,
      reviews: 289,
      description: 'Beautiful blend of traditional and modern with stunning coastline',
      highlights: ['Sultan Qaboos Grand Mosque', 'Mutrah Souq', 'Royal Opera House', 'Nizwa Fort'],
    },
  ];

  return (
    <div>
      <PageHeader
        title="Discover Middle East"
        subtitle="Experience the rich heritage, modern luxury, and warm hospitality of the Middle East"
        icon={MapPin}
        backgroundImage="https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Middle East Destinations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From the futuristic skylines of Dubai to the ancient heritage of Oman
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{destination.name}</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm">{destination.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-200 mb-3">{destination.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {destination.highlights.slice(0, 2).map((highlight, idx) => (
                      <span key={idx} className="bg-white/20 text-white px-2 py-1 rounded text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">{destination.price}</span>
                    <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiddleEastPage;