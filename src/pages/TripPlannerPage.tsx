import React, { useState } from 'react';
import { Bot, MapPin, Calendar, Users, Sparkles, Clock, DollarSign, Camera } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const TripPlannerPage = () => {
  const [step, setStep] = useState(1);
  const [tripData, setTripData] = useState({
    destination: '',
    duration: '',
    budget: '',
    travelers: '',
    interests: [],
    travelStyle: '',
    accommodation: '',
  });

  const interests = [
    'Culture & History', 'Adventure Sports', 'Food & Dining', 'Nightlife',
    'Shopping', 'Nature & Wildlife', 'Art & Museums', 'Beach & Relaxation',
    'Photography', 'Local Experiences', 'Architecture', 'Music & Festivals'
  ];

  const travelStyles = [
    { id: 'luxury', name: 'Luxury', description: 'Premium experiences and accommodations' },
    { id: 'comfort', name: 'Comfort', description: 'Balance of comfort and value' },
    { id: 'budget', name: 'Budget', description: 'Cost-effective travel options' },
    { id: 'backpacker', name: 'Backpacker', description: 'Adventurous and economical' },
  ];

  const sampleItinerary = {
    destination: 'Dubai, UAE',
    duration: '5 days',
    budget: '$2,000',
    days: [
      {
        day: 1,
        title: 'Arrival & Downtown Dubai',
        activities: [
          { time: '10:00 AM', activity: 'Arrive at Dubai International Airport', location: 'DXB Airport' },
          { time: '12:00 PM', activity: 'Check-in at Burj Al Arab', location: 'Jumeirah Beach' },
          { time: '3:00 PM', activity: 'Visit Burj Khalifa', location: 'Downtown Dubai' },
          { time: '7:00 PM', activity: 'Dinner at Atmosphere Restaurant', location: 'Burj Khalifa' },
        ]
      },
      {
        day: 2,
        title: 'Cultural Dubai',
        activities: [
          { time: '9:00 AM', activity: 'Dubai Museum', location: 'Al Fahidi Fort' },
          { time: '11:00 AM', activity: 'Gold & Spice Souks', location: 'Deira' },
          { time: '2:00 PM', activity: 'Dubai Creek Cruise', location: 'Dubai Creek' },
          { time: '6:00 PM', activity: 'Traditional Emirati Dinner', location: 'Al Seef' },
        ]
      },
    ]
  };

  const handleInterestToggle = (interest: string) => {
    setTripData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const generateItinerary = () => {
    // Simulate AI processing
    setStep(5);
  };

  return (
    <div>
      <PageHeader
        title="AI Trip Planner"
        subtitle="Let artificial intelligence create your perfect travel itinerary"
        icon={Bot}
        backgroundImage="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div
                key={stepNumber}
                className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  step >= stepNumber
                    ? 'bg-sky-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {stepNumber}
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-sky-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step 1: Basic Information */}
        {step === 1 && (
          <Card>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tell us about your trip</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Where do you want to go?
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={tripData.destination}
                      onChange={(e) => setTripData(prev => ({ ...prev, destination: e.target.value }))}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="e.g., Paris, Tokyo, New York"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How long is your trip?
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <select
                      value={tripData.duration}
                      onChange={(e) => setTripData(prev => ({ ...prev, duration: e.target.value }))}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent appearance-none"
                    >
                      <option value="">Select duration</option>
                      <option value="1-2 days">1-2 days</option>
                      <option value="3-5 days">3-5 days</option>
                      <option value="1 week">1 week</option>
                      <option value="2 weeks">2 weeks</option>
                      <option value="1 month">1 month</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What's your budget?
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <select
                      value={tripData.budget}
                      onChange={(e) => setTripData(prev => ({ ...prev, budget: e.target.value }))}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent appearance-none"
                    >
                      <option value="">Select budget range</option>
                      <option value="Under $500">Under $500</option>
                      <option value="$500 - $1,000">$500 - $1,000</option>
                      <option value="$1,000 - $2,500">$1,000 - $2,500</option>
                      <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                      <option value="$5,000+">$5,000+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of travelers
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <select
                      value={tripData.travelers}
                      onChange={(e) => setTripData(prev => ({ ...prev, travelers: e.target.value }))}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent appearance-none"
                    >
                      <option value="">Select travelers</option>
                      <option value="Solo">Solo traveler</option>
                      <option value="Couple">Couple</option>
                      <option value="Family">Family (3-4)</option>
                      <option value="Group">Group (5+)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Step 2: Interests */}
        {step === 2 && (
          <Card>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What are you interested in?</h2>
            <p className="text-gray-600 mb-6">Select all that apply to personalize your itinerary</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {interests.map((interest) => (
                <button
                  key={interest}
                  onClick={() => handleInterestToggle(interest)}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    tripData.interests.includes(interest)
                      ? 'border-sky-500 bg-sky-50 text-sky-700'
                      : 'border-gray-200 hover:border-sky-300 text-gray-700'
                  }`}
                >
                  <div className="font-medium">{interest}</div>
                </button>
              ))}
            </div>
          </Card>
        )}

        {/* Step 3: Travel Style */}
        {step === 3 && (
          <Card>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What's your travel style?</h2>
            <div className="space-y-4">
              {travelStyles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setTripData(prev => ({ ...prev, travelStyle: style.id }))}
                  className={`w-full p-6 rounded-lg border-2 transition-all text-left ${
                    tripData.travelStyle === style.id
                      ? 'border-sky-500 bg-sky-50'
                      : 'border-gray-200 hover:border-sky-300'
                  }`}
                >
                  <h3 className="font-semibold text-gray-900 mb-2">{style.name}</h3>
                  <p className="text-gray-600">{style.description}</p>
                </button>
              ))}
            </div>
          </Card>
        )}

        {/* Step 4: Final Details */}
        {step === 4 && (
          <Card>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Final details</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Accommodation preference
                </label>
                <select
                  value={tripData.accommodation}
                  onChange={(e) => setTripData(prev => ({ ...prev, accommodation: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                >
                  <option value="">Select accommodation type</option>
                  <option value="hotel">Hotel</option>
                  <option value="resort">Resort</option>
                  <option value="apartment">Apartment/Airbnb</option>
                  <option value="hostel">Hostel</option>
                  <option value="boutique">Boutique Hotel</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Any special requirements or preferences?
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  placeholder="Dietary restrictions, accessibility needs, special occasions, etc."
                />
              </div>
            </div>
          </Card>
        )}

        {/* Step 5: Generated Itinerary */}
        {step === 5 && (
          <div className="space-y-8">
            <Card>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-sky-100 p-3 rounded-full">
                  <Sparkles className="w-8 h-8 text-sky-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Your AI-Generated Itinerary</h2>
                  <p className="text-gray-600">Personalized for {sampleItinerary.destination}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-sky-50 p-4 rounded-lg text-center">
                  <Calendar className="w-6 h-6 text-sky-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">{sampleItinerary.duration}</div>
                  <div className="text-sm text-gray-600">Duration</div>
                </div>
                <div className="bg-sky-50 p-4 rounded-lg text-center">
                  <DollarSign className="w-6 h-6 text-sky-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">{sampleItinerary.budget}</div>
                  <div className="text-sm text-gray-600">Estimated Budget</div>
                </div>
                <div className="bg-sky-50 p-4 rounded-lg text-center">
                  <MapPin className="w-6 h-6 text-sky-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">12 Activities</div>
                  <div className="text-sm text-gray-600">Planned</div>
                </div>
              </div>
            </Card>

            {/* Daily Itinerary */}
            {sampleItinerary.days.map((day) => (
              <Card key={day.day}>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Day {day.day}: {day.title}
                </h3>
                <div className="space-y-4">
                  {day.activities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="bg-sky-600 text-white px-3 py-1 rounded-full text-sm font-medium min-w-fit">
                        {activity.time}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{activity.activity}</h4>
                        <p className="text-sm text-gray-600 flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {activity.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}

            <div className="flex space-x-4">
              <Button size="lg" className="flex-1">
                Book This Itinerary
              </Button>
              <Button variant="outline" size="lg">
                Customize Further
              </Button>
              <Button variant="outline" size="lg">
                Generate New Plan
              </Button>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        {step < 5 && (
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={step === 1}
            >
              Previous
            </Button>
            <Button
              onClick={step === 4 ? generateItinerary : handleNext}
              icon={step === 4 ? Sparkles : undefined}
            >
              {step === 4 ? 'Generate Itinerary' : 'Next'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TripPlannerPage;