import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "bn";

interface Translations {
  [key: string]: {
    en: string;
    bn: string;
  };
}

export const translations: Translations = {
  // Navbar
  services: { en: "Services", bn: "সেবা" },
  howItWorks: { en: "How It Works", bn: "কীভাবে কাজ হয়" },
  whyUs: { en: "Why Us", bn: "কেন আমরা" },
  testimonials: { en: "Testimonials", bn: "মানুষ কী বলছে" },
  portfolio: { en: "Portfolio", bn: "আমাদের কাজ" },
  faq: { en: "FAQ", bn: "জিজ্ঞাসা" },
  getHelpNow: { en: "Get Help Now", bn: "সাহায্য চাই" },

  // Hero
  badge: { en: "Your Digital Tech Partner", bn: "আপনার ডিজিটাল টেক পার্টনার" },
  heroTitle1: { en: "One Team.", bn: "একটাই টিম।" },
  heroTitle2: { en: "All Tech Solutions.", bn: "সব সমাধান এখানে।" },
  heroSubtitle: {
    en: "Whether you need an app, a website, or just fixing your phone — we handle it all. Simply tell us what you need.",
    bn: "অ্যাপ বানাতে হবে? ওয়েবসাইট লাগবে? ফোনে ঝামেলা? — যা-ই হোক, আমাদের বলুন। আমরা ঠিক করে দেব।"
  },
  affordable: { en: "Simple. Affordable. Done.", bn: "সোজা কথা। কম খরচ। কাজ হবে।" },
  solveProblem: { en: "Tell Us Your Problem", bn: "সমস্যাটা বলুন" },
  exploreServices: { en: "See What We Do", bn: "কী কী করি দেখুন" },
  problemsSolved: { en: "Problems Solved", bn: "সমস্যা সমাধান" },
  avgResponse: { en: "Avg Response", bn: "গড় সময়" },
  happyClients: { en: "Happy Clients", bn: "খুশি ক্লায়েন্ট" },

  // Services
  servicesTitle: { en: "What We Do", bn: "আমরা যা করি" },
  servicesSubtitle: { en: "Pick what you need. We'll take care of the rest.", bn: "আপনার যেটা দরকার সেটা বলুন। বাকিটা আমরা সামলে নেব।" },
  allServices: { en: "All", bn: "সব" },
  development: { en: "Development", bn: "তৈরি করা" },
  customGifts: { en: "Gifts", bn: "উপহার" },
  mobileSolutions: { en: "Mobile", bn: "মোবাইল" },
  consulting: { en: "Consulting", bn: "পরামর্শ" },
  popular: { en: "Popular", bn: "জনপ্রিয়" },
  orderNow: { en: "Order Now", bn: "অর্ডার দিন" },
  from: { en: "From", bn: "শুরু" },

  // Service names
  appDev: { en: "App Development", bn: "অ্যাপ বানানো" },
  appDevDesc: { en: "Custom Android & web apps built for your needs", bn: "আপনার দরকার মতো অ্যান্ড্রয়েড বা ওয়েব অ্যাপ — আমরাই বানিয়ে দেব" },
  webDesign: { en: "Website Design", bn: "ওয়েবসাইট বানানো" },
  webDesignDesc: { en: "Modern websites that look great on every device", bn: "মোবাইল আর কম্পিউটার — দুই জায়গাতেই ফিটফাট ওয়েবসাইট পাবেন" },
  customSoftware: { en: "Custom Software", bn: "কাস্টম সফটওয়্যার" },
  customSoftwareDesc: { en: "Software solutions tailored to your business", bn: "আপনার ব্যবসার ধরন বুঝে সফটওয়্যার বানিয়ে দিই" },
  aiTools: { en: "AI Tools & Automation", bn: "AI টুলস ও অটোমেশন" },
  aiToolsDesc: { en: "Smart tools to save time and boost productivity", bn: "সময় বাঁচাতে আর কাজ সহজ করতে স্মার্ট AI টুলস" },
  birthdayGift: { en: "Birthday Website Gift", bn: "জন্মদিনের ওয়েবসাইট গিফট" },
  birthdayGiftDesc: { en: "Surprise someone special with a personalized web page", bn: "প্রিয় মানুষটাকে চমকে দিন — ওর নামে একটা সুন্দর ওয়েবসাইট গিফট করুন" },
  anniversaryGift: { en: "Anniversary & Love Pages", bn: "বিবাহবার্ষিকী ও ভালোবাসার পেজ" },
  anniversaryGiftDesc: { en: "Digital gifts for life's special moments", bn: "বিশেষ দিনগুলোকে স্মরণীয় করতে ডিজিটাল পেজ বানিয়ে দিই" },
  phoneFix: { en: "Phone Problem Fix", bn: "ফোনের ঝামেলা ঠিক করা" },
  phoneFixDesc: { en: "Software issues, setup help, and mobile troubleshooting", bn: "ফোন স্লো? হ্যাং করে? সেটআপ করতে পারছেন না? — আমরা ঠিক করে দেব" },
  techConsulting: { en: "Tech Consulting", bn: "টেক পরামর্শ" },
  techConsultingDesc: { en: "Expert guidance for entrepreneurs, students & freelancers", bn: "নতুন কিছু শুরু করতে চান? ফ্রিল্যান্সিং? স্টার্টআপ? — আমরা গাইড করব" },

  // How It Works
  howItWorksTitle: { en: "How It Works", bn: "কীভাবে কাজ হয়" },
  howItWorksSubtitle: { en: "Getting help is as easy as 1-2-3", bn: "মাত্র ৩টা স্টেপে আপনার কাজ হয়ে যাবে" },
  step1Title: { en: "Tell Us What You Need", bn: "সমস্যাটা জানান" },
  step1Desc: { en: "Fill out the form or message us on WhatsApp. No tech knowledge needed.", bn: "ফর্ম পূরণ করুন অথবা হোয়াটসঅ্যাপে মেসেজ দিন। টেকনিক্যাল কিছু জানতে হবে না।" },
  step2Title: { en: "We Figure It Out", bn: "আমরা বুঝে নিই" },
  step2Desc: { en: "Our team reviews your request and contacts you with a clear plan and price.", bn: "আমাদের টিম দেখবে, তারপর প্ল্যান আর খরচ জানিয়ে আপনাকে কল করব।" },
  step3Title: { en: "Get It Done", bn: "কাজ হয়ে যায়" },
  step3Desc: { en: "We deliver on time. You track progress from your dashboard.", bn: "সময়মতো কাজ ডেলিভারি। ড্যাশবোর্ড থেকে আপডেট দেখতে পারবেন।" },

  // Problem Submit
  aiAssisted: { en: "Quick Support", bn: "দ্রুত সাপোর্ট" },
  describeProblem: { en: "Tell Us Your Problem", bn: "সমস্যাটা জানান" },
  problemSubtitle: { en: "Describe your issue or what you need. We'll reach out with a solution.", bn: "কী সমস্যা বা কী দরকার সেটা লিখুন। আমরা সমাধান নিয়ে যোগাযোগ করব।" },
  problemType: { en: "What kind of help?", bn: "কোন ধরনের সাহায্য লাগবে?" },
  appSoftwareIssue: { en: "App/Software Issue", bn: "অ্যাপ/সফটওয়্যার সমস্যা" },
  websiteProblem: { en: "Website Problem", bn: "ওয়েবসাইটের সমস্যা" },
  phoneMobileIssue: { en: "Phone/Mobile Issue", bn: "ফোনের সমস্যা" },
  needSomethingBuilt: { en: "Need Something Built", bn: "কিছু বানাতে চাই" },
  techGuidance: { en: "Tech Guidance", bn: "টেক গাইড চাই" },
  other: { en: "Other", bn: "অন্যকিছু" },
  describeYourProblem: { en: "What's going on?", bn: "কী হচ্ছে বলুন" },
  problemPlaceholder: { en: "Tell us everything... What happened? What did you try?", bn: "যা হচ্ছে পুরোটা বলুন... কী সমস্যা? আগে কিছু করে দেখেছেন? কী চাইছেন?" },
  attachScreenshots: { en: "Screenshot (optional)", bn: "স্ক্রিনশট দিন (না দিলেও চলবে)" },
  clickOrDrag: { en: "Click or drag image here", bn: "এখানে ক্লিক করুন বা ছবি টেনে আনুন" },
  howUrgent: { en: "How urgent?", bn: "কত তাড়াতাড়ি দরকার?" },
  normal: { en: "Normal", bn: "সময় আছে" },
  urgent: { en: "Urgent", bn: "জরুরি" },
  asap: { en: "ASAP! 🔥", bn: "এখনই দরকার! 🔥" },
  whatsappOrEmail: { en: "WhatsApp or Email", bn: "হোয়াটসঅ্যাপ বা ইমেইল" },
  contactPlaceholder: { en: "Your WhatsApp number or email", bn: "আপনার হোয়াটসঅ্যাপ নম্বর বা ইমেইল" },
  submitProblem: { en: "Submit", bn: "জমা দিন" },
  submitting: { en: "Submitting...", bn: "পাঠানো হচ্ছে..." },
  problemSubmitted: { en: "Got it! ✅", bn: "পেয়ে গেছি! ✅" },
  willGetBack: { en: "We'll contact you within 24 hours.", bn: "২৪ ঘণ্টার মধ্যে যোগাযোগ করব।" },

  // Why Us
  whyAsfrnest: { en: "Why YasDev?", bn: "কেন YasDev?" },
  whySubtitle: { en: "We're not a corporate agency. We're real people who genuinely want to help you with tech — at prices that won't empty your pocket.", bn: "আমরা বড় কোনো কর্পোরেট এজেন্সি না। আমরা আপনারই মতো মানুষ — শুধু পার্থক্য হলো প্রযুক্তিটা আমরা ভালো বুঝি। আর সেই জ্ঞান দিয়ে আপনাকে সাহায্য করতে চাই, পকেটে টান না দিয়ে।" },
  dontOvercharge: { en: "Pocket-friendly rates", bn: "পকেট-ফ্রেন্ডলি দাম" },
  dontOverchargeDesc: { en: "We keep prices reasonable so students, freelancers & small businesses can all afford quality work.", bn: "ছাত্র হোন, ফ্রিল্যান্সার হোন, বা ছোট ব্যবসা — সবার পকেটের কথা মাথায় রেখেই দাম ঠিক করি।" },
  speakHuman: { en: "We speak your language", bn: "সহজ কথায় বুঝিয়ে দিই" },
  speakHumanDesc: { en: "No confusing tech talk. We explain everything clearly.", bn: "কঠিন ইংরেজি বা টেকনিক্যাল ভাষা নয়। আপনি যেভাবে বুঝবেন সেভাবেই বলি।" },
  actuallyCare: { en: "We genuinely care", bn: "আমরা সত্যি সাহায্য করতে চাই" },
  actuallyCareDesc: { en: "Your problem matters to us. We won't stop until it's fixed.", bn: "আপনার কাজটা আমাদের কাছে নিজের কাজের মতো। যতক্ষণ না ঠিকমতো হচ্ছে, ততক্ষণ লেগে থাকি।" },
  deliverFast: { en: "Fast delivery", bn: "তাড়াতাড়ি কাজ শেষ" },
  deliverFastDesc: { en: "Most work done within 24-48 hours. No endless waiting.", bn: "বেশিরভাগ কাজ ২৪ থেকে ৪৮ ঘণ্টার মধ্যে শেষ। মাসের পর মাস অপেক্ষা করতে হবে না।" },
  pricingPhilosophy: { en: "Our Pricing", bn: "আমাদের দাম নিয়ে কথা" },
  transparentQuotes: { en: "Clear pricing.", bn: "পরিষ্কার দাম।" },
  noHiddenFees: { en: "No hidden fees or surprise bills.", bn: "কোনো লুকোনো চার্জ নেই, হঠাৎ বিল আসবে না।" },
  payFair: { en: "Fair pricing.", bn: "ন্যায্য দাম।" },
  priceByComplexity: { en: "We charge based on the work, not how much you can pay.", bn: "কাজের ধরন দেখে দাম ঠিক করি — আপনার পকেট দেখে নয়।" },
  studentFriendly: { en: "Student & startup friendly.", bn: "ছাত্র আর নতুন উদ্যোক্তাদের জন্য বিশেষ রেট।" },
  specialRates: { en: "Special rates for those starting their journey.", bn: "যারা সবে শুরু করছেন, তাদের জন্য আলাদা দাম আছে।" },
  freeConsultation: { en: "Free consultation.", bn: "ফ্রি পরামর্শ।" },
  describeCost: { en: "Tell us what you need first, then we'll quote a price.", bn: "আগে বলুন কী দরকার — তারপর খরচ জানাব।" },
  pricingQuote: { en: "Good tech help shouldn't cost a fortune.", bn: "ভালো কাজের জন্য সবসময় অনেক টাকা লাগে না।" },
  period: { en: "Period.", bn: "ব্যস, এটাই আমাদের কথা।" },

  // Testimonials
  realProblems: { en: "Real Stories.", bn: "আসল অভিজ্ঞতা।" },
  realSolutions: { en: "Real Results.", bn: "আসল ফলাফল।" },
  testimonialSubtitle: { en: "Hear from people we've already helped.", bn: "যাদের আমরা ইতোমধ্যে সাহায্য করেছি, তাদের কথা শুনুন।" },
  problem: { en: "Problem:", bn: "সমস্যা ছিল:" },
  solution: { en: "Solution:", bn: "যা করলাম:" },

  // FAQ
  faqTitle: { en: "Common Questions", bn: "সাধারণ জিজ্ঞাসা" },
  faqSubtitle: { en: "Got questions? We've got answers.", bn: "মনে প্রশ্ন আছে? এখানে উত্তর পাবেন।" },
  faq1Q: { en: "How do I get started?", bn: "শুরু করব কীভাবে?" },
  faq1A: { en: "Just fill out the form on this page or message us on WhatsApp. We'll take it from there.", bn: "এই পেজের ফর্মটা পূরণ করুন অথবা সরাসরি হোয়াটসঅ্যাপে মেসেজ দিন। বাকিটা আমরা দেখব।" },
  faq2Q: { en: "What if I don't understand tech stuff?", bn: "আমি তো টেকনিক্যাল কিছু বুঝি না — তাও কি সাহায্য পাব?" },
  faq2A: { en: "That's exactly why we exist! You don't need to know anything technical. Just tell us what you need in your own words.", bn: "এজন্যই তো আমরা আছি! আপনাকে কোনো টেকনিক্যাল কিছু জানতে হবে না। নিজের ভাষায় বলুন কী দরকার — আমরা বুঝে নেব।" },
  faq3Q: { en: "How much does it cost?", bn: "খরচ কত পড়বে?" },
  faq3A: { en: "It depends on the work. But we always discuss pricing upfront — no surprises. Students and startups get special rates.", bn: "কাজের ধরনের উপর নির্ভর করে। তবে কাজ শুরুর আগেই খরচ জানিয়ে দিই — পরে চমক দিই না। ছাত্র আর নতুন উদ্যোক্তাদের জন্য বিশেষ রেট আছে।" },
  faq4Q: { en: "How long does it take?", bn: "কাজ শেষ হতে কত সময় লাগে?" },
  faq4A: { en: "Most simple tasks are done within 24-48 hours. For bigger projects like apps or websites, we give you a clear timeline before starting.", bn: "ছোট কাজ সাধারণত ২৪-৪৮ ঘণ্টায় হয়ে যায়। বড় প্রজেক্ট যেমন অ্যাপ বা ওয়েবসাইট হলে আগেই জানিয়ে দিই কত দিন লাগবে।" },
  faq5Q: { en: "Can I track my order?", bn: "অর্ডারের আপডেট কীভাবে পাব?" },
  faq5A: { en: "Yes! Create a free account and check your dashboard anytime to see the status of your orders.", bn: "ফ্রি অ্যাকাউন্ট খুলুন আর ড্যাশবোর্ড থেকে যেকোনো সময় অর্ডারের আপডেট দেখুন।" },

  // Footer
  footerDesc: { en: "Your trusted tech partner in Bangladesh. From building apps to fixing phones — we make technology simple and affordable for everyone.", bn: "বাংলাদেশে আপনার বিশ্বস্ত টেক পার্টনার। অ্যাপ বানানো থেকে ফোন ঠিক করা — প্রযুক্তিকে সহজ আর সাশ্রয়ী করাই আমাদের কাজ।" },
  quickLinks: { en: "Quick Links", bn: "দ্রুত লিংক" },
  contactUs: { en: "Contact", bn: "যোগাযোগ" },
  location: { en: "Barisal, Bangladesh", bn: "বরিশাল, বাংলাদেশ" },
  allRightsReserved: { en: "All rights reserved.", bn: "সর্বস্বত্ব সংরক্ষিত।" },
  builtWith: { en: "Made with ❤️ in Bangladesh", bn: "বাংলাদেশ থেকে ❤️ দিয়ে তৈরি" },

  // WhatsApp
  stuck: { en: "Chat with us!", bn: "হোয়াটসঅ্যাপে কথা বলুন!" },

  // Auth
  login: { en: "Login", bn: "লগইন" },
  dashboard: { en: "Dashboard", bn: "ড্যাশবোর্ড" },

  // CTA
  ctaTitle: { en: "Ready to Get Started?", bn: "শুরু করবেন?" },
  ctaSubtitle: { en: "Tell us what you need and we'll handle the rest. It's that simple.", bn: "শুধু বলুন কী দরকার — বাকিটা আমরা করব। এতটাই সহজ।" },
  ctaButton: { en: "Get Started Now", bn: "এখনই শুরু করুন" },
  ctaWhatsApp: { en: "Or WhatsApp Us", bn: "অথবা হোয়াটসঅ্যাপ করুন" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("bn");

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
