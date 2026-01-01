import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-wedding.jpg";

const FloatingParticle = ({ delay, x, duration }: { delay: number; x: number; duration: number }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full bg-gold/40"
    style={{ left: `${x}%` }}
    initial={{ y: "100vh", opacity: 0 }}
    animate={{ 
      y: "-10vh", 
      opacity: [0, 1, 1, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
  />
);

const HeroSection = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const particles = Array.from({ length: 20 }, (_, i) => ({
    delay: i * 0.5,
    x: Math.random() * 100,
    duration: 8 + Math.random() * 4,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <img
          src={heroImage}
          alt="Elegant Indian Wedding"
          className="w-full h-[120%] object-cover"
        />
      </motion.div>

      {/* Multiple Overlay Layers for Depth */}
      <div className="absolute inset-0 bg-charcoal/85" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-transparent to-charcoal" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-charcoal/80" />
      
      {/* Animated Vignette */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, hsl(20 10% 8% / 0.4) 70%, hsl(20 10% 8% / 0.8) 100%)",
        }}
        animate={{
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle, i) => (
          <FloatingParticle key={i} {...particle} />
        ))}
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-20 left-8 md:left-16 w-20 h-20 border-l border-t border-gold/20" />
      <div className="absolute top-20 right-8 md:right-16 w-20 h-20 border-r border-t border-gold/20" />
      <div className="absolute bottom-20 left-8 md:left-16 w-20 h-20 border-l border-b border-gold/20" />
      <div className="absolute bottom-20 right-8 md:right-16 w-20 h-20 border-r border-b border-gold/20" />

      {/* Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 md:px-8 text-center"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Sparkle Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-medium tracking-wide">Premium 3D Invitations</span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gold/80 text-lg md:text-xl font-medium tracking-[0.3em] uppercase mb-4"
          >
            Welcome to
          </motion.p>

          {/* Main Heading with Enhanced Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-heading text-6xl md:text-8xl lg:text-9xl font-light text-foreground mb-2 tracking-tight"
          >
            Amantran<span className="text-gold text-shadow-luxury">3D</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="font-heading text-xl md:text-2xl text-gold/70 italic mb-8 tracking-wide"
          >
            3D Invitation Studio
          </motion.p>

          {/* Animated Ornamental Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center justify-center gap-4 mb-10"
          >
            <div className="w-24 md:w-32 h-px bg-gradient-to-r from-transparent to-gold/50" />
            <motion.div 
              className="w-3 h-3 rotate-45 border border-gold/60"
              animate={{ rotate: [45, 225, 45] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <div className="w-24 md:w-32 h-px bg-gradient-to-l from-transparent to-gold/50" />
          </motion.div>

          {/* Description with Staggered Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-4">
              We design cinematic digital invitations for weddings and once-in-a-lifetime celebrations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Each invite is crafted with elegant visuals and refined motion — created for families who appreciate fine aesthetics and timeless elegance.
            </p>
          </motion.div>

          {/* CTA Buttons with Enhanced Styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button asChild variant="hero" size="xl" className="group relative overflow-hidden">
              <Link to="/gallery">
                <span className="relative z-10 flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Explore Gallery
                </span>
                <motion.div
                  className="absolute inset-0 bg-gold-light"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl" className="group">
              <a href="https://wa.me/919981249634" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-2">
                  WhatsApp Inquiry
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-gold/50 text-xs tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-6 h-10 border-2 border-gold/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gold rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
