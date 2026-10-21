import React from 'react';
import councillorPhoto from '../assets/Politician-img.jpj-1.jpeg';
import { useLanguage } from '../context/LanguageContext';

export const ABOUT_DATA = {
  councillorPhotoUrl: '/assets/Politician-img.jpj-1.jpeg',
  bjpLogoUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuANNQ1xuG306chQXuLZKn6e7CWDlaRDtI4D0FrtsTn7Wv-HXMDi0h9eYx3OdxeHpu_56NO8OlrtGRMweuMinopyfEdcDZYQRnrB6yxxBdK0gktrsrEl-qcR85wnfOYy40A2RY0eOplUsHA2UllUDGWmgs4DjVWcTefAoKLnwtohUXlsuHpkw_ztpL2_TmNlqMcQVTDzMY_a2vH6iMXajsLRNlVy4kW5wMZyX6DfJ2G-xYf5x6_KgMRx_ccBLoMME-IlL2k',
};

export const AboutSection: React.FC = () => {
  const { t, language } = useLanguage();
  const isMr = language === 'mr';

  // Dynamic Left-side Cards based on active language
  const leftCards = {
    partyName: t('about.partyName'),
    secretariatTitle: t('about.secretariatTitle'),
    secretariatSubtitle: t('about.secretariatSub'),
    card1: {
      title: t('about.card1Title'),
      description: t('about.card1Desc'),
      icon: 'water_drop',
    },
    card2: {
      title: t('about.card2Title'),
      description: t('about.card2Desc'),
      icon: 'policy',
    },
    card3: {
      title: t('about.card3Title'),
      description: t('about.card3Desc'),
      icon: 'forum',
    },
    trustNote: t('about.trustNote'),
  };

  // Dynamic Introduction paragraphs
  const introduction = isMr
    ? [
        'महेश केशव शिंदे हे भारतीय जनता पार्टीच्या (भाजपा) माध्यमातून प्रभाग क्र. ८ चे निर्वाचित नगरसेवक म्हणून अविरतपणे कार्यरत आहेत. प्रभागातील नागरिकांशी थेट संपर्क आणि समस्या सोडवणुकीची तत्पर कार्यपद्धती ही त्यांची मुख्य ओळख आहे.',
        'स्थानिक सोसायट्या, ज्येष्ठ नागरिक आणि नागरिकांच्या सहकार्याने प्रभागामध्ये सुरळीत पाणीपुरवठा, सुरक्षित व स्वच्छ रस्ते, दर्जेदार सांडपाणी निचरा आणि मूलभूत सोयीसुविधांचे आधुनिकीकरण यावर त्यांनी विशेष भर दिला आहे.',
      ]
    : [
        'Mahesh Keshav Shinde serves as the elected Municipal Councillor for Ward No. 8 under the Bharatiya Janata Party (BJP). Rooted in daily community contact, his public service centers on bringing responsive, structured, and accountable governance to local municipal administration.',
        'Working in coordination with residential welfare associations, local community representatives, and ward families, his work emphasizes dependable civic amenities, neighborhood safety, and proactive resolution of localized civic grievances.',
      ];

  // Dynamic Public Journey Stages
  const publicJourney = [
    {
      step: '01',
      category: t('about.stage1Category'),
      title: t('about.stage1Title'),
      description: t('about.stage1Desc'),
      icon: 'volunteer_activism',
    },
    {
      step: '02',
      category: t('about.stage2Category'),
      title: t('about.stage2Title'),
      description: t('about.stage2Desc'),
      icon: 'handshake',
    },
    {
      step: '03',
      category: t('about.stage3Category'),
      title: t('about.stage3Title'),
      description: t('about.stage3Desc'),
      icon: 'how_to_vote',
    },
    {
      step: '04',
      category: t('about.stage4Category'),
      title: t('about.stage4Title'),
      description: t('about.stage4Desc'),
      icon: 'account_balance',
    },
  ];

  // Dynamic Core Values
  const coreValues = [
    {
      title: t('about.val1Title'),
      description: t('about.val1Desc'),
      icon: 'visibility',
      accentColor: '#FF7A00',
    },
    {
      title: t('about.val2Title'),
      description: t('about.val2Desc'),
      icon: 'groups',
      accentColor: '#08783A',
    },
    {
      title: t('about.val3Title'),
      description: t('about.val3Desc'),
      icon: 'gavel',
      accentColor: '#FF7A00',
    },
    {
      title: t('about.val4Title'),
      description: t('about.val4Desc'),
      icon: 'domain_add',
      accentColor: '#08783A',
    },
  ];

  // Dynamic Vision & Priorities
  const visionGoals = isMr
    ? [
        {
          title: 'आधुनिक व मजबूत पायाभूत सुविधा',
          description:
            'पावसाळ्यात पाणी साचू नये म्हणून प्रभावी भुयारी ड्रेनेज, मजबूत काँक्रीट रस्ते आणि दर्जेदार पदपथ निर्माण करणे.',
          icon: 'construction',
        },
        {
          title: 'अखंडित व स्वच्छ पाणीपुरवठा',
          description:
            'प्रभागातील शेवटच्या सोसायटीपर्यंत समतोल दाबाने पाणी पोहोचवणे आणि गळती प्रतिबंधक जलवाहिन्यांची उभारणी.',
          icon: 'water_drop',
        },
        {
          title: 'स्वच्छ, सुरक्षित व उजळलेला प्रभाग',
          description:
            'दररोज १००% कचरा संकलन, घंटागाड्यांची नियमितता आणि महिला व बालकांच्या सुरक्षेसाठी अखंड पथदिवे.',
          icon: 'lightbulb',
        },
        {
          title: 'सक्रिय नागरिक संवाद व पारदर्शक कामकाज',
          description:
            'नियमित जनसुनावणी, जलद डिजिटल तक्रार निवारण आणि प्रभागाच्या विकासकामांमध्ये नागरिकांचा सक्रिय सहभाग.',
          icon: 'record_voice_over',
        },
      ]
    : [
        {
          title: 'Modern & Reliable Civic Infrastructure',
          description:
            'Prioritizing resilient stormwater drainage, upgraded internal roads, and underground utility protections to prevent seasonal disruptions.',
          icon: 'construction',
        },
        {
          title: 'Consistent & Clean Water Distribution',
          description:
            'Working toward steady tap pressure for all residential societies and prompt replacement of aging distribution conduits.',
          icon: 'water_drop',
        },
        {
          title: 'Clean, Safe & Well-Lit Neighborhoods',
          description:
            'Supporting daily door-to-door waste collection audits and 100% operational coverage of LED streetlights for citizen safety.',
          icon: 'lightbulb',
        },
        {
          title: 'Empowered & Consultative Ward Community',
          description:
            'Institutionalizing regular citizen dialogue, transparent grievance redressal mechanisms, and timely civic notifications.',
          icon: 'record_voice_over',
        },
      ];

  const imageSrc = councillorPhoto || ABOUT_DATA.councillorPhotoUrl;

  return (
    <section id="about" className="w-full py-16 lg:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* ========================================================= */}
          {/* LEFT COLUMN: INFORMATION CARDS                            */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex flex-col space-y-6 lg:sticky lg:top-24">
            <div
              id="secretariat-overview-box"
              className="p-6 sm:p-7 rounded-2xl bg-[#F8F9FA] border border-gray-200 shadow-sm relative overflow-hidden"
            >
              {/* Top Secretariat Header */}
              <div className="flex items-center gap-4 mb-6 pb-5 border-b border-gray-200/80">
                <div className="w-16 h-16 rounded-2xl bg-white p-2 border border-gray-200 shadow-sm flex items-center justify-center shrink-0">
                  <img
                    alt="Official BJP Logo"
                    className="w-full h-full object-contain"
                    src={ABOUT_DATA.bjpLogoUrl}
                  />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#E66B00] font-bold">
                    {leftCards.partyName}
                  </span>
                  <h3 className="font-headline font-bold text-lg sm:text-xl text-gray-900 leading-snug">
                    {leftCards.secretariatTitle}
                  </h3>
                  <p className="text-xs text-gray-600">{leftCards.secretariatSubtitle}</p>
                </div>
              </div>

              {/* 3 Left-Side Information Cards */}
              <div className="space-y-4">
                {/* Card 1: Public Service Priorities */}
                <div
                  id="about-card-priorities"
                  className="p-4 sm:p-4.5 rounded-xl bg-white border border-gray-200 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:border-orange-300 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-2 text-[#FF7A00] font-bold text-sm">
                    <span className="w-7 h-7 rounded-lg bg-orange-50 flex items-center justify-center text-[#FF7A00] shrink-0">
                      <span className="material-symbols-outlined text-[18px]">
                        {leftCards.card1.icon}
                      </span>
                    </span>
                    <span className="text-gray-900 font-headline font-semibold">
                      {leftCards.card1.title}
                    </span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed pl-9.5">
                    {leftCards.card1.description}
                  </p>
                </div>

                {/* Card 2: Approach to Governance */}
                <div
                  id="about-card-governance"
                  className="p-4 sm:p-4.5 rounded-xl bg-white border border-gray-200 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:border-green-300 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-2 text-[#08783A] font-bold text-sm">
                    <span className="w-7 h-7 rounded-lg bg-green-50 flex items-center justify-center text-[#08783A] shrink-0">
                      <span className="material-symbols-outlined text-[18px]">
                        {leftCards.card2.icon}
                      </span>
                    </span>
                    <span className="text-gray-900 font-headline font-semibold">
                      {leftCards.card2.title}
                    </span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed pl-9.5">
                    {leftCards.card2.description}
                  </p>
                </div>

                {/* Card 3: Citizen Engagement */}
                <div
                  id="about-card-engagement"
                  className="p-4 sm:p-4.5 rounded-xl bg-white border border-gray-200 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:border-orange-300 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-2 text-[#FF7A00] font-bold text-sm">
                    <span className="w-7 h-7 rounded-lg bg-orange-50 flex items-center justify-center text-[#FF7A00] shrink-0">
                      <span className="material-symbols-outlined text-[18px]">
                        {leftCards.card3.icon}
                      </span>
                    </span>
                    <span className="text-gray-900 font-headline font-semibold">
                      {leftCards.card3.title}
                    </span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed pl-9.5 mb-3">
                    {leftCards.card3.description}
                  </p>
                  <div className="pl-9.5 flex items-center gap-3 pt-1 text-xs">
                    <a
                      href="#grievance"
                      className="inline-flex items-center gap-1 font-semibold text-[#FF7A00] hover:text-[#E66B00] transition-colors"
                    >
                      <span>{t('about.card3Grievance')}</span>
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </a>
                    <span className="text-gray-300">·</span>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 font-semibold text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <span>{t('about.card3Timings')}</span>
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Verified Representation Note */}
              <div className="mt-6 pt-4 border-t border-gray-200 flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#08783A] text-[20px] shrink-0 mt-0.5">
                  verified_user
                </span>
                <p className="text-xs text-gray-700 font-medium leading-relaxed">
                  {leftCards.trustNote}
                </p>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: MAIN PROFILE CONTENT                        */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            {/* 1. Header Section */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-1 bg-[#FF7A00] rounded-full"></div>
                <div className="w-3 h-1 bg-[#08783A] rounded-full"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#E66B00]">
                  {t('about.label')}
                </span>
              </div>
              <h2
                id="about-heading"
                className="font-headline font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 tracking-tight leading-tight"
              >
                {t('about.heading')}
              </h2>
              <p className="text-sm sm:text-base font-semibold text-[#08783A] mt-1.5">
                {t('about.subtitle')}
              </p>
            </div>

            {/* 2. Councillor Profile Feature Card with Official Photograph */}
            <div
              id="councillor-profile-card"
              className="p-5 sm:p-6 rounded-2xl bg-[#F8F9FA] border border-gray-200/90 shadow-xs flex flex-col sm:flex-row gap-6 items-center sm:items-start"
            >
              {/* Councillor Photograph Frame */}
              <div className="shrink-0 flex flex-col items-center">
                <div className="relative w-40 sm:w-44 md:w-48 aspect-[3/4] rounded-xl overflow-hidden shadow-sm ring-1 ring-gray-200/80 bg-white">
                  <img
                    alt="Mahesh Keshav Shinde"
                    className="w-full h-full object-cover object-top"
                    src={imageSrc}
                    loading="eager"
                  />
                  {/* Bottom Dual Stripe Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 flex">
                    <div className="w-1/2 bg-[#FF7A00]"></div>
                    <div className="w-1/2 bg-[#08783A]"></div>
                  </div>
                </div>
                <div className="mt-2.5 text-center">
                  <p className="font-headline font-bold text-xs sm:text-sm text-gray-900">
                    {t('nav.councillorName')}
                  </p>
                  <p className="text-[11px] text-[#E66B00] font-semibold">
                    {t('nav.designation')}
                  </p>
                </div>
              </div>

              {/* Introduction Narrative */}
              <div className="space-y-3.5 text-gray-600 text-xs sm:text-[14px] leading-relaxed flex-1">
                {introduction.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* 3. Public Journey Subsection & Compact Timeline */}
            <div id="about-public-journey" className="pt-2">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
                <div>
                  <h3 className="font-headline font-bold text-lg sm:text-xl text-gray-900 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#FF7A00] text-[22px]">
                      timeline
                    </span>
                    <span>{t('about.journeyTitle')}</span>
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {t('about.journeySub')}
                  </p>
                </div>
              </div>

              {/* Compact Timeline Grid / List */}
              <div className="relative pl-6 sm:pl-8 border-l-2 border-gray-200 space-y-6 my-2">
                {publicJourney.map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline Node Indicator */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-[#FF7A00] flex items-center justify-center shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-[#08783A]"></span>
                    </div>

                    <div className="bg-[#F8F9FA] rounded-xl p-4 border border-gray-200/80 hover:border-gray-300 transition-colors">
                      <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#E66B00]">
                          {item.category}
                        </span>
                        <span className="text-[11px] font-mono text-gray-600 font-semibold">
                          Stage {item.step}
                        </span>
                      </div>
                      <h4 className="font-headline font-semibold text-sm sm:text-base text-gray-900 mb-1 flex items-center gap-2">
                        <span className="material-symbols-outlined text-gray-500 text-[18px]">
                          {item.icon}
                        </span>
                        <span>{item.title}</span>
                      </h4>
                      <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Core Values Subsection */}
            <div id="about-core-values" className="pt-2">
              <div className="mb-4">
                <h3 className="font-headline font-bold text-lg sm:text-xl text-gray-900 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#08783A] text-[22px]">
                    balance
                  </span>
                  <span>{t('about.valuesTitle')}</span>
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  {t('about.valuesSub')}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {coreValues.map((val, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-gray-200 hover:shadow-xs transition-all relative overflow-hidden"
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ backgroundColor: val.accentColor }}
                    ></div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <span
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: val.accentColor === '#FF7A00' ? '#FFF7ED' : '#F0FDF4',
                          color: val.accentColor,
                        }}
                      >
                        <span className="material-symbols-outlined text-[18px]">{val.icon}</span>
                      </span>
                      <h4 className="font-headline font-bold text-xs sm:text-sm text-gray-900 leading-tight">
                        {val.title}
                      </h4>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">{val.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Vision & Ward Priorities Subsection */}
            <div id="about-vision-goals" className="pt-2">
              <div className="mb-4">
                <h3 className="font-headline font-bold text-lg sm:text-xl text-gray-900 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#FF7A00] text-[22px]">
                    flag
                  </span>
                  <span>{t('about.visionTitle')}</span>
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  {t('about.visionSub')}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {visionGoals.map((goal, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-xl bg-[#F8F9FA] border border-gray-200 flex items-start gap-3 hover:border-gray-300 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-700 shrink-0 shadow-2xs mt-0.5">
                      <span className="material-symbols-outlined text-[20px] text-[#08783A]">
                        {goal.icon}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-headline font-semibold text-xs sm:text-sm text-gray-900 mb-1 leading-snug">
                        {goal.title}
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{goal.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
