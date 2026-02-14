import React from 'react';
import { Link } from 'wouter';

const ServiceUpholstery = () => {
  const benefits = [
    {
      icon: '🛋️',
      title: 'Durable Marine-Grade Fabrics & Engineered Foams',
      description: 'We utilize only the finest marine-grade vinyls (like Nautolex®), specialized fabrics (including Tempotest® and Swela®), and high-density, closed-cell foams. These materials are specifically designed to resist UV damage, mildew, moisture, and saltwater corrosion, ensuring your upholstery looks and feels new for longer.'
    },
    {
      icon: '✨',
      title: 'Custom Design & Artisanal Craftsmanship',
      description: 'From essential repairs to complete interior overhauls, our skilled craftsmen provide bespoke upholstery solutions, perfectly matching your boat\'s aesthetic and your personal style with impeccable stitching, precision patterning (using digital scanning and CNC cutting), and a flawless finish, transforming your boat\'s comfort and appeal.'
    },
    {
      icon: '💫',
      title: 'Enhanced Comfort & Luxurious Aesthetics',
      description: 'Upgrade your seating, cushions, and panels for superior comfort during long voyages and extended stays onboard. Our custom marine upholstery dramatically enhances the luxurious feel and visual appeal of your boat\'s cabin, cockpit, and exterior lounging areas. All stitching is performed with durable SolarFix® or Tenara® thread for ultimate resilience.'
    },
    {
      icon: '💰',
      title: 'Preserving & Increasing Vessel Value',
      description: 'Investing in high-quality marine upholstery not only dramatically improves your immediate boating experience and comfort but also significantly contributes to the preservation and increased resale value of your vessel. It\'s a smart upgrade that protects your investment and elevates your boat\'s market appeal.'
    }
  ];

  return (
    <section className="py-24 bg-background text-text transition-colors duration-300 mt-[72px] md:mt-[80px]">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl text-center text-primary mb-12 leading-tight">
          Marine Upholstery: Transform Your Boat's Interior
        </h1>
        <p className="text-base text-xl text-center text-text mb-16 leading-relaxed">
          Revitalize your boat's interior with our premium marine upholstery services, seamlessly combining luxurious comfort with robust marine-grade durability, tailored for the discerning Florida boating lifestyle.
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
            Get a Free Quote for Marine Upholstery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceUpholstery;
