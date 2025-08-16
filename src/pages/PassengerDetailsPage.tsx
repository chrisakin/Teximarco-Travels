import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { User, Calendar, MapPin, Phone, Mail, Plus, Minus } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

interface Passenger {
  id: number;
  title: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  nationality: string;
  passportNumber: string;
  passportExpiry: string;
  email: string;
  phone: string;
}

const PassengerDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { flight, fare } = location.state || {};

  const [passengers, setPassengers] = useState<Passenger[]>([
    {
      id: 1,
      title: 'Mr',
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      nationality: 'Nigeria',
      passportNumber: '',
      passportExpiry: '',
      email: '',
      phone: '',
    },
  ]);

  const [contactDetails, setContactDetails] = useState({
    email: '',
    phone: '',
    emergencyContact: '',
    emergencyPhone: '',
  });

  const titles = ['Mr', 'Mrs', 'Ms', 'Dr', 'Prof'];
  const countries = [
    'Nigeria', 'United Kingdom', 'United States', 'Canada', 'Germany', 
    'France', 'South Africa', 'Ghana', 'Kenya', 'UAE'
  ];

  const updatePassenger = (id: number, field: keyof Passenger, value: string) => {
    setPassengers(prev => 
      prev.map(p => p.id === id ? { ...p, [field]: value } : p)
    );
  };

  const addPassenger = () => {
    const newId = Math.max(...passengers.map(p => p.id)) + 1;
    setPassengers(prev => [...prev, {
      id: newId,
      title: 'Mr',
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      nationality: 'Nigeria',
      passportNumber: '',
      passportExpiry: '',
      email: '',
      phone: '',
    }]);
  };

  const removePassenger = (id: number) => {
    if (passengers.length > 1) {
      setPassengers(prev => prev.filter(p => p.id !== id));
    }
  };

  const handleContinue = () => {
    navigate('/seat-selection', {
      state: {
        flight,
        fare,
        passengers,
        contactDetails,
      }
    });
  };

  return (
    <div>
      <PageHeader
        title="Passenger Details"
        subtitle="Enter passenger information for your flight"
        icon={User}
        backgroundImage="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Passenger Forms */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Information */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={contactDetails.email}
                      onChange={(e) => setContactDetails(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      value={contactDetails.phone}
                      onChange={(e) => setContactDetails(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="+234 xxx xxx xxxx"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Emergency Contact Name
                  </label>
                  <input
                    type="text"
                    value={contactDetails.emergencyContact}
                    onChange={(e) => setContactDetails(prev => ({ ...prev, emergencyContact: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="Emergency contact name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Emergency Contact Phone
                  </label>
                  <input
                    type="tel"
                    value={contactDetails.emergencyPhone}
                    onChange={(e) => setContactDetails(prev => ({ ...prev, emergencyPhone: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="+234 xxx xxx xxxx"
                  />
                </div>
              </div>
            </Card>

            {/* Passenger Details */}
            {passengers.map((passenger, index) => (
              <Card key={passenger.id}>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Passenger {index + 1}
                  </h2>
                  {passengers.length > 1 && (
                    <Button
                      variant="outline"
                      size="sm"
                      icon={Minus}
                      onClick={() => removePassenger(passenger.id)}
                      className="text-red-600 border-red-300 hover:bg-red-50"
                    >
                      Remove
                    </Button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title *
                    </label>
                    <select
                      value={passenger.title}
                      onChange={(e) => updatePassenger(passenger.id, 'title', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      required
                    >
                      {titles.map(title => (
                        <option key={title} value={title}>{title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={passenger.firstName}
                      onChange={(e) => updatePassenger(passenger.id, 'firstName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={passenger.lastName}
                      onChange={(e) => updatePassenger(passenger.id, 'lastName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        value={passenger.dateOfBirth}
                        onChange={(e) => updatePassenger(passenger.id, 'dateOfBirth', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nationality *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <select
                        value={passenger.nationality}
                        onChange={(e) => updatePassenger(passenger.id, 'nationality', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent appearance-none"
                        required
                      >
                        {countries.map(country => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Passport Number *
                    </label>
                    <input
                      type="text"
                      value={passenger.passportNumber}
                      onChange={(e) => updatePassenger(passenger.id, 'passportNumber', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="Passport number"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Passport Expiry *
                    </label>
                    <input
                      type="date"
                      value={passenger.passportExpiry}
                      onChange={(e) => updatePassenger(passenger.id, 'passportExpiry', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </Card>
            ))}

            <div className="text-center">
              <Button
                variant="outline"
                icon={Plus}
                onClick={addPassenger}
              >
                Add Another Passenger
              </Button>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="space-y-6">
            <Card className="sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Booking Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <div className="font-medium">{flight?.airline}</div>
                  <div className="text-sm text-gray-600">{flight?.from} → {flight?.to}</div>
                </div>
                <div>
                  <div className="font-medium">{fare?.name}</div>
                  <div className="text-sm text-gray-600">
                    {passengers.length} passenger{passengers.length > 1 ? 's' : ''}
                  </div>
                </div>
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Base Fare × {passengers.length}</span>
                  <span className="font-medium">
                    ₦{(parseInt(fare?.price?.replace(/[₦,]/g, '') || '0') * passengers.length).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Taxes & Fees</span>
                  <span className="font-medium">₦{(45000 * passengers.length).toLocaleString()}</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-xl font-bold text-sky-600">
                      ₦{((parseInt(fare?.price?.replace(/[₦,]/g, '') || '0') + 45000) * passengers.length).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button size="lg" className="w-full" onClick={handleContinue}>
                  Continue to Seat Selection
                </Button>
                <Button variant="outline" size="sm" className="w-full" onClick={() => navigate(-1)}>
                  Back to Flight Details
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassengerDetailsPage;