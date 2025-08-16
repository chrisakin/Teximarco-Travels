import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Plane, 
  Clock, 
  Wifi, 
  Utensils, 
  Shield, 
  Star, 
  CheckCircle,
  AlertCircle,
  Calendar,
  Users
} from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const FlightDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const flight = location.state?.flight;

  const [selectedFare, setSelectedFare] = useState('economy');

  const fareOptions = [
    {
      id: 'economy',
      name: 'Economy',
      price: flight?.price || '₦420,000',
      features: [
        'Standard seat selection',
        '23kg checked baggage',
        '7kg carry-on baggage',
        'In-flight meals',
        'Entertainment system',
      ],
      popular: false,
    },
    {
      id: 'premium',
      name: 'Premium Economy',
      price: '₦650,000',
      features: [
        'Extra legroom seats',
        '32kg checked baggage',
        '10kg carry-on baggage',
        'Premium meals & drinks',
        'Priority boarding',
        'Enhanced entertainment',
      ],
      popular: true,
    },
    {
      id: 'business',
      name: 'Business Class',
      price: '₦1,250,000',
      features: [
        'Lie-flat seats',
        '40kg checked baggage',
        '15kg carry-on baggage',
        'Gourmet dining',
        'Lounge access',
        'Priority everything',
      ],
      popular: false,
    },
  ];

  const handleContinue = () => {
    const selectedFareOption = fareOptions.find(f => f.id === selectedFare);
    navigate('/passenger-details', { 
      state: { 
        flight, 
        fare: selectedFareOption 
      } 
    });
  };

  if (!flight) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Flight not found</h2>
          <Button onClick={() => navigate('/flights')}>
            Back to Search
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        title="Flight Details"
        subtitle="Review your selected flight and choose your fare"
        icon={Plane}
        backgroundImage="https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Flight Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Flight Summary */}
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Flight Summary</h2>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">{flight.rating}</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={flight.logo}
                  alt={flight.airline}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{flight.airline}</h3>
                  <p className="text-gray-600">{flight.aircraft}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{flight.departure}</div>
                  <div className="text-gray-600">{flight.from}</div>
                  <div className="text-sm text-gray-500 mt-1">Departure</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Clock className="w-5 h-5 text-sky-500 mr-2" />
                    <span className="font-semibold">{flight.duration}</span>
                  </div>
                  <div className="text-sm text-gray-600">{flight.stops}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{flight.arrival}</div>
                  <div className="text-gray-600">{flight.to}</div>
                  <div className="text-sm text-gray-500 mt-1">Arrival</div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Included Services</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{flight.baggage}</span>
                  </div>
                  {flight.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Fare Selection */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Fare</h2>
              <div className="space-y-4">
                {fareOptions.map((fare) => (
                  <div
                    key={fare.id}
                    className={`relative border-2 rounded-xl p-6 cursor-pointer transition-all ${
                      selectedFare === fare.id
                        ? 'border-sky-500 bg-sky-50'
                        : 'border-gray-200 hover:border-sky-300'
                    }`}
                    onClick={() => setSelectedFare(fare.id)}
                  >
                    {fare.popular && (
                      <div className="absolute -top-3 left-6">
                        <span className="bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{fare.name}</h3>
                        <p className="text-2xl font-bold text-sky-600">{fare.price}</p>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 ${
                        selectedFare === fare.id
                          ? 'border-sky-500 bg-sky-500'
                          : 'border-gray-300'
                      }`}>
                        {selectedFare === fare.id && (
                          <CheckCircle className="w-6 h-6 text-white -m-0.5" />
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {fare.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Booking Summary */}
          <div className="space-y-6">
            <Card className="sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Booking Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="font-medium">Departure</div>
                    <div className="text-sm text-gray-600">March 15, 2025</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="font-medium">Passengers</div>
                    <div className="text-sm text-gray-600">1 Adult</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Plane className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="font-medium">Route</div>
                    <div className="text-sm text-gray-600">{flight.from} → {flight.to}</div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Base Fare</span>
                  <span className="font-medium">
                    {fareOptions.find(f => f.id === selectedFare)?.price}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Taxes & Fees</span>
                  <span className="font-medium">₦45,000</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-xl font-bold text-sky-600">
                      ₦{parseInt(fareOptions.find(f => f.id === selectedFare)?.price.replace(/[₦,]/g, '') || '0') + 45000}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button size="lg" className="w-full" onClick={handleContinue}>
                  Continue to Passenger Details
                </Button>
                <Button variant="outline" size="sm" className="w-full" onClick={() => navigate(-1)}>
                  Back to Results
                </Button>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-yellow-800">Price Lock</p>
                    <p className="text-yellow-700">
                      This price is guaranteed for 15 minutes. Complete your booking to secure this fare.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetailsPage;