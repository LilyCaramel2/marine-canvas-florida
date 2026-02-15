import React, { useState } from 'react';
import { Mail, Phone, MapPin, Anchor } from 'lucide-react';

const SailingContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sailingLevel: 'beginner',
    tripDuration: '3-days',
    tripType: 'education',
    boatPreference: 'rental',
    certificationGoal: '',
    seaMilesNeeded: '',
    tripDescription: '',
    preferredDates: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send to your backend or HubSpot
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        sailingLevel: 'beginner',
        tripDuration: '3-days',
        tripType: 'education',
        boatPreference: 'rental',
        certificationGoal: '',
        seaMilesNeeded: '',
        tripDescription: '',
        preferredDates: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      {/* Hero Section */}
      <div
        className="relative w-full h-80 bg-cover bg-center mb-12"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=400&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="relative z-10 h-full flex flex-col justify-center items-start p-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">Plan Your Sailing Experience</h1>
          <p className="text-xl text-white/90 mt-4 drop-shadow-md max-w-2xl">
            Log sea miles, gain experience, and explore Florida's beautiful waters
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-1">
            <div className="bg-card rounded-lg p-6 shadow-lg sticky top-24 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="https://maps.google.com/?q=495+Brady+Rd+Suite+J+Tarpon+Springs+FL+34689"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 hover:text-primary transition-colors"
                  >
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                    <span className="text-sm text-foreground/80">
                      495 Brady Rd Suite J<br />
                      Tarpon Springs, FL 34689
                    </span>
                  </a>
                  <a
                    href="tel:+17272187157"
                    className="flex items-center gap-3 hover:text-primary transition-colors"
                  >
                    <Phone className="w-5 h-5 flex-shrink-0 text-primary" />
                    <span className="text-sm text-foreground/80">(727) 218-7157</span>
                  </a>
                  <a
                    href="mailto:office@marinecanvasflorida.com"
                    className="flex items-center gap-3 hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5 flex-shrink-0 text-primary" />
                    <span className="text-sm text-foreground/80 break-all">office@marinecanvasflorida.com</span>
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <Anchor className="w-5 h-5 text-primary" />
                  Quick Info
                </h4>
                <ul className="text-sm text-foreground/70 space-y-2">
                  <li>• Flexible trip durations</li>
                  <li>• Use your boat or rent</li>
                  <li>• ASA & RYA certification support</li>
                  <li>• Education or leisure focused</li>
                  <li>• Custom tailored experiences</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            <div className="bg-card rounded-lg p-8 shadow-lg">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Thank You!</h3>
                  <p className="text-foreground/70">
                    We've received your inquiry and will contact you soon to discuss your sailing experience.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-4">Your Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="(727) 555-0000"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Sailing Experience */}
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-4">Sailing Experience</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Sailing Level *</label>
                        <select
                          name="sailingLevel"
                          value={formData.sailingLevel}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="beginner">Beginner - No experience</option>
                          <option value="intermediate">Intermediate - Some experience</option>
                          <option value="advanced">Advanced - Experienced sailor</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Certification Goal</label>
                        <input
                          type="text"
                          name="certificationGoal"
                          value={formData.certificationGoal}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="e.g., ASA 101, RYA Day Skipper"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Sea Miles Needed</label>
                        <input
                          type="text"
                          name="seaMilesNeeded"
                          value={formData.seaMilesNeeded}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="e.g., 100 nautical miles"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Trip Details */}
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-4">Trip Details</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Trip Duration *</label>
                        <select
                          name="tripDuration"
                          value={formData.tripDuration}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="3-days">3 Days</option>
                          <option value="1-week">1 Week</option>
                          <option value="2-weeks">2 Weeks</option>
                          <option value="long-distance">Long Distance (Custom)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Trip Type *</label>
                        <select
                          name="tripType"
                          value={formData.tripType}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="education">Education & Learning Focused</option>
                          <option value="leisure">Leisure & Enjoyment</option>
                          <option value="mixed">Mixed (Education + Leisure)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Boat Preference *</label>
                        <select
                          name="boatPreference"
                          value={formData.boatPreference}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="rental">Rental from our fleet</option>
                          <option value="own">Use my own boat</option>
                          <option value="flexible">Flexible - discuss options</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Preferred Dates</label>
                        <input
                          type="text"
                          name="preferredDates"
                          value={formData.preferredDates}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="e.g., Summer 2026, flexible"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Tell us about your sailing goals</label>
                    <textarea
                      name="tripDescription"
                      value={formData.tripDescription}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Describe your sailing experience, goals, and any specific requests..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all"
                  >
                    Request Your Sailing Experience
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SailingContactForm;
