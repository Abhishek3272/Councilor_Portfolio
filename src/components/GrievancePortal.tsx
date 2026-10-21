import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const GrievancePortal: React.FC = () => {
  const { t, language } = useLanguage();
  const isMr = language === 'mr';

  // Form State
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [area, setArea] = useState('Shastri Nagar');
  const [category, setCategory] = useState('Water Supply & Leakage');
  const [description, setDescription] = useState('');
  const [fileAttachment, setFileAttachment] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileAttachment(file);
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFilePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setFilePreview(null);
      }
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFileAttachment(file);
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFilePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setFilePreview(null);
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const removeFile = () => {
    setFileAttachment(null);
    setFilePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !mobile.trim() || !description.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const newTicketId = `W8-GRV-2025-${randomNum}`;

      setIsSubmitting(false);
      setSuccessMessage(
        isMr
          ? `आपली तक्रार यशस्वीरीत्या नोंदवली गेली आहे! अधिकृत तक्रार क्रमांक: ${newTicketId}. ही तक्रार प्रभाग क्र. ८ महापालिका देखभाल कक्षाकडे त्वरित कारवाईसाठी पाठवण्यात आली आहे.`
          : `Grievance logged successfully! Your Official Ticket ID is ${newTicketId}. A confirmation receipt has been generated and forwarded to the Ward 8 Maintenance Desk.`
      );

      // Reset form
      setName('');
      setMobile('');
      setDescription('');
      setFileAttachment(null);
      setFilePreview(null);
    }, 600);
  };

  return (
    <section
      id="grievance"
      className="w-full py-16 lg:py-24 bg-[#0F172A] text-white relative overflow-hidden"
    >
      {/* Background Accent Subtle Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF7A00]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#08783A]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-1 bg-[#FF7A00] rounded-full"></div>
            <div className="w-4 h-1 bg-[#08783A] rounded-full"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
              {t('grievance.label')}
            </span>
          </div>
          <h2 className="font-headline font-bold text-2xl sm:text-3xl lg:text-4xl text-white">
            {t('grievance.heading')}
          </h2>
          <p className="text-sm text-gray-300 mt-2 max-w-2xl leading-relaxed">
            {t('grievance.subtitle')}
          </p>

          {/* Direct Urgent Helpline Pill */}
          <div className="mt-4 p-3.5 rounded-xl bg-[#1E293B] border border-[#334155] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#FF7A00] text-[22px]">call</span>
              <p className="text-xs text-gray-300">
                {t('grievance.urgentHelp')}{' '}
                <a
                  className="font-bold text-white underline hover:text-[#FF7A00]"
                  href="tel:02028450008"
                >
                  020-2845-0008
                </a>
              </p>
            </div>
            <a
              className="text-xs text-[#08783A] hover:text-green-300 font-semibold flex items-center gap-1.5 shrink-0"
              href="https://wa.me/919822000008"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>{t('grievance.whatsappDesk')}</span>
              <span className="material-symbols-outlined text-[15px]">open_in_new</span>
            </a>
          </div>
        </div>

        {/* Success Banner */}
        {successMessage && (
          <div
            id="grievance-success-banner"
            className="mt-6 p-4 rounded-xl bg-green-950/80 border border-green-500/50 text-green-200 text-xs sm:text-sm flex items-start justify-between gap-3 animate-fade-in"
          >
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-[#08783A] text-[20px] shrink-0 mt-0.5">
                check_circle
              </span>
              <span>{successMessage}</span>
            </div>
            <button
              className="text-green-300 hover:text-white cursor-pointer"
              onClick={() => setSuccessMessage(null)}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        )}

        {/* Registration Form Container */}
        <form
          id="citizen-grievance-form"
          className="mt-6 p-6 sm:p-8 rounded-2xl bg-[#1E293B] border border-[#334155] space-y-4"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="grievance-name-input"
                className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5"
              >
                {t('grievance.nameLabel')} <span className="text-red-400">*</span>
              </label>
              <input
                id="grievance-name-input"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#334155] text-white text-xs sm:text-sm placeholder-gray-500 focus:outline-none focus:border-[#FF7A00] transition-colors"
                placeholder={t('grievance.namePlaceholder')}
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="grievance-mobile-input"
                className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5"
              >
                {t('grievance.mobileLabel')} <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-xs text-gray-400 font-mono">
                  +91
                </span>
                <input
                  id="grievance-mobile-input"
                  className="w-full pl-11 pr-3 py-2.5 rounded-xl bg-[#0F172A] border border-[#334155] text-white text-xs sm:text-sm placeholder-gray-500 focus:outline-none focus:border-[#FF7A00] transition-colors"
                  placeholder={t('grievance.mobilePlaceholder')}
                  required
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="grievance-area-select"
                className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5"
              >
                {t('grievance.areaLabel')} <span className="text-red-400">*</span>
              </label>
              <select
                id="grievance-area-select"
                className="w-full px-3 py-2.5 rounded-xl bg-[#0F172A] border border-[#334155] text-white text-xs sm:text-sm focus:outline-none focus:border-[#FF7A00] transition-colors"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              >
                <option value="Shastri Nagar">{isMr ? 'शास्त्री नगर' : 'Shastri Nagar'}</option>
                <option value="Sector 4">{isMr ? 'सेक्टर ४' : 'Sector 4'}</option>
                <option value="Market Colony">{isMr ? 'मार्केट कॉलनी' : 'Market Colony'}</option>
                <option value="Railway Border Area">{isMr ? 'रेल्वे सीमा परिसर' : 'Railway Border Area'}</option>
                <option value="Old Gaothan">{isMr ? 'जुने गावठाण' : 'Old Gaothan'}</option>
                <option value="Other Area (Ward 8)">{isMr ? 'इतर परिसर (प्रभाग क्र. ८)' : 'Other Area (Ward 8)'}</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="grievance-category-select"
                className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5"
              >
                {t('grievance.catLabel')} <span className="text-red-400">*</span>
              </label>
              <select
                id="grievance-category-select"
                className="w-full px-3 py-2.5 rounded-xl bg-[#0F172A] border border-[#334155] text-white text-xs sm:text-sm focus:outline-none focus:border-[#FF7A00] transition-colors"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Water Supply & Leakage">{isMr ? 'पाणीपुरवठा व गळती' : 'Water Supply & Leakage'}</option>
                <option value="Roads & Potholes">{isMr ? 'रस्ते व खड्डे दुरुस्ती' : 'Roads & Potholes'}</option>
                <option value="Drainage & Sewage">{isMr ? 'गटार व सांडपाणी समस्या' : 'Drainage & Sewage'}</option>
                <option value="Street Lights">{isMr ? 'पथदिवे (स्ट्रीट लाईट)' : 'Street Lights'}</option>
                <option value="Sanitation & Garbage">{isMr ? 'कचरा व परिसर स्वच्छता' : 'Sanitation & Garbage'}</option>
                <option value="Encroachment & Others">{isMr ? 'अतिक्रमण व इतर नागरी समस्या' : 'Encroachment & Others'}</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="grievance-description-input"
              className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5"
            >
              {t('grievance.descLabel')} <span className="text-red-400">*</span>
            </label>
            <textarea
              id="grievance-description-input"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#334155] text-white text-xs sm:text-sm placeholder-gray-500 focus:outline-none focus:border-[#FF7A00] transition-colors resize-none"
              placeholder={t('grievance.descPlaceholder')}
              required
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          {/* Photo / Evidence Upload */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
              {t('grievance.attachLabel')}
            </label>
            <div
              id="grievance-dropzone"
              className="p-4 border-2 border-dashed border-[#334155] rounded-xl hover:border-[#FF7A00] transition-colors text-center cursor-pointer bg-[#0F172A]/50"
              onClick={() => fileInputRef.current?.click()}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <input
                ref={fileInputRef}
                accept="image/*,.pdf"
                className="hidden"
                type="file"
                onChange={handleFileChange}
              />
              {fileAttachment ? (
                <div className="flex items-center justify-between gap-3 text-left">
                  <div className="flex items-center gap-2 text-xs text-gray-200">
                    <span className="material-symbols-outlined text-[#08783A] text-[20px]">
                      attach_file
                    </span>
                    <span className="truncate max-w-[200px]">{fileAttachment.name}</span>
                    <span className="text-[10px] text-gray-400">
                      ({(fileAttachment.size / 1024).toFixed(1)} KB)
                    </span>
                  </div>
                  <button
                    className="text-xs text-red-400 hover:text-red-300 underline cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile();
                    }}
                    type="button"
                  >
                    {isMr ? 'काढून टाका' : 'Remove'}
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-1">
                  <span className="material-symbols-outlined text-gray-400 text-[24px] mb-1">
                    add_photo_alternate
                  </span>
                  <p className="text-xs text-gray-300">
                    {t('grievance.dragDrop')}
                    <span className="text-[#FF7A00] font-semibold underline">
                      {t('grievance.browse')}
                    </span>
                  </p>
                  <p className="text-[10px] text-gray-500 mt-0.5">
                    {isMr ? 'JPG, PNG १०MB पर्यंत समर्थित' : 'Supports JPG, PNG up to 10MB'}
                  </p>
                </div>
              )}
            </div>
          </div>

          <button
            id="submit-grievance-btn"
            className="w-full py-3 rounded-xl bg-[#FF7A00] hover:bg-[#E66B00] text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
            disabled={isSubmitting}
            type="submit"
          >
            <span className="material-symbols-outlined text-[20px]">send</span>
            <span>
              {isSubmitting ? t('grievance.submitting') : t('grievance.submitBtn')}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};
