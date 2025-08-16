import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Plane, 
  Filter, 
  Wifi, 
  Utensils, 
  Star,
  MapPin,
  Calendar,
  Users,
  ChevronDown,
  ChevronUp,
  AlertCircle
} from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import FlightSearchForm from '../components/common/FlightSearchForm';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

interface Flight {
  id: number;
  airline: string;
  logo: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  duration: string;
  stops: string;
  price: string;
  originalPrice?: string;
  class: string;
  amenities: string[];
  rating: number;
  aircraft: string;
  baggage: string;
}

const FlightSearchResultsPage = () => {
  const navigate = useNavigate();
 
  const [flights, setFlights] = useState<Flight[]>([]);
  const [filteredFlights, setFilteredFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('price');
  const [showFilters, setShowFilters] = useState(false);
  const [showSearchForm, setShowSearchForm] = useState(false);
  
  // Filter states
  const [filters, setFilters] = useState({
    priceRange: [0, 2000000],
    airlines: [] as string[],
    stops: [] as string[],
    departureTime: [] as string[],
    duration: [0, 24],
  });

  // Mock flight data
  const mockFlights: Flight[] = [
    {
      id: 1,
      airline: 'Emirates',
      logo: 'https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg?auto=compress&cs=tinysrgb&w=100',
      from: 'Lagos (LOS)',
      to: 'London (LHR)',
      departure: '14:30',
      arrival: '06:45+1',
      duration: '7h 15m',
      stops: 'Direct',
      price: '₦520,000',
      originalPrice: '₦580,000',
      class: 'Economy',
      amenities: ['Wifi', 'Meals', 'Entertainment'],
      rating: 4.8,
      aircraft: 'Boeing 777',
      baggage: '30kg checked, 7kg carry-on',
    },
    {
      id: 2,
      airline: 'British Airways',
      logo: 'https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg?auto=compress&cs=tinysrgb&w=100',
      from: 'Lagos (LOS)',
      to: 'London (LHR)',
      departure: '22:15',
      arrival: '06:30+1',
      duration: '6h 15m',
      stops: 'Direct',
      price: '₦485,000',
      class: 'Economy',
      amenities: ['Wifi', 'Meals'],
      rating: 4.6,
      aircraft: 'Airbus A350',
      baggage: '23kg checked, 7kg carry-on',
    },
    {
      id: 3,
      airline: 'Turkish Airlines',
      logo: 'https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg?auto=compress&cs=tinysrgb&w=100',
      from: 'Lagos (LOS)',
      to: 'London (LHR)',
      departure: '16:45',
      arrival: '12:30+1',
      duration: '8h 45m',
      stops: '1 Stop (Istanbul)',
      price: '₦420,000',
      originalPrice: '₦450,000',
      class: 'Economy',
      amenities: ['Wifi', 'Meals', 'Entertainment'],
      rating: 4.7,
      aircraft: 'Boeing 787',
      baggage: '30kg checked, 8kg carry-on',
    },
    {
      id: 4,
      airline: 'Air France',
      logo: 'https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg?auto=compress&cs=tinysrgb&w=100',
      from: 'Lagos (LOS)',
      to: 'London (LHR)',
      departure: '11:20',
      arrival: '18:45',
      duration: '9h 25m',
      stops: '1 Stop (Paris)',
      price: '₦395,000',
      class: 'Economy',
      amenities: ['Wifi', 'Meals'],
      rating: 4.5,
      aircraft: 'Airbus A330',
      baggage: '23kg checked, 12kg carry-on',
    },
    {
      id: 5,
      airline: 'KLM',
      logo: 'https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg?auto=compress&cs=tinysrgb&w=100',
      from: 'Lagos (LOS)',
      to: 'London (LHR)',
      departure: '23:45',
      arrival: '14:20+1',
      duration: '10h 35m',
      stops: '1 Stop (Amsterdam)',
      price: '₦375,000',
      class: 'Economy',
      amenities: ['Meals', 'Entertainment'],
      rating: 4.4,
      aircraft: 'Boeing 777',
      baggage: '23kg checked, 7kg carry-on',
    },
    {
      id: 6,
      airline: 'Virgin Atlantic',
      logo: 'https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg?auto=compress&cs=tinysrgb&w=100',
      from: 'Lagos (LOS)',
      to: 'London (LHR)',
      departure: '13:15',
      arrival: '05:30+1',
      duration: '6h 15m',
      stops: 'Direct',
      price: '₦550,000',
      originalPrice: '₦620,000',
      class: 'Economy',
      amenities: ['Wifi', 'Meals', 'Entertainment', 'USB Power'],
      rating: 4.9,
      aircraft: 'Airbus A350',
      baggage: '23kg checked, 7kg carry-on',
    },
  ];

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      setFlights(mockFlights);
      setFilteredFlights(mockFlights);
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    applyFiltersAndSort();
  }, [flights, filters, sortBy]);

  const applyFiltersAndSort = () => {
    let filtered = [...flights];

    // Apply price filter
    filtered = filtered.filter(flight => {
      const price = parseInt(flight.price.replace(/[₦,]/g, ''));
      return price >= filters.priceRange[0] && price <= filters.priceRange[1];
    });

    // Apply airline filter
    if (filters.airlines.length > 0) {
      filtered = filtered.filter(flight => filters.airlines.includes(flight.airline));
    }

    // Apply stops filter
    if (filters.stops.length > 0) {
      filtered = filtered.filter(flight => {
        if (filters.stops.includes('direct') && flight.stops === 'Direct') return true;
        if (filters.stops.includes('1-stop') && flight.stops.includes('1 Stop')) return true;
        if (filters.stops.includes('2-stops') && flight.stops.includes('2 Stop')) return true;
        return false;
      });
    }

    // Sort flights
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseInt(a.price.replace(/[₦,]/g, '')) - parseInt(b.price.replace(/[₦,]/g, ''));
        case 'duration':
          return parseFloat(a.duration) - parseFloat(b.duration);
        case 'departure':
          return a.departure.localeCompare(b.departure);
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    setFilteredFlights(filtered);
  };

  const handleFlightSelect = (flight: Flight) => {
    navigate('/flight-details', { state: { flight } });
  };

  const handleNewSearch = () => {
    setShowSearchForm(false);
    setLoading(true);
    // Simulate new search
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const clearFilters = () => {
    setFilters({
      priceRange: [0, 2000000],
      airlines: [],
      stops: [],
      departureTime: [],
      duration: [0, 24],
    });
  };

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
        return <Wifi className="w-4 h-4" />;
      case 'meals':
        return <Utensils className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const airlines = [...new Set(flights.map(f => f.airline))];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Flight Search Results"
        subtitle={`${filteredFlights.length} flights found`}
        icon={Plane}
        backgroundImage="https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Summary & Modify Search */}
        <Card className="mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">Lagos → London</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>Mar 15, 2025</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Users className="w-4 h-4" />
                <span>1 Adult</span>
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
              <FlightSearchForm onSearch={handleNewSearch} />
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
                    <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>₦{filters.priceRange[0].toLocaleString()}</span>
                        <span>₦{filters.priceRange[1].toLocaleString()}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="2000000"
                        step="50000"
                        value={filters.priceRange[1]}
                        onChange={(e) => setFilters(prev => ({
                          ...prev,
                          priceRange: [prev.priceRange[0], parseInt(e.target.value)]
                        }))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>
                  </div>

                  {/* Airlines */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Airlines</h4>
                    <div className="space-y-2 max-h-40 overflow-y-auto">
                      {airlines.map(airline => (
                        <label key={airline} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={filters.airlines.includes(airline)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setFilters(prev => ({
                                  ...prev,
                                  airlines: [...prev.airlines, airline]
                                }));
                              } else {
                                setFilters(prev => ({
                                  ...prev,
                                  airlines: prev.airlines.filter(a => a !== airline)
                                }));
                              }
                            }}
                            className="w-4 h-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">{airline}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Stops */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Stops</h4>
                    <div className="space-y-2">
                      {[
                        { id: 'direct', label: 'Direct' },
                        { id: '1-stop', label: '1 Stop' },
                        { id: '2-stops', label: '2+ Stops' },
                      ].map(stop => (
                        <label key={stop.id} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={filters.stops.includes(stop.id)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setFilters(prev => ({
                                  ...prev,
                                  stops: [...prev.stops, stop.id]
                                }));
                              } else {
                                setFilters(prev => ({
                                  ...prev,
                                  stops: prev.stops.filter(s => s !== stop.id)
                                }));
                              }
                            }}
                            className="w-4 h-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">{stop.label}</span>
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
                {loading ? 'Searching...' : `${filteredFlights.length} flights found`}
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm"
                >
                  <option value="price">Price (Low to High)</option>
                  <option value="duration">Duration</option>
                  <option value="departure">Departure Time</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>

            {/* Loading State */}
            {loading && (
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <Card key={i} className="animate-pulse">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      </div>
                      <div className="w-24 h-8 bg-gray-200 rounded"></div>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {/* No Results */}
            {!loading && filteredFlights.length === 0 && (
              <Card className="text-center py-12">
                <AlertCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No flights found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters or search criteria
                </p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </Card>
            )}

            {/* Flight Results */}
            {!loading && filteredFlights.length > 0 && (
              <div className="space-y-4">
                {filteredFlights.map((flight) => (
                  <Card key={flight.id} hover className="transition-all duration-200 hover:shadow-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                      {/* Airline Info */}
                      <div className="flex items-center space-x-4">
                        <img
                          src={flight.logo}
                          alt={flight.airline}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-900">{flight.airline}</h3>
                          <p className="text-sm text-gray-600">{flight.aircraft}</p>
                          <div className="flex items-center space-x-1 mt-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-600">{flight.rating}</span>
                          </div>
                        </div>
                      </div>

                      {/* Flight Details */}
                      <div className="lg:col-span-2">
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-center">
                            <div className="text-xl font-bold text-gray-900">{flight.departure}</div>
                            <div className="text-sm text-gray-600">{flight.from}</div>
                          </div>
                          <div className="flex-1 mx-4">
                            <div className="text-center text-sm text-gray-600 mb-1">
                              {flight.duration}
                            </div>
                            <div className="relative">
                              <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                              </div>
                              <div className="relative flex justify-center">
                                <Plane className="w-5 h-5 text-sky-500 bg-white transform rotate-90" />
                              </div>
                            </div>
                            <div className="text-center text-xs text-gray-500 mt-1">
                              {flight.stops}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl font-bold text-gray-900">{flight.arrival}</div>
                            <div className="text-sm text-gray-600">{flight.to}</div>
                          </div>
                        </div>

                        {/* Amenities */}
                        <div className="flex flex-wrap items-center gap-2">
                          {flight.amenities.map((amenity, index) => (
                            <div key={index} className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-full">
                              {getAmenityIcon(amenity)}
                              <span className="text-xs text-gray-600">{amenity}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Price and Book */}
                      <div className="text-center lg:text-right">
                        <div className="mb-2">
                          {flight.originalPrice && (
                            <div className="text-sm text-gray-400 line-through">
                              {flight.originalPrice}
                            </div>
                          )}
                          <div className="text-2xl font-bold text-sky-600">{flight.price}</div>
                          <div className="text-sm text-gray-600">per person</div>
                        </div>
                        <Button 
                          size="lg" 
                          className="w-full lg:w-auto"
                          onClick={() => handleFlightSelect(flight)}
                        >
                          Select Flight
                        </Button>
                        <div className="text-xs text-gray-500 mt-2">
                          {flight.baggage}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {/* Load More */}
            {!loading && filteredFlights.length > 0 && (
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  Load More Flights
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
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

export default FlightSearchResultsPage;