import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Zap,
  Target,
  Users,
  Award,
  Layers,
  ArrowLeft
} from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';

export const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      title: "التفكير بجدوى الأعمال أولاً",
      subtitle: "نبدأ من أهدافك التجارية. كل حل نقدمه مصمم لخدمة نموذج عملك وزيادة كفاءة العمليات التشغيلية وتحقيق عوائد ملموسة.",
      icon: Target,
      badge: "قيمة مضافة"
    },
    {
      title: "حلول عملية قابلة للتوسع",
      subtitle: "نطور أنظمة مرنة تحمل التوسع المستقبلي. هندستنا التقنية تضمن لك استقرار الأداء مع زيادة عدد المستخدمين وتعقيد البيانات.",
      icon: Layers,
      badge: "معمارية مرنة"
    },
    {
      title: "شفافية عالية في التنفيذ",
      subtitle: "ستكون على اطلاع دائم بكل مرحلة. نستخدم أدوات إدارة مشاريع تمنحك رؤية كاملة لتقدم العمل والجدول الزمني والتكاليف.",
      icon: ShieldCheck,
      badge: "وضوح تام"
    },
    {
      title: "بيئة تقنية حديثة وموثوقة",
      subtitle: "نطبق أحدث التقنيات لضمان السرعة والأمان. نستخدم معايير عالمية في البرمجة لضمان جودة الكود وسهولة صيانته.",
      icon: Zap,
      badge: "تقنيات متطورة"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFB] text-slate-900 pt-20 sm:pt-24 pb-14 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">

        {/* HERO / INTRO SECTION */}
        <section className="text-center max-w-4xl mx-auto space-y-6 pt-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-600 border border-sky-200"
          >
            <span>القيم المضافة</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight"
          >
            لماذا نحن؟ <br />
            <span className="cyan-gradient-text">نحن لا نبني برمجيات فحسب، بل نصمم أدوات استراتيجية</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
          >
            نساعد الشركات الناشئة والمتوسطة والكبيرة على اتخاذ خطوة سباقة في سوقها المحلي والإقليمي من خلال منتجات رقمية فريدة تسرّع النمو وتضمن الكفاءة التشغيلية.
          </motion.p>
        </section>

        {/* CORE VALUES GRID (Matching Mockup Image 2: لماذا نحن) */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
          {values.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-5 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all space-y-3 sm:space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 text-sky-400 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.subtitle}
                </p>
              </motion.div>
            );
          })}
        </section>

        {/* RESULTS CARD HIGHLIGHT (Matching Mockup Image 2 dark card: نتائج قابلة للقياس) */}
        <section>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-950 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center border border-slate-800"
          >
            <div className="lg:col-span-8 space-y-3 sm:space-y-4 text-start">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-800">
                <TrendingUp className="w-4 h-4" />
                <span>نتائج ملموسة للأعمال</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">نتائج قابلة للقياس وموثوقة</h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                نركز على مؤشرات الأداء الرئيسية (KPIs). نجاحنا يقاس بمدى تحقيق منتجاتنا للنتائج المرجوة في الواقع العملي وتجربة المستخدم.
              </p>
            </div>
            <div className="lg:col-span-4 bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center space-y-2">
              <div className="text-4xl sm:text-5xl font-black text-sky-400">98%</div>
              <div className="text-xs font-bold text-slate-300">معدل نجاح المشاريع المستمرة</div>
              <div className="text-[11px] text-slate-500">مبني على تقييمات العملاء والتحول الرقمي</div>
            </div>
          </motion.div>
        </section>

        {/* METHODOLOGY & TRANSFORMATION SHOWCASE */}
        <section className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 border border-slate-200/80 shadow-sm space-y-6 sm:space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-3xl font-extrabold text-slate-900">نهجنا في التحول الرقمي</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                من خلال دمج الخبرة الاستشارية بالتميز التقني، نخلق قيمة مضافة تتجاوز مجرد كتابة الأسطر البرمجية إلى تحول جذري في أداء المؤسسة.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 font-bold flex items-center justify-center shrink-0 text-xs">01</span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">الاكتشاف العميق</h4>
                    <p className="text-xs text-slate-500">نقيم التحديات الحقيقية قبل طرح الحلول.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 font-bold flex items-center justify-center shrink-0 text-xs">02</span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">التنفيذ الرشيق</h4>
                    <p className="text-xs text-slate-500">دورات تطوير سريعة وتحسينات مستمرة بناءً على التغذية الراجعة.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 font-bold flex items-center justify-center shrink-0 text-xs">03</span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">الدعم والشراكة</h4>
                    <p className="text-xs text-slate-500">علاقة طويلة الأجل تهدف لنمو منتجك وتطويره.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80"
                  alt="Transformation Team"
                  className="w-full h-52 sm:h-72 md:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center space-y-4 pt-4">
          <Button
            variant="primary"
            size="lg"
            icon={ArrowLeft}
            onClick={() => navigate('/contact')}
          >
            تحدث مع فريقنا الاستشاري اليوم
          </Button>
        </section>

      </div>
    </div>
  );
};

export default About;
