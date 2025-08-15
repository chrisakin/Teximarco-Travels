import React, { useState } from 'react';
import { CreditCard, FileText, Shield, Clock, CheckCircle, DollarSign } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const ProofOfFundsPage = () => {
  const [selectedService, setSelectedService] = useState('');

  const services = [
    {
      id: 'bank-statement',
      title: 'Bank Statement Certification',
      description: 'Official bank statements with embassy certification',
      price: '₦15,000',
      duration: '2-3 days',
      features: ['Embassy certified', '3-6 months statements', 'Official letterhead', 'Digital & physical copies'],
    },
    {
      id: 'sponsor-letter',
      title: 'Sponsor Letter',
      description: 'Professional sponsor letters for visa applications',
      price: '₦25,000',
      duration: '1-2 days',
      features: ['Notarized document', 'Professional format', 'Embassy accepted', 'Multiple copies'],
    },
    {
      id: 'financial-certificate',
      title: 'Financial Certificate',
      description: 'Comprehensive financial standing certificate',
      price: '₦35,000',
      duration: '3-5 days',
      features: ['Detailed financial analysis', 'Professional certification', 'Embassy format', 'Supporting documents'],
    },
    {
      id: 'investment-proof',
      title: 'Investment Portfolio',
      description: 'Investment and asset documentation',
      price: '₦45,000',
      duration: '5-7 days',
      features: ['Asset valuation', 'Investment statements', 'Property documents', 'Professional compilation'],
    },
  ];

  const requirements = [
    'Valid identification (passport/national ID)',
    'Recent bank statements (3-6 months)',
    'Employment letter or business registration',
    'Tax returns or income statements',
    'Property documents (if applicable)',
    'Investment certificates (if applicable)',
  ];

  const countries = [
    { name: 'United Kingdom', amount: '£1,334/month', flag: '🇬🇧' },
    { name: 'United States', amount: '$2,000/month', flag: '🇺🇸' },
    { name: 'Canada', amount: 'CAD $1,230/month', flag: '🇨🇦' },
    { name: 'Germany', amount: '€853/month', flag: '🇩🇪' },
    { name: 'Australia', amount: 'AUD $1,800/month', flag: '🇦🇺' },
    { name: 'UAE', amount: 'AED 3,000/month', flag: '🇦🇪' },
  ];

  return (
    <div>
      <PageHeader
        title="Proof of Funds Services"
        subtitle="Professional financial documentation for visa applications"
        icon={CreditCard}
        backgroundImage="https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Financial Requirements by Country */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Financial Requirements by Country</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country, index) => (
              <Card key={index} hover>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-3xl">{country.flag}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{country.name}</h3>
                    <p className="text-sm text-gray-600">Minimum requirement</p>
                  </div>
                </div>
                <div className="bg-sky-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 text-sky-600 mr-2" />
                    <span className="text-lg font-bold text-sky-600">{country.amount}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Service Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Card
                key={service.id}
                hover
                className={`cursor-pointer transition-all ${
                  selectedService === service.id
                    ? 'ring-2 ring-sky-500 bg-sky-50'
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => setSelectedService(service.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-sky-600">{service.price}</div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
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
                  <FileText className="w-5 h-5 text-sky-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{requirement}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Process Steps */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Submit Documents', icon: FileText, description: 'Upload your financial documents securely' },
              { step: 2, title: 'Verification', icon: Shield, description: 'We verify and process your documents' },
              { step: 3, title: 'Certification', icon: CheckCircle, description: 'Professional certification and formatting' },
              { step: 4, title: 'Delivery', icon: Clock, description: 'Receive certified documents digitally and physically' },
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
        {selectedService && (
          <Card>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Service</h2>
            <form className="space-y-6">
              <div className="bg-sky-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold text-sky-900 mb-2">Selected Service</h3>
                <p className="text-sky-700">
                  {services.find(s => s.id === selectedService)?.title} - {services.find(s => s.id === selectedService)?.price}
                </p>
              </div>

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
                    Destination Country
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent">
                    <option value="">Select country</option>
                    {countries.map((country, index) => (
                      <option key={index} value={country.name}>{country.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requirements
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  placeholder="Any specific requirements or additional information..."
                />
              </div>

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="privacy"
                  className="w-4 h-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500"
                />
                <label htmlFor="privacy" className="text-sm text-gray-700">
                  I agree to the privacy policy and terms of service
                </label>
              </div>

              <div className="text-center">
                <Button size="lg" type="submit">
                  Request Service
                </Button>
              </div>
            </form>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ProofOfFundsPage;