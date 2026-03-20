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
          <div className="w-full rounded-lg shadow-lg overflow-hidden border border-border">
            <iframe
              title="Marine Canvas Florida — Tarpon Springs"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.2!2d-82.7573!3d28.1459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2f0b8b8b8b8b8%3A0x0!2s495+Brady+Rd+Suite+J%2C+Tarpon+Springs%2C+FL+34689!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
