import { MessageSquare, Search, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: MessageSquare,
      number: "০১",
      title: t("step1Title"),
      description: t("step1Desc"),
    },
    {
      icon: Search,
      number: "০২",
      title: t("step2Title"),
      description: t("step2Desc"),
    },
    {
      icon: Rocket,
      number: "০৩",
      title: t("step3Title"),
      description: t("step3Desc"),
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="gradient-text">{t("howItWorksTitle")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("howItWorksSubtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative text-center group">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/40 to-transparent" />
                )}
                
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 mb-6 group-hover:scale-105 transition-transform">
                  <div className="text-center">
                    <span className="text-3xl font-display font-bold gradient-text">{step.number}</span>
                  </div>
                </div>
                
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
