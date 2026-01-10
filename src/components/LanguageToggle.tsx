import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "bn" : "en")}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border hover:border-primary/50 transition-colors text-sm"
    >
      <Globe className="w-4 h-4 text-primary" />
      <span className="font-medium">{language === "en" ? "বাংলা" : "English"}</span>
    </button>
  );
};

export default LanguageToggle;
