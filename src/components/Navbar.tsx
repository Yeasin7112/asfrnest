import { useState, useEffect } from "react";
import { Menu, X, User } from "lucide-react";
import logo from "@/assets/yasdev-logo.png";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import type { User as SupabaseUser } from "@supabase/supabase-js";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => setUser(session?.user ?? null)
    );
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("services"), href: "#services" },
    { name: t("howItWorks"), href: "#how-it-works" },
    { name: t("whyUs"), href: "#why-us" },
    { name: t("faq"), href: "#faq" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-lg shadow-background/50" : "bg-background/60 backdrop-blur-md"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="YasDev" className="h-10 md:h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <LanguageToggle />
            {user ? (
              <a
                href="/dashboard"
                className="flex items-center gap-2 px-4 py-2 bg-secondary border border-border rounded-lg hover:bg-secondary/80 transition-colors text-sm"
              >
                <User className="w-4 h-4" />
                {t("dashboard")}
              </a>
            ) : (
              <a
                href="/auth"
                className="flex items-center gap-2 px-4 py-2 bg-secondary border border-border rounded-lg hover:bg-secondary/80 transition-colors text-sm"
              >
                <User className="w-4 h-4" />
                {t("login")}
              </a>
            )}
            <a
              href="#submit-problem"
              className="px-5 py-2.5 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              {t("getHelpNow")}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium py-3 px-4 rounded-lg hover:bg-secondary"
                >
                  {link.name}
                </a>
              ))}
              {user ? (
                <a
                  href="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 bg-secondary border border-border rounded-lg text-sm"
                >
                  <User className="w-4 h-4" />
                  {t("dashboard")}
                </a>
              ) : (
                <a
                  href="/auth"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 bg-secondary border border-border rounded-lg text-sm"
                >
                  <User className="w-4 h-4" />
                  {t("login")}
                </a>
              )}
              <a
                href="#submit-problem"
                onClick={() => setIsOpen(false)}
                className="px-5 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg text-center text-sm mt-2"
              >
                {t("getHelpNow")}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
