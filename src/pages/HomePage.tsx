import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Destinations from '../components/Destinations';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Destinations />
      <Features />
      <Testimonials />
      <Newsletter />
    </>
  );
};

export default HomePage;