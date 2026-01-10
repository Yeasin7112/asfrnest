import logo from "@/assets/asfrnest-logo.png";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={logo} alt="Asfrnest Solutions" className="h-12 w-auto mb-4" />
            <p className="text-muted-foreground text-sm max-w-md">
              Your digital tech doctor for every problem. From apps to websites, from phone issues to tech consulting – we've got you covered.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#services" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">Services</a>
              <a href="#submit-problem" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">Submit Problem</a>
              <a href="#why-us" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">Why Us</a>
              <a href="#testimonials" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">Testimonials</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="mailto:hello@asfrnest.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors">
                <Mail className="w-4 h-4" />
                hello@asfrnest.com
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors">
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </a>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" />
                India (Remote)
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Asfrnest Solutions. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with ❤️ for problem solvers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
