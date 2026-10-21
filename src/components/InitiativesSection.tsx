import React from 'react';
import { CIVIC_INITIATIVES } from '../data/civicData';
import { useLanguage } from '../context/LanguageContext';

export const InitiativesSection: React.FC = () => {
  const { t, language } = useLanguage();
  const isMr = language === 'mr';

  const getInitiativeData = (id: string, defTitle: string, defDesc: string, defSchedule: string) => {
    if (isMr) {
      if (id === 'i1') {
        return {
          title: t('initiatives.weeklyTitle'),
          desc: t('initiatives.weeklyDesc'),
          schedule: 'दर रविवारी सकाळी',
        };
      }
      if (id === 'i2') {
        return {
          title: '२४ तास जलसेवा व दाब नियंत्रण',
          desc: 'पाणीपुरवठा वेळेत जलदाब तपासणी आणि नागरिकांना पुरेसे पाणी मिळण्याची खात्री करण्यासाठी नियमित परीक्षण.',
          schedule: 'दैनंदिन पाहणी',
        };
      }
      if (id === 'i3') {
        return {
          title: 'उजळलेला प्रभाग (पथदिवे मोहीम)',
          desc: 'बंद पथदिवे २४ तासांत दुरुस्त करणे आणि महिला व ज्येष्ठांच्या सुरक्षेसाठी प्रमुख चौकात नवीन एलईडी बसवणे.',
          schedule: 'रात्रीचे विशेष परीक्षण',
        };
      }
      if (id === 'i4') {
        return {
          title: 'नागरिक संवाद व प्रभाग सभा',
          desc: 'प्रत्येक महिन्याला सोसायटी प्रतिनिधी आणि नागरिकांसोबत प्रलंबित विकासकामांवर प्रत्यक्ष चर्चा.',
          schedule: 'महिन्याचा पहिला शनिवार',
        };
      }
      if (id === 'i5') {
        return {
          title: t('initiatives.treeTitle'),
          desc: t('initiatives.treeDesc'),
          schedule: 'पावसाळी विशेष मोहीम',
        };
      }
      if (id === 'i6') {
        return {
          title: 'दैनिक जनसुनावणी व अर्ज मदत',
          desc: 'महापालिका योजना, दाखले आणि तक्रार निवारणासाठी कार्यालयात तज्ज्ञ कर्मचाऱ्यांमार्फत मोफत मार्गदर्शन.',
          schedule: 'सोम ते शनि • स. १० ते १',
        };
      }
    }
    return { title: defTitle, desc: defDesc, schedule: defSchedule };
  };

  return (
    <section id="initiatives" className="w-full py-16 lg:py-24 bg-[#F8F9FA] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-1 bg-[#FF7A00] rounded-full"></div>
              <div className="w-4 h-1 bg-[#08783A] rounded-full"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E66B00]">
                {t('initiatives.label')}
              </span>
            </div>
            <h2 className="font-headline font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900">
              {t('initiatives.heading')}
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-2xl">
              {t('initiatives.subtitle')}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span
              id="bjp-civic-framework-badge"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-gray-700 text-xs font-semibold shadow-sm"
            >
              <img
                alt="BJP Logo"
                className="w-4 h-4 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEb_0fPnzelSis-0nNZIPEyYsz9mLEJH6KP-fHcqs8Twkxx1rUCNWwndJdQNLxwHyf-o2QLlRUQI9_98VMXmDp-_vk-6ICq_dUBp49vo7SYc7Xu2dmWSISs-MiI6Q6Kf82IlmQmkjhR1_d5zGUEEzad_EtAsffT-oqJ0Ur1fyo5z4RSnap13Mw8-7CeYa89YUXn-Abm44k68YEkKEyIKy1xQoVbssMoN8wxkRBcTlnMB0JNunHG5WfMt7cpDTegh_KmSs"
              />
              {isMr ? 'भाजपा लोकसेवा कार्यपद्धती' : 'BJP Public Service Framework'}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CIVIC_INITIATIVES.map((item) => {
            const isSaffron = item.iconColor === 'saffron';
            const { title, desc, schedule } = getInitiativeData(
              item.id,
              item.title,
              item.description,
              item.schedule
            );

            return (
              <div
                key={item.id}
                id={`initiative-card-${item.id}`}
                className={`p-6 rounded-2xl bg-white border border-gray-200 shadow-sm transition-all hover:shadow-md ${
                  isSaffron ? 'hover:border-[#FF7A00]' : 'hover:border-[#08783A]'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                      isSaffron
                        ? 'bg-orange-100 text-[#FF7A00]'
                        : 'bg-green-100 text-[#08783A]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                  </div>
                  <span
                    className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                      isSaffron
                        ? 'text-[#E66B00] bg-orange-50'
                        : 'text-[#08783A] bg-green-50'
                    }`}
                  >
                    {schedule}
                  </span>
                </div>
                <h3 className="font-headline font-bold text-base text-gray-900 mb-2">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
