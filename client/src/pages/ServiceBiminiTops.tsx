import React from 'react';
import { Link } from 'wouter';

const ServiceBiminiTops = () => {
  const benefits = [
    {
      icon: '☀️',
      title: 'Premium Marine-Grade Sunbrella® Fabric',
      description: 'Utilizing market-leading Sunbrella® UV-resistant marine fabric, our bimini tops and T-Tops offer unbeatable protection from the harsh Florida sun. This ensures vibrant colorfastness, superior mold/mildew resistance, and a significantly cooler onboard environment, keeping you comfortable even on the hottest days.'
    },
    {
      icon: '📐',
      title: 'Precision Custom Fit & Aerodynamic Design',
      description: 'Each bimini or T-Top is individually patterned and expertly fabricated to your vessel\'s unique dimensions and specific needs. We leverage advanced digital scanning and CAD design for ultimate precision, ensuring a taut, perfect fit that seamlessly integrates with your boat\'s lines, minimizes wind buffeting, and enhances its overall aesthetic.'
    },
    {
      icon: '💪',
      title: 'Uncompromising Durability with 316 Stainless Steel',
      description: 'Constructed with heavy-duty SolarFix® PTFE thread and corrosion-resistant 316 marine-grade stainless steel frames and fittings, our bimini and T-Tops are engineered for extreme durability. They are built to endure and excel in Florida\'s harsh saltwater environments, providing long-lasting reliability and peace of mind.'
    },
    {
      icon: '🚤',
      title: 'Optimal Shade and Enhanced Onboard Comfort',
      description: 'Our custom bimini tops and T-Tops provide essential shelter from the scorching Florida sun, wind, and light rain, creating a significantly cooler and more comfortable space, allowing you and your guests to enjoy extended hours on the water, whether cruising leisurely or actively fishing.'
    }
  ];

  return (
    <section className="py-24 bg-background text-text transition-colors duration-300 mt-[72px] md:mt-[80px]">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl text-center text-primary mb-12 leading-tight">
          Custom Bimini Tops & T-Tops: Supreme Shade, Enduring Style
        </h1>
        <p className="text-base text-xl text-center text-text mb-16 leading-relaxed">
          Elevate your boating experience with our bespoke Bimini Top and T-Top solutions, meticulously designed and crafted to provide optimal sun protection and refined style for Florida's waterways and active fishing boats.
        </p>
        <div className="space-y-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card p-8 rounded-lg shadow-xl flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 border border-border">
              <span className="text-accent text-5xl flex-shrink-0" aria-hidden="true">{benefit.icon}</span>
              <div>
                <h2 className="font-medium text-2xl text-primary mb-3">{benefit.title}</h2>
                <p className="text-base text-text leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-20">
          <Link to="/contact" className="btn-primary inline-block">
            Get a Free Quote for Your Bimini Top
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceBiminiTops;
