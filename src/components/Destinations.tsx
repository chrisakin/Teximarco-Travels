import React from 'react';
import { MapPin, Star, ArrowRight } from 'lucide-react';

const Destinations = () => {
  const destinations = [
    {
      name: 'Dubai, UAE',
      image: 'https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦450,000',
      rating: 4.8,
      description: 'Luxury shopping, ultramodern architecture, and vibrant nightlife',
      popular: true
    },
    {
      name: 'London, UK',
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦520,000',
      rating: 4.9,
      description: 'Rich history, world-class museums, and iconic landmarks'
    },
    {
      name: 'New York, USA',
      image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦580,000',
      rating: 4.7,
      description: 'The city that never sleeps, Broadway shows, and Central Park'
    },
    {
      name: 'Paris, France',
      image: 'https://images.pexels.com/photos/161853/eiffel-tower-paris-france-tower-161853.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦495,000',
      rating: 4.8,
      description: 'City of love, art, fashion, and exquisite cuisine'
    },
    {
      name: 'Tokyo, Japan',
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦650,000',
      rating: 4.9,
      description: 'Blend of traditional culture and cutting-edge technology'
    },
    {
      name: 'Cape Town, South Africa',
      image: 'https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦380,000',
      rating: 4.6,
      description: 'Stunning landscapes, wine country, and rich cultural heritage'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Popular Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing places around the world with our curated travel packages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                {destination.popular && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </span>
                  </div>
                )}
                
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

        <div className="text-center mt-12">
          <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center">
            View All Destinations
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;