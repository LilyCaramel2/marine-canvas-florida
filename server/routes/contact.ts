import { Router, Request, Response } from 'express';
import nodemailer from 'nodemailer';

const router = Router();

// ── Nodemailer transporter ──
// Reads SMTP credentials from environment variables so no secrets are
// committed to the repository. Set these in Vercel's Environment Variables
// panel under Settings → Environment Variables.
//
// Required env vars:
//   SMTP_HOST      e.g. smtp.hostinger.com
//   SMTP_PORT      e.g. 465 (SSL) or 587 (TLS)
//   SMTP_SECURE    "true" for port 465, "false" for port 587
//   SMTP_USER      e.g. office@marinecanvasflorida.com
//   SMTP_PASS      SMTP password (from Hostinger email panel)
//   CONTACT_TO     Recipient address (defaults to office@marinecanvasflorida.com)

const createTransporter = () =>
  nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.hostinger.com',
    port: Number(process.env.SMTP_PORT) || 465,
    secure: process.env.SMTP_SECURE !== 'false', // true by default (port 465)
    auth: {
      user: process.env.SMTP_USER || 'office@marinecanvasflorida.com',
      pass: process.env.SMTP_PASS || '',
    },
  });

// ── POST /api/contact ──
router.post('/', async (req: Request, res: Response) => {
  const {
    name,
    email,
    phone,
    boatType,
    boatLength,
    serviceNeeded,
    location,
    message,
    inquiryType,
  } = req.body as {
    name?: string;
    email?: string;
    phone?: string;
    boatType?: string;
    boatLength?: string;
    serviceNeeded?: string[];
    location?: string;
    message?: string;
    inquiryType?: string;
  };

  // ── Server-side validation ──
  const errors: string[] = [];
  if (!name?.trim()) errors.push('Name is required.');
  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.push('A valid email address is required.');
  if (!message?.trim()) errors.push('Message is required.');

  if (errors.length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  const recipientTo =
    process.env.CONTACT_TO || 'office@marinecanvasflorida.com';
  const servicesText =
    Array.isArray(serviceNeeded) && serviceNeeded.length > 0
      ? serviceNeeded.join(', ')
      : 'Not specified';

  // ── Notification email to Marine Canvas Florida ──
  const notificationHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
      <div style="background: #1B3A5C; padding: 24px; border-radius: 8px 8px 0 0;">
        <h1 style="color: #ffffff; margin: 0; font-size: 22px;">New Contact Form Submission</h1>
        <p style="color: #a0b4c8; margin: 4px 0 0; font-size: 14px;">Marine Canvas Florida — marinecanvasflorida.com</p>
      </div>
      <div style="background: #f9f9f9; padding: 24px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 8px 8px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
          <tr><td style="padding: 8px 0; font-weight: bold; width: 160px; color: #555;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #1B3A5C;">${email}</a></td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Phone</td><td style="padding: 8px 0;">${phone || 'Not provided'}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Inquiry Type</td><td style="padding: 8px 0;">${inquiryType || 'Marine Canvas'}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Boat Type</td><td style="padding: 8px 0;">${boatType || 'Not specified'}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Boat Length</td><td style="padding: 8px 0;">${boatLength || 'Not specified'}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Services Needed</td><td style="padding: 8px 0;">${servicesText}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Location</td><td style="padding: 8px 0;">${location || 'Not specified'}</td></tr>
        </table>
        <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 16px 0;" />
        <p style="font-weight: bold; color: #555; margin-bottom: 8px;">Message</p>
        <p style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 4px; padding: 12px; line-height: 1.6; margin: 0;">${message?.replace(/\n/g, '<br />')}</p>
      </div>
    </div>
  `;

  // ── Auto-reply email to submitter ──
  const autoReplyHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
      <div style="background: #1B3A5C; padding: 24px; border-radius: 8px 8px 0 0;">
        <h1 style="color: #ffffff; margin: 0; font-size: 22px;">Thank You, ${name}</h1>
        <p style="color: #a0b4c8; margin: 4px 0 0; font-size: 14px;">Marine Canvas Florida — We have received your inquiry.</p>
      </div>
      <div style="background: #f9f9f9; padding: 24px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 8px 8px;">
        <p style="font-size: 15px; line-height: 1.7; margin-top: 0;">
          Thank you for reaching out to Marine Canvas Florida. We have received your inquiry and will be in touch within one business day.
        </p>
        <p style="font-size: 15px; line-height: 1.7;">
          If your project is time-sensitive, you are welcome to call us directly at <a href="tel:+17272187157" style="color: #1B3A5C; font-weight: bold;">(727) 218-7157</a>.
        </p>
        <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;" />
        <p style="font-size: 13px; color: #888; margin: 0;">
          Marine Canvas Florida · 495 Brady Rd Suite J, Tarpon Springs, FL 34689<br />
          <a href="https://marinecanvasflorida.com" style="color: #1B3A5C;">marinecanvasflorida.com</a>
        </p>
      </div>
    </div>
  `;

  try {
    const transporter = createTransporter();

    // Send notification to the business
    await transporter.sendMail({
      from: `"Marine Canvas Florida Website" <${process.env.SMTP_USER || 'office@marinecanvasflorida.com'}>`,
      to: recipientTo,
      replyTo: email,
      subject: `New Inquiry from ${name} — Marine Canvas Florida`,
      html: notificationHtml,
    });

    // Send auto-reply to the submitter
    await transporter.sendMail({
      from: `"Marine Canvas Florida" <${process.env.SMTP_USER || 'office@marinecanvasflorida.com'}>`,
      to: email,
      subject: 'We have received your inquiry — Marine Canvas Florida',
      html: autoReplyHtml,
    });

    return res.status(200).json({
      success: true,
      message: 'Your inquiry has been sent. We will be in touch shortly.',
    });
  } catch (err) {
    console.error('[contact route] Email send error:', err);
    return res.status(500).json({
      success: false,
      errors: ['Failed to send your message. Please try again or email us directly at office@marinecanvasflorida.com.'],
    });
  }
});

export default router;
