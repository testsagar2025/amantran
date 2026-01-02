import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import VideoPlayer from "@/components/VideoPlayer";

import royalChronicle from "@/assets/collection-royal-chronicle.jpg";
import moonblossom from "@/assets/collection-moonblossom.jpg";
import shubhAarambh from "@/assets/collection-shubh-aarambh.jpg";
import imperialOdyssey from "@/assets/collection-imperial-odyssey.jpg";
import sovereignRhythm from "@/assets/collection-sovereign-rhythm.jpg";

const collections = [
  {
    id: "royal-chronicle",
    name: "The Royal Chronicle",
    description: "Regal heritage meets cinematic grandeur",
    image: royalChronicle,
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video IDs
  },
  {
    id: "moonblossom-heirloom",
    name: "The Moonblossom Heirloom",
    description: "Ethereal romance under moonlit skies",
    image: moonblossom,
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: "shubh-aarambh",
    name: "Shubh Aarambh",
    description: "Sacred beginnings with traditional grace",
    image: shubhAarambh,
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: "imperial-odyssey",
    name: "Imperial Odyssey",
    description: "Majestic journeys through royal splendor",
    image: imperialOdyssey,
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: "sovereign-rhythm",
    name: "Sovereign Rhythm",
    description: "Contemporary elegance in motion",
    image: sovereignRhythm,
    videoId: "dQw4w9WgXcQ",
  },
];

const CollectionsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  }, [activeIndex]);

  const goNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % collections.length);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + collections.length) % collections.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        goNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  const activeCollection = collections[activeIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      y: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <section className="section-padding relative overflow-hidden min-h-screen flex items-center">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gold/60 text-sm tracking-[0.3em] uppercase mb-4 block"
          >
            Our Collections
          </motion.span>
          <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-6">
            Explore Our <span className="text-gold italic">Designs</span>
          </h2>
          <div className="ornament-line-animated w-40 mx-auto" />
        </motion.div>

        {/* Main Carousel Container */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Navigation Dots - Left Side */}
          <div className="hidden lg:flex lg:col-span-1 flex-col items-center gap-6">
            <button
              onClick={goPrev}
              className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold/60 hover:bg-gold/10 hover:text-gold transition-all duration-300"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
            
            <div className="flex flex-col gap-3">
              {collections.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-gold scale-125"
                      : "bg-gold/30 hover:bg-gold/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold/60 hover:bg-gold/10 hover:text-gold transition-all duration-300"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>

          {/* Video Player - Center */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[9/16] md:aspect-[3/4] lg:aspect-[4/5] max-h-[70vh] overflow-hidden rounded-2xl">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    y: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute inset-0"
                >
                  <VideoPlayer
                    videoId={activeCollection.videoId}
                    thumbnail={activeCollection.image}
                    title={activeCollection.name}
                    className="w-full h-full"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Decorative Frame */}
              <div className="absolute -inset-2 border border-gold/20 rounded-2xl pointer-events-none" />
              <div className="absolute -inset-4 border border-gold/10 rounded-3xl pointer-events-none" />
            </div>

            {/* Mobile Navigation */}
            <div className="flex lg:hidden items-center justify-center gap-4 mt-6">
              <button
                onClick={goPrev}
                className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold/60 hover:bg-gold/10 hover:text-gold transition-all duration-300"
              >
                <ChevronUp className="w-6 h-6" />
              </button>
              
              <div className="flex gap-2">
                {collections.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-gold scale-125"
                        : "bg-gold/30 hover:bg-gold/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={goNext}
                className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold/60 hover:bg-gold/10 hover:text-gold transition-all duration-300"
              >
                <ChevronDown className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Info Panel - Right Side */}
          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="glass-card-premium p-8 rounded-2xl"
              >
                <span className="text-gold/60 text-sm tracking-wider uppercase">
                  Collection {activeIndex + 1} of {collections.length}
                </span>
                
                <h3 className="font-heading text-3xl md:text-4xl text-foreground mt-4 mb-4">
                  {activeCollection.name}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {activeCollection.description}
                </p>

                <Link
                  to={`/collection/${activeCollection.id}`}
                  className="inline-flex items-center gap-3 text-gold font-medium group"
                >
                  <span>View Full Collection</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Thumbnail Preview */}
                <div className="mt-8 pt-8 border-t border-border/30">
                  <p className="text-muted-foreground text-sm mb-4">Browse all designs</p>
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {collections.map((collection, index) => (
                      <button
                        key={collection.id}
                        onClick={() => goToSlide(index)}
                        className={`flex-shrink-0 w-16 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                          index === activeIndex
                            ? "border-gold scale-105"
                            : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={collection.image}
                          alt={collection.name}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/gallery"
            className="inline-flex items-center gap-3 text-gold font-medium hover:gap-4 transition-all duration-300 group"
          >
            <span className="text-lg">View All Collections</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CollectionsCarousel;
