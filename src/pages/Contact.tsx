import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Youtube } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Contact = () => {
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
                Get in <span className="text-gold">Touch</span>
              </h1>
              <div className="ornament-line w-32 mx-auto mb-6" />
              <p className="text-muted-foreground text-lg">
                We would love to be a part of your celebration.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                {/* WhatsApp */}
                <a
                  href="https://wa.me/919981249634"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 rounded-lg bg-card/50 border border-border/50 hover:border-gold/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-foreground mb-1 group-hover:text-gold transition-colors">
                      WhatsApp
                    </h3>
                    <p className="text-muted-foreground">9981249634</p>
                    <p className="text-sm text-gold mt-2">Chat with us instantly</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:contact@amantran3d.in"
                  className="flex items-start gap-4 p-6 rounded-lg bg-card/50 border border-border/50 hover:border-gold/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-foreground mb-1 group-hover:text-gold transition-colors">
                      Email
                    </h3>
                    <p className="text-muted-foreground">contact@amantran3d.in</p>
                  </div>
                </a>

                {/* Address */}
                <a
                  href="https://maps.app.goo.gl/AcEs3coGrsVuAzdx7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 rounded-lg bg-card/50 border border-border/50 hover:border-gold/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-foreground mb-1 group-hover:text-gold transition-colors">
                      Address
                    </h3>
                    <p className="text-muted-foreground">
                      Kushwah Shree Nagar, 218/2,<br />
                      Kushvahshree Nagar, Rishi Nagar,<br />
                      Indore, Madhya Pradesh 452015
                    </p>
                    <p className="text-sm text-gold mt-2">View on Google Maps</p>
                  </div>
                </a>

                {/* Social Links */}
                <div className="p-6 rounded-lg bg-card/50 border border-border/50">
                  <h3 className="font-heading text-xl text-foreground mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/amantran3d/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.youtube.com/@InvitationStudio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-all duration-300"
                      aria-label="YouTube"
                    >
                      <Youtube className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="rounded-lg overflow-hidden gold-border h-[500px] lg:h-full min-h-[400px]"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.4975!2d75.8467!3d22.7496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0b5c8b3a7b%3A0x7c8b3a7b7c8b3a7b!2sKushvahshree%20Nagar%2C%20Rishi%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452015!5e0!3m2!1sen!2sin!4v1703000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Amantran 3D Location"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
