import { motion } from "framer-motion";
import { Palette, FileText, Wand2, Send, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: Palette,
    title: "Choose Your Design",
    description: "Explore our curated collections and select the invitation style that resonates with your celebration.",
    color: "from-gold/20 to-gold/5",
  },
  {
    icon: FileText,
    title: "Share Your Details",
    description: "Provide your event details, names, dates, venues, and preferences.",
    color: "from-burgundy/20 to-burgundy/5",
  },
  {
    icon: Wand2,
    title: "Cinematic Customization",
    description: "Our team personalizes your invitation with refined motion, elegant transitions, and detailed finishing.",
    color: "from-gold/20 to-gold/5",
  },
  {
    icon: Send,
    title: "Final Delivery",
    description: "Receive your completed invitation, ready to share digitally with family and guests.",
    color: "from-burgundy/20 to-burgundy/5",
  },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-charcoal-light via-background to-charcoal-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--gold)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Decorative Side Lines */}
      <div className="absolute top-0 left-8 md:left-16 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
      <div className="absolute top-0 right-8 md:right-16 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
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
            The Process
          </motion.span>
          <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-6">
            How We <span className="text-gold italic">Create</span> Your Invitation
          </h2>
          <div className="ornament-line-animated w-40 mx-auto" />
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Connection Line - Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[calc(50%+60px)] w-[calc(100%-60px)] h-px">
                  <motion.div
                    className="h-full bg-gradient-to-r from-gold/40 to-gold/10"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                    style={{ transformOrigin: "left" }}
                  />
                  <motion.div
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-r border-t border-gold/40"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 1 }}
                  />
                </div>
              )}

              {/* Card */}
              <div className="glass-card-premium rounded-2xl p-8 h-full hover-lift group-hover:border-gold/30 transition-all duration-500">
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gold flex items-center justify-center shadow-lg">
                  <span className="text-charcoal text-sm font-bold">{index + 1}</span>
                </div>

                {/* Icon with Gradient Background */}
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                  <step.icon className="w-9 h-9 text-gold" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl text-center text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            to="/how-to-order"
            className="inline-flex items-center gap-3 text-gold font-medium hover:gap-4 transition-all duration-300 group"
          >
            <span className="text-lg">Learn More About Ordering</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
