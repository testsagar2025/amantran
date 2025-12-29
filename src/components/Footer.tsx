import { Link } from "react-router-dom";
import { Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-charcoal-light border-t border-border/30">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src={logo} 
              alt="Amantran 3D" 
              className="h-14 w-auto brightness-[1.1]"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Cinematic Digital Invitations for Weddings & Celebrations
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Gallery", path: "/gallery" },
                { name: "FAQ", path: "/faq" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground text-sm hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/919981249634"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground text-sm hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  9981249634
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@amantran3d.in"
                  className="flex items-center gap-3 text-muted-foreground text-sm hover:text-gold transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold" />
                  contact@amantran3d.in
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/AcEs3coGrsVuAzdx7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-muted-foreground text-sm hover:text-gold transition-colors"
                >
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span>
                    Kushwah Shree Nagar, 218/2,<br />
                    Rishi Nagar, Indore,<br />
                    Madhya Pradesh 452015
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-lg text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/amantran3d/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@InvitationStudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Amantran 3D. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
