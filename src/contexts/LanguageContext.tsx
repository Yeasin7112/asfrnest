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
  howItWorks: { en: "How It Works", bn: "কার্যপ্রক্রিয়া" },
  whyUs: { en: "Why Us", bn: "কেন আমরা" },
  testimonials: { en: "Testimonials", bn: "ক্লায়েন্ট মতামত" },
  portfolio: { en: "Portfolio", bn: "পোর্টফোলিও" },
  faq: { en: "FAQ", bn: "প্রশ্নোত্তর" },
  getHelpNow: { en: "Get Help Now", bn: "যোগাযোগ করুন" },

  // Hero
  badge: { en: "Your Digital Tech Partner", bn: "আপনার বিশ্বস্ত ডিজিটাল পার্টনার" },
  heroTitle1: { en: "One Team.", bn: "একটি দল।" },
  heroTitle2: { en: "All Tech Solutions.", bn: "সম্পূর্ণ প্রযুক্তি সমাধান।" },
  heroSubtitle: {
    en: "Whether you need an app, a website, or just fixing your phone — we handle it all. Simply tell us what you need.",
    bn: "অ্যাপ, ওয়েবসাইট কিংবা মোবাইল সংক্রান্ত যেকোনো প্রযুক্তিগত প্রয়োজন—সব সমাধান এক প্ল্যাটফর্মে। আপনার প্রয়োজন জানান, বাকিটা আমাদের দায়িত্ব।"
  },
  affordable: { en: "Simple. Affordable. Done.", bn: "সহজ। সাশ্রয়ী। নির্ভরযোগ্য।" },
  solveProblem: { en: "Tell Us Your Problem", bn: "সমস্যা জানান" },
  exploreServices: { en: "See What We Do", bn: "সেবাসমূহ দেখুন" },
  problemsSolved: { en: "Problems Solved", bn: "সমাধানকৃত সমস্যা" },
  avgResponse: { en: "Avg Response", bn: "গড় সাড়াদান সময়" },
  happyClients: { en: "Happy Clients", bn: "সন্তুষ্ট ক্লায়েন্ট" },

  // Services
  servicesTitle: { en: "What We Do", bn: "আমাদের সেবাসমূহ" },
  servicesSubtitle: { en: "Pick what you need. We'll take care of the rest.", bn: "আপনার প্রয়োজনীয় সেবাটি বেছে নিন—বাস্তবায়নের দায়িত্ব আমাদের।" },
  allServices: { en: "All", bn: "সকল" },
  development: { en: "Development", bn: "ডেভেলপমেন্ট" },
  customGifts: { en: "Gifts", bn: "উপহার" },
  mobileSolutions: { en: "Mobile", bn: "মোবাইল" },
  consulting: { en: "Consulting", bn: "পরামর্শ" },
  popular: { en: "Popular", bn: "জনপ্রিয়" },
  orderNow: { en: "Order Now", bn: "অর্ডার করুন" },
  from: { en: "From", bn: "শুরু" },

  // Service names
  appDev: { en: "App Development", bn: "অ্যাপ ডেভেলপমেন্ট" },
  appDevDesc: { en: "Custom Android & web apps built for your needs", bn: "আপনার ব্যবসার প্রয়োজন অনুযায়ী কাস্টম অ্যান্ড্রয়েড ও ওয়েব অ্যাপ্লিকেশন তৈরি।" },
  webDesign: { en: "Website Design", bn: "ওয়েবসাইট ডিজাইন" },
  webDesignDesc: { en: "Modern websites that look great on every device", bn: "আধুনিক, রেসপনসিভ ওয়েবসাইট—যা প্রতিটি ডিভাইসে নিখুঁতভাবে প্রদর্শিত হয়।" },
  customSoftware: { en: "Custom Software", bn: "কাস্টম সফটওয়্যার" },
  customSoftwareDesc: { en: "Software solutions tailored to your business", bn: "আপনার প্রতিষ্ঠানের জন্য বিশেষভাবে ডিজাইন করা সফটওয়্যার সমাধান।" },
  aiTools: { en: "AI Tools & Automation", bn: "এআই টুলস ও অটোমেশন" },
  aiToolsDesc: { en: "Smart tools to save time and boost productivity", bn: "সময় সাশ্রয় ও কর্মদক্ষতা বৃদ্ধির জন্য আধুনিক এআই সমাধান।" },
  birthdayGift: { en: "Birthday Website Gift", bn: "জন্মদিনের ওয়েবসাইট উপহার" },
  birthdayGiftDesc: { en: "Surprise someone special with a personalized web page", bn: "প্রিয়জনের জন্য ব্যক্তিগতকৃত ডিজিটাল উপহার—একটি বিশেষ ওয়েব পেজ।" },
  anniversaryGift: { en: "Anniversary & Love Pages", bn: "বিবাহবার্ষিকী ও স্মরণীয় মুহূর্তের পেজ" },
  anniversaryGiftDesc: { en: "Digital gifts for life's special moments", bn: "জীবনের বিশেষ মুহূর্তগুলোকে স্মরণীয় রাখতে অনন্য ডিজিটাল উপহার।" },
  phoneFix: { en: "Phone Problem Fix", bn: "মোবাইল সমস্যা সমাধান" },
  phoneFixDesc: { en: "Software issues, setup help, and mobile troubleshooting", bn: "সফটওয়্যার ত্রুটি, সেটআপ সহায়তা এবং মোবাইল সংক্রান্ত যেকোনো সমস্যার সমাধান।" },
  techConsulting: { en: "Tech Consulting", bn: "প্রযুক্তি পরামর্শ" },
  techConsultingDesc: { en: "Expert guidance for entrepreneurs, students & freelancers", bn: "উদ্যোক্তা, শিক্ষার্থী ও ফ্রিল্যান্সারদের জন্য বিশেষজ্ঞ প্রযুক্তি পরামর্শ।" },

  // How It Works
  howItWorksTitle: { en: "How It Works", bn: "কার্যপ্রক্রিয়া" },
  howItWorksSubtitle: { en: "Getting help is as easy as 1-2-3", bn: "মাত্র তিনটি ধাপে আপনার কাজ সম্পন্ন হবে।" },
  step1Title: { en: "Tell Us What You Need", bn: "প্রয়োজন জানান" },
  step1Desc: { en: "Fill out the form or message us on WhatsApp. No tech knowledge needed.", bn: "ফর্মটি পূরণ করুন অথবা হোয়াটসঅ্যাপে বার্তা পাঠান। কোনো প্রযুক্তিগত জ্ঞানের প্রয়োজন নেই।" },
  step2Title: { en: "We Figure It Out", bn: "পরিকল্পনা প্রস্তুত" },
  step2Desc: { en: "Our team reviews your request and contacts you with a clear plan and price.", bn: "আমাদের দল আপনার অনুরোধ পর্যালোচনা করে সুনির্দিষ্ট পরিকল্পনা ও মূল্য প্রস্তাবসহ যোগাযোগ করবে।" },
  step3Title: { en: "Get It Done", bn: "সময়মতো সরবরাহ" },
  step3Desc: { en: "We deliver on time. You track progress from your dashboard.", bn: "নির্ধারিত সময়ে কাজ সরবরাহ করা হবে। ড্যাশবোর্ড থেকে অগ্রগতি পর্যবেক্ষণ করতে পারবেন।" },

  // Problem Submit
  aiAssisted: { en: "Quick Support", bn: "দ্রুত সহায়তা" },
  describeProblem: { en: "Tell Us Your Problem", bn: "আপনার সমস্যা বিবরণ করুন" },
  problemSubtitle: { en: "Describe your issue or what you need. We'll reach out with a solution.", bn: "আপনার সমস্যা বা প্রয়োজনীয়তার বিবরণ দিন—আমরা সমাধান নিয়ে শীঘ্রই যোগাযোগ করব।" },
  problemType: { en: "What kind of help?", bn: "সহায়তার ধরন নির্বাচন করুন" },
  appSoftwareIssue: { en: "App/Software Issue", bn: "অ্যাপ বা সফটওয়্যার সংক্রান্ত সমস্যা" },
  websiteProblem: { en: "Website Problem", bn: "ওয়েবসাইট সংক্রান্ত সমস্যা" },
  phoneMobileIssue: { en: "Phone/Mobile Issue", bn: "মোবাইল সংক্রান্ত সমস্যা" },
  needSomethingBuilt: { en: "Need Something Built", bn: "নতুন কিছু তৈরি করাতে চাই" },
  techGuidance: { en: "Tech Guidance", bn: "প্রযুক্তি পরামর্শ" },
  other: { en: "Other", bn: "অন্যান্য" },
  describeYourProblem: { en: "What's going on?", bn: "সমস্যার বিবরণ" },
  problemPlaceholder: { en: "Tell us everything... What happened? What did you try?", bn: "অনুগ্রহ করে বিস্তারিত লিখুন—কী সমস্যা হচ্ছে, কখন থেকে হচ্ছে এবং পূর্বে কী চেষ্টা করেছেন।" },
  attachScreenshots: { en: "Screenshot (optional)", bn: "স্ক্রিনশট সংযুক্ত করুন (ঐচ্ছিক)" },
  clickOrDrag: { en: "Click or drag image here", bn: "ছবি আপলোড করতে ক্লিক করুন অথবা এখানে টেনে আনুন" },
  howUrgent: { en: "How urgent?", bn: "জরুরি অবস্থা নির্বাচন করুন" },
  normal: { en: "Normal", bn: "সাধারণ" },
  urgent: { en: "Urgent", bn: "জরুরি" },
  asap: { en: "ASAP! 🔥", bn: "অতি জরুরি 🔥" },
  whatsappOrEmail: { en: "WhatsApp or Email", bn: "হোয়াটসঅ্যাপ অথবা ইমেইল" },
  contactPlaceholder: { en: "Your WhatsApp number or email", bn: "আপনার হোয়াটসঅ্যাপ নম্বর অথবা ইমেইল ঠিকানা" },
  submitProblem: { en: "Submit", bn: "জমা দিন" },
  submitting: { en: "Submitting...", bn: "প্রেরণ করা হচ্ছে..." },
  problemSubmitted: { en: "Got it! ✅", bn: "সফলভাবে গৃহীত হয়েছে ✅" },
  willGetBack: { en: "We'll contact you within 24 hours.", bn: "আগামী ২৪ ঘণ্টার মধ্যে আমরা আপনার সাথে যোগাযোগ করব।" },

  // Why Us
  whyAsfrnest: { en: "Why YasDev?", bn: "কেন YasDev নির্বাচন করবেন?" },
  whySubtitle: { en: "We're not a corporate agency. We're real people who genuinely want to help you with tech — at prices that won't empty your pocket.", bn: "আমরা একটি নিবেদিত ডিজিটাল এজেন্সি—যারা সাশ্রয়ী মূল্যে গুণগত মানসম্পন্ন প্রযুক্তি সমাধান প্রদানে প্রতিশ্রুতিবদ্ধ। আমাদের লক্ষ্য, আপনার ব্যবসার ডিজিটাল রূপান্তরে নির্ভরযোগ্য সহযোগী হয়ে ওঠা।" },
  dontOvercharge: { en: "Pocket-friendly rates", bn: "সাশ্রয়ী মূল্য" },
  dontOverchargeDesc: { en: "We keep prices reasonable so students, freelancers & small businesses can all afford quality work.", bn: "শিক্ষার্থী, ফ্রিল্যান্সার ও ছোট ব্যবসা—সকলের সাধ্যের মধ্যে গুণগত মানসম্পন্ন সেবা প্রদানই আমাদের অঙ্গীকার।" },
  speakHuman: { en: "We speak your language", bn: "সহজবোধ্য যোগাযোগ" },
  speakHumanDesc: { en: "No confusing tech talk. We explain everything clearly.", bn: "জটিল প্রযুক্তিগত পরিভাষা নয়—সবকিছু সহজ ভাষায় ব্যাখ্যা করি, যাতে আপনি সম্পূর্ণ প্রক্রিয়া বুঝতে পারেন।" },
  actuallyCare: { en: "We genuinely care", bn: "প্রকৃত যত্নশীলতা" },
  actuallyCareDesc: { en: "Your problem matters to us. We won't stop until it's fixed.", bn: "আপনার প্রতিটি প্রকল্প আমাদের কাছে গুরুত্বপূর্ণ। সম্পূর্ণ সন্তুষ্টি নিশ্চিত না হওয়া পর্যন্ত আমরা কাজ চালিয়ে যাই।" },
  deliverFast: { en: "Fast delivery", bn: "দ্রুত সরবরাহ" },
  deliverFastDesc: { en: "Most work done within 24-48 hours. No endless waiting.", bn: "অধিকাংশ কাজ ২৪ থেকে ৪৮ ঘণ্টার মধ্যে সরবরাহ করা হয়—দীর্ঘ অপেক্ষার প্রয়োজন নেই।" },
  pricingPhilosophy: { en: "Our Pricing", bn: "আমাদের মূল্য নীতিমালা" },
  transparentQuotes: { en: "Clear pricing.", bn: "স্বচ্ছ মূল্য নির্ধারণ।" },
  noHiddenFees: { en: "No hidden fees or surprise bills.", bn: "কোনো লুকায়িত চার্জ বা অপ্রত্যাশিত বিল নেই।" },
  payFair: { en: "Fair pricing.", bn: "ন্যায্য মূল্য।" },
  priceByComplexity: { en: "We charge based on the work, not how much you can pay.", bn: "মূল্য নির্ধারিত হয় কাজের পরিধি ও জটিলতার ভিত্তিতে।" },
  studentFriendly: { en: "Student & startup friendly.", bn: "শিক্ষার্থী ও স্টার্টআপ-বান্ধব মূল্য।" },
  specialRates: { en: "Special rates for those starting their journey.", bn: "নতুন উদ্যোক্তাদের জন্য বিশেষ ছাড়ের ব্যবস্থা রয়েছে।" },
  freeConsultation: { en: "Free consultation.", bn: "বিনামূল্যে পরামর্শ।" },
  describeCost: { en: "Tell us what you need first, then we'll quote a price.", bn: "প্রথমে আপনার প্রয়োজন জানান—এরপর সুনির্দিষ্ট মূল্য প্রস্তাব প্রদান করা হবে।" },
  pricingQuote: { en: "Good tech help shouldn't cost a fortune.", bn: "মানসম্পন্ন প্রযুক্তি সেবা সকলের সাধ্যের মধ্যে থাকা উচিত।" },
  period: { en: "Period.", bn: "এটিই আমাদের প্রতিশ্রুতি।" },

  // Testimonials
  realProblems: { en: "Real Stories.", bn: "বাস্তব অভিজ্ঞতা।" },
  realSolutions: { en: "Real Results.", bn: "প্রমাণিত ফলাফল।" },
  testimonialSubtitle: { en: "Hear from people we've already helped.", bn: "আমাদের সেবা গ্রহণকারী ক্লায়েন্টদের মতামত পড়ুন।" },
  problem: { en: "Problem:", bn: "সমস্যা:" },
  solution: { en: "Solution:", bn: "সমাধান:" },

  // FAQ
  faqTitle: { en: "Common Questions", bn: "প্রায়শই জিজ্ঞাসিত প্রশ্ন" },
  faqSubtitle: { en: "Got questions? We've got answers.", bn: "আপনার প্রশ্নের উত্তর এখানে পাবেন।" },
  faq1Q: { en: "How do I get started?", bn: "কীভাবে শুরু করব?" },
  faq1A: { en: "Just fill out the form on this page or message us on WhatsApp. We'll take it from there.", bn: "এই পৃষ্ঠার ফর্মটি পূরণ করুন অথবা হোয়াটসঅ্যাপের মাধ্যমে আমাদের সাথে যোগাযোগ করুন। পরবর্তী প্রক্রিয়া আমরা সম্পন্ন করব।" },
  faq2Q: { en: "What if I don't understand tech stuff?", bn: "আমার প্রযুক্তিগত জ্ঞান না থাকলেও কি সেবা গ্রহণ করতে পারব?" },
  faq2A: { en: "That's exactly why we exist! You don't need to know anything technical. Just tell us what you need in your own words.", bn: "অবশ্যই। প্রযুক্তিগত জ্ঞানের প্রয়োজন নেই। আপনি কেবল নিজের ভাষায় প্রয়োজনীয়তা জানান—বাকিটা আমাদের দায়িত্ব।" },
  faq3Q: { en: "How much does it cost?", bn: "সেবার মূল্য কত?" },
  faq3A: { en: "It depends on the work. But we always discuss pricing upfront — no surprises. Students and startups get special rates.", bn: "মূল্য কাজের পরিধি ও জটিলতার উপর নির্ভর করে। কাজ শুরুর পূর্বেই সুনির্দিষ্ট মূল্য নির্ধারণ করা হয়। শিক্ষার্থী ও স্টার্টআপের জন্য বিশেষ মূল্য প্রযোজ্য।" },
  faq4Q: { en: "How long does it take?", bn: "কাজ সম্পন্ন হতে কত সময় লাগে?" },
  faq4A: { en: "Most simple tasks are done within 24-48 hours. For bigger projects like apps or websites, we give you a clear timeline before starting.", bn: "ছোট কাজ সাধারণত ২৪–৪৮ ঘণ্টার মধ্যে সম্পন্ন হয়। বড় প্রকল্পের ক্ষেত্রে শুরুর পূর্বেই সুনির্দিষ্ট সময়সীমা জানিয়ে দেওয়া হয়।" },
  faq5Q: { en: "Can I track my order?", bn: "অর্ডারের অগ্রগতি কীভাবে পর্যবেক্ষণ করব?" },
  faq5A: { en: "Yes! Create a free account and check your dashboard anytime to see the status of your orders.", bn: "বিনামূল্যে একটি অ্যাকাউন্ট তৈরি করুন এবং ড্যাশবোর্ড থেকে যেকোনো সময় অর্ডারের সর্বশেষ অবস্থা পর্যবেক্ষণ করুন।" },

  // Footer
  footerDesc: { en: "Your trusted tech partner in Bangladesh. From building apps to fixing phones — we make technology simple and affordable for everyone.", bn: "বাংলাদেশে আপনার বিশ্বস্ত প্রযুক্তি সহযোগী। অ্যাপ ডেভেলপমেন্ট থেকে মোবাইল সমস্যা সমাধান পর্যন্ত—সাশ্রয়ী মূল্যে মানসম্পন্ন প্রযুক্তি সেবা প্রদানই আমাদের অঙ্গীকার।" },
  quickLinks: { en: "Quick Links", bn: "গুরুত্বপূর্ণ লিংক" },
  contactUs: { en: "Contact", bn: "যোগাযোগ" },
  location: { en: "Barisal, Bangladesh", bn: "বরিশাল, বাংলাদেশ" },
  allRightsReserved: { en: "All rights reserved.", bn: "সর্বস্বত্ব সংরক্ষিত।" },
  builtWith: { en: "Made with ❤️ in Bangladesh", bn: "বাংলাদেশে ❤️ দিয়ে নির্মিত" },

  // WhatsApp
  stuck: { en: "Chat with us!", bn: "হোয়াটসঅ্যাপে যোগাযোগ করুন" },

  // Auth
  login: { en: "Login", bn: "লগইন" },
  dashboard: { en: "Dashboard", bn: "ড্যাশবোর্ড" },

  // CTA
  ctaTitle: { en: "Ready to Get Started?", bn: "শুরু করতে প্রস্তুত?" },
  ctaSubtitle: { en: "Tell us what you need and we'll handle the rest. It's that simple.", bn: "আপনার প্রয়োজন জানান—বাস্তবায়নের সম্পূর্ণ দায়িত্ব আমাদের।" },
  ctaButton: { en: "Get Started Now", bn: "এখনই শুরু করুন" },
  ctaWhatsApp: { en: "Or WhatsApp Us", bn: "হোয়াটসঅ্যাপে যোগাযোগ করুন" },
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
