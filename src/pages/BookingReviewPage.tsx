import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Plane, 
  User, 
  Calendar, 
  Clock, 
  MapPin, 
  CreditCard,
  Shield,
  CheckCircle
} from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const BookingReviewPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { flight, fare, passengers, contactDetails, selectedSeats, seatFees } = location.state || {};

  const handleProceedToPayment = () => {
    navigate('/payment', {
      state: {
        flight,
        fare,
        passengers,
        contactDetails,
        selectedSeats,
        seatFees,
        totalAmount: ((parseInt(fare?.price?.replace(/[₦,]/g, '') || '0') + 45000) * passengers.length) + (seatFees || 0),
      }
    });
  };

  const baseFare = parseInt(fare?.price?.replace(/[₦,]/g, '') || '0');
  const taxesAndFees = 45000;
  const totalPerPerson = baseFare + taxesAndFees;
  const subtotal = totalPerPerson * passengers.length;
  const totalAmount = subtotal + (seatFees || 0);

  return (
    <div>
      <PageHeader
        title="Review Your Booking"
        subtitle="Please review all details before proceeding to payment"
        icon={CheckCircle}
        backgroundImage="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Flight Information */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Flight Details</h2>
              
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={flight?.logo}
                  alt={flight?.airline}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{flight?.airline}</h3>
                  <p className="text-gray-600">{flight?.aircraft}</p>
                  <p className="text-sm text-gray-500">{fare?.name}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{flight?.departure}</div>
                  <div className="text-gray-600">{flight?.from}</div>
                  <div className="text-sm text-gray-500">March 15, 2025</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Clock className="w-5 h-5 text-sky-500 mr-2" />
                    <span className="font-semibold">{flight?.duration}</span>
                  </div>
                  <div className="text-sm text-gray-600">{flight?.stops}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{flight?.arrival}</div>
                  <div className="text-gray-600">{flight?.to}</div>
                  <div className="text-sm text-gray-500">March 16, 2025</div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Included in Your Fare</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {fare?.features?.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Passenger Information */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Passenger Information</h2>
              
              <div className="space-y-4">
                {passengers.map((passenger: any, index: number) => (
                  <div key={passenger.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Passenger {index + 1}
                      </h3>
                      <div className="text-sm text-gray-600">
                        Seat: <span className="font-medium text-sky-600">
                          {selectedSeats?.[passenger.id] || 'Not selected'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Name: </span>
                        <span className="font-medium">
                          {passenger.title} {passenger.firstName} {passenger.lastName}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">Date of Birth: </span>
                        <span className="font-medium">{passenger.dateOfBirth}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Nationality: </span>
                        <span className="font-medium">{passenger.nationality}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Passport: </span>
                        <span className="font-medium">{passenger.passportNumber}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Contact Information */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-gray-600">Email</div>
                  <div className="font-medium">{contactDetails?.email}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Phone</div>
                  <div className="font-medium">{contactDetails?.phone}</div>
                </div>
                {contactDetails?.emergencyContact && (
                  <>
                    <div>
                      <div className="text-sm text-gray-600">Emergency Contact</div>
                      <div className="font-medium">{contactDetails.emergencyContact}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Emergency Phone</div>
                      <div className="font-medium">{contactDetails.emergencyPhone}</div>
                    </div>
                  </>
                )}
              </div>
            </Card>

            {/* Important Information */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-sky-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Check-in Requirements</h4>
                    <p className="text-gray-600 text-sm">
                      Online check-in opens 24 hours before departure. Please arrive at the airport 
                      at least 3 hours before international flights.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-sky-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Passport Validity</h4>
                    <p className="text-gray-600 text-sm">
                      Ensure your passport is valid for at least 6 months from your travel date.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-sky-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Visa Requirements</h4>
                    <p className="text-gray-600 text-sm">
                      Please check visa requirements for your destination. Contact us if you need 
                      assistance with visa applications.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Payment Summary */}
          <div className="space-y-6">
            <Card className="sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Payment Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Base Fare × {passengers.length}</span>
                  <span className="font-medium">₦{(baseFare * passengers.length).toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Taxes & Fees × {passengers.length}</span>
                  <span className="font-medium">₦{(taxesAndFees * passengers.length).toLocaleString()}</span>
                </div>
                
                {seatFees > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Seat Selection</span>
                    <span className="font-medium">₦{seatFees.toLocaleString()}</span>
                  </div>
                )}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">Total Amount</span>
                    <span className="text-2xl font-bold text-sky-600">
                      ₦{totalAmount.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  size="lg" 
                  className="w-full" 
                  onClick={handleProceedToPayment}
                  icon={CreditCard}
                >
                  Proceed to Payment
                </Button>
                <Button variant="outline" size="sm" className="w-full" onClick={() => navigate(-1)}>
                  Back to Seat Selection
                </Button>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-green-600 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-green-800">Secure Booking</p>
                    <p className="text-green-700">
                      Your booking is protected with 256-bit SSL encryption and our 
                      satisfaction guarantee.
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

export default BookingReviewPage;