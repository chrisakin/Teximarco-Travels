import React from 'react';
import { Users, Award, Globe, Heart, Target, Eye } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Card from '../components/common/Card';
import Services from '../components/Services';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';

const AboutPage = () => {
  const stats = [
    { number: '2M+', label: 'Happy Travelers', icon: Users },
    { number: '500+', label: 'Airline Partners', icon: Globe },
    { number: '1M+', label: 'Hotels Worldwide', icon: Award },
    { number: '50+', label: 'Countries Served', icon: Heart },
  ];

  const team = [
    {
      name: 'Adebayo Ogundimu',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Passionate about making travel accessible to everyone, Adebayo founded Texitravels with a vision to revolutionize the travel industry in Africa.',
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'With over 10 years in the travel industry, Sarah ensures our operations run smoothly and our customers receive exceptional service.',
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Michael leads our technology team, developing innovative solutions that make travel planning effortless and enjoyable.',
    },
    {
      name: 'Fatima Al-Rashid',
      role: 'Head of Customer Success',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Fatima ensures every customer has an amazing experience, leading our 24/7 support team with dedication and expertise.',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Customer First',
      description: 'Every decision we make is centered around providing the best possible experience for our travelers.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'We connect people across continents, making the world more accessible and bringing cultures together.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from our technology to our customer service.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We are passionate about travel and helping people create unforgettable memories around the world.',
    },
  ];

  return (
    <div>
      <PageHeader
        title="About Texitravels"
        subtitle="Your trusted partner in creating unforgettable travel experiences"
        icon={Users}
        backgroundImage="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2020, Texitravels began with a simple mission: to make travel accessible, 
                  affordable, and enjoyable for everyone. What started as a small team of travel enthusiasts 
                  has grown into a leading travel platform serving millions of customers worldwide.
                </p>
                <p>
                  We recognized the challenges travelers face - from complex booking processes to 
                  unreliable service providers. Our solution was to create a comprehensive platform 
                  that combines cutting-edge technology with personalized human touch.
                </p>
                <p>
                  Today, we're proud to be the trusted travel partner for over 2 million travelers, 
                  offering everything from flight bookings to visa assistance, all backed by our 
                  commitment to exceptional service.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our story"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-sky-500 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">2020</div>
                <div className="text-sm">Founded</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">Numbers that tell our story</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center">
                  <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-sky-600" />
                  </div>
                  <div className="text-3xl font-bold text-sky-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To democratize travel by providing accessible, reliable, and comprehensive travel 
                services that empower people to explore the world with confidence and ease.
              </p>
            </Card>

            <Card>
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the world's most trusted travel platform, connecting cultures and creating 
                unforgettable experiences that enrich lives and broaden perspectives.
              </p>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center">
                  <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate people behind Texitravels</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sky-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Sections */}
        <div className="mt-20">
          <Services />
          <Features />
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;