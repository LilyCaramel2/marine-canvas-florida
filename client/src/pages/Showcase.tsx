import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

const Showcase = () => {
  return (
    <>
      <SEOHead
      title="Data Center Containment Systems Miami & Florida | Hot-Aisle Cold-Aisle Canvas Solutions"
      description="Flexible fabric hot-aisle and cold-aisle containment systems for data centers across Miami, Tampa, and Florida. ASHRAE-compliant thermal management for Tier III and IV facilities."
      canonical="https://marinecanvasflorida.com/industrial/clean-room-containment"
      ogUrl="https://marinecanvasflorida.com/industrial/clean-room-containment"
    />
    <div className="min-h-screen bg-background pt-24 pb-12">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-96 bg-cover bg-center mb-12"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        <div className="relative z-10 h-full flex flex-col justify-center items-start p-8 container mx-auto">
          <motion.h1 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg"
          >
            Corporate Project Showcase
          </motion.h1>
          <motion.p 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-white/90 mt-4 drop-shadow-md max-w-2xl"
          >
            Portfolio of successful industrial and commercial canvas fabrication projects.
          </motion.p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4">
        {/* Main Content */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <p className="text-xl text-foreground/80 leading-relaxed">
            Marine Canvas Florida has completed canvas fabrication projects for leading companies across Florida's pharmaceutical, aerospace, defense, and technology sectors. Our portfolio demonstrates expertise in precision cleanroom systems, large-scale facility installations, and specialized industrial applications. Each project reflects our commitment to quality fabrication, on-time delivery, and seamless integration with client operations. References and detailed project information are available to qualified contractors and facility managers.
          </p>
        </motion.div>

        {/* Portfolio Callout */}
        <motion.section 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-secondary rounded-xl p-12 text-center text-white shadow-xl mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">View Our Project Portfolio</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Request detailed information about our completed projects and client references.
          </p>
          <a 
            href="mailto:office@marinecanvasflorida.com" 
            className="inline-flex items-center gap-3 px-10 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-white/20"
          >
            office@marinecanvasflorida.com
          </a>
        </motion.section>

        {/* Back Link */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/industrial">
            <motion.div 
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors cursor-pointer"
              whileHover={{ x: -4 }}
            >
              <span>←</span> Back to Industrial Solutions
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default Showcase;
