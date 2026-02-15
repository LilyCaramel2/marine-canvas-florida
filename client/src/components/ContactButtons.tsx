'use client';

import { MessageCircle, Phone } from 'lucide-react';

const ContactButtons = () => {
  const phoneNumber = '+17275551234'; // International format
  const whatsappNumber = '17275551234'; // WhatsApp format (without +)
  const whatsappMessage = 'Hi! I\'m interested in learning more about Marine Canvas Florida services.';

  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      '_blank'
    );
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="flex gap-3 flex-col sm:flex-row">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        <span>WhatsApp</span>
      </button>

      {/* Click to Call Button */}
      <button
        onClick={handleCall}
        className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
        aria-label="Click to call"
      >
        <Phone className="w-5 h-5" />
        <span>Click to Call</span>
      </button>
    </div>
  );
};

export default ContactButtons;
