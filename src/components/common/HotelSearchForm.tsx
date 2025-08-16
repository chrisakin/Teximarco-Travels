import React, { useState } from 'react';
import { Search, MapPin, Users } from 'lucide-react';
import DatePicker from './DatePicker';
import Button from './Button';

interface HotelSearchData {
  location: string;
  checkIn: Date | null;
  checkOut: Date | null;
  rooms: string;
  guests: string;
}

interface HotelSearchFormProps {
  onSearch?: (data: HotelSearchData) => void;
  className?: string;
}

const HotelSearchForm: React.FC<HotelSearchFormProps> = ({ onSearch, className = '' }) => {
  const [formData, setFormData] = useState<HotelSearchData>({
    location: '',
    checkIn: null,
    checkOut: null,
    rooms: '1',
    guests: '2',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
              placeholder="City, hotel, or landmark"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            />
          </div>
        </div>

        <DatePicker
          label="Check-in"
          selected={formData.checkIn}
          onChange={(date) => setFormData(prev => ({ ...prev, checkIn: date }))}
          minDate={new Date()}
          placeholder="Check-in date"
        />

        <DatePicker
          label="Check-out"
          selected={formData.checkOut}
          onChange={(date) => setFormData(prev => ({ ...prev, checkOut: date }))}
          minDate={formData.checkIn || new Date()}
          placeholder="Check-out date"
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Rooms</label>
          <div className="relative">
            <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <select
              value={formData.rooms}
              onChange={(e) => setFormData(prev => ({ ...prev, rooms: e.target.value }))}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent appearance-none"
            >
              <option value="1">1 Room</option>
              <option value="2">2 Rooms</option>
              <option value="3">3 Rooms</option>
              <option value="4">4+ Rooms</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
          <div className="relative">
            <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <select
              value={formData.guests}
              onChange={(e) => setFormData(prev => ({ ...prev, guests: e.target.value }))}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent appearance-none"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5+ Guests</option>
            </select>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Button type="submit" size="lg" icon={Search}>
          Search Hotels
        </Button>
      </div>
    </form>
  );
};

export default HotelSearchForm;