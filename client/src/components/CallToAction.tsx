import React from 'react';
import { Link } from 'wouter';

const CallToAction = () => {
  return (
    <section id="contact-cta" className="py-24 bg-primary text-white text-center transition-colors duration-300 shadow-lg">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="font-semibold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
          Ready for Superior Marine Canvas?
        </h2>
        <p className="text-base text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90 leading-relaxed">
          Let's discuss your custom canvas project. Get a free, no-obligation quote tailored to your specific needs and vessel.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
          <Link to="/contact" className="btn-accent inline-block">
            Request Your Free Quote
          </Link>
          <div className="text-lg">
            <p className="text-base mb-2 opacity-90">Or Call Us Directly:</p>
            <a href="tel:+17275551234" className="font-medium text-2xl md:text-3xl text-white hover:text-brand-sail-yellow transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75">
              (727) 555-1234
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
