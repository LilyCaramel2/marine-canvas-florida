import React, { useState, useRef } from 'react';
import { Link } from 'wouter';
import SEOHead from '../components/SEOHead';
import { CheckCircle, AlertCircle, Loader2, Paperclip, X, Building2, FlaskConical, ShieldCheck } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  location: string;
  facilityType: string;
  facilitySize: string;
  complianceRequirements: string[];
  timeline: string;
  budget: string;
  projectDescription: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  projectDescription?: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

const EMPTY_FORM: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  location: '',
  facilityType: '',
  facilitySize: '',
  complianceRequirements: [],
  timeline: '',
  budget: '',
  projectDescription: '',
};

const FACILITY_TYPES = [
  'Pharmaceutical / Biotech Cleanroom',
  'Semiconductor / Electronics Cleanroom',
  'Medical Device Manufacturing',
  'Data Center / Server Room',
  'Aerospace / Defence Facility',
  'Food Processing / Packaging',
  'Chemical Processing Plant',
  'Research Laboratory',
  'Industrial Warehouse',
  'Other',
];

const COMPLIANCE_OPTIONS = [
  'ISO 14644-1 (Cleanroom Classification)',
  'ISO 14644-2 (Monitoring)',
  'GMP / FDA 21 CFR Part 211',
  'ASHRAE A1–A4 (Data Centers)',
  'NFPA 70 (Electrical)',
  'ASCE 7 (Wind Load)',
  'ESD / ANSI/ESD S20.20',
  'OSHA 29 CFR 1910',
  'None / Not Applicable',
];

const TIMELINE_OPTIONS = [
  'Urgent — within 2 weeks',
  '1 month',
  '2–3 months',
  '3–6 months',
  '6–12 months',
  'Planning phase — no fixed date',
];

const BUDGET_OPTIONS = [
  'Under $5,000',
  '$5,000 – $15,000',
  '$15,000 – $50,000',
  '$50,000 – $150,000',
  '$150,000+',
  'To be determined',
];

const ACCEPTED_TYPES = '.pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.webp,.svg,.dwg,.dxf,.zip';

export default function IndustrialContactForm() {
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

  const handleCompliance = (option: string) => {
    setFormData(prev => ({
      ...prev,
      complianceRequirements: prev.complianceRequirements.includes(option)
        ? prev.complianceRequirements.filter(o => o !== option)
        : [...prev.complianceRequirements, option],
    }));
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
    if (!formData.projectDescription.trim()) {
      errors.projectDescription = 'Please describe your project requirements.';
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
    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach(v => body.append(key, v));
      } else {
        body.append(key, value);
      }
    });
    files.forEach(file => body.append('files', file));

    try {
      const res = await fetch('/api/industrial-contact', { method: 'POST', body });
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
          title="Industrial Project Enquiry — Marine Canvas Florida"
          description="Submit your industrial canvas project enquiry to Marine Canvas Florida. Cleanrooms, data centers, equipment covers, and shading solutions across Florida."
          canonical="https://marinecanvasflorida.com/industrial-contact"
        />
        <div className="min-h-screen bg-background flex items-center justify-center px-4 pt-24 pb-12">
          <div className="max-w-lg w-full text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">Enquiry Received</h1>
            <p className="text-muted-foreground text-lg mb-2">
              Thank you for your industrial project enquiry. Our team will review your specifications and contact you within 48 hours.
            </p>
            <p className="text-muted-foreground mb-8">
              For urgent tenders, call us directly at{' '}
              <a href="tel:+17272187157" className="text-primary font-semibold hover:underline">(727) 218-7157</a>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/industrial">
                <div className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors cursor-pointer">
                  Back to Industrial Hub
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
        title="Industrial Project Enquiry — Marine Canvas Florida"
        description="Submit your industrial canvas project enquiry. Cleanrooms, data centers, equipment covers, shading solutions. ISO 14644-1 compliant fabrication across Florida."
        canonical="https://marinecanvasflorida.com/industrial-contact"
      />

      {/* Hero */}
      <div
        className="relative w-full h-64 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=400&fit=crop)' }}
      >
        <div className="absolute inset-0 bg-slate-900/80" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pt-16">
          <p className="text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-2">Adriatic Lux | Marine Canvas Florida</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Industrial Project Enquiry</h1>
          <p className="text-slate-300 text-base max-w-xl">
            Submit your project specifications. Our master fabricator will respond within 48 hours.
          </p>
        </div>
      </div>

      <div className="bg-background pt-12 pb-16 px-4">
        <div className="max-w-3xl mx-auto">

          {/* Credential strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { icon: FlaskConical, label: 'ISO 14644-1 Compliant Fabrication' },
              { icon: ShieldCheck, label: 'ASHRAE & ASCE 7 Rated Materials' },
              { icon: Building2, label: '48-Hour Response Guarantee' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 bg-muted/50 rounded-lg p-3">
                <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>

          {/* Error banner */}
          {status === 'error' && serverError && (
            <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4 mb-6" role="alert">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-red-700 text-sm">{serverError}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-6">

            {/* Contact details */}
            <fieldset className="border border-border rounded-xl p-6">
              <legend className="text-sm font-semibold text-foreground px-2 mb-2">Contact Details</legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Full Name <span className="text-red-500">*</span></label>
                  <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} aria-describedby={fieldErrors.name ? 'name-error' : undefined} className={`w-full px-3 py-2 border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary ${fieldErrors.name ? 'border-red-400' : 'border-border'}`} />
                  {fieldErrors.name && <p id="name-error" className="text-red-500 text-xs mt-1">{fieldErrors.name}</p>}
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1">Company / Organisation</label>
                  <input id="company" name="company" type="text" value={formData.company} onChange={handleChange} className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email Address <span className="text-red-500">*</span></label>
                  <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} aria-describedby={fieldErrors.email ? 'email-error' : undefined} className={`w-full px-3 py-2 border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary ${fieldErrors.email ? 'border-red-400' : 'border-border'}`} />
                  {fieldErrors.email && <p id="email-error" className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">Phone Number</label>
                  <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="location" className="block text-sm font-medium text-foreground mb-1">Project Location (City, State)</label>
                  <input id="location" name="location" type="text" value={formData.location} onChange={handleChange} placeholder="e.g. Tampa, FL" className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
              </div>
            </fieldset>

            {/* Facility details */}
            <fieldset className="border border-border rounded-xl p-6">
              <legend className="text-sm font-semibold text-foreground px-2 mb-2">Facility Details</legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="facilityType" className="block text-sm font-medium text-foreground mb-1">Facility Type</label>
                  <select id="facilityType" name="facilityType" value={formData.facilityType} onChange={handleChange} className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Select facility type…</option>
                    {FACILITY_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="facilitySize" className="block text-sm font-medium text-foreground mb-1">Approximate Facility Size</label>
                  <input id="facilitySize" name="facilitySize" type="text" value={formData.facilitySize} onChange={handleChange} placeholder="e.g. 2,000 sq ft" className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-foreground mb-1">Project Timeline</label>
                  <select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange} className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Select timeline…</option>
                    {TIMELINE_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-1">Budget Range</label>
                  <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Select budget range…</option>
                    {BUDGET_OPTIONS.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
              </div>
            </fieldset>

            {/* Compliance requirements */}
            <fieldset className="border border-border rounded-xl p-6">
              <legend className="text-sm font-semibold text-foreground px-2 mb-3">Compliance Requirements (select all that apply)</legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {COMPLIANCE_OPTIONS.map(option => (
                  <label key={option} className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={formData.complianceRequirements.includes(option)}
                      onChange={() => handleCompliance(option)}
                      className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-foreground group-hover:text-primary transition-colors">{option}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Project description */}
            <div>
              <label htmlFor="projectDescription" className="block text-sm font-medium text-foreground mb-1">
                Project Description <span className="text-red-500">*</span>
              </label>
              <p className="text-xs text-muted-foreground mb-2">
                Describe your requirements in as much detail as possible — dimensions, materials, installation environment, and any specific technical constraints.
              </p>
              <textarea
                id="projectDescription"
                name="projectDescription"
                rows={6}
                value={formData.projectDescription}
                onChange={handleChange}
                aria-describedby={fieldErrors.projectDescription ? 'desc-error' : undefined}
                className={`w-full px-3 py-2 border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none ${fieldErrors.projectDescription ? 'border-red-400' : 'border-border'}`}
                placeholder="e.g. We require a softwall cleanroom partition system for a 1,500 sq ft pharmaceutical lab in Tampa. ISO Class 7 compliance required. Installation needed within 6 weeks…"
              />
              {fieldErrors.projectDescription && (
                <p id="desc-error" className="text-red-500 text-xs mt-1">{fieldErrors.projectDescription}</p>
              )}
            </div>

            {/* File upload */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Attach Files <span className="text-muted-foreground font-normal">(CAD drawings, specs, photos, PDFs — all types accepted, max 20MB each)</span>
              </label>
              <div
                className="border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-primary transition-colors"
                onClick={() => fileInputRef.current?.click()}
              >
                <Paperclip className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Click to attach files or drag and drop</p>
                <p className="text-xs text-muted-foreground mt-1">PDF, DWG, DXF, PNG, JPG, WebP, SVG, DOCX, XLSX, ZIP</p>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept={ACCEPTED_TYPES}
                onChange={handleFiles}
                className="hidden"
              />
              {files.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {files.map((file, i) => (
                    <li key={i} className="flex items-center justify-between bg-muted/50 rounded-lg px-3 py-2 text-sm">
                      <span className="text-foreground truncate max-w-xs">{file.name}</span>
                      <button type="button" onClick={() => removeFile(i)} className="text-muted-foreground hover:text-red-500 transition-colors ml-2 flex-shrink-0">
                        <X className="w-4 h-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending Enquiry…
                </>
              ) : (
                'Submit Industrial Enquiry'
              )}
            </button>

            <p className="text-center text-xs text-muted-foreground">
              Your information is kept strictly confidential. We respond to all industrial enquiries within 48 hours.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
