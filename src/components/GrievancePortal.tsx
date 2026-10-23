import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GrievanceTicket, GrievanceStatus } from '../types';
import { getStoredTickets, saveStoredTickets } from '../data/civicData';

export const GrievancePortal: React.FC = () => {
  const { t, language } = useLanguage();
  const isMr = language === 'mr';

  const [activeTab, setActiveTab] = useState<'register' | 'track'>('register');

  // Form State
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [area, setArea] = useState('Sangam Road');
  const [category, setCategory] = useState('Water supply');
  const [description, setDescription] = useState('');
  const [consent, setConsent] = useState(true);
  const [fileAttachment, setFileAttachment] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newlyCreatedTicket, setNewlyCreatedTicket] = useState<GrievanceTicket | null>(null);

  // Tracking State
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedTicket, setSearchedTicket] = useState<GrievanceTicket | null>(null);
  const [searchNotFound, setSearchNotFound] = useState(false);

  // Receipt Modal State
  const [showReceiptModal, setShowReceiptModal] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initial load of sample ticket for demo showcase if tracking is active
  useEffect(() => {
    const all = getStoredTickets();
    if (all.length > 0 && !searchedTicket) {
      setSearchedTicket(all[0]);
    }
  }, []);

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

  const removeFile = () => {
    setFileAttachment(null);
    setFilePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !mobile.trim() || !description.trim() || !consent) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const newTicketId = `AKL-W8-2025-${randomNum}`;
      const now = new Date();
      const timeStr = `${now.getDate()} ${now.toLocaleString('default', { month: 'short' })} ${now.getFullYear()}, ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

      const newTicket: GrievanceTicket = {
        ticketId: newTicketId,
        name: name.trim(),
        mobile: mobile.trim(),
        area,
        category,
        description: description.trim(),
        timestamp: timeStr,
        status: 'Submitted',
        assignedOfficer: isMr
          ? 'प्रभाग ८ डेस्क तपासणी अंतर्गत'
          : 'Under Secretariat Desk Review',
        progressPercent: 20,
        remarks: isMr
          ? 'तक्रार प्राप्त झाली असून संबंधित विभागास वर्ग केली जात आहे.'
          : 'Complaint registered successfully; queued for field officer assignment.',
        priority: 'Normal',
        photoUrl: filePreview || undefined,
        history: [
          {
            step: 'Grievance Registered',
            stepMr: 'तक्रार नोंदवली',
            time: timeStr,
            done: true,
          },
          {
            step: 'Under Review',
            stepMr: 'प्राथमिक तपासणी',
            time: 'In Queue',
            done: false,
          },
          {
            step: 'Forwarded to Dept',
            stepMr: 'विभागाकडे वर्ग',
            time: 'Pending',
            done: false,
          },
          {
            step: 'Ground Inspection',
            stepMr: 'जागेवर दुरुस्ती',
            time: 'Pending',
            done: false,
          },
          {
            step: 'Resolved',
            stepMr: 'पूर्ण',
            time: 'Pending',
            done: false,
          },
        ],
      };

      const currentTickets = getStoredTickets();
      const updated = [newTicket, ...currentTickets];
      saveStoredTickets(updated);

      setIsSubmitting(false);
      setNewlyCreatedTicket(newTicket);
      setSearchedTicket(newTicket);
      setShowReceiptModal(true);

      // Reset form
      setName('');
      setMobile('');
      setDescription('');
      setFileAttachment(null);
      setFilePreview(null);
    }, 700);
  };

  const handleTrackSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (!query) return;

    const tickets = getStoredTickets();
    const found = tickets.find(
      (t) =>
        t.ticketId.toLowerCase() === query ||
        t.mobile.toLowerCase() === query ||
        t.ticketId.toLowerCase().includes(query)
    );

    if (found) {
      setSearchedTicket(found);
      setSearchNotFound(false);
    } else {
      setSearchNotFound(true);
    }
  };

  const getStatusBadgeColor = (status: GrievanceStatus) => {
    switch (status) {
      case 'Submitted':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/40';
      case 'Under Review':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 'Forwarded to Department':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
      case 'In Progress':
        return 'bg-orange-500/20 text-orange-300 border-orange-500/40';
      case 'Resolved':
      case 'Closed':
        return 'bg-green-500/20 text-green-300 border-green-500/40';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/40';
    }
  };

  const printReceipt = () => {
    window.print();
  };

  return (
    <section
      id="grievance"
      className="w-full py-16 lg:py-24 bg-[#172033] text-white relative overflow-hidden"
    >
      {/* Background Accent Subtle Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF8500]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#168447]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
            <div className="w-8 h-1 bg-[#FF8500] rounded-full"></div>
            <div className="w-4 h-1 bg-[#168447] rounded-full"></div>
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

          {/* Urgent Helpline & WhatsApp Desk Bar */}
          <div className="mt-4 p-3.5 rounded-xl bg-[#1F2C45] border border-[#2D3E5E] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#FF8500] text-[22px]">
                call
              </span>
              <p className="text-gray-300">
                {t('grievance.urgentHelp')}{' '}
                <a
                  className="font-bold text-white underline hover:text-[#FF8500]"
                  href="tel:02185222008"
                >
                  02185-222008
                </a>
              </p>
            </div>
            <a
              className="text-[#168447] hover:text-green-300 font-bold flex items-center gap-1.5 shrink-0 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10"
              href="https://wa.me/919822000008"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>{t('grievance.whatsappDesk')}</span>
              <span className="material-symbols-outlined text-[15px]">open_in_new</span>
            </a>
          </div>
        </div>

        {/* Tab Switcher: Register New vs Track Existing */}
        <div className="mt-8 flex rounded-xl bg-[#0F1624] p-1.5 border border-[#2D3E5E]">
          <button
            onClick={() => setActiveTab('register')}
            className={`flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'register'
                ? 'bg-[#FF8500] text-white shadow-md'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">add_task</span>
            <span>{t('grievance.tabRegister')}</span>
          </button>
          <button
            onClick={() => setActiveTab('track')}
            className={`flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'track'
                ? 'bg-[#168447] text-white shadow-md'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">timeline</span>
            <span>{t('grievance.tabTrack')}</span>
          </button>
        </div>

        {/* TAB 1: REGISTER COMPLAINT */}
        {activeTab === 'register' && (
          <form
            id="citizen-grievance-form"
            className="mt-6 p-6 sm:p-8 rounded-2xl bg-[#1F2C45] border border-[#2D3E5E] space-y-4 shadow-xl"
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
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F1624] border border-[#2D3E5E] text-white text-xs sm:text-sm placeholder-gray-500 focus:outline-none focus:border-[#FF8500] transition-colors"
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
                    className="w-full pl-11 pr-3 py-2.5 rounded-xl bg-[#0F1624] border border-[#2D3E5E] text-white text-xs sm:text-sm placeholder-gray-500 focus:outline-none focus:border-[#FF8500] transition-colors"
                    placeholder={t('grievance.mobilePlaceholder')}
                    required
                    type="tel"
                    pattern="[0-9]{10}"
                    title="Please enter a 10 digit mobile number"
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
                  className="w-full px-3 py-2.5 rounded-xl bg-[#0F1624] border border-[#2D3E5E] text-white text-xs sm:text-sm focus:outline-none focus:border-[#FF8500] transition-colors"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                >
                  <option value="Sangam Road">{isMr ? 'संगम रस्ता (Sangam Road)' : 'Sangam Road'}</option>
                  <option value="Shastri Nagar">{isMr ? 'शास्त्री नगर (Shastri Nagar)' : 'Shastri Nagar'}</option>
                  <option value="Sector 4">{isMr ? 'सेक्टर ४ (Sector 4)' : 'Sector 4'}</option>
                  <option value="Market Colony">{isMr ? 'मार्केट कॉलनी / भाजी मंडई' : 'Market Colony'}</option>
                  <option value="Old Gaothan">{isMr ? 'जुने गावठाण परिसर' : 'Old Gaothan'}</option>
                  <option value="Malshiras Bypass Link">{isMr ? 'माळशिरस बायपास लिंक' : 'Malshiras Bypass Link'}</option>
                  <option value="Other Area (Ward 8)">{isMr ? 'इतर परिसर (प्रभाग क्र. ८ अकलूज)' : 'Other Area (Ward 8)'}</option>
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
                  className="w-full px-3 py-2.5 rounded-xl bg-[#0F1624] border border-[#2D3E5E] text-white text-xs sm:text-sm focus:outline-none focus:border-[#FF8500] transition-colors"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="Road damage">{isMr ? 'रस्ता खड्डे व नुकसान (Road damage)' : 'Road damage'}</option>
                  <option value="Water supply">{isMr ? 'पाणीपुरवठा व गळती (Water supply)' : 'Water supply'}</option>
                  <option value="Drainage problems">{isMr ? 'सांडपाणी व गटार समस्या (Drainage)' : 'Drainage problems'}</option>
                  <option value="Garbage collection">{isMr ? 'कचरा संकलन व स्वच्छता (Garbage)' : 'Garbage collection'}</option>
                  <option value="Street lights">{isMr ? 'पथदिवे व वीज समस्या (Street lights)' : 'Street lights'}</option>
                  <option value="Public infrastructure">{isMr ? 'सार्वजनिक पायाभूत सुविधा' : 'Public infrastructure'}</option>
                  <option value="Other civic issues">{isMr ? 'इतर नागरी समस्या (Other civic issues)' : 'Other civic issues'}</option>
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
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F1624] border border-[#2D3E5E] text-white text-xs sm:text-sm placeholder-gray-500 focus:outline-none focus:border-[#FF8500] transition-colors resize-none"
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
                className="p-4 border-2 border-dashed border-[#2D3E5E] rounded-xl hover:border-[#FF8500] transition-colors text-center cursor-pointer bg-[#0F1624]/60"
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  ref={fileInputRef}
                  accept="image/*"
                  className="hidden"
                  type="file"
                  onChange={handleFileChange}
                />
                {fileAttachment ? (
                  <div className="flex items-center justify-between gap-3 text-left">
                    <div className="flex items-center gap-2 text-xs text-gray-200">
                      <span className="material-symbols-outlined text-[#168447] text-[20px]">
                        check_circle
                      </span>
                      <span className="truncate max-w-[200px]">
                        {fileAttachment.name}
                      </span>
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
                      add_a_photo
                    </span>
                    <p className="text-xs text-gray-300">
                      {t('grievance.dragDrop')}
                      <span className="text-[#FF8500] font-semibold underline">
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

            {/* Consent Checkbox */}
            <div className="flex items-start gap-2.5 pt-1">
              <input
                id="grievance-consent-checkbox"
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 rounded text-[#FF8500] focus:ring-[#FF8500]"
                required
              />
              <label
                htmlFor="grievance-consent-checkbox"
                className="text-[11px] sm:text-xs text-gray-300 cursor-pointer"
              >
                {t('grievance.consentLabel')}
              </label>
            </div>

            <button
              id="submit-grievance-btn"
              className="w-full py-3.5 rounded-xl bg-[#FF8500] hover:bg-[#DE7200] text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              disabled={isSubmitting || !consent}
              type="submit"
            >
              <span className="material-symbols-outlined text-[20px]">send</span>
              <span>
                {isSubmitting
                  ? t('grievance.submitting')
                  : t('grievance.submitBtn')}
              </span>
            </button>
          </form>
        )}

        {/* TAB 2: TRACK GRIEVANCE STATUS */}
        {activeTab === 'track' && (
          <div className="mt-6 space-y-6">
            {/* Search Bar */}
            <form
              onSubmit={handleTrackSearch}
              className="p-4 rounded-2xl bg-[#1F2C45] border border-[#2D3E5E] flex flex-col sm:flex-row gap-3 shadow-md"
            >
              <div className="relative flex-1">
                <span className="material-symbols-outlined absolute left-3.5 top-3 text-gray-400 text-[20px]">
                  search
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('grievance.trackPlaceholder')}
                  className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-[#0F1624] border border-[#2D3E5E] text-white text-xs sm:text-sm placeholder-gray-500 focus:outline-none focus:border-[#168447]"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-[#168447] hover:bg-[#106335] text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{t('grievance.searchBtn')}</span>
              </button>
            </form>

            {searchNotFound && (
              <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs text-center">
                {isMr
                  ? 'या क्रमांकाची तक्रार आढळली नाही. कृपया टोकन क्रमांक (उदा. AKL-W8-2025-0842) तपासून पुन्हा प्रयत्न करा.'
                  : 'No grievance ticket found for this query. Please check reference ID and retry.'}
              </div>
            )}

            {/* Ticket Progress Card */}
            {searchedTicket && (
              <div className="p-6 sm:p-8 rounded-2xl bg-[#1F2C45] border border-[#2D3E5E] shadow-xl space-y-6">
                {/* Header with ID & Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#2D3E5E] gap-3">
                  <div>
                    <span className="text-[11px] font-mono text-gray-400">
                      OFFICIAL TICKET REFERENCE
                    </span>
                    <h3 className="font-headline font-bold text-xl text-white flex items-center gap-2 mt-0.5">
                      <span>{searchedTicket.ticketId}</span>
                      <button
                        onClick={() => navigator.clipboard.writeText(searchedTicket.ticketId)}
                        title="Copy Ticket ID"
                        className="text-xs text-gray-400 hover:text-white"
                      >
                        <span className="material-symbols-outlined text-[16px]">content_copy</span>
                      </button>
                    </h3>
                    <p className="text-xs text-gray-300 mt-1">
                      {searchedTicket.name} • {searchedTicket.area}, Akluj
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1.5 rounded-xl border text-xs font-bold ${getStatusBadgeColor(
                        searchedTicket.status
                      )}`}
                    >
                      {searchedTicket.status}
                    </span>
                    <button
                      onClick={() => setShowReceiptModal(true)}
                      className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-gray-200 flex items-center gap-1 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">print</span>
                      <span>{isMr ? 'पावती' : 'Receipt'}</span>
                    </button>
                  </div>
                </div>

                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between text-xs text-gray-300 mb-1.5">
                    <span>{isMr ? 'निवारण प्रगती' : 'Resolution SLA Progress'}</span>
                    <span className="font-mono font-bold text-[#FF8500]">
                      {searchedTicket.progressPercent}%
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#0F1624] overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#FF8500] to-[#168447] transition-all duration-500 rounded-full"
                      style={{ width: `${searchedTicket.progressPercent}%` }}
                    ></div>
                  </div>
                </div>

                {/* Lifecycle Stepper */}
                <div className="space-y-3 pt-2">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    {isMr ? 'तक्रार निवारण टप्पे (Timeline)' : 'Grievance Progression Timeline:'}
                  </p>
                  <div className="space-y-2.5">
                    {(searchedTicket.history || [
                      { step: 'Grievance Registered', stepMr: 'तक्रार नोंदवली', time: searchedTicket.timestamp, done: true },
                      { step: 'Under Review', stepMr: 'प्राथमिक तपासणी', time: 'Completed', done: true },
                      { step: 'Forwarded to Dept', stepMr: 'विभागाकडे वर्ग', time: 'In Progress', done: true },
                      { step: 'Ground Inspection', stepMr: 'जागेवर दुरुस्ती', time: 'Active', done: false },
                      { step: 'Resolved', stepMr: 'पूर्ण', time: 'Pending', done: false },
                    ]).map((h, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl border flex items-center justify-between text-xs ${
                          h.done
                            ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-200'
                            : 'bg-[#0F1624]/60 border-[#2D3E5E] text-gray-400'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${
                              h.done
                                ? 'bg-[#168447] text-white'
                                : 'bg-gray-700 text-gray-300'
                            }`}
                          >
                            {h.done ? '✓' : idx + 1}
                          </span>
                          <span className={h.done ? 'font-semibold text-white' : ''}>
                            {isMr ? h.stepMr : h.step}
                          </span>
                        </div>
                        <span className="font-mono text-[11px]">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Assigned Details & Remarks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-[#2D3E5E] text-xs">
                  <div>
                    <span className="text-gray-400 block mb-1">
                      {t('grievance.assignedTo')}:
                    </span>
                    <p className="font-semibold text-gray-200">
                      {searchedTicket.assignedOfficer || 'Junior Ward Engineer (Civil)'}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-400 block mb-1">
                      {t('grievance.remarks')}:
                    </span>
                    <p className="font-semibold text-amber-300">
                      {searchedTicket.remarks || 'Under active municipal supervision.'}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Official Grievance Receipt Modal */}
      {showReceiptModal && searchedTicket && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fade-in text-gray-900"
          onClick={() => setShowReceiptModal(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-200 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b pb-3 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-[#FF8500]">
                  <span className="material-symbols-outlined text-[24px]">verified</span>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-base text-gray-900">
                    {isMr ? 'अधिकृत नागरी तक्रार पावती' : 'Official Civic Grievance Receipt'}
                  </h4>
                  <p className="text-[11px] text-gray-500">
                    Akluj Nagar Parishad • Ward No. 8
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowReceiptModal(false)}
                className="text-gray-400 hover:text-gray-700 text-lg cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs border p-4 rounded-xl bg-gray-50 font-mono mb-4">
              <div className="flex justify-between">
                <span className="text-gray-500">Receipt / Token ID:</span>
                <span className="font-bold text-[#FF8500]">{searchedTicket.ticketId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Complainant:</span>
                <span className="font-bold text-gray-800">{searchedTicket.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Mobile:</span>
                <span className="text-gray-800">+91 {searchedTicket.mobile}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Category:</span>
                <span className="text-gray-800">{searchedTicket.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Ward Locality:</span>
                <span className="text-gray-800">{searchedTicket.area}, Akluj</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Timestamp:</span>
                <span className="text-gray-800">{searchedTicket.timestamp}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Initial Status:</span>
                <span className="font-bold text-[#168447]">{searchedTicket.status}</span>
              </div>
            </div>

            <p className="text-[11px] text-gray-500 italic mb-5 leading-relaxed">
              {isMr
                ? 'ही अधिकृत संगणकीय पावती असून आपल्या तक्रारीची चौकशी २४ तासांत सुरू केली जाईल. तक्रार स्थिती जाणून घेण्यासाठी हा टोकन क्रमांक जतन करा.'
                : 'This is an official computer-generated receipt. Field verification will commence within 24 hours. Retain this reference ID for tracking.'}
            </p>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={printReceipt}
                className="px-4 py-2 rounded-xl bg-[#172033] text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer hover:bg-black"
              >
                <span className="material-symbols-outlined text-[16px]">print</span>
                <span>{isMr ? 'प्रिंट / सेव्ह करा' : 'Print / Save PDF'}</span>
              </button>
              <button
                onClick={() => setShowReceiptModal(false)}
                className="px-4 py-2 rounded-xl bg-gray-200 text-gray-700 text-xs font-semibold cursor-pointer hover:bg-gray-300"
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
