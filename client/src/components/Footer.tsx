import React from 'react';
import { Link } from 'wouter';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Heart, Anchor } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-primary via-primary to-primary/95 text-white transition-colors duration-300 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Top Section */}
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Info */}
            <div className="group">
              <div className="flex items-center gap-2 mb-4">
                <Anchor className="w-6 h-6 text-accent group-hover:rotate-45 transition-transform duration-300" />
                <h3 className="font-bold text-xl">Marine Canvas Florida</h3>
              </div>
              <p className="text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                Premium marine canvas solutions combining ocean-tested quality with meticulous craftsmanship and exceptional service in Tarpon Springs.
              </p>
              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                <a
                  href="https://www.facebook.com/adriaticmarinecanvas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/adriatic_marinecanvas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com/channel/AdriaticLux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="group">
              <h3 className="font-bold text-lg mb-6 text-accent group-hover:text-yellow-200 transition-colors">Our Services</h3>
              <ul className="space-y-3 text-sm">
                {[
                  { label: 'Custom Bimini Tops', href: '/services/bimini-tops' },
                  { label: 'Boat Enclosures', href: '/services/enclosures' },
                  { label: 'Protective Covers', href: '/services/boat-covers' },
                  { label: 'Marine Upholstery', href: '/services/upholstery' },
                  { label: 'View All Projects', href: '/projects' },
                ].map((item, idx) => (
                  <li key={idx} className="transform hover:translate-x-1 transition-transform">
                    <Link to={item.href}>
                      <a className="hover:text-accent transition-colors opacity-90 hover:opacity-100">
                        {item.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="group">
              <h3 className="font-bold text-lg mb-6 text-accent group-hover:text-yellow-200 transition-colors">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'About Us', href: '/about' },
                  { label: 'Gallery', href: '/gallery' },
                  { label: 'Sailing With Us', href: '/sailing-with-us' },
                  { label: 'Blog', href: '/blog' },
                ].map((item, idx) => (
                  <li key={idx} className="transform hover:translate-x-1 transition-transform">
                    <Link to={item.href}>
                      <a className="hover:text-accent transition-colors opacity-90 hover:opacity-100">
                        {item.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="group">
              <h3 className="font-bold text-lg mb-6 text-accent group-hover:text-yellow-200 transition-colors">Contact Info</h3>
              <div className="space-y-4 text-sm">
                <a
                  href="https://maps.google.com/?q=495+Brady+Rd+Suite+J+Tarpon+Springs+FL+34689"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-accent transition-colors group/item"
                >
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover/item:animate-bounce" />
                  <span className="opacity-90 group-hover/item:opacity-100">
                    495 Brady Rd Suite J<br />
                    Tarpon Springs, FL 34689
                  </span>
                </a>
                <a
                  href="tel:+17272187157"
                  className="flex items-center gap-3 hover:text-accent transition-colors group/item"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 group-hover/item:animate-pulse" />
                  <span className="opacity-90 group-hover/item:opacity-100">(727) 218-7157</span>
                </a>
                <a
                  href="mailto:office@marinecanvasflorida.com"
                  className="flex items-center gap-3 hover:text-accent transition-colors group/item"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 group-hover/item:animate-pulse" />
                  <span className="opacity-90 group-hover/item:opacity-100 break-all">office@marinecanvasflorida.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Bottom Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm opacity-80">
            <p className="flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-secondary animate-pulse" /> for Florida's marine community
            </p>
            <p>&copy; {currentYear} Marine Canvas Florida. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/contact">
                <a className="hover:text-accent transition-colors">Privacy Policy</a>
              </Link>
              <Link to="/contact">
                <a className="hover:text-accent transition-colors">Terms of Service</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(253, 185, 19, 0.3); }
          50% { box-shadow: 0 0 30px rgba(253, 185, 19, 0.6); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
