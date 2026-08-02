import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Zap,
  Calendar,
  Cpu
} from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import ProjectCard from '../components/ui/ProjectCard';
import ServiceCard from '../components/ui/ServiceCard';
import TechStackSection from '../components/ui/TechStackSection';
import { projectsData, teamData, processSteps } from '../data/projectsData';
import { servicesData } from '../data/servicesData';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export const Home = () => {
  const navigate = useNavigate();
  const { lang, t } = useLanguage();
  const { isDark } = useTheme();

  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className={`min-h-screen pt-20 sm:pt-24 transition-colors duration-300 ${isDark ? 'bg-[#0F172A] text-slate-200' : 'bg-[#FAFAFB] text-slate-900'}`}>

      {/* ═══════════ HERO SECTION ═══════════ */}
      <section className="relative overflow-hidden pt-6 pb-14 sm:pt-8 sm:pb-20 md:pt-16 md:pb-28">
        <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[250px] sm:h-[350px] blur-[120px] rounded-full pointer-events-none -z-10 ${isDark ? 'bg-sky-900/30' : 'bg-sky-100/60'}`} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Copy Column */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-start">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold border shadow-xs ${isDark ? 'bg-sky-900/40 text-sky-300 border-sky-700/60' : 'bg-sky-50 text-sky-600 border-sky-200/80'}`}
              >
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-sky-500" />
                <span>{t('futureReady')}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] ${isDark ? 'text-white' : 'text-slate-950'}`}
              >
                {t('heroTitle1')} <br className="hidden sm:block" />
                <span className="cyan-gradient-text">{t('heroTitle2')}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
              >
                {t('heroSubtitle')}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-row items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto"
              >
                <Button
                  variant="primary"
                  size="lg"
                  icon={ArrowIcon}
                  onClick={() => navigate('/contact')}
                  className="shadow-lg shadow-slate-950/10 flex-1 sm:flex-none sm:w-auto"
                >
                  {t('startProject')}
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => navigate('/portfolio')}
                  className="flex-1 sm:flex-none sm:w-auto text-center"
                >
                  {t('exploreWork')}
                </Button>
              </motion.div>

              {/* Stats Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t max-w-lg ${isDark ? 'border-slate-700/60' : 'border-slate-200/80'}`}
              >
                <div>
                  <div className={`text-xl sm:text-2xl md:text-3xl font-black ${isDark ? 'text-white' : 'text-slate-950'}`}>+150</div>
                  <div className={`text-[10px] sm:text-xs font-medium ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{t('statProjects')}</div>
                </div>
                <div>
                  <div className={`text-xl sm:text-2xl md:text-3xl font-black ${isDark ? 'text-white' : 'text-slate-950'}`}>98%</div>
                  <div className={`text-[10px] sm:text-xs font-medium ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{t('statSatisfaction')}</div>
                </div>
                <div>
                  <div className={`text-xl sm:text-2xl md:text-3xl font-black ${isDark ? 'text-white' : 'text-slate-950'}`}>24/7</div>
                  <div className={`text-[10px] sm:text-xs font-medium ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{t('statSupport')}</div>
                </div>
              </motion.div>
            </div>

            {/* Hero Showcase Card */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none"
              >
                <div className={`relative rounded-[28px] sm:rounded-[36px] p-5 sm:p-6 md:p-8 border shadow-[0_20px_50px_rgba(0,0,0,0.08)] space-y-5 sm:space-y-6 ${isDark ? 'bg-[#121824] border-slate-700/60' : 'bg-white border-slate-200/70'}`}>

                  {/* Growth Index Badge */}
                  <div className="absolute top-3 right-3 sm:top-6 sm:right-6 z-20 bg-[#0B111D] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl shadow-xl border border-slate-800 flex items-center gap-2 sm:gap-3">
                    <div className="flex flex-col text-right">
                      <span className="text-[9px] sm:text-[10px] text-slate-400 font-medium">Growth Index</span>
                      <span className="text-xs sm:text-sm font-black text-emerald-400">42%+</span>
                    </div>
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-950/80 border border-emerald-800 flex items-center justify-center text-emerald-400">
                      <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>
                  </div>

                  {/* Inner Dark Device Frame */}
                  <div className="bg-[#0B1220] rounded-[20px] sm:rounded-[28px] p-4 sm:p-6 md:p-7 border border-slate-800 shadow-2xl space-y-4 sm:space-y-5 text-start font-sans">
                    <div className="flex items-center justify-between pt-1 sm:pt-2">
                      <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] sm:text-xs font-semibold text-slate-400">GhazyGroup Platform</span>
                    </div>

                    <div className="text-center py-1">
                      <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-sky-400 tracking-tight">$12,490.92</span>
                    </div>

                    <div className="h-16 sm:h-20 md:h-24 bg-[#111A2E] rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 flex items-end justify-around gap-1.5 sm:gap-2 border border-slate-800/80">
                      <div className="w-3 sm:w-4 bg-sky-300 h-10 sm:h-16 rounded-t-md" />
                      <div className="w-3 sm:w-4 bg-sky-400 h-8 sm:h-12 rounded-t-md" />
                      <div className="w-3 sm:w-4 bg-sky-500 h-14 sm:h-20 rounded-t-md" />
                      <div className="w-3 sm:w-4 bg-sky-600 h-9 sm:h-14 rounded-t-md" />
                      <div className="w-3 sm:w-4 bg-sky-700 h-7 sm:h-10 rounded-t-md" />
                    </div>

                    <div className="space-y-2 text-[10px] sm:text-xs font-sans">
                      <div className="flex justify-between items-center bg-[#111A2E] px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-slate-800/60">
                        <span className="text-emerald-400 font-bold">18.4%+</span>
                        <span className="text-slate-300 font-medium">NET &amp; React API.</span>
                      </div>
                      <div className="flex justify-between items-center bg-[#111A2E] px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-slate-800/60">
                        <span className="text-sky-400 font-bold">Completed</span>
                        <span className="text-slate-300 font-medium">Mobile Flutter App</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Bar */}
                  <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border flex items-center justify-between gap-2 ${isDark ? 'bg-[#1E293B] border-slate-700/60' : 'bg-[#F6F8FA] border-slate-200/80'}`}>
                    <div className={`text-[10px] sm:text-xs font-semibold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl ${isDark ? 'bg-slate-700 text-slate-300' : 'bg-slate-200/80 text-slate-700'}`}>
                      Tech 2024
                    </div>
                    <div className="text-end flex-1 min-w-0">
                      <div className={`text-[11px] sm:text-xs md:text-sm font-extrabold truncate ${isDark ? 'text-slate-100' : 'text-slate-950'}`}>High Speed Architecture</div>
                      <div className="text-[9px] sm:text-[11px] text-slate-500 font-medium truncate">NET, React, Flutter, Python.</div>
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-sky-50 text-sky-500 flex items-center justify-center border border-sky-100 shadow-2xs shrink-0">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 fill-sky-500 text-sky-500" />
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>

          </div>

          {/* Trusted Leaders */}
          <div className={`mt-10 sm:mt-16 pt-6 sm:pt-8 border-t text-center ${isDark ? 'border-slate-700/60' : 'border-slate-200/80'}`}>
            <p className="text-[10px] sm:text-xs font-bold uppercase text-slate-400 tracking-widest mb-4 sm:mb-6">
              {t('trustedLeaders')}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 md:gap-16 opacity-60 font-mono font-bold text-slate-500 text-sm sm:text-lg tracking-widest">
              <span>CORE</span>
              <span>HORIZON</span>
              <span>VECTOR</span>
              <span>NEXUS</span>
              <span>ALPHA</span>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════ CORE PILLARS + TECH STACK ═══════════ */}
      <section className={`py-12 sm:py-16 border-y transition-colors duration-300 ${isDark ? 'bg-[#121824] border-slate-700/60' : 'bg-white border-slate-200/70'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge={t('pillarsBadge')}
            title={t('pillarsTitle')}
            subtitle={t('pillarsSubtitle')}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
            {[
              { icon: Sparkles, titleKey: 'pillar1Title', descKey: 'pillar1Desc' },
              { icon: Cpu, titleKey: 'pillar2Title', descKey: 'pillar2Desc' },
              { icon: TrendingUp, titleKey: 'pillar3Title', descKey: 'pillar3Desc' },
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6 }}
                  className={`p-6 sm:p-8 rounded-2xl border shadow-xs space-y-3 sm:space-y-4 text-start transition-colors ${isDark ? 'bg-[#0F172A] border-slate-700/60' : 'bg-[#FAFAFB] border-slate-200/80'}`}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-950 text-sky-400 flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className={`text-lg sm:text-xl font-extrabold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>{t(pillar.titleKey)}</h3>
                  <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{t(pillar.descKey)}</p>
                </motion.div>
              );
            })}
          </div>

          <TechStackSection />
        </div>
      </section>

      {/* ═══════════ SERVICES SECTION ═══════════ */}
      <section className={`py-14 sm:py-20 transition-colors duration-300 ${isDark ? 'bg-[#0F172A]' : 'bg-[#FAFAFB]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge={t('servicesBadge')}
            title={t('servicesTitle')}
            subtitle={t('servicesSubtitle')}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {servicesData.slice(0, 4).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <div className="mt-10 sm:mt-12 text-center">
            <Button variant="outline" size="lg" onClick={() => navigate('/services')}>
              {t('viewAllServices')}
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════ PORTFOLIO PREVIEW ═══════════ */}
      <section className={`py-14 sm:py-20 border-t transition-colors duration-300 ${isDark ? 'bg-[#121824] border-slate-700/60' : 'bg-white border-slate-200/80'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge={t('portfolioBadge')}
            title={t('portfolioTitle')}
            subtitle={t('portfolioSubtitle')}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="mt-10 sm:mt-12 text-center">
            <Button variant="primary" size="lg" icon={ArrowIcon} onClick={() => navigate('/portfolio')}>
              {t('viewAllProjects')}
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════ TEAM PREVIEW ═══════════ */}
      <section className={`py-14 sm:py-20 transition-colors duration-300 ${isDark ? 'bg-[#0F172A]' : 'bg-[#FAFAFB]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge={t('teamBadge')}
            title={t('teamTitle')}
            subtitle={t('teamSubtitle')}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
            {teamData.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl p-5 sm:p-6 border shadow-xs hover:shadow-md transition-all text-start ${isDark ? 'bg-[#121824] border-slate-700/60 hover:border-sky-700/40' : 'bg-white border-slate-200/80'}`}
              >
                <div className="h-36 sm:h-44 rounded-xl overflow-hidden mb-4 sm:mb-5 bg-slate-100">
                  <img src={member.image} alt={member.title} className="w-full h-full object-cover" />
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-sky-500 mb-1">{member.role}</div>
                <h3 className={`text-base sm:text-lg font-bold mb-1.5 sm:mb-2 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>{member.title}</h3>
                <p className={`text-[10px] sm:text-xs leading-relaxed mb-3 sm:mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{member.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {member.tags.map((tag, idx) => (
                    <span key={idx} className={`text-[9px] sm:text-[10px] font-medium px-2 py-0.5 rounded ${isDark ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PROCESS ROADMAP ═══════════ */}
      <section className={`py-14 sm:py-20 border-t transition-colors duration-300 ${isDark ? 'bg-[#121824] border-slate-700/60' : 'bg-white border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge={t('processBadge')}
            title={t('processTitle')}
            subtitle={t('processSubtitle')}
          />

          <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl border text-start transition-colors ${isDark ? 'bg-[#0F172A] border-slate-700/60' : 'bg-[#FAFAFB] border-slate-200/80'}`}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-950 text-sky-400 flex items-center justify-center font-black text-sm sm:text-base shrink-0">
                  {idx + 1}
                </div>
                <div className="space-y-1 flex-1">
                  <div className="text-[10px] sm:text-xs font-bold text-sky-500">{step.step} - {step.title}</div>
                  <h4 className={`text-lg sm:text-xl font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>{step.arabicTitle}</h4>
                  <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ BOTTOM CTA ═══════════ */}
      <section className="py-12 sm:py-16 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black">
            {lang === 'en' ? 'Ready to Build Your Digital Future?' : 'هل أنت مستعد لبناء مستقبل رقمي مستدام؟'}
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">{t('freeOfferDesc')}</p>
          <div className="pt-2">
            <Button variant="cyan" size="lg" icon={Calendar} onClick={() => navigate('/contact')}>
              {t('bookNowButton')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
