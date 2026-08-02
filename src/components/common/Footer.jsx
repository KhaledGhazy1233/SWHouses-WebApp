import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { GhazyLogo } from './GhazyLogo';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/80">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/">
              <GhazyLogo theme="dark" />
            </Link>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              {t('footerDesc')}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {t('quickLinks')}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-sky-400 transition-colors">{t('navAbout')}</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sky-400 transition-colors">{t('navServices')}</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-sky-400 transition-colors">{t('navPortfolio')}</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sky-400 transition-colors">{t('navContact')}</Link>
              </li>
            </ul>
          </div>

          {/* Contact / Social */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {t('contactSocial')}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:khaledghazy1233@gmail.com" className="hover:text-sky-400 transition-colors dir-ltr">
                  khaledghazy1233@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="tel:01093559965" className="hover:text-sky-400 transition-colors dir-ltr">
                  01093559965
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="tel:+201212390055" className="hover:text-sky-400 transition-colors dir-ltr">
                  +20 12 12390055
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="tel:+201554794875" className="hover:text-sky-400 transition-colors dir-ltr">
                  +20 15 54794875
                </a>
              </li>
              <li className="text-xs text-slate-500 pt-2">
                {lang === 'en' ? 'Riyadh, Kingdom of Saudi Arabia' : 'المملكة العربية السعودية، الرياض'}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} GhazyGroup. {t('allRightsReserved')}</p>

          <div className="flex items-center gap-6">
            <Link to="#" className="hover:text-slate-300 transition-colors">Insights</Link>
            <Link to="#" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
