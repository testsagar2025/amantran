import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya & Rahul Sharma",
    location: "Mumbai",
    rating: 5,
    review: "Amantran created the most stunning 3D invitation for our wedding. Every guest was amazed by the quality and attention to detail. It truly set the tone for our celebration!",
    event: "Wedding Invitation",
  },
  {
    id: 2,
    name: "Ananya Mehta",
    location: "Delhi",
    rating: 5,
    review: "The Imperial Odyssey collection exceeded our expectations. The intricate designs and smooth animations made our invitation unforgettable. Highly recommend!",
    event: "Engagement Ceremony",
  },
  {
    id: 3,
    name: "Vikram & Sneha Patel",
    location: "Ahmedabad",
    rating: 5,
    review: "From concept to delivery, the team was exceptional. Our Moonblossom invitation received countless compliments. Worth every penny!",
    event: "Reception Invite",
  },
  {
    id: 4,
    name: "Kavita Reddy",
    location: "Hyderabad",
    rating: 5,
    review: "The Royal Chronicle design perfectly captured our family's tradition. The 3D elements added such a magical touch to our celebration announcement.",
    event: "Haldi Ceremony",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Testimonials
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-4 mb-6">
            What Our Clients Say
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card-premium p-8 h-full relative overflow-hidden hover:border-primary/40 transition-all duration-500">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-16 h-16 text-primary" />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-foreground/80 leading-relaxed mb-6 text-lg italic">
                  "{testimonial.review}"
                </p>

                {/* Client Info */}
                <div className="flex items-center justify-between pt-4 border-t border-border/30">
                  <div>
                    <h4 className="font-heading text-lg text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                  <span className="px-3 py-1 text-xs uppercase tracking-wider bg-primary/10 text-primary rounded-full">
                    {testimonial.event}
                  </span>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-primary/20 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 glass-card px-8 py-4 rounded-full">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-left">
              <p className="text-foreground font-semibold">5.0 Rating</p>
              <p className="text-muted-foreground text-sm">500+ Happy Couples</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
