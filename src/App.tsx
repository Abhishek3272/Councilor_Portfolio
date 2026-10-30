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
import { FlowchartInteractions } from './components/FlowchartInteractions';
import { NewsSection } from './components/NewsSection';
import { InitiativesSection } from './components/InitiativesSection';
import { GrievancePortal } from './components/GrievancePortal';
import { ActionGallery } from './components/ActionGallery';
import { AklujInteractiveMap } from './components/AklujInteractiveMap';
import { SecretariatContact } from './components/SecretariatContact';
import { Footer } from './components/Footer';
import { AdminDashboardModal } from './components/AdminDashboardModal';
import { AICivicAssistant } from './components/AICivicAssistant';

function MainAppContent() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [adminModalOpen, setAdminModalOpen] = useState<boolean>(false);
  const [refreshTrigger, setRefreshTrigger] = useState<number>(0);
  const { t } = useLanguage();

  useEffect(() => {
    const sections = [
      'home',
      'about',
      'works',
      'flowchart',
      'news',
      'initiatives',
      'grievance',
      'gallery',
      'map',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
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

  const handleDataUpdated = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFCF7] text-[#172033] selection:bg-[#FF8500] selection:text-white font-body">
      {/* Navigation Header with Top Alert Marquee & Language Switcher */}
      <Navbar
        activeSection={activeSection}
        onOpenAdmin={() => setAdminModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 pt-[90px] sm:pt-[102px]">
        <Hero />
        <MetricsBar />
        <AboutSection />
        <DevelopmentWorks key={`works-${refreshTrigger}`} />
        <FlowchartInteractions />
        <NewsSection key={`news-${refreshTrigger}`} />
        <InitiativesSection />
        <GrievancePortal key={`grievance-${refreshTrigger}`} />
        <ActionGallery />
        <AklujInteractiveMap />
        <SecretariatContact />
      </main>

      {/* Official Civic Footer */}
      <Footer onOpenAdmin={() => setAdminModalOpen(true)} />

      {/* Developer / Admin Dashboard Modal */}
      <AdminDashboardModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
        onDataUpdated={handleDataUpdated}
      />

      {/* Floating 24/7 AI Civic Assistant */}
      <AICivicAssistant />

      {/* Floating Mobile Action Button for Quick Grievance Submission */}
      <div className="fixed bottom-5 left-5 z-40 sm:hidden">
        <a
          id="mobile-floating-grievance-btn"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#FF8500] hover:bg-[#DE7200] text-white shadow-xl font-bold text-xs border border-white/20 transition-transform active:scale-95"
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
