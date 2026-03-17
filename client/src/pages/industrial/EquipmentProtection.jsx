import { Link } from 'wouter';
import { useEffect } from 'react';
import SEOHead from '../../components/SEOHead';
import AdriaticLuxHeritage from '../../components/AdriaticLuxHeritage';
import MasterFabricator from '../../components/MasterFabricator';
import { Package, ShieldCheck, Wrench, Sun, ArrowRight, ChevronRight } from 'lucide-react';

const specs = [
  { label: 'Materials', value: 'Sunbrella, WeatherMax, Nylon 300D/600D, PVC-coated polyester' },
  { label: 'UV Resistance', value: 'UV-stabilised to AATCC 16 standard' },
  { label: 'Water Resistance', value: 'Hydrostatic head > 1500mm' },
  { label: 'Temperature Range', value: '-20°C to +80°C operational' },
  { label: 'Fasteners', value: 'Marine-grade YKK zippers, DOT snaps, stainless grommets' },
  { label: 'Customisation', value: 'Exact dimensional fit, cable pass-throughs, ventilation panels' },
  { label: 'Branding', value: 'Embroidery and heat-transfer logo application available' },
  { label: 'Lead Time', value: '1–2 weeks from approved measurements' },
];

const applications = [
  'CNC machining centres and precision tools',
  'Outdoor generator and compressor sets',
  'Electrical switchgear and transformer covers',
  'Sensitive instrumentation and test equipment',
  'Cleanroom equipment during transport',
  'Offshore and marine industrial plant',
  'Agricultural and construction machinery',
  'Data centre hardware during relocation',
];

const services = [
  {
    icon: <Package className="w-7 h-7 text-yellow-400" />,
    title: 'Precision-Fit Covers',
    desc: 'Every cover is measured and fabricated to the exact dimensions of your equipment. Peck personally takes measurements on-site, ensuring zero gaps, zero pooling, and a professional finish.',
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-yellow-400" />,
    title: 'Multi-Environment Protection',
    desc: 'UV-stabilised, waterproof, and chemical-resistant fabrics protect equipment from Florida&#39;s harsh coastal environment — salt air, UV radiation, tropical rain, and extreme heat.',
  },
  {
    icon: <Wrench className="w-7 h-7 text-yellow-400" />,
    title: 'Functional Accessories',
    desc: 'Zippers, Velcro panels, cable pass-throughs, ventilation grilles, and tie-down loops are integrated at the design stage — not added as afterthoughts.',
  },
  {
    icon: <Sun className="w-7 h-7 text-yellow-400" />,
    title: 'Yacht-Grade Material Standards',
    desc: 'We use the same Sunbrella and WeatherMax fabrics trusted on 120ft luxury yachts. If it can survive a transatlantic crossing, it can protect your industrial equipment.',
  },
];

export default function EquipmentProtection() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Industrial Equipment Protection Covers — Florida',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Marine Canvas Florida | Adriatic Lux',
        address: { '@type': 'PostalAddress', addressLocality: 'Tarpon Springs', addressRegion: 'FL' },
        telephone: '+17272187157',
      },
      description: 'Custom heavy-duty canvas and coated fabric covers for industrial equipment, outdoor machinery, and sensitive instrumentation across Florida.',
      areaServed: 'Florida',
    };
    const tag = document.createElement('script');
    tag.type = 'application/ld+json';
    tag.id = 'equip-protection-schema';
    tag.textContent = JSON.stringify(schema);
    document.head.appendChild(tag);
    return () => { const el = document.getElementById('equip-protection-schema'); if (el) el.remove(); };
  }, []);

  return (
    <>
      <SEOHead
        title="Industrial Equipment Protection Covers Florida | Yacht-Grade Canvas | Marine Canvas Florida"
        description="Custom precision-fit equipment covers for industrial machinery, CNC tools, generators, and sensitive instrumentation across Florida. Yacht-grade Sunbrella and WeatherMax fabrics."
        canonical="https://marinecanvasflorida.com/industrial/equipment-protection"
        ogUrl="https://marinecanvasflorida.com/industrial/equipment-protection"
      />

      {/* Hero */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1600&auto=format&fit=crop&q=80"
          alt="Industrial CNC machinery in a precision manufacturing facility"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80" />
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.5) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-4">Adriatic Lux Industrial Division</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Industrial Equipment<br />
            <span className="text-yellow-400">Protection Systems</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            Precision-fit canvas and coated fabric covers for industrial machinery, outdoor plant, and sensitive instrumentation. Fabricated to exact dimensions using yacht-grade materials. Serving Florida statewide.
          </p>
          <Link to="/contact">
            <div className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold rounded-lg transition-all cursor-pointer">
              Request Equipment Cover Quote <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>

      {/* Services */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Our Equipment Cover Services</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14">
            From a single CNC machine to a campus-wide installation, every cover is measured, fabricated, and fitted on-site by Peck and his team.
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
          <h2 className="text-3xl font-bold text-white text-center mb-12">Material & Technical Specifications</h2>
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
          <h2 className="text-3xl font-bold text-white text-center mb-12">Equipment & Applications</h2>
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
          <h2 className="text-3xl font-bold text-white mb-4">Protect Your Equipment Investment</h2>
          <p className="text-slate-400 mb-8">Send us your equipment dimensions or invite us on-site for a free measurement survey. Quotes returned within 48 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <div className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold rounded-lg transition-all cursor-pointer">
                Get a Free Quote <ArrowRight className="w-5 h-5" />
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
