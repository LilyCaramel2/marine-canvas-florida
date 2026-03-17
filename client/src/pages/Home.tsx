import React from 'react';
import SEOHead from '../components/SEOHead';
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
      <SEOHead
        title="Marine Canvas Florida | Custom Boat Canvas, Bimini Tops & Upholstery — Tarpon Springs"
        description="Marine Canvas Florida crafts premium bimini tops, boat enclosures, covers, and marine upholstery for luxury vessels across Tarpon Springs, Clearwater, and Tampa Bay. Call for a free consultation."
        canonical="https://marinecanvasflorida.com/"
        ogUrl="https://marinecanvasflorida.com/"
      />
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
