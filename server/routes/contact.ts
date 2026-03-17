import { Router, Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import nodemailer from 'nodemailer';

const router = Router();

// ── Multer: accept all file types, 20MB per file, max 10 files ───────────────
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, path.join(process.cwd(), 'server', 'uploads'));
  },
  filename: (_req, file, cb) => {
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${unique}-${file.originalname.replace(/[^a-zA-Z0-9._-]/g, '_')}`);
  },
});
const upload = multer({ storage, limits: { fileSize: 20 * 1024 * 1024, files: 10 } });

// ── Nodemailer ───────────────────────────────────────────────────────────────
const createTransporter = () =>
  nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.hostinger.com',
    port: Number(process.env.SMTP_PORT) || 465,
    secure: process.env.SMTP_SECURE !== 'false',
    auth: {
      user: process.env.SMTP_USER || 'office@marinecanvasflorida.com',
      pass: process.env.SMTP_PASS || '',
    },
  });

const RECIPIENT = process.env.CONTACT_TO || 'office@marinecanvasflorida.com';

// ── Helpers ──────────────────────────────────────────────────────────────────
function row(label: string, value: string | undefined): string {
  return `<tr><td style="padding:8px 0;font-weight:bold;width:180px;color:#555;">${label}</td><td style="padding:8px 0;">${value || 'Not provided'}</td></tr>`;
}

function fileListHtml(files: Express.Multer.File[]): string {
  if (!files || files.length === 0) return '';
  const items = files.map(f => `<li>${f.originalname} (${(f.size / 1024).toFixed(1)} KB)</li>`).join('');
  return `<p style="font-weight:bold;color:#555;margin:16px 0 8px;">Attached Files</p><ul>${items}</ul>`;
}

function wrap(title: string, subtitle: string, body: string): string {
  return `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a;">
    <div style="background:#1B3A5C;padding:24px;border-radius:8px 8px 0 0;">
      <h1 style="color:#fff;margin:0;font-size:22px;">${title}</h1>
      <p style="color:#a0b4c8;margin:4px 0 0;font-size:14px;">${subtitle}</p>
    </div>
    <div style="background:#f9f9f9;padding:24px;border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;">
      ${body}
      <hr style="border:none;border-top:1px solid #e0e0e0;margin:20px 0;" />
      <p style="font-size:13px;color:#888;margin:0;">
        Marine Canvas Florida &middot; 495 Brady Rd Suite J, Tarpon Springs, FL 34689<br />
        <a href="https://marinecanvasflorida.com" style="color:#1B3A5C;">marinecanvasflorida.com</a>
      </p>
    </div>
  </div>`;
}

// ── POST /api/contact  (Marine Canvas form) ──────────────────────────────────
router.post('/contact', upload.array('files'), async (req: Request, res: Response) => {
  const { name, email, phone, inquiryType, boatType, boatLength, serviceNeeded, location, message } = req.body;
  const files = (req.files as Express.Multer.File[]) || [];

  const errors: string[] = [];
  if (!name?.trim()) errors.push('Name is required.');
  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('A valid email address is required.');
  if (!message?.trim()) errors.push('Message is required.');
  if (errors.length) return res.status(400).json({ success: false, errors });

  const servicesText = Array.isArray(serviceNeeded) ? serviceNeeded.join(', ') : serviceNeeded || 'Not specified';

  const notificationBody = `
    <table style="width:100%;border-collapse:collapse;font-size:15px;">
      ${row('Name', name)}${row('Email', `<a href="mailto:${email}" style="color:#1B3A5C;">${email}</a>`)}
      ${row('Phone', phone)}${row('Inquiry Type', inquiryType || 'Marine Canvas')}
      ${row('Boat Type', boatType)}${row('Boat Length', boatLength)}
      ${row('Services Needed', servicesText)}${row('Location', location)}
    </table>
    <hr style="border:none;border-top:1px solid #e0e0e0;margin:16px 0;" />
    <p style="font-weight:bold;color:#555;margin-bottom:8px;">Message</p>
    <p style="background:#fff;border:1px solid #e0e0e0;border-radius:4px;padding:12px;line-height:1.6;margin:0;">${(message || '').replace(/\n/g, '<br />')}</p>
    ${fileListHtml(files)}`;

  try {
    const t = createTransporter();
    await t.sendMail({
      from: `"Marine Canvas Florida Website" <${process.env.SMTP_USER || RECIPIENT}>`,
      to: RECIPIENT, replyTo: email,
      subject: `New Marine Canvas Inquiry from ${name}`,
      html: wrap('New Marine Canvas Inquiry', 'Marine Canvas Florida', notificationBody),
      attachments: files.map(f => ({ filename: f.originalname, path: f.path })),
    });
    await t.sendMail({
      from: `"Marine Canvas Florida" <${process.env.SMTP_USER || RECIPIENT}>`,
      to: email,
      subject: 'We have received your inquiry — Marine Canvas Florida',
      html: wrap(`Thank You, ${name}`, 'Marine Canvas Florida', `<p style="font-size:15px;line-height:1.7;margin-top:0;">We have received your inquiry and will be in touch within one business day.</p><p style="font-size:15px;line-height:1.7;">Call us at <a href="tel:+17272187157" style="color:#1B3A5C;font-weight:bold;">(727) 218-7157</a> for urgent projects.</p>`),
    });
    return res.status(200).json({ success: true, message: 'Your inquiry has been sent. We will be in touch shortly.' });
  } catch (err) {
    console.error('[contact] Email error:', err);
    return res.status(500).json({ success: false, errors: ['Failed to send your message. Please call us at (727) 218-7157.'] });
  }
});

// ── POST /api/sailing-contact  (Sailing enquiry form) ───────────────────────
router.post('/sailing-contact', upload.array('files'), async (req: Request, res: Response) => {
  const { name, email, phone, sailingLevel, tripDuration, tripType, boatPreference, certificationGoal, seaMilesNeeded, tripDescription, preferredDates } = req.body;
  const files = (req.files as Express.Multer.File[]) || [];

  const errors: string[] = [];
  if (!name?.trim()) errors.push('Name is required.');
  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('A valid email address is required.');
  if (!tripDescription?.trim()) errors.push('Please describe your sailing goals.');
  if (errors.length) return res.status(400).json({ success: false, errors });

  const notificationBody = `
    <table style="width:100%;border-collapse:collapse;font-size:15px;">
      ${row('Name', name)}${row('Email', `<a href="mailto:${email}" style="color:#1B3A5C;">${email}</a>`)}
      ${row('Phone', phone)}${row('Sailing Level', sailingLevel)}
      ${row('Trip Duration', tripDuration)}${row('Trip Type', tripType)}
      ${row('Boat Preference', boatPreference)}${row('Certification Goal', certificationGoal)}
      ${row('Sea Miles Needed', seaMilesNeeded)}${row('Preferred Dates', preferredDates)}
    </table>
    <hr style="border:none;border-top:1px solid #e0e0e0;margin:16px 0;" />
    <p style="font-weight:bold;color:#555;margin-bottom:8px;">Trip Description</p>
    <p style="background:#fff;border:1px solid #e0e0e0;border-radius:4px;padding:12px;line-height:1.6;margin:0;">${(tripDescription || '').replace(/\n/g, '<br />')}</p>
    ${fileListHtml(files)}`;

  try {
    const t = createTransporter();
    await t.sendMail({
      from: `"Marine Canvas Florida Website" <${process.env.SMTP_USER || RECIPIENT}>`,
      to: RECIPIENT, replyTo: email,
      subject: `New Sailing Enquiry from ${name}`,
      html: wrap('New Sailing Enquiry', 'Marine Canvas Florida — Sailing With Us', notificationBody),
      attachments: files.map(f => ({ filename: f.originalname, path: f.path })),
    });
    await t.sendMail({
      from: `"Marine Canvas Florida" <${process.env.SMTP_USER || RECIPIENT}>`,
      to: email,
      subject: 'Your sailing enquiry — Marine Canvas Florida',
      html: wrap(`Thank You, ${name}`, 'We have received your sailing enquiry.', `<p style="font-size:15px;line-height:1.7;margin-top:0;">We have received your sailing enquiry and will be in touch within one business day.</p><p style="font-size:15px;line-height:1.7;">Call us at <a href="tel:+17272187157" style="color:#1B3A5C;font-weight:bold;">(727) 218-7157</a>.</p>`),
    });
    return res.status(200).json({ success: true, message: 'Your sailing enquiry has been sent. We will be in touch shortly.' });
  } catch (err) {
    console.error('[sailing-contact] Email error:', err);
    return res.status(500).json({ success: false, errors: ['Failed to send your enquiry. Please call us at (727) 218-7157.'] });
  }
});

// ── POST /api/industrial-contact  (Industrial enquiry form) ─────────────────
router.post('/industrial-contact', upload.array('files'), async (req: Request, res: Response) => {
  const { name, email, phone, company, facilityType, facilitySize, complianceRequirements, timeline, budget, projectDescription, location } = req.body;
  const files = (req.files as Express.Multer.File[]) || [];

  const errors: string[] = [];
  if (!name?.trim()) errors.push('Name is required.');
  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('A valid email address is required.');
  if (!projectDescription?.trim()) errors.push('Please describe your project requirements.');
  if (errors.length) return res.status(400).json({ success: false, errors });

  const complianceText = Array.isArray(complianceRequirements) ? complianceRequirements.join(', ') : complianceRequirements || 'Not specified';

  const notificationBody = `
    <table style="width:100%;border-collapse:collapse;font-size:15px;">
      ${row('Name', name)}${row('Company', company)}
      ${row('Email', `<a href="mailto:${email}" style="color:#1B3A5C;">${email}</a>`)}${row('Phone', phone)}
      ${row('Location', location)}${row('Facility Type', facilityType)}
      ${row('Facility Size', facilitySize)}${row('Compliance Requirements', complianceText)}
      ${row('Project Timeline', timeline)}${row('Budget Range', budget)}
    </table>
    <hr style="border:none;border-top:1px solid #e0e0e0;margin:16px 0;" />
    <p style="font-weight:bold;color:#555;margin-bottom:8px;">Project Description</p>
    <p style="background:#fff;border:1px solid #e0e0e0;border-radius:4px;padding:12px;line-height:1.6;margin:0;">${(projectDescription || '').replace(/\n/g, '<br />')}</p>
    ${fileListHtml(files)}`;

  try {
    const t = createTransporter();
    await t.sendMail({
      from: `"Marine Canvas Florida Website" <${process.env.SMTP_USER || RECIPIENT}>`,
      to: RECIPIENT, replyTo: email,
      subject: `New Industrial Enquiry from ${name}${company ? ` — ${company}` : ''}`,
      html: wrap('New Industrial Project Enquiry', 'Adriatic Lux | Marine Canvas Florida — Industrial Division', notificationBody),
      attachments: files.map(f => ({ filename: f.originalname, path: f.path })),
    });
    await t.sendMail({
      from: `"Marine Canvas Florida Industrial" <${process.env.SMTP_USER || RECIPIENT}>`,
      to: email,
      subject: 'Your industrial project enquiry — Marine Canvas Florida',
      html: wrap(`Thank You, ${name}`, 'Adriatic Lux | Marine Canvas Florida — Industrial Division', `<p style="font-size:15px;line-height:1.7;margin-top:0;">We have received your industrial project specifications and will contact you within 48 hours.</p><p style="font-size:15px;line-height:1.7;">For urgent tenders, call <a href="tel:+17272187157" style="color:#1B3A5C;font-weight:bold;">(727) 218-7157</a>.</p>`),
    });
    return res.status(200).json({ success: true, message: 'Your industrial enquiry has been received. We will contact you within 48 hours.' });
  } catch (err) {
    console.error('[industrial-contact] Email error:', err);
    return res.status(500).json({ success: false, errors: ['Failed to send your enquiry. Please call us at (727) 218-7157.'] });
  }
});

export default router;
