import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CivicPoll } from '../types';
import { getStoredPoll, saveStoredPoll } from '../data/civicData';

export const FlowchartInteractions: React.FC = () => {
  const { t, language } = useLanguage();
  const isMr = language === 'mr';

  const [activeStep, setActiveStep] = useState<number>(0);
  const [poll, setPoll] = useState<CivicPoll>(getStoredPoll());
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState<boolean>(() => {
    try {
      return localStorage.getItem('akluj_ward8_user_voted') === 'true';
    } catch {
      return false;
    }
  });

  const steps = [
    {
      step: '01',
      title: t('flowchart.step1Title'),
      desc: t('flowchart.step1Desc'),
      time: t('flowchart.step1Time'),
      icon: 'receipt_long',
      color: '#FF8500',
      badge: isMr ? 'डिजिटल नोंदणी' : 'Digital Logging',
      officer: isMr ? 'नागरी सहाय्यता कक्ष' : 'Citizen Helpdesk Counter',
      action: isMr
        ? 'तक्रारदार नागरिकाला एसएमएस व व्हॉट्सॲपवर अधिकृत टोकन क्रमांक मिळतो.'
        : 'Citizen receives immediate SMS and WhatsApp receipt with reference token.',
    },
    {
      step: '02',
      title: t('flowchart.step2Title'),
      desc: t('flowchart.step2Desc'),
      time: t('flowchart.step2Time'),
      icon: 'engineering',
      color: '#168447',
      badge: isMr ? 'प्रत्यक्ष पाहणी' : 'Site Inspection',
      officer: isMr ? 'कनिष्ठ अभियंता व नगरसेवक प्रतिनिधी' : 'Junior Engineer (Civil) & Councillor Liaison',
      action: isMr
        ? 'घटनास्थळी प्रत्यक्ष भेट देऊन समस्येचे मोजमाप, फोटो व प्राथमिक अहवाल तयार होतो.'
        : 'On-site physical inspection to record defect dimensions and engineering report.',
    },
    {
      step: '03',
      title: t('flowchart.step3Title'),
      desc: t('flowchart.step3Desc'),
      time: t('flowchart.step3Time'),
      icon: 'fact_check',
      color: '#172033',
      badge: isMr ? 'निधी व मंजुरी' : 'Sanction',
      officer: isMr ? 'अकलूज नगर परिषद बांधकाम समिती' : 'Akluj Works & Standing Committee',
      action: isMr
        ? 'तातडीच्या देखभाल निधीतून अंदाजपत्रक मंजूर करून कंत्राटदाराला वर्क ऑर्डर जारी केली जाते.'
        : 'Administrative sanction from emergency ward funds and work order issuance.',
    },
    {
      step: '04',
      title: t('flowchart.step4Title'),
      desc: t('flowchart.step4Desc'),
      time: t('flowchart.step4Time'),
      icon: 'handyman',
      color: '#FF8500',
      badge: isMr ? 'प्रत्यक्ष काम' : 'Execution',
      officer: isMr ? 'महानगरपालिका नियुक्त कंत्राटदार पथक' : 'Designated Municipal Contractor Crew',
      action: isMr
        ? 'रस्ता, गटर, किंवा पथदिव्यांचे काम प्रत्यक्ष जागेवर सुरू होते; प्रगती पोर्टलवर नोंदवली जाते.'
        : 'Civil or electrical repair undertaken with real-time photographic logging.',
    },
    {
      step: '05',
      title: t('flowchart.step5Title'),
      desc: t('flowchart.step5Desc'),
      time: t('flowchart.step5Time'),
      icon: 'verified',
      color: '#168447',
      badge: isMr ? 'नागरी समाधान' : 'Resolution',
      officer: isMr ? 'तक्रारदार नागरिक व नगरसेवक' : 'Citizen Complainant & Councillor Verification',
      action: isMr
        ? 'तक्रारदार नागरिकाकडून काम समाधानकारक झाल्याची पुष्टी आल्यानंतरच फाईल बंद केली जाते.'
        : 'Ticket closed only after complainant satisfaction sign-off via SMS or callback.',
    },
  ];

  const handleVote = () => {
    if (!selectedOption || hasVoted) return;

    const updatedOptions = poll.options.map((opt) => {
      if (opt.id === selectedOption) {
        return { ...opt, votes: opt.votes + 1 };
      }
      return opt;
    });

    const updatedPoll: CivicPoll = {
      ...poll,
      totalVotes: poll.totalVotes + 1,
      options: updatedOptions,
    };

    setPoll(updatedPoll);
    saveStoredPoll(updatedPoll);
    setHasVoted(true);
    try {
      localStorage.setItem('akluj_ward8_user_voted', 'true');
    } catch {
      // ignore
    }
  };

  const currentStep = steps[activeStep];

  return (
    <section id="flowchart" className="w-full py-14 sm:py-20 bg-[#FFFCF7] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-1 bg-[#FF8500] rounded-full"></div>
              <div className="w-4 h-1 bg-[#168447] rounded-full"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF8500]">
                {t('flowchart.label')}
              </span>
            </div>
            <h2 className="font-headline font-bold text-2xl sm:text-3xl lg:text-4xl text-[#172033]">
              {t('flowchart.heading')}
            </h2>
            <p className="text-sm text-gray-600 mt-2 max-w-2xl leading-relaxed">
              {t('flowchart.subtitle')}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF8500] text-xs font-semibold shadow-xs">
              <span className="material-symbols-outlined text-[16px]">speed</span>
              <span>{isMr ? 'सरासरी ३.२ दिवसांत निवारण' : 'Avg. 3.2 Days Resolution SLA'}</span>
            </span>
          </div>
        </div>

        {/* 5-Step Duration Flowchart */}
        <div className="relative mb-8">
          {/* Connector Line behind cards */}
          <div className="hidden lg:block absolute top-[52px] left-10 right-10 h-1.5 bg-gradient-to-r from-[#FF8500] via-[#168447] to-[#172033] z-0 opacity-20 rounded-full"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 relative z-10">
            {steps.map((st, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={st.step}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`group cursor-pointer transition-all duration-300 rounded-2xl p-4 sm:p-5 border flex flex-col justify-between active:scale-95 ${
                    isSelected
                      ? 'bg-white shadow-xl ring-2 ring-[#FF8500] -translate-y-1.5 border-transparent'
                      : 'bg-white/80 hover:bg-white hover:shadow-lg hover:-translate-y-1 hover:border-[#FF8500]/60 border-gray-200'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-headline font-extrabold text-[11px] text-gray-400 group-hover:text-[#FF8500] transition-colors">
                        STAGE {st.step}
                      </span>
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: `${st.color}15`,
                          color: st.color,
                        }}
                      >
                        {st.badge}
                      </span>
                    </div>

                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 text-white shadow-xs group-hover:scale-110 group-hover:shadow-md transition-all duration-300"
                      style={{ backgroundColor: st.color }}
                    >
                      <span className="material-symbols-outlined text-[22px]">
                        {st.icon}
                      </span>
                    </div>

                    <h3 className="font-headline font-bold text-sm sm:text-base text-[#172033] mb-1 group-hover:text-[#FF8500] transition-colors leading-snug">
                      {st.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed mb-3 line-clamp-2">
                      {st.desc}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px] font-semibold text-gray-500">
                    <span className="flex items-center gap-1 font-mono text-[10px] text-gray-700">
                      <span className="material-symbols-outlined text-[13px] text-[#FF8500]">
                        schedule
                      </span>
                      {st.time}
                    </span>
                    <span className="text-[#168447] text-[10px]">
                      {isSelected ? '● Active' : 'Select'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Highlight Card for Selected Workflow Step */}
        <div className="mb-14 p-5 sm:p-6 rounded-2xl bg-white border border-gray-200/90 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 animate-fade-in">
          <div className="flex items-start gap-3.5">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm"
              style={{ backgroundColor: currentStep.color }}
            >
              <span className="material-symbols-outlined text-[24px]">
                {currentStep.icon}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="font-mono text-xs font-bold text-[#FF8500]">
                  STAGE {currentStep.step} DETAILS
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">
                  {currentStep.time}
                </span>
              </div>
              <h4 className="font-headline font-bold text-base sm:text-lg text-[#172033]">
                {currentStep.title} — {currentStep.officer}
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                {currentStep.action}
              </p>
            </div>
          </div>
          <a
            href="#grievance"
            className="px-4 py-2 rounded-xl bg-[#172033] hover:bg-black text-white text-xs font-bold shrink-0 transition-colors active:scale-95 flex items-center gap-1.5 self-end md:self-center"
          >
            <span>{isMr ? 'तक्रार दाखल करा' : 'File Grievance'}</span>
            <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
          </a>
        </div>

        {/* Participatory Budgeting Poll & Social Media Connect Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* People's Voice Poll Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[#168447] text-xs font-bold border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-[#168447] animate-ping"></span>
                  {t('poll.label')}
                </span>
                <span className="text-xs text-gray-500 font-mono">
                  {t('poll.totalVotes')}: <strong className="text-gray-900">{poll.totalVotes}</strong>
                </span>
              </div>

              <h3 className="font-headline font-bold text-base sm:text-xl text-[#172033] mb-1">
                {isMr ? poll.questionMr : poll.question}
              </h3>
              <p className="text-xs text-gray-500 mb-5">
                {t('poll.subtitle')}
              </p>

              {/* Poll Options */}
              <div className="space-y-2.5 mb-5">
                {poll.options.map((opt) => {
                  const percentage =
                    poll.totalVotes > 0
                      ? Math.round((opt.votes / poll.totalVotes) * 100)
                      : 0;
                  const isChecked = selectedOption === opt.id;

                  return (
                    <div
                      key={opt.id}
                      onClick={() => !hasVoted && setSelectedOption(opt.id)}
                      className={`relative rounded-xl p-3 border transition-all overflow-hidden active:scale-98 ${
                        hasVoted
                          ? 'border-gray-200 bg-gray-50/60 cursor-default'
                          : isChecked
                          ? 'border-[#FF8500] bg-orange-50/40 cursor-pointer shadow-xs'
                          : 'border-gray-200 hover:border-gray-300 bg-white cursor-pointer'
                      }`}
                    >
                      {/* Vote Percentage Fill Bar */}
                      {hasVoted && (
                        <div
                          className="absolute left-0 top-0 bottom-0 bg-[#FF8500]/15 transition-all duration-700"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      )}

                      <div className="relative z-10 flex items-center justify-between gap-3 text-xs sm:text-sm">
                        <div className="flex items-center gap-2.5">
                          <input
                            type="radio"
                            name="poll-option"
                            id={opt.id}
                            checked={isChecked}
                            onChange={() => !hasVoted && setSelectedOption(opt.id)}
                            disabled={hasVoted}
                            className="text-[#FF8500] focus:ring-[#FF8500]"
                          />
                          <label
                            htmlFor={opt.id}
                            className={`font-medium cursor-pointer ${
                              isChecked ? 'text-gray-950 font-bold' : 'text-gray-800'
                            }`}
                          >
                            {isMr ? opt.labelMr : opt.label}
                          </label>
                        </div>
                        {hasVoted && (
                          <div className="flex items-center gap-1.5 font-mono font-bold text-[#172033] shrink-0">
                            <span>{percentage}%</span>
                            <span className="text-[10px] text-gray-500 font-normal">
                              ({opt.votes})
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              {hasVoted ? (
                <div className="flex items-center gap-2 text-xs font-semibold text-[#168447]">
                  <span className="material-symbols-outlined text-[18px]">
                    check_circle
                  </span>
                  <span>{t('poll.votedText')}</span>
                </div>
              ) : (
                <button
                  onClick={handleVote}
                  disabled={!selectedOption}
                  className="px-5 py-2.5 rounded-xl bg-[#FF8500] hover:bg-[#DE7200] text-white font-bold text-xs sm:text-sm shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center gap-2 active:scale-95"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    how_to_vote
                  </span>
                  <span>{t('poll.voteBtn')}</span>
                </button>
              )}

              <span className="text-[11px] text-gray-400">
                {isMr ? 'थेट पारदर्शक लोकशाही' : 'Direct Participatory Governance'}
              </span>
            </div>
          </div>

          {/* Social Media Connect Hub */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#172033] to-[#0F1624] text-white rounded-2xl p-5 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-1 bg-[#FF8500] rounded-full"></div>
                <div className="w-4 h-1 bg-[#168447] rounded-full"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
                  {isMr ? 'जनसंवाद व्यासपीठ' : 'Public Connect'}
                </span>
              </div>
              <h3 className="font-headline font-bold text-lg sm:text-xl text-white mb-2">
                {t('social.heading')}
              </h3>
              <p className="text-xs text-gray-300 mb-5 leading-relaxed">
                {t('social.subtitle')}
              </p>

              {/* Verified Channels List */}
              <div className="space-y-2.5">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center justify-between group active:scale-98"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                      f
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white group-hover:text-orange-400 transition-colors">
                        {t('social.facebook')}
                      </p>
                      <p className="text-[10px] text-gray-400">
                        @councillormaheshshinde.akluj
                      </p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-gray-400 group-hover:text-white text-[16px]">
                    open_in_new
                  </span>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center justify-between group active:scale-98"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                      IG
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white group-hover:text-orange-400 transition-colors">
                        {t('social.instagram')}
                      </p>
                      <p className="text-[10px] text-gray-400">
                        @maheshshinde_ward8
                      </p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-gray-400 group-hover:text-white text-[16px]">
                    open_in_new
                  </span>
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center justify-between group active:scale-98"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold text-xs">
                      ▶
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white group-hover:text-orange-400 transition-colors">
                        {t('social.youtube')}
                      </p>
                      <p className="text-[10px] text-gray-400">
                        Akluj Ward 8 Development Channel
                      </p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-gray-400 group-hover:text-white text-[16px]">
                    open_in_new
                  </span>
                </a>

                <a
                  href="https://wa.me/919822000008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#168447]/20 hover:bg-[#168447]/30 border border-[#168447]/40 transition-all flex items-center justify-between group active:scale-98"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#168447] flex items-center justify-center text-white">
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-green-300 group-hover:text-white transition-colors">
                        {t('social.whatsapp')}
                      </p>
                      <p className="text-[10px] text-gray-300">
                        +91 98220 00008 (Direct Desk)
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-[#FF8500] group-hover:underline">
                    {isMr ? 'मेसेज करा' : 'Message'} →
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 text-[11px] text-gray-400 flex items-center justify-between">
              <span>{isMr ? 'अधिकृत जनसंवाद कक्ष' : 'Official Public Desk'}</span>
              <span className="text-emerald-400">● 24x7 Active</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
