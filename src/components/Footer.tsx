import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-xl font-bold">
              <span className="text-primary">Golden</span>
              <span className="text-secondary-foreground">Hen</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Healthy birds. Trusted partners. Sustainable growth. Leading poultry farming network across India.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-secondary-foreground/80">Hatchery Services</li>
              <li className="text-sm text-secondary-foreground/80">Layer Management</li>
              <li className="text-sm text-secondary-foreground/80">Broiler Production</li>
              <li className="text-sm text-secondary-foreground/80">Feed & Nutrition</li>
              <li>
                <Link to="/services" className="text-sm text-primary hover:underline">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-secondary-foreground/80">
                <MapPin className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <span>Plot 12, Green Fields Industrial Area, Patna, Bihar, India</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-secondary-foreground/80">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-secondary-foreground/80">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span>hello@goldenhenfarms.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-secondary-foreground/80">
              © {currentYear} GoldenHen Poultry Farms. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
