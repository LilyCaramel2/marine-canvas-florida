import React from 'react';
import { Link } from 'wouter';

const ServiceBoatCovers = () => {
  const benefits = [
    {
      icon: '☔',
      title: 'High-Performance UV & All-Weather Protection',
      description: 'Crafted from market-leading materials like Sunbrella®, WeatherMax®, and other specialized acrylic coated canvases, our covers effectively block harmful UV rays, preventing fading, cracking, and water intrusion. They provide superior defense against rain, bird droppings, and environmental pollutants.'
    },
    {
      icon: '📏',
      title: 'Tailored Custom Fit for Superior Coverage',
      description: 'Each cover is precisely measured using advanced digital scanning and CAD, then custom-fitted to your boat\'s unique contours. This ensures maximum coverage, minimizes wind buffeting (reducing wear and tear), prevents water pooling, and delivers a sleek, custom appearance that enhances your boat\'s lines.'
    },
    {
      icon: '🌬️',
      title: 'Breathable, Mildew-Resistant Fabrication',
      description: 'Our chosen marine-grade materials are engineered for optimal breathability, allowing essential air circulation beneath the cover. This critical feature prevents moisture buildup, combating the formation of mold and mildew, and ultimately keeps your boat\'s interior fresh, dry, and protected from fungal growth. Stitching utilizes durable SolarFix® thread for maximum longevity.'
    },
    {
      icon: '📈',
      title: 'Long-Term Value & Aesthetic Preservation',
      description: 'A custom-made, high-quality boat cover from Marine Canvas Florida is an indispensable investment. It significantly extends the life of your vessel\'s components, reduces maintenance needs, and rigorously preserves its aesthetic appeal and resale value for many years to come, offering superior protection far beyond off-the-shelf alternatives.'
    }
  ];

  return (
    <section className="py-24 bg-background text-text transition-colors duration-300 mt-[72px] md:mt-[80px]">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl text-center text-primary mb-12 leading-tight">
          Protective Boat Covers: Unmatched Preservation for Your Vessel
        </h1>
        <p className="text-base text-xl text-center text-text mb-16 leading-relaxed">
          Safeguard your valuable vessel with our custom boat covers, meticulously designed to provide comprehensive, long-lasting protection against the elements and preserve its condition and value in the demanding Florida climate.
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
            Get a Free Quote for Your Boat Cover
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceBoatCovers;
