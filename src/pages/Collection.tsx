import { useState } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, FileText, Clock, MapPin, Heart, Calendar, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import VideoPlayer from "@/components/VideoPlayer";
import BookingForm from "@/components/BookingForm";

import royalChronicle from "@/assets/collection-royal-chronicle.jpg";
import moonblossom from "@/assets/collection-moonblossom.jpg";
import shubhAarambh from "@/assets/collection-shubh-aarambh.jpg";
import imperialOdyssey from "@/assets/collection-imperial-odyssey.jpg";
import sovereignRhythm from "@/assets/collection-sovereign-rhythm.jpg";

const collectionsData: Record<string, {
  name: string;
  category: string;
  description: string;
  image: string;
  videoId: string;
  addons: string[];
}> = {
  "royal-chronicle": {
    name: "The Royal Chronicle",
    category: "Wedding Invitation",
    description: "The Royal Chronicle is designed to capture the grandeur and majesty of royal celebrations. Featuring ornate golden frames, regal motifs, and cinematic transitions, this invitation embodies the rich heritage and timeless elegance of traditional Indian weddings.",
    image: royalChronicle,
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    addons: ["Save The Date", "3 Day Countdown", "2 Day Countdown", "One Day To Go", "Function Reminder with Location", "Thank You Note", "PDF Invitation"],
  },
  "moonblossom-heirloom": {
    name: "The Moonblossom Heirloom",
    category: "Wedding Invitation",
    description: "The Moonblossom Heirloom captures the ethereal beauty of moonlit romance. With delicate lotus florals, soft silver accents, and dreamy transitions, this collection is perfect for couples who appreciate subtle elegance and timeless charm.",
    image: moonblossom,
    videoId: "dQw4w9WgXcQ",
    addons: ["Save The Date", "3 Day Countdown", "2 Day Countdown", "One Day To Go", "Function Reminder with Location", "Thank You Note", "PDF Invitation"],
  },
  "shubh-aarambh": {
    name: "Shubh Aarambh",
    category: "Wedding Invitation",
    description: "Shubh Aarambh is designed to celebrate new beginnings with grace and elegance. Inspired by tradition and modern cinematic design, this invitation captures the warmth, joy, and auspicious spirit of wedding celebrations.",
    image: shubhAarambh,
    videoId: "dQw4w9WgXcQ",
    addons: ["Save The Date", "3 Day Countdown", "2 Day Countdown", "One Day To Go", "Function Reminder with Location", "Thank You Note", "PDF Invitation"],
  },
  "imperial-odyssey": {
    name: "Imperial Odyssey",
    category: "Wedding Invitation",
    description: "Imperial Odyssey takes you on a majestic journey through royal palaces and grand celebrations. With emerald and gold aesthetics, elephant motifs, and palatial architecture, this collection is perfect for destination weddings and grand celebrations.",
    image: imperialOdyssey,
    videoId: "dQw4w9WgXcQ",
    addons: ["Save The Date", "3 Day Countdown", "2 Day Countdown", "One Day To Go", "Function Reminder with Location", "Thank You Note", "PDF Invitation"],
  },
  "sovereign-rhythm": {
    name: "Sovereign Rhythm",
    category: "Wedding Invitation",
    description: "Sovereign Rhythm blends contemporary design with traditional elements. Featuring modern geometric patterns, rose gold accents, and sophisticated animations, this collection appeals to couples who want a fresh, elegant aesthetic.",
    image: sovereignRhythm,
    videoId: "dQw4w9WgXcQ",
    addons: ["Save The Date", "3 Day Countdown", "2 Day Countdown", "One Day To Go", "Function Reminder with Location", "Thank You Note", "PDF Invitation"],
  },
};

const allCollections = [
  { id: "royal-chronicle", name: "The Royal Chronicle", image: royalChronicle },
  { id: "moonblossom-heirloom", name: "The Moonblossom Heirloom", image: moonblossom },
  { id: "shubh-aarambh", name: "Shubh Aarambh", image: shubhAarambh },
  { id: "imperial-odyssey", name: "Imperial Odyssey", image: imperialOdyssey },
  { id: "sovereign-rhythm", name: "Sovereign Rhythm", image: sovereignRhythm },
];

const addonIcons: Record<string, React.ElementType> = {
  "Save The Date": Calendar,
  "3 Day Countdown": Clock,
  "2 Day Countdown": Clock,
  "One Day To Go": Clock,
  "Function Reminder with Location": MapPin,
  "Thank You Note": Heart,
  "PDF Invitation": FileText,
};

const Collection = () => {
  const { id } = useParams();
  const collection = id ? collectionsData[id] : null;
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  if (!collection) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-foreground mb-4">Collection not found</h1>
          <Button asChild variant="outline">
            <Link to="/gallery">Back to Gallery</Link>
          </Button>
        </div>
      </div>
    );
  }

  const otherCollections = allCollections.filter((c) => c.id !== id);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Back Link */}
        <div className="container mx-auto px-4 md:px-8 pt-8">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Gallery
          </Link>
        </div>

        {/* Hero Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Video Player */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-[9/16] md:aspect-[3/4] rounded-lg overflow-hidden gold-border">
                  <VideoPlayer
                    videoId={collection.videoId}
                    thumbnail={collection.image}
                    title={collection.name}
                    className="w-full h-full"
                  />
                </div>
              </motion.div>

              {/* Details */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-gold text-sm font-medium tracking-wider uppercase">
                  {collection.category}
                </span>
                <h1 className="font-heading text-4xl md:text-5xl text-foreground mt-2 mb-6">
                  {collection.name}
                </h1>
                <div className="ornament-line w-24 mb-6" />
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {collection.description}
                </p>

                {/* Add-ons */}
                <div className="mb-8">
                  <h3 className="font-heading text-xl text-foreground mb-4">Add-Ons Included</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {collection.addons.map((addon) => {
                      const Icon = addonIcons[addon] || Check;
                      return (
                        <div
                          key={addon}
                          className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-border/50"
                        >
                          <Icon className="w-5 h-5 text-gold flex-shrink-0" />
                          <span className="text-foreground text-sm">{addon}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="hero" 
                    size="lg"
                    onClick={() => setIsBookingOpen(true)}
                  >
                    Book This Design
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => setIsBookingOpen(true)}
                  >
                    WhatsApp Inquiry
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Explore More */}
        <section className="section-padding bg-charcoal-light">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
                Explore More
              </h2>
              <div className="ornament-line w-24 mx-auto" />
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {otherCollections.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/collection/${item.id}`}
                    className="group block relative aspect-square rounded-lg overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-charcoal/60 group-hover:bg-charcoal/40 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <h3 className="font-heading text-lg text-foreground text-center group-hover:text-gold transition-colors">
                        {item.name}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      
      {/* Booking Form Modal */}
      <BookingForm
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        collectionName={collection.name}
      />
    </div>
  );
};

export default Collection;
