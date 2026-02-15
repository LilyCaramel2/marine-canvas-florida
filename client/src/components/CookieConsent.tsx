'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'wouter';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show consent banner after 2 seconds
      const timer = setTimeout(() => setShowConsent(true), 2000);
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
  };

  const handleCookies = () => {
    setLocation('/cookies');
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 right-4 z-40 max-w-xs"
        >
          <div className="bg-card border border-border rounded-lg shadow-lg p-4">
            {/* Close Button */}
            <button
              onClick={() => setShowConsent(false)}
              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Content */}
            <div className="pr-6">
              <h3 className="font-semibold text-foreground text-xs mb-2">Cookies</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                We use cookies to enhance your experience. By continuing, you accept our use of cookies.
              </p>

              {/* Links */}
              <div className="flex gap-2 mb-3 text-xs">
                <button
                  onClick={handlePrivacy}
                  className="text-primary hover:underline transition-colors"
                >
                  Privacy
                </button>
                <span className="text-border">•</span>
                <button
                  onClick={handleCookies}
                  className="text-primary hover:underline transition-colors"
                >
                  Cookies
                </button>
              </div>

              {/* Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={handleReject}
                  className="flex-1 px-2 py-1.5 text-xs font-medium border border-border rounded hover:bg-secondary transition-colors text-foreground"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 px-2 py-1.5 text-xs font-medium bg-accent text-accent-foreground rounded hover:bg-accent/90 transition-colors"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
