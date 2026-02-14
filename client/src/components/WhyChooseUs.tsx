import React from 'react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: '🛥',
      title: 'Unrivaled Expertise & Ocean-Tested Quality',
      description: 'With over two decades of hands-on experience, including transatlantic sailing and boat refurbishments, our canvas solutions are proven to withstand the harshest marine environments.'
    },
    {
      icon: '💎',
      title: 'Premium Materials & Advanced Technology',
      description: 'We use only the finest marine-grade fabrics like Sunbrella®, SolarFix® threads, 316 stainless steel, and employ digital scanning for precise custom fits.'
    },
    {
      icon: '☀️',
      title: 'Local Florida Knowledge & Tailored Solutions',
      description: 'Understanding Florida\'s unique climate, we craft bespoke canvas that offers optimal protection against intense UV, saltwater, and humidity for your specific vessel.'
    },
    {
      icon: '🤝',
      title: 'Sailors Serving Sailors: Your Satisfaction Guaranteed',
      description: 'Our commitment is to exceptional craftsmanship and personalized service, ensuring your complete satisfaction and a product that enhances your boating lifestyle.'
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-background text-text transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="font-semibold text-4xl md:text-5xl lg:text-6xl text-center text-primary mb-16 leading-tight">
          Why Choose Marine Canvas Florida: Our Commitment to Excellence
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-8 bg-card rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center border border-border">
              <span className="text-accent text-5xl mb-4" aria-hidden="true">{benefit.icon}</span>
              <h3 className="font-medium text-xl text-primary mb-3">{benefit.title}</h3>
              <p className="text-base text-text leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
