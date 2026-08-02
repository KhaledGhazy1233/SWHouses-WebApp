import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Calendar as CalendarIcon,
  Clock,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { useBooking } from '../context/BookingContext';
import { useLanguage } from '../context/LanguageContext';

export const ContactBooking = () => {
  const { bookingData, updateBooking, submitBooking, isBooked, submittedBooking, resetBooking } = useBooking();
  const { lang, t } = useLanguage();

  const timeSlots = [
    '09:00 AM / صباحاً',
    '10:30 AM / صباحاً',
    '01:00 PM / ظهراً',
    '03:30 PM / عصراً',
    '05:00 PM / مساءً'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bookingData.fullName || !bookingData.email) {
      alert(lang === 'en' ? 'Please fill out your name and email.' : 'يرجى ملء الاسم والبريد الإلكتروني على الأقل.');
      return;
    }
    submitBooking();
  };

  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen bg-[#FAFAFB] text-slate-900 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* HEADER SECTION */}
        <section className="text-center max-w-3xl mx-auto space-y-4 pt-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-600 border border-sky-200"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('contactBadge')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight"
          >
            {t('contactTitle')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed"
          >
            {t('contactSubtitle')}
          </motion.p>
        </section>

        {/* MAIN TWO-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT SIDE: CONTACT DETAILS (Updated Email & Phone, White buttons REMOVED as requested!) */}
          <div className="lg:col-span-5 space-y-6">

            {/* Dark Contact Card */}
            <div className="bg-slate-950 text-white rounded-3xl p-8 shadow-xl border border-slate-800 space-y-6 text-start">
              <h3 className="text-2xl font-black tracking-tight text-white">
                {t('contactDetailsTitle')}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                {t('contactDetailsDesc')}
              </p>

              <div className="space-y-4 text-xs font-medium pt-2">

                {/* EMAIL ADDRESS */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-950 text-sky-400 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="text-start">
                      <div className="text-[10px] text-slate-400 font-semibold">{t('emailLabel')}</div>
                      <a href="mailto:khaledghazy1233@gmail.com" className="text-sm font-bold text-white hover:text-sky-400 transition-colors dir-ltr">
                        khaledghazy1233@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* PHONE NUMBER */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-950 text-sky-400 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="text-start">
                      <div className="text-[10px] text-slate-400 font-semibold">{t('phoneLabel')}</div>
                      <a href="tel:01093559965" className="text-sm font-bold text-white hover:text-sky-400 transition-colors dir-ltr">
                        01093559965
                      </a>
                    </div>
                  </div>
                </div>

                {/* PHONE NUMBER 2 */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-950 text-sky-400 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="text-start">
                      <div className="text-[10px] text-slate-400 font-semibold">{t('phoneLabel')}</div>
                      <a href="tel:+201212390055" className="text-sm font-bold text-white hover:text-sky-400 transition-colors dir-ltr">
                        +20 12 12390055
                      </a>
                    </div>
                  </div>
                </div>

                {/* PHONE NUMBER 3 */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-950 text-sky-400 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="text-start">
                      <div className="text-[10px] text-slate-400 font-semibold">{t('phoneLabel')}</div>
                      <a href="tel:+201554794875" className="text-sm font-bold text-white hover:text-sky-400 transition-colors dir-ltr">
                        +20 15 54794875
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Riyadh Location Card Preview */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900 h-48 group">
              <img
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80"
                alt="Location Preview"
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white">
                <MapPin className="w-4 h-4 text-sky-600" />
                <span className="text-xs font-extrabold text-slate-900">
                  {lang === 'en' ? 'Riyadh, Saudi Arabia' : 'الرياض، المملكة العربية السعودية'}
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: EXPLORATORY SESSION FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200/80 shadow-md">

              <AnimatePresence mode="wait">
                {isBooked ? (
                  /* BOOKING CONFIRMATION SCREEN */
                  <motion.div
                    key="confirmed"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-8 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-black text-slate-900">
                        {lang === 'en' ? 'Session Confirmed Successfully!' : 'تم تأكيد حجز الجلسة بنجاح!'}
                      </h3>
                      <p className="text-sm text-slate-600 max-w-md mx-auto">
                        {lang === 'en'
                          ? 'We look forward to meeting you. Details have been sent to your email.'
                          : 'يسعدنا تواصلك. قمنا بإرسال تفاصيل الموعد ورابط الاجتماع الافتراضي إلى بريدك الإلكتروني.'}
                      </p>
                    </div>

                    {submittedBooking && (
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-start max-w-md mx-auto text-xs space-y-2">
                        <div className="flex justify-between border-b border-slate-200 pb-2">
                          <span className="text-slate-500">{lang === 'en' ? 'Booking ID:' : 'رقم المرجعية:'}</span>
                          <span className="font-bold text-slate-900 dir-ltr">{submittedBooking.bookingId}</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-200 pb-2">
                          <span className="text-slate-500">{lang === 'en' ? 'Name:' : 'الاسم:'}</span>
                          <span className="font-bold text-slate-900">{submittedBooking.fullName}</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-200 pb-2">
                          <span className="text-slate-500">{lang === 'en' ? 'Date & Time:' : 'التاريخ والوقت:'}</span>
                          <span className="font-bold text-slate-900">{submittedBooking.selectedDate} | {submittedBooking.selectedTimeSlot}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">{lang === 'en' ? 'Topic:' : 'موضوع الاستكشاف:'}</span>
                          <span className="font-bold text-sky-600">{submittedBooking.projectTopic}</span>
                        </div>
                      </div>
                    )}

                    <Button
                      variant="secondary"
                      size="md"
                      onClick={resetBooking}
                    >
                      {lang === 'en' ? 'Book Another Session' : 'حجز جلسة جديدة'}
                    </Button>
                  </motion.div>
                ) : (
                  /* BOOKING FORM */
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 text-start"
                  >
                    <div>
                      <h3 className="text-2xl font-extrabold text-slate-900">{t('bookingTitle')}</h3>
                      <p className="text-xs text-slate-500 mt-1">{t('bookingDesc')}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">{t('fullNameLabel')}</label>
                        <input
                          type="text"
                          required
                          placeholder={lang === 'en' ? 'John Doe' : 'أحمد محمد'}
                          value={bookingData.fullName}
                          onChange={(e) => updateBooking({ fullName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">{t('emailInputLabel')}</label>
                        <input
                          type="email"
                          required
                          placeholder="khaledghazy1233@gmail.com"
                          value={bookingData.email}
                          onChange={(e) => updateBooking({ email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all dir-ltr text-start"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">{t('projectTopicLabel')}</label>
                      <select
                        value={bookingData.projectTopic}
                        onChange={(e) => updateBooking({ projectTopic: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all"
                      >
                        <option value="تطوير منتج رقمي">
                          {lang === 'en' ? 'New Digital Product (.NET/React/Flutter)' : 'تطوير منتج رقمي جديد (.NET/React/Flutter)'}
                        </option>
                        <option value="تحديث واجهة وتجربة UI/UX">
                          {lang === 'en' ? 'UI/UX Redesign & Strategy' : 'تحديث وتطوير واجهات (UI/UX)'}
                        </option>
                        <option value="أتمتة الأعمال واللوحات">
                          {lang === 'en' ? 'Business Dashboards & Automation' : 'أنظمة أعمال وأتمتة Dashboards'}
                        </option>
                      </select>
                    </div>

                    {/* Date & Time Slot Selector */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                          <CalendarIcon className="w-3.5 h-3.5 text-sky-600" />
                          {t('selectDateLabel')}
                        </label>
                        <input
                          type="date"
                          value={bookingData.selectedDate}
                          onChange={(e) => updateBooking({ selectedDate: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-sky-600" />
                          {t('selectTimeLabel')}
                        </label>
                        <select
                          value={bookingData.selectedTimeSlot}
                          onChange={(e) => updateBooking({ selectedTimeSlot: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                        >
                          {timeSlots.map((slot, idx) => (
                            <option key={idx} value={slot}>{slot}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">{t('ideaDetailsLabel')}</label>
                      <textarea
                        rows={4}
                        placeholder={lang === 'en' ? 'Tell us more about your vision and goals...' : 'أخبرنا بالمزيد عن طموحاتك واحتياجات المشروعات...'}
                        value={bookingData.ideaDetails}
                        onChange={(e) => updateBooking({ ideaDetails: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-950 text-white font-extrabold text-sm px-8 py-3.5 rounded-xl hover:bg-slate-800 transition-colors shadow-lg cursor-pointer"
                      >
                        <span>{t('submitButton')}</span>
                        <ArrowIcon className="w-4 h-4 text-sky-400" />
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

        {/* FREE STRATEGY SESSION BANNER */}
        <section className="bg-slate-100 rounded-3xl p-8 md:p-10 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-start">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold bg-sky-500 text-white uppercase tracking-wider">
              {t('freeOfferBadge')}
            </span>
            <h3 className="text-2xl font-black text-slate-900">{t('freeOfferTitle')}</h3>
            <p className="text-xs md:text-sm text-slate-600 max-w-xl leading-relaxed">
              {t('freeOfferDesc')}
            </p>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 300, behavior: 'smooth' })}
            className="shrink-0 bg-slate-950 text-white px-6 py-3.5 rounded-xl font-bold text-xs hover:bg-slate-800 transition-colors shadow-md cursor-pointer"
          >
            {t('bookNowButton')}
          </button>
        </section>

      </div>
    </div>
  );
};

export default ContactBooking;
