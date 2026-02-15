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
  }, [isAutoPlay, reviews.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setIsAutoPlay(false);
  };

  if (!reviews || reviews.length === 0) {
    return null;
  }

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-background to-secondary/5">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Loved by <span className="text-primary">Boat Owners</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            See what our satisfied customers have to say about their Marine Canvas Florida experience
          </p>
          <div className="flex items-center justify-center gap-3">
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

        {/* Carousel */}
        <div className="relative w-full">
          {/* Review Cards Grid */}
          <div className="w-full overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[0, 1, 2].map((offset) => {
                const reviewIndex = (currentIndex + offset) % reviews.length;
                const review = reviews[reviewIndex];

                return (
                  <motion.div
                    key={`${review.id}-${currentIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: offset * 0.1 }}
                    className="h-full"
                  >
                    <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 h-full border border-border flex flex-col">
                      {/* Stars */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-accent text-accent"
                          />
                        ))}
                      </div>

                      {/* Review Text */}
                      <p className="text-foreground mb-4 text-sm leading-relaxed flex-grow">
                        "{review.text}"
                      </p>

                      {/* Divider */}
                      <div className="border-t border-border my-4"></div>

                      {/* Author Info */}
                      <div>
                        <p className="font-semibold text-foreground text-sm">{review.author}</p>
                        <p className="text-xs text-muted-foreground mb-2">{review.date}</p>
                        {review.verified && (
                          <p className="text-xs text-primary font-medium">✓ Verified Review</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
            className="absolute -left-4 md:-left-12 top-1/3 -translate-y-1/2 z-20 bg-primary hover:bg-primary/90 text-white rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={goToNext}
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
            className="absolute -right-4 md:-right-12 top-1/3 -translate-y-1/2 z-20 bg-primary hover:bg-primary/90 text-white rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlay(false);
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'bg-primary w-3 h-3'
                  : 'bg-border hover:bg-muted w-2 h-2'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
