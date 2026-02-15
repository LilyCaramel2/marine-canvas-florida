'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { reviews } from '@/data/reviews';
import { motion } from 'framer-motion';

const ReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-background to-secondary/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Loved by <span className="text-primary">Boat Owners</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our satisfied customers have to say about their Marine Canvas Florida experience
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-accent text-accent"
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">5.0 (36 Reviews)</span>
          </div>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Reviews Grid */}
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[0, 1, 2].map((offset) => {
                const reviewIndex = (currentIndex + offset) % reviews.length;
                const review = reviews[reviewIndex];

                return (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: offset * 0.1 }}
                    className="group"
                  >
                    <div className="bg-white dark:bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full border border-border hover:border-primary/50 hover:scale-105 transform">
                      {/* Stars */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-accent text-accent"
                          />
                        ))}
                      </div>

                      {/* Review Text */}
                      <p className="text-foreground mb-4 line-clamp-4 text-sm leading-relaxed">
                        "{review.text}"
                      </p>

                      {/* Author Info */}
                      <div className="border-t border-border pt-4">
                        <p className="font-semibold text-foreground text-sm">{review.author}</p>
                        <p className="text-xs text-muted-foreground">{review.date}</p>
                        {review.verified && (
                          <p className="text-xs text-primary font-medium mt-2">✓ Verified Review</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
            className="absolute -left-6 md:-left-16 top-1/2 -translate-y-1/2 z-10 bg-primary hover:bg-primary/90 text-white rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
            className="absolute -right-6 md:-right-16 top-1/2 -translate-y-1/2 z-10 bg-primary hover:bg-primary/90 text-white rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary w-8'
                  : 'bg-border hover:bg-primary/50 w-2'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Ready to experience the Marine Canvas Florida difference?</p>
          <a
            href="/contact"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Get Your Free Estimate
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
