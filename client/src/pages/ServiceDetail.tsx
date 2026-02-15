import React from 'react';
import { useRoute } from 'wouter';
import { Link } from 'wouter';
import { ArrowLeft, CheckCircle, Phone, Mail } from 'lucide-react';
import { services } from '@/data/services';

const ServiceDetail = () => {
  const [match, params] = useRoute('/services/:slug');

  if (!match) return null;

  const service = services.find(s => s.slug === params?.slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Service Not Found</h1>
          <Link to="/services">
            <a className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Services
            </a>
          </Link>
        </div>
      </div>
    );
  }

  // Determine background color based on service
  const getBackgroundColor = () => {
    switch (service.id) {
      case 'bimini-tops':
        return 'bg-blue-50 dark:bg-blue-950/20';
      case 'enclosures':
        return 'bg-red-50 dark:bg-red-950/20';
      case 'boat-covers':
        return 'bg-yellow-50 dark:bg-yellow-950/20';
      case 'upholstery':
        return 'bg-blue-50 dark:bg-blue-950/20';
      default:
        return 'bg-background';
    }
  };

  return (
    <div className={`min-h-screen ${getBackgroundColor()} pt-24 pb-12`}>
      {/* Hero Section */}
      <div
        className="relative w-full h-96 bg-cover bg-center mb-12"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
        <div className="relative z-10 h-full flex flex-col justify-end p-8">
          <Link to="/services">
            <a className="inline-flex items-center gap-2 text-white hover:text-yellow-300 transition-colors mb-4 w-fit">
              <ArrowLeft className="w-5 h-5" />
              Back to Services
            </a>
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">{service.title}</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Content */}
          <div className="md:col-span-2">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-foreground/80 mb-8">{service.description}</p>

              {/* Full Content */}
              <div className="text-foreground/70 leading-relaxed whitespace-pre-line">
                {service.fullContent}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Features */}
            <div className="bg-card rounded-lg p-6 shadow-lg mb-6 sticky top-24">
              <h3 className="text-xl font-bold text-foreground mb-4">Key Features</h3>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-sm mb-6 opacity-90">Contact us today for a free consultation and custom quote.</p>
              <Link to="/contact">
                <a className="block w-full bg-white text-primary font-bold py-3 rounded-lg text-center hover:bg-gray-100 transition-colors mb-4">
                  Request Consultation
                </a>
              </Link>
              <div className="space-y-3 text-sm">
                <a href="tel:+17272187157" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <Phone className="w-4 h-4" />
                  (727) 218-7157
                </a>
                <a href="mailto:office@marinecanvasflorida.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <Mail className="w-4 h-4" />
                  office@marinecanvasflorida.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-card rounded-lg p-8 shadow-lg mb-12 border-l-4 border-primary">
          <p className="text-lg text-foreground/80 mb-4 italic">"{service.testimonial}"</p>
          <p className="text-foreground font-semibold">— {service.testimonialAuthor}</p>
        </div>

        {/* Related Services */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Other Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services
              .filter(s => s.id !== service.id)
              .slice(0, 3)
              .map(relatedService => (
                <Link key={relatedService.id} to={`/services/${relatedService.slug}`}>
                  <a className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
                    <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-5xl">
                      {relatedService.icon}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {relatedService.title}
                      </h3>
                      <p className="text-foreground/70 text-sm">{relatedService.shortDescription}</p>
                    </div>
                  </a>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
