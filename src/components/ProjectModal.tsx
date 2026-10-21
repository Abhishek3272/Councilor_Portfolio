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

  return (
    <div
      id="work-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        id="work-modal-container"
        className="bg-white max-w-lg w-full rounded-2xl p-6 shadow-2xl relative border border-gray-200 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="close-work-modal-btn"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-colors cursor-pointer"
          onClick={onClose}
          type="button"
          aria-label={t('works.modalClose')}
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className="px-2.5 py-0.5 rounded-md bg-gray-100 text-gray-700 text-xs font-semibold">
            {work.category}
          </span>
          <span
            className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
              work.status === 'Completed'
                ? 'bg-green-100 text-[#08783A]'
                : work.status === 'In Progress'
                ? 'bg-orange-100 text-[#E66B00]'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            ● {getStatusText(work.status)}
          </span>
          <span className="px-2 py-0.5 rounded-md bg-orange-50 border border-orange-200 text-[#E66B00] text-xs font-mono font-bold">
            {work.code}
          </span>
        </div>

        <h3 className="font-headline font-bold text-lg text-gray-900 mb-1">{work.title}</h3>

        <div className="flex items-center gap-1 text-gray-500 text-xs mb-4">
          <span className="material-symbols-outlined text-[16px] text-gray-400">location_on</span>
          <span>{work.location}</span>
        </div>

        <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 mb-4 space-y-3">
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{work.description}</p>

          {work.fullDetails && (
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-200 text-xs text-gray-600">
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
                  <span className="font-semibold text-[#FF7A00]">
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
                  <span className="font-medium text-gray-700">
                    {work.fullDetails.targetCompletion}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        {work.fullDetails?.scopeOfWork && work.fullDetails.scopeOfWork.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
              {t('works.scopeTitle')}
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-700">
              {work.fullDetails.scopeOfWork.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#08783A] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex justify-end gap-3 pt-3 border-t border-gray-100">
          <button
            className="px-4 py-2 rounded-xl bg-gray-100 text-gray-700 text-xs font-semibold hover:bg-gray-200 transition-colors cursor-pointer"
            onClick={onClose}
            type="button"
          >
            {t('works.modalClose')}
          </button>
          <a
            className="px-4 py-2 rounded-xl bg-[#FF7A00] hover:bg-[#E66B00] text-white text-xs font-semibold transition-colors flex items-center gap-1"
            href="#contact"
            onClick={onClose}
          >
            <span>{isMr ? 'कार्यालयाशी संपर्क साधा' : 'Inquire with Desk'}</span>
            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </div>
  );
};
