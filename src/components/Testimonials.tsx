import { Quote, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const { t, language } = useLanguage();

  const testimonials = language === "bn" ? [
    {
      problem: "ফোনটা এত স্লো হয়ে গিয়েছিল যে কিছুই করতে পারতাম না। রিস্টার্ট দিলেও একই অবস্থা।",
      solution: "ফোন কলে ধাপে ধাপে গাইড করলেন। ৩০ মিনিটে ফোন আবার আগের মতো চলছে।",
      name: "রাকিব হাসান",
      role: "কলেজ শিক্ষার্থী, বরিশাল",
      rating: 5,
    },
    {
      problem: "বেস্ট ফ্রেন্ডের জন্মদিনে কিছু স্পেশাল করতে চাইছিলাম, কিন্তু আইডিয়া পাচ্ছিলাম না।",
      solution: "একদম মনের মতো একটা ওয়েবসাইট গিফট বানিয়ে দিলেন। বন্ধু দেখে কান্না করে ফেলেছে!",
      name: "ফারিয়া আক্তার",
      role: "চাকরিজীবী, ঢাকা",
      rating: 5,
    },
    {
      problem: "অনলাইনে জামাকাপড়ের ব্যবসা করি। একটা অ্যাপ দরকার ছিল, কিন্তু সবাই লাখ টাকা চাইছিল।",
      solution: "বাজেটের মধ্যেই ২ সপ্তাহে অ্যাপ রেডি করে দিলেন। এখন অর্ডার ম্যানেজ করা অনেক সহজ।",
      name: "জাহিদুল ইসলাম",
      role: "উদ্যোক্তা, চট্টগ্রাম",
      rating: 5,
    },
    {
      problem: "দোকানের ওয়েবসাইট লোড হতে এত সময় লাগত যে কাস্টমাররা চলে যেত।",
      solution: "দুইদিনের মধ্যে সব ঠিক করে দিলেন। এখন সাইট ঝটপট লোড হয়।",
      name: "মিথিলা রহমান",
      role: "ব্যবসায়ী, খুলনা",
      rating: 5,
    },
  ] : [
    {
      problem: "My phone was so slow I couldn't even open WhatsApp. Restarting didn't help.",
      solution: "They guided me step by step over a call. Phone was back to normal in 30 minutes.",
      name: "Rakib Hasan",
      role: "College Student, Barisal",
      rating: 5,
    },
    {
      problem: "Wanted to do something special for my best friend's birthday but had no idea what.",
      solution: "They created a beautiful website gift. My friend literally cried seeing it!",
      name: "Fariya Akter",
      role: "Working Professional, Dhaka",
      rating: 5,
    },
    {
      problem: "I sell clothes online and needed an app, but everyone was quoting insane prices.",
      solution: "They built it within my budget in just 2 weeks. Order management is so much easier now.",
      name: "Zahidul Islam",
      role: "Entrepreneur, Chittagong",
      rating: 5,
    },
    {
      problem: "My shop website took forever to load. Customers were leaving before it even opened.",
      solution: "Fixed everything in 2 days. The site loads instantly now.",
      name: "Mithila Rahman",
      role: "Business Owner, Khulna",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {t("realProblems")} <span className="gradient-text">{t("realSolutions")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("testimonialSubtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="gradient-border rounded-2xl p-6 bg-card card-hover"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <div className="space-y-3 mb-6">
                <div>
                  <span className="text-destructive text-xs font-semibold uppercase tracking-wider">{t("problem")}</span>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{item.problem}</p>
                </div>
                <div>
                  <span className="text-primary text-xs font-semibold uppercase tracking-wider">{t("solution")}</span>
                  <p className="text-foreground text-sm font-medium mt-1 leading-relaxed">{item.solution}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold text-sm">
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
