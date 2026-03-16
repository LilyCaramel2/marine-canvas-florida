import { Link } from 'wouter';
import { ArrowLeft, Check } from 'lucide-react';

export default function CleanRoomCurtains() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto">
          <Link href="/industrial/clean-room">
            <div className="flex items-center text-primary font-semibold mb-6 cursor-pointer hover:opacity-80">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Clean Room Solutions
            </div>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Clean Room Curtain Systems
          </h1>
          <p className="text-xl text-muted-foreground">
            Modular, flexible partitioning solutions for controlled environments
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 px-4 md:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Industrial Curtain Systems</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our clean room curtain systems provide flexible, modular partitioning for controlled environments. Engineered with precision-grade materials, these curtains maintain contamination barriers while allowing easy reconfiguration as your facility needs evolve.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Modular design for flexible reconfiguration</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">ISO 14644 compliant materials</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Sterilizable and washable fabrics</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Custom sizing and configurations</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Applications</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Pharmaceutical manufacturing areas</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Medical device assembly lines</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Electronics manufacturing facilities</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Research and development labs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Material Composition</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Polyester microfiber blends</li>
                <li>• Antistatic treated fabrics</li>
                <li>• Low particle generation</li>
                <li>• Chemical resistant options</li>
              </ul>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Compliance Standards</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• ISO 14644 Class ratings</li>
                <li>• FDA compliant materials</li>
                <li>• USP <797> standards</li>
                <li>• GMP certified production</li>
              </ul>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Customization Options</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Custom dimensions and colors</li>
                <li>• Reinforced edges and seams</li>
                <li>• Zipper and velcro closures</li>
                <li>• Viewing windows available</li>
              </ul>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Maintenance</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Machine washable</li>
                <li>• Autoclavable materials</li>
                <li>• Chemical disinfectant compatible</li>
                <li>• Long-term durability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Need Custom Curtain Solutions?</h2>
          <p className="text-lg mb-8 opacity-90">
            Contact our team to discuss your specific clean room requirements.
          </p>
          <Link href="/contact">
            <button className="px-8 py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:opacity-90 transition-opacity cursor-pointer">
              Request a Quote
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
