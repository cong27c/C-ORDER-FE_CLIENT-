"use client";

import type React from "react";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Slide data structure with configuration
interface Slide {
  id: number;
  image: string;
  headline: string;
  subheadline: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  textPosition?: "left" | "center" | "right";
}

// Sample slides - replace with your actual content
const slides: Slide[] = [
  {
    id: 1,
    image: "/images/z7337809173070_064b725ed5988d765dc8bac1b4b5f62e.jpg",
    headline: "Spring Collection 2025",
    subheadline: "Discover effortless elegance in every piece",
    primaryCTA: {
      text: "Shop Collection",
      href: "/collections/spring-2025",
    },
    secondaryCTA: {
      text: "Explore Lookbook",
      href: "/lookbook",
    },
    textPosition: "left",
  },
  {
    id: 2,
    image: "/images/z7337809174546_fd77f14940b7a585398bbc7e9797268c.jpg",
    headline: "Urban Essentials",
    subheadline: "Timeless pieces for modern living",
    primaryCTA: {
      text: "Shop Now",
      href: "/collections/essentials",
    },
    textPosition: "center",
  },
  {
    id: 3,
    image: "/images/z7337809186371_8f557d80d87c8d7e15483db22892de0a.jpg",
    headline: "Evening Glamour",
    subheadline: "Make every moment unforgettable",
    primaryCTA: {
      text: "Discover More",
      href: "/collections/evening",
    },
    secondaryCTA: {
      text: "View New Arrivals",
      href: "/new-arrivals",
    },
    textPosition: "right",
  },
];

const AUTOPLAY_INTERVAL = 5000; // 5 seconds
const TRANSITION_DURATION = 600; // 600ms for smooth transition

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Navigate to specific slide
  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Navigate to previous slide
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  // Navigate to next slide
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      goToNext();
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext]);

  // Pause auto-play on hover (desktop)
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  // Keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrevious, goToNext]);

  const currentSlide = slides[currentIndex];

  // Get text alignment class based on position
  const getTextAlignmentClass = (position?: "left" | "center" | "right") => {
    switch (position) {
      case "left":
        return "items-start text-left";
      case "right":
        return "items-end text-right";
      default:
        return "items-center text-center";
    }
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-neutral-900"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Hero carousel"
      aria-roledescription="carousel"
    >
      {/* Slides Container */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-${TRANSITION_DURATION} ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== currentIndex}
          >
            {/* Background Image with lazy loading */}
            <img
              src={slide.image || "/placeholder.svg"}
              alt=""
              loading={index === 0 ? "eager" : "lazy"}
              className="h-full w-full object-cover"
            />

            {/* Overlay for better text readability - gradient from bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Content Container - Responsive positioning */}
            <div className="absolute inset-0 flex items-end justify-center px-4 pb-16 sm:pb-20 md:items-center md:pb-0">
              <div
                className={`flex max-w-4xl flex-col gap-4 sm:gap-6 ${getTextAlignmentClass(
                  slide.textPosition
                )} w-full md:gap-8`}
              >
                {/* Headline - Responsive typography */}
                <h1 className="text-balance font-serif text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  {slide.headline}
                </h1>

                {/* Subheadline - Refined sizing across breakpoints */}
                <p className="text-pretty text-base font-light text-white/90 sm:text-lg md:text-xl lg:text-2xl">
                  {slide.subheadline}
                </p>

                {/* CTA Buttons - Stack on mobile, inline on tablet+ */}
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <Button
                    size="lg"
                    asChild
                    className="bg-white text-neutral-900 hover:bg-white/90"
                  >
                    <a href={slide.primaryCTA.href}>{slide.primaryCTA.text}</a>
                  </Button>
                  {slide.secondaryCTA && (
                    <Button
                      size="lg"
                      variant="outline"
                      asChild
                      className="border-white bg-transparent text-white hover:bg-white/10 hover:text-white"
                    >
                      <a href={slide.secondaryCTA.href}>
                        {slide.secondaryCTA.text}
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile, visible on tablet+ */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 md:block"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 md:block"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dot Indicators - Bottom center on all devices */}
      <div
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2 sm:bottom-8"
        role="tablist"
        aria-label="Slide navigation"
      >
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-white"
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
            role="tab"
          />
        ))}
      </div>

      {/* Screen reader only current slide indicator */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {currentIndex + 1} of {slides.length}
      </div>
    </section>
  );
}
