import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  CreditCard, 
  Lock, 
  Shield, 
  CheckCircle,
  Calendar,
  User,
  Phone,
  AlertCircle
} from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { flight, fare, passengers, contactDetails, selectedSeats, seatFees, totalAmount } = location.state || {};

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    billingAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'Nigeria',
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      description: 'Visa, Mastercard, American Express',
      icon: CreditCard,
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      description: 'Direct bank transfer',
      icon: Shield,
    },
    {
      id: 'mobile',
      name: 'Mobile Money',
      description: 'Pay with mobile money',
      icon: Phone,
    },
  ];

  const handleInputChange = (field: string, value: string) => {
    setPaymentData(prev => ({ ...prev, [field]: value }));
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    handleInputChange('cardNumber', formatted);
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpiryDate(e.target.value);
    handleInputChange('expiryDate', formatted);
  };

  const handlePayment = async () => {
    if (!agreedToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/booking-confirmation', {
        state: {
          bookingReference: 'TX' + Math.random().toString(36).substr(2, 8).toUpperCase(),
          flight,
          fare,
          passengers,
          contactDetails,
          selectedSeats,
          totalAmount,
          paymentMethod,
        }
      });
    }, 3000);
  };

  return (
    <div>
      <PageHeader
        title="Secure Payment"
        subtitle="Complete your booking with our secure payment system"
        icon={Lock}
        backgroundImage="https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Payment Method Selection */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Method</h2>
              
              <div className="space-y-4">
                {paymentMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <div
                      key={method.id}
                      className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                        paymentMethod === method.id
                          ? 'border-sky-500 bg-sky-50'
                          : 'border-gray-200 hover:border-sky-300'
                      }`}
                      onClick={() => setPaymentMethod(method.id)}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg ${
                          paymentMethod === method.id ? 'bg-sky-100' : 'bg-gray-100'
                        }`}>
                          <Icon className="w-6 h-6 text-sky-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{method.name}</h3>
                          <p className="text-sm text-gray-600">{method.description}</p>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 ${
                          paymentMethod === method.id
                            ? 'border-sky-500 bg-sky-500'
                            : 'border-gray-300'
                        }`}>
                          {paymentMethod === method.id && (
                            <CheckCircle className="w-6 h-6 text-white -m-0.5" />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Payment Details */}
            {paymentMethod === 'card' && (
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Card Details</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Number *
                    </label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={paymentData.cardNumber}
                        onChange={handleCardNumberChange}
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry Date *
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          value={paymentData.expiryDate}
                          onChange={handleExpiryChange}
                          placeholder="MM/YY"
                          maxLength={5}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV *
                      </label>
                      <input
                        type="text"
                        value={paymentData.cvv}
                        onChange={(e) => handleInputChange('cvv', e.target.value)}
                        placeholder="123"
                        maxLength={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cardholder Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={paymentData.cardholderName}
                        onChange={(e) => handleInputChange('cardholderName', e.target.value)}
                        placeholder="Name as it appears on card"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {paymentMethod === 'bank' && (
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Bank Transfer Details</h2>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-4">Transfer Instructions</h3>
                  <div className="space-y-2 text-sm text-blue-800">
                    <p><strong>Bank:</strong> First Bank of Nigeria</p>
                    <p><strong>Account Name:</strong> Texitravels Limited</p>
                    <p><strong>Account Number:</strong> 1234567890</p>
                    <p><strong>Amount:</strong> ₦{totalAmount?.toLocaleString()}</p>
                    <p><strong>Reference:</strong> Your booking reference will be provided after confirmation</p>
                  </div>
                  <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>Note:</strong> Your booking will be confirmed once payment is received and verified.
                    </p>
                  </div>
                </div>
              </Card>
            )}

            {paymentMethod === 'mobile' && (
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Mobile Money</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile Money Provider
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent">
                      <option>MTN Mobile Money</option>
                      <option>Airtel Money</option>
                      <option>9mobile Money</option>
                      <option>Glo Mobile Money</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+234 xxx xxx xxxx"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </Card>
            )}

            {/* Terms and Conditions */}
            <Card>
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="mt-1 w-4 h-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500"
                />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  I agree to the{' '}
                  <a href="/terms" className="text-sky-600 hover:text-sky-800 underline">
                    Terms and Conditions
                  </a>{' '}
                  and{' '}
                  <a href="/privacy" className="text-sky-600 hover:text-sky-800 underline">
                    Privacy Policy
                  </a>
                  . I understand that this booking is subject to the airline's terms and conditions.
                </label>
              </div>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <div className="font-medium">{flight?.airline}</div>
                  <div className="text-sm text-gray-600">{flight?.from} → {flight?.to}</div>
                  <div className="text-sm text-gray-600">March 15, 2025</div>
                </div>
                
                <div>
                  <div className="font-medium">{fare?.name}</div>
                  <div className="text-sm text-gray-600">
                    {passengers?.length} passenger{passengers?.length > 1 ? 's' : ''}
                  </div>
                </div>

                {selectedSeats && Object.keys(selectedSeats).length > 0 && (
                  <div>
                    <div className="font-medium">Selected Seats</div>
                    <div className="text-sm text-gray-600">
                      {Object.values(selectedSeats).join(', ')}
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₦{(totalAmount - (seatFees || 0)).toLocaleString()}</span>
                </div>
                {seatFees > 0 && (
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Seat Selection</span>
                    <span className="font-medium">₦{seatFees.toLocaleString()}</span>
                  </div>
                )}
                <div className="border-t pt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">Total</span>
                    <span className="text-2xl font-bold text-sky-600">
                      ₦{totalAmount?.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  size="lg" 
                  className="w-full" 
                  onClick={handlePayment}
                  disabled={isProcessing || !agreedToTerms}
                >
                  {isProcessing ? 'Processing...' : `Pay ₦${totalAmount?.toLocaleString()}`}
                </Button>
                <Button variant="outline" size="sm" className="w-full" onClick={() => navigate(-1)}>
                  Back to Review
                </Button>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Lock className="w-4 h-4" />
                  <span>Secured with 256-bit SSL encryption</span>
                </div>
                
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Shield className="w-4 h-4" />
                  <span>PCI DSS compliant payment processing</span>
                </div>
                
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>100% secure and protected</span>
                </div>
              </div>

              {!agreedToTerms && (
                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5" />
                    <p className="text-sm text-yellow-800">
                      Please agree to the terms and conditions to proceed with payment.
                    </p>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;