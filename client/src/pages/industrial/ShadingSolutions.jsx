import { Link } from 'wouter';
import { useEffect } from 'react';
import SEOHead from '../../components/SEOHead';
import AdriaticLuxHeritage from '../../components/AdriaticLuxHeritage';
import MasterFabricator from '../../components/MasterFabricator';
import { Sun, ShieldCheck, Wrench, Layers, ArrowRight, ChevronRight } from 'lucide-react';

const specs = [
  { label: 'Wind Load Design', value: 'ASCE 7-22 compliant structural calculations' },
  { label: 'Shade Fabric', value: 'Serge Ferrari Soltis, Sunbrella, Tempotest (Italy)' },
  { label: 'UV Reduction', value: 'Up to 97% UV blockage (ASTM D4329)' },
  { label: 'Frame Material', value: 'Hot-dip galvanised or powder-coated steel' },
  { label: 'Span Capability', value: 'Up to 30m clear span without intermediate supports' },
  { label: 'Anchoring', value: 'Concrete footings, roof penetrations, or ballasted frames' },
  { label: 'Maintenance', value: 'Annual inspection and re-tensioning service available' },
  { label: 'Warranty', value: '5-year fabric warranty, 10-year frame warranty' },
];

const applications = [
  'Corporate campus outdoor areas',
  'Manufacturing yard and loading bays',
  'Outdoor equipment storage and staging',
  'Data centre cooling tower shading',
  'Parking structures and car parks',
  'Sports and recreation facilities',
  'Hospitality and resort terraces',
  'Agricultural and nursery operations',
];

const services = [
  {
    icon: <Sun className="w-7 h-7 text-yellow-400" />,
    title: 'Engineered Shade Structures',
    desc: 'Every shade structure is engineered to ASCE 7 wind load standards for Florida&#39;s hurricane-prone environment. Structural calculations are provided with every installation.',
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-yellow-400" />,
    title: 'Hurricane-Rated Fabric Systems',
    desc: 'Peck&#39;s transatlantic experience means he understands wind loads at a visceral level. Every shade structure is tensioned and anchored to withstand sustained winds and tropical storm conditions.',
  },
  {
    icon: <Layers className="w-7 h-7 text-yellow-400" />,
    title: 'Solar Control & Thermal Management',
    desc: 'Serge Ferrari Soltis and Tempotest fabrics reduce solar gain by up to 97%, significantly reducing cooling loads for adjacent facilities and improving outdoor worker comfort.',
  },
  {
    icon: <Wrench className="w-7 h-7 text-yellow-400" />,
    title: 'Custom Fabrication & Installation',
    desc: 'From a single cantilever shade sail to a multi-bay tensile structure, every project is designed, fabricated, and installed by the Adriatic Lux team. No subcontractors. No compromises.',
  },
];

export default function ShadingSolutions() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Industrial Shading Solutions — Florida',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Marine Canvas Florida | Adriatic Lux',
        address: { '@type': 'PostalAddress', addressLocality: 'Tarpon Springs', addressRegion: 'FL' },
        telephone: '+17272187157',
      },
      description: 'Engineered shade structures and solar control systems for corporate campuses, manufacturing yards, and industrial facilities across Florida. ASCE 7 compliant.',
      areaServed: 'Florida',
    };
    const tag = document.createElement('script');
    tag.type = 'application/ld+json';
    tag.id = 'shading-schema';
    tag.textContent = JSON.stringify(schema);
    document.head.appendChild(tag);
    return () => { const el = document.getElementById('shading-schema'); if (el) el.remove(); };
  }, []);

  return (
    <>
      <SEOHead
        title="Industrial Shading Solutions Florida | ASCE 7 Shade Structures | Marine Canvas Florida"
        description="Engineered shade structures and solar control systems for corporate campuses, manufacturing yards, and industrial facilities across Florida. ASCE 7 wind load compliant, hurricane-rated."
        canonical="https://marinecanvasflorida.com/industrial/shading-solutions"
        ogUrl="https://marinecanvasflorida.com/industrial/shading-solutions"
      />

      {/* Hero */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&auto=format&fit=crop&q=80"
          alt="Large tensile shade structure over an industrial facility"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80" />
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.5) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-4">Adriatic Lux Industrial Division</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Industrial Shading<br />
            <span className="text-yellow-400">Solutions</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            Engineered tensile shade structures and solar control systems for corporate campuses, manufacturing yards, and industrial facilities across Florida. Designed to ASCE 7 wind load standards and hurricane-rated.
          </p>
          <Link to="/contact">
            <div className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold rounded-lg transition-all cursor-pointer">
              Request a Shading Consultation <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>

      {/* Services */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Shading Capabilities</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14">
            From shade sails to large-span tensile structures, every installation is engineered for Florida&#39;s climate and fabricated to last.
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

      {/* Applications */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Applications</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {applications.map((a, i) => (
              <div key={i} className="bg-slate-800 border border-slate-700 rounded-lg p-4 text-sm text-slate-300 text-center">{a}</div>
            ))}
          </div>
        </div>
      </section>

      <AdriaticLuxHeritage variant="industrial" />
      <MasterFabricator variant="industrial" />

      {/* CTA */}
      <section className="py-20 bg-slate-900 border-t border-slate-700">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Plan Your Shading Project</h2>
          <p className="text-slate-400 mb-8">Send us your site plan or invite us on-site for a free survey. Structural calculations and fabric samples provided at no charge.</p>
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
}
