import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const SecretariatContact: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const { t, language } = useLanguage();
  const isMr = language === 'mr';

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText('+91 9822000008');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section
      id="contact"
      className="w-full py-16 lg:py-24 bg-[#F8F9FA] border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-1 bg-[#FF7A00] rounded-full"></div>
              <div className="w-4 h-1 bg-[#08783A] rounded-full"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E66B00]">
                {t('contact.label')}
              </span>
            </div>
            <h2 className="font-headline font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900">
              {t('contact.heading')}
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-2xl">
              {t('contact.subtitle')}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span
              id="citizen-walkin-badge"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-gray-700 text-xs font-semibold shadow-sm"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#08783A] animate-pulse"></span>
              {isMr ? 'नागरिकांसाठी पूर्वपरवानगीशिवाय थेट भेट' : 'Citizens Welcome Without Prior Appointment'}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Contact Details & Office Timings */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            {/* Address Card */}
            <div
              id="secretariat-address-card"
              className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-[#FF7A00] shrink-0">
                  <span className="material-symbols-outlined text-[26px]">location_city</span>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E66B00]">
                    {isMr ? 'कार्यालय पत्ता' : 'Ward Secretariat Address'}
                  </span>
                  <h3 className="font-headline font-bold text-base sm:text-lg text-gray-900 mt-1">
                    {t('contact.officeAddr1')}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                    {t('contact.officeAddr2')},
                    <br />
                    {t('contact.officeAddr3')}
                  </p>
                  <p className="text-xs text-gray-500 mt-2 font-mono flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px] text-[#08783A]">
                      my_location
                    </span>
                    GPS: 18.5204° N, 73.8567° E
                  </p>
                </div>
              </div>
            </div>

            {/* Timings Card */}
            <div
              id="secretariat-timings-card"
              className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-[#08783A] shrink-0">
                  <span className="material-symbols-outlined text-[26px]">schedule</span>
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#08783A]">
                    {t('contact.hoursTitle')}
                  </span>
                  <h3 className="font-headline font-bold text-base text-gray-900 mt-1">
                    {isMr ? 'नागरिक भेट व प्रभाग पाहणी वेळ' : 'Public Consultation Hours'}
                  </h3>

                  <div className="mt-3 space-y-2 text-xs sm:text-sm text-gray-700">
                    <div className="flex justify-between py-1.5 border-b border-gray-100">
                      <span className="font-semibold text-gray-800">
                        {isMr ? 'सोमवार ते शनिवार' : 'Monday to Saturday'}
                      </span>
                      <span className="text-gray-600">
                        10:00 AM – 1:00 PM <span className="text-[#E66B00] font-bold">({isMr ? 'कार्यालयीन भेट' : 'In-Office'})</span>
                      </span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-gray-100">
                      <span className="font-semibold text-gray-800">
                        {isMr ? 'प्रभाग पाहणी वेळ' : 'Field Inspection Hours'}
                      </span>
                      <span className="text-gray-600">
                        3:00 PM – 6:00 PM <span className="text-[#08783A] font-bold">({isMr ? 'प्रत्यक्ष जागेवर' : 'On-Site'})</span>
                      </span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="font-semibold text-gray-800">
                        {isMr ? 'रविवार' : 'Sunday'}
                      </span>
                      <span className="text-gray-500 italic">
                        {isMr ? 'केवळ आपत्कालीन महापालिका सेवा' : 'Emergency Municipal Desk Only'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Channels Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                id="phone-helpline-box"
                className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-[#FF7A00] transition-colors flex items-center gap-3"
                href="tel:02028450008"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-50 text-[#FF7A00] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase font-bold text-gray-400">
                    {isMr ? 'कार्यालय दूरध्वनी' : 'Ward Office Line'}
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-gray-900 truncate">
                    +91 020-2845-0008
                  </p>
                </div>
              </a>

              <div
                id="whatsapp-helpline-box"
                className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-[#08783A] transition-colors flex items-center justify-between gap-3 cursor-pointer"
                onClick={copyPhoneNumber}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-green-50 text-[#08783A] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase font-bold text-gray-400">
                      {isMr ? 'व्हॉट्सॲप तक्रार कक्ष' : 'WhatsApp Grievance'}
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-[#08783A] truncate">
                      +91 98220-00008
                    </p>
                  </div>
                </div>
                <span className="text-[11px] text-gray-400 hover:text-gray-700 underline shrink-0">
                  {copiedPhone ? (isMr ? 'कॉपी झाले!' : 'Copied!') : (isMr ? 'कॉपी करा' : 'Copy')}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Ward Jurisdiction Map Demarcation */}
          <div className="lg:col-span-6 flex flex-col">
            <div
              id="ward-jurisdiction-map-card"
              className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col h-full justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#FF7A00]">map</span>
                    <h3 className="font-headline font-bold text-base sm:text-lg text-gray-900">
                      {t('contact.mapTitle')}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    {isMr ? 'अधिकृत प्रभाग सीमांकन' : 'Electoral Ward Demarcation'}
                  </span>
                </div>
                <p className="text-xs text-gray-600 mb-4">
                  {t('contact.mapSub')}
                </p>

                {/* Styled Interactive SVG Map Mockup */}
                <div className="relative w-full aspect-16/10 rounded-xl overflow-hidden bg-slate-900 border border-gray-300 p-4 flex flex-col justify-between text-white shadow-inner">
                  {/* Subtle Gridlines */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

                  {/* Top Bar with Boundaries */}
                  <div className="relative z-10 flex justify-between items-center text-[11px] text-gray-300 font-mono">
                    <span className="px-2 py-0.5 rounded bg-white/10 backdrop-blur-xs">
                      {isMr ? 'उत्तर: रेल्वे उड्डाणपूल' : 'North: Railway Flyover Line'}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/10 backdrop-blur-xs">
                      {isMr ? 'दक्षिण: मुख्य कॅनॉल रस्ता' : 'South: Main Canal Road'}
                    </span>
                  </div>

                  {/* Center Node Representation */}
                  <div className="relative z-10 my-auto text-center space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#08783A]/90 border border-green-400/40 text-xs font-bold text-white shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                      <span>{isMr ? 'प्रभाग क्र. ८ मध्यवर्ती प्रशासकीय संकुल' : 'Ward 8 Central Administrative Complex'}</span>
                    </div>
                    <p className="text-[11px] text-gray-300 font-sans">
                      {isMr ? 'शास्त्री नगर • सेक्टर ४ • मार्केट कॉलनी • जुने गावठाण' : 'Shastri Nagar • Sector 4 • Market Colony • Old Gaothan'}
                    </p>
                  </div>

                  {/* Bottom Map Legend */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] text-gray-400 pt-2 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-[#FF7A00]"></span>
                        <span>{isMr ? 'महापालिका कार्यालय' : 'Ward Office'}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-[#08783A]"></span>
                        <span>{isMr ? 'पाणी साठा केंद्र' : 'Jal Seva Center'}</span>
                      </span>
                    </div>
                    <span className="font-mono">{isMr ? 'क्षेत्र: ४.२ चौ.किमी' : 'Area: 4.2 Sq. Km'}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Link */}
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-gray-500">
                  {isMr ? 'अधिकृत ईमेल:' : 'Official Email:'}{' '}
                  <a className="text-[#FF7A00] font-semibold hover:underline" href="mailto:ward8.office@municipalgov.in">
                    ward8.office@municipalgov.in
                  </a>
                </span>
                <a
                  className="font-bold text-[#08783A] hover:underline flex items-center gap-1"
                  href="tel:02028450008"
                >
                  <span>{isMr ? 'थेट फोन करा' : 'Direct Call'}</span>
                  <span className="material-symbols-outlined text-[14px]">call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
