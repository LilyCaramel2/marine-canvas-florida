import React, { useState, useRef } from 'react';
import { Link } from 'wouter';
import SEOHead from '../components/SEOHead';
import { CheckCircle, AlertCircle, Loader2, Paperclip, X, Anchor, Wind, Award } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  sailingLevel: string;
  tripDuration: string;
  tripType: string;
  boatPreference: string;
  certificationGoal: string;
  seaMilesNeeded: string;
  tripDescription: string;
  preferredDates: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  tripDescription?: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

const EMPTY_FORM: FormData = {
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
};

const ACCEPTED_TYPES = '.pdf,.doc,.docx,.png,.jpg,.jpeg,.webp,.svg,.zip';

export default function SailingContactForm() {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [serverError, setServerError] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (fieldErrors[name as keyof FieldErrors]) {
      setFieldErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(prev => [...prev, ...Array.from(e.target.files!)]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const validate = (): boolean => {
    const errors: FieldErrors = {};
    if (!formData.name.trim()) errors.name = 'Name is required.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'A valid email address is required.';
    }
    if (!formData.tripDescription.trim()) {
      errors.tripDescription = 'Please describe your sailing goals.';
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    setServerError('');
    const body = new FormData();
    Object.entries(formData).forEach(([key, value]) => body.append(key, value));
    files.forEach(file => body.append('files', file));
    try {
      const res = await fetch('/api/sailing-contact', { method: 'POST', body });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
      } else {
        setServerError(data.errors?.[0] || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setServerError('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <>
        <SEOHead
          title="Sailing Enquiry Sent — Marine Canvas Florida"
          description="Your sailing enquiry has been received. Marine Canvas Florida will be in touch within one business day."
          canonical="https://marinecanvasflorida.com/sailing-contact"
        />
        <div className="min-h-screen bg-background flex items-center justify-center px-4 pt-24 pb-12">
          <div className="max-w-lg w-full text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">Enquiry Received</h1>
            <p className="text-muted-foreground text-lg mb-2">
              Thank you for your sailing enquiry. We will be in touch within one business day.
            </p>
            <p className="text-muted-foreground mb-8">
              Questions? Call us at{' '}
              <a href="tel:+17272187157" className="text-primary font-semibold hover:underline">(727) 218-7157</a>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/sailing-with-us">
                <div className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors cursor-pointer">
                  Back to Sailing With Us
                </div>
              </Link>
              <Link href="/">
                <div className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg font-semibold hover:bg-muted transition-colors cursor-pointer">
                  Return Home
                </div>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Sailing Enquiry — Marine Canvas Florida"
        description="Book a sailing trip or enquire about sailing education with Marine Canvas Florida. Tarpon Springs, Tampa Bay, and beyond."
        canonical="https://marinecanvasflorida.com/sailing-contact"
      />
      <div
        className="relative w-full h-64 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=400&fit=crop)' }}
      >
        <div className="absolute inset-0 bg-blue-900/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pt-16">
          <p className="text-blue-200 text-sm font-semibold tracking-widest uppercase mb-2">Marine Canvas Florida</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Sailing Enquiry</h1>
          <p className="text-blue-100 text-base max-w-xl">Tell us about your sailing goals and we will plan the perfect trip together.</p>
        </div>
      </div>

      <div className="bg-background pt-12 pb-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { icon: Anchor, label: 'Tarpon Springs — Tampa Bay' },
              { icon: Wind, label: 'Offshore and Bluewater Experience' },
              { icon: Award, label: 'Transatlantic Crew' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 bg-muted/50 rounded-lg p-3">
                <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>

          {status === 'error' && serverError && (
            <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4 mb-6" role="alert">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-red-700 text-sm">{serverError}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <fieldset className="border border-border rounded-xl p-6">
              <legend className="text-sm font-semibold text-foreground px-2 mb-2">Your Details</legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Full Name <span className="text-red-500">*</span></label>
                  <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} aria-describedby={fieldErrors.name ? 'name-error' : undefined} className={`w-full px-3 py-2 border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary ${fieldErrors.name ? 'border-red-400' : 'border-border'}`} />
                  {fieldErrors.name && <p id="name-error" className="text-red-500 text-xs mt-1">{fieldErrors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email Address <span className="text-red-500">*</span></label>
                  <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} aria-describedby={fieldErrors.email ? 'email-error' : undefined} className={`w-full px-3 py-2 border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary ${fieldErrors.email ? 'border-red-400' : 'border-border'}`} />
                  {fieldErrors.email && <p id="email-error" className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">Phone Number</label>
                  <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
              </div>
            </fieldset>

            <fieldset className="border border-border rounded-xl p-6">
              <legend className="text-sm font-semibold text-foreground px-2 mb-2">Sailing Preferences</legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="sailingLevel" className="block text-sm font-medium text-foreground mb-1">Sailing Level</label>
                  <select id="sailingLevel" name="sailingLevel" value={formData.sailingLevel} onChange={handleChange} className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="beginner">Beginner — no experience</option>
                    <option value="novice">Novice — some experience</option>
                    <option value="intermediate">Intermediate — competent crew</option>
                    <option value="advanced">Advanced — offshore experience</option>
                    <option value="expert">Expert / Bluewater</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="tripDuration" className="block text-sm font-medium text-foreground mb-1">Trip Duration</label>
                  <select id="tripDuration" name="tripDuration" value={formData.tripDuration} onChange={handleChange} className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="half-day">Half day</option>
                    <option value="full-day">Full day</option>
                    <option value="3-days">2 to 3 days</option>
                    <option value="week">1 week</option>
                    <option value="2-weeks">2 weeks</option>
                    <option value="month+">1 month or more</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="tripType" className="block text-sm font-medium text-foreground mb-1">Trip Type</label>
                  <select id="tripType" name="tripType" value={formData.tripType} onChange={handleChange} className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="education">Sailing education and lessons</option>
                    <option value="coastal">Coastal cruising</option>
                    <option value="offshore">Offshore passage</option>
                    <option value="delivery">Yacht delivery</option>
                    <option value="charter">Private charter</option>
                    <option value="racing">Racing and regatta</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="boatPreference" className="block text-sm font-medium text-foreground mb-1">Boat Preference</label>
                  <select id="boatPreference" name="boatPreference" value={formData.boatPreference} onChange={handleChange} className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="rental">Rental or charter vessel</option>
                    <option value="own">My own boat</option>
                    <option value="no-preference">No preference</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="certificationGoal" className="block text-sm font-medium text-foreground mb-1">Certification Goal</label>
                  <input id="certificationGoal" name="certificationGoal" type="text" value={formData.certificationGoal} onChange={handleChange} placeholder="e.g. ASA 101, RYA Day Skipper" className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label htmlFor="seaMilesNeeded" className="block text-sm font-medium text-foreground mb-1">Sea Miles Needed</label>
                  <input id="seaMilesNeeded" name="seaMilesNeeded" type="text" value={formData.seaMilesNeeded} onChange={handleChange} placeholder="e.g. 200nm offshore" className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="preferredDates" className="block text-sm font-medium text-foreground mb-1">Preferred Dates</label>
                  <input id="preferredDates" name="preferredDates" type="text" value={formData.preferredDates} onChange={handleChange} placeholder="e.g. April 2026, flexible" className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
              </div>
            </fieldset>

            <div>
              <label htmlFor="tripDescription" className="block text-sm font-medium text-foreground mb-1">
                Describe Your Sailing Goals <span className="text-red-500">*</span>
              </label>
              <textarea id="tripDescription" name="tripDescription" rows={5} value={formData.tripDescription} onChange={handleChange} aria-describedby={fieldErrors.tripDescription ? 'desc-error' : undefined} className={`w-full px-3 py-2 border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none ${fieldErrors.tripDescription ? 'border-red-400' : 'border-border'}`} placeholder="Tell us about your sailing goals, experience level, and what you hope to achieve..." />
              {fieldErrors.tripDescription && <p id="desc-error" className="text-red-500 text-xs mt-1">{fieldErrors.tripDescription}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Attach Files <span className="text-muted-foreground font-normal">(logbooks, certifications, photos — all types accepted)</span>
              </label>
              <div className="border-2 border-dashed border-border rounded-lg p-5 text-center cursor-pointer hover:border-primary transition-colors" onClick={() => fileInputRef.current?.click()}>
                <Paperclip className="w-5 h-5 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Click to attach files</p>
                <p className="text-xs text-muted-foreground mt-1">PDF, PNG, JPG, WebP, DOCX, ZIP — max 20MB each</p>
              </div>
              <input ref={fileInputRef} type="file" multiple accept={ACCEPTED_TYPES} onChange={handleFiles} className="hidden" />
              {files.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {files.map((file, i) => (
                    <li key={i} className="flex items-center justify-between bg-muted/50 rounded-lg px-3 py-2 text-sm">
                      <span className="text-foreground truncate max-w-xs">{file.name}</span>
                      <button type="button" onClick={() => removeFile(i)} className="text-muted-foreground hover:text-red-500 transition-colors ml-2 flex-shrink-0"><X className="w-4 h-4" /></button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <button type="submit" disabled={status === 'loading'} className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
              {status === 'loading' ? (<><Loader2 className="w-5 h-5 animate-spin" />Sending Enquiry...</>) : ('Submit Sailing Enquiry')}
            </button>
            <p className="text-center text-xs text-muted-foreground">We respond to all sailing enquiries within one business day.</p>
          </form>
        </div>
      </div>
    </>
  );
}
