import { MapPin, Star, ArrowRight } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';

const EuropePage = () => {
  const destinations = [
    {
      name: 'London, UK',
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦520,000',
      rating: 4.9,
      reviews: 2156,
      description: 'Rich history, world-class museums, and iconic landmarks',
      highlights: ['Big Ben', 'Tower Bridge', 'British Museum', 'Buckingham Palace'],
    },
    {
      name: 'Paris, France',
      image: 'https://images.pexels.com/photos/161853/eiffel-tower-paris-france-tower-161853.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦495,000',
      rating: 4.8,
      reviews: 1923,
      description: 'City of love, art, fashion, and exquisite cuisine',
      highlights: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame', 'Champs-Élysées'],
    },
    {
      name: 'Istanbul, Turkey',
      image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦420,000',
      rating: 4.7,
      reviews: 1123,
      description: 'Where Europe meets Asia, rich history and vibrant culture',
      highlights: ['Hagia Sophia', 'Blue Mosque', 'Grand Bazaar', 'Bosphorus Cruise'],
    },
    {
      name: 'Barcelona, Spain',
      image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦465,000',
      rating: 4.7,
      reviews: 1567,
      description: 'Stunning architecture, beautiful beaches, and vibrant culture',
      highlights: ['Sagrada Familia', 'Park Güell', 'Las Ramblas', 'Gothic Quarter'],
    },
    {
      name: 'Rome, Italy',
      image: 'https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦485,000',
      rating: 4.6,
      reviews: 1834,
      description: 'Eternal city with ancient history and incredible cuisine',
      highlights: ['Colosseum', 'Vatican City', 'Trevi Fountain', 'Roman Forum'],
    },
    {
      name: 'Amsterdam, Netherlands',
      image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₦445,000',
      rating: 4.5,
      reviews: 923,
      description: 'Charming canals, world-class museums, and vibrant nightlife',
      highlights: ['Anne Frank House', 'Van Gogh Museum', 'Canal Cruise', 'Jordaan District'],
    },
  ];

  return (
    <div>
      <PageHeader
        title="Discover Europe"
        subtitle="Explore the rich history, diverse cultures, and stunning architecture of Europe"
        icon={MapPin}
        backgroundImage="https://images.pexels.com/photos/161853/eiffel-tower-paris-france-tower-161853.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">European Destinations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From the romantic streets of Paris to the historic landmarks of Rome
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

export default EuropePage;