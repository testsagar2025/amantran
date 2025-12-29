import { motion } from "framer-motion";
import { Palette, FileText, Wand2, Send } from "lucide-react";

const steps = [
  {
    icon: Palette,
    title: "Choose Your Design",
    description: "Explore our curated collections and select the invitation style that resonates with your celebration.",
  },
  {
    icon: FileText,
    title: "Share Your Details",
    description: "Provide your event details, names, dates, venues, and preferences.",
  },
  {
    icon: Wand2,
    title: "Cinematic Customization",
    description: "Our team personalizes your invitation with refined motion, elegant transitions, and detailed finishing.",
  },
  {
    icon: Send,
    title: "Final Delivery & Sharing",
    description: "Receive your completed invitation, ready to share digitally with family and guests.",
  },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-charcoal-light relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-px h-96 bg-gradient-to-b from-transparent via-gold/20 to-transparent -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-px h-96 bg-gradient-to-b from-transparent via-gold/20 to-transparent -translate-y-1/2" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            How We Bring Your Invitation to You
          </h2>
          <div className="ornament-line w-32 mx-auto" />
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-gold/30 to-transparent z-0" />
              )}

              <div className="relative z-10 text-center">
                {/* Step Number */}
                <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                  <span className="text-gold text-sm font-medium">{index + 1}</span>
                </div>

                {/* Icon */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-full border border-gold/30 bg-card/50 flex items-center justify-center group-hover:border-gold/60 group-hover:bg-gold/10 transition-all duration-300">
                  <step.icon className="w-10 h-10 text-gold" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
