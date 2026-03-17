import React, { useEffect } from 'react';
import { Link } from 'wouter';
import SEOHead from '../../components/SEOHead';
import MasterFabricator from '../../components/MasterFabricator';
import { Layers, Server, Thermometer, CheckCircle, ArrowRight } from 'lucide-react';

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
        { '@type': 'City', name: 'Miami' },
        { '@type': 'City', name: 'Fort Lauderdale' },
        { '@type': 'City', name: 'Boca Raton' },
        { '@type': 'City', name: 'West Palm Beach' },
      ],
      sameAs: ['https://www.google.com/maps?cid=marinecanvasflorida'],
    },
    {
      '@type': 'Service',
      name: 'Data Center Containment Miami',
      provider: { '@id': 'https://marinecanvasflorida.com/#business' },
      areaServed: { '@type': 'City', name: 'Miami' },
      description:
        'Hot-aisle and cold-aisle containment systems for data center thermal management in Miami, Fort Lauderdale, and South Florida. Fabric panels and ceiling blanking solutions supporting ASHRAE thermal guidelines for Tier III and IV facilities.',
      serviceType: 'Industrial Canvas Fabrication',
      url: 'https://marinecanvasflorida.com/industrial/data-center-containment-miami',
    },
  ],
};

const SERVICES = [
  {
    Icon: Layers,
    title: 'Hot-Aisle Containment Systems',
    description:
      'Precision-fabricated fabric panels and ceiling blanking solutions that isolate hot exhaust air from cold supply air. Reduces cooling overhead and supports ASHRAE A1–A4 thermal guidelines for Tier III and IV Miami data centers.',
  },
  {
    Icon: Server,
    title: 'Cold-Aisle Containment',
    description:
      'Custom cold-aisle enclosures with top panels, end-of-row doors, and blanking plates. Fabricated to exact rack-row dimensions with cable management cutouts and fire-rated material options.',
  },
  {
    Icon: Thermometer,
    title: 'Thermal Blanking & Cable Management',
    description:
      'Flexible fabric blanking panels for open rack units and cable trays. Eliminates bypass airflow, reduces PUE, and integrates with existing containment infrastructure without structural modification.',
  },
];

const BENEFITS = [
  'ASHRAE A1–A4 thermal guideline compliance',
  'Tier III and Tier IV facility compatible',
  'Fire-rated fabric options available',
  'Cable management cutouts to specification',
  'Rapid installation — no structural modification',
  'Custom dimensions for any rack-row configuration',
  'South Florida statewide service coverage',
  '48-hour written scope on all inquiries',
];

// ── Component ──────────────────────────────────────────────────────────────
const DataCenterMiami: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'schema-datacenter-miami';
    script.text = JSON.stringify(SCHEMA);
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById('schema-datacenter-miami');
      if (el) el.remove();
    };
  }, []);

  return (
    <>
      <SEOHead
        title="Data Center Containment Miami FL | Hot-Aisle Cold-Aisle Systems | Marine Canvas Florida"
        description="Hot-aisle and cold-aisle containment systems for Miami and South Florida data centers. ASHRAE-compliant fabric panels, ceiling blanking, and Tier III/IV thermal management solutions. 48-hour scope."
        canonical="https://marinecanvasflorida.com/industrial/data-center-containment-miami"
        ogUrl="https://marinecanvasflorida.com/industrial/data-center-containment-miami"
      />

      <div className="min-h-screen bg-background pt-24 pb-16">

        {/* ── Hero ── */}
        <div
          className="relative w-full h-[420px] bg-cover bg-center mb-16 overflow-hidden"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=420&fit=crop)',
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
              South Florida Data Center Infrastructure
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg leading-tight mb-4">
              Data Center Containment<br />Miami, Florida
            </h1>
            <p className="text-xl text-white/85 max-w-2xl leading-relaxed">
              Hot-aisle and cold-aisle containment systems for Miami and South Florida data centers — ASHRAE-compliant, Tier III and IV compatible, installed without structural modification.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-5xl">

          {/* ── Introduction ── */}
          <section className="mb-16 max-w-3xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary/70 mb-2 block">
              Serving Miami, Fort Lauderdale, Boca Raton &amp; South Florida
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Precision Thermal Containment for South Florida Data Centers
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Miami and South Florida host some of the highest-density data center infrastructure in the southeastern United States. As colocation providers, hyperscalers, and enterprise operators expand capacity in the region, the demand for precision thermal containment systems that reduce PUE and meet ASHRAE A1–A4 guidelines has become a critical operational requirement.
              </p>
              <p>
                Marine Canvas Florida fabricates hot-aisle and cold-aisle containment systems to exact rack-row dimensions, with cable management cutouts, fire-rated material options, and end-of-row door configurations. Every system is designed for rapid installation without structural modification — minimising downtime in live data center environments.
              </p>
              <p>
                All South Florida data center inquiries receive a written scope and material specification within 48 hours of submission.
              </p>
            </div>
          </section>

          {/* ── Services ── */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Containment Services — Miami &amp; South Florida</h2>
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

          {/* ── Benefits grid ── */}
          <section className="mb-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Key Capabilities &amp; Compliance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {BENEFITS.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-foreground/80 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={2} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── Master Fabricator (compact) ── */}
          <MasterFabricator variant="industrial" />

          {/* ── CTA ── */}
          <section className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-10 text-center text-white shadow-xl">
            <span className="text-blue-300 text-xs font-semibold tracking-widest uppercase mb-3 block">
              Miami &amp; South Florida Data Center Inquiry
            </span>
            <h2 className="text-3xl font-bold mb-4">Request a Containment System Consultation</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Submit your rack-row dimensions, floor plan, or project brief. All South Florida data center inquiries receive a written scope and material specification within 48 hours.
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

export default DataCenterMiami;
