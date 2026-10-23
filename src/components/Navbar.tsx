import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  activeSection: string;
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onOpenAdmin }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const isMr = language === 'mr';

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
    { name: t('nav.flowchart'), href: '#flowchart' },
    { name: t('nav.news'), href: '#news' },
    { name: t('nav.initiatives'), href: '#initiatives' },
    { name: t('nav.grievance'), href: '#grievance' },
    { name: t('nav.gallery'), href: '#gallery' },
    { name: t('nav.map'), href: '#map' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header
      id="main-fixed-header-container"
      className={`fixed top-0 left-0 right-0 z-50 bg-[#FFFCF7]/95 backdrop-blur-md transition-shadow duration-200 border-b border-gray-200/90 ${
        isScrolled ? 'shadow-md' : 'shadow-xs'
      }`}
    >
      {/* 1. Top 3px Dual Brand Accent Stripe */}
      <div id="top-brand-accent-line" className="h-[3px] flex w-full">
        <div className="w-1/2 bg-[#FF8500]"></div>
        <div className="w-1/2 bg-[#168447]"></div>
      </div>

      {/* 2. Urgent Notice Banner Strip - In flow, never overlapping */}
      <div className="bg-[#172033] text-white text-[10px] sm:text-[11px] py-1 px-3 sm:px-6 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-hidden min-w-0">
            <span className="bg-red-600 text-white font-bold px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] uppercase shrink-0 animate-pulse tracking-wide">
              {t('alert.tag')}
            </span>
            <span className="truncate text-gray-200 font-medium">
              {t('alert.text')}
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="#news"
              className="text-orange-400 hover:text-white font-bold underline transition-colors"
            >
              {t('alert.btn')}
            </a>
            <button
              onClick={onOpenAdmin}
              className="text-gray-400 hover:text-white flex items-center gap-1 text-[9px] sm:text-[10px] font-mono border-l border-gray-700 pl-2 sm:pl-3 cursor-pointer transition-colors active:scale-95"
              title="Admin & Developer Console"
            >
              <span className="material-symbols-outlined text-[12px] sm:text-[13px]">lock</span>
              <span className="hidden xs:inline">ADMIN</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Politician Brand Identity */}
        <a
          id="nav-brand-link"
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none min-w-0"
          href="#home"
        >
          <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-full bg-gradient-to-tr from-[#FF8500] to-[#168447] p-[2px] shadow-sm group-hover:scale-105 transition-transform shrink-0">
            <div className="w-full h-full rounded-full bg-[#172033] flex items-center justify-center text-white font-bold text-xs sm:text-sm">
              MK
            </div>
          </div>

          <div className="flex flex-col min-w-0 justify-center">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-headline font-bold text-[#172033] text-xs sm:text-base tracking-tight truncate leading-tight group-hover:text-[#FF8500] transition-colors">
                {t('nav.councillorName')}
              </span>
              <span className="hidden md:inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-orange-50 border border-orange-200 text-[#DE7200] text-[10px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF8500]"></span>
                {isMr ? 'भाजपा' : 'BJP'}
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] text-gray-500 font-medium truncate leading-snug">
              {t('nav.designation')}
            </span>
          </div>
        </a>

        {/* Center: Desktop Nav Links */}
        <nav
          id="desktop-nav-menu"
          className="hidden xl:flex items-center gap-4 2xl:gap-6 h-full text-xs 2xl:text-sm font-semibold text-gray-700"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`h-full flex items-center px-1 transition-colors border-b-2 ${
                  isActive
                    ? 'text-[#FF8500] border-[#FF8500] font-bold'
                    : 'border-transparent hover:text-[#FF8500]'
                }`}
                href={link.href}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right: Action Buttons (Uniform Sizing for Desktop & Mobile) */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Language Switcher Button */}
          <button
            id="language-switcher-btn"
            className="h-9 sm:h-10 px-2.5 sm:px-3.5 inline-flex items-center justify-center gap-1.5 rounded-xl border border-gray-300 hover:border-[#FF8500] bg-white text-gray-800 text-xs font-bold transition-all shadow-xs hover:bg-orange-50 cursor-pointer active:scale-95"
            onClick={toggleLanguage}
            type="button"
            title="Toggle Language"
          >
            <span className="material-symbols-outlined text-[16px] text-[#FF8500]">
              translate
            </span>
            <span className="font-semibold">{t('nav.langToggle')}</span>
          </button>

          {/* Quick Action: Register Complaint (Desktop / Tablet) */}
          <a
            id="nav-quick-grievance-btn"
            className="hidden sm:inline-flex h-9 sm:h-10 px-3.5 sm:px-4 items-center justify-center gap-1.5 rounded-xl bg-[#FF8500] hover:bg-[#DE7200] text-white text-xs font-bold shadow-xs hover:shadow-md transition-all active:scale-95"
            href="#grievance"
          >
            <span className="material-symbols-outlined text-[16px]">report_problem</span>
            <span>{t('nav.submitGrievance')}</span>
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            id="mobile-menu-toggle-btn"
            className="xl:hidden h-9 w-9 sm:h-10 sm:w-10 rounded-xl border border-gray-300 bg-white text-gray-800 hover:border-[#FF8500] hover:bg-orange-50 flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-xs"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label="Toggle Navigation"
          >
            <span className="material-symbols-outlined text-[20px] text-gray-800">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="xl:hidden bg-white border-t border-gray-200 px-4 pt-3 pb-6 space-y-1 shadow-xl animate-fade-in max-h-[80vh] overflow-y-auto"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              className="block px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-gray-700 hover:bg-orange-50 hover:text-[#FF8500] active:bg-orange-100 transition-colors"
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <a
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#FF8500] text-white text-xs font-bold active:scale-95 transition-transform"
              href="#grievance"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="material-symbols-outlined text-[18px]">report_problem</span>
              <span>{t('nav.submitGrievance')}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-[#172033] text-white text-xs font-bold cursor-pointer active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined text-[16px]">admin_panel_settings</span>
              <span>{t('admin.label')}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
