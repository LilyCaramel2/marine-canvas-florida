import React from 'react';
import { Award, Users, Zap, Heart } from 'lucide-react';
import { Link } from 'wouter';

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      {/* Hero Section */}
      <div
        className="relative w-full h-96 bg-cover bg-center mb-12"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=400&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="relative z-10 h-full flex flex-col justify-center items-start p-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">About Marine Canvas Florida</h1>
          <p className="text-xl text-white/90 mt-4 drop-shadow-md max-w-2xl">
            Premium marine canvas solutions crafted with passion and precision
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        {/* Company Story */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-8">Our Story: Ocean-Tested Quality, Rooted in Florida</h2>
          <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
            <p className="text-lg">
              At Marine Canvas Florida, our craft is born from a lifelong love of the sea and extensive real-world experience. Our journey in marine canvas and upholstery began over <strong>two decades ago in 2005</strong>, with bespoke solutions crafted across the challenging waters of the Mediterranean. This deep-rooted passion and meticulous craftsmanship, initially under the banner of <strong>Adriatic Lux</strong>, laid the foundation for what Marine Canvas Florida is today.
            </p>
            <p className="text-lg">
              In <strong>2014</strong>, we proudly established our workshop in <strong>Tarpon Springs, Florida</strong>, bringing our unique blend of European artistry and ocean-tested resilience to the Sunshine State. Our expertise isn't just theoretical; it's forged through direct experience, including the demanding task of completely refurbishing our own sailboat, Envera, for a <strong>transatlantic crossing</strong>. This journey, braving everything from intense UV rays to unexpected storms, taught us the true value of canvas that performs flawlessly when it matters most.
            </p>
            <p className="text-lg">
              We are more than just marine canvas fabricators; we are <strong>sailors serving sailors</strong>. This philosophy drives every project we undertake, whether it's a custom bimini for a fishing boat or a full enclosure for a luxury yacht. We understand firsthand how crucial reliable, well-crafted marine canvas and upholstery are – not just for comfort and aesthetics, but for the safety and longevity of your vessel. We proudly serve the entire Tampa Bay area, including St. Petersburg.
            </p>
            <p className="text-lg">
              Our commitment extends to using only the highest-grade marine materials like <strong>Sunbrella®</strong>, WeatherMax®, Tempotest®, and Serge Ferrari®, coupled with advanced fabrication techniques such as <strong>digital scanning, CAD design, and CNC cutting</strong>. From robust <strong>SolarFix®</strong> and <strong>Tenara®</strong> threads to corrosion-resistant <strong>316 stainless steel hardware</strong> and reliable <strong>YKK® marine-grade zippers</strong>, every component is chosen for its superior performance in Florida's demanding climate. When you choose Marine Canvas Florida, you're choosing unparalleled quality, born from passion and proven on the open ocean.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Award,
                title: 'Excellence',
                description: 'We never compromise on quality. Every stitch, every seam, and every detail reflects our commitment to excellence.',
              },
              {
                icon: Users,
                title: 'Customer Focus',
                description: 'Your satisfaction is our priority. We listen, understand, and deliver solutions tailored to your specific needs.',
              },
              {
                icon: Zap,
                title: 'Innovation',
                description: 'We stay ahead of industry trends, using the latest materials and techniques to provide cutting-edge solutions.',
              },
              {
                icon: Heart,
                title: 'Passion',
                description: 'We love what we do. Our passion for marine craftsmanship shows in every project we complete.',
              },
            ].map((value, idx) => (
              <div key={idx} className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                <value.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-8">Why Choose Us?</h2>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 border-l-4 border-primary">
            <ul className="space-y-4 text-foreground/80">
              <li className="flex items-start gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <span><strong>Premium Materials:</strong> We use only the highest quality Sunbrella fabrics and marine-grade hardware</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <span><strong>Expert Craftsmanship:</strong> Our team has decades of combined experience in marine canvas work</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <span><strong>Custom Solutions:</strong> Every project is tailored to your specific vessel and requirements</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <span><strong>Local Expertise:</strong> Based in Tarpon Springs with deep knowledge of Florida marine conditions</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <span><strong>Comprehensive Warranty:</strong> We stand behind our work with industry-leading warranties</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary font-bold text-xl">✓</span>
                <span><strong>Exceptional Service:</strong> From consultation to installation, we provide white-glove service</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Team Expertise */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-8">Our Expertise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { number: '20+', label: 'Years of Experience' },
              { number: '1000+', label: 'Projects Completed' },
              { number: '100%', label: 'Customer Satisfaction' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-card rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-secondary rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss your marine canvas needs and create a solution that exceeds your expectations.
          </p>
          <Link to="/contact">
            <a className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors">
              Request a Free Consultation
            </a>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;
