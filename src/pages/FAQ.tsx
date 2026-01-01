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

const faqCategories = [
  {
    title: "Process",
    faqs: [
      {
        question: "How do I book an order?",
        answer: "Once you have finalized the invite, please share the final text and 30% advance. You can take forward this conversation on our WhatsApp number.",
      },
      {
        question: "How long will you take to deliver?",
        answer: "Our usual process is 2-3 days. This time includes your text layout, edit rounds and then the final output of your invite video.",
      },
      {
        question: "How do I share my text?",
        answer: "We provide a form to you, which you need to fill and share.",
      },
      {
        question: "What if we are not happy with the invite?",
        answer: "This is the reason we give 2 rounds of edits. What you see is what you get in the final product.",
      },
      {
        question: "I have 4 functions but not everyone is invited to all the functions. Will you give me 4 separate videos?",
        answer: "Yes, this is possible. We first create one complete master video with all wedding functions included. After that, we edit separate versions from the same video for guests who are invited only to selected events, so they receive only the relevant details. These additional versions are available at a minimal extra charge.",
      },
      {
        question: "How do we contact you?",
        answer: "WhatsApp is our primary source of communication. Since this is a digital product, communication via WhatsApp and email is a lot more convenient.",
      },
    ],
  },
  {
    title: "Payment",
    faqs: [
      {
        question: "What is your payment process?",
        answer: "30% advance at the time of booking the order and balance 70% before the final file is shared.",
      },
      {
        question: "What are the modes of payment available?",
        answer: "You can do a direct bank transfer or pay through UPI.",
      },
    ],
  },
  {
    title: "Design & Animation",
    faqs: [
      {
        question: "What are templates?",
        answer: "Templates are pre-designed invites with the same thought, design and execution process we do for a custom. Templates only help you get the invite quicker at the best possible price.",
      },
      {
        question: "Can we make design changes to the invite?",
        answer: "These are templates. The only customisation available is in Text and Music.",
      },
      {
        question: "Can the font be changed?",
        answer: "These are templates. The only customisation available is in Text and Music.",
      },
      {
        question: "Can I change the music?",
        answer: "Yes, you can. However, you need to finalize the music as soon as the text is approved.",
      },
      {
        question: "Do you do invites in other languages?",
        answer: "Yes, we do. But not all invites are conducive to it, so kindly share links of your preferred invites and your text for us to help pick out the perfect fit for you.",
      },
      {
        question: "We want to mix 2 different songs for the invite?",
        answer: "We don't do music editing and mixing at our end. However if you provide the file, we are happy to use it.",
      },
      {
        question: "Do you suggest music options?",
        answer: "Yes we do. But music is a personal choice, so the final decision is on you.",
      },
    ],
  },
  {
    title: "Price",
    faqs: [
      {
        question: "I only have 2 functions, will the price of the invite change?",
        answer: "Videos are shown with a maximum of 6 function slides. You can choose to take 1 or maximum of 6, price does not change.",
      },
      {
        question: "We want the same invite for the other (Bride or Groom) side of the family. Is that chargeable?",
        answer: "Yes, it is charged extra.",
      },
      {
        question: "Are digital stationery part of the package?",
        answer: "No, they are additional.",
      },
      {
        question: "Is Monogram part of the invite cost?",
        answer: "It is an additional cost.",
      },
      {
        question: "Is Save the Date included with the invite?",
        answer: "It is an additional cost.",
      },
      {
        question: "Does the cost remain the same, if in a different language?",
        answer: "A nominal price is charged for language other than English & Hindi.",
      },
      {
        question: "We want an extra video with a lesser number of function slides. Is that chargeable?",
        answer: "Yes, a minimal additional charge applies.",
      },
    ],
  },
  {
    title: "Terms & Conditions",
    faqs: [
      {
        question: "How many edit rounds do you provide?",
        answer: "We provide two rounds of text edits.",
      },
      {
        question: "I don't need any edit rounds, my text is final. Can you give it to me sooner?",
        answer: "From our experience, Clients do end up using the edit rounds. However, if you are okay with the first draft, we are happy to deliver it sooner.",
      },
      {
        question: "Would you be giving us a pdf/static images of the invite along with the video?",
        answer: "No, we don't do static invites. However, we do digital itinerary additional to the Invite.",
      },
      {
        question: "We want a few print invites?",
        answer: "These invites are designed for digital purposes only.",
      },
      {
        question: "Can you remove your company logo from the invite?",
        answer: "Design is a copyright of Amantran3D and our branding goes on all our products.",
      },
      {
        question: "Can you give design files for us to print ourselves?",
        answer: "Design is a copyright of the company and thus not shared with anyone.",
      },
    ],
  },
  {
    title: "Delivery Of Invite",
    faqs: [
      {
        question: "In which format will you give me the final file?",
        answer: "There are two ways to share the file. We can either give you a private Google Drive link to share or an MP4 file to be shared on WhatsApp.",
      },
      {
        question: "Can I send the invite over email?",
        answer: "Emails have size limitations. Our videos for WhatsApp are between 50 - 100 MB to keep the quality and resolution high.",
      },
    ],
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

            {/* FAQ Categories */}
            <div className="max-w-3xl mx-auto space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                >
                  <h2 className="font-heading text-2xl md:text-3xl text-gold mb-6">
                    {category.title}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.faqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`${category.title}-${index}`}
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
              ))}
            </div>

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
