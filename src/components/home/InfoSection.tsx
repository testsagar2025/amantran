import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HelpCircle, ArrowRight, MessageCircle, BookOpen } from "lucide-react";

const InfoSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal-light/50 to-background" />

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* FAQ Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card-premium rounded-2xl p-8 md:p-10 hover-lift group"
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                <HelpCircle className="w-8 h-8 text-gold" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                  Have Questions?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Find answers about our invitations, customization process, pricing, and delivery.
                </p>
                <Button asChild variant="heroOutline" size="lg" className="group/btn">
                  <Link to="/faq" className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Read FAQ
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* WhatsApp Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card-premium rounded-2xl p-8 md:p-10 hover-lift group"
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500/20 to-green-500/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                <MessageCircle className="w-8 h-8 text-green-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-3 group-hover:text-green-400 transition-colors duration-300">
                  Ready to Start?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Let's discuss your requirements and create something beautiful together.
                </p>
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-500 text-white group/btn">
                  <a 
                    href="https://wa.me/919981249634" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Chat on WhatsApp
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
