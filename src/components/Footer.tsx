import logo from "@/assets/asfrnest-logo.png";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 border-t border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={logo} alt="Asfrnest Solutions" className="h-12 w-auto mb-4" />
            <p className="text-muted-foreground text-sm max-w-md">
              {t("footerDesc")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t("quickLinks")}</h4>
            <div className="space-y-2">
              <a href="#services" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">{t("services")}</a>
              <a href="#submit-problem" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">{t("solveProblem")}</a>
              <a href="#why-us" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">{t("whyUs")}</a>
              <a href="#testimonials" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">{t("testimonials")}</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t("contactUs")}</h4>
            <div className="space-y-3">
              <a href="mailto:hello@asfrnest.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors">
                <Mail className="w-4 h-4" />
                hello@asfrnest.com
              </a>
              <a href="tel:+8801XXXXXXXXX" className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors">
                <Phone className="w-4 h-4" />
                +880 1XXX-XXXXXX
              </a>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" />
                {t("india")}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Asfrnest Solutions. {t("allRightsReserved")}
          </p>
          <p className="text-muted-foreground text-sm">
            {t("builtWith")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
