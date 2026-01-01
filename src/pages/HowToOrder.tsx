import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle, MessageCircle, Palette, Send, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: Package,
    title: "Step 1: Select Your Invite",
    content: (
      <>
        <p className="mb-4">
          We have a wide range of styles for our invites. To make it easier to select, we've grouped the templates into collections on the basis of price, which you can access via the filter tag in the gallery or on the home page.
        </p>
        <div className="bg-card/50 border border-border/50 rounded-lg p-6 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-heading text-lg text-foreground">Classic</span>
            <span className="text-gold font-medium">₹2,500 - ₹3,000</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-heading text-lg text-foreground">Premium</span>
            <span className="text-gold font-medium">₹3,500 - ₹4,500</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-heading text-lg text-foreground">Luxury</span>
            <span className="text-gold font-medium">₹5,000 - ₹7,000</span>
          </div>
        </div>
      </>
    ),
  },
  {
    icon: MessageCircle,
    title: "Step 2: Enquire",
    content: (
      <p>
        Once you've shortlisted your preferred design, simply click on the WhatsApp button to send us your enquiry. This will directly connect you with our team, where you can share your requirements, ask questions, and discuss customization. We'll review your request and get back to you shortly with complete details and pricing.
      </p>
    ),
  },
  {
    icon: Palette,
    title: "Step 3: The Process",
    content: (
      <div className="space-y-4">
        <p>Once you've finalised the template you want, the process itself begins:</p>
        <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
          <li>Send us an advance of <span className="text-gold font-medium">30%</span> along with the final text as you wish it to appear. The payment details would be shared via WhatsApp.</li>
          <li>A design draft will be shared in the form of static images, for you to check text and information.</li>
          <li>We provide a maximum of <span className="text-gold font-medium">two rounds of text edits</span>. The video animation starts only after we receive a confirmation on the design draft.</li>
          <li>A watermarked video draft is shared for approvals. Along with which the balance <span className="text-gold font-medium">70% amount</span> is requested.</li>
        </ol>
      </div>
    ),
  },
  {
    icon: Send,
    title: "Step 4: Delivery",
    content: (
      <div className="space-y-4">
        <p>There are two ways to take delivery of your invite:</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card/50 border border-border/50 rounded-lg p-6">
            <h4 className="font-heading text-lg text-gold mb-2">MP4 File</h4>
            <p className="text-muted-foreground text-sm">
              You can attach and send to your invitees directly via WhatsApp or any messaging app.
            </p>
          </div>
          <div className="bg-card/50 border border-border/50 rounded-lg p-6">
            <h4 className="font-heading text-lg text-gold mb-2">Private Link</h4>
            <p className="text-muted-foreground text-sm">
              Send a streaming link allowing the invitees to view the video rather than downloading it.
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

const HowToOrder = () => {
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
                How To <span className="text-gold">Order</span>
              </h1>
              <div className="ornament-line w-32 mx-auto mb-6" />
              <p className="text-muted-foreground text-lg">
                Ordering an Invitation on Amantran3D is easy... just follow these simple steps.
              </p>
            </motion.div>

            {/* Steps */}
            <div className="max-w-3xl mx-auto space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-20 bottom-0 w-px bg-gradient-to-b from-gold/50 to-transparent hidden md:block" />
                  )}

                  <div className="flex gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-full border border-gold/30 bg-card/50 flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-gold" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
                        {step.title}
                      </h2>
                      <div className="text-muted-foreground">
                        {step.content}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mt-20"
            >
              <div className="inline-flex items-center gap-2 text-gold mb-6">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Ready to get started?</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="hero" size="lg">
                  <Link to="/gallery">
                    Explore Gallery
                  </Link>
                </Button>
                <Button asChild variant="heroOutline" size="lg">
                  <a href="https://wa.me/919981249634" target="_blank" rel="noopener noreferrer">
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default HowToOrder;
