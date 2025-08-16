import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Package, 
  Filter, 
  SortAsc, 
  Star, 
  MapPin, 
  Calendar, 
  Users,
  Plane,
  Building,
  Camera,
  ChevronDown,
  ChevronUp,
  Loader2,
  AlertCircle,
  Clock
} from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import PackageSearchForm from '../components/common/PackageSearchForm';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

interface TravelPackage {
  id: number;
  title: string;
  destination: string;
  image: string;
  duration: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviews: number;
  includes: string[];
  highlights: string[];
  description: string;
  category: string;
}

const PackageSearchResultsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchData = location.state?.searchData;

  const [packages, setPackages] = useState<TravelPackage[]>([]);
  const [filteredPackages, setFilteredPackages] = useState<TravelPackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('price');
  const [showFilters, setShowFilters] = useState(false);
  const [showSearchForm, setShowSearchForm] = useState(false);
  
  // Filter states
  const [filters, setFilters] = useState({
    priceRange: [0, 2000000],
    duration: [] as string[],
    category: [] as string[],
    rating: 0,
  });

  // Mock package data
  const mockPackages: TravelPackage[] = [
    {
      id: 1,
      title: 'Dubai Explorer Package',
      destination: 'Dubai, UAE',
      image: 'https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '5 Days, 4 Nights',
      price: '₦850,000',
      originalPrice: '₦950,000',
      rating: 4.8,
      reviews: 324,
      includes: ['Round-trip flights', '4-star hotel', 'Daily breakfast', 'City tours', 'Desert safari'],
      highlights: ['Burj Khalifa visit', 'Dubai Mall shopping', 'Desert safari with BBQ', 'Dhow cruise dinner'],
      description: 'Experience the glamour of Dubai with this comprehensive package including luxury accommodation and exciting activities.',
      category: 'Luxury',
    },
    {
      id: 2,
      title: 'London Heritage Tour',
      destination: 'London, UK',
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '7 Days, 6 Nights',
      price: '₦1,200,000',
      originalPrice: '₦1,350,000',
      rating: 4.9,
      reviews: 567,
      includes: ['Round-trip flights', '3-star hotel', 'Daily breakfast', 'Museum passes', 'Thames cruise'],
      highlights: ['Tower of London', 'Buckingham Palace', 'British Museum', 'West End show'],
      description: 'Discover the rich history and culture of London with guided tours and premium experiences.',
      category: 'Cultural',
    },
    {
      id: 3,
      title: 'Paris Romance Package',
      destination: 'Paris, France',
      image: 'https://images.pexels.com/photos/161853/eiffel-tower-paris-france-tower-161853.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '4 Days, 3 Nights',
      price: '₦750,000',
      rating: 4.7,
      reviews: 289,
      includes: ['Round-trip flights', 'Boutique hotel', 'Daily breakfast', 'Seine cruise', 'Wine tasting'],
      highlights: ['Eiffel Tower dinner', 'Louvre Museum', 'Montmartre tour', 'Versailles day trip'],
      description: 'A romantic getaway to the City of Light with intimate experiences and luxury touches.',
      category: 'Romance',
    },
    {
      id: 4,
      title: 'New York City Adventure',
      destination: 'New York, USA',
      image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '6 Days, 5 Nights',
      price: '₦1,100,000',
      originalPrice: '₦1,250,000',
      rating: 4.6,
      reviews: 445,
      includes: ['Round-trip flights', '4-star hotel', 'Daily breakfast', 'Broadway show', 'City pass'],
      highlights: ['Statue of Liberty', 'Central Park', 'Times Square', 'Empire State Building'],
      description: 'Experience the energy of the Big Apple with this action-packed itinerary.',
      category: 'Adventure',
    },
    {
      id: 5,
      title: 'Tokyo Cultural Experience',
      destination: 'Tokyo, Japan',
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '8 Days, 7 Nights',
      price: '₦1,450,000',
      rating: 4.8,
      reviews: 378,
      includes: ['Round-trip flights', 'Traditional ryokan', 'Daily breakfast', 'JR Pass', 'Cultural tours'],
      highlights: ['Mount Fuji trip', 'Traditional tea ceremony', 'Sushi making class', 'Temple visits'],
      description: 'Immerse yourself in Japanese culture with authentic experiences and traditional accommodation.',
      category: 'Cultural',
    },
    {
      id: 6,
      title: 'Cape Town Safari & Wine',
      destination: 'Cape Town, South Africa',
      image: 'https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '10 Days, 9 Nights',
      price: '₦980,000',
      originalPrice: '₦1,150,000',
      rating: 4.9,
      reviews: 234,
      includes: ['Round-trip flights', 'Safari lodge', 'All meals', 'Game drives', 'Wine tours'],
      highlights: ['Table Mountain cable car', 'Kruger National Park', 'Wine tasting in Stellenbosch', 'Penguin colony visit'],
      description: 'Combine wildlife adventure with world-class wine experiences in beautiful South Africa.',
      category: 'Adventure',
    },
  ];

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      setPackages(mockPackages);
      setFilteredPackages(mockPackages);
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    applyFiltersAndSort();
  }, [packages, filters, sortBy]);

  const applyFiltersAndSort = () => {
    let filtered = [...packages];

    // Apply price filter
    filtered = filtered.filter(pkg => {
      const price = parseInt(pkg.price.replace(/[₦,]/g, ''));
      return price >= filters.priceRange[0] && price <= filters.priceRange[1];
    });

    // Apply duration filter
    if (filters.duration.length > 0) {
      filtered = filtered.filter(pkg => {
        const days = parseInt(pkg.duration.split(' ')[0]);
        return filters.duration.some(d => {
          if (d === '3-5' && days >= 3 && days <= 5) return true;
          if (d === '6-8' && days >= 6 && days <= 8) return true;
          if (d === '9+' && days >= 9) return true;
          return false;
        });
      });
    }

    // Apply category filter
    if (filters.category.length > 0) {
      filtered = filtered.filter(pkg => filters.category.includes(pkg.category));
    }

    // Apply rating filter
    if (filters.rating > 0) {
      filtered = filtered.filter(pkg => pkg.rating >= filters.rating);
    }

    // Sort packages
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseInt(a.price.replace(/[₦,]/g, '')) - parseInt(b.price.replace(/[₦,]/g, ''));
        case 'rating':
          return b.rating - a.rating;
        case 'duration':
          return parseInt(a.duration.split(' ')[0]) - parseInt(b.duration.split(' ')[0]);
        case 'reviews':
          return b.reviews - a.reviews;
        default:
          return 0;
      }
    });

    setFilteredPackages(filtered);
  };

  const handlePackageSelect = (pkg: TravelPackage) => {
    navigate('/package-details', { state: { package: pkg } });
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
      priceRange: [0, 2000000],
      duration: [],
      category: [],
      rating: 0,
    });
  };

  const categories = [...new Set(packages.map(p => p.category))];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Travel Package Results"
        subtitle={`${filteredPackages.length} packages found`}
        icon={Package}
        backgroundImage="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Summary & Modify Search */}
        <Card className="mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">International Destinations</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>Mar 2025</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Users className="w-4 h-4" />
                <span>2 Travelers</span>
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
              <PackageSearchForm onSearch={handleNewSearch} />
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

                  {/* Duration */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Duration</h4>
                    <div className="space-y-2">
                      {[
                        { id: '3-5', label: '3-5 Days' },
                        { id: '6-8', label: '6-8 Days' },
                        { id: '9+', label: '9+ Days' },
                      ].map(duration => (
                        <label key={duration.id} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={filters.duration.includes(duration.id)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setFilters(prev => ({
                                  ...prev,
                                  duration: [...prev.duration, duration.id]
                                }));
                              } else {
                                setFilters(prev => ({
                                  ...prev,
                                  duration: prev.duration.filter(d => d !== duration.id)
                                }));
                              }
                            }}
                            className="w-4 h-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">{duration.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Category */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Category</h4>
                    <div className="space-y-2">
                      {categories.map(category => (
                        <label key={category} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={filters.category.includes(category)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setFilters(prev => ({
                                  ...prev,
                                  category: [...prev.category, category]
                                }));
                              } else {
                                setFilters(prev => ({
                                  ...prev,
                                  category: prev.category.filter(c => c !== category)
                                }));
                              }
                            }}
                            className="w-4 h-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">{category}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Minimum Rating</h4>
                    <div className="space-y-2">
                      {[4.5, 4.0, 3.5].map(rating => (
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
                </Card>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            {/* Sort Options */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
              <div className="text-gray-600">
                {loading ? 'Searching...' : `${filteredPackages.length} packages found`}
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
                  <option value="duration">Duration</option>
                  <option value="reviews">Most Reviewed</option>
                </select>
              </div>
            </div>

            {/* Loading State */}
            {loading && (
              <div className="space-y-6">
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
            {!loading && filteredPackages.length === 0 && (
              <Card className="text-center py-12">
                <AlertCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No packages found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters or search criteria
                </p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </Card>
            )}

            {/* Package Results */}
            {!loading && filteredPackages.length > 0 && (
              <div className="space-y-6">
                {filteredPackages.map((pkg) => (
                  <Card key={pkg.id} hover className="overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Package Image */}
                      <div className="lg:col-span-1 relative">
                        <img
                          src={pkg.image}
                          alt={pkg.title}
                          className="w-full h-64 lg:h-full object-cover rounded-lg"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {pkg.category}
                          </span>
                        </div>
                      </div>

                      {/* Package Details */}
                      <div className="lg:col-span-2 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 mb-1">{pkg.title}</h3>
                              <div className="flex items-center text-gray-600 mb-2">
                                <MapPin className="w-4 h-4 mr-1" />
                                <span className="text-sm">{pkg.destination}</span>
                              </div>
                              <div className="flex items-center text-gray-600 mb-2">
                                <Clock className="w-4 h-4 mr-1" />
                                <span className="text-sm">{pkg.duration}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center mb-1">
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-4 h-4 ${
                                        i < Math.floor(pkg.rating)
                                          ? 'text-yellow-400 fill-current'
                                          : 'text-gray-300'
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="ml-1 text-sm font-medium">{pkg.rating}</span>
                              </div>
                              <p className="text-xs text-gray-500">({pkg.reviews} reviews)</p>
                            </div>
                          </div>

                          <p className="text-gray-600 mb-4">{pkg.description}</p>

                          {/* Includes */}
                          <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 mb-2">Package Includes:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                              {pkg.includes.slice(0, 4).map((item, index) => (
                                <div key={index} className="flex items-center text-sm text-gray-600">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                  {item}
                                </div>
                              ))}
                            </div>
                            {pkg.includes.length > 4 && (
                              <p className="text-sm text-sky-600 mt-1">+{pkg.includes.length - 4} more</p>
                            )}
                          </div>

                          {/* Highlights */}
                          <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                            <div className="flex flex-wrap gap-2">
                              {pkg.highlights.slice(0, 3).map((highlight, index) => (
                                <span
                                  key={index}
                                  className="bg-sky-50 text-sky-700 px-3 py-1 rounded-full text-sm"
                                >
                                  {highlight}
                                </span>
                              ))}
                              {pkg.highlights.length > 3 && (
                                <span className="text-sm text-sky-600">+{pkg.highlights.length - 3} more</span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Price and Book */}
                        <div className="flex items-end justify-between">
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="text-2xl font-bold text-sky-600">{pkg.price}</span>
                              {pkg.originalPrice && (
                                <span className="text-lg text-gray-400 line-through">{pkg.originalPrice}</span>
                              )}
                            </div>
                            <p className="text-sm text-gray-600">per person</p>
                          </div>
                          <div className="space-y-2">
                            <Button size="lg" onClick={() => handlePackageSelect(pkg)}>
                              Book Package
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
            {!loading && filteredPackages.length > 0 && (
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  Load More Packages
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

export default PackageSearchResultsPage;