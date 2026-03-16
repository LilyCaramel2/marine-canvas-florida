import { Link } from 'wouter';
import { ArrowLeft, Check } from 'lucide-react';

export default function CleanRoomEquipmentCovers() {
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
            Clean Room Equipment Covers
          </h1>
          <p className="text-xl text-muted-foreground">
            Protective covers for sensitive equipment in controlled environments
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 px-4 md:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Equipment Protection Solutions</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our precision-engineered equipment covers protect sensitive machinery and instruments from contamination in clean room environments. Each cover is custom-designed to fit your specific equipment while maintaining optimal airflow and contamination control.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Custom-fit designs for any equipment</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Particle-free materials</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Easy removal and installation</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Extended equipment lifespan</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Compatible Equipment</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Laboratory instruments</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Manufacturing machinery</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Sterilization equipment</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Electronic control systems</span>
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
              <h3 className="text-xl font-semibold mb-4 text-foreground">Material Options</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Polyester microfiber</li>
                <li>• Nylon blends</li>
                <li>• Antistatic treated</li>
                <li>• Chemical resistant</li>
              </ul>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Design Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Precision measurement</li>
                <li>• Reinforced seams</li>
                <li>• Velcro closures</li>
                <li>• Ventilation ports</li>
              </ul>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Compliance Standards</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• ISO 14644 compliant</li>
                <li>• FDA approved materials</li>
                <li>• GMP certified</li>
                <li>• USP <797> compatible</li>
              </ul>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Care & Maintenance</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Machine washable</li>
                <li>• Autoclavable options</li>
                <li>• Chemical disinfectant safe</li>
                <li>• Durable construction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Protect Your Equipment Today</h2>
          <p className="text-lg mb-8 opacity-90">
            Get custom equipment covers designed for your specific machinery.
          </p>
          <Link href="/contact">
            <button className="px-8 py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:opacity-90 transition-opacity cursor-pointer">
              Get Custom Covers
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
