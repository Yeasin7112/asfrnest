import { useState } from "react";
import { 
  Smartphone, 
  Globe, 
  Code, 
  Bot, 
  Gift, 
  Wrench, 
  Users,
  ArrowRight 
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { t } = useLanguage();

  const categories = [
    { id: "all", name: t("allServices") },
    { id: "development", name: t("development") },
    { id: "gifts", name: t("customGifts") },
    { id: "mobile", name: t("mobileSolutions") },
    { id: "consulting", name: t("consulting") },
  ];

  const services = [
    {
      id: 1,
      title: t("appDev"),
      description: t("appDevDesc"),
      icon: Smartphone,
      price: "৳4,999",
      category: "development",
      popular: true,
    },
    {
      id: 2,
      title: t("webDesign"),
      description: t("webDesignDesc"),
      icon: Globe,
      price: "৳2,999",
      category: "development",
      popular: false,
    },
    {
      id: 3,
      title: t("customSoftware"),
      description: t("customSoftwareDesc"),
      icon: Code,
      price: "৳9,999",
      category: "development",
      popular: false,
    },
    {
      id: 4,
      title: t("aiTools"),
      description: t("aiToolsDesc"),
      icon: Bot,
      price: "৳1,999",
      category: "development",
      popular: true,
    },
    {
      id: 5,
      title: t("birthdayGift"),
      description: t("birthdayGiftDesc"),
      icon: Gift,
      price: "৳999",
      category: "gifts",
      popular: true,
    },
    {
      id: 6,
      title: t("anniversaryGift"),
      description: t("anniversaryGiftDesc"),
      icon: Gift,
      price: "৳999",
      category: "gifts",
      popular: false,
    },
    {
      id: 7,
      title: t("phoneFix"),
      description: t("phoneFixDesc"),
      icon: Wrench,
      price: "৳299",
      category: "mobile",
      popular: false,
    },
    {
      id: 8,
      title: t("techConsulting"),
      description: t("techConsultingDesc"),
      icon: Users,
      price: "৳499",
      category: "consulting",
      popular: false,
    },
  ];

  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="gradient-text">{t("servicesTitle")}</span>
          </h2>
          <p className="text-muted-foreground">
            {t("servicesSubtitle")}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group gradient-border rounded-2xl p-6 bg-card card-hover relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 px-2 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full">
                    {t("popular")}
                  </div>
                )}
                
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-primary font-semibold">{t("from")} {service.price}</span>
                  <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-accent transition-colors">
                    {t("orderNow")} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
