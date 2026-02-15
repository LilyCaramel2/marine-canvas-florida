'use client';

import { useEffect } from 'react';

const TidioChatbot = () => {
  useEffect(() => {
    // Add Tidio script to the page
    const script = document.createElement('script');
    script.src = 'https://cdn.tidio.co/WH8Z8DXDKQN9JLKN7MZQNQN7MZQNQN7/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup if needed
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null; // Tidio injects its own UI
};

export default TidioChatbot;
