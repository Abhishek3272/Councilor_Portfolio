import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AKLUJ_INFO } from '../data/civicData';

interface ChatMessage {
  sender: 'ai' | 'user';
  text: string;
  time: string;
}

export const AICivicAssistant: React.FC = () => {
  const { t, language } = useLanguage();
  const isMr = language === 'mr';

  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'ai',
      text: isMr
        ? 'नमस्कार! मी प्रभाग क्र. ८ चा डिजिटल AI नागरी मित्र आहे. पाणीपुरवठा, रस्त्यांचे खड्डे, विकासकामे किंवा नगरसेवक भेट वेळापत्रकाविषयी विचारा.'
        : 'Namaskar! I am your Akluj Ward No. 8 Civic AI Mitra. Ask me about drinking water timings, pothole reporting, development projects, or meeting Councillor Mahesh Shinde.',
      time: 'Just now',
    },
  ]);

  const quickQuestions = isMr
    ? [
        'पाणीपुरवठ्याची वेळ काय आहे?',
        'रस्त्याच्या खड्ड्याची तक्रार कशी करावी?',
        'नगरसेवकांना कधी भेटता येईल?',
        'शास्त्री नगर रस्त्याचे काम कधी पूर्ण होईल?',
      ]
    : [
        'What are the water supply timings?',
        'How do I lodge a pothole complaint?',
        'When can I meet the Councillor?',
        'When will Shastri Nagar road finish?',
      ];

  const getAIResponse = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes('water') || q.includes('पाणी')) {
      return isMr
        ? 'सेक्टर ४ व मध्यवर्ती भागात रोज सकाळी ६:०० ते ८:३० आणि संध्याकाळी ६:३० ते ८:०० नियमित पाणीपुरवठा होतो. २४ ऑक्टोबर रोजी दुरुस्तीमुळे दु. १ ते ६ बंद राहील; आपत्कालीन टँकरसाठी ०२१८५-२२२००८ वर संपर्क करा.'
        : 'Daily water supply in Sector 4 and Central Market is between 6:00 AM - 8:30 AM and 6:30 PM - 8:00 PM. Notice: 24th Oct has scheduled maintenance 1-6 PM. Emergency tanker hotline is 02185-222008.';
    }

    if (q.includes('pothole') || q.includes('खड्ड') || q.includes('तक्रार') || q.includes('complaint')) {
      return isMr
        ? 'आपण याच पोर्टलवरील "तक्रार निवारण" विभागात जाऊन फक्त २ मिनिटांत ऑनलाईन तक्रार नोंदवू शकता. तक्रार नोंदवल्यावर २४ तासांत कनिष्ठ अभियंता जागेवर जाऊन पाहणी करतात.'
        : 'You can submit a grievance directly on this portal under the "Grievance Redressal" tab in under 2 minutes. Our junior civil engineer inspects the site within 24 hours under our verified SLA.';
    }

    if (q.includes('meet') || q.includes('भेट') || q.includes('office') || q.includes('कार्यालय') || q.includes('time')) {
      return isMr
        ? 'नगरसेवक महेश केशव शिंदे संगम चौक येथील जनसंपर्क कार्यालयात सोमवार ते शनिवार सकाळी १०:०० ते दुपारी १:०० या वेळेत नागरिकांसाठी पूर्वपरवानगीशिवाय (विना-अपॉइंटमेंट) उपलब्ध असतात. संध्याकाळी ३ ते ६ प्रत्यक्ष प्रभाग पाहणी असते.'
        : 'Councillor Mahesh Keshav Shinde is available for citizen walk-in consultations without prior appointment from Monday to Saturday between 10:00 AM and 1:00 PM at Ward 8 Secretariat near Sangam Chowk, Akluj.';
    }

    if (q.includes('shastri') || q.includes('road') || q.includes('रस्ता') || q.includes('work') || q.includes('काम')) {
      return isMr
        ? 'शास्त्री नगर गल्ली ३ ते ७ मधील १,२०० मीटर सिमेंट काँक्रीट रस्ता व आरसीसी बॉक्स गटाराचे ₹६८.२० लाखांचे काम सुरू असून पावसाळ्यापूर्वी ३० मे २०२५ पर्यंत पूर्ण करण्याचे उद्दिष्ट आहे.'
        : 'The ₹68.20 Lakh cement concrete road and RCC stormwater drain project in Shastri Nagar (Lanes 3 to 7) is under active execution with a pre-monsoon target of May 2025.';
    }

    return isMr
      ? `आपल्या प्रश्नाबद्दल धन्यवाद. अधिक माहितीसाठी आपण प्रभाग ८ जनसंपर्क कार्यालयास ०२१८५-२२२००८ वर थेट संपर्क करू शकता किंवा खालील फॉर्मद्वारे मेसेज पाठवू शकता.`
      : `Thank you for your question. For detailed municipal queries, please contact the Ward 8 Secretariat at 02185-222008 or WhatsApp 98220 00008.`;
  };

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      sender: 'user',
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      const reply = getAIResponse(text);
      const aiMsg: ChatMessage = {
        sender: 'ai',
        text: reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 450);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#FF8500] to-[#168447] text-white shadow-2xl hover:shadow-orange-500/25 hover:scale-105 active:scale-95 transition-all font-bold text-xs border border-white/20 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">smart_toy</span>
          <span>{isMr ? 'AI नागरी मित्र' : 'AI Civic Mitra'}</span>
          <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
        </button>
      </div>

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] h-[480px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-fade-in text-gray-900">
          {/* Header */}
          <div className="px-4 py-3.5 bg-[#172033] text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#FF8500] flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-[18px]">smart_toy</span>
              </div>
              <div>
                <h4 className="font-headline font-bold text-sm text-white">
                  {t('ai.title')}
                </h4>
                <p className="text-[10px] text-emerald-400">● 24/7 Ward Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white cursor-pointer text-sm"
            >
              ✕
            </button>
          </div>

          {/* Quick Prompt Chips */}
          <div className="p-2.5 bg-orange-50/60 border-b border-orange-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {quickQuestions.map((qq, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(qq)}
                className="px-2.5 py-1 rounded-full bg-white border border-orange-200 text-[#FF8500] hover:bg-orange-100 text-[11px] font-semibold whitespace-nowrap cursor-pointer transition-colors"
              >
                {qq}
              </button>
            ))}
          </div>

          {/* Message List */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-[#FFFCF7] text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  m.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`p-3 rounded-xl max-w-[85%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#172033] text-white rounded-br-none'
                      : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-xs'
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-[9px] text-gray-400 mt-1 px-1">{m.time}</span>
              </div>
            ))}
          </div>

          {/* Input Footer */}
          <div className="p-2.5 bg-white border-t border-gray-200 flex items-center gap-2">
            <input
              type="text"
              placeholder={t('ai.placeholder')}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 px-3 py-2 rounded-xl border border-gray-300 text-xs focus:outline-none focus:border-[#FF8500]"
            />
            <button
              onClick={() => handleSend()}
              className="w-8 h-8 rounded-xl bg-[#FF8500] hover:bg-[#DE7200] text-white flex items-center justify-center cursor-pointer transition-colors shrink-0"
            >
              <span className="material-symbols-outlined text-[16px]">send</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
