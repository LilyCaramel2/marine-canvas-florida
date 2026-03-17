import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import ContactButtons from '../components/ContactButtons';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  boatType: string;
  boatLength: string;
  serviceNeeded: string[];
  location: string;
  message: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

const EMPTY_FORM: FormData = {
  name: '',
  email: '',
  phone: '',
  inquiryType: 'Marine Canvas',
  boatType: '',
  boatLength: '',
  serviceNeeded: [],
  location: '',
  message: '',
};

const MARINE_SERVICES = [
  'Bimini Top',
  'Full Enclosure',
  'Boat Cover',
  'Marine Upholstery',
  'Dodger / Spray Hood',
  'Sail Cover',
  'Other Marine',
];

const INDUSTRIAL_SERVICES = [
  'Softwall Cleanroom',
  'Contamination Control Curtains',
  'Equipment Covers',
  'Data Center Containment',
  'Equipment Protection',
  'Shading Solutions',
  'Other Industrial',
];

const Contact = () => {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [serverError, setServerError] = useState<string>('');

  const isIndustrial = formData.inquiryType === 'Industrial';
  const serviceOptions = isIndustrial ? INDUSTRIAL_SERVICES : MARINE_SERVICES;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        serviceNeeded: checkbox.checked
          ? [...prev.serviceNeeded, value]
          : prev.serviceNeeded.filter((s) => s !== value),
      }));
    } else {
      if (name === 'inquiryType') {
        setFormData((prev) => ({ ...prev, inquiryType: value, serviceNeeded: [] }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
      if (name in fieldErrors) {
        setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    }
  };

  const validate = (): boolean => {
    const errors: FieldErrors = {};
    if (!formData.name.trim()) errors.name = 'Your name is required.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errors.email = 'A valid email address is required.';
    if (!formData.message.trim()) errors.message = 'Please include a message.';
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError('');
    if (!validate()) return;
    setSubmitStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitStatus('success');
        setFormData(EMPTY_FORM);
        setFieldErrors({});
      } else {
        setSubmitStatus('error');
        setServerError(
          data.errors?.join(' ') ||
            'Something went wrong. Please try again or email us directly.'
        );
      }
    } catch {
      setSubmitStatus('error');
      setServerError(
        'Unable to send your message. Please check your connection or email us directly at office@marinecanvasflorida.com.'
      );
    }
  };

  const inputBase =
    'w-full px-4 py-3 rounded-lg bg-background border text-text placeholder-text/40 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200';
  const inputNormal = `${inputBase} border-border`;
  const inputErr = `${inputBase} border-red-500 focus:ring-red-400`;

  if (submitStatus === 'success') {
    return (
      <>
        <SEOHead
          title="Contact Marine Canvas Florida | Free Consultation \u2014 Tarpon Springs"
          description="Request a free consultation for custom marine canvas, industrial cleanroom systems, or data center containment. Serving Tarpon Springs, Tampa Bay, and all of Florida."
          canonical="https://marinecanvasflorida.com/contact"
          ogUrl="https://marinecanvasflorida.com/contact"
        />
        <section className="py-24 bg-background text-text transition-colors duration-300 mt-[72px] md:mt-[80px] min-h-screen flex items-center">
          <div className="container mx-auto px-6 max-w-2xl text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="w-20 h-20 text-green-500" strokeWidth={1.5} />
            </div>
            <h1 className="font-bold text-4xl text-foreground mb-4">Inquiry Sent</h1>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              Thank you for reaching out to Marine Canvas Florida. We have received your inquiry and will be in touch within one business day. A confirmation has been sent to your email address.
            </p>
            <p className="text-base text-foreground/60 mb-10">
              For urgent projects, call us directly at{' '}
              <a href="tel:+17272187157" className="text-primary font-semibold hover:underline">
                (727) 218-7157
              </a>
              .
            </p>
            <button
              onClick={() => setSubmitStatus('idle')}
              className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              Submit Another Inquiry
            </button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Contact Marine Canvas Florida | Free Consultation \u2014 Tarpon Springs"
        description="Request a free consultation for custom marine canvas, industrial cleanroom systems, or data center containment. Serving Tarpon Springs, Tampa Bay, and all of Florida."
        canonical="https://marinecanvasflorida.com/contact"
        ogUrl="https://marinecanvasflorida.com/contact"
      />
      <section className="py-24 bg-background text-text transition-colors duration-300 mt-[72px] md:mt-[80px]">
        <div className="container mx-auto px-6 max-w-6xl">
          <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl text-center text-primary mb-6 leading-tight">
            Get in Touch with Marine Canvas Florida
          </h1>
          <p className="text-base text-xl text-center text-text mb-16 leading-relaxed max-w-3xl mx-auto">
            Ready to discuss your custom marine canvas or industrial fabrication project? Contact us today for a complimentary consultation and tailored quote.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">

            <div>
              <h2 className="font-semibold text-3xl text-primary mb-6">Our Location &amp; Contact Info</h2>
              <address className="not-italic text-base text-lg text-text mb-6 leading-relaxed space-y-2">
                <p>
                  <strong>Marine Canvas Florida</strong><br />
                  495 Brady Rd Suite J<br />
                  Tarpon Springs, FL 34689<br />
                  United States
                </p>
                <p>
                  Email:{' '}
                  <a
                    href="mailto:office@marinecanvasflorida.com"
                    className="text-primary hover:text-brand-nautical-red transition-colors duration-200"
                  >
                    office@marinecanvasflorida.com
                  </a>
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
                  title="Marine Canvas Florida location map"
                />
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-3xl text-primary mb-6">Send Us a Message</h2>

              {submitStatus === 'error' && serverError && (
                <div className="flex items-start gap-3 bg-red-50 border border-red-300 text-red-700 rounded-lg px-4 py-3 mb-6 text-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{serverError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-semibold text-text mb-1">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className={inputNormal}
                  >
                    <option value="Marine Canvas">Marine Canvas</option>
                    <option value="Industrial">Industrial / Commercial</option>
                    <option value="Sailing">Sailing Experience</option>
                    <option value="General">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-text mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={fieldErrors.name ? inputErr : inputNormal}
                    aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                  />
                  {fieldErrors.name && (
                    <p id="name-error" className="text-red-500 text-xs mt-1">{fieldErrors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-text mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={fieldErrors.email ? inputErr : inputNormal}
                    aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                  />
                  {fieldErrors.email && (
                    <p id="email-error" className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-text mb-1">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(727) 000-0000"
                    className={inputNormal}
                  />
                </div>

                {!isIndustrial && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="boatType" className="block text-sm font-semibold text-text mb-1">
                        Boat Type
                      </label>
                      <select
                        id="boatType"
                        name="boatType"
                        value={formData.boatType}
                        onChange={handleChange}
                        className={inputNormal}
                      >
                        <option value="">Select type</option>
                        <option value="Sailboat">Sailboat</option>
                        <option value="Powerboat">Powerboat</option>
                        <option value="Catamaran">Catamaran</option>
                        <option value="Yacht">Yacht</option>
                        <option value="Center Console">Center Console</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="boatLength" className="block text-sm font-semibold text-text mb-1">
                        Boat Length
                      </label>
                      <select
                        id="boatLength"
                        name="boatLength"
                        value={formData.boatLength}
                        onChange={handleChange}
                        className={inputNormal}
                      >
                        <option value="">Select length</option>
                        <option value="Under 20ft">Under 20 ft</option>
                        <option value="20-30ft">20-30 ft</option>
                        <option value="30-40ft">30-40 ft</option>
                        <option value="40-50ft">40-50 ft</option>
                        <option value="Over 50ft">Over 50 ft</option>
                      </select>
                    </div>
                  </div>
                )}

                <div>
                  <p className="block text-sm font-semibold text-text mb-2">Services Needed</p>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceOptions.map((service) => (
                      <label key={service} className="flex items-center gap-2 text-sm text-text cursor-pointer">
                        <input
                          type="checkbox"
                          name="serviceNeeded"
                          value={service}
                          checked={formData.serviceNeeded.includes(service)}
                          onChange={handleChange}
                          className="w-4 h-4 accent-primary rounded"
                        />
                        {service}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-semibold text-text mb-1">
                    Your Location / Marina
                  </label>
                  <input
                    id="location"
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Clearwater, FL or Anclote River Marina"
                    className={inputNormal}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-text mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, timeline, or any specific requirements..."
                    className={`${fieldErrors.message ? inputErr : inputNormal} resize-none`}
                    aria-describedby={fieldErrors.message ? 'message-error' : undefined}
                  />
                  {fieldErrors.message && (
                    <p id="message-error" className="text-red-500 text-xs mt-1">{fieldErrors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {submitStatus === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Inquiry'
                  )}
                </button>

                <p className="text-xs text-text/50 text-center">
                  Fields marked <span className="text-red-500">*</span> are required. We respond within one business day.
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
