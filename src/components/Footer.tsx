import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const isMr = language === 'mr';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#0F172A] text-white relative border-t border-gray-800">
      {/* Top 3px Dual Color Accent Line */}
      <div className="h-[3px] flex w-full">
        <div className="w-1/2 bg-[#FF7A00]"></div>
        <div className="w-1/2 bg-[#08783A]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Candidate Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                alt="BJP Logo"
                className="h-12 w-12 rounded-full object-cover shadow-md ring-2 ring-[#FF7A00]/40 shrink-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiDNb4fucbobgFDM7hC3AOv8P8JqDp5_hFYwmGY356KACOIoRfIjWNsfqCBPxATogCrFljaIxggmYTXktIAFuDWIEuptrSmH5lAYzkr_mYWfbZPgc1Rq-CaiioMLh5fkIMVlKRqRhOs8BPPB1MBvSMKNnClH9NyG1EYR5tXnEfO3R3GXkQskHXMqm8HA93Q0shOiUeKkSnOAm4khCX654BNE1pkC1265TeOMdSArgfjyTZu4mdgYYAzSW17t2kJc3_hGE"
              />
              <div>
                <h3 className="font-headline font-bold text-lg text-white">
                  {t('nav.councillorName')}
                </h3>
                <p className="text-xs text-[#FF7A00] font-semibold">
                  {t('nav.designation')}
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              {t('footer.desc')}
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#1E293B] border border-[#334155] text-xs font-semibold text-orange-400">
              <span className="w-2 h-2 rounded-full bg-[#FF7A00]"></span>
              <span>{t('nav.party')}</span>
            </div>
          </div>

          {/* Column 2: Ward Office Address */}
          <div>
            <h4 className="font-headline font-bold text-sm uppercase tracking-wider text-white mb-4 border-b border-gray-800 pb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#FF7A00] text-[18px]">
                apartment
              </span>
              <span>{t('footer.officeTitle')}</span>
            </h4>
            <div className="space-y-2.5 text-xs text-gray-300">
              <p className="font-medium text-white">
                {t('contact.officeAddr1')}
              </p>
              <p>{t('contact.officeAddr2')}</p>
              <p>{t('contact.officeAddr3')}</p>
              <div className="pt-2">
                <p className="text-gray-400">{t('contact.email')}</p>
                <a
                  className="text-orange-400 hover:underline"
                  href="mailto:ward8.office@municipalgov.in"
                >
                  ward8.office@municipalgov.in
                </a>
              </div>
              <div>
                <p className="text-gray-400">{t('contact.emergency')}</p>
                <a className="text-white font-mono font-bold hover:underline" href="tel:02028450008">
                  +91 020-2845-0008
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Grievance & Timings */}
          <div>
            <h4 className="font-headline font-bold text-sm uppercase tracking-wider text-white mb-4 border-b border-gray-800 pb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#08783A] text-[18px]">
                schedule
              </span>
              <span>{t('footer.timingsTitle')}</span>
            </h4>
            <div className="space-y-2.5 text-xs text-gray-300">
              <div>
                <p className="text-gray-400">
                  {isMr ? 'कार्यालयीन नागरिक भेट:' : 'In-Office Citizen Meetings:'}
                </p>
                <p className="text-white font-semibold">
                  {isMr ? 'सोम – शनि • स. १०:०० ते दु. १:००' : 'Mon – Sat • 10:00 AM – 1:00 PM'}
                </p>
              </div>
              <div>
                <p className="text-gray-400">
                  {isMr ? 'प्रत्यक्ष प्रभाग पाहणी:' : 'Field Site Inspections:'}
                </p>
                <p className="text-white font-semibold">
                  {isMr ? 'दु. ३:०० ते सायं. ६:००' : '3:00 PM – 6:00 PM Daily'}
                </p>
              </div>
              <div>
                <p className="text-gray-400">
                  {isMr ? 'व्हॉट्सॲप तक्रार कक्ष:' : 'WhatsApp Desk:'}
                </p>
                <a
                  className="text-[#08783A] font-bold font-mono hover:underline"
                  href="https://wa.me/919822000008"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  +91 98220-00008
                </a>
              </div>
              <div>
                <p className="text-gray-400">
                  {isMr ? 'महापालिका टोल-फ्री हेल्पलाइन:' : 'Toll-Free Municipal Helpline:'}
                </p>
                <p className="text-white font-mono font-bold">1800-209-0808</p>
              </div>
            </div>
          </div>

          {/* Column 4: Citizen Channels */}
          <div>
            <h4 className="font-headline font-bold text-sm uppercase tracking-wider text-white mb-4 border-b border-gray-800 pb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#FF7A00] text-[18px]">
                hub
              </span>
              <span>{t('footer.channelsTitle')}</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  href="#grievance"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#FF7A00]">
                    report_problem
                  </span>
                  <span>{t('nav.grievance')}</span>
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  href="#works"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#08783A]">
                    construction
                  </span>
                  <span>{t('works.heading')}</span>
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  href="#initiatives"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#08783A]">
                    groups
                  </span>
                  <span>{t('initiatives.heading')}</span>
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  href="#gallery"
                >
                  <span className="material-symbols-outlined text-[16px] text-gray-400">
                    photo_camera
                  </span>
                  <span>{t('gallery.heading')}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p className="text-center sm:text-left">
            {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">
              {t('footer.bjpLabel')}
            </span>
            <button
              id="back-to-top-btn"
              className="p-2 rounded-lg bg-[#1E293B] hover:bg-[#334155] text-gray-300 hover:text-white transition-colors flex items-center gap-1 text-xs cursor-pointer"
              onClick={scrollToTop}
              type="button"
              title={t('footer.topBtn')}
            >
              <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
              <span className="hidden sm:inline">{t('footer.topBtn')}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
