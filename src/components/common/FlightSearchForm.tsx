import React, { useState } from 'react';
import { Search, Plus, Minus, Users } from 'lucide-react';
import { SearchFormData, MultiCityTrip, Airport } from '../../types';
import AirportSearch from './AirportSearch';
import DatePicker from './DatePicker';
import Button from './Button';

interface FlightSearchFormProps {
  onSearch?: (data: SearchFormData) => void;
  className?: string;
}

const FlightSearchForm: React.FC<FlightSearchFormProps> = ({ onSearch, className = '' }) => {
  const [formData, setFormData] = useState<SearchFormData>({
    tripType: 'roundTrip',
    from: '',
    to: '',
    departureDate: null,
    returnDate: null,
    passengers: '1',
    rooms: '1',
    multiCityTrips: [
      { from: '', to: '', date: null },
      { from: '', to: '', date: null },
    ],
  });

  const handleTripTypeChange = (tripType: 'oneWay' | 'roundTrip' | 'multiCity') => {
    setFormData(prev => ({ ...prev, tripType }));
  };

  const handleAirportChange = (field: 'from' | 'to', airport: Airport | null) => {
    setFormData(prev => ({
      ...prev,
      [field]: airport ? `${airport.city} (${airport.iata})` : '',
    }));
  };

  const handleMultiCityChange = (index: number, field: keyof MultiCityTrip, value: unknown) => {
    setFormData(prev => ({
      ...prev,
      multiCityTrips: prev.multiCityTrips?.map((trip, i) =>
        i === index ? { ...trip, [field]: value } : trip
      ) || [],
    }));
  };

  const handleMultiCityAirportChange = (index: number, field: 'from' | 'to', airport: Airport | null) => {
    const value = airport ? `${airport.city} (${airport.iata})` : '';
    handleMultiCityChange(index, field, value);
  };

  const addMultiCityTrip = () => {
    setFormData(prev => ({
      ...prev,
      multiCityTrips: [...(prev.multiCityTrips || []), { from: '', to: '', date: null }],
    }));
  };

  const removeMultiCityTrip = (index: number) => {
    setFormData(prev => ({
      ...prev,
      multiCityTrips: prev.multiCityTrips?.filter((_, i) => i !== index) || [],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      {/* Trip Type Selector */}
      <div className="flex flex-wrap gap-3 mb-8">
        {[
          { id: 'roundTrip', label: 'Round Trip' },
          { id: 'oneWay', label: 'One Way' },
          { id: 'multiCity', label: 'Multi City' },
        ].map((type) => (
          <button
            key={type.id}
            type="button"
            onClick={() => handleTripTypeChange(type.id as any)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              formData.tripType === type.id
                ? 'bg-sky-600 text-white shadow-lg transform scale-105'
                : 'bg-gray-100 text-gray-600 hover:text-sky-600 hover:bg-sky-50 hover:shadow-md'
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>

      {/* Single Trip Form */}
      {formData.tripType !== 'multiCity' && (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="relative z-20">
            <AirportSearch
            label="From"
            value={formData.from}
            onChange={(airport) => handleAirportChange('from', airport)}
            placeholder="Departure city"
            />
          </div>
          
          <div className="relative z-20">
            <AirportSearch
            label="To"
            value={formData.to}
            onChange={(airport) => handleAirportChange('to', airport)}
            placeholder="Destination city"
            />
          </div>

          <div className="relative z-10">
            <DatePicker
            label="Departure"
            selected={formData.departureDate}
            onChange={(date) => setFormData(prev => ({ ...prev, departureDate: date }))}
            minDate={new Date()}
            placeholder="Select departure date"
            />
          </div>

          {formData.tripType === 'roundTrip' && (
            <div className="relative z-10">
              <DatePicker
              label="Return"
              selected={formData.returnDate}
              onChange={(date) => setFormData(prev => ({ ...prev, returnDate: date }))}
              minDate={formData.departureDate || new Date()}
              placeholder="Select return date"
              />
            </div>
          )}
        </div>

        {/* Passengers for both one-way and round-trip */}
        <div className="flex justify-center mb-6">
          <div className="w-full md:w-64">
            <label className="block text-sm font-medium text-gray-700 mb-2">Passengers</label>
            <div className="relative">
              <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <select
                value={formData.passengers}
                onChange={(e) => setFormData(prev => ({ ...prev, passengers: e.target.value }))}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent appearance-none"
              >
                <option value="1">1 Adult</option>
                <option value="2">2 Adults</option>
                <option value="3">3 Adults</option>
                <option value="4">4+ Adults</option>
              </select>
            </div>
          </div>
        </div>
        </>
      )}

      {/* Multi City Form */}
      {formData.tripType === 'multiCity' && (
        <div className="space-y-4 mb-6">
          {formData.multiCityTrips?.map((trip, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="relative z-20">
                <AirportSearch
                label={`From ${index + 1}`}
                value={trip.from}
                onChange={(airport) => handleMultiCityAirportChange(index, 'from', airport)}
                placeholder="Departure city"
                />
              </div>
              
              <div className="relative z-20">
                <AirportSearch
                label={`To ${index + 1}`}
                value={trip.to}
                onChange={(airport) => handleMultiCityAirportChange(index, 'to', airport)}
                placeholder="Destination city"
                />
              </div>

              <div className="relative z-10">
                <DatePicker
                label={`Date ${index + 1}`}
                selected={trip.date}
                onChange={(date) => handleMultiCityChange(index, 'date', date)}
                minDate={new Date()}
                placeholder="Select date"
                />
              </div>

              <div className="flex items-end">
                {formData.multiCityTrips && formData.multiCityTrips.length > 2 && (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    icon={Minus}
                    onClick={() => removeMultiCityTrip(index)}
                    className="text-red-600 border-red-300 hover:bg-red-50"
                  >
                    Remove
                  </Button>
                )}
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center">
            <Button
              type="button"
              variant="outline"
              size="sm"
              icon={Plus}
              onClick={addMultiCityTrip}
            >
              Add Another Flight
            </Button>

            <div className="w-48">
              <label className="block text-sm font-medium text-gray-700 mb-2">Passengers</label>
              <div className="relative">
                <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <select
                  value={formData.passengers}
                  onChange={(e) => setFormData(prev => ({ ...prev, passengers: e.target.value }))}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent appearance-none"
                >
                  <option value="1">1 Adult</option>
                  <option value="2">2 Adults</option>
                  <option value="3">3 Adults</option>
                  <option value="4">4+ Adults</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Button */}
      <div className="text-center">
        <Button type="submit" size="lg" icon={Search}>
          Search Flights
        </Button>
      </div>
    </form>
  );
};

export default FlightSearchForm;