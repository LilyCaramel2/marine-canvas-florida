import React from 'react';
import { Award, Anchor, Shield, Wrench, Quote } from 'lucide-react';

// ── Types ──────────────────────────────────────────────────────────────────
interface MasterFabricatorProps {
  /**
   * 'about'      — Full two-column layout with large photo, full bio paragraphs,
   *                credential badges, and pull-quote. Used on the About page.
   * 'industrial' — Compact horizontal layout with smaller photo, condensed bio,
   *                and credential pills. Used on the Industrial Hub.
   */
  variant?: 'about' | 'industrial';
}

// ── Credential data ────────────────────────────────────────────────────────
const CREDENTIALS = [
  {
    icon: Anchor,
    label: '30+ Years',
    detail: 'Marine & Industrial Fabrication',
  },
  {
    icon: Award,
    label: 'Yacht-Grade Precision',
    detail: 'Superyacht Rigging Background',
  },
  {
    icon: Shield,
    label: 'ISO-Compliant',
    detail: 'Cleanroom & Contamination Control',
  },
  {
    icon: Wrench,
    label: 'Complex Rigging',
    detail: 'Certified Rigging & Tensile Systems',
  },
];

// ── Component ──────────────────────────────────────────────────────────────
const MasterFabricator: React.FC<MasterFabricatorProps> = ({ variant = 'about' }) => {
  // ── FULL LAYOUT (About page) ─────────────────────────────────────────────
  if (variant === 'about') {
    return (
      <section className="mb-16 scroll-mt-24" id="master-fabricator">
        {/* Section header */}
        <div className="mb-10 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary/70 mb-2">
            The Craftsman Behind the Work
          </span>
          <h2 className="text-4xl font-bold text-foreground">
            Meet Peck — Master Fabricator &amp; Founder
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-primary" aria-hidden="true" />
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Photo + credential badges */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-full max-w-sm mx-auto">
              <img
                src="/images/team/peck-filipovic.png"
                alt="Peck Filipovic — Master Fabricator and Founder of Marine Canvas Florida"
                className="w-full rounded-2xl shadow-2xl object-cover aspect-[4/5]"
                loading="lazy"
              />
              {/* Name plate overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl px-6 py-5">
                <p className="text-white font-bold text-xl leading-tight">Peck Filipovic</p>
                <p className="text-white/75 text-sm">Master Fabricator &amp; Founder</p>
                <p className="text-white/60 text-xs mt-1">Marine Canvas Florida · Tarpon Springs, FL</p>
              </div>
            </div>

            {/* Credential badges */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
              {CREDENTIALS.map((cred) => (
                <div
                  key={cred.label}
                  className="flex flex-col items-center gap-1 bg-card border border-border rounded-xl p-4 shadow-sm text-center"
                >
                  <cred.icon className="w-6 h-6 text-primary mb-1" strokeWidth={1.5} />
                  <span className="text-sm font-bold text-foreground leading-tight">{cred.label}</span>
                  <span className="text-xs text-foreground/55 leading-snug">{cred.detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bio + pull-quote */}
          <div className="flex flex-col gap-6">
            <div className="space-y-5 text-foreground/80 leading-relaxed text-base">
              <p>
                Peck Filipovic grew up in Tarpon Springs, Florida — a city whose identity is inseparable from the sea. Shaped by the Greek sponge-diving heritage that built this community, Peck developed an early understanding of materials under stress: how canvas behaves in salt air, how rigging holds under load, and why precision is not a preference but a requirement when lives depend on your work.
              </p>
              <p>
                Over three decades, Peck refined his craft across the full spectrum of marine fabrication — from bimini tops and full enclosures on coastal powerboats to complex tensile rigging systems aboard superyachts. It is this yacht-grade discipline — the insistence on zero-tolerance seam work, correct load distribution, and materials specified to the environment — that sets Marine Canvas Florida apart from every competitor in the region.
              </p>
              <p>
                The same principles that govern a superyacht's rigging now govern Marine Canvas Florida's industrial division. When a data center requires hot-aisle containment that maintains ASHRAE thermal tolerances, or a pharmaceutical facility demands softwall cleanroom partitions compliant with ISO 14644-1 Class 5, Peck applies the same methodology: understand the specification, select the correct material, fabricate to zero-defect standard, and install with the care of someone who knows the cost of failure.
              </p>
              <p>
                Every project that leaves the Brady Road workshop carries Peck's personal standard. That is not a marketing statement — it is the operating principle of a craftsman who has never separated his name from his work.
              </p>
            </div>

            {/* Pull-quote */}
            <blockquote className="relative border-l-4 border-primary pl-6 py-2">
              <Quote className="absolute -top-2 -left-1 w-8 h-8 text-primary/20" aria-hidden="true" />
              <p className="text-lg font-medium text-foreground/90 italic leading-relaxed">
                "The standard I hold on a superyacht is the same standard I hold in a cleanroom. The material changes. The discipline does not."
              </p>
              <footer className="mt-3 text-sm text-foreground/55 not-italic">
                — Peck Filipovic, Master Fabricator &amp; Founder
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    );
  }

  // ── COMPACT LAYOUT (Industrial Hub) ─────────────────────────────────────
  return (
    <section
      className="mb-10 bg-slate-900 rounded-xl overflow-hidden shadow-xl border border-slate-700 scroll-mt-24"
      id="master-fabricator-industrial"
    >
      {/* Blueprint grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(96,165,250,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.8) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col md:flex-row gap-0">

        {/* Photo column */}
        <div className="md:w-64 flex-shrink-0">
          <img
            src="/images/team/peck-filipovic.png"
            alt="Peck Filipovic — Master Fabricator"
            className="w-full h-56 md:h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Content column */}
        <div className="flex-1 p-8 flex flex-col justify-between gap-6">
          <div>
            <span className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-2 block">
              The Craftsman Behind the Specification
            </span>
            <h3 className="text-2xl font-bold text-white mb-1">Peck Filipovic</h3>
            <p className="text-blue-300 text-sm font-medium mb-4">Master Fabricator &amp; Founder — Marine Canvas Florida</p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Thirty years of marine and industrial fabrication — from superyacht rigging in Tarpon Springs to ISO 14644-compliant cleanroom systems across Florida. Peck brings yacht-grade zero-tolerance standards to every industrial project: correct material specification, precision seam work, and installation accountability that matches the demands of Tier III data centers, pharmaceutical cleanrooms, and government facilities.
            </p>
          </div>

          {/* Credential pills */}
          <div className="flex flex-wrap gap-2">
            {CREDENTIALS.map((cred) => (
              <div
                key={cred.label}
                className="flex items-center gap-2 bg-slate-800 border border-slate-600 rounded-full px-3 py-1.5"
              >
                <cred.icon className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" strokeWidth={2} />
                <span className="text-xs font-semibold text-slate-200">{cred.label}</span>
              </div>
            ))}
          </div>

          {/* Pull-quote */}
          <blockquote className="border-l-2 border-blue-500 pl-4">
            <p className="text-slate-300 text-sm italic leading-relaxed">
              "The standard I hold on a superyacht is the same standard I hold in a cleanroom. The material changes. The discipline does not."
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default MasterFabricator;
