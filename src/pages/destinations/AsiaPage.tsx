import React from 'react';
import { MapPin, Star, ArrowRight } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';

const AsiaPage = () => {
  const destinations = [
    {
      name: 'Tokyo, Japan',
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦650,000',
      rating: 4.9,
      reviews: 1456,
      description: 'Blend of traditional culture and cutting-edge technology',
      highlights: ['Mount Fuji', 'Senso-ji Temple', 'Shibuya Crossing', 'Tokyo Skytree'],
    },
    {
      name: 'Bangkok, Thailand',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦350,000',
      rating: 4.5,
      reviews: 892,
      description: 'Vibrant street life, ornate temples, and amazing street food',
      highlights: ['Grand Palace', 'Wat Pho', 'Floating Markets', 'Chatuchak Market'],
    },
    {
      name: 'Singapore',
      image: 'https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦520,000',
      rating: 4.8,
      reviews: 1345,
      description: 'Modern city-state with incredible food and attractions',
      highlights: ['Marina Bay Sands', 'Gardens by the Bay', 'Sentosa Island', 'Hawker Centers'],
    },
    {
      name: 'Bali, Indonesia',
      image: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦380,000',
      rating: 4.6,
      reviews: 1123,
      description: 'Tropical paradise with stunning temples and beaches',
      highlights: ['Uluwatu Temple', 'Rice Terraces', 'Seminyak Beach', 'Ubud Monkey Forest'],
    },
    {
      name: 'Seoul, South Korea',
      image: 'https://images.pexels.com/photos/2376997/pexels-photo-2376997.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦580,000',
      rating: 4.7,
      reviews: 967,
      description: 'Dynamic city with K-pop culture and delicious cuisine',
      highlights: ['Gyeongbokgung Palace', 'Myeongdong', 'Jeju Island', 'Hongdae'],
    },
    {
      name: 'Mumbai, India',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦320,000',
      rating: 4.3,
      reviews: 756,
      description: 'Bollywood capital with incredible street food and culture',
      highlights: ['Gateway of India', 'Marine Drive', 'Elephanta Caves', 'Bollywood Studios'],
    },
  ];

  return (
    <div>
      <PageHeader
        title="Discover Asia"
        subtitle="Experience the diverse cultures, ancient traditions, and modern marvels of Asia"
        icon={MapPin}
        backgroundImage="https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Asian Destinations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From the bustling streets of Tokyo to the serene temples of Thailand
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

export default AsiaPage;