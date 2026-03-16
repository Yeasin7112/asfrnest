import { Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const { t, language } = useLanguage();

  const testimonials = language === "bn" ? [
    {
      problem: "ফোন বারবার হ্যাং হচ্ছিল, কিছুই করতে পারছিলাম না",
      solution: "মাত্র ৩০ মিনিটে ফোন কলে গাইড করে সব ঠিক করে দিলেন",
      name: "রাকিব হাসান",
      role: "কলেজ শিক্ষার্থী, বরিশাল",
    },
    {
      problem: "বান্ধবীর জন্মদিনে সারপ্রাইজ দিতে চেয়েছিলাম",
      solution: "মাত্র ১ দিনে অসাধারণ একটি ওয়েবসাইট গিফট তৈরি করে দিলেন",
      name: "ফারিয়া আক্তার",
      role: "চাকরিজীবী, ঢাকা",
    },
    {
      problem: "অনলাইন ব্যবসার জন্য অ্যাপ দরকার ছিল, বাজেট খুব কম",
      solution: "সাশ্রয়ী মূল্যে ২ সপ্তাহে অ্যাপ তৈরি করে দিলেন",
      name: "জাহিদ ইসলাম",
      role: "উদ্যোক্তা, চট্টগ্রাম",
    },
    {
      problem: "দোকানের ওয়েবসাইট ধীর ছিল, কাস্টমার হারাচ্ছিলাম",
      solution: "৪৮ ঘণ্টায় সব সমস্যা ঠিক করে সাইট ফাস্ট করে দিলেন",
      name: "মিথিলা রহমান",
      role: "ছোট ব্যবসার মালিক, খুলনা",
    },
  ] : [
    {
      problem: "Phone kept hanging, couldn't do anything",
      solution: "Fixed everything in 30 minutes over a phone call",
      name: "Rakib Hasan",
      role: "College Student, Barisal",
    },
    {
      problem: "Wanted to surprise my friend on her birthday",
      solution: "Got a beautiful animated website gift in just 1 day",
      name: "Fariya Akter",
      role: "Working Professional, Dhaka",
    },
    {
      problem: "Needed an app for online business on a tight budget",
      solution: "Built our app in 2 weeks at an affordable price",
      name: "Zahid Islam",
      role: "Entrepreneur, Chittagong",
    },
    {
      problem: "Shop website was slow, losing customers",
      solution: "Fixed all issues and made the site fast in 48 hours",
      name: "Mithila Rahman",
      role: "Small Business Owner, Khulna",
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {t("realProblems")} <span className="gradient-text">{t("realSolutions")}</span>
          </h2>
          <p className="text-muted-foreground">
            {t("testimonialSubtitle")}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="gradient-border rounded-2xl p-6 bg-card card-hover"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-destructive text-sm font-medium shrink-0">{t("problem")}</span>
                  <p className="text-muted-foreground text-sm">{item.problem}</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary text-sm font-medium shrink-0">{t("solution")}</span>
                  <p className="text-foreground text-sm font-medium">{item.solution}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-sm">{item.name}</div>
                  <div className="text-muted-foreground text-xs">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
