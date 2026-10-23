import {
  WorkItem,
  InitiativeItem,
  GalleryItem,
  GrievanceTicket,
  NewsItem,
  CivicPoll,
  MapPoint,
} from '../types';

export const CIVIC_METRICS = {
  auditPeriod: 'Official Audit Period: FY 2024–2025',
  auditPeriodMr: 'अधिकृत लेखापरीक्षण कालावधी: वर्ष २०२४-२०२५',
  worksCompleted: 48,
  projectsInProgress: 12,
  grievancesAddressed: 1420,
  communityInitiatives: 36,
  fundsAllocated: '₹4.82 Cr',
  averageResolutionDays: '3.2 Days',
  slaSatisfactionRate: '94.6%',
};

export const AKLUJ_INFO = {
  town: 'Akluj',
  taluka: 'Malshiras',
  district: 'Solapur',
  state: 'Maharashtra',
  pincode: '413101',
  ward: 'Ward No. 8 (प्रभाग क्र. ८)',
  body: 'Akluj Nagar Parishad / Municipal Council',
  bodyMr: 'अकलूज नगर परिषद / महानगरपालिका',
  councillorName: 'Mahesh Keshav Shinde',
  councillorNameMr: 'महेश केशव शिंदे',
  designation: 'Elected Municipal Councillor – Ward No. 8',
  designationMr: 'निर्वाचित नगरसेवक – प्रभाग क्र. ८, अकलूज',
  officeAddress: 'Ward 8 Civic Secretariat, Near Sangam Chowk, Akluj, Maharashtra 413101',
  officeAddressMr: 'प्रभाग क्र. ८ जनसंपर्क कार्यालय, संगम चौक जवळ, अकलूज, महाराष्ट्र ४१३१०१',
  phone: '+91 02185-222008',
  mobile: '+91 98220 00008',
  email: 'ward8.akluj@municipalgov.in',
  coordinates: '17.8920° N, 75.0253° E',
  googleMapsUrl: 'https://maps.google.com/?q=17.8920,75.0253',
};

export const INITIAL_DEVELOPMENT_WORKS: WorkItem[] = [
  {
    id: 'w1',
    code: 'AKL-W8-WTR-01',
    title: 'Drinking Water Pipeline Augmentation & Pressure Boost',
    titleMr: 'पिण्याच्या पाण्याची मुख्य जलवाहिनी सुधारणा व दाब वाढ योजना',
    category: 'Water Supply',
    status: 'Completed',
    location: 'Sector 4, Sangam Road & Central Bazaar, Akluj',
    locationMr: 'सेक्टर ४, संगम रस्ता व मध्यवर्ती बाजारपेठ, अकलूज',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-Fo-Z_2RXi0eddJp1fb3n9q1wp8npMoMngGnqmPxJpKJ3FPDmf4cLh5K1iKBiBusp0bQuPEYg5vFHubA0lJWy_UYPokBA4v2bnALl1KTopHs-sdiybBc7abbh1ArMRnnx9RFJnQQKbeH_EAo9j4p3o6OvVVL3IssykYgSRQ1pdhQQjiNkyKImO-ZSOTWZp6eBH10-u0t-Un9oJL90Zg31zZViH71QiUAI-93doUOs0hwU5mgHwVVDRA',
    description: 'Replacement of 800m corroded distribution line with ductile iron pipes to resolve acute low-pressure supply.',
    descriptionMr: 'कमी पाण्याच्या दाबाची समस्या दूर करण्यासाठी ८०० मीटर जुन्या जलवाहिनीचे डक्टाइल लोखंडी पाईप्सद्वारे नूतनीकरण.',
    fullDetails: {
      contractor: 'M/s Phoenix Civic Infra Ltd., Solapur',
      sanctionDate: '12 Nov 2024',
      targetCompletion: 'Commissioned on 28 Feb 2025',
      estimatedBudget: '₹42.50 Lakhs',
      beneficiaries: 'Approx. 8,500 residents across Sector 4 & Market lanes',
      beneficiariesMr: 'सेक्टर ४ व बाजारपेठेतील सुमारे ८,५०० रहिवासी',
      scopeOfWork: [
        'Excavation and laying of 800-meter ductile iron pipeline (150mm dia).',
        'Installation of 6 tamper-proof sluice pressure control valves.',
        'Hydraulic pressure test conducted with 0.8 bar elevation at tail-end nodes.',
        'Immediate asphalt patch repair over trench alignment.',
      ],
      scopeOfWorkMr: [
        '८०० मीटर डक्टाइल लोखंडी पाईपलाईन (१५० मिमी व्यास) खोदकाम व अंथरण.',
        '६ छेडछाड-मुक्त स्लुइस प्रेशर नियंत्रण झडपांची स्थापना.',
        'शेवटच्या घरांपर्यंत पाण्याचा दाब ०.८ बारने वाढवणारी हायड्रॉलिक चाचणी पूर्ण.',
        'खोदलेल्या रस्त्यावर त्वरित डांबरीकरण पॅचवर्क पूर्ण.',
      ],
    },
  },
  {
    id: 'w2',
    code: 'AKL-W8-RDS-02',
    title: 'Internal Cement Concrete Road & Stormwater Box Drain',
    titleMr: 'आंतरीक सिमेंट काँक्रीट रस्ता व पावसाळी बंदिस्त गटर बांधकाम',
    category: 'Roads & Drainage',
    status: 'In Progress',
    location: 'Lane 3 to 7, Shastri Nagar, Akluj',
    locationMr: 'गल्ली ३ ते ७, शास्त्री नगर, अकलूज',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWU8LBZ-p4hyeHgcjUjM3PH1a1o4zqFLo4YhqmZyy9Z9mPR0F2phhoQHpSACKkViAQt23g4hsxUyshPedpMwl4E5-qIpo0lCoUZsPDujf9P1-gIOmgfH86N8VmQdwzeYvXNKUzOfeZiVLlF_FQbgHFWCPbTDx7gdLmXDeD_yvdPDVLqCEnqZQCbzd_EOU3M3-wQcsSgCFqWzG759x4rViKkz4KgVww-S2kMfHnZJK3WOZCIf304yLPiA',
    description: 'Paver block replacement, RCC box drain laying, and utility duct provisioning prior to monsoon season.',
    descriptionMr: 'पावसाळ्यापूर्वी पाणी साचणे रोखण्यासाठी आरसीसी बॉक्स गटार, काँक्रीट रस्ता व भूमिगत केबल डक्टचे काम सुरू.',
    fullDetails: {
      contractor: 'Jai Hind Infrastructure Developers, Akluj',
      sanctionDate: '05 Jan 2025',
      targetCompletion: '30 May 2025 (Pre-Monsoon Target)',
      estimatedBudget: '₹68.20 Lakhs',
      beneficiaries: 'Over 12,000 daily commuters & residential societies',
      beneficiariesMr: '१२,००० हून अधिक दैनंदिन प्रवासी व सोसायटी रहिवासी',
      scopeOfWork: [
        'Construction of 1,200-meter reinforced concrete cement (M30 grade) surface.',
        'Laying continuous 450x600mm RCC stormwater drain channels on both kerbs.',
        'Pre-cast inspection chambers every 15 meters for ease of desilting.',
        'Dedicated electrical & telecommunication utility sleeves under road crossings.',
      ],
      scopeOfWorkMr: [
        '१,२०० मीटर मजबूत सिमेंट काँक्रीट (M30 ग्रेड) रस्त्याचे बांधकाम.',
        'रस्त्याच्या दोन्ही बाजूंना ४५०x६०० मिमीचे आरसीसी सांडपाणी नाले.',
        'गाळ काढण्याच्या सुलभतेसाठी दर १५ मीटरवर प्री-कास्ट तपासणी चेंबर्स.',
        'भविष्यातील खोदकाम टाळण्यासाठी भूमिगत वीज व इंटरनेट केबल डक्ट्स.',
      ],
    },
  },
  {
    id: 'w3',
    code: 'AKL-W8-LGT-03',
    title: 'Ward-Wide Smart LED Street Lighting & Timer Switch Upgrade',
    titleMr: 'प्रभागस्तरीय स्मार्ट एलईडी पथदिवे व स्वयंचलित टायमर प्रणाली',
    category: 'Street Lighting',
    status: 'Completed',
    location: 'All Major Arterials & Residential By-lanes, Ward 8',
    locationMr: 'प्रभाग क्र. ८ मधील सर्व मुख्य रस्ते व अंतर्गत गल्ल्या',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzo8ipgnMdvvmE1cfl0beOkvPtDFVBxbQ9jdgOU5tBAhGYHkjxRSB1jLzYTfWgPz17puFj2Am6mwD01v0pmqwnwoTIChEWfBaYfTidjQKTHuRAaafvtwlYuXMeCouOQX7fsdBbgd8hUgj2YAMxPd1HF7aJiap63cMtzro-KTAwjgZkPwzR52FpzNcjQPwUAPN5Xi94hZhdix1APLfHGaHKKXT7DDqTCr8s1irqyUMob72WeRjjAznI4A',
    description: 'Installation of 140 energy-efficient LED luminaires with centralized timer control for public safety.',
    descriptionMr: 'महिला व बालकांच्या रात्रीच्या सुरक्षिततेसाठी १४० ऊर्जा-बचत एलईडी दिवे आणि ऑटोमॅटिक स्विच प्रणाली कार्यरत.',
    fullDetails: {
      contractor: 'Surya Smart Power Solutions',
      sanctionDate: '20 Oct 2024',
      targetCompletion: 'Completed 15 Jan 2025',
      estimatedBudget: '₹24.80 Lakhs',
      beneficiaries: 'Entire Ward 8 nocturnal commuter populace (40,000+)',
      beneficiariesMr: 'प्रभागातील ४०,००० हून अधिक नागरिक व पादचारी',
      scopeOfWork: [
        'Replacement of legacy high-pressure sodium lamps with 72W & 90W LED fixtures.',
        'Astronomical clock timers deployed at 12 feeder distribution pillars.',
        'Illumination index enhanced from 12 lux to 32 lux across high-footfall intersections.',
        '48-hour SLA maintenance agreement with remote monitoring telemetry.',
      ],
      scopeOfWorkMr: [
        'जुन्या दिव्यांऐवजी ७२ वॅट आणि ९० वॅटचे ब्रँडेड एलईडी फिक्स्चर्स बसवले.',
        '१२ वीज वितरण खांबांवर खगोलशास्त्रीय घड्याळ टायमर बसवले.',
        'चौकांमधील प्रकाश तीव्रता १२ लक्सवरून ३२ लक्सपर्यंत वाढवली.',
        '४८ तासांत तक्रार निवारणासाठी विशेष पथक नियुक्त.',
      ],
    },
  },
  {
    id: 'w4',
    code: 'AKL-W8-GDN-04',
    title: 'Akluj Ward Central Park & Senior Citizen Wellness Space',
    titleMr: 'अकलूज प्रभाग मध्यवर्ती उद्यान व ज्येष्ठ नागरिक विरंगुळा केंद्र',
    category: 'Gardens & Spaces',
    status: 'In Progress',
    location: 'Ward Central Garden, Near Old Gaothan, Akluj',
    locationMr: 'मध्यवर्ती उद्यान, जुने गावठाण जवळ, अकलूज',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDs8sW6kdUdbsaKQPJT6x2JAkfyf4-FT1Y5EyykV5g7PVV5XBtLn0tZYeKcDJlDj8gmGRieKc3w45_XzHXeLW-hBLGfm2ngf1uADXYPgVC5Lbgcuv1KgqU3agCdJjxO3QWwwPL3KZgHExP3IPplLhOwPuA9PkHWsLLiO4BdX9Nhvk-oPsG1rKX8PDZVf8JqvObNWEidbbNv7VEFHjvY4u3ISVt3rY8cjlYnscoxfRNyrD8iR2F9htoj0w',
    description: 'Walking track resurfacing, solar illumination, and safe open-gym equipment installation for residents.',
    descriptionMr: 'रबर-युक्त वॉकिंग ट्रॅक, मोफत ओपन जिम, ज्येष्ठ नागरिकांसाठी आरामदायी बाकडी व सौर पथदिवे उभारणीचे काम.',
    fullDetails: {
      contractor: 'GreenEarth Landscape & Amenities, Solapur',
      sanctionDate: '18 Dec 2024',
      targetCompletion: '15 April 2025',
      estimatedBudget: '₹31.40 Lakhs',
      beneficiaries: 'Local children, morning joggers, and 3,000+ senior citizens',
      beneficiariesMr: 'लहान मुले, खेळाडू, महिला व ३,००० हून अधिक ज्येष्ठ नागरिक',
      scopeOfWork: [
        '650m cushioned clay-rubble walking track resurfaced with rubber-edged pavers.',
        'Installation of 8-station hydraulic resistance open-air fitness equipment.',
        'Addition of 24 cast-iron benches beneath shady native tree canopies.',
        'Rooftop solar canopy on garden kiosk to power pathway lighting.',
      ],
      scopeOfWorkMr: [
        '६५० मीटर लांबीचा मऊ चालण्याचा वॉकिंग ट्रॅक तयार करणे.',
        '८ आधुनिक ओपन-एअर हायड्रॉलिक जिम उपकरणांची स्थापना.',
        'झाडांच्या सावलीत २४ मजबूत आराम बाकडी बसवणे.',
        'उद्यानातील दिव्यांसाठी सौर पॅनेल सिस्टीम.',
      ],
    },
  },
  {
    id: 'w5',
    code: 'AKL-W8-SNT-05',
    title: 'Decentralized Organic Wet-Waste Composting Unit',
    titleMr: 'विकेंद्रित ओला कचरा प्रक्रिया व सेंद्रिय खत निर्मिती केंद्र',
    category: 'Sanitation',
    status: 'Proposed',
    location: 'Ward Sanitation Depot, Malshiras Bypass Link',
    locationMr: 'कचरा व्यवस्थापन डेपो, माळशिरस बायपास लिंक, अकलूज',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5G9NqEZR2Gsej65suEP2MH1hTZXD7ELoJ7TliYwpERnYKOgMmvH-iXsjm3naViGowThsnx5_MtdCC3GEgyTAv4IG2ZZPzXSS8ws71hfo_H7Nh2brZUa5mHcDQQQFMWYHWNM-86E2JvQtMyJCnM7lxWpIU8gMtsfpN8lItKFjwVNLwOnbR5BfUNxt5-y99k0mBsJijRmH65qDbDHYEkGFFnJapNZnj1to8LfZlP_7VisppIAnAhyGybA',
    description: 'Zero-waste initiative to treat vegetable market organic waste on-site, scheduled for tender approval.',
    descriptionMr: 'भाजी मंडईतील सेंद्रिय कचऱ्याची जागेवरच विल्हेवाट लावून दुर्गंधी नष्ट करणारा पर्यावरणपूरक प्रकल्प.',
    fullDetails: {
      contractor: 'Tender Evaluation Stage (Municipal Health Dept.)',
      sanctionDate: 'Pending Standing Committee Approval',
      targetCompletion: 'Target: Q3 2025',
      estimatedBudget: '₹18.50 Lakhs',
      beneficiaries: 'Elimination of foul odor for surrounding colonies; high-grade organic fertilizer for ward parks',
      beneficiariesMr: 'परिसरातील नागरिकांना दुर्गंधीपासून मुक्ती व बागांसाठी सेंद्रिय खत',
      scopeOfWork: [
        '2-metric-ton capacity automated mechanical aerated composting drum.',
        'Odor mitigation bio-filter with exhaust misting system.',
        'Covered segregation conveyor with magnetic metallic sorting trap.',
        'Solar-backed auxiliary power generation unit.',
      ],
      scopeOfWorkMr: [
        'दररोज २ मेट्रिक टन ओला कचरा प्रक्रिया करणारे स्वयंचलित ड्रम.',
        'दुर्गंधी रोखण्यासाठी बायो-फिल्टर व मिस्टिंग सिस्टीम.',
        'कचरा वर्गीकरण कन्व्हेयर व सोलर बॅकअप.',
      ],
    },
  },
  {
    id: 'w6',
    code: 'AKL-W8-HLT-06',
    title: 'Akluj Municipal Health Sub-Centre Renovation & Diagnostic Kiosk',
    titleMr: 'अकलूज प्राथमिक आरोग्य उपकेंद्र आधुनिकीकरण व मोफत तपासणी केंद्र',
    category: 'Public Facilities',
    status: 'Proposed',
    location: 'Health Office Premises, Ward 8, Akluj',
    locationMr: 'आरोग्य केंद्र इमारत, प्रभाग क्र. ८, अकलूज',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMaqgkso6Xt9NXFvsThp23cs9ie7Yu7nJNtpPAzG6MTZ7zswWrPNVJeESvXaTii2r9rXayiJ5J8z7SQZeA3sYW_6WTn6stCZkTlTlLTvrlyGyJBiXlFF93Nb2J0gzH9Rm7sie7u5nD7V_kkwG4qGYjWUOxrD8X09_8mzWpHE90gb7Nxrbps6yXMISRjqR7UWsaRGdfeOEqw11PAdsrn4O6oc2J8jaF9zjVQDPyUalXgYbIfdJq3b8bOw',
    description: 'Expansion of maternal-child checkup room, pharmacy storage, and clean public sanitation facility.',
    descriptionMr: 'माता-बाल तपासणी कक्ष, मोफत औषध कक्ष व अद्ययावत पॅथॉलॉजी सुविधांचे नूतनीकरण.',
    fullDetails: {
      contractor: 'Municipal Works Division (PWD Civil)',
      sanctionDate: 'DPR Prepared, Budget Sanction Awaited',
      targetCompletion: 'Target: End of 2025',
      estimatedBudget: '₹45.00 Lakhs',
      beneficiaries: 'Subsidized clinical and prenatal care for 15,000+ low-income residents',
      beneficiariesMr: 'प्रभागातील १५,००० हून अधिक नागरिकांना मोफत प्राथमिक उपचार',
      scopeOfWork: [
        'Adding dedicated vaccine cold-chain refrigeration room with UPS back-up.',
        'Renovation of consultation chambers, nurse triage station, and diagnostic kiosk.',
        'Disability-friendly ramps and tactile floor indicators throughout.',
        'Modernized public washrooms with automated touchless water dispensers.',
      ],
      scopeOfWorkMr: [
        'लसीकरण साठवणुकीसाठी २४ तास वीज बॅकअपसह शीतगृह कक्ष.',
        'डॉक्टर तपासणी कक्ष, परिचारिका कक्ष व डिजिटल नोंदणी काऊंटर.',
        'दिव्यांग व वृद्धांसाठी सुरक्षित रॅम्प आणि रेलिंग्ज.',
        'स्वच्छ व आधुनिक सार्वजनिक स्वच्छतागृहे.',
      ],
    },
  },
];

export const CIVIC_INITIATIVES: InitiativeItem[] = [
  {
    id: 'i1',
    title: 'Swachh Akluj Ward Abhiyan',
    titleMr: 'स्वच्छ अकलूज प्रभाग अभियान',
    schedule: 'Every Sunday Morning (7:00 AM – 9:30 AM)',
    scheduleMr: 'प्रत्येक रविवारी सकाळी ७:०० ते ९:३०',
    icon: 'cleaning_services',
    iconColor: 'saffron',
    description: 'Weekly citizen-participatory cleaning and drain clearing drives in vulnerable spots, eliminating localized black-spots.',
    descriptionMr: 'दर रविवारी प्रभाग नागरिक, तरुण व स्वच्छता कर्मचाऱ्यांच्या एकत्रित सहभागाने परिसर स्वच्छता व सांडपाणी नाले साफसफाई.',
  },
  {
    id: 'i2',
    title: 'Jal Seva 24x7 Monitoring Desk',
    titleMr: 'जल सेवा २४x७ नियंत्रण कक्ष',
    schedule: 'Continuous Pressure & Quality Audit',
    scheduleMr: 'पाण्याचा दाब व शुद्धता सातत्यपूर्ण तपासणी',
    icon: 'water_drop',
    iconColor: 'green',
    description: 'Daily pressure audits and water tanker tracking during municipal maintenance shutdowns, ensuring fair distribution.',
    descriptionMr: 'उन्हाळ्यात किंवा देखभाल दुरुस्तीच्या वेळी टँकरचे योग्य वाटप व शेवटच्या गल्लीपर्यंत पुरेसा दाब सुनिश्चित करणे.',
  },
  {
    id: 'i3',
    title: 'Safe Streets & Night Vigil Lighting',
    titleMr: 'सुरक्षित रस्ते व रात्रीची गस्त प्रकाश योजना',
    schedule: '48-Hour SLA Replacement Protocol',
    scheduleMr: '४८ तासांत बंद दिवे सुरू करण्याची हमी',
    icon: 'lightbulb',
    iconColor: 'saffron',
    description: 'Identifying dark spots across interior lanes and fast-tracking streetlight repair and pole placement within 48 hours.',
    descriptionMr: 'प्रभागातील अंधाराच्या जागा शोधून नवीन खांब बसवणे आणि बंद पडलेले दिवे ४८ तासांत दुरुस्त करणे.',
  },
  {
    id: 'i4',
    title: 'Open Ward Jan Sunwai Citizen Sabhas',
    titleMr: 'प्रभाग खुली जनसुनावणी नागरिक सभा',
    schedule: 'Every Alternate Saturday (10:00 AM)',
    scheduleMr: 'दर दुसऱ्या शनिवारी सकाळी १०:०० वाजता',
    icon: 'record_voice_over',
    iconColor: 'green',
    description: 'Bi-monthly public hearings where residents can voice locality concerns directly to junior ward engineers and health inspectors.',
    descriptionMr: 'नगरसेवक आणि महापालिका अधिकारी नागरिकांच्या समोरासमोर बसून तक्रारी ऐकतात आणि जागेवर निर्णय घेतात.',
  },
  {
    id: 'i5',
    title: 'Green Ward 8 & Native Tree Plantation',
    titleMr: 'हिरवा प्रभाग व देशी वृक्षारोपण मोहीम',
    schedule: '500+ Native Trees Target This Season',
    scheduleMr: 'या हंगामात ५००+ देशी झाडे लावण्याचा संकल्प',
    icon: 'park',
    iconColor: 'green',
    description: 'Community native sapling planting along open road margins, garden boundaries, and school approaches for shade & air quality.',
    descriptionMr: 'वड, पिंपळ, कडुनिंब, जांभूळ यांसारखी पर्यावरणपूरक झाडे रस्त्यांच्या कडेला लावून संगोपनाची जबाबदारी घेणे.',
  },
  {
    id: 'i6',
    title: 'Secretariat Citizen Facilitation Helpdesk',
    titleMr: 'कार्यालयीन नागरी सुलभता मदत केंद्र',
    schedule: 'Daily Walk-in Assistance (10 AM - 1 PM)',
    scheduleMr: 'रोज सकाळी १० ते दु. १ थेट भेट व मदत',
    icon: 'support_agent',
    iconColor: 'saffron',
    description: 'Facilitating birth/death certificates, voter registration, property tax queries, and civic documentation directly at the secretariat.',
    descriptionMr: 'जन्म-मृत्यू दाखले, मतदान नोंदणी, घरफाळा मार्गदर्शन व शासकीय योजनांचे अर्ज भरण्यास मोफत साहाय्य.',
  },
];

export const NEWS_ANNOUNCEMENTS: NewsItem[] = [
  {
    id: 'n1',
    title: 'Scheduled Water Distribution Pipeline Maintenance in Sector 4 & Sangam Chowk',
    titleMr: 'सेक्टर ४ व संगम चौक भागात नियोजित पाईपलाईन दुरुस्तीमुळे पाणीपुरवठा वेळापत्रक',
    category: 'Notice',
    categoryLabel: 'Public Notice',
    categoryLabelMr: 'अधिकृत जाहीर सूचना',
    date: '24 Oct 2026',
    dateMr: '२४ ऑक्टोबर २०२६',
    readTime: '2 min read',
    readTimeMr: '२ मिनिटे वाचन',
    urgent: true,
    summary: 'Water valve optimization will take place between 1:00 PM and 6:00 PM. Evening supply will resume with enhanced pressure by 7:30 PM.',
    summaryMr: 'नवीन व्हॉल्व बसवण्यासाठी दुपारी १ ते संध्याकाळी ६ पाणीपुरवठा बंद राहील. रात्री ७:३० वाजता पूर्ण दाबाने पाणी सुरू होईल.',
    content: 'All residents of Sector 4 and Sangam Chowk are requested to store sufficient drinking water. A standby municipal water tanker has been deployed at Sangam Chowk for emergencies. Contact the Ward 8 Jal Desk helpline for tanker dispatch.',
    contentMr: 'सर्व नागरिकांना विनंती आहे की पिण्याच्या पाण्याचा पुरेसा साठा करून ठेवावा. कोणत्याही आपत्कालीन मदतीसाठी संगम चौकात महापालिकेचा राखीव पाण्याचा टँकर तैनात ठेवण्यात आला आहे.',
    issuedBy: 'Office of Municipal Councillor Mahesh K. Shinde & Water Supply Dept.',
    issuedByMr: 'नगरसेवक महेश के. शिंदे जनसंपर्क कार्यालय व पाणीपुरवठा विभाग',
  },
  {
    id: 'n2',
    title: 'Fortnightly Citizen Jan Sunwai Sabha Scheduled at Community Hall',
    titleMr: 'प्रभाग क्र. ८ ची पाक्षिक जनसुनावणी सभा या शनिवारी समाज मंदिरात आयोजित',
    category: 'Meeting',
    categoryLabel: 'Ward Meeting',
    categoryLabelMr: 'नागरिक बैठक',
    date: '28 Oct 2026',
    dateMr: '२८ ऑक्टोबर २०२६',
    readTime: '3 min read',
    readTimeMr: '३ मिनिटे वाचन',
    urgent: false,
    summary: 'Direct grievance forum with Councillor Mahesh Shinde, Municipal Junior Engineers, and Sanitary Inspectors. All ward residents are welcome.',
    summaryMr: 'नगरसेवक, महापालिका अभियंता व आरोग्य निरीक्षक उपस्थित राहतील. पाणी, रस्ते व स्वच्छता समस्या थेट मांडता येतील.',
    content: 'Residents wishing to table community infrastructure proposals or report unresolved civic tickets are requested to bring their complaint tracking IDs for on-the-spot review by the municipal team.',
    contentMr: 'ज्या नागरिकांना आपल्या गल्लीतील समस्या मांडायच्या आहेत किंवा पूर्वीच्या तक्रारींची सद्यस्थिती जाणून घ्यायची आहे त्यांनी उपस्थित राहावे.',
    issuedBy: 'Ward 8 Secretariat, Akluj',
    issuedByMr: 'प्रभाग क्र. ८ जनसंपर्क कार्यालय, अकलूज',
  },
  {
    id: 'n3',
    title: 'Shastri Nagar Concrete Road Project Phase-2 Work Commences',
    titleMr: 'शास्त्री नगर अंतर्गत सिमेंट काँक्रीट रस्ता टप्पा-२ कामाचा प्रत्यक्ष शुभारंभ',
    category: 'Development',
    categoryLabel: 'Development Update',
    categoryLabelMr: 'विकास कार्य प्रगती',
    date: '19 Oct 2026',
    dateMr: '१९ ऑक्टोबर २०२६',
    readTime: '2 min read',
    readTimeMr: '२ मिनिटे वाचन',
    urgent: false,
    summary: 'Paving and box-drain work for Lanes 4 to 6 commenced this week. Traffic diverted through parallel bypass route.',
    summaryMr: 'गल्ली क्र. ४ ते ६ मधील काँक्रीट रस्ता व भूमिगत गटाराचे काम सुरू. पर्यायी मार्गाचा वापर करण्याचे नागरिकांना आवाहन.',
    content: 'Work is targeted for completion before mid-November. Contractors have been instructed to ensure dust-suppression sprinkling twice daily and provide ramp access to all shop fronts.',
    contentMr: 'हे काम १५ नोव्हेंबरपूर्वी पूर्ण करण्याचे कडक निर्देश कंत्राटदाराला दिले आहेत. कामाच्या ठिकाणी रोज पाणी शिंपडण्याची सोय करण्यात आली आहे.',
    issuedBy: 'Akluj Municipal Works Committee',
    issuedByMr: 'अकलूज नगर परिषद बांधकाम समिती',
  },
  {
    id: 'n4',
    title: 'Free Health Screening & Pediatric Consultation Camp on Sunday',
    titleMr: 'येत्या रविवारी प्रभाग नागरिकांसाठी मोफत आरोग्य तपासणी व बालरोग निदान शिबिर',
    category: 'Health',
    categoryLabel: 'Community Health',
    categoryLabelMr: 'आरोग्य शिबिर',
    date: '15 Oct 2026',
    dateMr: '१५ ऑक्टोबर २०२६',
    readTime: '2 min read',
    readTimeMr: '२ मिनिटे वाचन',
    urgent: false,
    summary: 'Free BP, sugar, eye check-up, and generic medicines distribution at Central Ward Garden pavilion from 9 AM to 3 PM.',
    summaryMr: 'रक्तदाब, मधुमेह, नेत्र तपासणी व मोफत औषध वाटप. नामांकित तज्ज्ञ डॉक्टरांची उपस्थिती.',
    content: 'Organized in collaboration with Solapur District Health Mission and local resident associations. Over 400 families participated in the previous camp.',
    contentMr: 'ज्येष्ठ नागरिक, महिला व लहान मुलांसाठी विशेष सल्लागार उपलब्ध राहतील. सर्व नागरिकांनी या सुविधेचा लाभ घ्यावा.',
    issuedBy: 'Ward 8 Social Welfare Cell',
    issuedByMr: 'प्रभाग क्र. ८ समाज कल्याण कक्ष',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Stormwater Box Drain Pre-Monsoon Audit',
    titleMr: 'शास्त्री नगर भूमिगत सांडपाणी गटार प्रत्यक्ष पाहणी',
    category: 'inspection',
    categoryLabel: 'Ward Inspection',
    categoryLabelMr: 'प्रभाग पाहणी',
    location: 'Shastri Nagar Lane 4, Akluj',
    locationMr: 'शास्त्री नगर गल्ली क्र. ४, अकलूज',
    date: '18 Mar 2025',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWU8LBZ-p4hyeHgcjUjM3PH1a1o4zqFLo4YhqmZyy9Z9mPR0F2phhoQHpSACKkViAQt23g4hsxUyshPedpMwl4E5-qIpo0lCoUZsPDujf9P1-gIOmgfH86N8VmQdwzeYvXNKUzOfeZiVLlF_FQbgHFWCPbTDx7gdLmXDeD_yvdPDVLqCEnqZQCbzd_EOU3M3-wQcsSgCFqWzG759x4rViKkz4KgVww-S2kMfHnZJK3WOZCIf304yLPiA',
    description: 'Reviewing box drain depths, reinforcement mesh, and paver leveling with municipal junior engineers.',
    descriptionMr: 'महापालिका अभियंत्यांसोबत गटाराची खोली, सिमेंट गुणवत्ता व लेव्हलिंगची बारकाईने पाहणी.',
  },
  {
    id: 'g2',
    title: 'LED Street Light Replacement & Lux Inspection',
    titleMr: 'ऊर्जा-बचत एलईडी पथदिवे बसवताना कामाची पाहणी',
    category: 'works',
    categoryLabel: 'Public Works',
    categoryLabelMr: 'विकास कामे',
    location: 'Main Sangam Road, Ward 8, Akluj',
    locationMr: 'मुख्य संगम रस्ता, प्रभाग क्र. ८, अकलूज',
    date: '12 Mar 2025',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzo8ipgnMdvvmE1cfl0beOkvPtDFVBxbQ9jdgOU5tBAhGYHkjxRSB1jLzYTfWgPz17puFj2Am6mwD01v0pmqwnwoTIChEWfBaYfTidjQKTHuRAaafvtwlYuXMeCouOQX7fsdBbgd8hUgj2YAMxPd1HF7aJiap63cMtzro-KTAwjgZkPwzR52FpzNcjQPwUAPN5Xi94hZhdix1APLfHGaHKKXT7DDqTCr8s1irqyUMob72WeRjjAznI4A',
    description: 'Supervising deployment of 140 energy-efficient LED luminaires and automated timer pillars for night safety.',
    descriptionMr: 'महिला व बालकांच्या सुरक्षेसाठी १४० नवीन एलईडी दिवे व ऑटोमॅटिक टायमर पॅनलची यशस्वी चाचणी.',
  },
  {
    id: 'g3',
    title: 'Fortnightly Jan-Sunwai Citizen Sabha',
    titleMr: 'नागरिकांशी थेट संवाद – पाक्षिक जनसुनावणी सभा',
    category: 'meetings',
    categoryLabel: 'Citizen Sabhas',
    categoryLabelMr: 'जनसंवाद',
    location: 'Ward 8 Community Hall, Akluj',
    locationMr: 'प्रभाग ८ समाज मंदिर, अकलूज',
    date: '08 Mar 2025',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMaqgkso6Xt9NXFvsThp23cs9ie7Yu7nJNtpPAzG6MTZ7zswWrPNVJeESvXaTii2r9rXayiJ5J8z7SQZeA3sYW_6WTn6stCZkTlTlLTvrlyGyJBiXlFF93Nb2J0gzH9Rm7sie7u5nD7V_kkwG4qGYjWUOxrD8X09_8mzWpHE90gb7Nxrbps6yXMISRjqR7UWsaRGdfeOEqw11PAdsrn4O6oc2J8jaF9zjVQDPyUalXgYbIfdJq3b8bOw',
    description: 'Direct redressal of drinking water supply pressure, garbage clearance intervals, and pensioner certificate assistance.',
    descriptionMr: 'प्रभागातील नागरिकांच्या पाणी, स्वच्छता व रस्त्यांच्या तक्रारी ऐकून अधिकाऱ्यांना जागेवर निर्देश देताना.',
  },
  {
    id: 'g4',
    title: 'Potable Water Quality & Pressure Check',
    titleMr: 'जलशुद्धीकरण व पाणी दाब चाचणी पाहणी',
    category: 'inspection',
    categoryLabel: 'Ward Inspection',
    categoryLabelMr: 'प्रभाग पाहणी',
    location: 'Sector 4 Water Reservoir, Akluj',
    locationMr: 'सेक्टर ४ जलकुंभ केंद्र, अकलूज',
    date: '02 Mar 2025',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-Fo-Z_2RXi0eddJp1fb3n9q1wp8npMoMngGnqmPxJpKJ3FPDmf4cLh5K1iKBiBusp0bQuPEYg5vFHubA0lJWy_UYPokBA4v2bnALl1KTopHs-sdiybBc7abbh1ArMRnnx9RFJnQQKbeH_EAo9j4p3o6OvVVL3IssykYgSRQ1pdhQQjiNkyKImO-ZSOTWZp6eBH10-u0t-Un9oJL90Zg31zZViH71QiUAI-93doUOs0hwU5mgHwVVDRA',
    description: 'Site inspection of booster valves and chlorination levels to resolve low-pressure drops in tail-end residential lanes.',
    descriptionMr: 'नागरिकांना शुद्ध व पुरेसे पाणी मिळण्यासाठी पाण्याचे नमुने व बूस्टर पंपांची तपासणी.',
  },
  {
    id: 'g5',
    title: 'Public Park & Green Wellness Space Revamp',
    titleMr: 'मध्यवर्ती उद्यान व ज्येष्ठ नागरिक विरंगुळा केंद्र विकास',
    category: 'development',
    categoryLabel: 'Development',
    categoryLabelMr: 'विकास कार्य',
    location: 'Central Ward Garden, Akluj',
    locationMr: 'मध्यवर्ती उद्यान, अकलूज',
    date: '24 Feb 2025',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDs8sW6kdUdbsaKQPJT6x2JAkfyf4-FT1Y5EyykV5g7PVV5XBtLn0tZYeKcDJlDj8gmGRieKc3w45_XzHXeLW-hBLGfm2ngf1uADXYPgVC5Lbgcuv1KgqU3agCdJjxO3QWwwPL3KZgHExP3IPplLhOwPuA9PkHWsLLiO4BdX9Nhvk-oPsG1rKX8PDZVf8JqvObNWEidbbNv7VEFHjvY4u3ISVt3rY8cjlYnscoxfRNyrD8iR2F9htoj0w',
    description: 'Commissioning of cushioned walking track, open-gym exercise stations, and shady benches dedicated to senior residents.',
    descriptionMr: 'वृद्ध, महिला व मुलांसाठी सुसज्ज वॉकिंग ट्रॅक व ओपन-जिमचे लोकार्पण.',
  },
  {
    id: 'g6',
    title: 'Commercial Lane Interlocking Paver Block Laying',
    titleMr: 'व्यापारी संकुल पेव्हर ब्लॉक व पादचारी मार्ग काम',
    category: 'works',
    categoryLabel: 'Public Works',
    categoryLabelMr: 'विकास कामे',
    location: 'Market Colony Lane, Akluj',
    locationMr: 'मार्केट कॉलनी गल्ली, अकलूज',
    date: '17 Feb 2025',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5G9NqEZR2Gsej65suEP2MH1hTZXD7ELoJ7TliYwpERnYKOgMmvH-iXsjm3naViGowThsnx5_MtdCC3GEgyTAv4IG2ZZPzXSS8ws71hfo_H7Nh2brZUa5mHcDQQQFMWYHWNM-86E2JvQtMyJCnM7lxWpIU8gMtsfpN8lItKFjwVNLwOnbR5BfUNxt5-y99k0mBsJijRmH65qDbDHYEkGFFnJapNZnj1to8LfZlP_7VisppIAnAhyGybA',
    description: 'Upgrading heavy pedestrian walkways with high-density interlocking tiles and covered drainage access points.',
    descriptionMr: 'बाजारपेठेतील पादचाऱ्यांसाठी खड्डेमुक्त पेव्हर ब्लॉक रस्ता तयार करण्याचे काम पूर्ण.',
  },
];

export const INITIAL_TICKETS: GrievanceTicket[] = [
  {
    ticketId: 'AKL-W8-2025-0842',
    name: 'Suresh Baban More',
    mobile: '9822341120',
    area: 'Shastri Nagar',
    category: 'Drainage & Sewage',
    description: 'Choked stormwater culvert causing wastewater backup near Lane 4 corner during morning peak hours.',
    timestamp: '16 Mar 2025, 11:30 AM',
    status: 'In Progress',
    assignedOfficer: 'Er. Sachin Kulkarni (Junior Engineer, Drainage)',
    progressPercent: 75,
    remarks: 'Drainage jetting machine deployed. Desilting completed up to 60m. Final culvert cap fitting underway.',
    priority: 'High',
    history: [
      { step: 'Grievance Registered', stepMr: 'तक्रार नोंदवली', time: '16 Mar, 11:30 AM', done: true },
      { step: 'Under Review by Councillor Desk', stepMr: 'कार्यालयाकडून प्राथमिक तपासणी', time: '16 Mar, 01:15 PM', done: true },
      { step: 'Forwarded to Drainage Dept', stepMr: 'सांडपाणी विभागाकडे वर्ग', time: '16 Mar, 03:00 PM', done: true },
      { step: 'Jetting Team on Site', stepMr: 'कर्मचारी घटनास्थळी कार्यरत', time: '17 Mar, 09:30 AM', done: true },
      { step: 'Citizen Verification & Close', stepMr: 'नागरिक खात्री व पूर्तता', time: 'Expected 18 Mar', done: false },
    ],
  },
  {
    ticketId: 'AKL-W8-2025-0819',
    name: 'Anjali Deshmukh',
    mobile: '9845012399',
    area: 'Sector 4',
    category: 'Street Lights',
    description: 'Flickering pole fixture outside lane 2 intersection creating dark spot for walking pedestrians.',
    timestamp: '14 Mar 2025, 08:45 PM',
    status: 'Resolved',
    assignedOfficer: 'Electrical Maintenance Crew - Unit 3',
    progressPercent: 100,
    remarks: '72W LED luminaire replaced with new IP66 waterproof unit. Operational verification confirmed by complainant.',
    priority: 'Normal',
    history: [
      { step: 'Grievance Registered', stepMr: 'तक्रार नोंदवली', time: '14 Mar, 08:45 PM', done: true },
      { step: 'Under Review', stepMr: 'तपासणी', time: '15 Mar, 09:00 AM', done: true },
      { step: 'Forwarded to Electrical Dept', stepMr: 'विद्युत विभागाकडे वर्ग', time: '15 Mar, 10:30 AM', done: true },
      { step: 'Fixture Replaced on Site', stepMr: 'नवीन दिवा बसवला', time: '15 Mar, 04:20 PM', done: true },
      { step: 'Closed & Verified via SMS', stepMr: 'नागरिकांकडून खात्रीसह पूर्ण', time: '15 Mar, 06:00 PM', done: true },
    ],
  },
  {
    ticketId: 'AKL-W8-2025-0904',
    name: 'Vikas Jadhav',
    mobile: '9765432100',
    area: 'Sangam Road',
    category: 'Water Supply',
    description: 'Low water pressure at end of lane 5 pipeline connection during morning 6 AM cycle.',
    timestamp: '22 Mar 2025, 07:15 AM',
    status: 'Forwarded to Department',
    assignedOfficer: 'Er. Sandeep Patil (Water Distribution Inspector)',
    progressPercent: 50,
    remarks: 'Valve tuning scheduled for tomorrow morning 6:30 AM to check pressure gradient.',
    priority: 'High',
    history: [
      { step: 'Grievance Registered', stepMr: 'तक्रार नोंदवली', time: '22 Mar, 07:15 AM', done: true },
      { step: 'Reviewed by Secretariat', stepMr: 'कार्यालयाकडून तपासणी', time: '22 Mar, 09:00 AM', done: true },
      { step: 'Assigned to Inspector', stepMr: 'अधिकाऱ्याकडे सोपवले', time: '22 Mar, 11:30 AM', done: true },
      { step: 'Valve Pressure Inspection', stepMr: 'दाब तपासणी नियोजित', time: '23 Mar Morning', done: false },
      { step: 'Resolution', stepMr: 'निवारण', time: 'Pending', done: false },
    ],
  },
  {
    ticketId: 'AKL-W8-2025-0955',
    name: 'Pooja Kadam',
    mobile: '9423567891',
    area: 'Market Colony',
    category: 'Road damage',
    description: 'Loose paver blocks near primary school gate causing tripping hazard for children and elderly.',
    timestamp: '23 Mar 2025, 02:45 PM',
    status: 'Submitted',
    assignedOfficer: 'Pending Desk Assignment',
    progressPercent: 20,
    remarks: 'Complaint received and queued for daily site inspection list.',
    priority: 'Normal',
    history: [
      { step: 'Grievance Registered', stepMr: 'तक्रार नोंदवली', time: '23 Mar, 02:45 PM', done: true },
      { step: 'Desk Review', stepMr: 'कार्यालयीन आढावा', time: 'Scheduled today', done: false },
      { step: 'Forwarded', stepMr: 'वर्ग केले जाईल', time: 'Pending', done: false },
      { step: 'Repair Work', stepMr: 'दुरुस्ती', time: 'Pending', done: false },
      { step: 'Closed', stepMr: 'पूर्ण', time: 'Pending', done: false },
    ],
  },
];

export const CIVIC_POLL_DATA: CivicPoll = {
  id: 'poll-q3-2025',
  question: 'Which Ward 8 community infrastructure project should be prioritized in the upcoming Municipal Quarter?',
  questionMr: 'आगामी तिमाहीत प्रभाग क्र. ८ मधील कोणत्या विकास कामाला सर्वाधिक प्राधान्य द्यावे?',
  category: 'Ward 8 Participatory Budgeting',
  totalVotes: 348,
  options: [
    {
      id: 'opt1',
      label: 'Solar Rooftop System & Battery Bank at Community Hall',
      labelMr: 'समाज मंदिरात सौर ऊर्जा पॅनेल व वीज बॅकअप यंत्रणा',
      votes: 114,
    },
    {
      id: 'opt2',
      label: 'Free Public EV Two-Wheeler Charging Kiosk near Market Chowk',
      labelMr: 'मार्केट चौकात मोफत ई-बाईक चार्जिंग स्टेशन उभारणी',
      votes: 89,
    },
    {
      id: 'opt3',
      label: 'Rubber-matted Safe Children Play Zone at Central Garden',
      labelMr: 'मध्यवर्ती उद्यानात लहान मुलांसाठी सुरक्षित रबरी मॅट व खेळणी',
      votes: 98,
    },
    {
      id: 'opt4',
      label: 'Additional CCTV Surveillance Points at Arterial Crossings',
      labelMr: 'मुख्य चौकांमध्ये अतिरिक्त सीसीटीव्ही कॅमेरे बसवणे',
      votes: 47,
    },
  ],
};

export const AKLUJ_MAP_POINTS: MapPoint[] = [
  {
    id: 'mp1',
    title: 'Ward 8 Civic Secretariat & Jan Sampark Karyalaya',
    titleMr: 'प्रभाग क्र. ८ जनसंपर्क कार्यालय',
    category: 'Public Office',
    categoryMr: 'प्रशासकीय कार्यालय',
    address: 'Near Sangam Chowk, Main Sangam Road, Akluj',
    addressMr: 'संगम चौक जवळ, मुख्य संगम रस्ता, अकलूज',
    xPercent: 52,
    yPercent: 48,
    status: 'Open: Mon-Sat 10:00 AM - 1:00 PM',
    statusMr: 'सुरू: सोम-शनि स. १०:०० ते दु. १:००',
    googleMapUrl: 'https://maps.google.com/?q=17.8920,75.0253',
    highlights: ['Citizen Walk-in Consultations', 'Grievance Registration Counter', 'Municipal Helpdesk'],
  },
  {
    id: 'mp2',
    title: 'Sector 4 Water Booster Reservoir Station',
    titleMr: 'सेक्टर ४ पाणी साठा व बूस्टर पंप केंद्र',
    category: 'Water Utility',
    categoryMr: 'पाणीपुरवठा केंद्र',
    address: 'Sector 4 Reservoir Campus, Akluj',
    addressMr: 'सेक्टर ४ जलकुंभ परिसर, अकलूज',
    xPercent: 35,
    yPercent: 32,
    status: 'Completed Augmentation (₹42.5L)',
    statusMr: 'जलवाहिनी नूतनीकरण पूर्ण (₹४२.५ लाख)',
    googleMapUrl: 'https://maps.google.com/?q=17.8945,75.0210',
    highlights: ['800m New Ductile Iron Line', '0.8 Bar Pressure Boost', 'Feeds 8,500 Residents'],
  },
  {
    id: 'mp3',
    title: 'Shastri Nagar Concrete Road & RCC Box Drain',
    titleMr: 'शास्त्री नगर सिमेंट रस्ता व आरसीसी गटार प्रकल्प',
    category: 'Road Infrastructure',
    categoryMr: 'रस्ते व सांडपाणी प्रकल्प',
    address: 'Shastri Nagar Lanes 3 to 7, Akluj',
    addressMr: 'शास्त्री नगर गल्ली ३ ते ७, अकलूज',
    xPercent: 68,
    yPercent: 38,
    status: 'Work In Progress (Target: May 2025)',
    statusMr: 'काम वेगाने सुरू (अंदाजे मे २०२५)',
    googleMapUrl: 'https://maps.google.com/?q=17.8905,75.0290',
    highlights: ['1,200m M30 Grade Concrete', 'Dual Kerb Storm Drains', 'Pre-Monsoon Flood Prevention'],
  },
  {
    id: 'mp4',
    title: 'Akluj Central Garden & Senior Citizen Park',
    titleMr: 'अकलूज मध्यवर्ती उद्यान व ज्येष्ठ नागरिक विरंगुळा केंद्र',
    category: 'Recreation & Greenery',
    categoryMr: 'उद्यान व आरोग्य केंद्र',
    address: 'Near Old Gaothan, Akluj',
    addressMr: 'जुने गावठाण परिसर, अकलूज',
    xPercent: 44,
    yPercent: 72,
    status: 'Upgraded with Open Gym & Solar Lights',
    statusMr: 'ओपन जिम व सौर दिव्यांसह सज्ज',
    googleMapUrl: 'https://maps.google.com/?q=17.8880,75.0235',
    highlights: ['650m Walking Track', '8-Station Fitness Gym', '24 Shady Seating Benches'],
  },
  {
    id: 'mp5',
    title: 'Ward Municipal Primary Health Sub-Centre',
    titleMr: 'प्रभाग प्राथमिक आरोग्य उपकेंद्र',
    category: 'Healthcare',
    categoryMr: 'आरोग्य सुविधा',
    address: 'Civic Health Complex, Malshiras Road, Akluj',
    addressMr: 'आरोग्य संकुल, माळशिरस रस्ता, अकलूज',
    xPercent: 75,
    yPercent: 65,
    status: 'DPR Prepared (₹45.0L Renovation)',
    statusMr: 'नूतनीकरण डीपीआर मंजूर (₹४५ लाख)',
    googleMapUrl: 'https://maps.google.com/?q=17.8860,75.0315',
    highlights: ['Subsidized Maternal Care', 'Cold-Chain Vaccine Depot', 'Emergency Triage Counter'],
  },
];

// LocalStorage Persistence Helpers
const STORAGE_KEYS = {
  TICKETS: 'akluj_ward8_tickets',
  WORKS: 'akluj_ward8_works',
  NEWS: 'akluj_ward8_news',
  POLL: 'akluj_ward8_poll',
  VOTED: 'akluj_ward8_user_voted',
};

export const getStoredTickets = (): GrievanceTicket[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.TICKETS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.TICKETS, JSON.stringify(INITIAL_TICKETS));
      return INITIAL_TICKETS;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed reading tickets from storage', err);
    return INITIAL_TICKETS;
  }
};

export const saveStoredTickets = (tickets: GrievanceTicket[]) => {
  try {
    localStorage.setItem(STORAGE_KEYS.TICKETS, JSON.stringify(tickets));
  } catch (err) {
    console.error('Failed saving tickets to storage', err);
  }
};

export const getStoredWorks = (): WorkItem[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.WORKS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.WORKS, JSON.stringify(INITIAL_DEVELOPMENT_WORKS));
      return INITIAL_DEVELOPMENT_WORKS;
    }
    const parsed: WorkItem[] = JSON.parse(raw);
    // Ensure all works have an image
    const merged = parsed.map((item) => {
      if (!item.image) {
        const fallback = INITIAL_DEVELOPMENT_WORKS.find((w) => w.id === item.id);
        return {
          ...item,
          image:
            fallback?.image ||
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAWU8LBZ-p4hyeHgcjUjM3PH1a1o4zqFLo4YhqmZyy9Z9mPR0F2phhoQHpSACKkViAQt23g4hsxUyshPedpMwl4E5-qIpo0lCoUZsPDujf9P1-gIOmgfH86N8VmQdwzeYvXNKUzOfeZiVLlF_FQbgHFWCPbTDx7gdLmXDeD_yvdPDVLqCEnqZQCbzd_EOU3M3-wQcsSgCFqWzG759x4rViKkz4KgVww-S2kMfHnZJK3WOZCIf304yLPiA',
        };
      }
      return item;
    });
    return merged;
  } catch (err) {
    console.error('Failed reading works from storage', err);
    return INITIAL_DEVELOPMENT_WORKS;
  }
};

export const saveStoredWorks = (works: WorkItem[]) => {
  try {
    localStorage.setItem(STORAGE_KEYS.WORKS, JSON.stringify(works));
  } catch (err) {
    console.error('Failed saving works to storage', err);
  }
};

export const getStoredNews = (): NewsItem[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.NEWS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(NEWS_ANNOUNCEMENTS));
      return NEWS_ANNOUNCEMENTS;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed reading news from storage', err);
    return NEWS_ANNOUNCEMENTS;
  }
};

export const saveStoredNews = (news: NewsItem[]) => {
  try {
    localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(news));
  } catch (err) {
    console.error('Failed saving news to storage', err);
  }
};

export const getStoredPoll = (): CivicPoll => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.POLL);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.POLL, JSON.stringify(CIVIC_POLL_DATA));
      return CIVIC_POLL_DATA;
    }
    return JSON.parse(raw);
  } catch (err) {
    return CIVIC_POLL_DATA;
  }
};

export const saveStoredPoll = (poll: CivicPoll) => {
  try {
    localStorage.setItem(STORAGE_KEYS.POLL, JSON.stringify(poll));
  } catch (err) {
    console.error('Failed saving poll to storage', err);
  }
};
