import { MapPin, Star, ArrowRight } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';

const AmericasPage = () => {
  const destinations = [
    {
      name: 'New York, USA',
      image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦580,000',
      rating: 4.7,
      reviews: 1834,
      description: 'The city that never sleeps, Broadway shows, and Central Park',
      highlights: ['Statue of Liberty', 'Times Square', 'Central Park', 'Empire State Building'],
    },
    {
      name: 'Rio de Janeiro, Brazil',
      image: 'https://images.pexels.com/photos/351283/pexels-photo-351283.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦480,000',
      rating: 4.6,
      reviews: 1034,
      description: 'Beautiful beaches, iconic landmarks, and carnival spirit',
      highlights: ['Christ the Redeemer', 'Copacabana Beach', 'Sugarloaf Mountain', 'Carnival'],
    },
    {
      name: 'Toronto, Canada',
      image: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦520,000',
      rating: 4.5,
      reviews: 756,
      description: 'Multicultural city with stunning skyline and Niagara Falls nearby',
      highlights: ['CN Tower', 'Niagara Falls', 'Royal Ontario Museum', 'Distillery District'],
    },
    {
      name: 'Los Angeles, USA',
      image: 'https://images.pexels.com/photos/1139556/pexels-photo-1139556.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦560,000',
      rating: 4.4,
      reviews: 1245,
      description: 'Entertainment capital with beautiful beaches and Hollywood glamour',
      highlights: ['Hollywood Sign', 'Santa Monica Pier', 'Beverly Hills', 'Venice Beach'],
    },
    {
      name: 'Buenos Aires, Argentina',
      image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦420,000',
      rating: 4.3,
      reviews: 634,
      description: 'Passionate tango culture, incredible steaks, and European architecture',
      highlights: ['La Boca', 'Recoleta Cemetery', 'Puerto Madero', 'Tango Shows'],
    },
    {
      name: 'Mexico City, Mexico',
      image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦380,000',
      rating: 4.2,
      reviews: 567,
      description: 'Rich Aztec heritage, vibrant art scene, and incredible cuisine',
      highlights: ['Zócalo', 'Frida Kahlo Museum', 'Teotihuacan', 'Xochimilco'],
    },
  ];

  return (
    <div>
      <PageHeader
        title="Discover the Americas"
        subtitle="Explore the diverse landscapes and cultures from North to South America"
        icon={MapPin}
        backgroundImage="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Americas Destinations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From the skyscrapers of New York to the beaches of Rio de Janeiro
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{destination.name}</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm">{destination.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-200 mb-3">{destination.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {destination.highlights.slice(0, 2).map((highlight, idx) => (
                      <span key={idx} className="bg-white/20 text-white px-2 py-1 rounded text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">{destination.price}</span>
                    <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AmericasPage;