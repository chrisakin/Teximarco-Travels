import React, { useState } from 'react';
import { Search, MapPin, Users, Calendar } from 'lucide-react';
import DatePicker from './DatePicker';
import Button from './Button';

interface PackageSearchData {
  destination: string;
  departureDate: Date | null;
  duration: string;
  travelers: string;
  budget: string;
}

interface PackageSearchFormProps {
  onSearch?: (data: PackageSearchData) => void;
  className?: string;
}

const PackageSearchForm: React.FC<PackageSearchFormProps> = ({ onSearch, className = '' }) => {
  const [formData, setFormData] = useState<PackageSearchData>({
    destination: '',
    departureDate: null,
    duration: '7',
    travelers: '2',
    budget: 'mid-range',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={formData.destination}
              onChange={(e) => setFormData(prev => ({ ...prev, destination: e.target.value }))}
              placeholder="Where do you want to go?"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            />
          </div>
        </div>

        <DatePicker
          label="Departure"
          selected={formData.departureDate}
          onChange={(date) => setFormData(prev => ({ ...prev, departureDate: date }))}
          minDate={new Date()}
          placeholder="Departure date"
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <select
              value={formData.duration}
              onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent appearance-none"
            >
              <option value="3">3 Days</option>
              <option value="5">5 Days</option>
              <option value="7">7 Days</option>
              <option value="10">10 Days</option>
              <option value="14">14 Days</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Travelers</label>
          <div className="relative">
            <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <select
              value={formData.travelers}
              onChange={(e) => setFormData(prev => ({ ...prev, travelers: e.target.value }))}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent appearance-none"
            >
              <option value="1">1 Traveler</option>
              <option value="2">2 Travelers</option>
              <option value="3">3 Travelers</option>
              <option value="4">4 Travelers</option>
              <option value="5">5+ Travelers</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Budget</label>
          <select
            value={formData.budget}
            onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent appearance-none"
          >
            <option value="budget">Budget</option>
            <option value="mid-range">Mid-range</option>
            <option value="luxury">Luxury</option>
          </select>
        </div>
      </div>

      <div className="text-center">
        <Button type="submit" size="lg" icon={Search}>
          Search Packages
        </Button>
      </div>
    </form>
  );
};

export default PackageSearchForm;