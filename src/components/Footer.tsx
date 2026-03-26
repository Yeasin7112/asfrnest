import logo from "@/assets/yasdev-logo.png";
import { Mail, Phone, MapPin, Shield, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-16 border-t border-border bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={logo} alt="YasDev" className="h-12 w-auto mb-4" />
            <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
              {t("footerDesc")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">{t("quickLinks")}</h4>
            <div className="space-y-3">
              {[
                { label: t("services"), href: "#services" },
                { label: t("howItWorks"), href: "#how-it-works" },
                { label: t("whyUs"), href: "#why-us" },
                { label: t("faq"), href: "#faq" },
              ].map((link) => (
                <a key={link.href} href={link.href} className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">{t("contactUs")}</h4>
            <div className="space-y-3">
              <a href="mailto:yasdev.bd@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                yasdev.bd@gmail.com
              </a>
              <a href="tel:+8801734916497" className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                +880 1734-916497
              </a>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 shrink-0" />
                {t("location")}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} YasDev. {t("allRightsReserved")}
          </p>
          <div className="flex items-center gap-6">
            <Link to="/auth" className="flex items-center gap-1 text-muted-foreground hover:text-primary text-sm transition-colors">
              <Shield className="w-3 h-3" />
              Admin
            </Link>
            <p className="text-muted-foreground text-sm">
              {t("builtWith")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
