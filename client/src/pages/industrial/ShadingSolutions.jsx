import React from 'react';
import SEOHead from '../../components/SEOHead';

export default function ShadingSolutions() {
  return (
    <>
      <SEOHead
        title="Industrial Shading Solutions Florida | Engineered Shade Structures for Commercial Facilities"
        description="Engineered shade structures and solar control systems for corporate campuses, manufacturing yards, and loading facilities across Florida. Designed to ASCE 7 wind load standards."
        canonical="https://marinecanvasflorida.com/industrial/shading-solutions"
        ogUrl="https://marinecanvasflorida.com/industrial/shading-solutions"
      />
      <div className="min-h-screen bg-background pt-24 pb-12">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-6">Industrial Shading Solutions</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Engineered shade structures and solar control systems for corporate campuses, manufacturing yards, and loading facilities. Designed to ASCE 7 wind load standards with commercial-grade hardware and stainless steel fittings.
          </p>
        </div>
      </div>
    </>
  );
}
