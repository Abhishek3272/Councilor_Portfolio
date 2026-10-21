import React, { useState } from 'react';
import { DEVELOPMENT_WORKS } from '../data/civicData';
import { WorkItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { useLanguage } from '../context/LanguageContext';

export const DevelopmentWorks: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const { t, language } = useLanguage();
  const isMr = language === 'mr';

  const categories = [
    { label: t('works.allTab'), value: 'all' },
    { label: t('works.waterTab'), value: 'Water Supply' },
    { label: t('works.roadsTab'), value: 'Roads & Drainage' },
    { label: t('works.lightsTab'), value: 'Street Lighting' },
    { label: t('works.gardensTab'), value: 'Gardens & Spaces' },
    { label: t('works.sanitationTab'), value: 'Sanitation' },
    { label: t('works.facilitiesTab'), value: 'Public Facilities' },
  ];

  const getStatusText = (status: string) => {
    if (status === 'Completed') return t('works.statusCompleted');
    if (status === 'In Progress') return t('works.statusInProgress');
    return t('works.statusProposed');
  };

  const getCategoryText = (cat: string) => {
    switch (cat) {
      case 'Water Supply':
        return t('works.waterTab');
      case 'Roads & Drainage':
        return t('works.roadsTab');
      case 'Street Lighting':
        return t('works.lightsTab');
      case 'Gardens & Spaces':
        return t('works.gardensTab');
      case 'Sanitation':
        return t('works.sanitationTab');
      case 'Public Facilities':
        return t('works.facilitiesTab');
      default:
        return cat;
    }
  };

  const filteredWorks =
    activeCategory === 'all'
      ? DEVELOPMENT_WORKS
      : DEVELOPMENT_WORKS.filter((item) => item.category === activeCategory);

  return (
    <section
      id="works"
      className="w-full py-16 lg:py-20 bg-[#F8F9FA] border-t border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Dual Accent Lines */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-1 bg-[#FF7A00] rounded-full"></div>
              <div className="w-4 h-1 bg-[#08783A] rounded-full"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E66B00]">
                {t('works.label')}
              </span>
            </div>
            <h2 className="font-headline font-bold text-2xl sm:text-3xl text-gray-900">
              {t('works.heading')}
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-2xl">
              {t('works.subtitle')}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span
              id="official-register-badge"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700 text-xs font-semibold shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#08783A]"></span>
              {isMr ? 'अधिकृत विकास नोंदवही' : 'Official Public Register'}
            </span>
          </div>
        </div>

        {/* Filter Buttons */}
        <div
          id="works-filters"
          className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                id={`filter-works-${cat.value.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#FF7A00] text-white shadow-sm'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 shadow-sm'
                }`}
                onClick={() => setActiveCategory(cat.value)}
                type="button"
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Works Grid */}
        <div id="works-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorks.map((work) => {
            const isCompleted = work.status === 'Completed';
            const isInProgress = work.status === 'In Progress';

            return (
              <div
                key={work.id}
                id={`work-card-${work.code.toLowerCase()}`}
                className={`p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between ${
                  isCompleted
                    ? 'hover:border-[#08783A]'
                    : isInProgress
                    ? 'hover:border-[#FF7A00]'
                    : 'hover:border-gray-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-xs font-semibold">
                      {getCategoryText(work.category)}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-bold text-xs ${
                        isCompleted
                          ? 'bg-[#EAF7EE] text-[#08783A]'
                          : isInProgress
                          ? 'bg-[#FFF3EA] text-[#E66B00]'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isCompleted
                            ? 'bg-[#08783A]'
                            : isInProgress
                            ? 'bg-[#FF7A00]'
                            : 'bg-gray-400'
                        }`}
                      ></span>{' '}
                      {getStatusText(work.status)}
                    </span>
                  </div>
                  <h3 className="font-headline font-bold text-base sm:text-lg text-gray-900 mb-2">
                    {work.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4">{work.description}</p>
                </div>

                <div>
                  <div className="py-2 px-3 rounded-lg bg-gray-50 border border-gray-200 mb-4 flex items-center justify-between text-xs text-gray-600">
                    <span className="flex items-center gap-1 truncate max-w-[200px]">
                      <span className="material-symbols-outlined text-[16px] text-gray-500">
                        location_on
                      </span>{' '}
                      {work.location}
                    </span>
                    <span className="font-mono text-gray-400 text-[11px] font-semibold">
                      {work.code}
                    </span>
                  </div>

                  <button
                    id={`open-work-details-${work.code.toLowerCase()}`}
                    className="w-full py-2.5 rounded-xl border border-gray-200 hover:border-[#FF7A00] text-gray-800 hover:text-[#FF7A00] text-xs font-semibold transition-all flex items-center justify-center gap-1 bg-white hover:bg-orange-50/50 cursor-pointer"
                    onClick={() => setSelectedWork(work)}
                    type="button"
                  >
                    <span>{t('works.viewDetails')}</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal work={selectedWork} onClose={() => setSelectedWork(null)} />
    </section>
  );
};
