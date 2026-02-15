import React from 'react';
import { Link } from 'wouter';
import { services } from '@/data/services';

const Services = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      {/* Hero Section */}
      <div
        className="relative w-full h-96 bg-cover bg-center mb-12"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=400&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="relative z-10 h-full flex flex-col justify-center items-start p-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">Our Services</h1>
          <p className="text-xl text-white/90 mt-4 drop-shadow-md max-w-2xl">
            Comprehensive marine canvas solutions for every vessel
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <p className="text-xl text-foreground/80 leading-relaxed">
            From unparalleled sun protection to complete weatherproofing and interior comfort, Marine Canvas Florida offers a full spectrum of custom solutions to protect and enhance your vessel across the Tampa Bay area, including Tarpon Springs and St. Petersburg.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map(service => (
            <Link key={service.id} to={`/services/${service.slug}`}>
              <a className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="h-40 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4">{service.shortDescription}</p>
                  <div className="text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    Learn More →
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>

        {/* Additional Services */}
        <section className="bg-card rounded-lg p-12 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Additional Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Marine Canvas Repair & Restitch',
                description: 'Expert repair and restitching services to extend the life of your existing marine canvas, restoring functionality and appearance with durable materials and craftsmanship.',
              },
              {
                title: 'Dodgers & Sprayhoods',
                description: 'Custom-designed dodgers and sprayhoods offering superior protection from wind, spray, and sun, enhancing comfort in the cockpit with robust marine fabrics.',
              },
            ].map((service, idx) => (
              <div key={idx} className="p-6 border-l-4 border-primary">
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-foreground/70">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Our Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Choose Our Services?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Premium Materials',
                description: 'We use only the highest quality Sunbrella®, WeatherMax®, and marine-grade materials.',
              },
              {
                title: 'Expert Craftsmanship',
                description: 'Decades of combined experience in marine canvas design and fabrication.',
              },
              {
                title: 'Custom Solutions',
                description: 'Every project is tailored to your specific vessel and requirements.',
              },
              {
                title: 'Advanced Technology',
                description: 'Digital scanning, CAD design, and CNC cutting for precision fit.',
              },
              {
                title: 'Local Expertise',
                description: 'Based in Tarpon Springs with deep knowledge of Florida marine conditions.',
              },
              {
                title: 'Comprehensive Warranty',
                description: 'Industry-leading warranties covering materials and workmanship.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-foreground/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary to-secondary rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Vessel?</h2>
          <p className="text-lg mb-8 opacity-90">
            Get a free consultation and custom quote for your marine canvas needs.
          </p>
          <Link to="/contact">
            <a className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors">
              Request a Free Consultation
            </a>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Services;
