import React, { useState } from 'react';
import { Building, Star, MapPin, Wifi, Car, Utensils, Waves } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SearchForm from '../components/common/SearchForm';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const HotelsPage = () => {
  const [hotels] = useState([
    {
      id: 1,
      name: 'The Ritz-Carlton Lagos',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Victoria Island, Lagos',
      rating: 4.8,
      reviews: 1247,
      price: '₦85,000',
      originalPrice: '₦95,000',
      amenities: ['Free WiFi', 'Pool', 'Spa', 'Restaurant', 'Parking'],
      description: 'Luxury hotel with stunning ocean views and world-class amenities.',
    },
    {
      id: 2,
      name: 'Eko Hotel & Suites',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Victoria Island, Lagos',
      rating: 4.6,
      reviews: 892,
      price: '₦65,000',
      originalPrice: '₦75,000',
      amenities: ['Free WiFi', 'Pool', 'Gym', 'Restaurant'],
      description: 'Modern hotel in the heart of Lagos business district.',
    },
    {
      id: 3,
      name: 'Radisson Blu Anchorage',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Victoria Island, Lagos',
      rating: 4.7,
      reviews: 654,
      price: '₦72,000',
      originalPrice: '₦80,000',
      amenities: ['Free WiFi', 'Pool', 'Spa', 'Restaurant', 'Bar'],
      description: 'Elegant waterfront hotel with exceptional service.',
    },
  ]);

  const handleSearch = (searchData: any) => {
    console.log('Hotel search:', searchData);
    // Implement search logic here
  };

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'free wifi':
        return <Wifi className="w-4 h-4" />;
      case 'pool':
        return <Waves className="w-4 h-4" />;
      case 'parking':
        return <Car className="w-4 h-4" />;
      case 'restaurant':
        return <Utensils className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div>
      <PageHeader
        title="Find Your Perfect Stay"
        subtitle="Discover amazing hotels worldwide with best price guarantee"
        icon={Building}
        backgroundImage="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Form */}
        <div className="mb-12">
          <SearchForm type="hotels" onSearch={handleSearch} />
        </div>

        {/* Hotel Results */}
        <div className="space-y-6">
          {hotels.map((hotel) => (
            <Card key={hotel.id} hover className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Hotel Image */}
                <div className="lg:col-span-1">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-64 lg:h-full object-cover rounded-lg"
                  />
                </div>

                {/* Hotel Details */}
                <div className="lg:col-span-2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{hotel.name}</h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">{hotel.location}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center mb-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(hotel.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="ml-1 text-sm font-medium">{hotel.rating}</span>
                        </div>
                        <p className="text-xs text-gray-500">({hotel.reviews} reviews)</p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{hotel.description}</p>

                    {/* Amenities */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {hotel.amenities.map((amenity, index) => (
                        <div
                          key={index}
                          className="flex items-center bg-sky-50 text-sky-700 px-3 py-1 rounded-full text-sm"
                        >
                          {getAmenityIcon(amenity)}
                          <span className="ml-1">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price and Book */}
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-sky-600">{hotel.price}</span>
                        <span className="text-lg text-gray-400 line-through">{hotel.originalPrice}</span>
                      </div>
                      <p className="text-sm text-gray-600">per night</p>
                    </div>
                    <div className="space-y-2">
                      <Button size="lg">
                        Book Now
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Hotels
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HotelsPage;