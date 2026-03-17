import { Link } from 'wouter';
import { useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import AdriaticLuxHeritage from '../components/AdriaticLuxHeritage';
import MasterFabricator from '../components/MasterFabricator';
import { Server, Thermometer, ShieldCheck, Wrench, ArrowRight, ChevronRight } from 'lucide-react';

const specs = [
  { label: 'Containment Type', value: 'Hot-aisle and cold-aisle fabric curtain systems' },
  { label: 'Thermal Standard', value: 'ASHRAE A1–A4 thermal envelope compliance' },
  { label: 'Tier Compatibility', value: 'Tier I through Tier IV data centre configurations' },
  { label: 'Panel Material', value: 'Fire-retardant PVC, anti-static coated fabric' },
  { label: 'Sealing', value: 'Custom brush seals and magnetic edge closures' },
  { label: 'Cable Management', value: 'Pre-cut cable pass-throughs to specification' },
  { label: 'Lead Time', value: '1–3 weeks from approved drawings' },
  { label: 'Installation', value: 'Live-environment installation, zero downtime' },
];

const benefits = [
  'Reduces cooling energy consumption by up to 40%',
  'Eliminates hot-spot formation in high-density racks',
  'Compliant with ASHRAE A1–A4 thermal guidelines',
  'Rapid deployment — no structural modification required',
  'Reconfigurable as rack layouts evolve',
  'Fire-retardant materials to NFPA 75 standards',
  'Anti-static fabric prevents ESD events near live equipment',
  'On-site fabrication ensures exact dimensional fit',
];

const services = [
  {
    icon: <Server className="w-7 h-7 text-yellow-400" />,
    title: 'Hot-Aisle Containment',
    desc: 'Fabric curtain systems that seal the hot exhaust aisle, directing heated air directly to CRAC return. Eliminates recirculation and reduces cooling load without modifying raised floor infrastructure.',
  },
  {
    icon: <Thermometer className="w-7 h-7 text-yellow-400" />,
    title: 'Cold-Aisle Containment',
    desc: 'Overhead and end-of-row panels that seal the cold supply aisle, preventing cool air from mixing with hot exhaust. Compatible with all standard rack heights and configurations.',
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-yellow-400" />,
    title: 'Fire-Retardant Materials',
    desc: 'All containment fabrics are rated to NFPA 75 and UL 94 V-0 standards. Anti-static coatings prevent electrostatic discharge events near live servers and storage arrays.',
  },
  {
    icon: <Wrench className="w-7 h-7 text-yellow-400" />,
    title: 'Live-Environment Installation',
    desc: 'Peck and his team install containment systems in live data centres with zero downtime. Panels are pre-fabricated off-site to exact dimensions and installed during maintenance windows.',
  },
];

const LargeFacility = () => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Data Center Containment Systems — Florida',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Marine Canvas Florida | Adriatic Lux',
        address: { '@type': 'PostalAddress', addressLocality: 'Tarpon Springs', addressRegion: 'FL' },
        telephone: '+17272187157',
      },
      description: 'Hot-aisle and cold-aisle fabric containment systems for data centres across Florida. ASHRAE-compliant, fire-retardant, zero-downtime installation.',
      areaServed: 'Florida',
    };
    const tag = document.createElement('script');
    tag.type = 'application/ld+json';
    tag.id = 'datacenter-schema';
    tag.textContent = JSON.stringify(schema);
    document.head.appendChild(tag);
    return () => { const el = document.getElementById('datacenter-schema'); if (el) el.remove(); };
  }, []);

  return (
    <>
      <SEOHead
        title="Data Center Containment Systems Florida | ASHRAE-Compliant Fabric Panels | Marine Canvas Florida"
        description="Hot-aisle and cold-aisle fabric containment systems for data centres across Florida. ASHRAE A1-A4 compliant, fire-retardant, zero-downtime installation by master fabricators."
        canonical="https://marinecanvasflorida.com/industrial/clean-room-containment"
        ogUrl="https://marinecanvasflorida.com/industrial/clean-room-containment"
      />

      {/* Hero */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&auto=format&fit=crop&q=80"
          alt="Data center server racks with hot-aisle containment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/85" />
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.5) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-4">Adriatic Lux Industrial Division</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Data Center<br />
            <span className="text-yellow-400">Containment Systems</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            ASHRAE-compliant hot-aisle and cold-aisle fabric containment panels, custom-fabricated and installed in live environments with zero downtime. Serving data centres across Florida from Miami to Tampa.
          </p>
          <Link to="/contact">
            <div className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold rounded-lg transition-all cursor-pointer">
              Request a Data Center Consultation <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>

      {/* Services */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Containment Capabilities</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14">
            Every containment system is fabricated to the exact rack layout and ceiling height of your facility. No generic panels. No gaps. No thermal bypass.
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

      {/* Specs */}
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

      {/* Benefits */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Fabric Containment?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 bg-slate-800 border border-slate-700 rounded-lg p-4">
                <ChevronRight className="w-4 h-4 text-yellow-400 mt-1 shrink-0" />
                <p className="text-slate-300 text-sm">{b}</p>
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
          <h2 className="text-3xl font-bold text-white mb-4">Discuss Your Data Center Project</h2>
          <p className="text-slate-400 mb-8">All industrial enquiries receive a response within 48 hours. On-site surveys available across Florida.</p>
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

export default LargeFacility;
