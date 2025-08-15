import React, { useState } from 'react';
import { Plane, Filter, SortAsc, Clock, Wifi, Utensils } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SearchForm from '../components/common/SearchForm';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const FlightsPage = () => {
  const [flights] = useState([
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
      class: 'Economy',
      amenities: ['Wifi', 'Meals', 'Entertainment'],
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
      class: 'Economy',
      amenities: ['Wifi', 'Meals', 'Entertainment'],
    },
  ]);

  const handleSearch = (searchData: any) => {
    console.log('Flight search:', searchData);
    // Implement search logic here
  };

  return (
    <div>
      <PageHeader
        title="Find Your Perfect Flight"
        subtitle="Compare prices from 500+ airlines and book with confidence"
        icon={Plane}
        backgroundImage="https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Form */}
        <div className="mb-12">
          <SearchForm type="flights" onSearch={handleSearch} />
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Button variant="outline" icon={Filter} size="sm">
            Filters
          </Button>
          <Button variant="outline" icon={SortAsc} size="sm">
            Sort by Price
          </Button>
          <Button variant="outline" icon={Clock} size="sm">
            Duration
          </Button>
        </div>

        {/* Flight Results */}
        <div className="space-y-6">
          {flights.map((flight) => (
            <Card key={flight.id} hover className="p-6">
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
                    <p className="text-sm text-gray-600">{flight.class}</p>
                  </div>
                </div>

                {/* Flight Details */}
                <div className="lg:col-span-2">
                  <div className="flex items-center justify-between mb-2">
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
                          <Plane className="w-5 h-5 text-sky-500 bg-white" />
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
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    {flight.amenities.includes('Wifi') && <Wifi className="w-4 h-4" />}
                    {flight.amenities.includes('Meals') && <Utensils className="w-4 h-4" />}
                    <span>{flight.amenities.join(' • ')}</span>
                  </div>
                </div>

                {/* Price and Book */}
                <div className="text-center lg:text-right">
                  <div className="text-2xl font-bold text-sky-600 mb-2">{flight.price}</div>
                  <Button size="lg" className="w-full lg:w-auto">
                    Select Flight
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Flights
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FlightsPage;