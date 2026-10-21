import React from 'react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onNext,
  onPrev,
}) => {
  if (!item) return null;

  return (
    <div
      id="lightbox-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        id="close-lightbox-btn"
        className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors z-20"
        onClick={onClose}
        type="button"
        aria-label="Close image lightbox"
      >
        <span className="material-symbols-outlined text-[24px]">close</span>
      </button>

      {/* Previous / Next buttons */}
      {onPrev && (
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full hidden sm:flex items-center justify-center transition-colors z-20"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          type="button"
          aria-label="Previous image"
        >
          <span className="material-symbols-outlined text-[24px]">chevron_left</span>
        </button>
      )}

      {onNext && (
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full hidden sm:flex items-center justify-center transition-colors z-20"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          type="button"
          aria-label="Next image"
        >
          <span className="material-symbols-outlined text-[24px]">chevron_right</span>
        </button>
      )}

      <div
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col rounded-2xl overflow-hidden bg-[#0F172A] border border-gray-800 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
          <img
            alt={item.title}
            className="w-full h-auto max-h-[70vh] object-contain"
            src={item.image}
          />
        </div>
        <div className="p-4 sm:p-6 bg-[#1E293B] text-white">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#FF7A00]/20 text-[#FF7A00] border border-[#FF7A00]/30">
              {item.categoryLabel}
            </span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">calendar_today</span>
              {item.date}
            </span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">location_on</span>
              {item.location}
            </span>
          </div>
          <h3 className="font-headline font-bold text-lg text-white mb-1">{item.title}</h3>
          <p className="text-xs sm:text-sm text-gray-300">{item.description}</p>
        </div>
      </div>
    </div>
  );
};
