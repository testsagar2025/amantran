import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import royalChronicle from "@/assets/collection-royal-chronicle.jpg";
import moonblossom from "@/assets/collection-moonblossom.jpg";
import shubhAarambh from "@/assets/collection-shubh-aarambh.jpg";
import imperialOdyssey from "@/assets/collection-imperial-odyssey.jpg";
import sovereignRhythm from "@/assets/collection-sovereign-rhythm.jpg";

const collections = [
  {
    id: "royal-chronicle",
    name: "The Royal Chronicle",
    description: "Regal heritage meets cinematic grandeur. Perfect for traditional royal weddings.",
    image: royalChronicle,
  },
  {
    id: "moonblossom-heirloom",
    name: "The Moonblossom Heirloom",
    description: "Ethereal romance under moonlit skies. Ideal for intimate, elegant celebrations.",
    image: moonblossom,
  },
  {
    id: "shubh-aarambh",
    name: "Shubh Aarambh",
    description: "Sacred beginnings with traditional grace. Celebrating auspicious new journeys.",
    image: shubhAarambh,
  },
  {
    id: "imperial-odyssey",
    name: "Imperial Odyssey",
    description: "Majestic journeys through royal splendor. For grand destination weddings.",
    image: imperialOdyssey,
  },
  {
    id: "sovereign-rhythm",
    name: "Sovereign Rhythm",
    description: "Contemporary elegance in motion. Modern sophistication meets tradition.",
    image: sovereignRhythm,
  },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h1 className="font-heading text-5xl md:text-6xl text-foreground mb-6">
                Our <span className="text-gold">Gallery</span>
              </h1>
              <div className="ornament-line w-32 mx-auto mb-6" />
              <p className="text-muted-foreground">
                Explore our exclusive invitation collections, each designed with a unique mood, theme, and cinematic style.
              </p>
            </motion.div>

            {/* Collections Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    className="group block relative overflow-hidden rounded-lg aspect-[4/3] hover-lift"
                  >
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-2 group-hover:text-gold transition-colors">
                        {collection.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {collection.description}
                      </p>
                      <div className="flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        View Designs
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 rounded-lg transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Gallery;
