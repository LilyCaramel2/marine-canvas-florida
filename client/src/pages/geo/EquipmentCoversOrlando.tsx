import React, { useEffect } from 'react';
import { Link } from 'wouter';
import SEOHead from '../../components/SEOHead';
import MasterFabricator from '../../components/MasterFabricator';
import { Package, Wrench, Shield, CheckCircle, ArrowRight } from 'lucide-react';

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
        { '@type': 'City', name: 'Orlando' },
        { '@type': 'City', name: 'Kissimmee' },
        { '@type': 'City', name: 'Sanford' },
        { '@type': 'City', name: 'Lakeland' },
      ],
      sameAs: ['https://www.google.com/maps?cid=marinecanvasflorida'],
    },
    {
      '@type': 'Service',
      name: 'Industrial Equipment Covers Orlando',
      provider: { '@id': 'https://marinecanvasflorida.com/#business' },
      areaServed: { '@type': 'City', name: 'Orlando' },
      description:
        'Custom-fabricated heavy-duty canvas and coated fabric equipment covers for industrial machinery, CNC equipment, outdoor plant, and sensitive instrumentation in Orlando and Central Florida.',
      serviceType: 'Industrial Canvas Fabrication',
      url: 'https://marinecanvasflorida.com/industrial/equipment-covers-orlando',
    },
  ],
};

const SERVICES = [
  {
    Icon: Package,
    title: 'CNC & Precision Machinery Covers',
    description:
      'Custom-fabricated covers for CNC machining centres, lathes, and precision manufacturing equipment. Fabricated to exact dimensional tolerances with port access panels, operator windows, and cable management cutouts.',
  },
  {
    Icon: Wrench,
    title: 'Outdoor Industrial Equipment Covers',
    description:
      'Heavy-duty UV-stabilised, waterproof canvas covers for outdoor plant, generators, compressors, and construction equipment. Rated for Florida coastal UV and humidity conditions. ASCE 7 wind load hardware options.',
  },
  {
    Icon: Shield,
    title: 'Sensitive Instrumentation Protection',
    description:
      'Precision covers for laboratory instruments, cleanroom equipment, and data center hardware. ESD-safe fabric options, anti-static grounding straps, and cleanroom-compatible materials available.',
  },
];

const APPLICATIONS = [
  'CNC machining centres and lathes',
  'Industrial generators and compressors',
  'Outdoor construction plant and equipment',
  'Laboratory and cleanroom instrumentation',
  'Data center and server hardware',
  'Theme park and entertainment equipment',
  'Aerospace ground support equipment',
  'Medical and surgical equipment',
];

// ── Component ──────────────────────────────────────────────────────────────
const EquipmentCoversOrlando: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'schema-equipment-orlando';
    script.text = JSON.stringify(SCHEMA);
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById('schema-equipment-orlando');
      if (el) el.remove();
    };
  }, []);

  return (
    <>
      <SEOHead
        title="Industrial Equipment Covers Orlando FL | Custom Canvas Fabrication | Marine Canvas Florida"
        description="Custom heavy-duty canvas and coated fabric equipment covers for Orlando and Central Florida industrial facilities. CNC machinery, outdoor plant, cleanroom instruments, and data center hardware."
        canonical="https://marinecanvasflorida.com/industrial/equipment-covers-orlando"
        ogUrl="https://marinecanvasflorida.com/industrial/equipment-covers-orlando"
      />

      <div className="min-h-screen bg-background pt-24 pb-16">

        {/* ── Hero ── */}
        <div
          className="relative w-full h-[420px] bg-cover bg-center mb-16 overflow-hidden"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&h=420&fit=crop)',
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
              Central Florida Industrial Fabrication
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg leading-tight mb-4">
              Equipment Covers<br />Orlando, Florida
            </h1>
            <p className="text-xl text-white/85 max-w-2xl leading-relaxed">
              Custom-fabricated heavy-duty canvas and coated fabric equipment covers for Orlando and Central Florida industrial, manufacturing, and technology facilities.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-5xl">

          {/* ── Introduction ── */}
          <section className="mb-16 max-w-3xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary/70 mb-2 block">
              Serving Orlando, Kissimmee, Sanford, Lakeland &amp; Central Florida
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Precision Equipment Protection for Central Florida Industry
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Orlando and Central Florida's industrial base spans advanced manufacturing, aerospace, theme park engineering, life sciences, and technology infrastructure. Each sector demands equipment protection that is fabricated to specification — not sourced from generic stock covers that compromise fit, protection, and operational access.
              </p>
              <p>
                Marine Canvas Florida fabricates custom equipment covers to exact dimensional tolerances, with port access panels, operator windows, cable management cutouts, and material specifications matched to the operating environment. Whether the requirement is an ESD-safe cover for a cleanroom instrument or a UV-stabilised waterproof cover for outdoor construction plant, every cover is measured, cut, and finished by a master craftsman.
              </p>
              <p>
                All Central Florida industrial inquiries receive a written scope and material specification within 48 hours.
              </p>
            </div>
          </section>

          {/* ── Services ── */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Equipment Cover Services — Orlando Region</h2>
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

          {/* ── Applications ── */}
          <section className="mb-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Equipment Types — Orlando &amp; Central Florida</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {APPLICATIONS.map((app) => (
                <div key={app} className="flex items-center gap-2 text-foreground/80 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={2} />
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── Master Fabricator (compact) ── */}
          <MasterFabricator variant="industrial" />

          {/* ── CTA ── */}
          <section className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-10 text-center text-white shadow-xl">
            <span className="text-blue-300 text-xs font-semibold tracking-widest uppercase mb-3 block">
              Orlando &amp; Central Florida Equipment Inquiry
            </span>
            <h2 className="text-3xl font-bold mb-4">Request an Equipment Cover Consultation</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Submit your equipment dimensions, operating environment, and access requirements. All Central Florida industrial inquiries receive a written scope and material specification within 48 hours.
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

export default EquipmentCoversOrlando;
