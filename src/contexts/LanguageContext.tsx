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
  services: { en: "Services", bn: "সেবাসমূহ" },
  howItWorks: { en: "How It Works", bn: "কিভাবে কাজ করে" },
  whyUs: { en: "Why Us", bn: "কেন আমরা" },
  testimonials: { en: "Testimonials", bn: "প্রশংসাপত্র" },
  getHelpNow: { en: "Get Help Now", bn: "এখনই সাহায্য নিন" },

  // Hero
  badge: { en: "AI-Powered Tech Solutions", bn: "এআই চালিত প্রযুক্তি সমাধান" },
  heroTitle1: { en: "One Platform.", bn: "এক প্ল্যাটফর্ম।" },
  heroTitle2: { en: "Every Tech Solution.", bn: "সব প্রযুক্তি সমাধান।" },
  heroSubtitle: { 
    en: "From apps to websites, from problems to solutions – we fix, build & guide everything in tech.", 
    bn: "অ্যাপ থেকে ওয়েবসাইট, সমস্যা থেকে সমাধান – প্রযুক্তির সবকিছু আমরা ঠিক করি, তৈরি করি ও গাইড করি।" 
  },
  affordable: { en: "Affordable. Fast. Reliable.", bn: "সাশ্রয়ী। দ্রুত। নির্ভরযোগ্য।" },
  solveProblem: { en: "Solve My Tech Problem", bn: "আমার প্রযুক্তি সমস্যার সমাধান করুন" },
  exploreServices: { en: "Explore Services", bn: "সেবাসমূহ দেখুন" },
  problemsSolved: { en: "Problems Solved", bn: "সমস্যার সমাধান" },
  avgResponse: { en: "Avg Response", bn: "গড় প্রতিক্রিয়া" },
  happyClients: { en: "Happy Clients", bn: "সন্তুষ্ট গ্রাহক" },

  // Services
  servicesTitle: { en: "Smart Service Marketplace", bn: "স্মার্ট সেবা মার্কেটপ্লেস" },
  servicesSubtitle: { en: "Pick a service, get it done. No complexity, just solutions.", bn: "একটি সেবা বেছে নিন, কাজ হয়ে যাক। কোনো জটিলতা নেই, শুধু সমাধান।" },
  allServices: { en: "All Services", bn: "সব সেবা" },
  development: { en: "Development", bn: "ডেভেলপমেন্ট" },
  customGifts: { en: "Custom Gifts", bn: "কাস্টম গিফট" },
  mobileSolutions: { en: "Mobile Solutions", bn: "মোবাইল সমাধান" },
  consulting: { en: "Consulting", bn: "পরামর্শ" },
  popular: { en: "Popular", bn: "জনপ্রিয়" },
  orderNow: { en: "Order Now", bn: "এখনই অর্ডার করুন" },
  from: { en: "From", bn: "শুরু" },

  // Service names
  appDev: { en: "App Development", bn: "অ্যাপ ডেভেলপমেন্ট" },
  appDevDesc: { en: "Custom Android & web apps built for your unique needs", bn: "আপনার অনন্য চাহিদার জন্য কাস্টম অ্যান্ড্রয়েড ও ওয়েব অ্যাপ" },
  webDesign: { en: "Website Design", bn: "ওয়েবসাইট ডিজাইন" },
  webDesignDesc: { en: "Modern, responsive websites that convert visitors", bn: "আধুনিক, রেসপন্সিভ ওয়েবসাইট যা দর্শকদের রূপান্তরিত করে" },
  customSoftware: { en: "Custom Software", bn: "কাস্টম সফটওয়্যার" },
  customSoftwareDesc: { en: "Tailored solutions for your business automation", bn: "আপনার ব্যবসার অটোমেশনের জন্য উপযুক্ত সমাধান" },
  aiTools: { en: "AI Tools & Automation", bn: "এআই টুলস ও অটোমেশন" },
  aiToolsDesc: { en: "Smart AI-powered tools to boost your productivity", bn: "আপনার উৎপাদনশীলতা বাড়াতে স্মার্ট এআই টুলস" },
  birthdayGift: { en: "Birthday Website Gift", bn: "জন্মদিনের ওয়েবসাইট গিফট" },
  birthdayGiftDesc: { en: "Surprise your loved ones with a personalized web page", bn: "ব্যক্তিগত ওয়েব পেজ দিয়ে প্রিয়জনদের চমকে দিন" },
  anniversaryGift: { en: "Anniversary & Love Pages", bn: "বিবাহবার্ষিকী ও ভালোবাসার পেজ" },
  anniversaryGiftDesc: { en: "Create memorable digital gifts for special moments", bn: "বিশেষ মুহূর্তের জন্য স্মরণীয় ডিজিটাল গিফট" },
  phoneFix: { en: "Phone Problem Fix", bn: "ফোন সমস্যার সমাধান" },
  phoneFixDesc: { en: "Software issues, setup, guidance – all mobile problems", bn: "সফটওয়্যার সমস্যা, সেটআপ, গাইডেন্স – সব মোবাইল সমস্যা" },
  techConsulting: { en: "Tech Consulting", bn: "টেক কন্সালটিং" },
  techConsultingDesc: { en: "Expert guidance for startups, students & freelancers", bn: "স্টার্টআপ, শিক্ষার্থী ও ফ্রিল্যান্সারদের জন্য বিশেষজ্ঞ পরামর্শ" },

  // Problem Submit
  aiAssisted: { en: "AI-Assisted Support", bn: "এআই সহায়তা" },
  describeProblem: { en: "Describe Your Tech Problem", bn: "আপনার প্রযুক্তি সমস্যা বর্ণনা করুন" },
  problemSubtitle: { en: "Tell us what's wrong or what you need. We'll get back with a solution fast.", bn: "কী সমস্যা বা কী দরকার তা বলুন। আমরা দ্রুত সমাধান নিয়ে ফিরব।" },
  problemType: { en: "What type of problem?", bn: "কোন ধরনের সমস্যা?" },
  appSoftwareIssue: { en: "App/Software Issue", bn: "অ্যাপ/সফটওয়্যার সমস্যা" },
  websiteProblem: { en: "Website Problem", bn: "ওয়েবসাইট সমস্যা" },
  phoneMobileIssue: { en: "Phone/Mobile Issue", bn: "ফোন/মোবাইল সমস্যা" },
  needSomethingBuilt: { en: "Need Something Built", bn: "কিছু তৈরি করা দরকার" },
  techGuidance: { en: "Tech Guidance", bn: "টেক গাইডেন্স" },
  other: { en: "Other", bn: "অন্যান্য" },
  describeYourProblem: { en: "Describe your problem", bn: "আপনার সমস্যা বর্ণনা করুন" },
  problemPlaceholder: { en: "Tell us everything... What's happening? What did you try? What do you need?", bn: "সব কিছু বলুন... কী হচ্ছে? কী চেষ্টা করেছেন? কী দরকার?" },
  attachScreenshots: { en: "Attach screenshots (optional)", bn: "স্ক্রিনশট সংযুক্ত করুন (ঐচ্ছিক)" },
  clickOrDrag: { en: "Click or drag files here", bn: "এখানে ক্লিক করুন বা ফাইল টানুন" },
  howUrgent: { en: "How urgent?", bn: "কতটা জরুরি?" },
  normal: { en: "Normal", bn: "সাধারণ" },
  urgent: { en: "Urgent", bn: "জরুরি" },
  asap: { en: "ASAP! 🔥", bn: "এখনই! 🔥" },
  whatsappOrEmail: { en: "WhatsApp or Email", bn: "হোয়াটসঅ্যাপ বা ইমেইল" },
  contactPlaceholder: { en: "Your WhatsApp number or email", bn: "আপনার হোয়াটসঅ্যাপ নম্বর বা ইমেইল" },
  submitProblem: { en: "Submit Problem", bn: "সমস্যা জমা দিন" },
  submitting: { en: "Submitting...", bn: "জমা হচ্ছে..." },
  problemSubmitted: { en: "Problem Submitted!", bn: "সমস্যা জমা হয়েছে!" },
  willGetBack: { en: "We'll get back to you within 24 hours.", bn: "আমরা ২৪ ঘন্টার মধ্যে যোগাযোগ করব।" },

  // Why Us
  whyAsfrnest: { en: "Why Asfrnest?", bn: "কেন Asfrnest?" },
  whySubtitle: { en: "We're not your typical tech agency. We're your friendly neighborhood tech helpers who actually solve problems without burning your wallet.", bn: "আমরা সাধারণ টেক এজেন্সি নই। আমরা আপনার বন্ধুত্বপূর্ণ প্রযুক্তি সাহায্যকারী যারা আপনার পকেট ফাঁকা না করে সত্যিই সমস্যার সমাধান করি।" },
  dontOvercharge: { en: "We don't overcharge", bn: "আমরা বেশি টাকা নিই না" },
  dontOverchargeDesc: { en: "Fair pricing that students, freelancers & small businesses can actually afford.", bn: "সাশ্রয়ী মূল্য যা শিক্ষার্থী, ফ্রিল্যান্সার ও ছোট ব্যবসার জন্য সত্যিই সাধ্যের মধ্যে।" },
  speakHuman: { en: "We speak human", bn: "আমরা সহজ ভাষায় বলি" },
  speakHumanDesc: { en: "No tech jargon. We explain everything in simple language you understand.", bn: "কোনো কঠিন শব্দ নয়। সবকিছু সহজ ভাষায় বোঝাই যা আপনি বুঝতে পারেন।" },
  actuallyCare: { en: "We actually care", bn: "আমরা সত্যিই যত্ন নিই" },
  actuallyCareDesc: { en: "Your problem is our priority. We don't rest until you're satisfied.", bn: "আপনার সমস্যা আমাদের অগ্রাধিকার। আপনি সন্তুষ্ট না হওয়া পর্যন্ত আমরা বিশ্রাম নিই না।" },
  deliverFast: { en: "We deliver fast", bn: "আমরা দ্রুত ডেলিভারি করি" },
  deliverFastDesc: { en: "No endless waiting. Most issues solved within 24-48 hours.", bn: "অন্তহীন অপেক্ষা নেই। বেশিরভাগ সমস্যা ২৪-৪৮ ঘন্টায় সমাধান।" },
  pricingPhilosophy: { en: "Our Pricing Philosophy", bn: "আমাদের মূল্য নীতি" },
  transparentQuotes: { en: "Transparent quotes.", bn: "স্বচ্ছ মূল্য।" },
  noHiddenFees: { en: "No hidden fees, no surprise charges.", bn: "কোনো গোপন ফি নেই, কোনো চমকানো চার্জ নেই।" },
  payFair: { en: "Pay what's fair.", bn: "ন্যায্য মূল্য দিন।" },
  priceByComplexity: { en: "We price based on complexity, not your budget.", bn: "আমরা জটিলতার ভিত্তিতে মূল্য নির্ধারণ করি, আপনার বাজেটের নয়।" },
  studentFriendly: { en: "Student & startup friendly.", bn: "শিক্ষার্থী ও স্টার্টআপ বান্ধব।" },
  specialRates: { en: "Special rates for those building their dreams.", bn: "যারা স্বপ্ন তৈরি করছেন তাদের জন্য বিশেষ রেট।" },
  freeConsultation: { en: "Free consultation.", bn: "বিনামূল্যে পরামর্শ।" },
  describeCost: { en: "Describe your problem first, we'll tell you the cost.", bn: "প্রথমে সমস্যা বলুন, আমরা খরচ জানাব।" },
  pricingQuote: { en: "We believe good tech help shouldn't cost a fortune.", bn: "আমরা বিশ্বাস করি ভালো প্রযুক্তি সাহায্যের জন্য অনেক টাকা লাগে না।" },
  period: { en: "Period.", bn: "ব্যস।" },

  // Testimonials
  realProblems: { en: "Real Problems.", bn: "সত্যিকার সমস্যা।" },
  realSolutions: { en: "Real Solutions.", bn: "সত্যিকার সমাধান।" },
  testimonialSubtitle: { en: "See how we've helped people just like you.", bn: "দেখুন কিভাবে আমরা আপনার মতো মানুষদের সাহায্য করেছি।" },
  problem: { en: "Problem:", bn: "সমস্যা:" },
  solution: { en: "Solution:", bn: "সমাধান:" },

  // Footer
  footerDesc: { en: "Your digital tech doctor for every problem. From apps to websites, from phone issues to tech consulting – we've got you covered.", bn: "প্রতিটি সমস্যার জন্য আপনার ডিজিটাল টেক ডাক্তার। অ্যাপ থেকে ওয়েবসাইট, ফোন সমস্যা থেকে টেক পরামর্শ – সবকিছুতে আমরা আছি।" },
  quickLinks: { en: "Quick Links", bn: "দ্রুত লিংক" },
  contactUs: { en: "Contact Us", bn: "যোগাযোগ করুন" },
  india: { en: "Bangladesh (Remote)", bn: "বাংলাদেশ (রিমোট)" },
  allRightsReserved: { en: "All rights reserved.", bn: "সর্বস্বত্ব সংরক্ষিত।" },
  builtWith: { en: "Built with ❤️ for problem solvers everywhere", bn: "সমস্যা সমাধানকারীদের জন্য ❤️ দিয়ে তৈরি" },

  // WhatsApp
  stuck: { en: "Stuck? Chat with us!", bn: "আটকে গেছেন? আমাদের সাথে চ্যাট করুন!" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

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
