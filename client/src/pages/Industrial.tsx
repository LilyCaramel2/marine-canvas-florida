import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

const Industrial = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const industrialServices = [
    {
      title: 'Cleanroom Canvas Cooling Protection',
      description: 'Softwall cleanroom canvas systems specified to ISO 14644 standards for pharmaceutical and aerospace facilities.',
      href: '/industrial/cleanroom',
      icon: '🔬'
    },
    {
      title: 'Large Facility and Campus Projects',
      description: 'Custom shade structures, equipment covers, and campus-wide canvas installations for large corporate facilities.',
      href: '/industrial/large-facility',
      icon: '🏢'
    },
    {
      title: 'Corporate Project Showcase',
      description: 'View our portfolio of successful industrial and commercial canvas fabrication projects across Florida.',
      href: '/industrial/showcase',
      icon: '📊'
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-96 bg-cover bg-center mb-12"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&h=400&fit=crop)',
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
            Industrial & Commercial
          </motion.h1>
          <motion.p 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-white/90 mt-4 drop-shadow-md max-w-2xl"
          >
            Precision canvas fabrication for Florida's most demanding industrial environments.
          </motion.p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4">
        {/* Introduction */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <p className="text-xl text-foreground/80 leading-relaxed">
            Marine Canvas Florida provides custom canvas fabrication for commercial, industrial and controlled environment applications across Florida. Services include precision fabrication for cleanroom cooling protection, large facility shade structures, equipment covers and corporate campus installations. Clients include pharmaceutical, biotech, aerospace, defense and technology sector facilities. All fabrication meets commercial specification requirements.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {industrialServices.map((service, idx) => (
            <Link key={idx} to={service.href}>
              <motion.a 
                variants={itemVariants}
                className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-border/50"
              >
                <div className="h-40 bg-gradient-to-br from-primary/90 to-secondary/90 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-500">
                  {service.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="text-primary font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    View Solution <span>→</span>
                  </div>
                </div>
              </motion.a>
            </Link>
          ))}
        </motion.div>

        {/* Contact/Inquiry Section */}
        <motion.section 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-secondary rounded-xl p-12 text-center text-white shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-4">Corporate & Industrial Inquiries</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Discuss your facility requirements with our commercial fabrication specialists.
          </p>
          <a 
            href="mailto:office@marinecanvasflorida.com" 
            className="inline-flex items-center gap-3 px-10 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-white/20"
          >
            office@marinecanvasflorida.com
          </a>
        </motion.section>
      </div>
    </div>
  );
};

export default Industrial;
