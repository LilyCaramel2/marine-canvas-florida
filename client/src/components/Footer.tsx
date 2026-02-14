import React from 'react';
import { Link } from 'wouter';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16 transition-colors duration-300">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        {/* Brand Info */}
        <div>
          <h3 className="font-semibold text-xl text-white mb-4">Marine Canvas Florida</h3>
          <p className="text-base text-sm leading-relaxed opacity-90">
            Your trusted partner for premium marine canvas solutions across Florida. Combining ocean-tested quality with meticulous craftsmanship and exceptional service in Tarpon Springs.
          </p>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="font-semibold text-xl text-white mb-4">Our Services</h3>
          <ul className="space-y-3 text-sm text-base">
            <li><Link to="/services/bimini-tops" className="hover:text-brand-sail-yellow transition-colors duration-200">Custom Bimini Tops & T-Tops</Link></li>
            <li><Link to="/services/enclosures" className="hover:text-brand-sail-yellow transition-colors duration-200">Full Boat Enclosures</Link></li>
            <li><Link to="/services/boat-covers" className="hover:text-brand-sail-yellow transition-colors duration-200">Protective Boat Covers</Link></li>
            <li><Link to="/services/upholstery" className="hover:text-brand-sail-yellow transition-colors duration-200">Marine Upholstery</Link></li>
            <li><Link to="/contact" className="hover:text-brand-sail-yellow transition-colors duration-200">Canvas Repair & Restitch</Link></li>
            <li><Link to="/contact" className="hover:text-brand-sail-yellow transition-colors duration-200">Dodgers & Sprayhoods</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-xl text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm text-base">
            <li><Link to="/" className="hover:text-brand-sail-yellow transition-colors duration-200">Home</Link></li>
            <li><Link to="/about" className="hover:text-brand-sail-yellow transition-colors duration-200">About Us</Link></li>
            <li><Link to="/gallery" className="hover:text-brand-sail-yellow transition-colors duration-200">Our Gallery</Link></li>
            <li><Link to="/sailing-with-us" className="hover:text-brand-sail-yellow transition-colors duration-200">Sailing With Us</Link></li>
            <li><Link to="/blog" className="hover:text-brand-sail-yellow transition-colors duration-200">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-brand-sail-yellow transition-colors duration-200">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-semibold text-xl text-white mb-4">Contact Us</h3>
          <address className="not-italic text-sm text-base opacity-90 space-y-2">
            <p>
              495 Brady Rd Suite J<br />
              Tarpon Springs, FL 34689<br />
              United States
            </p>
            <p>
              Email: <a href="mailto:office@marinecanvasflorida.com" className="hover:text-brand-sail-yellow transition-colors duration-200">office@marinecanvasflorida.com</a>
            </p>
            <p>
              Phone: <a href="tel:+17272187157" className="hover:text-brand-sail-yellow transition-colors duration-200">(727) 218-7157</a>
            </p>
          </address>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-6">
            <a href="https://www.facebook.com/adriaticmarinecanvas/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors duration-200" aria-label="Follow us on Facebook">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/adriatic_marinecanvas/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-300 transition-colors duration-200" aria-label="Follow us on Instagram">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://youtube.com/channel/AdriaticLux" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-300 transition-colors duration-200" aria-label="Subscribe on YouTube">
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-base text-sm mt-12 pt-8 border-t border-brand-ocean-blue border-opacity-30">
        &copy; {new Date().getFullYear()} Marine Canvas Florida. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
