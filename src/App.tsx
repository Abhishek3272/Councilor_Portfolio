/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { AboutSection } from './components/AboutSection';
import { DevelopmentWorks } from './components/DevelopmentWorks';
import { InitiativesSection } from './components/InitiativesSection';
import { GrievancePortal } from './components/GrievancePortal';
import { ActionGallery } from './components/ActionGallery';
import { SecretariatContact } from './components/SecretariatContact';
import { Footer } from './components/Footer';

function MainAppContent() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const { t } = useLanguage();

  useEffect(() => {
    const sections = [
      'home',
      'about',
      'works',
      'initiatives',
      'grievance',
      'gallery',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-[#FF7A00] selection:text-white font-body">
      {/* Navigation Header with Dual Color Bar & Dual Language Switcher */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1 pt-[83px]">
        <Hero />
        <MetricsBar />
        <AboutSection />
        <DevelopmentWorks />
        <InitiativesSection />
        <GrievancePortal />
        <ActionGallery />
        <SecretariatContact />
      </main>

      {/* Official Civic Footer */}
      <Footer />

      {/* Floating Mobile Action Button for Quick Grievance Submission */}
      <div className="fixed bottom-5 right-5 z-40 sm:hidden">
        <a
          id="mobile-floating-grievance-btn"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#FF7A00] hover:bg-[#E66B00] text-white shadow-xl font-bold text-xs border border-white/20 transition-transform active:scale-95"
          href="#grievance"
        >
          <span className="material-symbols-outlined text-[18px]">report_problem</span>
          <span>{t('floating.btn')}</span>
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainAppContent />
    </LanguageProvider>
  );
}
