import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const StatementSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);

  return (
    <section 
      ref={ref}
      className="section-padding bg-gradient-luxury relative overflow-hidden py-32 md:py-40"
    >
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl"
        animate={{
          x: [-100, 0, -100],
          y: [-50, 50, -50],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-burgundy/5 rounded-full blur-3xl"
        animate={{
          x: [100, 0, 100],
          y: [50, -50, 50],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a55c' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          style={{ y, opacity }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Top Ornament */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-6 mb-12"
          >
            <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-gold/40" />
            <motion.div 
              className="relative w-4 h-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 rotate-45 border border-gold/50" />
              <div className="absolute inset-1 rotate-45 bg-gold/20" />
            </motion.div>
            <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-gold/40" />
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-gold/30 text-6xl md:text-8xl font-heading absolute -top-4 left-1/2 -translate-x-1/2 select-none">"</span>
            <p className="font-heading text-3xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight">
              An invitation designed to be{" "}
              <span className="text-gold italic">remembered</span>,
              <br className="hidden md:block" />
              <span className="text-gold/80"> even years from now.</span>
            </p>
          </motion.blockquote>

          {/* Bottom Ornament */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center gap-6 mt-12"
          >
            <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-gold/40" />
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-gold/40"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
            <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-gold/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatementSection;
