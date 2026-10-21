import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.works'), href: '#works' },
    { name: t('nav.initiatives'), href: '#initiatives' },
    { name: t('nav.grievance'), href: '#grievance' },
    { name: t('nav.gallery'), href: '#gallery' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <>
      {/* TOP 3px DUAL BRAND ACCENT LINE */}
      <div id="top-brand-accent-line" className="fixed top-0 left-0 right-0 z-[60] h-[3px] flex">
        <div className="w-1/2 bg-[#FF7A00]"></div>
        <div className="w-1/2 bg-[#08783A]"></div>
      </div>

      {/* STICKY NAVBAR */}
      <header
        id="main-navigation-header"
        className={`fixed top-[3px] left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/80 transition-shadow duration-200 ${
          isScrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Left: Logo & Candidate Identity */}
          <a
            id="nav-brand-link"
            className="flex items-center gap-3 group focus:outline-none"
            href="#home"
          >
            <img
              id="bjp-nav-logo-image"
              alt="BJP Logo"
              className="h-11 w-11 sm:h-12 sm:w-12 rounded-full object-cover shadow-sm ring-2 ring-[#FF7A00]/20 group-hover:scale-105 transition-transform shrink-0"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiDNb4fucbobgFDM7hC3AOv8P8JqDp5_hFYwmGY356KACOIoRfIjWNsfqCBPxATogCrFljaIxggmYTXktIAFuDWIEuptrSmH5lAYzkr_mYWfbZPgc1Rq-CaiioMLh5fkIMVlKRqRhOs8BPPB1MBvSMKNnClH9NyG1EYR5tXnEfO3R3GXkQskHXMqm8HA93Q0shOiUeKkSnOAm4khCX654BNE1pkC1265TeOMdSArgfjyTZu4mdgYYAzSW17t2kJc3_hGE"
            />
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-headline font-bold text-gray-900 text-base sm:text-lg tracking-tight truncate leading-tight">
                  {t('nav.councillorName')}
                </span>
                <span className="hidden md:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-orange-50 border border-orange-200 text-[#E66B00] text-[11px] font-semibold tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]"></span>
                  {t('nav.party')}
                </span>
              </div>
              <span className="text-xs text-[#4B5563] font-medium truncate">
                {t('nav.designation')}
              </span>
            </div>
          </a>

          {/* Center: Nav Links */}
          <nav
            id="desktop-nav-menu"
            className="hidden xl:flex items-center gap-6 2xl:gap-8 h-full text-sm font-semibold text-gray-700"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`h-full flex items-center px-1 transition-colors border-b-2 ${
                    isActive
                      ? 'text-[#FF7A00] border-[#FF7A00]'
                      : 'border-transparent hover:text-[#FF7A00]'
                  }`}
                  href={link.href}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Dual Language Switcher, Grievance CTA & Mobile Hamburger */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* DUAL LANGUAGE BUTTON (Replaces WhatsApp Desk button) */}
            <button
              id="dual-language-toggle-btn"
              type="button"
              onClick={toggleLanguage}
              aria-label="Switch between Marathi and English"
              title={language === 'mr' ? 'Switch to English' : 'मराठीमध्ये बदला'}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg bg-orange-50/90 hover:bg-orange-100/90 text-gray-800 border border-orange-200/90 hover:border-[#FF7A00]/50 text-xs sm:text-sm font-bold shadow-2xs hover:shadow-xs transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-base sm:text-lg text-[#08783A]">
                translate
              </span>
              <div className="flex items-center text-xs font-bold tracking-tight">
                <span
                  className={
                    language === 'mr'
                      ? 'text-[#E66B00] font-black underline decoration-2 underline-offset-2'
                      : 'text-gray-500 font-medium'
                  }
                >
                  मराठी
                </span>
                <span className="mx-1 text-gray-300">/</span>
                <span
                  className={
                    language === 'en'
                      ? 'text-[#E66B00] font-black underline decoration-2 underline-offset-2'
                      : 'text-gray-500 font-medium'
                  }
                >
                  ENG
                </span>
              </div>
            </button>

            {/* Grievance Submission CTA */}
            <a
              id="submit-grievance-nav-btn"
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-lg bg-[#FF7A00] hover:bg-[#E66B00] text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
              href="#grievance"
            >
              <span className="material-symbols-outlined text-[18px]">report_problem</span>
              <span className="hidden sm:inline">{t('nav.submitGrievance')}</span>
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              aria-label="Toggle navigation"
              className="xl:hidden p-2 rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
            >
              <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-drawer-menu"
            className="xl:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 shadow-lg"
          >
            {/* Mobile Language Switcher Segmented Control */}
            <div className="flex items-center justify-between p-2 rounded-lg bg-orange-50/70 border border-orange-200/70">
              <span className="text-xs font-semibold text-gray-700 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-[#08783A]">translate</span>
                <span>भाषा / Language</span>
              </span>
              <div className="flex items-center rounded-md bg-white border border-gray-200 p-0.5 shadow-2xs">
                <button
                  type="button"
                  onClick={() => setLanguage('mr')}
                  className={`px-3 py-1 rounded text-xs font-bold transition-colors cursor-pointer ${
                    language === 'mr'
                      ? 'bg-[#FF7A00] text-white shadow-2xs'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  मराठी
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded text-xs font-bold transition-colors cursor-pointer ${
                    language === 'en'
                      ? 'bg-[#FF7A00] text-white shadow-2xs'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 rounded-lg bg-orange-50 text-[#E66B00] text-xs font-semibold">
              <img
                alt="BJP Logo"
                className="w-5 h-5 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeQ7tq9PU4ZEVkuHpGPNVHi-Oi_I7Z26ccalVsp4RK2_N7OeeALzct0MBewNM10oHUiBG_jmh8hgzqzQJhG7NDwjAlJXwzx7KSGLi0OK3SxUlxAFRyooJ0fV9q465UjlYmCqT7ewHArKe5EDFxa-upovBELWsPQiTcum5Y7-m3Vu8-SAUDae4HddHJzSqFp6oWJBsAoeT8XAJo9ucVL8ijdfZ9dxRycD_Z14LeAGt0qqFhRHNdyCkrLSFIe_nMZHwJoEI"
              />
              <span>{t('nav.party')} • {t('hero.wardVal')}</span>
            </div>

            <nav className="flex flex-col space-y-1 font-semibold text-gray-700 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  className="px-3 py-2 rounded-md hover:bg-orange-50 hover:text-[#FF7A00]"
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-2">
              <a
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#FF7A00] text-white text-sm font-semibold"
                href="#grievance"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="material-symbols-outlined text-[18px]">report_problem</span>
                <span>{t('nav.submitGrievance')}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
