import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../lib/animations';

const Services = () => {
  const serviceCards = [
    {
      title: "Custom Bimini Tops & T-Tops",
      description: "Precision-crafted for superior shade and sun protection for yachts and fishing boats, using premium Sunbrella® fabrics and durable 316 stainless steel.",
      link: "/services/bimini-tops",
    },
    {
      title: "Full Boat Enclosures",
      description: "Tailored weatherproofing from wind, rain, and spray, extending your boating season with crystal-clear Strataglass® or O'Sea vinyl and robust YKK® zippers.",
      link: "/services/enclosures",
    },
    {
      title: "Protective Boat Covers",
      description: "Durable, custom-fit covers designed to safeguard your vessel from damaging UV rays, debris, and harsh Florida weather, fabricated with high-performance marine fabrics.",
      link: "/services/boat-covers",
    },
    {
      title: "Marine Upholstery",
      description: "Revitalize your boat's interior with durable, mildew-resistant marine-grade upholstery, custom-designed for comfort and aesthetic, using SolarFix® thread.",
      link: "/services/upholstery",
    },
    {
      title: "Marine Canvas Repair & Restitch",
      description: "Expert repair and restitching services to extend the life of your existing marine canvas, restoring functionality and appearance with durable materials and craftsmanship.",
      link: "/contact",
    },
    {
      title: "Dodgers & Sprayhoods",
      description: "Custom-designed dodgers and sprayhoods offering superior protection from wind, spray, and sun, enhancing comfort in the cockpit with robust marine fabrics.",
      link: "/contact",
    }
  ];

  return (
    <section id="services-grid" className="py-24 bg-background text-text transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-semibold text-4xl md:text-5xl lg:text-6xl text-center text-primary mb-16 leading-tight"
        >
          Our Premium Marine Canvas & Upholstery Solutions
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base text-lg md:text-xl text-center text-text mb-16 max-w-4xl mx-auto leading-relaxed"
        >
          From unparalleled sun protection to complete weatherproofing and interior comfort, Marine Canvas Florida offers a full spectrum of custom solutions to protect and enhance your vessel across the Tampa Bay area, including Tarpon Springs and St. Petersburg.
        </motion.p>
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {serviceCards.map((service, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              className="bg-card p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 text-center flex flex-col items-center justify-between border border-border hover:scale-105 hover:border-accent"
            >
              <h3 className="font-medium text-2xl text-primary mb-4">{service.title}</h3>
              <p className="text-base text-text flex-grow mb-6 leading-relaxed">{service.description}</p>
              <Link to={service.link} className="btn-primary inline-block hover:shadow-lg transition-all duration-300">
                Learn More →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
