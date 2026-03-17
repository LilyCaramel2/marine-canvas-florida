import React, { useEffect } from 'react';
import { Link } from 'wouter';
import SEOHead from '../../components/SEOHead';
import MasterFabricator from '../../components/MasterFabricator';
import AdriaticLuxHeritage from '../../components/AdriaticLuxHeritage';
import { FlaskConical, ShieldCheck, Package, CheckCircle, ArrowRight } from 'lucide-react';

// ── JSON-LD Schema ─────────────────────────────────────────────────────────
const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://marinecanvasflorida.com/#business',
      name: 'Marine Canvas Florida',
      url: 'https://marinecanvasflorida.com',
      telephone: '+17272187157',
      email: 'office@marinecanvasflorida.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '495 Brady Rd Suite J',
        addressLocality: 'Tarpon Springs',
        addressRegion: 'FL',
        postalCode: '34689',
        addressCountry: 'US',
      },
      areaServed: [
        { '@type': 'City', name: 'Tampa' },
        { '@type': 'City', name: 'St. Petersburg' },
        { '@type': 'City', name: 'Clearwater' },
        { '@type': 'City', name: 'Tarpon Springs' },
      ],
      sameAs: ['https://www.google.com/maps?cid=marinecanvasflorida'],
    },
    {
      '@type': 'Service',
      name: 'Softwall Cleanroom Solutions Tampa',
      provider: { '@id': 'https://marinecanvasflorida.com/#business' },
      areaServed: { '@type': 'City', name: 'Tampa' },
      description:
        'ISO 14644-1 compliant softwall cleanroom panels, modular enclosure systems, and contamination control curtains for pharmaceutical, semiconductor, biotech, and aerospace facilities in Tampa, FL.',
      serviceType: 'Industrial Canvas Fabrication',
      url: 'https://marinecanvasflorida.com/industrial/cleanrooms-tampa',
    },
  ],
};

const SERVICES = [
  {
    Icon: FlaskConical,
    title: 'ISO 14644-1 Softwall Panels',
    description:
      'Modular softwall cleanroom enclosures fabricated to Class 1–8 cleanliness classifications. Anti-static, chemical-resistant, and UV-stable fabric options. Dimensional tolerances verified before installation.',
  },
  {
    Icon: ShieldCheck,
    title: 'Contamination Control Curtains',
    description:
      'Precision-sewn PVC and vinyl curtain systems for environmental separation in pharmaceutical and biotech facilities across the Tampa Bay corridor. Rated for positive and negative pressure differentials.',
  },
  {
    Icon: Package,
    title: 'Cleanroom Equipment Covers',
    description:
      'Custom-fabricated covers for sensitive cleanroom instrumentation, CNC machinery, and semiconductor equipment. ESD-safe fabric options, port access panels, and grounding strap integration.',
  },
];

const SECTORS = [
  'Pharmaceutical & Biotech',
  'Semiconductor Manufacturing',
  'Aerospace & Defense',
  'Medical Device Production',
  'Food & Beverage Processing',
  'Research & Development Labs',
];

// ── Component ──────────────────────────────────────────────────────────────
const CleanroomsTampa: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'schema-cleanrooms-tampa';
    script.text = JSON.stringify(SCHEMA);
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById('schema-cleanrooms-tampa');
      if (el) el.remove();
    };
  }, []);

  return (
    <>
      <SEOHead
        title="Cleanroom Solutions Tampa FL | ISO 14644 Softwall Systems | Marine Canvas Florida"
        description="ISO 14644-1 compliant softwall cleanroom panels, contamination control curtains, and equipment covers for Tampa Bay pharmaceutical, biotech, and semiconductor facilities. Free consultation."
        canonical="https://marinecanvasflorida.com/industrial/cleanrooms-tampa"
        ogUrl="https://marinecanvasflorida.com/industrial/cleanrooms-tampa"
      />

      <div className="min-h-screen bg-background pt-24 pb-16">

        {/* ── Hero ── */}
        <div
          className="relative w-full h-[420px] bg-cover bg-center mb-16 overflow-hidden"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&h=420&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/50" />
          <div
            className="absolute inset-0 opacity-8"
            style={{
              backgroundImage:
                'linear-gradient(rgba(96,165,250,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.6) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 h-full flex flex-col justify-center items-start p-8 container mx-auto max-w-5xl">
            <span className="text-blue-300 text-xs font-semibold tracking-widest uppercase mb-3">
              Tampa Bay Industrial Fabrication
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg leading-tight mb-4">
              Cleanroom Solutions<br />Tampa, Florida
            </h1>
            <p className="text-xl text-white/85 max-w-2xl leading-relaxed">
              ISO 14644-1 compliant softwall cleanroom systems, contamination control curtains, and precision equipment covers — fabricated and installed across the Tampa Bay region.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-5xl">

          {/* ── Introduction ── */}
          <section className="mb-16 max-w-3xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary/70 mb-2 block">
              Serving Tampa, St. Petersburg, Clearwater &amp; Hillsborough County
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Enterprise-Grade Cleanroom Fabrication for Tampa Bay Facilities
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Marine Canvas Florida delivers custom softwall cleanroom systems to pharmaceutical manufacturers, semiconductor facilities, biotech laboratories, and aerospace contractors throughout the Tampa Bay metropolitan area. Every system is fabricated at our Tarpon Springs workshop — 35 minutes from downtown Tampa — and installed by the same master craftsman who designed and cut the specification.
              </p>
              <p>
                Tampa Bay's life sciences and advanced manufacturing sectors demand contamination control infrastructure that meets ISO 14644-1 classifications without the lead times and overhead of national contractors. Marine Canvas Florida provides that capability locally, with a 48-hour written scope and material specification on all industrial inquiries.
              </p>
            </div>
          </section>

          {/* ── Services ── */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Cleanroom Services — Tampa Region</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {SERVICES.map((service) => (
                <div
                  key={service.title}
                  className="bg-card border border-border rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Sectors served ── */}
          <section className="mb-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Tampa Bay Sectors Served</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {SECTORS.map((sector) => (
                <div key={sector} className="flex items-center gap-2 text-foreground/80 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={2} />
                  <span>{sector}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── Master Fabricator (compact) ── */}
          <AdriaticLuxHeritage variant="industrial" />
      <MasterFabricator variant="industrial" />

          {/* ── CTA ── */}
          <section className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-10 text-center text-white shadow-xl">
            <span className="text-blue-300 text-xs font-semibold tracking-widest uppercase mb-3 block">
              Tampa Bay Cleanroom Inquiry
            </span>
            <h2 className="text-3xl font-bold mb-4">Request a Tampa Cleanroom Consultation</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Submit your facility specifications or project brief. All Tampa Bay industrial inquiries receive a written scope and material specification within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <div className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-800 font-bold rounded-lg hover:bg-blue-50 transition-all shadow-lg cursor-pointer">
                  Request Free Consultation <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
              <a
                href="mailto:office@marinecanvasflorida.com"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-lg hover:border-white transition-all"
              >
                office@marinecanvasflorida.com
              </a>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default CleanroomsTampa;
