import React from 'react';
import { Briefcase, MapPin, Clock, Users, Heart, Zap } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const CareersPage = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs',
    },
    {
      icon: Zap,
      title: 'Growth & Learning',
      description: 'Professional development budget, conferences, and continuous learning opportunities',
    },
    {
      icon: Users,
      title: 'Work-Life Balance',
      description: 'Flexible working hours, remote work options, and generous vacation policy',
    },
    {
      icon: MapPin,
      title: 'Travel Perks',
      description: 'Employee travel discounts, annual team retreats, and explore the world benefits',
    },
  ];

  const openings = [
    {
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Lagos, Nigeria / Remote',
      type: 'Full-time',
      description: 'Join our engineering team to build the next generation of travel booking experiences.',
      requirements: ['5+ years React experience', 'TypeScript proficiency', 'Travel industry experience preferred'],
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      description: 'Lead product strategy and development for our core travel booking platform.',
      requirements: ['3+ years product management', 'Travel or fintech experience', 'Data-driven mindset'],
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      description: 'Help our customers achieve their travel goals and ensure exceptional experiences.',
      requirements: ['Customer success experience', 'Excellent communication skills', 'Problem-solving mindset'],
    },
    {
      title: 'Marketing Specialist',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      description: 'Drive growth through creative marketing campaigns and customer acquisition strategies.',
      requirements: ['Digital marketing experience', 'Content creation skills', 'Analytics proficiency'],
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Lagos, Nigeria / Remote',
      type: 'Full-time',
      description: 'Build and maintain our cloud infrastructure to support millions of travelers.',
      requirements: ['AWS/Azure experience', 'Kubernetes knowledge', 'CI/CD expertise'],
    },
    {
      title: 'UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Contract',
      description: 'Design intuitive and delightful user experiences for our travel platform.',
      requirements: ['5+ years UX design', 'Figma proficiency', 'Mobile-first design experience'],
    },
  ];

  const values = [
    'Customer obsession',
    'Innovation mindset',
    'Global perspective',
    'Collaborative spirit',
    'Continuous learning',
    'Results-driven',
  ];

  return (
    <div>
      <PageHeader
        title="Join Our Team"
        subtitle="Help us revolutionize travel and create unforgettable experiences"
        icon={Briefcase}
        backgroundImage="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Why Join Us */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join Texitravels?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of a mission-driven team that's transforming how people explore the world
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Culture</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  At Texitravels, we believe that diverse perspectives and collaborative minds create 
                  the best solutions. Our culture is built on trust, innovation, and a shared passion 
                  for making travel accessible to everyone.
                </p>
                <p>
                  We're a fast-growing company where your ideas matter, your growth is supported, 
                  and your impact is felt by millions of travelers worldwide.
                </p>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">What we value:</h4>
                <div className="flex flex-wrap gap-2">
                  {values.map((value, index) => (
                    <span
                      key={index}
                      className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
            <p className="text-xl text-gray-600">We take care of our team so they can take care of our customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center">
                  <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Open Positions */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">Find your next adventure with us</p>
          </div>

          <div className="space-y-6">
            {openings.map((job, index) => (
              <Card key={index} hover>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                      <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-medium">
                        {job.department}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{job.description}</p>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 lg:mt-0 lg:ml-8">
                    <Button size="lg">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="inline-block">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Don't see the right role?</h3>
              <p className="text-gray-600 mb-6">
                We're always looking for talented people to join our team. Send us your resume 
                and tell us how you'd like to contribute to our mission.
              </p>
              <Button>
                Send General Application
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;