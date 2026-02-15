import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/5">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-4"
          >
            <Shield className="w-10 h-10 text-accent" />
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          </motion.div>
          <p className="text-lg opacity-90">Last updated: February 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto prose dark:prose-invert"
        >
          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">1. Introduction</h2>
              <p className="leading-relaxed">
                Marine Canvas Florida ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website marinecanvasflorida.manus.space.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">2. Information We Collect</h2>
              <p className="leading-relaxed mb-4">We may collect information about you in a variety of ways. The information we may collect on the site includes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Personal Data:</strong> Name, email address, phone number, and mailing address when you submit contact forms or request estimates</li>
                <li><strong>Payment Information:</strong> Credit card and billing information (processed securely through third-party providers)</li>
                <li><strong>Usage Data:</strong> Browser type, IP address, pages visited, and time spent on the website</li>
                <li><strong>Cookies:</strong> Information stored through cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">3. Use of Your Information</h2>
              <p className="leading-relaxed mb-4">We use the information we collect for various purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To provide, operate, and maintain our website and services</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To process your transactions and send related information</li>
                <li>To send marketing and promotional communications (with your consent)</li>
                <li>To improve our website and services</li>
                <li>To monitor and analyze usage patterns and trends</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">4. Disclosure of Your Information</h2>
              <p className="leading-relaxed">
                We may share your information with third-party service providers who assist us in operating our website and conducting our business, including payment processors, email service providers, and analytics providers. We will not sell, trade, or rent your personal information to third parties without your consent, except as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">5. Security of Your Information</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">6. Cookies and Tracking Technologies</h2>
              <p className="leading-relaxed">
                Our website uses cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences. For more information, see our Cookie Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">7. Your Rights and Choices</h2>
              <p className="leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">8. Third-Party Links</h2>
              <p className="leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">9. Children's Privacy</h2>
              <p className="leading-relaxed">
                Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information and terminate the child's account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">10. Changes to This Privacy Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by updating the "Last updated" date at the top of this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">11. Contact Us</h2>
              <p className="leading-relaxed">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-secondary/10 p-6 rounded-lg mt-4 border border-border">
                <p className="font-semibold">Marine Canvas Florida</p>
                <p>495 Brady Rd Suite J</p>
                <p>Tarpon Springs, FL 34689</p>
                <p>Phone: (727) 218-7157</p>
                <p>Email: office@marinecanvasflorida.com</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
