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
  testimonials: { en: "Testimonials", bn: "গ্রাহকদের মতামত" },
  getHelpNow: { en: "Get Help Now", bn: "এখনই সাহায্য নিন" },

  // Hero
  badge: { en: "AI-Powered Tech Solutions", bn: "এআই প্রযুক্তি সেবা" },
  heroTitle1: { en: "One Platform.", bn: "একটি প্ল্যাটফর্ম।" },
  heroTitle2: { en: "Every Tech Solution.", bn: "সব ধরনের টেক সমাধান।" },
  heroSubtitle: { 
    en: "From apps to websites, from problems to solutions – we fix, build & guide everything in tech.", 
    bn: "অ্যাপ তৈরি, ওয়েবসাইট ডিজাইন, ফোনের সমস্যা সমাধান – প্রযুক্তির যেকোনো কাজে আমরা আপনার পাশে আছি।" 
  },
  affordable: { en: "Affordable. Fast. Reliable.", bn: "কম খরচে। দ্রুত। বিশ্বস্ত।" },
  solveProblem: { en: "Solve My Problem", bn: "আমার সমস্যা সমাধান করুন" },
  exploreServices: { en: "Explore Services", bn: "সেবাগুলো দেখুন" },
  problemsSolved: { en: "Problems Solved", bn: "সমস্যা সমাধান হয়েছে" },
  avgResponse: { en: "Avg Response", bn: "গড় উত্তর সময়" },
  happyClients: { en: "Happy Clients", bn: "সন্তুষ্ট গ্রাহক" },

  // Services
  servicesTitle: { en: "Our Services", bn: "আমাদের সেবাসমূহ" },
  servicesSubtitle: { en: "Pick a service, get it done. No complexity, just solutions.", bn: "যে সেবাটি দরকার সেটি বেছে নিন, বাকিটা আমাদের উপর ছেড়ে দিন।" },
  allServices: { en: "All Services", bn: "সব সেবা" },
  development: { en: "Development", bn: "ডেভেলপমেন্ট" },
  customGifts: { en: "Custom Gifts", bn: "কাস্টম গিফট" },
  mobileSolutions: { en: "Mobile Solutions", bn: "মোবাইল সেবা" },
  consulting: { en: "Consulting", bn: "পরামর্শ" },
  popular: { en: "Popular", bn: "জনপ্রিয়" },
  orderNow: { en: "Order Now", bn: "অর্ডার করুন" },
  from: { en: "From", bn: "মূল্য শুরু" },

  // Service names
  appDev: { en: "App Development", bn: "অ্যাপ তৈরি" },
  appDevDesc: { en: "Custom Android & web apps built for your unique needs", bn: "আপনার প্রয়োজন অনুযায়ী অ্যান্ড্রয়েড ও ওয়েব অ্যাপ তৈরি করে দেওয়া হয়" },
  webDesign: { en: "Website Design", bn: "ওয়েবসাইট তৈরি" },
  webDesignDesc: { en: "Modern, responsive websites that convert visitors", bn: "সুন্দর ও আধুনিক ওয়েবসাইট যা মোবাইল ও কম্পিউটার দুটোতেই ভালো দেখায়" },
  customSoftware: { en: "Custom Software", bn: "কাস্টম সফটওয়্যার" },
  customSoftwareDesc: { en: "Tailored solutions for your business automation", bn: "আপনার ব্যবসার জন্য বিশেষভাবে তৈরি সফটওয়্যার" },
  aiTools: { en: "AI Tools & Automation", bn: "এআই টুলস ও অটোমেশন" },
  aiToolsDesc: { en: "Smart AI-powered tools to boost your productivity", bn: "এআই দিয়ে তৈরি স্মার্ট টুলস যা আপনার কাজ সহজ করবে" },
  birthdayGift: { en: "Birthday Website Gift", bn: "জন্মদিনের ওয়েবসাইট উপহার" },
  birthdayGiftDesc: { en: "Surprise your loved ones with a personalized web page", bn: "প্রিয়জনকে চমকে দিন একটি সুন্দর ওয়েব পেজ উপহার দিয়ে" },
  anniversaryGift: { en: "Anniversary & Love Pages", bn: "বিবাহবার্ষিকী ও ভালোবাসার পেজ" },
  anniversaryGiftDesc: { en: "Create memorable digital gifts for special moments", bn: "বিশেষ মুহূর্তগুলো ডিজিটাল পেজে সাজিয়ে উপহার দিন" },
  phoneFix: { en: "Phone Problem Fix", bn: "ফোনের সমস্যা সমাধান" },
  phoneFixDesc: { en: "Software issues, setup, guidance – all mobile problems", bn: "ফোনের সফটওয়্যার সমস্যা, সেটআপ, যেকোনো মোবাইল সমস্যার সমাধান" },
  techConsulting: { en: "Tech Consulting", bn: "টেক পরামর্শ" },
  techConsultingDesc: { en: "Expert guidance for startups, students & freelancers", bn: "উদ্যোক্তা, শিক্ষার্থী ও ফ্রিল্যান্সারদের জন্য বিশেষজ্ঞ পরামর্শ" },

  // Problem Submit
  aiAssisted: { en: "AI-Assisted Support", bn: "এআই সাপোর্ট" },
  describeProblem: { en: "Tell Us Your Problem", bn: "আপনার সমস্যাটি জানান" },
  problemSubtitle: { en: "Tell us what's wrong or what you need. We'll get back with a solution fast.", bn: "আপনার সমস্যা বা প্রয়োজন জানান। আমরা দ্রুত সমাধান নিয়ে যোগাযোগ করব।" },
  problemType: { en: "What type of problem?", bn: "কোন ধরনের সমস্যা?" },
  appSoftwareIssue: { en: "App/Software Issue", bn: "অ্যাপ/সফটওয়্যার সমস্যা" },
  websiteProblem: { en: "Website Problem", bn: "ওয়েবসাইট সমস্যা" },
  phoneMobileIssue: { en: "Phone/Mobile Issue", bn: "ফোন/মোবাইল সমস্যা" },
  needSomethingBuilt: { en: "Need Something Built", bn: "কিছু তৈরি করাতে চাই" },
  techGuidance: { en: "Tech Guidance", bn: "টেক গাইডেন্স" },
  other: { en: "Other", bn: "অন্যান্য" },
  describeYourProblem: { en: "Describe your problem", bn: "সমস্যাটি বিস্তারিত লিখুন" },
  problemPlaceholder: { en: "Tell us everything... What's happening? What did you try? What do you need?", bn: "বিস্তারিত বলুন... কী সমস্যা হচ্ছে? আগে কিছু চেষ্টা করেছেন? কী ধরনের সাহায্য দরকার?" },
  attachScreenshots: { en: "Attach screenshots (optional)", bn: "স্ক্রিনশট দিন (না দিলেও চলবে)" },
  clickOrDrag: { en: "Click or drag files here", bn: "এখানে ক্লিক করুন বা ছবি টেনে আনুন" },
  howUrgent: { en: "How urgent?", bn: "কতটা জরুরি?" },
  normal: { en: "Normal", bn: "সাধারণ" },
  urgent: { en: "Urgent", bn: "জরুরি" },
  asap: { en: "ASAP! 🔥", bn: "এখনই দরকার! 🔥" },
  whatsappOrEmail: { en: "WhatsApp or Email", bn: "হোয়াটসঅ্যাপ নম্বর বা ইমেইল" },
  contactPlaceholder: { en: "Your WhatsApp number or email", bn: "আপনার হোয়াটসঅ্যাপ নম্বর বা ইমেইল দিন" },
  submitProblem: { en: "Submit Problem", bn: "সমস্যা জমা দিন" },
  submitting: { en: "Submitting...", bn: "জমা হচ্ছে..." },
  problemSubmitted: { en: "Problem Submitted!", bn: "সমস্যা জমা হয়েছে!" },
  willGetBack: { en: "We'll get back to you within 24 hours.", bn: "আমরা ২৪ ঘণ্টার মধ্যে আপনার সাথে যোগাযোগ করব।" },

  // Why Us
  whyAsfrnest: { en: "Why YasDev?", bn: "কেন YasDev?" },
  whySubtitle: { en: "We're not your typical tech agency. We're your friendly neighborhood tech helpers who actually solve problems without burning your wallet.", bn: "আমরা সাধারণ টেক কোম্পানি না। আমরা আপনার বিশ্বস্ত প্রযুক্তি সহায়তাকারী – কম খরচে আসল সমস্যার আসল সমাধান দিই।" },
  dontOvercharge: { en: "We don't overcharge", bn: "কম খরচে কাজ করি" },
  dontOverchargeDesc: { en: "Fair pricing that students, freelancers & small businesses can actually afford.", bn: "শিক্ষার্থী, ফ্রিল্যান্সার ও ছোট ব্যবসার জন্য সাশ্রয়ী মূল্য।" },
  speakHuman: { en: "We speak human", bn: "সহজ ভাষায় বুঝিয়ে দিই" },
  speakHumanDesc: { en: "No tech jargon. We explain everything in simple language you understand.", bn: "কঠিন টেকনিক্যাল ভাষা নয়, সবকিছু সহজ বাংলায় বুঝিয়ে দিই।" },
  actuallyCare: { en: "We actually care", bn: "আমরা সত্যিই সাহায্য করতে চাই" },
  actuallyCareDesc: { en: "Your problem is our priority. We don't rest until you're satisfied.", bn: "আপনার সমস্যা আমাদের কাছে গুরুত্বপূর্ণ। আপনি সন্তুষ্ট না হওয়া পর্যন্ত আমরা কাজ করে যাই।" },
  deliverFast: { en: "We deliver fast", bn: "দ্রুত কাজ সম্পন্ন করি" },
  deliverFastDesc: { en: "No endless waiting. Most issues solved within 24-48 hours.", bn: "দিনের পর দিন অপেক্ষা করতে হবে না। বেশিরভাগ কাজ ২৪-৪৮ ঘণ্টায় শেষ।" },
  pricingPhilosophy: { en: "Our Pricing", bn: "আমাদের মূল্য নীতি" },
  transparentQuotes: { en: "Transparent quotes.", bn: "স্বচ্ছ মূল্য।" },
  noHiddenFees: { en: "No hidden fees, no surprise charges.", bn: "কোনো লুকানো খরচ নেই, কোনো চমকানো বিল নেই।" },
  payFair: { en: "Pay what's fair.", bn: "ন্যায্য মূল্যে কাজ করুন।" },
  priceByComplexity: { en: "We price based on complexity, not your budget.", bn: "কাজের জটিলতা অনুযায়ী মূল্য নির্ধারণ করি, আপনার বাজেট দেখে নয়।" },
  studentFriendly: { en: "Student & startup friendly.", bn: "শিক্ষার্থী ও নতুন উদ্যোক্তাদের জন্য বিশেষ সুবিধা।" },
  specialRates: { en: "Special rates for those building their dreams.", bn: "যারা নতুন কিছু শুরু করতে চান তাদের জন্য বিশেষ মূল্য।" },
  freeConsultation: { en: "Free consultation.", bn: "বিনামূল্যে পরামর্শ।" },
  describeCost: { en: "Describe your problem first, we'll tell you the cost.", bn: "আগে সমস্যাটা বলুন, তারপর আমরা খরচ জানাব।" },
  pricingQuote: { en: "We believe good tech help shouldn't cost a fortune.", bn: "আমরা বিশ্বাস করি ভালো প্রযুক্তি সেবার জন্য অনেক টাকা লাগে না।" },
  period: { en: "Period.", bn: "ব্যস।" },

  // Testimonials
  realProblems: { en: "Real Problems.", bn: "সত্যিকারের সমস্যা।" },
  realSolutions: { en: "Real Solutions.", bn: "সত্যিকারের সমাধান।" },
  testimonialSubtitle: { en: "See how we've helped people just like you.", bn: "দেখুন কিভাবে আমরা আপনার মতো মানুষদের সাহায্য করেছি।" },
  problem: { en: "Problem:", bn: "সমস্যা:" },
  solution: { en: "Solution:", bn: "সমাধান:" },

  // Footer
  footerDesc: { en: "Your digital tech doctor for every problem. From apps to websites, from phone issues to tech consulting – we've got you covered.", bn: "প্রযুক্তির যেকোনো সমস্যার ডিজিটাল ডাক্তার। অ্যাপ তৈরি, ওয়েবসাইট ডিজাইন, ফোনের সমস্যা থেকে শুরু করে টেক পরামর্শ – সবকিছুতে আমরা আপনার পাশে আছি।" },
  quickLinks: { en: "Quick Links", bn: "দ্রুত লিংক" },
  contactUs: { en: "Contact Us", bn: "যোগাযোগ" },
  location: { en: "Barisal, Bangladesh", bn: "বরিশাল, বাংলাদেশ" },
  allRightsReserved: { en: "All rights reserved.", bn: "সর্বস্বত্ব সংরক্ষিত।" },
  builtWith: { en: "Built with ❤️ for Bangladesh", bn: "বাংলাদেশের জন্য ❤️ দিয়ে তৈরি" },

  // WhatsApp
  stuck: { en: "Need help? Chat with us!", bn: "সাহায্য দরকার? চ্যাট করুন!" },

  // Auth
  login: { en: "Login", bn: "লগইন করুন" },
  dashboard: { en: "Dashboard", bn: "ড্যাশবোর্ড" },
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
