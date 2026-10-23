import React, { useState, useEffect } from 'react';
import { getStoredWorks } from '../data/civicData';
import { WorkItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { useLanguage } from '../context/LanguageContext';

export const DevelopmentWorks: React.FC = () => {
  const [works, setWorks] = useState<WorkItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeStatus, setActiveStatus] = useState<string>('all');
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const { t, language } = useLanguage();
  const isMr = language === 'mr';

  useEffect(() => {
    setWorks(getStoredWorks());
  }, []);

  const categories = [
    { label: t('works.allTab'), value: 'all' },
    { label: t('works.waterTab'), value: 'Water Supply' },
    { label: t('works.roadsTab'), value: 'Roads & Drainage' },
    { label: t('works.lightsTab'), value: 'Street Lighting' },
    { label: t('works.gardensTab'), value: 'Gardens & Spaces' },
    { label: t('works.sanitationTab'), value: 'Sanitation' },
    { label: t('works.facilitiesTab'), value: 'Public Facilities' },
  ];

  const statuses = [
    { label: t('works.statusAll'), value: 'all' },
    { label: t('works.statusCompleted'), value: 'Completed' },
    { label: t('works.statusInProgress'), value: 'In Progress' },
    { label: t('works.statusProposed'), value: 'Proposed' },
  ];

  const getStatusText = (status: string) => {
    if (status === 'Completed') return t('works.statusCompleted');
    if (status === 'In Progress') return t('works.statusInProgress');
    return t('works.statusProposed');
  };

  const filteredWorks = works.filter((item) => {
    const matchCat = activeCategory === 'all' || item.category === activeCategory;
    const matchStatus = activeStatus === 'all' || item.status === activeStatus;
    return matchCat && matchStatus;
  });

  return (
    <section
      id="works"
      className="w-full py-14 sm:py-20 bg-[#FFFCF7] border-t border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Dual Accent Lines */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-1 bg-[#FF8500] rounded-full"></div>
              <div className="w-4 h-1 bg-[#168447] rounded-full"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF8500]">
                {t('works.label')}
              </span>
            </div>
            <h2 className="font-headline font-bold text-2xl sm:text-3xl lg:text-4xl text-[#172033]">
              {t('works.heading')}
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-2xl leading-relaxed">
              {t('works.subtitle')}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span
              id="official-register-badge"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-700 text-xs font-semibold shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#168447]"></span>
              <span>{isMr ? 'अधिकृत विकास नोंदवही' : 'Official Public Register'}</span>
            </span>
          </div>
        </div>

        {/* Filter Controls: Category Buttons & Status Tabs */}
        <div className="space-y-3 mb-8">
          {/* Categories */}
          <div
            id="works-filters"
            className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer active:scale-95 ${
                    isActive
                      ? 'bg-[#172033] text-white shadow-sm font-bold'
                      : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveCategory(cat.value)}
                  type="button"
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Status Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar text-xs">
            <span className="text-gray-400 font-semibold uppercase tracking-wider shrink-0 mr-1">
              {isMr ? 'स्थिती:' : 'Status:'}
            </span>
            {statuses.map((st) => {
              const isActive = activeStatus === st.value;
              return (
                <button
                  key={st.value}
                  className={`px-3 py-1 rounded-lg font-medium transition-all shrink-0 cursor-pointer active:scale-95 ${
                    isActive
                      ? 'bg-[#FF8500] text-white font-bold shadow-xs'
                      : 'bg-white/80 text-gray-600 border border-gray-200 hover:bg-white'
                  }`}
                  onClick={() => setActiveStatus(st.value)}
                  type="button"
                >
                  {st.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorks.map((work) => {
            const isCompleted = work.status === 'Completed';
            const isInProgress = work.status === 'In Progress';

            return (
              <div
                key={work.id}
                id={`work-card-${work.id}`}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
                onClick={() => setSelectedWork(work)}
              >
                <div>
                  {/* Project Image Frame with Overlaid Badges */}
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-gray-100">
                    <img
                      src={
                        work.image ||
                        'https://lh3.googleusercontent.com/aida-public/AB6AXuAWU8LBZ-p4hyeHgcjUjM3PH1a1o4zqFLo4YhqmZyy9Z9mPR0F2phhoQHpSACKkViAQt23g4hsxUyshPedpMwl4E5-qIpo0lCoUZsPDujf9P1-gIOmgfH86N8VmQdwzeYvXNKUzOfeZiVLlF_FQbgHFWCPbTDx7gdLmXDeD_yvdPDVLqCEnqZQCbzd_EOU3M3-wQcsSgCFqWzG759x4rViKkz4KgVww-S2kMfHnZJK3WOZCIf304yLPiA'
                      }
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent"></div>

                    {/* Floating Category Badge Top Left */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs text-[11px] font-bold text-[#172033] shadow-xs">
                        {work.category}
                      </span>
                    </div>

                    {/* Floating Status Badge Top Right */}
                    <div className="absolute top-3 right-3">
                      <span
                        className={`text-[11px] px-2.5 py-1 rounded-md font-bold flex items-center gap-1 backdrop-blur-xs shadow-xs ${
                          isCompleted
                            ? 'bg-green-600 text-white'
                            : isInProgress
                            ? 'bg-[#FF8500] text-white'
                            : 'bg-blue-600 text-white'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isCompleted
                              ? 'bg-white'
                              : isInProgress
                              ? 'bg-white animate-ping'
                              : 'bg-white'
                          }`}
                        ></span>
                        {getStatusText(work.status)}
                      </span>
                    </div>

                    {/* Code & Location Pill on Bottom of Image */}
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px]">
                      <span className="font-mono bg-black/50 px-2 py-0.5 rounded backdrop-blur-xs font-bold text-orange-300">
                        {work.code}
                      </span>
                      {work.fullDetails?.estimatedBudget && (
                        <span className="font-mono font-bold bg-white/90 text-gray-900 px-2 py-0.5 rounded shadow-xs">
                          {work.fullDetails.estimatedBudget}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    <h3 className="font-headline font-bold text-base sm:text-lg text-gray-900 group-hover:text-[#FF8500] transition-colors leading-snug">
                      {isMr && work.titleMr ? work.titleMr : work.title}
                    </h3>

                    <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                      {isMr && work.descriptionMr ? work.descriptionMr : work.description}
                    </p>

                    {/* Location Metadata */}
                    <div className="mt-3.5 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs text-gray-500">
                      <span className="material-symbols-outlined text-[16px] text-[#FF8500] shrink-0">
                        location_on
                      </span>
                      <span className="truncate">
                        {isMr && work.locationMr ? work.locationMr : work.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-5 py-3 bg-gray-50/80 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] text-gray-400 font-mono">
                    {work.fullDetails?.targetCompletion || 'Municipal Register'}
                  </span>
                  <button
                    className="text-xs font-bold text-[#168447] group-hover:text-[#106335] flex items-center gap-1 cursor-pointer transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedWork(work);
                    }}
                    type="button"
                  >
                    <span>{t('works.viewDetails')}</span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedWork && (
        <ProjectModal
          onClose={() => setSelectedWork(null)}
          work={selectedWork}
        />
      )}
    </section>
  );
};
