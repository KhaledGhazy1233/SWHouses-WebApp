import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Target,
  Layout,
  Code,
  ArrowLeft
} from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import ServiceCard from '../components/ui/ServiceCard';
import TechStackSection from '../components/ui/TechStackSection';
import { servicesData } from '../data/servicesData';

export const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FAFAFB] text-slate-900 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* HERO / INTRO */}
        <section className="text-center max-w-4xl mx-auto space-y-6 pt-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-600 border border-sky-200"
          >
            <span>خدماتنا المتخصصة</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight"
          >
            خدماتنا الرقمية <br />
            <span className="cyan-gradient-text">نمزج بين الذكاء الاستراتيجي والتميز التقني</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
          >
            حلول مصممة بثقة لتلبية تطلعات الشركات الأكثر طموحاً في العصر الرقمي، من البداية وحتى التوسع.
          </motion.p>
        </section>

        {/* SERVICES CARDS GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </section>

        {/* TECH STACK CAROUSEL */}
        <TechStackSection />

        {/* CORE COMPETENCIES (Matching Mockup Image 4: كفاءاتنا الجوهرية) */}
        <section className="space-y-8">
          <SectionTitle
            badge="التميز التقني"
            title="كفاءاتنا الجوهرية"
            subtitle="نؤمن بأن المنتج الرقمي العظيم يولد من تقاطع الرؤية الاستراتيجية والتجربة الاستثنائية والهندسة المتينة."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 text-right space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Product Strategy</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                تحويل الأفكار إلى خرائط طريق قابلة للتنفيذ مع التركيز على ملاءمة المنتج للسوق وتحقيق الأهداف الاستراتيجية.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 text-right space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                <Layout className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">UI/UX Design</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                تصميم واجهات مستخدم بديعة وتجارب رقمية تترك أثراً مع التركيز على سهولة الاستخدام والتفاعل الذكي.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 text-right space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Engineering</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                تطوير برمجيات عالية الأداء قابلة للتوسع وأمنة باستخدام أحدث التقنيات وأفضل ممارسات هندسة البرمجيات.
              </p>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="text-center pt-8">
          <Button
            variant="primary"
            size="lg"
            icon={ArrowLeft}
            onClick={() => navigate('/contact')}
          >
            احجز جلسة استكشافية لمناقشة مشروعك
          </Button>
        </section>

      </div>
    </div>
  );
};

export default Services;
