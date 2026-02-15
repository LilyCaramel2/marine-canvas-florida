import React, { useState } from 'react';
import ContactButtons from '../components/ContactButtons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    boatType: '',
    boatLength: '',
    serviceNeeded: [] as string[],
    location: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        serviceNeeded: checkbox.checked
          ? [...prev.serviceNeeded, value]
          : prev.serviceNeeded.filter((s: string) => s !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      boatType: '',
      boatLength: '',
      serviceNeeded: [],
      location: '',
      message: '',
    });
  };

  return (
    <section className="py-24 bg-background text-text transition-colors duration-300 mt-[72px] md:mt-[80px]">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl text-center text-primary mb-12 leading-tight">
          Get in Touch with Marine Canvas Florida
        </h1>
        <p className="text-base text-xl text-center text-text mb-16 leading-relaxed">
          Ready to discuss your custom marine canvas or upholstery project? Contact us today for a complimentary consultation and tailored quote in the Tampa Bay area.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Details */}
          <div>
            <h2 className="font-semibold text-3xl text-primary mb-6">Our Location & Contact Info</h2>
            <address className="not-italic text-base text-lg text-text mb-6 leading-relaxed space-y-2">
              <p>
                <strong>Marine Canvas Florida</strong><br />
                495 Brady Rd Suite J<br />
                Tarpon Springs, FL 34689<br />
                United States
              </p>
              <p>
                Email: <a href="mailto:office@marinecanvasflorida.com" className="text-primary hover:text-brand-nautical-red transition-colors duration-200">office@marinecanvasflorida.com</a>
              </p>
            </address>
            <div className="mb-8">
              <ContactButtons />
            </div>
            <div className="mt-8 w-full rounded-lg shadow-lg overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.8234567890!2d-82.7341!3d28.0879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2d3c3c3c3c3c3%3A0x1234567890abcdef!2s495%20Brady%20Rd%20Suite%20J%2C%20Tarpon%20Springs%2C%20FL%2034689!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-semibold text-3xl text-primary mb-6">Tell Us About Your Project</h2>
            <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg shadow-xl border border-border">
              <div>
                <label htmlFor="name" className="block font-medium text-sm text-text mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-md focus:ring-primary focus:border-primary transition duration-200 bg-background text-text"
                  placeholder="Your Full Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-medium text-sm text-text mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-md focus:ring-primary focus:border-primary transition duration-200 bg-background text-text"
                  placeholder="your@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block font-medium text-sm text-text mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-md focus:ring-primary focus:border-primary transition duration-200 bg-background text-text"
                  placeholder="(XXX) XXX-XXXX"
                />
              </div>

              <div>
                <label htmlFor="boatType" className="block font-medium text-sm text-text mb-1">Service Interest</label>
                <select
                  id="boatType"
                  name="boatType"
                  value={formData.boatType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-md focus:ring-primary focus:border-primary transition duration-200 bg-background text-text"
                >
                  <option value="">Select a service</option>
                  <option value="bimini_tops">Bimini Tops</option>
                  <option value="enclosures">Enclosures</option>
                  <option value="boat_covers">Boat Covers</option>
                  <option value="upholstery">Marine Upholstery</option>
                  <option value="custom_canvas">Custom Canvas Solutions</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="boatLength" className="block font-medium text-sm text-text mb-1">Vessel Length (approx. in feet)</label>
                <input
                  type="number"
                  id="boatLength"
                  name="boatLength"
                  value={formData.boatLength}
                  onChange={handleChange}
                  min="10"
                  max="200"
                  className="w-full px-4 py-2 border border-border rounded-md focus:ring-primary focus:border-primary transition duration-200 bg-background text-text"
                  placeholder="e.g., 35"
                />
              </div>

              <div>
                <label className="block font-medium text-sm text-text mb-2">Interested Services (Select all that apply)</label>
                <div className="grid grid-cols-2 gap-2 text-text">
                  {['bimini', 'enclosures', 'boatCovers', 'upholstery', 'repair', 'other'].map(service => (
                    <label key={service} className="flex items-center">
                      <input
                        type="checkbox"
                        name="serviceNeeded"
                        value={service}
                        checked={formData.serviceNeeded.includes(service)}
                        onChange={handleChange}
                        className="mr-2 text-primary focus:ring-primary"
                      />
                      <span className="text-sm">{service.charAt(0).toUpperCase() + service.slice(1)}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="location" className="block font-medium text-sm text-text mb-1">Preferred Location / Marina (Optional)</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-md focus:ring-primary focus:border-primary transition duration-200 bg-background text-text"
                  placeholder="e.g., St. Petersburg Yacht Club or Tampa Bay area"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-medium text-sm text-text mb-1">Project Details / Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-md focus:ring-primary focus:border-primary transition duration-200 bg-background text-text"
                  placeholder="Tell us about your custom canvas needs or project specifics..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full"
              >
                Submit Request for Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
