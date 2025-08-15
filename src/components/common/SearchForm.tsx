import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import Button from './Button';

interface SearchFormProps {
  type: 'flights' | 'hotels' | 'packages';
  onSearch?: (data: any) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ type, onSearch }) => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    checkIn: '',
    checkOut: '',
    passengers: '1',
    rooms: '1',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {type === 'flights' ? 'From' : 'Location'}
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={formData.from}
              onChange={(e) => handleInputChange('from', e.target.value)}
              placeholder={type === 'flights' ? 'Lagos (LOS)' : 'Enter city or hotel'}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            />
          </div>
        </div>

        {type === 'flights' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={formData.to}
                onChange={(e) => handleInputChange('to', e.target.value)}
                placeholder="London (LHR)"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
            </div>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {type === 'flights' ? 'Departure' : 'Check-in'}
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="date"
              value={formData.checkIn}
              onChange={(e) => handleInputChange('checkIn', e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            />
          </div>
        </div>

        {type !== 'flights' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="date"
                value={formData.checkOut}
                onChange={(e) => handleInputChange('checkOut', e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
            </div>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {type === 'hotels' ? 'Rooms' : 'Passengers'}
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <select
              value={type === 'hotels' ? formData.rooms : formData.passengers}
              onChange={(e) => handleInputChange(type === 'hotels' ? 'rooms' : 'passengers', e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent appearance-none"
            >
              <option value="1">1 {type === 'hotels' ? 'Room' : 'Adult'}</option>
              <option value="2">2 {type === 'hotels' ? 'Rooms' : 'Adults'}</option>
              <option value="3">3 {type === 'hotels' ? 'Rooms' : 'Adults'}</option>
              <option value="4">4+ {type === 'hotels' ? 'Rooms' : 'Adults'}</option>
            </select>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Button type="submit" size="lg" icon={Search}>
          Search {type.charAt(0).toUpperCase() + type.slice(1)}
        </Button>
      </div>
    </form>
  );
};

export default SearchForm;