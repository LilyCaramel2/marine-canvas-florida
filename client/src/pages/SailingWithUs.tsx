import React from 'react';
import { Link } from 'wouter';
import { Anchor, Award, Map, Users, Compass, Wind } from 'lucide-react';

const SailingWithUs = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      {/* Hero Section */}
      <div
        className="relative w-full h-96 bg-cover bg-center mb-12"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=400&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="relative z-10 h-full flex flex-col justify-center items-start p-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">Sailing Experiences & Sea Miles Logging</h1>
          <p className="text-xl text-white/90 mt-4 drop-shadow-md max-w-2xl">
            Log required sea miles for ASA & RYA certifications while gaining real-world sailing experience
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        {/* Introduction */}
        <section className="mb-16 bg-card rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-foreground mb-6">About Our Sailing Experiences</h2>
          <p className="text-lg text-foreground/80 mb-4">
            Marine Canvas Florida, founded by experienced transoceanic sailors, offers unique opportunities to log sea miles and gain practical sailing experience. Whether you're pursuing ASA or RYA certifications, seeking to build confidence on the water, or simply want to explore Florida's beautiful coastal waters, we can help you achieve your sailing goals.
          </p>
          <p className="text-lg text-foreground/80">
            We facilitate customized sailing experiences tailored to your level, objectives, and timeline. Use your own vessel or rent from our available fleet. Our team provides guidance and seamanship support while you gain the hands-on experience needed for certification requirements and personal growth as a sailor.
          </p>
        </section>

        {/* Certification Info */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Certification Pathways</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'ASA Certifications',
                icon: Award,
                description: 'American Sailing Association certifications require documented sea miles and practical skills demonstration. Our sailing experiences help you log required nautical miles while building the competency needed for ASA 101, 103, 104, and advanced certifications.',
                focus: 'Practical sailing skills, navigation, safety, and seamanship'
              },
              {
                title: 'RYA Certifications',
                icon: Compass,
                description: 'Royal Yachting Association certifications are internationally recognized and require significant sea time. We support sailors pursuing RYA Day Skipper, Coastal Skipper, and Yachtmaster certifications through guided sailing experiences.',
                focus: 'Navigation, boat handling, weather interpretation, and leadership'
              },
            ].map((cert, idx) => (
              <div key={idx} className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-primary">
                <div className="flex items-center gap-3 mb-4">
                  <cert.icon className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">{cert.title}</h3>
                </div>
                <p className="text-foreground/80 mb-4">{cert.description}</p>
                <p className="text-sm text-foreground/70"><strong>Focus:</strong> {cert.focus}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Types of Sailing Experiences</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Wind,
                title: 'Short Cruises',
                duration: '3 Days',
                description: 'Perfect for beginners or those with limited time. Log initial sea miles, practice basic sailing skills, and experience coastal navigation.'
              },
              {
                icon: Map,
                title: 'Extended Cruises',
                duration: '1 Week',
                description: 'Ideal for intermediate sailors. Build confidence in varied conditions, practice advanced techniques, and log significant sea miles toward certification.'
              },
              {
                icon: Anchor,
                title: 'Long Distance Adventures',
                duration: 'Custom Duration',
                description: 'For experienced sailors seeking offshore experience. Multi-week passages, advanced navigation, and real-world seamanship in challenging conditions.'
              },
            ].map((exp, idx) => (
              <div key={idx} className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <exp.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{exp.title}</h3>
                <p className="text-sm text-primary font-semibold mb-3">{exp.duration}</p>
                <p className="text-foreground/70 text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Trip Focus Options */}
        <section className="mb-16 bg-blue-50 dark:bg-blue-950/20 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Education vs. Leisure Focus</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Education-Focused</h3>
              <p className="text-foreground/80 mb-4">
                Structured sailing experiences designed to build specific skills and log sea miles toward certification goals.
              </p>
              <ul className="space-y-2 text-foreground/70">
                <li>✓ Systematic skill development</li>
                <li>✓ Documented sea mile logging</li>
                <li>✓ Navigation and seamanship focus</li>
                <li>✓ Certification preparation</li>
                <li>✓ Real-world problem solving</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Leisure-Focused</h3>
              <p className="text-foreground/80 mb-4">
                Relaxed sailing adventures combining enjoyment with practical experience and seamanship support.
              </p>
              <ul className="space-y-2 text-foreground/70">
                <li>✓ Scenic coastal exploration</li>
                <li>✓ Relaxed pace with learning</li>
                <li>✓ Flexible scheduling</li>
                <li>✓ Social sailing community</li>
                <li>✓ Optional skill development</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Boat Options */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Boat Options</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Use Your Own Vessel',
                description: 'Bring your own boat and we\'ll provide guidance, seamanship support, and navigation assistance. Perfect for sailors wanting to gain experience on their own vessel with expert support available.',
                benefits: ['Familiar with your boat', 'Personalized support', 'Your schedule', 'Cost-effective']
              },
              {
                title: 'Rent from Our Fleet',
                description: 'Access well-maintained sailing vessels from our available fleet. Ideal for sailors without their own boat or those wanting to experience different vessel types.',
                benefits: ['No boat ownership needed', 'Variety of vessels', 'Professionally maintained', 'Flexible options']
              },
            ].map((option, idx) => (
              <div key={idx} className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-primary mb-4">{option.title}</h3>
                <p className="text-foreground/80 mb-6">{option.description}</p>
                <div className="space-y-2">
                  {option.benefits.map((benefit, bidx) => (
                    <p key={bidx} className="text-foreground/70 text-sm flex items-center gap-2">
                      <span className="text-primary font-bold">•</span> {benefit}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Sail With Marine Canvas Florida?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Experienced captains with transatlantic crossing experience',
              'Flexible scheduling and custom-tailored experiences',
              'Support for ASA and RYA certification requirements',
              'Professional guidance and seamanship mentorship',
              'Sea mile documentation for certification tracking',
              'Scenic Florida coastal waters and offshore opportunities',
              'Education-focused or leisure-focused options available',
              'Use your boat or rent from our fleet'
            ].map((reason, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-card rounded-lg shadow">
                <span className="text-primary font-bold text-xl flex-shrink-0">✓</span>
                <p className="text-foreground/80">{reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-secondary rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Sailing Journey?</h2>
          <p className="text-lg mb-8 opacity-90">
            Tell us about your sailing goals, experience level, and certification aspirations. We'll work with you to create a customized sailing experience.
          </p>
          <Link to="/sailing-contact">
            <a className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors">
              Plan Your Sailing Experience
            </a>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default SailingWithUs;
