'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { reviews } from '@/data/reviews';
import { motion, AnimatePresence } from 'framer-motion';

const ReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);

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

  const currentReview = reviews[currentIndex];

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-background to-secondary/5">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Loved by <span className="text-primary">Boat Owners</span>
          </h2>
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

        {/* Carousel - Single Slide */}
        <div className="relative w-full h-80 md:h-96 flex items-center">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
            className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-20 bg-primary hover:bg-primary/90 text-white rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Review Card with Smooth Transitions */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full flex items-center justify-center px-4"
            >
              <div className="bg-card rounded-lg p-8 md:p-10 shadow-lg border border-border w-full max-w-2xl">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(currentReview.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-foreground mb-6 text-lg leading-relaxed italic">
                  "{currentReview.text}"
                </p>

                {/* Divider */}
                <div className="border-t border-border my-6"></div>

                {/* Author Info */}
                <div>
                  <p className="font-semibold text-foreground text-base">{currentReview.author}</p>
                  <p className="text-sm text-muted-foreground mb-2">{currentReview.date}</p>
                  {currentReview.verified && (
                    <p className="text-sm text-primary font-medium">✓ Verified Review</p>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={goToNext}
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
            className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-20 bg-primary hover:bg-primary/90 text-white rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8 flex-wrap">
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

        {/* Review Counter */}
        <div className="text-center mt-6 text-sm text-muted-foreground">
          Review {currentIndex + 1} of {reviews.length}
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
