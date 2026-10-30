import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AKLUJ_MAP_POINTS, AKLUJ_INFO } from '../data/civicData';
import { MapPoint } from '../types';

export const AklujInteractiveMap: React.FC = () => {
  const { t, language } = useLanguage();
  const isMr = language === 'mr';

  const [selectedPoint, setSelectedPoint] = useState<MapPoint>(AKLUJ_MAP_POINTS[0]);

  return (
    <section id="map" className="w-full py-16 lg:py-24 bg-[#FFFCF7] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-1 bg-[#FF8500] rounded-full"></div>
              <div className="w-4 h-1 bg-[#168447] rounded-full"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF8500]">
                {t('map.label')}
              </span>
            </div>
            <h2 className="font-headline font-bold text-2xl sm:text-3xl lg:text-4xl text-[#172033]">
              {t('map.heading')}
            </h2>
            <p className="text-sm text-gray-600 mt-2 max-w-2xl leading-relaxed">
              {t('map.subtitle')}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={AKLUJ_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#172033] hover:bg-[#0F1624] text-white text-xs font-bold shadow-md transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px] text-[#FF8500]">
                directions
              </span>
              <span>{t('map.directions')}</span>
            </a>
          </div>
        </div>

        {/* Map Interactive Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* SVG Map Canvas */}
          <div className="lg:col-span-8 bg-[#172033] rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-300 relative overflow-hidden flex flex-col justify-between min-h-[460px]">
            {/* Subtle Coordinate Gridlines */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1.2px,transparent_1.2px)] [background-size:24px_24px] pointer-events-none"></div>

            {/* Top Bar with Geolocation Details */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10 text-xs text-gray-300">
              <div className="flex items-center gap-2 font-mono">
                <span className="w-2.5 h-2.5 rounded-full bg-[#168447] animate-pulse"></span>
                <span className="font-bold text-white">AKLUJ, MAHARASHTRA</span>
                <span className="text-gray-400">({AKLUJ_INFO.coordinates})</span>
              </div>
              <span className="text-[11px] text-orange-400 font-semibold px-2 py-0.5 rounded bg-orange-400/10 border border-orange-400/20">
                {isMr ? 'अधिकृत प्रभाग क्र. ८ कार्यक्षेत्र' : 'Official Ward 8 Jurisdiction'}
              </span>
            </div>

            {/* Stylized SVG Roads & Boundary Layout */}
            <div className="relative flex-1 my-4 flex items-center justify-center">
              <svg
                viewBox="0 0 800 450"
                className="w-full h-full max-h-[380px] drop-shadow-md select-none"
              >
                {/* Ward 8 Boundary Outline */}
                <path
                  d="M 120,80 L 380,50 L 680,90 L 730,280 L 620,400 L 250,420 L 100,260 Z"
                  fill="rgba(255, 133, 0, 0.05)"
                  stroke="#FF8500"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  opacity="0.85"
                />

                {/* Major Arterial Roads in Akluj */}
                {/* Sangam Road (Main East-West Trunk) */}
                <path
                  d="M 40,240 Q 300,220 500,240 T 780,210"
                  fill="none"
                  stroke="#475569"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
                <path
                  d="M 40,240 Q 300,220 500,240 T 780,210"
                  fill="none"
                  stroke="#F8FAFC"
                  strokeWidth="1.5"
                  strokeDasharray="10,6"
                  opacity="0.75"
                />

                {/* Malshiras Bypass Corridor (North-South) */}
                <path
                  d="M 400,20 Q 420,180 390,320 T 430,440"
                  fill="none"
                  stroke="#475569"
                  strokeWidth="6"
                  strokeLinecap="round"
                />

                {/* Shastri Nagar Arterial */}
                <path
                  d="M 320,130 L 620,170"
                  fill="none"
                  stroke="#334155"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                {/* Old Gaothan Link */}
                <path
                  d="M 220,230 L 380,360"
                  fill="none"
                  stroke="#334155"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Road Labels */}
                <text x="60" y="225" fill="#94A3B8" fontSize="11" fontFamily="sans-serif">
                  Sangam Main Road (संगम रस्ता)
                </text>
                <text x="440" y="55" fill="#94A3B8" fontSize="11" fontFamily="sans-serif">
                  Malshiras Bypass Link (बायपास मार्ग)
                </text>
                <text x="450" y="150" fill="#94A3B8" fontSize="10" fontFamily="sans-serif">
                  Shastri Nagar Arterial
                </text>

                {/* Interactive Map Pins */}
                {AKLUJ_MAP_POINTS.map((pt) => {
                  const isSelected = selectedPoint.id === pt.id;
                  const x = (pt.xPercent / 100) * 800;
                  const y = (pt.yPercent / 100) * 450;

                  return (
                    <g
                      key={pt.id}
                      className="cursor-pointer transition-transform"
                      onClick={() => setSelectedPoint(pt)}
                    >
                      {/* Glow on selected */}
                      {isSelected && (
                        <circle
                          cx={x}
                          cy={y}
                          r="20"
                          fill="#FF8500"
                          opacity="0.3"
                          className="animate-ping"
                        />
                      )}

                      {/* Pin Circle */}
                      <circle
                        cx={x}
                        cy={y}
                        r={isSelected ? 11 : 8}
                        fill={isSelected ? '#FF8500' : '#168447'}
                        stroke="#ffffff"
                        strokeWidth="2.5"
                      />

                      {/* Pin Label */}
                      <text
                        x={x}
                        y={y - 14}
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize={isSelected ? '12' : '10'}
                        fontWeight={isSelected ? 'bold' : 'normal'}
                        className="pointer-events-none drop-shadow-md"
                      >
                        {isMr ? pt.titleMr.split(' ')[0] : pt.title.split(' ')[0]}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Bottom Legend */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10 text-[11px] text-gray-400">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF8500]"></span>
                  <span className="text-gray-300">
                    {isMr ? 'निवडलेला प्रकल्प / कार्यालय' : 'Selected Location'}
                  </span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#168447]"></span>
                  <span className="text-gray-300">
                    {isMr ? 'नागरी सुविधा केंद्र' : 'Civic Amenity'}
                  </span>
                </span>
              </div>
              <span className="italic">{t('map.pinsInfo')}</span>
            </div>
          </div>

          {/* Selected Point Detail Panel */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF8500] px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-200">
                  {isMr ? selectedPoint.categoryMr : selectedPoint.category}
                </span>
                <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {isMr ? selectedPoint.statusMr : selectedPoint.status}
                </span>
              </div>

              <h3 className="font-headline font-bold text-lg sm:text-xl text-[#172033] mb-2 leading-snug">
                {isMr ? selectedPoint.titleMr : selectedPoint.title}
              </h3>

              <div className="flex items-start gap-2 text-xs text-gray-600 mb-5">
                <span className="material-symbols-outlined text-[18px] text-[#FF8500] shrink-0 mt-0.5">
                  location_on
                </span>
                <span>{isMr ? selectedPoint.addressMr : selectedPoint.address}</span>
              </div>

              {/* Key Highlights */}
              <div className="space-y-2 mb-6">
                <p className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                  {isMr ? 'ठळक वैशिष्ट्ये व कार्य व्याप्ती:' : 'Key Infrastructure Highlights:'}
                </p>
                {selectedPoint.highlights.map((hl, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-[#F4F5F7] border border-gray-200 text-xs text-gray-700 flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[#168447] text-[16px] shrink-0">
                      check_circle
                    </span>
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
              <a
                href={selectedPoint.googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#FF8500] hover:bg-[#DE7200] text-white font-bold text-xs text-center shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">map</span>
                <span>{t('map.directions')}</span>
              </a>
              <p className="text-[10px] text-gray-400 text-center">
                {isMr
                  ? 'अकलूज नगर परिषद प्रभाग क्र. ८ अधिकृत सीमांकन'
                  : 'Official Ward Demarcation — Akluj Municipal Council'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
