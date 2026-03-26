import { useLanguage } from "@/contexts/LanguageContext";
import { Users, Briefcase, GraduationCap, Store } from "lucide-react";

const TrustedBy = () => {
  const { language } = useLanguage();

  const stats = [
    {
      icon: Users,
      number: "500+",
      label: language === "bn" ? "খুশি ক্লায়েন্ট" : "Happy Clients",
    },
    {
      icon: Briefcase,
      number: "300+",
      label: language === "bn" ? "প্রজেক্ট সম্পন্ন" : "Projects Done",
    },
    {
      icon: GraduationCap,
      number: "100+",
      label: language === "bn" ? "ছাত্রদের সাহায্য" : "Students Helped",
    },
    {
      icon: Store,
      number: "50+",
      label: language === "bn" ? "ব্যবসা সাপোর্ট" : "Businesses Supported",
    },
  ];

  return (
    <section className="py-16 border-y border-border/50 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-display font-bold gradient-text">{stat.number}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
