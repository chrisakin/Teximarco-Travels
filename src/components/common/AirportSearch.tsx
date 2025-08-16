import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Plane } from 'lucide-react';
import { Airport } from '../../types';
import { searchAirports } from '../../data/airports';

interface AirportSearchProps {
  value: string;
  onChange: (airport: Airport | null) => void;
  placeholder?: string;
  label?: string;
  className?: string;
}

const AirportSearch: React.FC<AirportSearchProps> = ({
  value,
  onChange,
  placeholder = 'Search airports...',
  label,
  className = '',
}) => {
  const [query, setQuery] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<Airport[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setQuery(value);
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    
    if (newQuery.length >= 2) {
      const searchResults = searchAirports(newQuery);
      setResults(searchResults);
      setIsOpen(true);
      setSelectedIndex(-1);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };

  const handleAirportSelect = (airport: Airport) => {
    setQuery(`${airport.city} (${airport.iata})`);
    onChange(airport);
    setIsOpen(false);
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : 0));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : results.length - 1));
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < results.length) {
          handleAirportSelect(results[selectedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setSelectedIndex(-1);
        break;
    }
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (query.length >= 2) {
              const searchResults = searchAirports(query);
              setResults(searchResults);
              setIsOpen(true);
            }
          }}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          autoComplete="off"
        />
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute z-[9999] w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto min-w-max">
          {results.map((airport, index) => (
            <button
              key={airport.iata}
              onClick={() => handleAirportSelect(airport)}
              className={`w-full px-4 py-3 text-left hover:bg-sky-50 focus:bg-sky-50 focus:outline-none border-b border-gray-100 last:border-b-0 whitespace-nowrap ${
                index === selectedIndex ? 'bg-sky-50' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="bg-sky-100 p-2 rounded-lg">
                  <Plane className="w-4 h-4 text-sky-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-gray-900">{airport.iata}</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-900">{airport.city}</span>
                  </div>
                  <div className="text-sm text-gray-600">{airport.name}</div>
                  <div className="text-xs text-gray-500">{airport.country}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AirportSearch;