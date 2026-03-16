import { Wallet, MessageCircle, Heart, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyUs = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Wallet,
      title: t("dontOvercharge"),
      description: t("dontOverchargeDesc"),
    },
    {
      icon: MessageCircle,
      title: t("speakHuman"),
      description: t("speakHumanDesc"),
    },
    {
      icon: Heart,
      title: t("actuallyCare"),
      description: t("actuallyCareDesc"),
    },
    {
      icon: Zap,
      title: t("deliverFast"),
      description: t("deliverFastDesc"),
    },
  ];

  return (
    <section id="why-us" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              <span className="gradient-text">{t("whyAsfrnest")}</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {t("whySubtitle")}
            </p>

            <div className="space-y-6">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{reason.title}</h3>
                      <p className="text-muted-foreground text-sm">{reason.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Pricing Philosophy */}
          <div className="gradient-border rounded-2xl p-8 bg-card">
            <h3 className="text-2xl font-display font-bold mb-6">
              <span className="text-accent">{t("pricingPhilosophy")}</span>
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-primary text-xs">✓</span>
                </div>
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">{t("transparentQuotes")}</span> {t("noHiddenFees")}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-primary text-xs">✓</span>
                </div>
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">{t("payFair")}</span> {t("priceByComplexity")}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-primary text-xs">✓</span>
                </div>
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">{t("studentFriendly")}</span> {t("specialRates")}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-accent text-xs">★</span>
                </div>
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">{t("freeConsultation")}</span> {t("describeCost")}
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-secondary/50 border border-border">
              <p className="text-sm text-center text-muted-foreground">
                "{t("pricingQuote")} <span className="text-foreground font-medium">{t("period")}</span>"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
