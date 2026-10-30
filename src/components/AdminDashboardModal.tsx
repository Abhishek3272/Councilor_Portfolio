import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GrievanceTicket, GrievanceStatus, WorkItem, NewsItem } from '../types';
import {
  getStoredTickets,
  saveStoredTickets,
  getStoredWorks,
  saveStoredWorks,
  getStoredNews,
  saveStoredNews,
} from '../data/civicData';

interface AdminDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDataUpdated?: () => void;
}

const IMAGE_PRESETS = [
  {
    label: '💧 Water Works',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-Fo-Z_2RXi0eddJp1fb3n9q1wp8npMoMngGnqmPxJpKJ3FPDmf4cLh5K1iKBiBusp0bQuPEYg5vFHubA0lJWy_UYPokBA4v2bnALl1KTopHs-sdiybBc7abbh1ArMRnnx9RFJnQQKbeH_EAo9j4p3o6OvVVL3IssykYgSRQ1pdhQQjiNkyKImO-ZSOTWZp6eBH10-u0t-Un9oJL90Zg31zZViH71QiUAI-93doUOs0hwU5mgHwVVDRA',
  },
  {
    label: '🛣️ Road & Drain',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWU8LBZ-p4hyeHgcjUjM3PH1a1o4zqFLo4YhqmZyy9Z9mPR0F2phhoQHpSACKkViAQt23g4hsxUyshPedpMwl4E5-qIpo0lCoUZsPDujf9P1-gIOmgfH86N8VmQdwzeYvXNKUzOfeZiVLlF_FQbgHFWCPbTDx7gdLmXDeD_yvdPDVLqCEnqZQCbzd_EOU3M3-wQcsSgCFqWzG759x4rViKkz4KgVww-S2kMfHnZJK3WOZCIf304yLPiA',
  },
  {
    label: '💡 Smart Lighting',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzo8ipgnMdvvmE1cfl0beOkvPtDFVBxbQ9jdgOU5tBAhGYHkjxRSB1jLzYTfWgPz17puFj2Am6mwD01v0pmqwnwoTIChEWfBaYfTidjQKTHuRAaafvtwlYuXMeCouOQX7fsdBbgd8hUgj2YAMxPd1HF7aJiap63cMtzro-KTAwjgZkPwzR52FpzNcjQPwUAPN5Xi94hZhdix1APLfHGaHKKXT7DDqTCr8s1irqyUMob72WeRjjAznI4A',
  },
  {
    label: '🌳 Central Garden',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDs8sW6kdUdbsaKQPJT6x2JAkfyf4-FT1Y5EyykV5g7PVV5XBtLn0tZYeKcDJlDj8gmGRieKc3w45_XzHXeLW-hBLGfm2ngf1uADXYPgVC5Lbgcuv1KgqU3agCdJjxO3QWwwPL3KZgHExP3IPplLhOwPuA9PkHWsLLiO4BdX9Nhvk-oPsG1rKX8PDZVf8JqvObNWEidbbNv7VEFHjvY4u3ISVt3rY8cjlYnscoxfRNyrD8iR2F9htoj0w',
  },
  {
    label: '♻️ Sanitation Depot',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5G9NqEZR2Gsej65suEP2MH1hTZXD7ELoJ7TliYwpERnYKOgMmvH-iXsjm3naViGowThsnx5_MtdCC3GEgyTAv4IG2ZZPzXSS8ws71hfo_H7Nh2brZUa5mHcDQQQFMWYHWNM-86E2JvQtMyJCnM7lxWpIU8gMtsfpN8lItKFjwVNLwOnbR5BfUNxt5-y99k0mBsJijRmH65qDbDHYEkGFFnJapNZnj1to8LfZlP_7VisppIAnAhyGybA',
  },
  {
    label: '🏥 Health Sub-Centre',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMaqgkso6Xt9NXFvsThp23cs9ie7Yu7nJNtpPAzG6MTZ7zswWrPNVJeESvXaTii2r9rXayiJ5J8z7SQZeA3sYW_6WTn6stCZkTlTlLTvrlyGyJBiXlFF93Nb2J0gzH9Rm7sie7u5nD7V_kkwG4qGYjWUOxrD8X09_8mzWpHE90gb7Nxrbps6yXMISRjqR7UWsaRGdfeOEqw11PAdsrn4O6oc2J8jaF9zjVQDPyUalXgYbIfdJq3b8bOw',
  },
];

export const AdminDashboardModal: React.FC<AdminDashboardModalProps> = ({
  isOpen,
  onClose,
  onDataUpdated,
}) => {
  const { t, language } = useLanguage();
  const isMr = language === 'mr';

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('civic_admin_auth') === 'true';
    } catch {
      return false;
    }
  });

  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState(false);
  const [activeTab, setActiveTab] = useState<'complaints' | 'addWork' | 'addNews'>('complaints');

  // Grievance Admin State
  const [tickets, setTickets] = useState<GrievanceTicket[]>([]);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterCat, setFilterCat] = useState<string>('all');
  const [selectedTicket, setSelectedTicket] = useState<GrievanceTicket | null>(null);

  // New Work Form State
  const [workTitle, setWorkTitle] = useState('');
  const [workTitleMr, setWorkTitleMr] = useState('');
  const [workCat, setWorkCat] = useState<WorkItem['category']>('Roads & Drainage');
  const [workStatus, setWorkStatus] = useState<WorkItem['status']>('In Progress');
  const [workLocation, setWorkLocation] = useState('');
  const [workBudget, setWorkBudget] = useState('');
  const [workContractor, setWorkContractor] = useState('');
  const [workDesc, setWorkDesc] = useState('');
  const [workImage, setWorkImage] = useState(IMAGE_PRESETS[1].url);
  const [workSuccess, setWorkSuccess] = useState(false);

  // New News Form State
  const [newsTitle, setNewsTitle] = useState('');
  const [newsTitleMr, setNewsTitleMr] = useState('');
  const [newsCat, setNewsCat] = useState<NewsItem['category']>('Notice');
  const [newsUrgent, setNewsUrgent] = useState(false);
  const [newsSummary, setNewsSummary] = useState('');
  const [newsContent, setNewsContent] = useState('');
  const [newsSuccess, setNewsSuccess] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTickets(getStoredTickets());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === 'admin123' || passcode === 'akluj123' || passcode === 'ward8') {
      setIsAuthenticated(true);
      setAuthError(false);
      try {
        sessionStorage.setItem('civic_admin_auth', 'true');
      } catch {
        // ignore
      }
    } else {
      setAuthError(true);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setWorkImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdateStatus = (
    ticketId: string,
    newStatus: GrievanceStatus,
    remarks: string,
    officer: string
  ) => {
    const updated = tickets.map((tk) => {
      if (tk.ticketId === ticketId) {
        let progress = tk.progressPercent;
        if (newStatus === 'Submitted') progress = 20;
        if (newStatus === 'Under Review') progress = 40;
        if (newStatus === 'Forwarded to Department') progress = 60;
        if (newStatus === 'In Progress') progress = 80;
        if (newStatus === 'Resolved' || newStatus === 'Closed') progress = 100;

        return {
          ...tk,
          status: newStatus,
          remarks: remarks || tk.remarks,
          assignedOfficer: officer || tk.assignedOfficer,
          progressPercent: progress,
        };
      }
      return tk;
    });

    setTickets(updated);
    saveStoredTickets(updated);
    if (selectedTicket && selectedTicket.ticketId === ticketId) {
      const updatedSelected = updated.find((t) => t.ticketId === ticketId);
      if (updatedSelected) setSelectedTicket(updatedSelected);
    }
    if (onDataUpdated) onDataUpdated();
  };

  const handleExportCsv = () => {
    const headers = [
      'Ticket ID',
      'Citizen Name',
      'Mobile',
      'Area',
      'Category',
      'Status',
      'Timestamp',
      'Assigned Officer',
      'Remarks',
    ];
    const rows = tickets.map((t) => [
      t.ticketId,
      `"${t.name.replace(/"/g, '""')}"`,
      t.mobile,
      `"${t.area.replace(/"/g, '""')}"`,
      `"${t.category.replace(/"/g, '""')}"`,
      t.status,
      `"${t.timestamp}"`,
      `"${(t.assignedOfficer || '').replace(/"/g, '""')}"`,
      `"${(t.remarks || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute(
      'download',
      `Akluj_Ward8_Grievance_Report_${new Date().toISOString().slice(0, 10)}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCreateWork = (e: React.FormEvent) => {
    e.preventDefault();
    if (!workTitle.trim() || !workLocation.trim()) return;

    const works = getStoredWorks();
    const newWork: WorkItem = {
      id: `w-${Date.now()}`,
      code: `AKL-W8-PROJ-${Math.floor(10 + Math.random() * 90)}`,
      title: workTitle.trim(),
      titleMr: workTitleMr.trim() || workTitle.trim(),
      category: workCat,
      status: workStatus,
      location: workLocation.trim(),
      image:
        workImage ||
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAWU8LBZ-p4hyeHgcjUjM3PH1a1o4zqFLo4YhqmZyy9Z9mPR0F2phhoQHpSACKkViAQt23g4hsxUyshPedpMwl4E5-qIpo0lCoUZsPDujf9P1-gIOmgfH86N8VmQdwzeYvXNKUzOfeZiVLlF_FQbgHFWCPbTDx7gdLmXDeD_yvdPDVLqCEnqZQCbzd_EOU3M3-wQcsSgCFqWzG759x4rViKkz4KgVww-S2kMfHnZJK3WOZCIf304yLPiA',
      description: workDesc.trim() || 'Ward development project in Akluj Ward No. 8',
      fullDetails: {
        contractor: workContractor.trim() || 'Akluj Municipal Council Works Dept',
        estimatedBudget: workBudget.trim() || '₹25.00 Lakhs',
        sanctionDate: new Date().toLocaleDateString('en-GB'),
        targetCompletion: 'Target: Q4 2025',
        beneficiaries: 'Residents of Ward 8, Akluj',
        scopeOfWork: [
          'Site survey and preliminary marking completed.',
          'Civil infrastructure execution under municipal supervision.',
          'Mandatory pre-completion quality audit.',
        ],
      },
    };

    const updated = [newWork, ...works];
    saveStoredWorks(updated);
    setWorkSuccess(true);
    setTimeout(() => setWorkSuccess(false), 3000);

    // Reset Form
    setWorkTitle('');
    setWorkTitleMr('');
    setWorkLocation('');
    setWorkBudget('');
    setWorkContractor('');
    setWorkDesc('');

    if (onDataUpdated) onDataUpdated();
  };

  const handleCreateNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsTitle.trim() || !newsSummary.trim()) return;

    const currentNews = getStoredNews();
    const now = new Date();
    const dateStr = `${now.getDate()} ${now.toLocaleString('default', { month: 'short' })} ${now.getFullYear()}`;

    const newNewsItem: NewsItem = {
      id: `n-${Date.now()}`,
      title: newsTitle.trim(),
      titleMr: newsTitleMr.trim() || newsTitle.trim(),
      category: newsCat,
      categoryLabel:
        newsCat === 'Notice'
          ? 'Public Notice'
          : newsCat === 'Meeting'
          ? 'Ward Meeting'
          : 'Development Update',
      categoryLabelMr:
        newsCat === 'Notice'
          ? 'जाहीर सूचना'
          : newsCat === 'Meeting'
          ? 'नागरिक बैठक'
          : 'विकास प्रगती',
      date: dateStr,
      dateMr: dateStr,
      readTime: '2 min read',
      readTimeMr: '२ मिनिटे वाचन',
      urgent: newsUrgent,
      summary: newsSummary.trim(),
      summaryMr: newsSummary.trim(),
      content: newsContent.trim() || newsSummary.trim(),
      contentMr: newsContent.trim() || newsSummary.trim(),
      issuedBy: 'Office of Councillor Mahesh Keshav Shinde, Ward 8 Akluj',
      issuedByMr: 'नगरसेवक महेश के. शिंदे जनसंपर्क कार्यालय, अकलूज',
    };

    const updated = [newNewsItem, ...currentNews];
    saveStoredNews(updated);
    setNewsSuccess(true);
    setTimeout(() => setNewsSuccess(false), 3000);

    setNewsTitle('');
    setNewsTitleMr('');
    setNewsSummary('');
    setNewsContent('');

    if (onDataUpdated) onDataUpdated();
  };

  const filteredTickets = tickets.filter((tk) => {
    const matchStatus = filterStatus === 'all' || tk.status === filterStatus;
    const matchCat = filterCat === 'all' || tk.category === filterCat;
    return matchStatus && matchCat;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm animate-fade-in text-gray-900">
      <div className="bg-white rounded-2xl max-w-5xl w-full h-[90vh] shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#172033] text-white flex items-center justify-between border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#FF8500] flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-[20px]">admin_panel_settings</span>
            </div>
            <div>
              <h3 className="font-headline font-bold text-base sm:text-lg text-white">
                {t('admin.heading')}
              </h3>
              <p className="text-[11px] text-gray-400">
                {t('admin.subtitle')}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-300 hover:text-white cursor-pointer active:scale-95"
          >
            ✕
          </button>
        </div>

        {/* AUTHENTICATION SCREEN */}
        {!isAuthenticated ? (
          <div className="flex-1 flex items-center justify-center p-6 bg-[#FFFCF7]">
            <form
              onSubmit={handleLogin}
              className="max-w-md w-full p-8 rounded-2xl bg-white border border-gray-200 shadow-xl space-y-4 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-orange-100 mx-auto flex items-center justify-center text-[#FF8500]">
                <span className="material-symbols-outlined text-[32px]">lock</span>
              </div>
              <h4 className="font-headline font-bold text-xl text-[#172033]">
                {isMr ? 'प्रशासक लॉगिन' : 'Authorized Admin Login'}
              </h4>
              <p className="text-xs text-gray-500">
                {t('admin.passcodePrompt')}
              </p>

              <div>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-center text-sm font-mono tracking-widest focus:outline-none focus:border-[#FF8500]"
                  required
                />
                {authError && (
                  <p className="text-xs text-red-500 mt-1.5 font-semibold">
                    {isMr ? 'अवैध पासवर्ड! कृपया पुन्हा प्रयत्न करा.' : 'Invalid passcode. Please try again.'}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-[#172033] hover:bg-black text-white font-bold text-sm shadow transition-all cursor-pointer active:scale-95"
              >
                {t('admin.loginBtn')}
              </button>
            </form>
          </div>
        ) : (
          /* AUTHENTICATED DASHBOARD CONTENT */
          <div className="flex-1 flex flex-col overflow-hidden bg-gray-50">
            {/* Admin Tabs */}
            <div className="flex border-b border-gray-200 bg-white px-6">
              <button
                onClick={() => setActiveTab('complaints')}
                className={`py-3 px-4 font-headline text-xs sm:text-sm font-bold border-b-2 flex items-center gap-2 cursor-pointer transition-colors ${
                  activeTab === 'complaints'
                    ? 'border-[#FF8500] text-[#FF8500]'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">report_problem</span>
                <span>
                  {t('admin.tabComplaints')} ({tickets.length})
                </span>
              </button>
              <button
                onClick={() => setActiveTab('addWork')}
                className={`py-3 px-4 font-headline text-xs sm:text-sm font-bold border-b-2 flex items-center gap-2 cursor-pointer transition-colors ${
                  activeTab === 'addWork'
                    ? 'border-[#FF8500] text-[#FF8500]'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">add_circle</span>
                <span>{t('admin.tabAddWork')}</span>
              </button>
              <button
                onClick={() => setActiveTab('addNews')}
                className={`py-3 px-4 font-headline text-xs sm:text-sm font-bold border-b-2 flex items-center gap-2 cursor-pointer transition-colors ${
                  activeTab === 'addNews'
                    ? 'border-[#FF8500] text-[#FF8500]'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">campaign</span>
                <span>{t('admin.tabPublishNews')}</span>
              </button>

              <div className="ml-auto flex items-center py-2">
                <button
                  onClick={handleExportCsv}
                  className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-[#168447] text-xs font-bold border border-emerald-200 flex items-center gap-1.5 cursor-pointer active:scale-95"
                >
                  <span className="material-symbols-outlined text-[16px]">download</span>
                  <span>{t('admin.exportCsv')}</span>
                </button>
              </div>
            </div>

            {/* TAB 1: COMPLAINTS MANAGER */}
            {activeTab === 'complaints' && (
              <div className="flex-1 p-6 overflow-y-auto space-y-4">
                {/* Filters */}
                <div className="p-3 bg-white rounded-xl border border-gray-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-3">
                    <label className="font-semibold text-gray-700">Filter Status:</label>
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      className="px-2.5 py-1.5 rounded-lg border border-gray-300 bg-white text-gray-800"
                    >
                      <option value="all">All Statuses</option>
                      <option value="Submitted">Submitted</option>
                      <option value="Under Review">Under Review</option>
                      <option value="Forwarded to Department">Forwarded to Department</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Resolved">Resolved</option>
                      <option value="Closed">Closed</option>
                    </select>

                    <label className="font-semibold text-gray-700 ml-2">Category:</label>
                    <select
                      value={filterCat}
                      onChange={(e) => setFilterCat(e.target.value)}
                      className="px-2.5 py-1.5 rounded-lg border border-gray-300 bg-white text-gray-800"
                    >
                      <option value="all">All Categories</option>
                      <option value="Water supply">Water supply</option>
                      <option value="Road damage">Road damage</option>
                      <option value="Drainage problems">Drainage problems</option>
                      <option value="Garbage collection">Garbage collection</option>
                      <option value="Street lights">Street lights</option>
                    </select>
                  </div>
                  <span className="text-gray-500 font-mono">
                    Showing {filteredTickets.length} of {tickets.length} complaints
                  </span>
                </div>

                {/* Table */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto shadow-xs">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#172033] text-gray-200 uppercase font-mono text-[10px]">
                      <tr>
                        <th className="p-3">Ticket ID</th>
                        <th className="p-3">Citizen</th>
                        <th className="p-3">Area</th>
                        <th className="p-3">Category</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Assigned Officer</th>
                        <th className="p-3">Date</th>
                        <th className="p-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {filteredTickets.map((t) => (
                        <tr key={t.ticketId} className="hover:bg-gray-50 transition-colors">
                          <td className="p-3 font-mono font-bold text-[#FF8500] whitespace-nowrap">
                            {t.ticketId}
                          </td>
                          <td className="p-3 font-medium text-gray-900 whitespace-nowrap">
                            {t.name}
                            <span className="block text-[10px] text-gray-500 font-mono">
                              +91 {t.mobile}
                            </span>
                          </td>
                          <td className="p-3 text-gray-700 whitespace-nowrap">{t.area}</td>
                          <td className="p-3 text-gray-700 whitespace-nowrap">{t.category}</td>
                          <td className="p-3 whitespace-nowrap">
                            <span
                              className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                                t.status === 'Resolved' || t.status === 'Closed'
                                  ? 'bg-green-100 text-green-800'
                                  : t.status === 'In Progress'
                                  ? 'bg-orange-100 text-orange-800'
                                  : 'bg-blue-100 text-blue-800'
                              }`}
                            >
                              {t.status}
                            </span>
                          </td>
                          <td className="p-3 text-gray-600 truncate max-w-[150px]">
                            {t.assignedOfficer || 'Unassigned'}
                          </td>
                          <td className="p-3 text-gray-500 whitespace-nowrap">{t.timestamp}</td>
                          <td className="p-3 text-right whitespace-nowrap">
                            <button
                              onClick={() => setSelectedTicket(t)}
                              className="px-2.5 py-1 rounded bg-[#172033] text-white hover:bg-black font-semibold text-[11px] cursor-pointer active:scale-95"
                            >
                              Manage
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Edit Single Ticket Drawer */}
                {selectedTicket && (
                  <div className="p-5 rounded-xl bg-orange-50 border border-orange-200 space-y-4 animate-fade-in text-xs">
                    <div className="flex items-center justify-between border-b border-orange-200 pb-2">
                      <div>
                        <span className="text-[10px] text-gray-500 font-mono">
                          EDITING COMPLAINT
                        </span>
                        <h4 className="font-headline font-bold text-base text-gray-900">
                          {selectedTicket.ticketId} — {selectedTicket.name} ({selectedTicket.category})
                        </h4>
                      </div>
                      <button
                        onClick={() => setSelectedTicket(null)}
                        className="text-gray-500 hover:text-black font-bold text-sm cursor-pointer"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="p-3 rounded-lg bg-white border border-gray-200 text-gray-700">
                      <strong>Citizen Description:</strong> {selectedTicket.description}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Update Status:</label>
                        <select
                          id={`select-status-${selectedTicket.ticketId}`}
                          defaultValue={selectedTicket.status}
                          className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white"
                        >
                          <option value="Submitted">Submitted</option>
                          <option value="Under Review">Under Review</option>
                          <option value="Forwarded to Department">Forwarded to Department</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Resolved">Resolved</option>
                          <option value="Closed">Closed</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">
                          Assign Officer / Dept:
                        </label>
                        <input
                          id={`input-officer-${selectedTicket.ticketId}`}
                          type="text"
                          defaultValue={
                            selectedTicket.assignedOfficer || 'Er. Sachin Kulkarni (JE Civil)'
                          }
                          className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">
                          Resolution Remarks:
                        </label>
                        <input
                          id={`input-remarks-${selectedTicket.ticketId}`}
                          type="text"
                          defaultValue={
                            selectedTicket.remarks ||
                            'Site inspection completed. Issue under redressal.'
                          }
                          className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end gap-2 pt-2">
                      <button
                        onClick={() => setSelectedTicket(null)}
                        className="px-3 py-1.5 rounded-lg border border-gray-300 bg-white text-gray-700 cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          const statusEl = document.getElementById(
                            `select-status-${selectedTicket.ticketId}`
                          ) as HTMLSelectElement;
                          const officerEl = document.getElementById(
                            `input-officer-${selectedTicket.ticketId}`
                          ) as HTMLInputElement;
                          const remarksEl = document.getElementById(
                            `input-remarks-${selectedTicket.ticketId}`
                          ) as HTMLInputElement;

                          handleUpdateStatus(
                            selectedTicket.ticketId,
                            statusEl.value as GrievanceStatus,
                            remarksEl.value,
                            officerEl.value
                          );
                        }}
                        className="px-4 py-1.5 rounded-lg bg-[#FF8500] hover:bg-[#DE7200] text-white font-bold cursor-pointer shadow-sm active:scale-95"
                      >
                        Save & Notify Citizen
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: ADD DEVELOPMENT PROJECT */}
            {activeTab === 'addWork' && (
              <div className="flex-1 p-6 overflow-y-auto">
                <form
                  onSubmit={handleCreateWork}
                  className="max-w-2xl mx-auto p-6 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-4 text-xs"
                >
                  <h4 className="font-headline font-bold text-base text-[#172033]">
                    {isMr ? 'नवीन प्रभाग विकास प्रकल्प जोडा' : 'Add New Ward Development Project'}
                  </h4>
                  <p className="text-gray-500">
                    Direct developer/admin CMS feature — newly added works persist in browser storage and render immediately with photographs in the Development Works section.
                  </p>

                  {workSuccess && (
                    <div className="p-3 rounded-lg bg-green-100 text-green-800 font-bold">
                      ✓ Project with photograph added successfully to official public register!
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-gray-700 mb-1">
                        Project Title (English) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Concrete Road Extension"
                        value={workTitle}
                        onChange={(e) => setWorkTitle(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-gray-700 mb-1">
                        Project Title (Marathi)
                      </label>
                      <input
                        type="text"
                        placeholder="उदा. काँक्रीट रस्ता व गटार बांधकाम"
                        value={workTitleMr}
                        onChange={(e) => setWorkTitleMr(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-semibold text-gray-700 mb-1">Category</label>
                      <select
                        value={workCat}
                        onChange={(e) => setWorkCat(e.target.value as WorkItem['category'])}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300"
                      >
                        <option value="Roads & Drainage">Roads & Drainage</option>
                        <option value="Water Supply">Water Supply</option>
                        <option value="Street Lighting">Street Lighting</option>
                        <option value="Gardens & Spaces">Gardens & Spaces</option>
                        <option value="Sanitation">Sanitation</option>
                        <option value="Public Facilities">Public Facilities</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-gray-700 mb-1">Status</label>
                      <select
                        value={workStatus}
                        onChange={(e) => setWorkStatus(e.target.value as WorkItem['status'])}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300"
                      >
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                        <option value="Proposed">Proposed</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-gray-700 mb-1">
                        Sanctioned Budget
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. ₹35.00 Lakhs"
                        value={workBudget}
                        onChange={(e) => setWorkBudget(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300"
                      />
                    </div>
                  </div>

                  {/* PROJECT IMAGE CONFIGURATION */}
                  <div className="p-3.5 rounded-xl bg-orange-50/60 border border-orange-200 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <label className="font-bold text-gray-800">
                        Project Image (URL, Preset, or Upload) *
                      </label>
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="text-[11px] font-bold text-[#FF8500] hover:underline cursor-pointer"
                      >
                        Upload Local Photo
                      </button>
                    </div>

                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileUpload}
                    />

                    <input
                      type="url"
                      placeholder="Paste image URL here..."
                      value={workImage}
                      onChange={(e) => setWorkImage(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white"
                    />

                    {/* Quick Preset Selector */}
                    <div>
                      <span className="text-[10px] text-gray-500 font-semibold block mb-1">
                        Or select quick verified civic photo preset:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {IMAGE_PRESETS.map((p, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setWorkImage(p.url)}
                            className={`px-2 py-1 rounded-md text-[10px] font-semibold transition-all cursor-pointer ${
                              workImage === p.url
                                ? 'bg-[#FF8500] text-white'
                                : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            {p.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Image Preview */}
                    {workImage && (
                      <div className="flex items-center gap-3 pt-1">
                        <img
                          src={workImage}
                          alt="Preview"
                          className="w-20 h-12 object-cover rounded-lg border border-gray-300 shadow-xs"
                        />
                        <span className="text-[10px] text-green-700 font-semibold">
                          ✓ Image attached successfully
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-gray-700 mb-1">
                        Location in Ward 8 *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sector 4, Sangam Road"
                        value={workLocation}
                        onChange={(e) => setWorkLocation(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-gray-700 mb-1">
                        Contractor / Authority
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. M/s Phoenix Infra Ltd"
                        value={workContractor}
                        onChange={(e) => setWorkContractor(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                      Description & Scope
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Enter engineering scope of work and beneficiary count..."
                      value={workDesc}
                      onChange={(e) => setWorkDesc(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-[#168447] hover:bg-[#106335] text-white font-bold text-xs shadow cursor-pointer transition-all active:scale-95"
                  >
                    Publish Development Project
                  </button>
                </form>
              </div>
            )}

            {/* TAB 3: PUBLISH NEWS / CIRCULAR */}
            {activeTab === 'addNews' && (
              <div className="flex-1 p-6 overflow-y-auto">
                <form
                  onSubmit={handleCreateNews}
                  className="max-w-2xl mx-auto p-6 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-4 text-xs"
                >
                  <h4 className="font-headline font-bold text-base text-[#172033]">
                    {isMr ? 'नवीन अधिकृत सूचना प्रसिद्ध करा' : 'Publish Official Public Notice / Circular'}
                  </h4>

                  {newsSuccess && (
                    <div className="p-3 rounded-lg bg-green-100 text-green-800 font-bold">
                      ✓ Circular published live to News & Notices section!
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-gray-700 mb-1">
                        Title (English) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Water Pipeline Maintenance Advisory"
                        value={newsTitle}
                        onChange={(e) => setNewsTitle(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-gray-700 mb-1">
                        Title (Marathi)
                      </label>
                      <input
                        type="text"
                        placeholder="उदा. पाणीपुरवठा देखभाल दुरुस्ती सूचना"
                        value={newsTitleMr}
                        onChange={(e) => setNewsTitleMr(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-gray-700 mb-1">Category</label>
                      <select
                        value={newsCat}
                        onChange={(e) => setNewsCat(e.target.value as NewsItem['category'])}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300"
                      >
                        <option value="Notice">Public Notice</option>
                        <option value="Meeting">Ward Meeting</option>
                        <option value="Development">Development Update</option>
                        <option value="Health">Community Health</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-2 pt-6">
                      <input
                        type="checkbox"
                        id="urgent-check"
                        checked={newsUrgent}
                        onChange={(e) => setNewsUrgent(e.target.checked)}
                        className="text-red-600 rounded"
                      />
                      <label htmlFor="urgent-check" className="font-bold text-red-700 cursor-pointer">
                        Mark as Urgent Alert (High Priority Banner)
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">Summary *</label>
                    <textarea
                      rows={2}
                      required
                      placeholder="Brief summary for quick citizen preview..."
                      value={newsSummary}
                      onChange={(e) => setNewsSummary(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 resize-none"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                      Full Circular Content
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Detailed instructions, helpline contacts, and schedules..."
                      value={newsContent}
                      onChange={(e) => setNewsContent(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-[#FF8500] hover:bg-[#DE7200] text-white font-bold text-xs shadow cursor-pointer transition-all active:scale-95"
                  >
                    Publish Circular Live
                  </button>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
