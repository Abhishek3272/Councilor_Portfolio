import React from 'react';
import councillorPhoto from '../assets/Politician-img.jpj-1.jpeg';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const isMr = language === 'mr';

  const tickerItems = isMr
    ? [
        '४८+ विकासकामे पूर्ण',
        '₹४.८२ कोटी प्रभाग निधी विनियोग',
        '२४ तास जलसेवा नियंत्रण कक्ष',
        'पाक्षिक जनसुनावणी नागरिक सभा',
        '९४.६% तक्रार वेळेवर निवारण दर',
        '१००% स्मार्ट एलईडी पथदिवे',
        'स्वच्छ व हरित प्रभाग क्र. ८ अकलूज',
      ]
    : [
        '48+ Completed Civic Works',
        '₹4.82 Cr Ward Budget Deployed',
        '24x7 Jal Seva Pressure Monitoring',
        'Alternate Saturday Open Jan Sunwai',
        '94.6% Grievance Resolution SLA',
        '100% Smart LED Streetlight Coverage',
        'Clean & Green Ward No. 8, Akluj',
      ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-orange-50/30 via-[#FFFCF7] to-[#F4F5F7] pt-4 sm:pt-6 pb-8 sm:pb-12 border-b border-gray-200"
    >
      {/* Background Subtle SVG Geometric Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[radial-gradient(#172033_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Demo Disclaimer Pill */}
        <div className="mb-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-[10px] sm:text-[11px] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
          <span>{t('hero.demoNotice')}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Hero Left Column */}
          <div className="lg:col-span-7 flex flex-col space-y-4 sm:space-y-5">
            {/* Civic & Party Pill */}
            <div
              id="civic-party-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-xs w-fit"
            >
              <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-[#FF8500] to-[#168447]"></div>
              <span className="text-[11px] sm:text-xs uppercase tracking-wider font-bold text-gray-800">
                {t('hero.badge')}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#168447] animate-pulse"></span>
            </div>

            {/* Headline with Dual Color Accent */}
            <h1
              id="hero-main-title"
              className="font-headline font-extrabold text-2xl sm:text-4xl lg:text-[44px] text-[#172033] tracking-tight leading-[1.2]"
            >
              {t('hero.titlePre')}
              <span className="text-[#FF8500]">{t('hero.titleHighlight1')}</span>
              {t('hero.titleMid')}
              <span className="text-[#168447]">{t('hero.titleHighlight2')}</span>
              {t('hero.titlePost')}
            </h1>

            {/* Descriptive Subtext */}
            <p
              id="hero-description"
              className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl"
            >
              {t('hero.description')}
            </p>

            {/* CTA Group */}
            <div className="pt-1 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                id="hero-cta-grievance"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#FF8500] hover:bg-[#DE7200] text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all active:scale-95"
                href="#grievance"
              >
                <span className="material-symbols-outlined text-[18px]">report_problem</span>
                <span>{t('hero.ctaGrievance')}</span>
              </a>
              <a
                id="hero-cta-works"
                className="inline-flex items-center justify-center gap-2 px-4.5 py-3 rounded-xl bg-white hover:bg-gray-50 text-[#172033] font-semibold text-xs sm:text-sm border border-gray-300 shadow-xs transition-all hover:border-[#168447] hover:text-[#168447] active:scale-95"
                href="#works"
              >
                <span>{t('hero.ctaWorks')}</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
              <a
                id="hero-cta-flowchart"
                className="inline-flex items-center justify-center gap-1.5 px-4.5 py-3 rounded-xl bg-[#172033] hover:bg-black text-white font-semibold text-xs sm:text-sm shadow-xs transition-all active:scale-95"
                href="#flowchart"
              >
                <span className="material-symbols-outlined text-[16px] text-[#FF8500]">account_tree</span>
                <span>{isMr ? 'कार्यप्रणाली' : 'Workflow'}</span>
              </a>
            </div>

            {/* Key Quick Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-3 border-t border-gray-200">
              <div
                id="indicator-card-ward"
                className="p-3 rounded-xl bg-white border border-gray-200/90 shadow-xs flex items-center gap-2.5 hover:border-[#FF8500] transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center text-[#FF8500] shrink-0">
                  <span className="material-symbols-outlined text-[20px]">how_to_vote</span>
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">
                    {t('hero.wardLabel')}
                  </p>
                  <p className="font-headline font-bold text-[#172033] text-xs sm:text-sm truncate">
                    {t('hero.wardVal')}
                  </p>
                </div>
              </div>

              <div
                id="indicator-card-representation"
                className="p-3 rounded-xl bg-white border border-gray-200/90 shadow-xs flex items-center gap-2.5 hover:border-[#168447] transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center text-[#168447] shrink-0">
                  <span className="material-symbols-outlined text-[20px]">account_balance</span>
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">
                    {t('hero.repLabel')}
                  </p>
                  <p className="font-headline font-bold text-[#172033] text-xs sm:text-sm truncate">
                    {t('hero.repVal')}
                  </p>
                </div>
              </div>

              <div
                id="indicator-card-jan-sunwai"
                className="p-3 rounded-xl bg-white border border-gray-200/90 shadow-xs flex items-center gap-2.5 hover:border-blue-400 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-blue-700 shrink-0">
                  <span className="material-symbols-outlined text-[20px]">event_repeat</span>
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">
                    {t('hero.janSunwaiLabel')}
                  </p>
                  <p className="font-headline font-bold text-[#172033] text-xs sm:text-sm truncate">
                    {t('hero.janSunwaiVal')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Right Column: Councillor Portrait Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
              {/* Decorative Subtle Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#FF8500]/20 via-amber-100/25 to-[#168447]/20 rounded-3xl blur-xl opacity-75 pointer-events-none"></div>

              <div
                id="councillor-profile-card"
                className="relative bg-white p-2.5 sm:p-3 rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
              >
                <div className="relative rounded-xl overflow-hidden aspect-[4/4.2] sm:aspect-square bg-gray-100">
                  <img
                    alt={`${t('hero.councillorTitle')}, ${t('hero.councillorSub')}`}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    src={councillorPhoto}
                  />
                  {/* Gradient Scrim for Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#172033]/90 via-[#172033]/20 to-transparent"></div>

                  {/* Floating Official Badge Top Left */}
                  <div className="absolute top-2.5 left-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md shadow-md border border-gray-100 text-[11px] font-bold text-gray-800">
                    <span className="w-2 h-2 rounded-full bg-[#FF8500]"></span>
                    <span>BJP • {t('hero.wardVal')}</span>
                  </div>

                  {/* Councillor Name Overlay Bottom */}
                  <div className="absolute bottom-2.5 left-3 right-3 text-white">
                    <p className="text-[9px] uppercase tracking-widest text-orange-300 font-bold">
                      {t('hero.electedBadge')}
                    </p>
                    <h2 className="font-headline font-bold text-lg sm:text-2xl text-white">
                      {t('hero.councillorTitle')}
                    </h2>
                    <p className="text-[11px] sm:text-xs text-gray-200 mt-0.5">{t('hero.councillorSub')}</p>
                  </div>
                </div>

                {/* Office Hours Status Bar */}
                <div
                  id="councillor-office-hours-status"
                  className="mt-2.5 py-2 px-3 rounded-xl bg-[#F4F5F7] border border-gray-200 flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-1.5 font-medium text-gray-700">
                    <span className="material-symbols-outlined text-[16px] text-[#FF8500]">
                      schedule
                    </span>
                    <span className="truncate">{t('hero.officeHours')}</span>
                  </div>
                  <span className="flex h-2.5 w-2.5 relative shrink-0" title={t('hero.activeDesk')}>
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#168447] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#168447]"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. RUNNING ANIMATION TICKER BAR */}
        <div className="mt-8 pt-4 border-t border-gray-200/90 overflow-hidden relative">
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#172033] text-white text-[10px] font-bold uppercase tracking-wider shrink-0 shadow-xs z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF8500] animate-ping"></span>
              <span>LIVE</span>
            </span>
            <div className="overflow-hidden whitespace-nowrap flex-1 relative mask-linear">
              <div className="animate-marquee inline-flex items-center gap-8 text-xs font-semibold text-gray-700">
                {tickerItems.concat(tickerItems).map((text, i) => (
                  <span key={i} className="inline-flex items-center gap-2">
                    <span className="text-[#FF8500]">✦</span>
                    <span>{text}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
