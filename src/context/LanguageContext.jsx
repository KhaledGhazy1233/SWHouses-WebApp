import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  ar: {
    // Nav
    navHome: "الرئيسية",
    navAbout: "من نحن",
    navServices: "خدماتنا",
    navPortfolio: "معرض الأعمال",
    navContact: "تواصل معنا والجلسات",
    startProject: "ابدأ مشروعك الآن",

    // Hero
    futureReady: "FUTURE READY ⚡ تميز تقني مستدام",
    heroTitle1: "نبني منتجات رقمية",
    heroTitle2: "تدعم النمو وتسرّع التحول",
    heroSubtitle: "تطوير المنتجات الرقمية وحلول الأعمال - من الفكرة إلى الإطلاق والتطوير المستمر. نجمع بين الإبداع التقني والاستراتيجية التجارية لتحقيق نتائج ملموسة.",
    exploreWork: "استكشف أعمالنا",
    statProjects: "+150 مشروع ناجح",
    statSatisfaction: "98% رضا العملاء",
    statSupport: "24/7 دعم فني مستمر",
    trustedLeaders: "TRUSTED BY INDUSTRY LEADERS",

    // Pillars
    pillarsBadge: "رؤيتنا الثلاثية",
    pillarsTitle: "حلول متكاملة تقود نجاحك الرقمي",
    pillarsSubtitle: "نحن نجمع بين التحليل الاستراتيجي، والتصميم المبتكر، والتطوير البرمجي المتقن.",
    pillar1Title: "الاستراتيجية الرقمية",
    pillar1Desc: "نحلل احتياجات سوقك ونضع خريطة طريق واضحة لتحويل رؤيتك إلى منتج رقمي متكامل يحقق أهدافك.",
    pillar2Title: "التطوير المتقن",
    pillar2Desc: "بناء حلول برمجية قوية وقابلة للتوسع باستخدام أحدث التقنيات لضمان أداء استثنائي وتجربة مستخدم سلسة.",
    pillar3Title: "النمو المستدام",
    pillar3Desc: "لا نتوقف عند الإطلاق، بل نستمر في تطوير وتحسين منتجك بناءً على البيانات الحقيقية لضمان النمو.",

    // Tech Stack
    techStackBadge: "البنية التحتية",
    techStackTitle: "تقنياتنا الأساسية",
    techStackSubtitle: "نعتمد أفضل التقنيات العالمية لضمان سرعة الاستجابة، الأداء العالي وأمان البيانات.",

    // Services
    servicesBadge: "خدماتنا",
    servicesTitle: "ما نقدمه لمساعدتك على التفوق",
    servicesSubtitle: "نحن نمزج بين الذكاء الاستراتيجي والتميز التقني لبناء منتجات رقمية تعيد تشغيل الصناعات.",
    viewAllServices: "استعرض كافة الخدمات المتاحة",
    exploreService: "استكشف تفاصيل الخدمة",

    // Portfolio
    portfolioBadge: "معرض المشاريع",
    portfolioTitle: "أحدث أعمالنا الرقمية الناجحة",
    portfolioSubtitle: "نماذج متميزة لمشاريع بنيناها بشغف وحققت نتائج ملموسة لشركائنا.",
    viewAllProjects: "عرض كامل معارض الأعمال",
    viewDetails: "عرض التفاصيل",
    categoryAll: "الكل",

    // Team
    teamBadge: "فريقنا المبدع",
    teamTitle: "الفريق الأساسي خلف النجاح",
    teamSubtitle: "نحن نجمع بين العقول المبدعة والخبرات التقنية العميقة لتحويل الرؤى الرقمية إلى واقع ملموس.",

    // Process
    processBadge: "المنهجية البرمجية",
    processTitle: "طريقة عملنا المتقنة",
    processSubtitle: "نحن لا نقوم فقط ببناء البرمجيات؛ بل نقوم بهندسة التحول الرقمي بأسلوب سلس يضمن الجودة والسرعة.",

    // Contact & Booking
    contactBadge: "نظام حجز الجلسات والاستكشاف",
    contactTitle: "تواصل معنا",
    contactSubtitle: "لنحول فكرتكم إلى منتج رقمي فعال. نحن هنا لمناقشة طموحاتكم التقنية وتصميم خارطة طريق للنقاط.",
    contactDetailsTitle: "تفاصيل التواصل",
    contactDetailsDesc: "فريقنا متاح لمساعدتكم في أي وقت عبر القنوات التالية:",
    emailLabel: "وجهة الإلكتروني",
    phoneLabel: "رقم الهاتف",
    bookingTitle: "ابدأ جلسة الاستكشاف",
    bookingDesc: "احجز جلسة استشارية لمدة 45 دقيقة مجاناً مع خبراء الاستراتيجية التقنية.",
    fullNameLabel: "الاسم الكامل",
    emailInputLabel: "البريد الإلكتروني",
    projectTopicLabel: "موضوع المشروع",
    selectDateLabel: "اختر التاريخ المناسب",
    selectTimeLabel: "التوقيت المفضل",
    ideaDetailsLabel: "تفاصيل الفكرة والطموح",
    submitButton: "أرسل الطلب",
    freeOfferBadge: "عرض حصري",
    freeOfferTitle: "جلسة استكشاف استراتيجية مجانية",
    freeOfferDesc: "نقدم جلسة استشارية لمدة 45 دقيقة مع خبرائنا لتحليل تحدياتك الرقمية الحالية وتحديد فرص النمو. لا التزامات، فقط قيمة حقيقية.",
    bookNowButton: "احجز جلستك الآن",

    // Footer
    footerDesc: "نحن لا نبني برمجيات فحسب، بل نصمم أدوات استراتيجية تمكّن مؤسستك من النمو والتحول الرقمي المستدام بتميز تقني وهندسة متقنة.",
    quickLinks: "روابط سريعة",
    contactSocial: "التواصل والشبكات",
    allRightsReserved: "جميع الحقوق محفوظة."
  },

  en: {
    // Nav
    navHome: "Home",
    navAbout: "About Us",
    navServices: "Services",
    navPortfolio: "Portfolio",
    navContact: "Contact & Booking",
    startProject: "Start Project Now",

    // Hero
    futureReady: "FUTURE READY ⚡ Sustainable Tech Excellence",
    heroTitle1: "Building Digital Products",
    heroTitle2: "Accelerating Growth & Transformation",
    heroSubtitle: "Digital product development and business solutions — from concept to launch and continuous optimization. Blending technical creativity with business strategy.",
    exploreWork: "Explore Our Work",
    statProjects: "+150 Successful Projects",
    statSatisfaction: "98% Client Satisfaction",
    statSupport: "24/7 Ongoing Tech Support",
    trustedLeaders: "TRUSTED BY INDUSTRY LEADERS",

    // Pillars
    pillarsBadge: "Our Core Pillars",
    pillarsTitle: "Integrated Solutions Driving Your Digital Success",
    pillarsSubtitle: "Combining strategic research, innovative design, and robust software engineering.",
    pillar1Title: "Digital Strategy",
    pillar1Desc: "Analyzing market needs to create a clear roadmap transforming your vision into a scalable digital product.",
    pillar2Title: "Precision Engineering",
    pillar2Desc: "Building resilient and scalable software solutions using modern technologies to ensure peak performance.",
    pillar3Title: "Sustainable Growth",
    pillar3Desc: "We don't stop at launch. We continuously refine your product based on real user insights.",

    // Tech Stack
    techStackBadge: "Core Infrastructure",
    techStackTitle: "Our Core Tech Stack",
    techStackSubtitle: "We adopt world-class technologies to guarantee high performance, speed, and rock-solid data security.",

    // Services
    servicesBadge: "Services",
    servicesTitle: "What We Offer to Help You Excel",
    servicesSubtitle: "Blending strategic intelligence and technical mastery to build digital products that reshape industries.",
    viewAllServices: "View All Available Services",
    exploreService: "Explore Service Details",

    // Portfolio
    portfolioBadge: "Project Showcase",
    portfolioTitle: "Our Latest Successful Digital Work",
    portfolioSubtitle: "Featured case studies crafted with passion, delivering measurable results for our partners.",
    viewAllProjects: "View Full Portfolio",
    viewDetails: "View Details",
    categoryAll: "All",

    // Team
    teamBadge: "Creative Team",
    teamTitle: "The Core Team Behind Success",
    teamSubtitle: "Uniting creative minds and deep engineering expertise to turn digital visions into tangible reality.",

    // Process
    processBadge: "Agile Methodology",
    processTitle: "Our Refined Workflow",
    processSubtitle: "We don't just write code; we engineer digital transformation with smooth, high-speed execution.",

    // Contact & Booking
    contactBadge: "Exploratory Session & Booking",
    contactTitle: "Contact Us",
    contactSubtitle: "Let's turn your idea into a powerful digital product. We're here to design your strategic tech roadmap.",
    contactDetailsTitle: "Contact Details",
    contactDetailsDesc: "Our team is available to assist you anytime through the following channels:",
    emailLabel: "Email Address",
    phoneLabel: "Phone Number",
    bookingTitle: "Start Exploratory Session",
    bookingDesc: "Book a free 45-minute consultation session with our technical strategy experts.",
    fullNameLabel: "Full Name",
    emailInputLabel: "Email Address",
    projectTopicLabel: "Project Subject",
    selectDateLabel: "Select Date",
    selectTimeLabel: "Preferred Time",
    ideaDetailsLabel: "Idea & Project Details",
    submitButton: "Submit Request",
    freeOfferBadge: "Exclusive Offer",
    freeOfferTitle: "Free Strategic Discovery Session",
    freeOfferDesc: "We offer a 45-minute strategic session with our experts to analyze digital challenges and growth opportunities.",
    bookNowButton: "Book Your Session Now",

    // Footer
    footerDesc: "We don't just build software — we craft strategic tools that empower sustainable digital transformation.",
    quickLinks: "Quick Links",
    contactSocial: "Contact & Networks",
    allRightsReserved: "All Rights Reserved."
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('ar');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const t = (key) => {
    return translations[lang]?.[key] || translations['ar']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
