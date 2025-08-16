import React from 'react';
import { 
  Shield, 
  Clock, 
  CreditCard, 
  Headphones, 
  Smartphone, 
  Award,
  CheckCircle,
  Globe
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Booking',
      description: 'Your payments and personal data are protected with bank-level security'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer service in multiple languages'
    },
    {
      icon: CreditCard,
      title: 'Flexible Payment',
      description: 'Pay with cards, bank transfers, or installment plans'
    },
    {
      icon: Headphones,
      title: 'Expert Guidance',
      description: 'Travel experts to help you plan the perfect trip'
    },
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'Manage your bookings on-the-go with our mobile app'
    },
    {
      icon: Award,
      title: 'Best Price Guarantee',
      description: 'Find a lower price? We\'ll match it and give you extra savings'
    }
  ];

  const stats = [
    { number: '2M+', label: 'Happy Travelers' },
    { number: '500+', label: 'Airlines Partners' },
    { number: '1M+', label: 'Hotels Worldwide' },
    { number: '50+', label: 'Countries Served' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Millions Worldwide
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Join millions of satisfied travelers who choose Texitravels
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-sky-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-sky-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Texitravels?
              </h3>
              <div className="space-y-4">
                {[
                  'AI-powered personalized trip recommendations',
                  'Comprehensive visa and documentation support',
                  'Local partnerships for authentic experiences',
                  'Flexible booking and cancellation policies',
                  'Multi-currency pricing and payment options',
                  'Real-time travel updates and notifications'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-sky-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Happy travelers"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-sky-500 text-white p-4 rounded-xl shadow-lg">
                <Globe className="w-8 h-8 mb-2" />
                <div className="text-sm font-medium">Global Reach</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;