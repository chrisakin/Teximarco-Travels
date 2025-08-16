import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, ArrowRight, Globe, Filter } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const DestinationsPage = () => {
  const [selectedRegion, setSelectedRegion] = useState('all');

  const regions = [
    { id: 'all', name: 'All Destinations', path: '/destinations' },
    { id: 'africa', name: 'Africa', path: '/destinations/africa' },
    { id: 'europe', name: 'Europe', path: '/destinations/europe' },
    { id: 'asia', name: 'Asia', path: '/destinations/asia' },
    { id: 'americas', name: 'Americas', path: '/destinations/americas' },
    { id: 'middle-east', name: 'Middle East', path: '/destinations/middle-east' },
  ];

  const destinations = [
    {
      name: 'Dubai, UAE',
      region: 'middle-east',
      image: 'https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦450,000',
      rating: 4.8,
      reviews: 1247,
      description: 'Luxury shopping, ultramodern architecture, and vibrant nightlife',
      popular: true,
      highlights: ['Burj Khalifa', 'Dubai Mall', 'Desert Safari', 'Palm Jumeirah'],
    },
    {
      name: 'London, UK',
      region: 'europe',
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦520,000',
      rating: 4.9,
      reviews: 2156,
      description: 'Rich history, world-class museums, and iconic landmarks',
      popular: true,
      highlights: ['Big Ben', 'Tower Bridge', 'British Museum', 'Buckingham Palace'],
    },
    {
      name: 'New York, USA',
      region: 'americas',
      image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦580,000',
      rating: 4.7,
      reviews: 1834,
      description: 'The city that never sleeps, Broadway shows, and Central Park',
      popular: true,
      highlights: ['Statue of Liberty', 'Times Square', 'Central Park', 'Empire State Building'],
    },
    {
      name: 'Paris, France',
      region: 'europe',
      image: 'https://images.pexels.com/photos/161853/eiffel-tower-paris-france-tower-161853.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦495,000',
      rating: 4.8,
      reviews: 1923,
      description: 'City of love, art, fashion, and exquisite cuisine',
      popular: true,
      highlights: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame', 'Champs-Élysées'],
    },
    {
      name: 'Tokyo, Japan',
      region: 'asia',
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦650,000',
      rating: 4.9,
      reviews: 1456,
      description: 'Blend of traditional culture and cutting-edge technology',
      popular: true,
      highlights: ['Mount Fuji', 'Senso-ji Temple', 'Shibuya Crossing', 'Tokyo Skytree'],
    },
    {
      name: 'Cape Town, South Africa',
      region: 'africa',
      image: 'https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦380,000',
      rating: 4.6,
      reviews: 987,
      description: 'Stunning landscapes, wine country, and rich cultural heritage',
      popular: true,
      highlights: ['Table Mountain', 'V&A Waterfront', 'Robben Island', 'Cape Winelands'],
    },
    {
      name: 'Istanbul, Turkey',
      region: 'europe',
      image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦420,000',
      rating: 4.7,
      reviews: 1123,
      description: 'Where Europe meets Asia, rich history and vibrant culture',
      highlights: ['Hagia Sophia', 'Blue Mosque', 'Grand Bazaar', 'Bosphorus Cruise'],
    },
    {
      name: 'Bangkok, Thailand',
      region: 'asia',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦350,000',
      rating: 4.5,
      reviews: 892,
      description: 'Vibrant street life, ornate temples, and amazing street food',
      highlights: ['Grand Palace', 'Wat Pho', 'Floating Markets', 'Chatuchak Market'],
    },
    {
      name: 'Marrakech, Morocco',
      region: 'africa',
      image: 'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦320,000',
      rating: 4.4,
      reviews: 756,
      description: 'Imperial city with stunning architecture and vibrant souks',
      highlights: ['Jemaa el-Fnaa', 'Majorelle Garden', 'Atlas Mountains', 'Medina'],
    },
    {
      name: 'Rio de Janeiro, Brazil',
      region: 'americas',
      image: 'https://images.pexels.com/photos/351283/pexels-photo-351283.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦480,000',
      rating: 4.6,
      reviews: 1034,
      description: 'Beautiful beaches, iconic landmarks, and carnival spirit',
      highlights: ['Christ the Redeemer', 'Copacabana Beach', 'Sugarloaf Mountain', 'Carnival'],
    },
    {
      name: 'Singapore',
      region: 'asia',
      image: 'https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦520,000',
      rating: 4.8,
      reviews: 1345,
      description: 'Modern city-state with incredible food and attractions',
      highlights: ['Marina Bay Sands', 'Gardens by the Bay', 'Sentosa Island', 'Hawker Centers'],
    },
    {
      name: 'Barcelona, Spain',
      region: 'europe',
      image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦465,000',
      rating: 4.7,
      reviews: 1567,
      description: 'Stunning architecture, beautiful beaches, and vibrant culture',
      highlights: ['Sagrada Familia', 'Park Güell', 'Las Ramblas', 'Gothic Quarter'],
    },
  ];

  const filteredDestinations = selectedRegion === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.region === selectedRegion);

  return (
    <div>
      <PageHeader
        title="Explore Destinations"
        subtitle="Discover amazing places around the world with our curated travel experiences"
        icon={Globe}
        backgroundImage="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Region Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {regions.map((region) => (
              <Link
                key={region.id}
                to={region.path}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedRegion === region.id
                    ? 'bg-sky-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-sky-50 hover:text-sky-600 border border-gray-200'
                }`}
                onClick={() => setSelectedRegion(region.id)}
              >
                {region.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination, index) => (
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
                  
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {destination.highlights?.slice(0, 2).map((highlight, idx) => (
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

        {/* Stats */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-sky-600 mb-2">50+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-sky-600 mb-2">200+</div>
              <div className="text-gray-600">Cities</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-sky-600 mb-2">1000+</div>
              <div className="text-gray-600">Experiences</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-sky-600 mb-2">2M+</div>
              <div className="text-gray-600">Happy Travelers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage;