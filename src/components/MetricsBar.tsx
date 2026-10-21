import React, { useState } from 'react';
import { CIVIC_METRICS } from '../data/civicData';
import { useLanguage } from '../context/LanguageContext';

export const MetricsBar: React.FC = () => {
  const [showLiveCounts, setShowLiveCounts] = useState(true);
  const { t } = useLanguage();

  return (
    <section id="metrics-bar" className="w-full py-10 bg-[#F8F9FA] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-6 bg-[#FF7A00] rounded-full"></div>
            <h2 className="font-headline font-bold text-xl text-gray-900">
              {t('metrics.heading')}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              id="toggle-audit-view-btn"
              onClick={() => setShowLiveCounts(!showLiveCounts)}
              className="text-xs font-semibold text-gray-600 bg-white border border-gray-200 px-3 py-1 rounded-full shadow-sm hover:border-[#FF7A00] hover:text-[#FF7A00] transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Toggle between verified registry counts and summary audit baseline"
            >
              <span className="material-symbols-outlined text-[15px] text-[#08783A]">
                {showLiveCounts ? 'visibility' : 'analytics'}
              </span>
              <span>{showLiveCounts ? t('metrics.liveView') : t('metrics.auditView')}</span>
            </button>
            <span
              id="audit-period-badge"
              className="text-xs font-semibold text-gray-600 bg-white border border-gray-200 px-3 py-1 rounded-full shadow-sm"
            >
              {t('metrics.auditPeriod')}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Metric 1 */}
          <div
            id="metric-card-public-works"
            className="p-6 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:shadow-md transition-all hover:border-[#FF7A00]/40 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-wider font-bold text-gray-500">
                {t('works.allTab')}
              </span>
              <div className="w-9 h-9 rounded-lg bg-orange-50 text-[#FF7A00] flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">construction</span>
              </div>
            </div>
            <div>
              <div className="font-headline font-extrabold text-3xl text-gray-900 mb-1">
                {showLiveCounts ? `${CIVIC_METRICS.worksCompleted}+` : '--'}
              </div>
              <p className="font-bold text-gray-800 text-sm">{t('metrics.completedWorks')}</p>
              <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-[#FF7A00] text-[16px]">verified</span>
                {t('metrics.verified')}
              </p>
            </div>
          </div>

          {/* Metric 2 */}
          <div
            id="metric-card-ongoing-execution"
            className="p-6 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:shadow-md transition-all hover:border-[#FF7A00]/40 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-wider font-bold text-gray-500">
                {t('works.statusInProgress')}
              </span>
              <div className="w-9 h-9 rounded-lg bg-orange-50 text-[#FF7A00] flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">engineering</span>
              </div>
            </div>
            <div>
              <div className="font-headline font-extrabold text-3xl text-gray-900 mb-1">
                {showLiveCounts ? `${CIVIC_METRICS.projectsInProgress}` : '--'}
              </div>
              <p className="font-bold text-gray-800 text-sm">{t('metrics.inProgressWorks')}</p>
              <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-[#FF7A00] text-[16px]">route</span>
                {t('metrics.onSchedule')}
              </p>
            </div>
          </div>

          {/* Metric 3 */}
          <div
            id="metric-card-public-redressal"
            className="p-6 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:shadow-md transition-all hover:border-[#08783A]/40 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-wider font-bold text-gray-500">
                {t('nav.grievance')}
              </span>
              <div className="w-9 h-9 rounded-lg bg-green-50 text-[#08783A] flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">mark_email_read</span>
              </div>
            </div>
            <div>
              <div className="font-headline font-extrabold text-3xl text-gray-900 mb-1">
                {showLiveCounts ? `${CIVIC_METRICS.grievancesAddressed.toLocaleString()}+` : '--'}
              </div>
              <p className="font-bold text-gray-800 text-sm">{t('metrics.grievancesResolved')}</p>
              <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-[#08783A] text-[16px]">how_to_reg</span>
                {t('metrics.slaRate')}
              </p>
            </div>
          </div>

          {/* Metric 4 */}
          <div
            id="metric-card-ward-programs"
            className="p-6 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:shadow-md transition-all hover:border-blue-300 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-wider font-bold text-gray-500">
                {t('nav.initiatives')}
              </span>
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">groups</span>
              </div>
            </div>
            <div>
              <div className="font-headline font-extrabold text-3xl text-gray-900 mb-1">
                {showLiveCounts ? `${CIVIC_METRICS.communityInitiatives}+` : '--'}
              </div>
              <p className="font-bold text-gray-800 text-sm">{t('metrics.communityDrives')}</p>
              <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-[#FF7A00] text-[16px]">
                  volunteer_activism
                </span>
                {t('metrics.citizensJoined')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
