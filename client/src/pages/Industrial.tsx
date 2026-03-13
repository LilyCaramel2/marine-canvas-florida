import React from 'react';
import { motion } from 'framer-motion';

const Industrial: React.FC = () => {
  return (
    <motion.div
      className="bg-blue-500 text-white p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-4">Industrial Hub</h1>
      <p className="mb-4">Welcome, B2B Procurement Officers! We are proud to showcase our capabilities in commercial fabrication, ensuring that we meet the highest standards in controlled environments.</p>
      <h2 className="text-2xl font-semibold mb-2">Our Capabilities</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Expertise in commercial fabrication</li>
        <li>Experience in controlled environments</li>
        <li>Strong compliance approach</li>
        <li>Established presence in the Florida market</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Learn More</h2>
      <ul className="list-disc list-inside mb-4">
        <li><a href="/subpage1" className="text-yellow-500">Subpage 1</a></li>
        <li><a href="/subpage2" className="text-yellow-500">Subpage 2</a></li>
        <li><a href="/subpage3" className="text-yellow-500">Subpage 3</a></li>
      </ul>
      <p className="font-bold mb-4">Contact us at: <a href="mailto:office@marinecanvasflorida.com" className="text-red-500">office@marinecanvasflorida.com</a></p>
    </motion.div>
  );
};

export default Industrial;
