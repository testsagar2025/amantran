import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the customization process work?",
    answer: "Once you select a design, you share your event details including names, dates, venues, and any specific preferences. Our team then customizes the invitation accordingly, ensuring every element reflects your celebration perfectly.",
  },
  {
    question: "How long does delivery take?",
    answer: "Delivery timelines vary depending on the level of customization required. Typically, you can expect to receive your completed invitation within a few working days after all details are finalized.",
  },
  {
    question: "How will we receive the invitation?",
    answer: "You will receive a high-quality digital file that can be easily shared on WhatsApp, email, and other digital platforms. The format is optimized for seamless viewing on all devices.",
  },
  {
    question: "Can changes be made after delivery?",
    answer: "Minor revisions can be accommodated depending on the stage of completion. We strive to ensure you're completely satisfied with the final result before delivery.",
  },
  {
    question: "Do you provide add-ons like reminders and countdowns?",
    answer: "Yes, we offer multiple add-ons including Save The Date videos, countdown animations (3 Day, 2 Day, 1 Day), function reminders with location details, thank you notes, and PDF invitations.",
  },
  {
    question: "What languages do you support?",
    answer: "We support multiple languages including English, Hindi, and regional Indian languages. Please specify your language preference when sharing your details.",
  },
  {
    question: "How do I get started?",
    answer: "Simply browse our gallery, select a design you love, and reach out to us via WhatsApp. Our team will guide you through the entire process from customization to delivery.",
  },
];

const FAQ = () => {
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
                Frequently Asked <span className="text-gold">Questions</span>
              </h1>
              <div className="ornament-line w-32 mx-auto mb-6" />
              <p className="text-muted-foreground">
                Everything you need to know about our invitations, customization process, and delivery.
              </p>
            </motion.div>

            {/* FAQ Accordion */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-card/50 border border-border/50 rounded-lg px-6 data-[state=open]:border-gold/30"
                  >
                    <AccordionTrigger className="text-left font-heading text-lg text-foreground hover:text-gold hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mt-16"
            >
              <p className="text-muted-foreground mb-4">
                Still have questions? We're here to help.
              </p>
              <a
                href="https://wa.me/919981249634"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold font-medium hover:underline"
              >
                Chat with us on WhatsApp
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default FAQ;
