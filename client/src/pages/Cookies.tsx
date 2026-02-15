import { motion } from 'framer-motion';
import { Cookie } from 'lucide-react';

const Cookies = () => {
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
            <Cookie className="w-10 h-10 text-accent" />
            <h1 className="text-4xl md:text-5xl font-bold">Cookie Policy</h1>
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
              <h2 className="text-2xl font-bold mb-4 text-primary">1. What Are Cookies?</h2>
              <p className="leading-relaxed">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They help websites remember information about your visit, such as your preferences and login information. Cookies are widely used to make websites work more efficiently and to provide information to the owners of the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">2. Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Essential Cookies</h3>
                  <p className="leading-relaxed">
                    These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. These cookies cannot be disabled without affecting website functionality.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Performance Cookies</h3>
                  <p className="leading-relaxed">
                    These cookies collect information about how you use our website, such as which pages you visit and any errors you encounter. This information helps us improve our website's performance and user experience.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Functional Cookies</h3>
                  <p className="leading-relaxed">
                    These cookies remember your preferences and choices to provide a more personalized experience. For example, they may remember your language preference or login information.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Marketing Cookies</h3>
                  <p className="leading-relaxed">
                    These cookies track your browsing habits to display targeted advertisements and marketing content. They may be set by third-party advertising partners.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">3. Third-Party Cookies</h2>
              <p className="leading-relaxed">
                We may allow third-party service providers to place cookies on your device for analytics, advertising, and other purposes. These third parties include Google Analytics, social media platforms, and advertising networks. These third parties have their own privacy policies governing their use of cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">4. How We Use Cookies</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To remember your preferences and settings</li>
                <li>To understand how you use our website</li>
                <li>To improve our website's functionality and performance</li>
                <li>To provide personalized content and recommendations</li>
                <li>To track marketing campaign effectiveness</li>
                <li>To prevent fraud and enhance security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">5. Managing Your Cookie Preferences</h2>
              <p className="leading-relaxed mb-4">
                You have the right to accept or reject cookies. Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>View what cookies are set and delete them</li>
                <li>Block all cookies or specific types of cookies</li>
                <li>Set your browser to notify you when a cookie is being set</li>
                <li>Use "Do Not Track" features in your browser</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Please note that disabling cookies may affect the functionality of our website and your user experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">6. Cookie Consent</h2>
              <p className="leading-relaxed">
                When you first visit our website, we display a cookie consent banner. By accepting cookies, you consent to our use of cookies as described in this policy. You can change your preferences at any time through your browser settings or by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">7. Specific Cookies We Use</h2>
              <div className="bg-secondary/10 p-6 rounded-lg border border-border space-y-3">
                <div>
                  <p className="font-semibold">Google Analytics</p>
                  <p className="text-sm text-muted-foreground">Used to track website traffic and user behavior</p>
                </div>
                <div>
                  <p className="font-semibold">Session Cookies</p>
                  <p className="text-sm text-muted-foreground">Used to maintain your session and login information</p>
                </div>
                <div>
                  <p className="font-semibold">Preference Cookies</p>
                  <p className="text-sm text-muted-foreground">Used to remember your theme and language preferences</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">8. Data Retention</h2>
              <p className="leading-relaxed">
                Cookies are retained for varying periods depending on their type. Session cookies are deleted when you close your browser. Persistent cookies may be stored for weeks, months, or years. You can delete cookies manually at any time through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">9. International Data Transfers</h2>
              <p className="leading-relaxed">
                Some of our service providers may be located outside the United States. By accepting cookies, you consent to the transfer of your information to countries outside the United States, which may have different data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">10. Changes to This Cookie Policy</h2>
              <p className="leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by updating the "Last updated" date at the top of this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">11. Contact Us</h2>
              <p className="leading-relaxed">
                If you have questions about this Cookie Policy or our use of cookies, please contact us at:
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

export default Cookies;
