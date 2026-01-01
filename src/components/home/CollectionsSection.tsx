import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
  },
  {
    id: "moonblossom-heirloom",
    name: "The Moonblossom Heirloom",
    description: "Ethereal romance under moonlit skies",
    image: moonblossom,
  },
  {
    id: "shubh-aarambh",
    name: "Shubh Aarambh",
    description: "Sacred beginnings with traditional grace",
    image: shubhAarambh,
  },
  {
    id: "imperial-odyssey",
    name: "Imperial Odyssey",
    description: "Majestic journeys through royal splendor",
    image: imperialOdyssey,
  },
  {
    id: "sovereign-rhythm",
    name: "Sovereign Rhythm",
    description: "Contemporary elegance in motion",
    image: sovereignRhythm,
  },
];

const CollectionsSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            Explore Our Collections
          </h2>
          <div className="ornament-line w-32 mx-auto" />
        </motion.div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={`/collection/${collection.id}`}
                className="group block relative overflow-hidden rounded-lg aspect-square hover-lift"
              >
                {/* Image */}
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="font-heading text-2xl text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                    {collection.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {collection.description}
                  </p>
                  <div className="flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    View Collection
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Border Glow on Hover */}
                <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 rounded-lg transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
