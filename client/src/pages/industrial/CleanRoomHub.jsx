import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

export default function CleanRoomHub() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Clean Room Solutions
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Precision-engineered containment and protection systems for controlled environments
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 px-4 md:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Our Clean Room Services</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We provide comprehensive clean room solutions designed to meet the strictest industry standards for contamination control, equipment protection, and environmental compliance.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Precision Engineering</h3>
              <p className="text-muted-foreground">
                Custom-designed systems tailored to your specific clean room requirements and environmental conditions.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Compliance Certified</h3>
              <p className="text-muted-foreground">
                All solutions meet ISO 14644 and industry-specific contamination control standards.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Durable Materials</h3>
              <p className="text-muted-foreground">
                Premium fabrics and materials engineered for longevity and repeated sterilization cycles.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Expert Installation</h3>
              <p className="text-muted-foreground">
                Professional installation and ongoing support to ensure optimal performance and compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 px-4 md:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Industries Served</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-background rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Pharmaceutical</h3>
              <p className="text-sm text-muted-foreground">Manufacturing and research facilities</p>
            </div>
            <div className="p-4 bg-background rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Medical Device</h3>
              <p className="text-sm text-muted-foreground">Sterile assembly and testing environments</p>
            </div>
            <div className="p-4 bg-background rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Electronics</h3>
              <p className="text-sm text-muted-foreground">Cleanroom manufacturing and assembly</p>
            </div>
            <div className="p-4 bg-background rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Biotechnology</h3>
              <p className="text-sm text-muted-foreground">Research and development labs</p>
            </div>
            <div className="p-4 bg-background rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Food Processing</h3>
              <p className="text-sm text-muted-foreground">Contamination control systems</p>
            </div>
            <div className="p-4 bg-background rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Aerospace</h3>
              <p className="text-sm text-muted-foreground">Component assembly and testing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Links */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Our Solutions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/industrial/clean-room-curtains">
              <div className="p-8 bg-card rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all cursor-pointer">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Clean Room Curtains</h3>
                <p className="text-muted-foreground mb-6">
                  Modular curtain systems for flexible clean room partitioning and containment.
                </p>
                <div className="flex items-center text-primary font-semibold">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
            <Link href="/industrial/clean-room-equipment-covers">
              <div className="p-8 bg-card rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all cursor-pointer">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Equipment Covers</h3>
                <p className="text-muted-foreground mb-6">
                  Protective covers for sensitive equipment in clean room environments.
                </p>
                <div className="flex items-center text-primary font-semibold">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
            <Link href="/industrial/clean-room-containment">
              <div className="p-8 bg-card rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all cursor-pointer">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Containment Systems</h3>
                <p className="text-muted-foreground mb-6">
                  Advanced containment barriers for controlled environments and isolation.
                </p>
                <div className="flex items-center text-primary font-semibold">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Upgrade Your Clean Room?</h2>
          <p className="text-lg mb-8 opacity-90">
            Contact us today to discuss your clean room requirements and get a custom solution.
          </p>
          <Link href="/contact">
            <button className="px-8 py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:opacity-90 transition-opacity cursor-pointer">
              Get in Touch
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
