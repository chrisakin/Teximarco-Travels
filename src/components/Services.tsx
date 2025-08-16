import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Plane, 
  Building, 
  FileText, 
  CreditCard, 
  MapPin, 
  Shield,
  Clock,
  Users,
  Bot,
  Camera,
  Smartphone,
  Globe
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: Plane,
      title: 'Flight Booking',
      description: 'Compare and book flights from 500+ airlines worldwide with best price guarantee.',
      features: ['Real-time pricing', 'Flexible dates', 'Multi-city trips', '24/7 support'],
      link: '/flights'
    },
    {
      icon: Building,
      title: 'Hotel Reservations',
      description: 'Book from millions of properties worldwide, from budget stays to luxury resorts.',
      features: ['Instant confirmation', 'Free cancellation', 'Best rate guarantee', 'Local insights'],
      link: '/hotels'
    },
    {
      icon: FileText,
      title: 'Visa Services',
      description: 'Complete visa assistance with document preparation and application tracking.',
      features: ['Document checklist', 'Application tracking', 'Expert guidance', 'Fast processing'],
      link: '/visa'
    },
    {
      icon: CreditCard,
      title: 'Proof of Funds',
      description: 'Financial documentation and bank statement services for visa applications.',
      features: ['Bank statements', 'Financial certificates', 'Sponsor letters', 'Quick turnaround'],
      link: '/proof-of-funds'
    }
  ];

  const additionalServices = [
    {
      icon: Bot,
      title: 'AI Trip Planner',
      description: 'Personalized itineraries powered by artificial intelligence'
    },
    {
      icon: Camera,
      title: 'Travel Photography',
      description: 'Professional photography services at your destination'
    },
    {
      icon: Smartphone,
      title: 'Mobile Check-in',
      description: 'Seamless mobile boarding passes and travel documents'
    },
    {
      icon: Globe,
      title: 'Local Experiences',
      description: 'Curated local tours and authentic cultural experiences'
    },
    {
      icon: Shield,
      title: 'Travel Insurance',
      description: 'Comprehensive coverage for medical and trip protection'
    },
    {
      icon: Clock,
      title: 'Concierge Service',
      description: '24/7 premium support for all your travel needs'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Travel Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for seamless travel experiences, from planning to return
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link 
                key={index} 
                to={service.link}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 group block"
              >
                <div className="bg-sky-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-sky-200 transition-colors">
                  <Icon className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-sky-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Link>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Enhanced Travel Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-sky-50 transition-colors">
                  <div className="bg-sky-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{service.title}</h4>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;