import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AKLUJ_INFO } from '../data/civicData';

interface FooterProps {
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  const { t, language } = useLanguage();
  const isMr = language === 'mr';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#172033] text-white relative border-t border-gray-800">
      {/* Top 3px Dual Color Accent Line */}
      <div className="h-[3px] flex w-full">
        <div className="w-1/2 bg-[#FF8500]"></div>
        <div className="w-1/2 bg-[#168447]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Candidate Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-[#FF8500] to-[#168447] p-[2px] shadow-md ring-2 ring-[#FF8500]/40 shrink-0">
                <div className="w-full h-full rounded-full bg-[#172033] flex items-center justify-center text-white font-bold text-base">
                  MK
                </div>
              </div>
              <div>
                <h3 className="font-headline font-bold text-lg text-white">
                  {t('nav.councillorName')}
                </h3>
                <p className="text-xs text-[#FF8500] font-semibold">
                  {t('nav.designation')}
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              {t('footer.desc')}
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#1F2C45] border border-[#2D3E5E] text-xs font-semibold text-orange-400">
              <span className="w-2 h-2 rounded-full bg-[#FF8500]"></span>
              <span>{t('nav.party')}</span>
            </div>
          </div>

          {/* Column 2: Ward Office Address */}
          <div>
            <h4 className="font-headline font-bold text-sm uppercase tracking-wider text-white mb-4 border-b border-gray-800 pb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#FF8500] text-[18px]">
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
                  href={`mailto:${AKLUJ_INFO.email}`}
                >
                  {AKLUJ_INFO.email}
                </a>
              </div>
              <div>
                <p className="text-gray-400">{t('contact.emergency')}</p>
                <a className="text-white font-mono font-bold hover:underline" href={`tel:${AKLUJ_INFO.phone}`}>
                  {AKLUJ_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Grievance & Timings */}
          <div>
            <h4 className="font-headline font-bold text-sm uppercase tracking-wider text-white mb-4 border-b border-gray-800 pb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#168447] text-[18px]">
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
                  className="text-[#168447] font-bold font-mono hover:underline"
                  href="https://wa.me/919822000008"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  +91 98220-00008
                </a>
              </div>
              <div>
                <p className="text-gray-400">
                  {isMr ? 'स्थानिक स्वराज्य संस्था:' : 'Civic Authority:'}
                </p>
                <p className="text-white font-mono font-bold">{AKLUJ_INFO.body}</p>
              </div>
            </div>
          </div>

          {/* Column 4: Quick Navigation & Admin */}
          <div>
            <h4 className="font-headline font-bold text-sm uppercase tracking-wider text-white mb-4 border-b border-gray-800 pb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#FF8500] text-[18px]">
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
                  <span className="material-symbols-outlined text-[16px] text-[#FF8500]">
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
                  <span className="material-symbols-outlined text-[16px] text-[#168447]">
                    construction
                  </span>
                  <span>{t('nav.works')}</span>
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  href="#flowchart"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#FF8500]">
                    account_tree
                  </span>
                  <span>{t('nav.flowchart')}</span>
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  href="#news"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#168447]">
                    campaign
                  </span>
                  <span>{t('nav.news')}</span>
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  href="#map"
                >
                  <span className="material-symbols-outlined text-[16px] text-blue-400">
                    map
                  </span>
                  <span>{t('nav.map')}</span>
                </a>
              </li>
              {onOpenAdmin && (
                <li className="pt-2 border-t border-gray-800">
                  <button
                    onClick={onOpenAdmin}
                    className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 cursor-pointer font-bold"
                  >
                    <span className="material-symbols-outlined text-[16px] text-[#FF8500]">
                      admin_panel_settings
                    </span>
                    <span>{t('admin.label')} (Developer CMS)</span>
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>{t('footer.copyright')}</p>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="text-gray-400 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>{t('footer.topBtn')}</span>
              <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
