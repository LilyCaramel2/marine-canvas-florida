import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import ReviewsCarousel from '../components/ReviewsCarousel';
import Testimonials from '../components/Testimonials';
import ServiceAreas from '../components/ServiceAreas';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <ReviewsCarousel />
      <Testimonials />
      <ServiceAreas />
      <CallToAction />
    </>
  );
};

export default Home;
