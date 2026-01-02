import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Heart, Eye, Sparkles } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="section-padding relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
            
            <div className="container mx-auto relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-3xl mx-auto"
              >
                <h1 className="font-heading text-5xl md:text-6xl text-foreground mb-6">
                  About <span className="text-gold">Us</span>
                </h1>
                <div className="ornament-line w-32 mx-auto" />
              </motion.div>
            </div>
          </section>

          {/* Our Story */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                    Our Story
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Amantran 3D was founded with a vision to transform traditional invitations into cinematic digital experiences.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We believe an invitation is more than information — it is the first impression of a celebration, an emotion shared with loved ones.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="aspect-video rounded-lg overflow-hidden gold-border bg-charcoal-light flex items-center justify-center">
                    <div className="text-center p-8">
                      <Heart className="w-16 h-16 text-gold mx-auto mb-4" />
                      <p className="text-foreground font-heading text-2xl">Crafted with Love</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* What We Do */}
          <section className="py-16 md:py-24 bg-charcoal-light">
            <div className="container mx-auto px-4 md:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto"
              >
                <Eye className="w-12 h-12 text-gold mx-auto mb-6" />
                <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                  What We Do
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We specialize in premium 3D digital wedding invitations that blend tradition, modern design, and cinematic storytelling. Every design is crafted with precision, creativity, and attention to detail.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Our Philosophy */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto"
              >
                <Sparkles className="w-12 h-12 text-gold mx-auto mb-6" />
                <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                  Our Philosophy
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We design for families who appreciate elegance, aesthetics, and meaningful presentation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Each invitation we create reflects grace, celebration, and timeless beauty.
                </p>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </PageTransition>
  );
};

export default About;
