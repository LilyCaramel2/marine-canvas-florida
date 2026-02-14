import React from 'react';
import { Link } from 'wouter';

const ServiceEnclosures = () => {
  const benefits = [
    {
      icon: '🛡️',
      title: 'Premium Weatherproof Fabrics & Crystal-Clear Vinyl',
      description: 'We use top-grade, UV-resistant Sunbrella® canvas for durability, combined with crystal-clear Strataglass® or O\'Sea marine-grade vinyl (often referred to as Isinglass). This combination creates enclosures that offer maximum visibility and robust protection against rain, wind, and spray, without compromising your view.'
    },
    {
      icon: '✨',
      title: 'Seamless Custom Integration & Aerodynamic Profile',
      description: 'Each enclosure is meticulously custom-designed using advanced digital scanning and CAD. This ensures a seamless integration with your boat\'s existing structures and a precise fit that preserves its aesthetic, enhances functionality, and maintains an aerodynamic profile to reduce drag.'
    },
    {
      icon: '⚙️',
      title: 'Unmatched Durability with YKK® Zips & Marine Hardware',
      description: 'Built with robust YKK® zippers, corrosion-resistant DOT® fasteners, and heavy-duty SolarFix® PTFE stitching, our enclosures are engineered for extreme durability. They are designed to withstand the most demanding marine environments, ensuring reliable performance and longevity for years of enjoyment.'
    },
    {
      icon: '🌊',
      title: 'Extended Boating Comfort & Versatility',
      description: 'Our full boat enclosures significantly extend your time on the water, providing a comfortable, protected space for cruising, fishing, entertaining, or simply relaxing. This versatility allows you to enjoy your vessel in a wider range of weather conditions, making every outing more enjoyable.'
    }
  ];

  return (
    <section className="py-24 bg-background text-text transition-colors duration-300 mt-[72px] md:mt-[80px]">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl text-center text-primary mb-12 leading-tight">
          Full Boat Enclosures: Extend Your Season, Enhance Comfort
        </h1>
        <p className="text-base text-xl text-center text-text mb-16 leading-relaxed">
          Experience unparalleled comfort and extended usability of your vessel with our custom boat enclosures, providing superior, all-weather protection from Florida's elements, allowing you to enjoy your boat year-round.
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
            Request a Free Quote for Your Enclosure
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceEnclosures;
