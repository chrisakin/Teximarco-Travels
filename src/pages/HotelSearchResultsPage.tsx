import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Building, 
  Filter, 
  SortAsc, 
  Star, 
  MapPin, 
  Wifi, 
  Car, 
  Utensils, 
  Waves,
  Users,
  Calendar,
  ChevronDown,
  ChevronUp,
  Loader2,
  AlertCircle
} from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import HotelSearchForm from '../components/common/HotelSearchForm';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

interface Hotel {
  id: number;
  name: string;
  image: string;
  location: string;
  rating: number;
  reviews: number;
  price: string;
  originalPrice?: string;
  amenities: string[];
  description: string;
  distance: string;
}

const HotelSearchResultsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchData = location.state?.searchData;

  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('price');
  const [showFilters, setShowFilters] = useState(false);
  const [showSearchForm, setShowSearchForm] = useState(false);
  
  // Filter states
  const [filters, setFilters] = useState({
    priceRange: [0, 200000],
    rating: 0,
    amenities: [] as string[],
    hotelType: [] as string[],
  });

  // Mock hotel data
  const mockHotels: Hotel[] = [
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
      distance: '2.1 km from city center',
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
      distance: '1.5 km from city center',
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
      distance: '1.8 km from city center',
    },
    {
      id: 4,
      name: 'Four Points by Sheraton',
      image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Ikeja, Lagos',
      rating: 4.5,
      reviews: 523,
      price: '₦55,000',
      amenities: ['Free WiFi', 'Pool', 'Gym', 'Restaurant', 'Airport Shuttle'],
      description: 'Contemporary hotel near the airport with modern facilities.',
      distance: '25 km from city center',
    },
    {
      id: 5,
      name: 'Lagos Continental Hotel',
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Victoria Island, Lagos',
      rating: 4.4,
      reviews: 789,
      price: '₦48,000',
      originalPrice: '₦58,000',
      amenities: ['Free WiFi', 'Restaurant', 'Bar', 'Business Center'],
      description: 'Classic hotel with traditional hospitality and modern comfort.',
      distance: '1.2 km from city center',
    },
    {
      id: 6,
      name: 'Wheatbaker Hotel',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Ikoyi, Lagos',
      rating: 4.9,
      reviews: 445,
      price: '₦95,000',
      originalPrice: '₦110,000',
      amenities: ['Free WiFi', 'Pool', 'Spa', 'Restaurant', 'Gym', 'Parking'],
      description: 'Boutique luxury hotel with personalized service and elegant design.',
      distance: '3.2 km from city center',
    },
  ];

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      setHotels(mockHotels);
      setFilteredHotels(mockHotels);
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    applyFiltersAndSort();
  }, [hotels, filters, sortBy]);

  const applyFiltersAndSort = () => {
    let filtered = [...hotels];

    // Apply price filter
    filtered = filtered.filter(hotel => {
      const price = parseInt(hotel.price.replace(/[₦,]/g, ''));
      return price >= filters.priceRange[0] && price <= filters.priceRange[1];
    });

    // Apply rating filter
    if (filters.rating > 0) {
      filtered = filtered.filter(hotel => hotel.rating >= filters.rating);
    }

    // Apply amenities filter
    if (filters.amenities.length > 0) {
      filtered = filtered.filter(hotel => 
        filters.amenities.some(amenity => hotel.amenities.includes(amenity))
      );
    }

    // Sort hotels
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseInt(a.price.replace(/[₦,]/g, '')) - parseInt(b.price.replace(/[₦,]/g, ''));
        case 'rating':
          return b.rating - a.rating;
        case 'reviews':
          return b.reviews - a.reviews;
        default:
          return 0;
      }
    });

    setFilteredHotels(filtered);
  };

  const handleHotelSelect = (hotel: Hotel) => {
    navigate('/hotel-details', { state: { hotel } });
  };

  const handleNewSearch = (searchData: any) => {
    setShowSearchForm(false);
    setLoading(true);
    // Simulate new search
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const clearFilters = () => {
    setFilters({
      priceRange: [0, 200000],
      rating: 0,
      amenities: [],
      hotelType: [],
    });
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

  const allAmenities = [...new Set(hotels.flatMap(h => h.amenities))];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Hotel Search Results"
        subtitle={`${filteredHotels.length} hotels found`}
        icon={Building}
        backgroundImage="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Summary & Modify Search */}
        <Card className="mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">Lagos, Nigeria</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>Mar 15 - Mar 18, 2025</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Users className="w-4 h-4" />
                <span>2 Guests, 1 Room</span>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowSearchForm(!showSearchForm)}
            >
              Modify Search
            </Button>
          </div>

          {/* Collapsible Search Form */}
          {showSearchForm && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <HotelSearchForm onSearch={handleNewSearch} />
            </div>
          )}
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              {/* Mobile Filter Toggle */}
              <div className="lg:hidden mb-4">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="w-full"
                  icon={Filter}
                >
                  Filters {showFilters ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
                </Button>
              </div>

              <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
                <Card>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                    <Button variant="ghost" size="sm" onClick={clearFilters}>
                      Clear All
                    </Button>
                  </div>

                  {/* Price Range */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Price per night</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>₦{filters.priceRange[0].toLocaleString()}</span>
                        <span>₦{filters.priceRange[1].toLocaleString()}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="200000"
                        step="5000"
                        value={filters.priceRange[1]}
                        onChange={(e) => setFilters(prev => ({
                          ...prev,
                          priceRange: [prev.priceRange[0], parseInt(e.target.value)]
                        }))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Minimum Rating</h4>
                    <div className="space-y-2">
                      {[4.5, 4.0, 3.5, 3.0].map(rating => (
                        <label key={rating} className="flex items-center">
                          <input
                            type="radio"
                            name="rating"
                            checked={filters.rating === rating}
                            onChange={() => setFilters(prev => ({ ...prev, rating }))}
                            className="w-4 h-4 text-sky-600 border-gray-300 focus:ring-sky-500"
                          />
                          <div className="ml-2 flex items-center">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(rating)
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="ml-1 text-sm text-gray-700">{rating}+</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Amenities</h4>
                    <div className="space-y-2 max-h-40 overflow-y-auto">
                      {allAmenities.map(amenity => (
                        <label key={amenity} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={filters.amenities.includes(amenity)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setFilters(prev => ({
                                  ...prev,
                                  amenities: [...prev.amenities, amenity]
                                }));
                              } else {
                                setFilters(prev => ({
                                  ...prev,
                                  amenities: prev.amenities.filter(a => a !== amenity)
                                }));
                              }
                            }}
                            className="w-4 h-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">{amenity}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            {/* Sort Options */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
              <div className="text-gray-600">
                {loading ? 'Searching...' : `${filteredHotels.length} hotels found`}
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm"
                >
                  <option value="price">Price (Low to High)</option>
                  <option value="rating">Rating (High to Low)</option>
                  <option value="reviews">Most Reviewed</option>
                </select>
              </div>
            </div>

            {/* Loading State */}
            {loading && (
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <Card key={i} className="animate-pulse">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="w-full h-64 bg-gray-200 rounded-lg"></div>
                      <div className="lg:col-span-2 space-y-4">
                        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {/* No Results */}
            {!loading && filteredHotels.length === 0 && (
              <Card className="text-center py-12">
                <AlertCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No hotels found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters or search criteria
                </p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </Card>
            )}

            {/* Hotel Results */}
            {!loading && filteredHotels.length > 0 && (
              <div className="space-y-6">
                {filteredHotels.map((hotel) => (
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
                              <div className="text-xs text-gray-500 mb-2">{hotel.distance}</div>
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
                              {hotel.originalPrice && (
                                <span className="text-lg text-gray-400 line-through">{hotel.originalPrice}</span>
                              )}
                            </div>
                            <p className="text-sm text-gray-600">per night</p>
                          </div>
                          <div className="space-y-2">
                            <Button size="lg" onClick={() => handleHotelSelect(hotel)}>
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
            )}

            {/* Load More */}
            {!loading && filteredHotels.length > 0 && (
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  Load More Hotels
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #0ea5e9;
          cursor: pointer;
          box-shadow: 0 0 2px 0 #555;
          transition: background .15s ease-in-out;
        }
        
        .slider::-webkit-slider-thumb:hover {
          background: #0284c7;
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #0ea5e9;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 2px 0 #555;
        }
      `}</style>
    </div>
  );
};

export default HotelSearchResultsPage;