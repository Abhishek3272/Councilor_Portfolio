import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/civicData';
import { GalleryItem } from '../types';
import { LightboxModal } from './LightboxModal';
import { useLanguage } from '../context/LanguageContext';

export const ActionGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const { t, language } = useLanguage();
  const isMr = language === 'mr';

  const filterTabs = [
    { label: t('gallery.filterAll'), value: 'all' },
    { label: t('gallery.filterInspection'), value: 'inspection' },
    { label: t('gallery.filterWorks'), value: 'works' },
    { label: t('gallery.filterMeetings'), value: 'meetings' },
    { label: t('gallery.filterDevelopment'), value: 'development' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const handleNextPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedPhoto(filteredItems[nextIndex]);
  };

  const handlePrevPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedPhoto(filteredItems[prevIndex]);
  };

  return (
    <section id="gallery" className="w-full py-16 lg:py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-1 bg-[#FF7A00] rounded-full"></div>
              <div className="w-4 h-1 bg-[#08783A] rounded-full"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E66B00]">
                {t('gallery.label')}
              </span>
            </div>
            <h2 className="font-headline font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900">
              {t('gallery.heading')}
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-2xl">
              {t('gallery.subtitle')}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span
              id="geo-tagged-archive-badge"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#E66B00] text-xs font-semibold"
            >
              <span className="material-symbols-outlined text-[15px]">photo_camera</span>
              {isMr ? 'प्रमाणित छायाचित्र संग्रह' : 'Verified Photo Archive'}
            </span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div
          id="gallery-filters"
          className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar"
        >
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.value;
            return (
              <button
                key={tab.value}
                id={`filter-gallery-${tab.value}`}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#08783A] text-white shadow-sm'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 shadow-sm'
                }`}
                onClick={() => setActiveFilter(tab.value)}
                type="button"
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              className="group relative rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-sm hover:shadow-xl transition-all cursor-pointer"
              onClick={() => setSelectedPhoto(item)}
            >
              <div className="relative aspect-4/3 overflow-hidden bg-gray-200">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  src={item.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold border border-white/20">
                    {item.categoryLabel}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs text-orange-300 font-semibold mb-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                    <span>{item.date}</span>
                    <span className="mx-1">•</span>
                    <span className="material-symbols-outlined text-[14px]">location_on</span>
                    <span className="truncate">{item.location}</span>
                  </p>
                  <h3 className="font-headline font-bold text-sm sm:text-base leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-4 bg-white flex items-center justify-between text-xs text-gray-600">
                <span className="truncate max-w-[220px]">{item.description}</span>
                <span className="text-[#08783A] font-semibold flex items-center gap-1 shrink-0 group-hover:translate-x-0.5 transition-transform">
                  <span>{isMr ? 'पहा' : 'View'}</span>
                  <span className="material-symbols-outlined text-[16px]">fullscreen</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        onNext={handleNextPhoto}
        onPrev={handlePrevPhoto}
      />
    </section>
  );
};
