import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import {
  FlaskConical,
  ShieldCheck,
  Package,
  Layers,
  Wrench,
  Sun,
  ArrowRight,
  Award,
  Anchor,
  Ruler,
} from 'lucide-react';

const Industrial = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const industrialServices = [
    {
      title: 'Softwall Cleanroom Systems',
      description:
        'ISO 14644-1 compliant softwall cleanroom panels and modular enclosure systems for pharmaceutical, semiconductor, and aerospace facilities. Fabricated to Class 1–8 cleanliness classifications with anti-static and chemical-resistant material options.',
      href: '/industrial/clean-room',
      Icon: FlaskConical,
    },
    {
      title: 'Contamination Control Curtains',
      description:
        'Precision-sewn PVC and vinyl curtain systems for environmental separation and contamination control. Engineered for positive and negative pressure differentials, with reinforced track mounting rated for continuous industrial use.',
      href: '/industrial/clean-room-curtains',
      Icon: ShieldCheck,
    },
    {
      title: 'Equipment & Machinery Covers',
      description:
        'Custom-fabricated protective covers for sensitive cleanroom equipment, CNC machinery, and data center hardware. Specified to exact dimensional tolerances with port access, grounding straps, and ESD-safe fabric options.',
      href: '/industrial/clean-room-equipment-covers',
      Icon: Package,
    },
    {
      title: 'Data Center Containment',
      description:
        'Hot-aisle and cold-aisle containment systems for data center thermal management. Flexible fabric panels and ceiling blanking solutions reduce cooling overhead and support ASHRAE thermal guidelines for Tier III and IV facilities.',
      href: '/industrial/clean-room-containment',
      Icon: Layers,
    },
    {
      title: 'Equipment Protection Systems',
      description:
        'Heavy-duty canvas and coated fabric protection systems for industrial equipment, outdoor machinery, and sensitive instrumentation. UV-stabilised, waterproof, and rated for Florida coastal environments.',
      href: '/industrial/equipment-protection',
      Icon: Wrench,
    },
    {
      title: 'Industrial Shading Solutions',
      description:
        'Engineered shade structures and solar control systems for corporate campuses, manufacturing yards, and loading facilities. Designed to ASCE 7 wind load standards with commercial-grade hardware and stainless steel fittings.',
      href: '/industrial/shading-solutions',
      Icon: Sun,
    },
  ];

  const credentials = [
    {
      Icon: Anchor,
      label: 'Yacht-Grade Precision',
      detail:
        'Every industrial fabrication is held to the same dimensional tolerance standards applied to superyacht canvas work — where a millimetre of error is not acceptable.',
    },
    {
      Icon: Ruler,
      label: 'Complex Rigging Expertise',
      detail:
          "Peck's background in technical rigging for large-format marine structures translates directly to complex industrial installations requiring load-bearing hardware and structural integration.",
    },
    {
      Icon: Award,
      label: 'Master Fabricator',
      detail:
        'Decades of hands-on fabrication across marine, commercial, and industrial sectors. No subcontracting. Every project is measured, cut, and installed by the same master craftsman.',
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">

      {/* ── Hero Section with Blueprint Grid Overlay ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[480px] bg-cover bg-center mb-16 overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&h=480&fit=crop)',
        }}
      >
        {/* Dark gradient base */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/50" />

        {/* Blueprint grid overlay — pure CSS, no external assets */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(96,165,250,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.6) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
          aria-hidden="true"
        />

        {/* Blueprint corner marks */}
        <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-blue-400/40 opacity-60" aria-hidden="true" />
        <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-blue-400/40 opacity-60" aria-hidden="true" />
        <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-blue-400/40 opacity-60" aria-hidden="true" />
        <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-blue-400/40 opacity-60" aria-hidden="true" />

        <div className="relative z-10 h-full flex flex-col justify-center items-start p-8 container mx-auto">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-blue-300 text-sm font-semibold tracking-widest uppercase mb-3"
          >
            Commercial &amp; Industrial Fabrication
          </motion.span>
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg leading-tight"
          >
            Industrial Hub
          </motion.h1>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-white/85 mt-4 drop-shadow-md max-w-2xl leading-relaxed"
          >
            Precision canvas fabrication for Florida's most demanding controlled environments — from ISO-classified cleanrooms to Tier IV data center containment systems.
          </motion.p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4">

        {/* ── Introduction ── */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20 text-center"
        >
          <p className="text-xl text-foreground/80 leading-relaxed">
            Marine Canvas Florida delivers custom canvas and coated fabric fabrication for commercial, industrial, and controlled-environment applications across Florida. Capabilities span ISO 14644-compliant softwall cleanroom systems, data center hot-aisle and cold-aisle containment, precision equipment covers, and engineered shade structures. Client sectors include pharmaceutical, biotech, aerospace, defense, semiconductor, and technology infrastructure. All fabrication is executed to commercial specification and subject to dimensional verification before installation.
          </p>
        </motion.div>

        {/* ── Services Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
        >
          {industrialServices.map((service, idx) => (
            <Link key={idx} to={service.href}>
              <motion.div
                variants={itemVariants}
                className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-border/50 h-full"
              >
                {/* Icon panel — blueprint tint on hover */}
                <div className="h-40 bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center group-hover:from-primary/80 group-hover:to-secondary/80 transition-all duration-500 relative overflow-hidden">
                  {/* Subtle grid in card header */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                    aria-hidden="true"
                  />
                  <service.Icon className="w-14 h-14 text-blue-300 group-hover:text-white transition-colors duration-300 relative z-10" strokeWidth={1.5} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="text-primary font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    View Specification <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* ── The Master's Touch ── */}
        <motion.section
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          {/* Section header with blueprint accent line */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-3xl font-bold text-foreground text-center whitespace-nowrap">
              The Master's Touch
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-foreground/75 leading-relaxed">
              Peck brings a standard of craft to industrial fabrication that is rarely found outside the superyacht industry. Trained in the exacting tolerances of large-format marine canvas — where structural integrity, dimensional precision, and material performance are non-negotiable — that same discipline is applied to every industrial project, regardless of scale.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {credentials.map((cred, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-card border border-border/50 rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <cred.Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{cred.label}</h3>
                <p className="text-sm text-foreground/65 leading-relaxed">{cred.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ── Corporate Inquiry CTA ── */}
        <motion.section
          initial={{ scale: 0.97, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-12 text-center text-white shadow-xl overflow-hidden"
        >
          {/* Blueprint grid on CTA */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                'linear-gradient(rgba(96,165,250,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.8) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
            aria-hidden="true"
          />
          <div className="relative z-10">
            <span className="text-blue-300 text-xs font-semibold tracking-widest uppercase mb-3 block">
              Enterprise &amp; Government Inquiries
            </span>
            <h2 className="text-3xl font-bold mb-4">Corporate &amp; Industrial Inquiries</h2>
            <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto leading-relaxed">
              Submit facility specifications, CAD drawings, or project briefs directly. All industrial inquiries receive a written scope and material specification within 48 hours.
            </p>
            <a
              href="mailto:office@marinecanvasflorida.com"
              className="inline-flex items-center gap-3 px-10 py-4 bg-white text-slate-800 font-bold rounded-lg hover:bg-blue-50 transition-all shadow-lg"
            >
              office@marinecanvasflorida.com
            </a>
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default Industrial;
