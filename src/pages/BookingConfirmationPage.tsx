import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  CheckCircle, 
  Download, 
  Mail, 
  Calendar, 
  Plane, 
  User,
  MapPin,
  Clock,
  Phone
} from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const BookingConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { 
    bookingReference, 
    flight, 
    fare, 
    passengers, 
    contactDetails, 
    selectedSeats, 
    totalAmount 
  } = location.state || {};

  const handleDownloadTicket = () => {
    // Simulate ticket download
    alert('E-ticket downloaded successfully!');
  };

  const handleEmailTicket = () => {
    // Simulate email sending
    alert('E-ticket sent to your email address!');
  };

  return (
    <div>
      <PageHeader
        title="Booking Confirmed!"
        subtitle="Your flight has been successfully booked"
        icon={CheckCircle}
        backgroundImage="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Success Message */}
          <Card className="text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Booking Confirmed!
            </h1>
            
            <p className="text-xl text-gray-600 mb-6">
              Your booking reference is: <span className="font-bold text-sky-600">{bookingReference}</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button icon={Download} onClick={handleDownloadTicket}>
                Download E-ticket
              </Button>
              <Button variant="outline" icon={Mail} onClick={handleEmailTicket}>
                Email E-ticket
              </Button>
            </div>
          </Card>

          {/* Flight Details */}
          <Card>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Flight Details</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={flight?.logo}
                    alt={flight?.airline}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{flight?.airline}</h3>
                    <p className="text-gray-600">{flight?.aircraft}</p>
                    <p className="text-sm text-gray-500">Flight: {flight?.airline?.substring(0, 2)}{Math.floor(Math.random() * 9000) + 1000}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="font-medium">Departure Date</div>
                      <div className="text-gray-600">March 15, 2025</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="font-medium">Flight Duration</div>
                      <div className="text-gray-600">{flight?.duration}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="font-medium">Route</div>
                      <div className="text-gray-600">{flight?.from} → {flight?.to}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4">Flight Schedule</h4>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{flight?.departure}</div>
                      <div className="text-gray-600">{flight?.from}</div>
                      <div className="text-sm text-gray-500">Departure</div>
                    </div>
                    <Plane className="w-8 h-8 text-sky-500 transform rotate-90" />
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{flight?.arrival}</div>
                      <div className="text-gray-600">{flight?.to}</div>
                      <div className="text-sm text-gray-500">Arrival</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Passenger Information */}
          <Card>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Passenger Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {passengers?.map((passenger: any, index: number) => (
                <div key={passenger.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Passenger {index + 1}
                    </h3>
                    <div className="text-sm font-medium text-sky-600">
                      Seat: {selectedSeats?.[passenger.id] || 'Not assigned'}
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span>
                        {passenger.title} {passenger.firstName} {passenger.lastName}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>{passenger.dateOfBirth}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span>{passenger.nationality}</span>
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
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-gray-600">{contactDetails?.email}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-gray-600">{contactDetails?.phone}</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Payment Summary */}
          <Card>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Summary</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-medium">Total Amount Paid</span>
                <span className="text-2xl font-bold text-green-600">
                  ₦{totalAmount?.toLocaleString()}
                </span>
              </div>
              
              <div className="text-sm text-gray-600">
                <div className="flex justify-between mb-1">
                  <span>Payment Status:</span>
                  <span className="font-medium text-green-600">Confirmed</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span>Payment Method:</span>
                  <span>Credit Card</span>
                </div>
                <div className="flex justify-between">
                  <span>Transaction ID:</span>
                  <span>TXN{Math.random().toString(36).substr(2, 12).toUpperCase()}</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Important Information */}
          <Card>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Information</h2>
            
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Check-in Information</h4>
                <p className="text-blue-800 text-sm">
                  Online check-in opens 24 hours before departure. Please arrive at the airport 
                  at least 3 hours before your international flight.
                </p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-2">Travel Documents</h4>
                <p className="text-yellow-800 text-sm">
                  Ensure your passport is valid for at least 6 months from your travel date. 
                  Check visa requirements for your destination.
                </p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Customer Support</h4>
                <p className="text-green-800 text-sm">
                  Need help? Contact our 24/7 customer support at +234 800 TEXI (8394) or 
                  email support@texitravels.com with your booking reference.
                </p>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => navigate('/')}>
                Book Another Flight
              </Button>
              <Button variant="outline" onClick={() => navigate('/help')}>
                Need Help?
              </Button>
            </div>
            
            <p className="text-sm text-gray-600">
              A confirmation email has been sent to {contactDetails?.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmationPage;