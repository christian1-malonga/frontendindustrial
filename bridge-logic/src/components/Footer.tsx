import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, LinkedinIcon, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">DuikEnterprises</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Innovative consulting and smart logistics solutions for the future. 
              Connecting industries, technology, and logistics into one powerful system.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/logistics" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Logistics
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services#industrial" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Industrial Consulting
                </Link>
              </li>
              <li>
                <Link to="/services#it" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link to="/logistics" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Logistics & Warehousing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Get Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  123 gonyeli<br />
                  Nicosia, Cyprus
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  contact@duikenterprises.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © {currentYear} DuikEnterprises Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;