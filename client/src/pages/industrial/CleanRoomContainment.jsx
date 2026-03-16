import { Link } from 'wouter';
import { ArrowLeft, Check } from 'lucide-react';

export default function CleanRoomContainment() {
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
            Clean Room Containment Systems
          </h1>
          <p className="text-xl text-muted-foreground">
            Advanced barriers and partition systems for controlled environments
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 px-4 md:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Containment Barrier Solutions</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our advanced containment systems create isolated work zones and environmental barriers for the most demanding clean room applications. Engineered for maximum contamination control while maintaining operational efficiency.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Maximum contamination control</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Sealed partition systems</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Airflow optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Scalable configurations</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Applications</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Isolation chambers</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Biosafety cabinets</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Hazmat containment</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Environmental isolation</span>
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
              <h3 className="text-xl font-semibold mb-4 text-foreground">Barrier Materials</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• High-density polyester</li>
                <li>• Vinyl-coated fabrics</li>
                <li>• Antistatic properties</li>
                <li>• Flame-retardant options</li>
              </ul>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Sealing Systems</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Sealed seams</li>
                <li>• Adhesive closures</li>
                <li>• Zipper integration</li>
                <li>• Pressure-sealed edges</li>
              </ul>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Compliance Standards</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• ISO 14644 Class ratings</li>
                <li>• FDA approved</li>
                <li>• OSHA compliant</li>
                <li>• GMP certified</li>
              </ul>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Installation & Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Professional installation</li>
                <li>• Custom sizing</li>
                <li>• Technical support</li>
                <li>• Maintenance services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Implement Advanced Containment Today</h2>
          <p className="text-lg mb-8 opacity-90">
            Discuss your containment requirements with our contamination control experts.
          </p>
          <Link href="/contact">
            <button className="px-8 py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:opacity-90 transition-opacity cursor-pointer">
              Schedule Consultation
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
