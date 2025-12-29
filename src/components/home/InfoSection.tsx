import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

const InfoSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Icon */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-full border border-gold/30 bg-card/50 flex items-center justify-center">
            <HelpCircle className="w-10 h-10 text-gold" />
          </div>

          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Everything you need to know
          </h2>
          
          <p className="text-muted-foreground mb-8">
            Have questions about our invitations, customization process, or delivery? Find all the answers you need.
          </p>

          <Button asChild variant="outline" size="lg">
            <Link to="/faq">
              Frequently Asked Questions
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default InfoSection;
