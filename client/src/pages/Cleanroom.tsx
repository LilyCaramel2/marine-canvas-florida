import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

const Cleanroom = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-80 bg-cover bg-center mb-12"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=400&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        <div className="relative z-10 h-full flex flex-col justify-center items-start p-8 container mx-auto">
          <motion.h1 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg"
          >
            Cleanroom Canvas Cooling Protection
          </motion.h1>
          <motion.p 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-white/90 mt-4 drop-shadow-md max-w-2xl"
          >
            ISO 14644-1 compliant softwall systems for controlled environments.
          </motion.p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <section className="bg-card rounded-xl p-8 shadow-lg border border-border/50">
              <h2 className="text-3xl font-bold text-foreground mb-6">Controlled Environment Solutions</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Marine Canvas Florida fabricates softwall cleanroom canvas systems for controlled environment applications. Canvas panels are specified to meet ISO 14644-1 through ISO 14644-9 cleanroom classification standards.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Materials are selected for low particle generation, chemical resistance and dimensional stability under controlled temperature conditions. Fabrication is conducted under contamination control protocols.
              </p>
            </section>

            <section className="bg-card rounded-xl p-8 shadow-lg border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-6">Implementation & Compliance</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 border-l-4 border-primary bg-background/50 rounded-r-lg">
                  <h4 className="font-bold text-lg mb-2 text-primary">Zero-Disruption Install</h4>
                  <p className="text-foreground/70 text-sm">
                    Installation is carried out within live cleanroom environments without disrupting ongoing operations.
                  </p>
                </div>
                <div className="p-6 border-l-4 border-primary bg-background/50 rounded-r-lg">
                  <h4 className="font-bold text-lg mb-2 text-primary">Formal Bid Support</h4>
                  <p className="text-foreground/70 text-sm">
                    Documentation available to support formal contractor bid submissions including material data sheets and compliance references.
                  </p>
                </div>
              </div>
            </section>
          </motion.div>

          {/* Sidebar / Quick Contact */}
          <motion.aside 
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-primary rounded-xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Request Specs</h3>
              <p className="opacity-90 mb-6">
                Get full technical documentation for your cleanroom project.
              </p>
              <a 
                href="mailto:office@marinecanvasflorida.com" 
                className="block w-full text-center py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Contact Specialist
              </a>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-lg border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-4">Certifications</h3>
              <ul className="space-y-3">
                {['ISO 14644-1 to 14644-9', 'Particle Control Protocols', 'Chemical Resistance Specs', 'Dimensional Stability Certs'].map((cert, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-foreground/70">
                    <span className="text-primary font-bold">✓</span> {cert}
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </div>

        {/* Navigation Back */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link to="/industrial" className="text-primary font-bold hover:underline inline-flex items-center gap-2">
            ← Back to Industrial Hub
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Cleanroom;
