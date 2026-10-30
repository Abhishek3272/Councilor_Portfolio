import React, { useState } from 'react';
import { CIVIC_METRICS } from '../data/civicData';
import { useLanguage } from '../context/LanguageContext';

export const MetricsBar: React.FC = () => {
  const [showLiveCounts, setShowLiveCounts] = useState(true);
  const { t, language } = useLanguage();
  const isMr = language === 'mr';

  return (
    <section id="metrics-bar" className="w-full py-10 bg-[#FFFCF7] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-6 bg-[#FF8500] rounded-full"></div>
            <h2 className="font-headline font-bold text-xl text-[#172033]">
              {t('metrics.heading')}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              id="toggle-audit-view-btn"
              onClick={() => setShowLiveCounts(!showLiveCounts)}
              className="text-xs font-semibold text-gray-600 bg-white border border-gray-200 px-3 py-1.5 rounded-full shadow-xs hover:border-[#FF8500] hover:text-[#FF8500] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px] text-[#168447]">
                {showLiveCounts ? 'visibility' : 'analytics'}
              </span>
              <span>{showLiveCounts ? t('metrics.liveView') : t('metrics.auditView')}</span>
            </button>
            <span
              id="audit-period-badge"
              className="text-xs font-semibold text-gray-600 bg-white border border-gray-200 px-3 py-1.5 rounded-full shadow-xs"
            >
              {isMr ? CIVIC_METRICS.auditPeriodMr : CIVIC_METRICS.auditPeriod}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Metric 1 */}
          <div
            id="metric-card-public-works"
            className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-[#FF8500] flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-wider font-bold text-gray-500">
                {t('works.allTab')}
              </span>
              <div className="w-9 h-9 rounded-lg bg-orange-50 text-[#FF8500] flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">construction</span>
              </div>
            </div>
            <div>
              <div className="font-headline font-extrabold text-3xl text-[#172033] mb-1">
                {showLiveCounts ? `${CIVIC_METRICS.worksCompleted}+` : '--'}
              </div>
              <p className="font-bold text-gray-800 text-sm">{t('metrics.completedWorks')}</p>
              <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-[#FF8500] text-[16px]">verified</span>
                {t('metrics.verified')}
              </p>
            </div>
          </div>

          {/* Metric 2 */}
          <div
            id="metric-card-ongoing-execution"
            className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-[#168447] flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-wider font-bold text-gray-500">
                {t('works.statusInProgress')}
              </span>
              <div className="w-9 h-9 rounded-lg bg-green-50 text-[#168447] flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">engineering</span>
              </div>
            </div>
            <div>
              <div className="font-headline font-extrabold text-3xl text-[#172033] mb-1">
                {showLiveCounts ? `${CIVIC_METRICS.projectsInProgress}` : '--'}
              </div>
              <p className="font-bold text-gray-800 text-sm">{t('metrics.inProgressWorks')}</p>
              <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-[#168447] text-[16px]">route</span>
                {t('metrics.onSchedule')}
              </p>
            </div>
          </div>

          {/* Metric 3 */}
          <div
            id="metric-card-grievance-resolution"
            className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-[#FF8500] flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-wider font-bold text-gray-500">
                {t('metrics.resolutionSpeed')}
              </span>
              <div className="w-9 h-9 rounded-lg bg-orange-50 text-[#FF8500] flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">task_alt</span>
              </div>
            </div>
            <div>
              <div className="font-headline font-extrabold text-3xl text-[#172033] mb-1">
                {showLiveCounts ? `${CIVIC_METRICS.grievancesAddressed}+` : '--'}
              </div>
              <p className="font-bold text-gray-800 text-sm">{t('metrics.grievancesResolved')}</p>
              <p className="text-xs text-[#168447] font-semibold mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">speed</span>
                {CIVIC_METRICS.slaSatisfactionRate} ({CIVIC_METRICS.averageResolutionDays})
              </p>
            </div>
          </div>

          {/* Metric 4 */}
          <div
            id="metric-card-community-outreach"
            className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-[#168447] flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-wider font-bold text-gray-500">
                {t('metrics.fundsAllocated')}
              </span>
              <div className="w-9 h-9 rounded-lg bg-green-50 text-[#168447] flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">payments</span>
              </div>
            </div>
            <div>
              <div className="font-headline font-extrabold text-3xl text-[#172033] mb-1">
                {showLiveCounts ? CIVIC_METRICS.fundsAllocated : '--'}
              </div>
              <p className="font-bold text-gray-800 text-sm">
                {isMr ? 'मंजूर प्रभाग विकास निधी' : 'Sanctioned Ward Fund'}
              </p>
              <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-[#168447] text-[16px]">groups</span>
                {CIVIC_METRICS.communityInitiatives}+ {t('metrics.citizensJoined')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
