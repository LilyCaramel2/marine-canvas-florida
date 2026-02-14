import React from 'react';
import { Link } from 'wouter';

const ServiceAreas = () => {
  return (
    <section className="py-24 bg-background text-text transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="font-semibold text-4xl md:text-5xl lg:text-6xl text-primary mb-6 leading-tight">
            Serving Boaters Across the Florida Coast: Tarpon Springs to Tampa Bay
          </h2>
          <p className="text-base text-lg md:text-xl text-text mb-4 leading-relaxed">
            Marine Canvas Florida proudly provides premium custom marine canvas and upholstery services to a wide range of locations throughout Florida. Our primary focus is the <strong>Tampa Bay area</strong>, including our home base in <strong>Tarpon Springs</strong>, <strong>St. Petersburg</strong>, Clearwater, and surrounding marinas.
          </p>
          <p className="text-base text-lg md:text-xl text-text leading-relaxed">
            Our mobile service and dedication ensure convenience and quality, bringing our expertise directly to your vessel, no matter where it's docked in our service region. Contact us today to find out how we can serve your specific area!
          </p>
          <Link to="/contact" className="btn-primary mt-8 inline-block">
            Check Service Area →
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-full h-64 md:h-80 bg-card rounded-lg shadow-lg flex items-center justify-center border border-border text-text">
            <p className="text-center">Service Area Map</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
