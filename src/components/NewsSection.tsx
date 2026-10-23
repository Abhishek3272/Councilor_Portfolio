import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { NewsItem } from '../types';
import { getStoredNews } from '../data/civicData';

export const NewsSection: React.FC = () => {
  const { t, language } = useLanguage();
  const isMr = language === 'mr';

  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<NewsItem | null>(null);

  useEffect(() => {
    setNewsList(getStoredNews());
  }, []);

  const categories = [
    { label: t('news.all'), value: 'all' },
    { label: isMr ? 'जाहीर सूचना' : 'Public Notices', value: 'Notice' },
    { label: isMr ? 'बैठका व सभा' : 'Meetings', value: 'Meeting' },
    { label: isMr ? 'विकास प्रगती' : 'Development', value: 'Development' },
    { label: isMr ? 'आरोग्य व शिबिर' : 'Health & Welfare', value: 'Health' },
  ];

  const filteredNews =
    selectedCategory === 'all'
      ? newsList
      : newsList.filter((item) => item.category === selectedCategory);

  return (
    <section id="news" className="w-full py-16 lg:py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-1 bg-[#FF8500] rounded-full"></div>
              <div className="w-4 h-1 bg-[#168447] rounded-full"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF8500]">
                {t('news.label')}
              </span>
            </div>
            <h2 className="font-headline font-bold text-2xl sm:text-3xl lg:text-4xl text-[#172033]">
              {t('news.heading')}
            </h2>
            <p className="text-sm text-gray-600 mt-2 max-w-2xl leading-relaxed">
              {t('news.subtitle')}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-50 text-red-700 text-xs font-bold border border-red-200">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
              <span>{isMr ? 'थेट प्रसिद्धी सूचना कक्ष' : 'Live Press & Circulars'}</span>
            </span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#172033] text-white shadow-sm'
                    : 'bg-[#F4F5F7] text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredNews.map((item) => (
            <article
              key={item.id}
              className={`rounded-2xl border p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-lg ${
                item.urgent
                  ? 'bg-amber-50/40 border-amber-300'
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-md ${
                        item.urgent
                          ? 'bg-red-100 text-red-800 border border-red-200'
                          : 'bg-blue-50 text-blue-700 border border-blue-200'
                      }`}
                    >
                      {item.urgent && (
                        <span className="mr-1 inline-block animate-pulse">●</span>
                      )}
                      {isMr ? item.categoryLabelMr : item.categoryLabel}
                    </span>
                    <span className="text-xs text-gray-400 font-mono">
                      {isMr ? item.readTimeMr : item.readTime}
                    </span>
                  </div>
                  <time className="text-xs text-gray-500 font-medium">
                    {isMr ? item.dateMr : item.date}
                  </time>
                </div>

                <h3 className="font-headline font-bold text-base sm:text-lg text-[#172033] mb-2 leading-snug">
                  {isMr ? item.titleMr : item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  {isMr ? item.summaryMr : item.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
                <p className="text-[11px] text-gray-500 truncate max-w-[240px]">
                  <strong>{t('news.issuedBy')}:</strong>{' '}
                  {isMr ? item.issuedByMr : item.issuedBy}
                </p>
                <button
                  onClick={() => setActiveModalItem(item)}
                  className="text-xs font-bold text-[#FF8500] hover:text-[#DE7200] flex items-center gap-1 shrink-0 cursor-pointer"
                >
                  <span>{t('news.readMore')}</span>
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Full Notice Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-gray-200 overflow-hidden relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF8500]">
                  {isMr
                    ? activeModalItem.categoryLabelMr
                    : activeModalItem.categoryLabel}
                </span>
                <h3 className="font-headline font-bold text-xl sm:text-2xl text-[#172033] mt-1">
                  {isMr ? activeModalItem.titleMr : activeModalItem.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1 font-mono">
                  {isMr ? activeModalItem.dateMr : activeModalItem.date} •{' '}
                  {isMr ? activeModalItem.readTimeMr : activeModalItem.readTime}
                </p>
              </div>
              <button
                onClick={() => setActiveModalItem(null)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 cursor-pointer shrink-0"
              >
                ✕
              </button>
            </div>

            <div className="p-4 rounded-xl bg-orange-50/50 border border-orange-100 mb-6 text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
              {isMr ? activeModalItem.summaryMr : activeModalItem.summary}
            </div>

            <div className="prose text-xs sm:text-sm text-gray-700 leading-relaxed space-y-3 mb-6">
              <p>{isMr ? activeModalItem.contentMr : activeModalItem.content}</p>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-gray-500">
              <div>
                <span className="font-bold text-gray-800">
                  {t('news.issuedBy')}:
                </span>{' '}
                {isMr ? activeModalItem.issuedByMr : activeModalItem.issuedBy}
              </div>
              <button
                onClick={() => setActiveModalItem(null)}
                className="px-4 py-2 rounded-xl bg-gray-900 text-white font-semibold cursor-pointer hover:bg-black self-end sm:self-auto"
              >
                {t('works.closeModal')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
