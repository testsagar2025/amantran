import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, Mail, Phone, Calendar, Users, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
  collectionName?: string;
}

const BookingForm = ({ isOpen, onClose, collectionName }: BookingFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    weddingDate: "",
    functions: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.phone) {
      toast.error("Please fill in required fields");
      return;
    }

    setIsSubmitting(true);

    // Build WhatsApp message
    const message = `*New Booking Inquiry*%0A%0A` +
      `*Collection:* ${collectionName || "Not specified"}%0A` +
      `*Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Email:* ${encodeURIComponent(formData.email || "Not provided")}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Wedding Date:* ${encodeURIComponent(formData.weddingDate || "Not specified")}%0A` +
      `*Number of Functions:* ${encodeURIComponent(formData.functions || "Not specified")}%0A` +
      `*Message:* ${encodeURIComponent(formData.message || "No additional message")}`;

    const whatsappUrl = `https://wa.me/919981249634?text=${message}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
    
    toast.success("Redirecting to WhatsApp...");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      weddingDate: "",
      functions: "",
      message: "",
    });
    
    setIsSubmitting(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-lg max-h-[90vh] overflow-y-auto z-50"
          >
            <div className="glass-card-premium rounded-2xl p-6 md:p-8 border border-gold/20">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl text-foreground">
                    Book Your <span className="text-gold">Invitation</span>
                  </h2>
                  {collectionName && (
                    <p className="text-muted-foreground text-sm mt-1">
                      {collectionName}
                    </p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-gold/50 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="ornament-line w-20 mb-6" />

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2 text-foreground">
                    <User className="w-4 h-4 text-gold" />
                    Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="bg-card/50 border-border/50 focus:border-gold"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2 text-foreground">
                    <Mail className="w-4 h-4 text-gold" />
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-card/50 border-border/50 focus:border-gold"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2 text-foreground">
                    <Phone className="w-4 h-4 text-gold" />
                    Phone Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="bg-card/50 border-border/50 focus:border-gold"
                    required
                  />
                </div>

                {/* Wedding Date */}
                <div className="space-y-2">
                  <Label htmlFor="weddingDate" className="flex items-center gap-2 text-foreground">
                    <Calendar className="w-4 h-4 text-gold" />
                    Wedding Date
                  </Label>
                  <Input
                    id="weddingDate"
                    type="date"
                    value={formData.weddingDate}
                    onChange={(e) => handleInputChange("weddingDate", e.target.value)}
                    className="bg-card/50 border-border/50 focus:border-gold"
                  />
                </div>

                {/* Number of Functions */}
                <div className="space-y-2">
                  <Label htmlFor="functions" className="flex items-center gap-2 text-foreground">
                    <Users className="w-4 h-4 text-gold" />
                    Number of Functions
                  </Label>
                  <Select
                    value={formData.functions}
                    onValueChange={(value) => handleInputChange("functions", value)}
                  >
                    <SelectTrigger className="bg-card/50 border-border/50 focus:border-gold">
                      <SelectValue placeholder="Select number of functions" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Function</SelectItem>
                      <SelectItem value="2">2 Functions</SelectItem>
                      <SelectItem value="3">3 Functions</SelectItem>
                      <SelectItem value="4">4 Functions</SelectItem>
                      <SelectItem value="5">5 Functions</SelectItem>
                      <SelectItem value="6">6 Functions (Maximum)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2 text-foreground">
                    <MessageSquare className="w-4 h-4 text-gold" />
                    Additional Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Any special requirements or questions..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="bg-card/50 border-border/50 focus:border-gold min-h-[100px]"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? "Sending..." : "Send to WhatsApp"}
                </Button>

                <p className="text-muted-foreground text-xs text-center">
                  By submitting, you'll be redirected to WhatsApp to complete your inquiry.
                </p>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingForm;
