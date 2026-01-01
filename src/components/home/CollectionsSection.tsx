import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

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
    featured: true,
  },
  {
    id: "moonblossom-heirloom",
    name: "The Moonblossom Heirloom",
    description: "Ethereal romance under moonlit skies",
    image: moonblossom,
    featured: false,
  },
  {
    id: "shubh-aarambh",
    name: "Shubh Aarambh",
    description: "Sacred beginnings with traditional grace",
    image: shubhAarambh,
    featured: true,
  },
  {
    id: "imperial-odyssey",
    name: "Imperial Odyssey",
    description: "Majestic journeys through royal splendor",
    image: imperialOdyssey,
    featured: false,
  },
  {
    id: "sovereign-rhythm",
    name: "Sovereign Rhythm",
    description: "Contemporary elegance in motion",
    image: sovereignRhythm,
    featured: false,
  },
];

const CollectionsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto relative z-10">
        {/* Section Header with Enhanced Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
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

        {/* Featured Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* First Row - 2 items with first being large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 lg:col-span-2 lg:row-span-2"
          >
            <CollectionCard collection={collections[0]} large />
          </motion.div>

          {collections.slice(1, 3).map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
            >
              <CollectionCard collection={collection} />
            </motion.div>
          ))}

          {collections.slice(3).map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
            >
              <CollectionCard collection={collection} />
            </motion.div>
          ))}
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

interface CollectionCardProps {
  collection: typeof collections[0];
  large?: boolean;
}

const CollectionCard = ({ collection, large }: CollectionCardProps) => (
  <Link
    to={`/collection/${collection.id}`}
    className={`group block relative overflow-hidden rounded-xl ${
      large ? "aspect-[4/3] md:aspect-auto md:h-full min-h-[400px]" : "aspect-[4/5]"
    } hover-glow`}
  >
    {/* Image with Zoom Effect */}
    <img
      src={collection.image}
      alt={collection.name}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />

    {/* Multi-layer Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    {/* Play Icon for Video Hint */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-gold/30 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500">
      <Play className="w-6 h-6 text-gold ml-1" />
    </div>

    {/* Decorative Corners */}
    <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-gold/30 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
    <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-gold/30 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
    <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-gold/30 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
    <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-gold/30 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />

    {/* Content */}
    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
      <motion.div
        initial={false}
        className="transform group-hover:-translate-y-2 transition-transform duration-500"
      >
        <h3 className={`font-heading ${large ? "text-3xl md:text-4xl" : "text-2xl"} text-foreground mb-2 group-hover:text-gold transition-colors duration-300`}>
          {collection.name}
        </h3>
        <p className="text-muted-foreground text-sm md:text-base mb-4 line-clamp-2">
          {collection.description}
        </p>
        <div className="flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          View Collection
          <ArrowRight className="w-4 h-4" />
        </div>
      </motion.div>
    </div>

    {/* Animated Border */}
    <div className="absolute inset-0 border border-transparent group-hover:border-gold/20 rounded-xl transition-all duration-500" />
  </Link>
);

export default CollectionsSection;
