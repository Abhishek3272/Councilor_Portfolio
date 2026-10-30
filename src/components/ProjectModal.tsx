import React from 'react';
import { WorkItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ProjectModalProps {
  work: WorkItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ work, onClose }) => {
  const { t, language } = useLanguage();
  const isMr = language === 'mr';

  if (!work) return null;

  const getStatusText = (status: string) => {
    if (status === 'Completed') return t('works.statusCompleted');
    if (status === 'In Progress') return t('works.statusInProgress');
    return t('works.statusProposed');
  };

  const title = isMr && work.titleMr ? work.titleMr : work.title;
  const description = isMr && work.descriptionMr ? work.descriptionMr : work.description;
  const location = isMr && work.locationMr ? work.locationMr : work.location;
  const beneficiaries = isMr && work.fullDetails?.beneficiariesMr ? work.fullDetails.beneficiariesMr : work.fullDetails?.beneficiaries;
  const scopeOfWork = isMr && work.fullDetails?.scopeOfWorkMr ? work.fullDetails.scopeOfWorkMr : work.fullDetails?.scopeOfWork;

  const isCompleted = work.status === 'Completed';
  const isInProgress = work.status === 'In Progress';

  return (
    <div
      id="work-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        id="work-modal-container"
        className="bg-white max-w-lg w-full rounded-2xl shadow-2xl relative border border-gray-200 max-h-[92vh] overflow-y-auto text-gray-900 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Project Photograph at top of modal */}
        <div className="relative aspect-16/9 w-full bg-gray-100 overflow-hidden">
          <img
            src={
              work.image ||
              'https://lh3.googleusercontent.com/aida-public/AB6AXuAWU8LBZ-p4hyeHgcjUjM3PH1a1o4zqFLo4YhqmZyy9Z9mPR0F2phhoQHpSACKkViAQt23g4hsxUyshPedpMwl4E5-qIpo0lCoUZsPDujf9P1-gIOmgfH86N8VmQdwzeYvXNKUzOfeZiVLlF_FQbgHFWCPbTDx7gdLmXDeD_yvdPDVLqCEnqZQCbzd_EOU3M3-wQcsSgCFqWzG759x4rViKkz4KgVww-S2kMfHnZJK3WOZCIf304yLPiA'
            }
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          {/* Close button on top-right */}
          <button
            id="close-work-modal-btn"
            className="absolute top-3 right-3 text-white hover:text-black w-8 h-8 rounded-full bg-black/40 hover:bg-white flex items-center justify-center transition-colors cursor-pointer z-10"
            onClick={onClose}
            type="button"
            aria-label={t('works.closeModal')}
          >
            ✕
          </button>

          {/* Floating Badges */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
            <span className="px-2.5 py-0.5 rounded-md bg-white/95 text-gray-900 font-bold text-[11px]">
              {work.category}
            </span>
            <span
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                isCompleted
                  ? 'bg-green-600 text-white'
                  : isInProgress
                  ? 'bg-[#FF8500] text-white'
                  : 'bg-blue-600 text-white'
              }`}
            >
              ● {getStatusText(work.status)}
            </span>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2 py-0.5 rounded-md bg-orange-50 border border-orange-200 text-[#FF8500] text-xs font-mono font-bold">
              {work.code}
            </span>
            <div className="flex items-center gap-1 text-gray-500 text-xs">
              <span className="material-symbols-outlined text-[15px] text-[#FF8500]">location_on</span>
              <span>{location}</span>
            </div>
          </div>

          <h3 className="font-headline font-bold text-lg sm:text-xl text-gray-900 mb-3 leading-snug">
            {title}
          </h3>

          <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 mb-4 space-y-3">
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{description}</p>

            {work.fullDetails && (
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-200 text-xs text-gray-600">
                {work.fullDetails.contractor && (
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase font-bold">
                      {t('works.contractor')}
                    </span>
                    <span className="font-semibold text-gray-800">{work.fullDetails.contractor}</span>
                  </div>
                )}
                {work.fullDetails.estimatedBudget && (
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase font-bold">
                      {t('works.budget')}
                    </span>
                    <span className="font-semibold text-[#FF8500]">
                      {work.fullDetails.estimatedBudget}
                    </span>
                  </div>
                )}
                {work.fullDetails.sanctionDate && (
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase font-bold">
                      {t('works.sanctionDate')}
                    </span>
                    <span className="font-medium text-gray-700">{work.fullDetails.sanctionDate}</span>
                  </div>
                )}
                {work.fullDetails.targetCompletion && (
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase font-bold">
                      {t('works.completion')}
                    </span>
                    <span className="font-medium text-[#168447]">
                      {work.fullDetails.targetCompletion}
                    </span>
                  </div>
                )}
              </div>
            )}

            {beneficiaries && (
              <div className="pt-2 border-t border-gray-200 text-xs">
                <span className="text-gray-400 block text-[10px] uppercase font-bold">
                  {t('works.beneficiaries')}
                </span>
                <span className="text-gray-700 font-medium">{beneficiaries}</span>
              </div>
            )}
          </div>

          {scopeOfWork && scopeOfWork.length > 0 && (
            <div className="mb-5">
              <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                {t('works.scopeTitle')}:
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-600 list-disc list-inside">
                {scopeOfWork.map((item, index) => (
                  <li key={index} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="pt-3 border-t border-gray-200 flex justify-end">
            <button
              className="px-5 py-2.5 rounded-xl bg-[#172033] hover:bg-black text-white text-xs font-bold transition-colors cursor-pointer active:scale-95"
              onClick={onClose}
              type="button"
            >
              {t('works.closeModal')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
