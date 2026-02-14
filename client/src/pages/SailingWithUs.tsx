import React from 'react';
import { Link } from 'wouter';

const SailingWithUs = () => {
  return (
    <section className="py-24 bg-background text-text transition-colors duration-300 mt-[72px] md:mt-[80px]">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl text-center text-primary mb-12 leading-tight">
          Sailing With Us: Mentorship, Courses & Offshore Adventures
        </h1>
        <p className="text-base text-xl text-center text-text mb-16 leading-relaxed">
          Embark on an unforgettable journey with seasoned transoceanic sailors. Marine Canvas Florida offers unique opportunities for sailing mentorship, comprehensive courses, and hands-on training cruises to prepare you for the ultimate offshore adventure.
        </p>

        <div className="space-y-20">
          {/* Online Courses Section */}
          <div className="bg-card p-10 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-border">
            <h2 className="font-semibold text-3xl text-primary mb-6">Online Sailing & Boat Preparation Courses</h2>
            <p className="text-base text-lg text-text mb-8 leading-relaxed">
              Leverage our decades of real-world experience, including transatlantic crossings and complete boat refurbishments, through our expertly designed online courses. Learn everything from essential sailing techniques to advanced marine canvas repair and maintenance – critical skills for any offshore passage or extended cruising.
            </p>
            <ul className="list-disc list-inside text-text text-lg space-y-3 mb-10 pl-5">
              <li>Comprehensive modules on navigation, safety protocols, and seamanship.</li>
              <li>Specialized lessons on marine canvas fabrication and repair for self-sufficiency at sea.</li>
              <li>In-depth guidance on provisioning, systems maintenance, and emergency preparedness.</li>
              <li>Learn from our experiences with hurricane seasons, the Bermuda Triangle, and handling difficult weather.</li>
            </ul>
            <Link to="/contact" className="btn-primary inline-block">
              Inquire About Courses & Mentorship
            </Link>
          </div>

          {/* Training Cruises Section */}
          <div className="bg-card p-10 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-border">
            <h2 className="font-semibold text-3xl text-primary mb-6">Hands-On Training Cruises & Offshore Mentorship</h2>
            <p className="text-base text-lg text-text mb-8 leading-relaxed">
              Join us for an immersive, practical experience on the water aboard a vessel that has truly been ocean-tested. Our training cruises offer practical, hands-on learning, ideal for aspiring offshore sailors, those seeking to log nautical miles for certifications (ASA/RYA), or anyone wanting to build confidence in challenging conditions.
            </p>
            <ul className="list-disc list-inside text-text text-lg space-y-3 mb-10 pl-5">
              <li>Gain practical experience in sail handling, watchkeeping, and navigation.</li>
              <li>Receive direct mentorship from experienced captains who have successfully crossed oceans.</li>
              <li>Opportunity to log significant nautical miles and prepare for skipper's licenses.</li>
              <li>Focus on real-world decision-making, problem-solving, and living aboard at sea.</li>
              <li>Learn firsthand about marine canvas protection and maintenance in real-world scenarios.</li>
            </ul>
            <Link to="/contact" className="btn-primary inline-block">
              Discover Upcoming Cruise Dates
            </Link>
          </div>

          <p className="text-base text-lg text-center text-text mt-12 leading-relaxed">
            Whether you're looking to significantly enhance your skills, prepare for your first offshore journey, or simply experience the thrill of sailing with experienced mentors, Marine Canvas Florida offers a unique and invaluable path to your maritime aspirations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SailingWithUs;
