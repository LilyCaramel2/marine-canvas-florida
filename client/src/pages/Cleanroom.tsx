import { Link } from 'wouter';
import { useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import AdriaticLuxHeritage from '../components/AdriaticLuxHeritage';
import MasterFabricator from '../components/MasterFabricator';
import { ShieldCheck, Layers, Wrench, FlaskConical, ArrowRight, ChevronRight } from 'lucide-react';

const specs = [
  { label: 'ISO Classification', value: 'Class 1 – Class 9 (ISO 14644-1)' },
  { label: 'Frame Material', value: 'Powder-coated aluminium T-slot extrusion' },
  { label: 'Panel Material', value: 'PVC vinyl, anti-static film, or polycarbonate' },
  { label: 'HEPA Filtration', value: 'Fan-filter units (FFU) 99.99% @ 0.3 µm' },
  { label: 'Positive Pressure', value: 'Adjustable fan speed, once-through airflow' },
  { label: 'Lead Time', value: '2–4 weeks from approved drawings' },
  { label: 'Installation', value: 'On-site by Adriatic Lux fabrication team' },
  { label: 'Compliance', value: 'ISO 14644-1, FDA 21 CFR Part 11 compatible' },
];

const applications = [
  'Pharmaceutical compounding and packaging',
  'Medical device assembly and testing',
  'Semiconductor and microelectronics fabrication',
  'Aerospace component inspection',
  'Biotech research and cell culture',
  'Optical and laser equipment assembly',
  'Defence and government secure facilities',
  'University and research laboratory environments',
];

const services = [
  {
    icon: <FlaskConical className="w-7 h-7 text-yellow-400" />,
    title: 'ISO-Classified Enclosures',
    desc: 'Custom softwall panels fabricated to exact dimensional tolerances. Every seam is double-stitched and pressure-tested. ISO Class 5 through Class 9 configurations available.',
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-yellow-400" />,
    title: 'Contamination Control',
    desc: 'Anti-static PVC and ESD-safe panel options prevent electrostatic discharge in sensitive environments. All materials are non-shedding and compatible with IPA and bleach wipe-down protocols.',
  },
  {
    icon: <Layers className="w-7 h-7 text-yellow-400" />,
    title: 'Modular & Reconfigurable',
    desc: 'T-slot aluminium framing allows the cleanroom footprint to be expanded, reduced, or relocated without structural modification to the host facility. No drilling, no tapping.',
  },
  {
    icon: <Wrench className="w-7 h-7 text-yellow-400" />,
    title: 'On-Site Fabrication & Installation',
    desc: 'Peck and his team measure, fabricate, and install on-site. No remote ordering, no generic kits. Every panel is cut to the exact dimensions of your facility.',
  },
];

const Cleanroom = () => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Softwall Cleanroom Fabrication — Tampa Bay, Florida',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Marine Canvas Florida | Adriatic Lux',
        address: { '@type': 'PostalAddress', addressLocality: 'Tarpon Springs', addressRegion: 'FL' },
        telephone: '+17272187157',
      },
      description: 'Custom ISO 14644-1 softwall cleanroom enclosures fabricated and installed across Tampa Bay and Florida. Pharmaceutical, biotech, semiconductor, and aerospace applications.',
      areaServed: 'Florida',
    };
    const tag = document.createElement('script');
    tag.type = 'application/ld+json';
    tag.id = 'cleanroom-schema';
    tag.textContent = JSON.stringify(schema);
    document.head.appendChild(tag);
    return () => { const el = document.getElementById('cleanroom-schema'); if (el) el.remove(); };
  }, []);

  return (
    <>
      <SEOHead
        title="Softwall Cleanroom Fabrication Tampa Bay | ISO 14644-1 | Marine Canvas Florida"
        description="Custom ISO 14644-1 softwall cleanroom enclosures for pharmaceutical, biotech, and semiconductor facilities across Tampa Bay and Florida. On-site fabrication and installation by master craftsmen."
        canonical="https://marinecanvasflorida.com/industrial/clean-room"
        ogUrl="https://marinecanvasflorida.com/industrial/clean-room"
      />

      {/* Hero */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=1600&auto=format&fit=crop&q=80"
          alt="Cleanroom environment with softwall panels and HEPA filtration"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80" />
        {/* Blueprint grid overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.5) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-4">Adriatic Lux Industrial Division</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Softwall Cleanroom<br />
            <span className="text-yellow-400">Fabrication & Installation</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            ISO 14644-1 compliant softwall enclosures, custom-fabricated on-site by master craftsmen with 20 years of precision material work. Serving pharmaceutical, biotech, semiconductor, and aerospace facilities across Florida.
          </p>
          <Link to="/contact">
            <div className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold rounded-lg transition-all cursor-pointer">
              Request a Cleanroom Consultation <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>

      {/* Services grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Our Cleanroom Capabilities</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14">
            Every enclosure is designed around your specific ISO classification, footprint, and operational requirements. No off-the-shelf kits. No compromises.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-8">
                <div className="mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical specifications */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {specs.map((s, i) => (
              <div key={i} className="flex items-start gap-4 bg-slate-900 border border-slate-700 rounded-lg p-5">
                <ChevronRight className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-yellow-400 uppercase tracking-wider mb-1">{s.label}</p>
                  <p className="text-white font-medium">{s.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Industries & Applications</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {applications.map((a, i) => (
              <div key={i} className="bg-slate-800 border border-slate-700 rounded-lg p-4 text-sm text-slate-300 text-center">
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdriaticLuxHeritage variant="industrial" />
      <MasterFabricator variant="industrial" />

      {/* CTA */}
      <section className="py-20 bg-slate-900 border-t border-slate-700">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Discuss Your Cleanroom Project?</h2>
          <p className="text-slate-400 mb-8">We respond to all industrial enquiries within 48 hours. On-site consultations available across Florida.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <div className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold rounded-lg transition-all cursor-pointer">
                Get a Free Consultation <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
            <Link to="/industrial">
              <div className="inline-flex items-center gap-2 px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all cursor-pointer">
                Back to Industrial Hub
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cleanroom;
