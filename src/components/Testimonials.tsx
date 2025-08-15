import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Adebayo Johnson',
      location: 'Lagos, Nigeria',
      rating: 5,
      text: 'Texitravels made my first international trip seamless. From visa assistance to hotel booking, everything was handled professionally. The AI trip planner suggested amazing places I never would have found on my own!',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Sarah Mitchell',
      location: 'London, UK',
      rating: 5,
      text: 'I\'ve used many travel platforms, but Texitravels stands out. Their customer service is exceptional, and the mobile app makes managing bookings so easy. Highly recommended for both business and leisure travel.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Chinedu Okafor',
      location: 'Abuja, Nigeria',
      rating: 5,
      text: 'The visa service was a game-changer for me. They handled all the paperwork and kept me updated throughout the process. Got my UK visa approved without any stress. Thank you, Texitravels!',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Maria Santos',
      location: 'São Paulo, Brazil',
      rating: 5,
      text: 'Planning our family vacation to Dubai was effortless with Texitravels. The AI recommendations were spot-on, and we discovered hidden gems we wouldn\'t have found otherwise. Our kids had the time of their lives!',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'James Thompson',
      location: 'New York, USA',
      rating: 5,
      text: 'As a frequent business traveler, I appreciate Texitravels\' efficiency and reliability. Their 24/7 support has saved me multiple times when flights got delayed or cancelled. Truly professional service.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Fatima Al-Zahra',
      location: 'Dubai, UAE',
      rating: 5,
      text: 'The proof of funds service was exactly what I needed for my visa application. Quick, professional, and hassle-free. Texitravels understands the needs of international travelers perfectly.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from real travelers who trust Texitravels for their journeys
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-sky-200" />
                <p className="text-gray-700 italic pl-6">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-sky-50 rounded-2xl p-8 inline-block">
            <div className="flex items-center justify-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="ml-3 text-2xl font-bold text-gray-900">4.9/5</span>
            </div>
            <p className="text-gray-600">
              Based on <span className="font-semibold">12,847</span> verified reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;