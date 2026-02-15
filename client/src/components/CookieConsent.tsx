'use client';

import { useEffect, useState } from 'react';
import { X, Cookie } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'wouter';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show consent banner after 1 second
      const timer = setTimeout(() => setShowConsent(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowConsent(false);
  };

  const handlePrivacy = () => {
    setLocation('/privacy');
    setShowConsent(false);
  };

  const handleCookies = () => {
    setLocation('/cookies');
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary via-primary/95 to-primary/90 text-white rounded-xl shadow-2xl border border-primary/50 overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <Cookie className="w-6 h-6 flex-shrink-0 mt-1 text-accent" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">We Value Your Privacy</h3>
                  <p className="text-sm opacity-90 leading-relaxed">
                    We use cookies to enhance your browsing experience, analyze site traffic, and serve personalized content. By accepting, you consent to our use of cookies as described in our Cookie Policy. You can manage your preferences anytime.
                  </p>
                </div>
                <button
                  onClick={handleReject}
                  className="flex-shrink-0 text-white/70 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <button
                    onClick={handlePrivacy}
                    className="text-sm font-medium underline hover:no-underline opacity-90 hover:opacity-100 transition-opacity px-4 py-2 rounded hover:bg-white/10"
                  >
                    Privacy Policy
                  </button>
                  <button
                    onClick={handleCookies}
                    className="text-sm font-medium underline hover:no-underline opacity-90 hover:opacity-100 transition-opacity px-4 py-2 rounded hover:bg-white/10"
                  >
                    Cookie Policy
                  </button>
                </div>

                <div className="flex gap-3 w-full sm:w-auto">
                  <button
                    onClick={handleReject}
                    className="flex-1 sm:flex-none px-6 py-2 rounded-lg border border-white/30 hover:border-white text-white font-semibold transition-all duration-300 hover:bg-white/10"
                  >
                    Decline
                  </button>
                  <button
                    onClick={handleAccept}
                    className="flex-1 sm:flex-none px-6 py-2 rounded-lg bg-accent hover:bg-accent/90 text-primary font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
