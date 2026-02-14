import React, { useState } from 'react';
import { Link } from 'wouter';

const Gallery = () => {
  const [filter, setFilter] = useState('All');

  const placeholderImages = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    alt: `Marine Canvas Project ${i + 1}`,
    category: ['Bimini', 'Enclosure', 'Cover', 'Upholstery'][i % 4],
  }));

  const filteredImages = filter === 'All' ? placeholderImages : placeholderImages.filter(img => img.category === filter);

  return (
    <section className="py-24 bg-background text-text transition-colors duration-300 mt-[72px] md:mt-[80px]">
      <div className="container mx-auto px-6 max-w-7xl">
        <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl text-center text-primary mb-12 leading-tight">
          Our Work: A Gallery of Marine Canvas Excellence
        </h1>
        <p className="text-base text-xl text-center text-text mb-16 max-w-4xl mx-auto leading-relaxed">
          Explore our portfolio of custom marine canvas projects, showcasing the meticulous craftsmanship and unwavering attention to detail we bring to every yacht and boat across the Florida coast. See the quality that sets us apart.
        </p>

        {/* Gallery Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['All', 'Bimini', 'Enclosure', 'Cover', 'Upholstery'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-medium text-lg px-6 py-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent ${
                filter === cat ? 'bg-primary text-white shadow-md' : 'bg-card text-primary hover:bg-card-hover border border-border'
              }`}
              aria-pressed={filter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div key={image.id} className="aspect-video bg-card rounded-lg shadow-xl overflow-hidden flex items-center justify-center text-text text-sm border border-border hover:shadow-2xl transition-all duration-300">
              <div className="text-center p-4">
                <p className="font-medium mb-2">{image.alt}</p>
                <p className="text-xs opacity-75">Category: {image.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h2 className="font-semibold text-3xl text-primary mb-6">
            Ready to See Your Vision Come to Life?
          </h2>
          <p className="text-base text-lg text-text mb-8 max-w-3xl mx-auto">
            Our gallery showcases just a glimpse of the custom craftsmanship we deliver. Contact us to discuss your unique project.
          </p>
          <Link to="/contact" className="btn-primary inline-block">
            Get Your Free Custom Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
