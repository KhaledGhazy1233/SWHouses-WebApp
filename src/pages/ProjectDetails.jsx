import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Cpu,
  Globe,
  Calendar,
  Code,
  BarChart3,
  ClipboardList,
  Shield,
  Megaphone,
  GraduationCap,
  Trophy,
  FolderKanban,
  CheckSquare,
  Users,
  Database,
  Layers,
  Sparkles,
  Zap,
  LayoutDashboard,
  ShoppingCart,
  Search,
  UserCheck,
  LayoutGrid,
  Monitor,
  Lock,
  Bell,
  Tag,
  BookOpen
} from 'lucide-react';
import { projectsData } from '../data/projectsData';
import Button from '../components/common/Button';
import { useTheme } from '../context/ThemeContext';
import { LaborexLogoCard } from '../components/ui/LaborexLogoCard';
import { MatgarLogoCard } from '../components/ui/MatgarLogoCard';
import { TantaLogoCard } from '../components/ui/TantaLogoCard';
import { QadiaLogoCard } from '../components/ui/QadiaLogoCard';
import { EcommerceLogoCard } from '../components/ui/EcommerceLogoCard';
import { LetopiaLogoCard } from '../components/ui/LetopiaLogoCard';
import { StreakLogoCard } from '../components/ui/StreakLogoCard';
import tantaMockupImg from '../assets/tanta-mockup.png';

export const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const project = projectsData.find((p) => p.id === id) || projectsData[0];
  const isEcommerce = project.id === 'ecommerce-depi-platform';
  const isQadia = project.id === 'qadia-legal-desktop';
  const isTanta = project.id === 'tanta-university-app';
  const isMatgar = project.id === 'matgar-saas';
  const isLaborex = project.id === 'laborex-pharma';
  const isLetopia = project.id === 'letopia-platform';
  const isStreakRestaurant = project.id === 'streak-restaurant';

  return (
    <div className={`min-h-screen pt-20 pb-20 transition-colors duration-300 ${isDark ? 'bg-[#0F172A] text-slate-200' : 'bg-[#FAFAFB] text-slate-900'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* ── BACK BUTTON ── */}
        <div className="pt-4">
          <button
            onClick={() => navigate('/portfolio')}
            className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors cursor-pointer ${isDark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'
              }`}
          >
            <ArrowRight className="w-4 h-4" />
            <span>العودة لمعرض الأعمال</span>
          </button>
        </div>

        {/* ── HERO BANNER MATCHING SCREENSHOTS ── */}
        <section className={`rounded-3xl p-6 sm:p-10 md:p-12 border shadow-lg overflow-hidden relative ${isDark ? 'bg-[#121824] border-slate-700/60' : 'bg-white border-slate-200/80'
          }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Right Column: Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-right">
              <div className="flex items-center gap-2">
                <span className="h-0.5 w-8 bg-sky-500 rounded-full" />
                <span className="text-xs font-bold text-sky-500 uppercase tracking-widest">
                  {isEcommerce ? 'PROJECT SHOWCASE 2026' : isQadia ? 'إنتاج - 2024 (تطبيقات الديسكتوب)' : isTanta ? 'مشروع حكومي تعليمي' : isMatgar ? 'دراسة حالة مشروع' : isLetopia ? 'منصة تعليمية وتطويرية بالذكاء الاصطناعي' : project.client}
                </span>
              </div>

              <h1 className={`text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight ${isDark ? 'text-white' : 'text-slate-950'}`}>
                {isEcommerce ? (
                  <>
                    منصة تجارة <br className="hidden sm:block" />
                    <span className="text-sky-500">إلكترونية متكاملة</span>
                  </>
                ) : isQadia ? (
                  <>
                    نظام قضية <br className="hidden sm:block" />
                    <span className="text-emerald-500">لإدارة مكاتب المحاماة</span>
                  </>
                ) : isTanta ? (
                  <>
                    تطبيق جامعة طنطا <br className="hidden sm:block" />
                    <span className="text-sky-500">الرسمي للهواتف</span>
                  </>
                ) : isMatgar ? (
                  <>
                    تمكين التجارة من خلال <br className="hidden sm:block" />
                    <span className="cyan-gradient-text">الابتكار بدون كود.</span>
                  </>
                ) : isLaborex ? (
                  <>
                    ثورة في <span className="text-sky-500">توزيع الأدوية</span> <br className="hidden sm:block" />
                    عبر الحلول الرقمية الذكية
                  </>
                ) : isLetopia ? (
                  <>
                    منصة ليتوبيا <br className="hidden sm:block" />
                    <span className="text-sky-500">(Letopia Platform)</span>
                  </>
                ) : (
                  project.title
                )}
              </h1>

              {/* Letopia Meta Tags Line */}
              {isLetopia && (
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-lg border ${isDark ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                    }`}>
                    <Calendar className="w-3.5 h-3.5 text-sky-500" />
                    قيد الإنتاج - 2026
                  </span>
                  <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-lg border ${isDark ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                    }`}>
                    <Code className="w-3.5 h-3.5 text-sky-500" />
                    مطور وعضو فريق مشروع التخرج
                  </span>
                </div>
              )}

              {/* Tanta Meta Tags Line */}
              {isTanta && (
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-lg border ${isDark ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                    }`}>
                    <Calendar className="w-3.5 h-3.5 text-sky-500" />
                    إصدار 2025
                  </span>
                  <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-lg border ${isDark ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                    }`}>
                    <Code className="w-3.5 h-3.5 text-sky-500" />
                    مطور فلاتر
                  </span>
                  <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-lg border ${isDark ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                    }`}>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    موثق أكاديمياً
                  </span>
                </div>
              )}

              <p className={`text-sm sm:text-base leading-relaxed max-w-xl font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {project.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  icon={ArrowLeft}
                  onClick={() => navigate('/contact')}
                  className="shadow-md"
                >
                  تحدث معنا لمشروعك
                </Button>
              </div>

            </div>

            {/* Left Column: Visual Artwork Banner */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border border-slate-700/40"
              >
                {isEcommerce ? (
                  <EcommerceLogoCard isThumbnail={false} />
                ) : isQadia ? (
                  <QadiaLogoCard isThumbnail={false} />
                ) : isTanta ? (
                  <TantaLogoCard isThumbnail={false} />
                ) : isMatgar ? (
                  <MatgarLogoCard isThumbnail={false} />
                ) : isLaborex ? (
                  <LaborexLogoCard isThumbnail={false} />
                ) : isLetopia ? (
                  <LetopiaLogoCard isThumbnail={false} />
                ) : isStreakRestaurant ? (
                  <StreakLogoCard isThumbnail={false} />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </motion.div>
            </div>

          </div>
        </section>

        {/* ── STATS BAR FOR E-COMMERCE (100% دفع آمن | +500 | SOA | +20) ── */}
        {isEcommerce && (
          <section className="bg-[#0B1220] text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-slate-800/80">

              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-black text-sky-400">100%</div>
                <div className="text-sm font-bold">دفع آمن</div>
              </div>

              <div className="space-y-1 pt-4 md:pt-0">
                <div className="text-3xl sm:text-4xl font-black text-sky-400">+500</div>
                <div className="text-sm font-bold">مستخدم مستهدف</div>
              </div>

              <div className="space-y-1 pt-4 md:pt-0">
                <div className="text-3xl sm:text-4xl font-black text-sky-400">SOA</div>
                <div className="text-sm font-bold">هيكلية الخدمات</div>
              </div>

              <div className="space-y-1 pt-4 md:pt-0">
                <div className="text-3xl sm:text-4xl font-black text-sky-400">+20</div>
                <div className="text-sm font-bold">واجهة مستخدم</div>
              </div>

            </div>
          </section>
        )}

        {/* ── KEY FEATURES SECTION FOR E-COMMERCE (المميزات الرئيسية للنظام - 6 Cards) ── */}
        {isEcommerce && (
          <section className="space-y-8 pt-4">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <h2 className={`text-3xl font-extrabold ${isDark ? 'text-white' : 'text-slate-950'}`}>
                المميزات الرئيسية للنظام
              </h2>
              <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                تم تطوير كل ميزة بعناية لضمان تجربة مستخدم رائدة وأمان متكامل للبيانات والمعاملات.
              </p>
              <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto" />
            </div>

            {/* 6 Feature Cards Grid (3 cols x 2 rows) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Card 1: سلة التسوق مع Stripe */}
              <div className={`p-6 rounded-3xl border space-y-3 text-right ${isDark ? 'bg-[#121824] border-slate-700/60' : 'bg-white border-slate-200/80'
                }`}>
                <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-slate-800 border border-sky-100 dark:border-slate-700 flex items-center justify-center text-sky-500">
                  <ShoppingCart className="w-5 h-5" />
                </div>
                <h3 className={`text-lg font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  سلة التسوق مع Stripe
                </h3>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  تكامل كامل مع بوابة الدفع Stripe لتوفير عمليات دفع آمنة ومشفرة، مع إدارة ديناميكية لمخزون السلة.
                </p>
              </div>

              {/* Card 2: بحث وتصفية متقدم */}
              <div className={`p-6 rounded-3xl border space-y-3 text-right ${isDark ? 'bg-[#121824] border-slate-700/60' : 'bg-white border-slate-200/80'
                }`}>
                <div className="w-10 h-10 rounded-2xl bg-cyan-50 dark:bg-slate-800 border border-cyan-100 dark:border-slate-700 flex items-center justify-center text-cyan-500">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className={`text-lg font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  بحث وتصفية متقدم
                </h3>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  محرك بحث فائق السرعة يسمح للمستخدمين بتصنيف المنتجات حسب الفئة، السعر، والعلامة التجارية بدقة عالية.
                </p>
              </div>

              {/* Card 3: إدارة الأدوار (RBAC) */}
              <div className={`p-6 rounded-3xl border space-y-3 text-right ${isDark ? 'bg-[#121824] border-slate-700/60' : 'bg-white border-slate-200/80'
                }`}>
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-slate-800 border border-indigo-100 dark:border-slate-700 flex items-center justify-center text-indigo-500">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className={`text-lg font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  إدارة الأدوار (RBAC)
                </h3>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  نظام صلاحيات صارم يفصل بين مهام المسؤولين، الموردين، والعملاء لضمان استقرار النظام.
                </p>
              </div>

              {/* Card 4: لوحة تحكم إدارية */}
              <div className={`p-6 rounded-3xl border space-y-3 text-right ${isDark ? 'bg-[#121824] border-slate-700/60' : 'bg-white border-slate-200/80'
                }`}>
                <div className="w-10 h-10 rounded-2xl bg-purple-50 dark:bg-slate-800 border border-purple-100 dark:border-slate-700 flex items-center justify-center text-purple-500">
                  <LayoutGrid className="w-5 h-5" />
                </div>
                <h3 className={`text-lg font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  لوحة تحكم إدارية
                </h3>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  واجهة إدارية شاملة لمراقبة المبيعات، إضافة المنتجات، وإدارة طلبات العملاء بشكل لحظي.
                </p>
              </div>

              {/* Card 5: تصميم متجاوب بالكامل */}
              <div className={`p-6 rounded-3xl border space-y-3 text-right ${isDark ? 'bg-[#121824] border-slate-700/60' : 'bg-white border-slate-200/80'
                }`}>
                <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-slate-800 border border-blue-100 dark:border-slate-700 flex items-center justify-center text-blue-500">
                  <Monitor className="w-5 h-5" />
                </div>
                <h3 className={`text-lg font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  تصميم متجاوب بالكامل
                </h3>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  تجربة مستخدم مثالية على كافة الأجهزة (موبايل، تابلت، ديسكتوب) باستخدام تقنيات Bootstrap الحديثة.
                </p>
              </div>

              {/* Card 6: توثيق هوية آمن */}
              <div className={`p-6 rounded-3xl border space-y-3 text-right ${isDark ? 'bg-[#121824] border-slate-700/60' : 'bg-white border-slate-200/80'
                }`}>
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-slate-800 border border-emerald-100 dark:border-slate-700 flex items-center justify-center text-emerald-500">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className={`text-lg font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  توثيق هوية آمن
                </h3>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  استخدام ASP.NET Identity مع حماية ضد هجمات CSRF و XSS لضمان أعلى مستويات الأمان لبيانات المستخدمين.
                </p>
              </div>

            </div>
          </section>
        )}

        {/* ── KEY FEATURES SECTION FOR STREAK RESTAURANT ── */}
        {isStreakRestaurant && (
          <section className="space-y-8 pt-4">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <h2 className={`text-3xl font-extrabold ${isDark ? 'text-white' : 'text-slate-950'}`}>
                المميزات الرئيسية للتطبيق
              </h2>
              <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Feature 1: تصفح المنيو */}
              <div className={`p-6 rounded-3xl border space-y-3 text-right ${isDark ? 'bg-[#121824] border-slate-700/60' : 'bg-white border-slate-200/80'}`}>
                <div className="w-10 h-10 rounded-2xl bg-orange-50 dark:bg-slate-800 border border-orange-100 dark:border-slate-700 flex items-center justify-center text-orange-500">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className={`text-lg font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  تصفح المنيو
                </h3>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  تنظيم ذكي للأصناف مع صور عالية الجودة وتقييمات مرنة لتسهيل اختيار الوجبات.
                </p>
              </div>

              {/* Feature 2: الملف الشخصي */}
              <div className={`p-6 rounded-3xl border space-y-3 text-right ${isDark ? 'bg-[#121824] border-slate-700/60' : 'bg-white border-slate-200/80'}`}>
                <div className="w-10 h-10 rounded-2xl bg-orange-50 dark:bg-slate-800 border border-orange-100 dark:border-slate-700 flex items-center justify-center text-orange-500">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className={`text-lg font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  الملف الشخصي
                </h3>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  حفظ التفضيلات، سجل الطلبات، وعناوين التوصيل المفضلة لتجربة سريعة ومخصصة.
                </p>
              </div>

              {/* Feature 3: الإشعارات */}
              <div className={`p-6 rounded-3xl border space-y-3 text-right ${isDark ? 'bg-[#121824] border-slate-700/60' : 'bg-white border-slate-200/80'}`}>
                <div className="w-10 h-10 rounded-2xl bg-orange-50 dark:bg-slate-800 border border-orange-100 dark:border-slate-700 flex items-center justify-center text-orange-500">
                  <Bell className="w-5 h-5" />
                </div>
                <h3 className={`text-lg font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  الإشعارات
                </h3>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  تحديثات فورية عن حالة الطلب وأحدث العروض الترويجية والحصرية للمطعم.
                </p>
              </div>

              {/* Feature 4: الكوبونات */}
              <div className={`p-6 rounded-3xl border space-y-3 text-right ${isDark ? 'bg-[#121824] border-slate-700/60' : 'bg-white border-slate-200/80'}`}>
                <div className="w-10 h-10 rounded-2xl bg-orange-50 dark:bg-slate-800 border border-orange-100 dark:border-slate-700 flex items-center justify-center text-orange-500">
                  <Tag className="w-5 h-5" />
                </div>
                <h3 className={`text-lg font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  الكوبونات
                </h3>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  نظام إدارة خصومات متطور ودعم الكوبونات الترويجية لزيادة الولاء والمبيعات.
                </p>
              </div>

              {/* Feature 5: لوحة الأمن */}
              <div className={`p-6 rounded-3xl border space-y-3 text-right ${isDark ? 'bg-[#121824] border-slate-700/60' : 'bg-white border-slate-200/80'}`}>
                <div className="w-10 h-10 rounded-2xl bg-orange-50 dark:bg-slate-800 border border-orange-100 dark:border-slate-700 flex items-center justify-center text-orange-500">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className={`text-lg font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  لوحة الأمن
                </h3>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  تحكم كامل وتام في محاور التطبيق والحسابات للمستخدمين مع حماية البيانات الحساسة.
                </p>
              </div>

            </div>
          </section>
        )}

        {/* ── KEY FEATURES SECTION FOR LETOPIA (المميزات الرئيسية للمنصة - 4 Cards) ── */}
        {isLetopia && (
          <section className="space-y-8 pt-4">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <h2 className={`text-3xl font-extrabold ${isDark ? 'text-white' : 'text-slate-950'}`}>
                المميزات الرئيسية للمنصة
              </h2>
              <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                بيئة تعليمية متكاملة مصممة لسد الفجوة بين الجانب النظري والتطبيق العملي.
              </p>
              <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Card 1: خرائط طريق بالذكاء الاصطناعي */}
              <div className={`p-6 rounded-3xl border space-y-3 text-right ${isDark ? 'bg-[#121824] border-slate-700/60' : 'bg-white border-slate-200/80'
                }`}>
                <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-slate-800 border border-sky-100 dark:border-slate-700 flex items-center justify-center text-sky-500">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className={`text-lg font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  خرائط طريق بالذكاء الاصطناعي
                </h3>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  توجيه مخصص يتم إنشاؤه عبر وكلاء الذكاء الاصطناعي (AI Agents) لتحديد المسار الأمثل لكل تخصص.
                </p>
              </div>

              {/* Card 2: المجتمعات والنقاشات */}
              <div className={`p-6 rounded-3xl border space-y-3 text-right ${isDark ? 'bg-[#121824] border-slate-700/60' : 'bg-white border-slate-200/80'
                }`}>
                <div className="w-10 h-10 rounded-2xl bg-cyan-50 dark:bg-slate-800 border border-cyan-100 dark:border-slate-700 flex items-center justify-center text-cyan-500">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className={`text-lg font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  المجتمعات والنقاشات
                </h3>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  دعم كامل للأعضاء، الأدوار، المنشورات، والتعليقات لبناء شبكات تعلم فعالة.
                </p>
              </div>

              {/* Card 3: المشاريع والتدريب العملي */}
              <div className={`p-6 rounded-3xl border space-y-3 text-right ${isDark ? 'bg-[#121824] border-slate-700/60' : 'bg-white border-slate-200/80'
                }`}>
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-slate-800 border border-indigo-100 dark:border-slate-700 flex items-center justify-center text-indigo-500">
                  <FolderKanban className="w-5 h-5" />
                </div>
                <h3 className={`text-lg font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  المشاريع والتدريب العملي
                </h3>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  تتبع التقدم من خلال معالم (Milestones) والمهام المجتمعية لضمان تطبيق ما تم تعلمه.
                </p>
              </div>

              {/* Card 4: إدارة البيانات والخلفية */}
              <div className={`p-6 rounded-3xl border space-y-3 text-right ${isDark ? 'bg-[#121824] border-slate-700/60' : 'bg-white border-slate-200/80'
                }`}>
                <div className="w-10 h-10 rounded-2xl bg-purple-50 dark:bg-slate-800 border border-purple-100 dark:border-slate-700 flex items-center justify-center text-purple-500">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className={`text-lg font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  إدارة البيانات والخلفية
                </h3>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  هيكل متين لمعالجة منطق الأعمال، المصادقة (Auth)، والبحث السريع والمتقدم.
                </p>
              </div>

            </div>
          </section>
        )}

        {/* ── TECH STACK ROW FOR E-COMMERCE ── */}
        {isEcommerce ? (
          <section className="text-center space-y-4 pt-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              التقنيات المستخدمة
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className={`px-4 py-2.5 rounded-2xl text-xs font-bold border flex items-center gap-2 ${isDark ? 'bg-[#121824] border-slate-700/60 text-slate-200' : 'bg-white border-slate-200 text-slate-800'}`}>
                <Cpu className="w-4 h-4 text-sky-500" />
                <span>ASP.NET Core</span>
              </div>
              <div className={`px-4 py-2.5 rounded-2xl text-xs font-bold border flex items-center gap-2 ${isDark ? 'bg-[#121824] border-slate-700/60 text-slate-200' : 'bg-white border-slate-200 text-slate-800'}`}>
                <Code className="w-4 h-4 text-emerald-500" />
                <span>C# Language</span>
              </div>
              <div className={`px-4 py-2.5 rounded-2xl text-xs font-bold border flex items-center gap-2 ${isDark ? 'bg-[#121824] border-slate-700/60 text-slate-200' : 'bg-white border-slate-200 text-slate-800'}`}>
                <Database className="w-4 h-4 text-indigo-500" />
                <span>SQL Server</span>
              </div>
              <div className={`px-4 py-2.5 rounded-2xl text-xs font-bold border flex items-center gap-2 ${isDark ? 'bg-[#121824] border-slate-700/60 text-slate-200' : 'bg-white border-slate-200 text-slate-800'}`}>
                <Layers className="w-4 h-4 text-purple-500" />
                <span>Bootstrap 5</span>
              </div>
            </div>
          </section>
        ) : isQadia ? (
          /* Tech stack for Qadia */
          <section className="text-center space-y-4 pt-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              الترسانة التقنية - TECH STACK
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className={`px-4 py-2.5 rounded-2xl text-xs font-bold border flex items-center gap-2 ${isDark ? 'bg-[#121824] border-slate-700/60 text-slate-200' : 'bg-white border-slate-200 text-slate-800'}`}>
                <Code className="w-4 h-4 text-emerald-500" />
                <span>WPF / MVVM</span>
              </div>
              <div className={`px-4 py-2.5 rounded-2xl text-xs font-bold border flex items-center gap-2 ${isDark ? 'bg-[#121824] border-slate-700/60 text-slate-200' : 'bg-white border-slate-200 text-slate-800'}`}>
                <Layers className="w-4 h-4 text-sky-500" />
                <span>Clean Architecture</span>
              </div>
              <div className={`px-4 py-2.5 rounded-2xl text-xs font-bold border flex items-center gap-2 ${isDark ? 'bg-[#121824] border-slate-700/60 text-slate-200' : 'bg-white border-slate-200 text-slate-800'}`}>
                <Database className="w-4 h-4 text-indigo-500" />
                <span>EF Core / SQLite</span>
              </div>
              <div className={`px-4 py-2.5 rounded-2xl text-xs font-bold border flex items-center gap-2 ${isDark ? 'bg-[#121824] border-slate-700/60 text-slate-200' : 'bg-white border-slate-200 text-slate-800'}`}>
                <Cpu className="w-4 h-4 text-purple-500" />
                <span>DI / Repository</span>
              </div>
              <div className={`px-4 py-2.5 rounded-2xl text-xs font-bold border flex items-center gap-2 ${isDark ? 'bg-[#121824] border-slate-700/60 text-slate-200' : 'bg-white border-slate-200 text-slate-800'}`}>
                <Zap className="w-4 h-4 text-amber-500" />
                <span>Async / LINQ</span>
              </div>
            </div>
          </section>
        ) : (
          /* General Tech Stack */
          <section className="text-center space-y-4 pt-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              التقنيات المستخدمة
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {project.tags.map((tag, idx) => (
                <div
                  key={idx}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-bold border shadow-2xs flex items-center gap-2 ${isDark
                      ? 'bg-[#121824] border-slate-700/60 text-slate-200'
                      : 'bg-white border-slate-200 text-slate-800'
                    }`}
                >
                  <Cpu className="w-3.5 h-3.5 text-sky-500" />
                  <span>{tag}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── STATS BOTTOM FOOTER BAR FOR LETOPIA ── */}
        {isLetopia && (
          <section className="bg-[#0B1220] text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-slate-800/80">

              <div className="space-y-2 pt-4 md:pt-0">
                <div className="text-4xl sm:text-5xl font-black text-sky-400 tracking-tight">
                  AI Agents
                </div>
                <div className="text-base font-bold text-white">
                  وكلاء الذكاء الاصطناعي
                </div>
                <div className="text-xs text-slate-400">
                  لتوليد وتحديث مسارات التعلم التفاعلية تلقائياً
                </div>
              </div>

              <div className="space-y-2 pt-4 md:pt-0">
                <div className="text-4xl sm:text-5xl font-black text-sky-400 tracking-tight">
                  +10
                </div>
                <div className="text-base font-bold text-white">
                  مجتمعات برمجية نشطة
                </div>
                <div className="text-xs text-slate-400">
                  للتعاون وتطبيق المعرفة بشكل عملي ومستمر
                </div>
              </div>

              <div className="space-y-2 pt-4 md:pt-0 flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-2xl bg-sky-950/80 border border-sky-800 flex items-center justify-center text-sky-400 mb-2">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="text-base font-bold text-white">منصة ويب متكاملة</div>
                <div className="text-xs text-slate-400">تواصل آمن ومزامنة عالية الأداء</div>
              </div>

            </div>
          </section>
        )}

        {/* ── STATS BOTTOM FOOTER BAR (For non E-Commerce / non Letopia) ── */}
        {!isEcommerce && !isLetopia && (
          <section className="bg-[#0B1220] text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-slate-800/80">

              <div className="space-y-2 pt-4 md:pt-0">
                <div className="text-4xl sm:text-5xl font-black text-sky-400 tracking-tight">
                  {isQadia ? '70%' : isTanta ? '+100K' : isMatgar ? '+1,200' : '500+'}
                </div>
                <div className="text-base font-bold text-white">
                  {isQadia ? 'تسريع الإجراءات' : isTanta ? 'طالب وأكاديمي مستهدف' : isMatgar ? 'متجر إلكتروني نشط' : 'مستخدم نشط'}
                </div>
                <div className="text-xs text-slate-400">
                  {isQadia ? 'في متابعة الأرشيف وأجندات الموكلين' : isTanta ? 'في مختلف كليات جامعة طنطا' : isMatgar ? 'على منصة Matgar SaaS' : 'من السائقين والصيدليات يومياً'}
                </div>
              </div>

              <div className="space-y-2 pt-4 md:pt-0">
                <div className="text-4xl sm:text-5xl font-black text-sky-400 tracking-tight">
                  {isQadia ? '+10K' : isTanta ? '+15' : isMatgar ? '100%' : '+20'}
                </div>
                <div className="text-base font-bold text-white">
                  {isQadia ? 'وثيقة وقضية مؤرشفة' : isTanta ? 'خدمة رقمية موحدة' : isMatgar ? 'توفير التكلفة البرمجية' : 'شاشة واجهة'}
                </div>
                <div className="text-xs text-slate-400">
                  {isQadia ? 'موزعة بسلاسة على قاعدة بيانات SQLite' : isTanta ? 'تغطي السجلات والجداول والتسجيل' : isMatgar ? 'إطلاق المتاجر بدون كتابة كود' : 'تجربة مستخدم مخصصة بعناية'}
                </div>
              </div>

              <div className="space-y-2 pt-4 md:pt-0 flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-2xl bg-sky-950/80 border border-sky-800 flex items-center justify-center text-sky-400 mb-2">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="text-base font-bold text-white">{isQadia ? 'WPF & C# Desktop' : 'بنية سحابية'}</div>
                <div className="text-xs text-slate-400">أمان واعتمادية بنسبة 99.9%</div>
              </div>

            </div>
          </section>
        )}

      </div>
    </div>
  );
};

export default ProjectDetails;
