import React from 'react';
import { MapPin, Star, ArrowRight } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';

const AfricaPage = () => {
  const destinations = [
    {
      name: 'Cape Town, South Africa',
      image: 'https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦380,000',
      rating: 4.6,
      reviews: 987,
      description: 'Stunning landscapes, wine country, and rich cultural heritage',
      highlights: ['Table Mountain', 'V&A Waterfront', 'Robben Island', 'Cape Winelands'],
    },
    {
      name: 'Marrakech, Morocco',
      image: 'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦320,000',
      rating: 4.4,
      reviews: 756,
      description: 'Imperial city with stunning architecture and vibrant souks',
      highlights: ['Jemaa el-Fnaa', 'Majorelle Garden', 'Atlas Mountains', 'Medina'],
    },
    {
      name: 'Cairo, Egypt',
      image: 'https://images.pexels.com/photos/71241/pexels-photo-71241.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦290,000',
      rating: 4.3,
      reviews: 634,
      description: 'Ancient wonders and timeless history along the Nile',
      highlights: ['Pyramids of Giza', 'Sphinx', 'Egyptian Museum', 'Nile Cruise'],
    },
    {
      name: 'Nairobi, Kenya',
      image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦340,000',
      rating: 4.5,
      reviews: 523,
      description: 'Gateway to safari adventures and wildlife experiences',
      highlights: ['Maasai Mara', 'Nairobi National Park', 'Giraffe Centre', 'Karen Blixen Museum'],
    },
    {
      name: 'Zanzibar, Tanzania',
      image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦360,000',
      rating: 4.7,
      reviews: 445,
      description: 'Pristine beaches and rich Swahili culture',
      highlights: ['Stone Town', 'Spice Tours', 'Pristine Beaches', 'Jozani Forest'],
    },
    {
      name: 'Accra, Ghana',
      image: 'https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦280,000',
      rating: 4.2,
      reviews: 378,
      description: 'Vibrant culture, historical sites, and warm hospitality',
      highlights: ['Cape Coast Castle', 'Kwame Nkrumah Memorial', 'Labadi Beach', 'Makola Market'],
    },
  ];

  return (
    <div>
      <PageHeader
        title="Discover Africa"
        subtitle="Explore the diverse cultures, wildlife, and landscapes of the African continent"
        icon={MapPin}
        backgroundImage="https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">African Destinations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From the pyramids of Egypt to the wildlife of Kenya, discover the magic of Africa
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

export default AfricaPage;