import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AKLUJ_INFO } from '../data/civicData';

export const SecretariatContact: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const { t, language } = useLanguage();
  const isMr = language === 'mr';

  // Contact Form State
  const [senderName, setSenderName] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(AKLUJ_INFO.mobile);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !senderPhone.trim() || !message.trim()) return;

    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setSentSuccess(true);
      setSenderName('');
      setSenderPhone('');
      setSenderEmail('');
      setSubject('');
      setMessage('');
    }, 600);
  };

  return (
    <section
      id="contact"
      className="w-full py-16 lg:py-24 bg-[#FFFCF7] border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-1 bg-[#FF8500] rounded-full"></div>
              <div className="w-4 h-1 bg-[#168447] rounded-full"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF8500]">
                {t('contact.label')}
              </span>
            </div>
            <h2 className="font-headline font-bold text-2xl sm:text-3xl lg:text-4xl text-[#172033]">
              {t('contact.heading')}
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-2xl leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span
              id="citizen-walkin-badge"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-gray-700 text-xs font-semibold shadow-sm"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#168447] animate-pulse"></span>
              <span>{isMr ? 'नागरिकांसाठी पूर्वपरवानगीशिवाय थेट भेट' : 'Citizens Welcome Without Prior Appointment'}</span>
            </span>
          </div>
        </div>

        {/* Top Grid: Office Address & Timings */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Address Card */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-[#FF8500] shrink-0">
                <span className="material-symbols-outlined text-[26px]">apartment</span>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF8500]">
                  {isMr ? 'जनसंपर्क कार्यालय पत्ता' : 'Ward Secretariat Address'}
                </span>
                <h3 className="font-headline font-bold text-base sm:text-lg text-gray-900 mt-1">
                  {t('contact.officeAddr1')}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                  {t('contact.officeAddr2')},
                  <br />
                  {t('contact.officeAddr3')}
                </p>
                <p className="text-xs text-gray-500 mt-3 font-mono flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#168447]">
                    my_location
                  </span>
                  <span>GPS: {AKLUJ_INFO.coordinates}</span>
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3 text-xs">
              <a
                href={`tel:${AKLUJ_INFO.phone}`}
                className="flex items-center gap-1.5 font-bold text-[#172033] hover:text-[#FF8500]"
              >
                <span className="material-symbols-outlined text-[16px] text-[#FF8500]">call</span>
                <span>{AKLUJ_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${AKLUJ_INFO.email}`}
                className="flex items-center gap-1.5 font-medium text-gray-600 hover:text-black"
              >
                <span className="material-symbols-outlined text-[16px] text-gray-400">mail</span>
                <span>{AKLUJ_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Timings & Consultation Hours Card */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-[#168447] shrink-0">
                <span className="material-symbols-outlined text-[26px]">schedule</span>
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#168447]">
                  {t('contact.hoursTitle')}
                </span>
                <h3 className="font-headline font-bold text-base text-gray-900 mt-1">
                  {isMr ? 'नागरिक भेट व प्रभाग पाहणी वेळ' : 'Public Consultation Hours'}
                </h3>

                <div className="mt-3 space-y-2.5 text-xs sm:text-sm text-gray-700">
                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="font-semibold text-gray-800">
                      {isMr ? 'सोमवार ते शनिवार' : 'Monday to Saturday'}
                    </span>
                    <span className="text-gray-600">
                      10:00 AM – 1:00 PM <span className="text-[#FF8500] font-bold">({isMr ? 'कार्यालयीन भेट' : 'In-Office'})</span>
                    </span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="font-semibold text-gray-800">
                      {isMr ? 'प्रभाग पाहणी वेळ' : 'Field Inspection Hours'}
                    </span>
                    <span className="text-gray-600">
                      3:00 PM – 6:00 PM <span className="text-[#168447] font-bold">({isMr ? 'प्रत्यक्ष जागेवर' : 'On-Site'})</span>
                    </span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="font-semibold text-gray-800">
                      {isMr ? 'रविवार' : 'Sunday'}
                    </span>
                    <span className="text-gray-500 italic">
                      {isMr ? 'केवळ आपत्कालीन नागरी कक्ष' : 'Emergency Municipal Desk Only'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
              <div
                onClick={copyPhoneNumber}
                className="flex items-center gap-2 cursor-pointer text-[#168447] hover:underline font-bold"
              >
                <span className="material-symbols-outlined text-[16px]">chat</span>
                <span>WhatsApp: {AKLUJ_INFO.mobile}</span>
                <span className="text-[10px] text-gray-400 font-normal">
                  ({copiedPhone ? (isMr ? 'कॉपी झाले!' : 'Copied!') : (isMr ? 'कॉपी' : 'Copy')})
                </span>
              </div>
              <span className="text-gray-500 text-[11px]">
                {isMr ? 'नागरिक सुलभता केंद्र' : 'Citizen Helpdesk'}
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: DEDICATED DIRECT CONTACT & FEEDBACK FORM */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-200 shadow-lg">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 mx-auto flex items-center justify-center text-[#FF8500] mb-3">
                <span className="material-symbols-outlined text-[24px]">contact_mail</span>
              </div>
              <h3 className="font-headline font-bold text-xl sm:text-2xl text-[#172033]">
                {t('contact.formHeading')}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1.5">
                {t('contact.formSub')}
              </p>
            </div>

            {sentSuccess && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs sm:text-sm flex items-center justify-between gap-3 animate-fade-in">
                <div className="flex items-center gap-2 font-semibold">
                  <span className="material-symbols-outlined text-[#168447] text-[20px]">check_circle</span>
                  <span>{t('contact.sentSuccess')}</span>
                </div>
                <button
                  onClick={() => setSentSuccess(false)}
                  className="text-emerald-600 hover:text-emerald-900 cursor-pointer"
                >
                  ✕
                </button>
              </div>
            )}

            <form onSubmit={handleSendMessage} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    {t('grievance.nameLabel')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#FF8500] text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    {t('grievance.mobileLabel')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={senderPhone}
                    onChange={(e) => setSenderPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#FF8500] text-gray-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    {isMr ? 'ईमेल पत्ता (पर्यायी)' : 'Email Address (Optional)'}
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#FF8500] text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    {isMr ? 'विषय' : 'Subject'} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={isMr ? 'उदा. जलवाहिनी सूचना किंवा भेट' : 'e.g. Civic suggestion or meeting request'}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#FF8500] text-gray-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  {isMr ? 'आपला संदेश किंवा नागरी समस्या' : 'Your Message / Query / Problem'} <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder={
                    isMr
                      ? 'आपला संदेश, प्रभागातील अडचण किंवा सूचना येथे लिहा...'
                      : 'Write your message, problem, or civic feedback clearly...'
                  }
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#FF8500] text-gray-900 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-3.5 rounded-xl bg-[#172033] hover:bg-[#0F1624] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <span className="material-symbols-outlined text-[18px]">send</span>
                <span>{isSending ? (isMr ? 'पाठवत आहे...' : 'Sending...') : t('contact.sendBtn')}</span>
              </button>

              <p className="text-[11px] text-gray-400 text-center mt-2">
                {isMr
                  ? 'आपली माहिती गोपनीय ठेवली जाते व केवळ नागरी सेवेसाठी वापरली जाते.'
                  : 'Your personal information is kept confidential and utilized strictly for civic assistance.'}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
