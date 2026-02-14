import React from 'react';
import { Link } from 'wouter';

const NotFound = () => {
  return (
    <section className="py-24 bg-background text-text flex-grow flex items-center justify-center transition-colors duration-300 min-h-screen">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <h1 className="font-semibold text-6xl md:text-8xl text-primary mb-4">404</h1>
        <h2 className="font-semibold text-3xl md:text-4xl text-primary mb-8 leading-tight">
          Page Not Found
        </h2>
        <p className="text-base text-lg text-text mb-10 leading-relaxed">
          Oops! It looks like the page you were trying to reach doesn't exist. It might have been moved or deleted.
        </p>
        <Link to="/" className="btn-primary inline-block">
          Go to Homepage
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
