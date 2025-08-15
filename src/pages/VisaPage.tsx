import React, { useState } from 'react';
import { FileText, CheckCircle, Clock, AlertCircle, Upload, Download } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const VisaPage = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [visaType, setVisaType] = useState('');

  const countries = [
    { code: 'UK', name: 'United Kingdom', flag: '🇬🇧', processingTime: '15-20 days', fee: '₦45,000' },
    { code: 'US', name: 'United States', flag: '🇺🇸', processingTime: '30-60 days', fee: '₦65,000' },
    { code: 'CA', name: 'Canada', flag: '🇨🇦', processingTime: '20-30 days', fee: '₦55,000' },
    { code: 'DE', name: 'Germany', flag: '🇩🇪', processingTime: '15-25 days', fee: '₦40,000' },
    { code: 'FR', name: 'France', flag: '🇫🇷', processingTime: '15-25 days', fee: '₦40,000' },
    { code: 'AE', name: 'UAE', flag: '🇦🇪', processingTime: '5-10 days', fee: '₦35,000' },
  ];

  const visaTypes = [
    { id: 'tourist', name: 'Tourist Visa', description: 'For leisure and sightseeing' },
    { id: 'business', name: 'Business Visa', description: 'For business meetings and conferences' },
    { id: 'student', name: 'Student Visa', description: 'For educational purposes' },
    { id: 'work', name: 'Work Visa', description: 'For employment opportunities' },
    { id: 'transit', name: 'Transit Visa', description: 'For connecting flights' },
  ];

  const requirements = [
    'Valid passport (minimum 6 months validity)',
    'Completed visa application form',
    'Recent passport photographs',
    'Bank statements (last 3 months)',
    'Employment letter or business registration',
    'Travel itinerary and hotel bookings',
    'Travel insurance certificate',
    'Proof of accommodation',
  ];

  const handleCountrySelect = (countryCode: string) => {
    setSelectedCountry(countryCode);
  };

  const handleVisaTypeSelect = (type: string) => {
    setVisaType(type);
  };

  return (
    <div>
      <PageHeader
        title="Visa Services"
        subtitle="Get expert assistance with your visa application process"
        icon={FileText}
        backgroundImage="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Country Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Your Destination</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country) => (
              <Card
                key={country.code}
                hover
                className={`cursor-pointer transition-all ${
                  selectedCountry === country.code
                    ? 'ring-2 ring-sky-500 bg-sky-50'
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => handleCountrySelect(country.code)}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-3xl">{country.flag}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{country.name}</h3>
                    <p className="text-sm text-gray-600">Visa Application</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Processing Time:</span>
                    <span className="font-medium">{country.processingTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Service Fee:</span>
                    <span className="font-medium text-sky-600">{country.fee}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {selectedCountry && (
          <>
            {/* Visa Type Selection */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Visa Type</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {visaTypes.map((type) => (
                  <Card
                    key={type.id}
                    hover
                    className={`cursor-pointer transition-all ${
                      visaType === type.id
                        ? 'ring-2 ring-sky-500 bg-sky-50'
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => handleVisaTypeSelect(type.id)}
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">{type.name}</h3>
                    <p className="text-sm text-gray-600">{type.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h2>
              <Card>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Application Process */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Application Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: 1, title: 'Submit Documents', icon: Upload, description: 'Upload required documents' },
                  { step: 2, title: 'Review & Payment', icon: CheckCircle, description: 'We review and process payment' },
                  { step: 3, title: 'Application Filing', icon: FileText, description: 'We file your application' },
                  { step: 4, title: 'Visa Collection', icon: Download, description: 'Collect your approved visa' },
                ].map((process) => {
                  const Icon = process.icon;
                  return (
                    <Card key={process.step} className="text-center">
                      <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-sky-600" />
                      </div>
                      <div className="bg-sky-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                        {process.step}
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{process.title}</h3>
                      <p className="text-sm text-gray-600">{process.description}</p>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Application Form */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Start Your Application</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Travel Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="Any additional information or special requirements..."
                  />
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    I agree to the terms and conditions and privacy policy
                  </label>
                </div>

                <div className="text-center">
                  <Button size="lg" type="submit">
                    Submit Application
                  </Button>
                </div>
              </form>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default VisaPage;