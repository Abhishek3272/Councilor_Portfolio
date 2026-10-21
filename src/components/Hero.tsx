import React from 'react';
import councillorPhoto from '../assets/Politician-img.jpj-1.jpeg';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-orange-50/40 via-white to-[#F8F9FA] py-12 lg:py-20 border-b border-gray-100"
    >
      {/* Subtle Large Watermark of Official BJP Logo */}
      <div
        id="hero-bjp-watermark"
        className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 opacity-[0.045] w-[540px] h-[540px] lg:w-[720px] lg:h-[720px]"
      >
        <img
          alt=""
          className="w-full h-full object-contain select-none"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkutHD4bYWDA3S9Be-zU_tD8SZRF2vewagyO1exJMR1KKEQBJF9_n2NntHhWN2p6S7vwUjRs_FhNoRzF1jp50RRmHQ-94rjbjELd_AENrFgBCum6qqrNyXj812_z3rXQrw5cgegm13jpXQViGpkqyCGLG8DyTBcs1d_Cl5fgKx8I2lrSv9-Jy-eOnS5TV3dccgsW6jGLx_2q6tGhg6v68xONEyCL2QB6x5Uwqe4JVxTsmQ3vaRmqlD1eidJ0W-MzSpTY"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Hero Left Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Civic & Party Pill */}
            <div
              id="civic-party-badge"
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm w-fit"
            >
              <img
                alt="BJP"
                className="w-5 h-5 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuPBVQpCyaN2Ss3JPNqYw-sI1Yck1EBVbw-eyuTOvXPfJpfxXXQqXqLyTc9ixPw-ckPV1PSwo7sl_L5LN6kJDC4EVUIx5DlfD49XPlznP0vSCz1TBgvoS8N18u1KydIC_4znoZzOR-LpOlZQNhh0z9BULJbG3mBAJRXxBEUAjBDSonz3MPpAqp4xUNZjxroBs3jV8abBS938pGuZ-pplVYtj8iv89JDLR-G_MBLJawKqbs4mfj2SR7GJ6E5mUGoxN1o4Q"
              />
              <span className="text-xs uppercase tracking-wider font-bold text-gray-700">
                {t('hero.badge')}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#08783A]"></span>
            </div>

            {/* Headline with Dual Color Accent */}
            <h1
              id="hero-main-title"
              className="font-headline font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight leading-[1.18]"
            >
              {t('hero.titlePre')}
              <span className="text-[#FF7A00]">{t('hero.titleHighlight1')}</span>
              {t('hero.titleMid')}
              <span className="text-[#08783A]">{t('hero.titleHighlight2')}</span>
              {t('hero.titlePost')}
            </h1>

            {/* Descriptive Subtext */}
            <p
              id="hero-description"
              className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl"
            >
              {t('hero.description')}
            </p>

            {/* CTA Group */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                id="hero-cta-grievance"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FF7A00] hover:bg-[#E66B00] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
                href="#grievance"
              >
                <span className="material-symbols-outlined text-[20px]">report_problem</span>
                <span>{t('hero.ctaGrievance')}</span>
              </a>
              <a
                id="hero-cta-works"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-gray-800 font-semibold text-sm border border-gray-300 shadow-sm transition-all hover:border-[#08783A] hover:text-[#08783A]"
                href="#works"
              >
                <span>{t('hero.ctaWorks')}</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>

            {/* Key Quick Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-gray-200/80">
              <div
                id="indicator-card-ward"
                className="p-3.5 rounded-xl bg-white border border-gray-200/70 shadow-sm flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-[#FF7A00] shrink-0">
                  <span className="material-symbols-outlined text-[24px]">how_to_vote</span>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                    {t('hero.wardLabel')}
                  </p>
                  <p className="font-headline font-bold text-gray-900 text-sm sm:text-base">
                    {t('hero.wardVal')}
                  </p>
                </div>
              </div>

              <div
                id="indicator-card-representation"
                className="p-3.5 rounded-xl bg-white border border-gray-200/70 shadow-sm flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-[#08783A] shrink-0">
                  <span className="material-symbols-outlined text-[24px]">account_balance</span>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                    {t('hero.repLabel')}
                  </p>
                  <p className="font-headline font-bold text-gray-900 text-sm sm:text-base">
                    {t('hero.repVal')}
                  </p>
                </div>
              </div>

              <div
                id="indicator-card-jan-sunwai"
                className="p-3.5 rounded-xl bg-white border border-gray-200/70 shadow-sm flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-700 shrink-0">
                  <span className="material-symbols-outlined text-[24px]">event_repeat</span>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                    {t('hero.janSunwaiLabel')}
                  </p>
                  <p className="font-headline font-bold text-gray-900 text-sm sm:text-base">
                    {t('hero.janSunwaiVal')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Right Column: Councillor Portrait Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative Backing */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#FF7A00]/20 via-orange-100/30 to-[#08783A]/20 rounded-3xl blur-xl opacity-75"></div>
              <div
                id="councillor-profile-card"
                className="relative bg-white p-3 rounded-2xl shadow-xl border border-gray-200/80 overflow-hidden"
              >
                <div className="relative rounded-xl overflow-hidden aspect-square bg-gray-100">
                  <img
                    alt={`${t('hero.councillorTitle')}, ${t('hero.councillorSub')}`}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    src={councillorPhoto || '/assets/Politician-img.jpj-1.jpeg'}
                  />
                  {/* Gradient Scrim for Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-950/20 to-transparent"></div>

                  {/* Floating Official Badge Top Left */}
                  <div className="absolute top-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-md border border-gray-100">
                    <img
                      alt="BJP Logo"
                      className="w-5 h-5 rounded-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_rc_bG-MJM38dBpc2kg1veBwrK5tS9ya84UyorXDvoQE-1ZZM5pwcBxAl7BJPh1Hs4N4orkpyBO1ptW63KfS3JzejihRjeafKhWVsTNF_hw7yWIIdZuru4SfSJ0cq3EhwNqwa9piWH1-tdUnh3dbLx93WgmZY0TagBo8SifturYTZ-aldAaPxJw5gNSuzHS3UnyWoJw_hIgCjIxflho7C-Zp0ZMK9FwR4r2ahQs6kMO0ilSaaLUzzpB5fI2Klj3eTerQ"
                    />
                    <span className="text-xs font-bold text-gray-800">
                      BJP • {t('hero.wardVal')}
                    </span>
                  </div>

                  {/* Councillor Name Overlay Bottom */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-[11px] uppercase tracking-widest text-orange-300 font-bold">
                      {t('hero.electedBadge')}
                    </p>
                    <h2 className="font-headline font-bold text-xl sm:text-2xl text-white">
                      {t('hero.councillorTitle')}
                    </h2>
                    <p className="text-xs text-gray-200 mt-0.5">{t('hero.councillorSub')}</p>
                  </div>
                </div>

                {/* Office Hours Bar */}
                <div
                  id="councillor-office-hours-status"
                  className="mt-3 py-2.5 px-4 rounded-xl bg-gray-50 border border-gray-200/70 flex items-center justify-between"
                >
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700">
                    <span className="material-symbols-outlined text-[18px] text-[#FF7A00]">
                      schedule
                    </span>
                    <span>{t('hero.officeHours')}</span>
                  </div>
                  <span className="flex h-2.5 w-2.5 relative" title={t('hero.activeDesk')}>
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#08783A] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#08783A]"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
