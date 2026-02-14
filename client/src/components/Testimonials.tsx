import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-r from-primary to-brand-ocean-blue text-white transition-colors duration-300 shadow-lg">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="font-semibold text-4xl md:text-5xl text-white mb-12">What Our Clients Say</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-base text-xl italic mb-6 leading-relaxed">
            "Marine Canvas Florida transformed our yacht! The quality, fit, and attention to detail surpassed all our expectations. Truly professional service from start to finish."
          </p>
          <div className="flex items-center justify-center">
            <p className="font-medium text-lg">- John D., Yacht Owner, Miami FL</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
