import { motion } from "framer-motion";

const StatementSection = () => {
  return (
    <section className="section-padding bg-gradient-luxury relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Ornamental Lines */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-gold/50" />
            <div className="w-2 h-2 rotate-45 border border-gold/50" />
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-gold/50" />
          </div>

          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight italic">
            "An invitation designed to be remembered,
            <span className="text-gold"> even years from now.</span>"
          </h2>

          {/* Bottom Ornament */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-gold/50" />
            <div className="w-2 h-2 rotate-45 border border-gold/50" />
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-gold/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatementSection;
