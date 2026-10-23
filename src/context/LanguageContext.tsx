import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'mr' | 'en';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isMarathi: boolean;
  t: (key: string) => string;
}

export const translations: Record<'mr' | 'en', Record<string, string>> = {
  mr: {
    // Nav
    'nav.councillorName': 'महेश केशव शिंदे',
    'nav.designation': 'नगरसेवक • प्रभाग क्र. ८, अकलूज',
    'nav.party': 'भारतीय जनता पार्टी (भाजपा)',
    'nav.home': 'मुख्यपृष्ठ',
    'nav.about': 'परिचय',
    'nav.works': 'विकास कामे',
    'nav.flowchart': 'कार्यप्रक्रिया',
    'nav.initiatives': 'नागरी उपक्रम',
    'nav.news': 'बातम्या व सूचना',
    'nav.grievance': 'तक्रार निवारण',
    'nav.gallery': 'छायाचित्र दालन',
    'nav.map': 'अकलूज नकाशा',
    'nav.contact': 'संपर्क कार्यालय',
    'nav.admin': 'प्रशासक / ॲडमिन',
    'nav.submitGrievance': 'तक्रार नोंदवा',
    'nav.trackGrievance': 'तक्रार स्थिती पहा',
    'nav.langToggle': 'English',

    // Top Alert
    'alert.tag': 'ताजी सार्वजनिक सूचना',
    'alert.text': 'सेक्टर ४ व संगम चौक भागात २४ ऑक्टोबर रोजी दुपारी १ ते ६ दरम्यान नियोजित जलवाहिनी दुरुस्ती. आपत्कालीन टँकरसाठी ०२१८५-२२२००८ वर संपर्क करा.',
    'alert.btn': 'सविस्तर पहा',

    // Hero
    'hero.badge': 'अधिकृत नागरी मंच • प्रभाग क्र. ८ | अकलूज नगर परिषद',
    'hero.titlePre': 'अकलूज प्रभाग क्र. ८ चा विकास, ',
    'hero.titleHighlight1': 'पारदर्शक',
    'hero.titleMid': ' व ',
    'hero.titleHighlight2': 'जबाबदार',
    'hero.titlePost': ' लोकप्रतिनिधित्व',
    'hero.description':
      'प्रभागातील प्रत्येक नागरिकासाठी २४ तास शुद्ध पाणीपुरवठा, काँक्रीट रस्ते, भूमिगत गटारे, सुरक्षित पथदिवे आणि थेट जनसुनावणीद्वारे तत्पर तक्रार निवारणासाठी कटिबद्ध.',
    'hero.ctaGrievance': 'नागरी समस्या नोंदवा',
    'hero.ctaWorks': 'विकास कामे तपासा',
    'hero.ctaTrack': 'तक्रार स्थिती ट्रॅक करा',
    'hero.wardLabel': 'निर्वाचित प्रभाग',
    'hero.wardVal': 'प्रभाग क्र. ८, अकलूज',
    'hero.repLabel': 'स्थानिक स्वराज्य संस्था',
    'hero.repVal': 'अकलूज नगर परिषद',
    'hero.janSunwaiLabel': 'खुली जनसुनावणी',
    'hero.janSunwaiVal': 'प्रत्येक शनिवारी स. १०:००',
    'hero.electedBadge': 'निर्वाचित लोकप्रतिनिधी',
    'hero.councillorTitle': 'महेश केशव शिंदे',
    'hero.councillorSub': 'नगरसेवक • प्रभाग क्र. ८, अकलूज (सोलापूर)',
    'hero.officeHours': 'कार्यालयीन वेळ: सोम – शनि • स. १०:०० ते दु. १:००',
    'hero.activeDesk': 'जनसंपर्क कार्यालय सुरू',
    'hero.demoNotice': 'डेमो प्रोटोटाईप – प्रात्यक्षिकासाठी काल्पनिक लोकप्रतिनिधी माहिती',

    // Metrics Bar
    'metrics.heading': 'प्रशासकीय कार्यक्षमता व प्रभाग विकास प्रगती',
    'metrics.liveView': 'थेट नोंदणी दृश्य',
    'metrics.auditView': 'लेखापरीक्षण दृश्य',
    'metrics.auditPeriod': 'अधिकृत लेखापरीक्षण कालावधी: वर्ष २०२४-२०२५',
    'metrics.completedWorks': 'पूर्ण झालेली कामे',
    'metrics.inProgressWorks': 'सुरू असलेली कामे',
    'metrics.grievancesResolved': 'निवारण झालेल्या तक्रारी',
    'metrics.fundsAllocated': 'प्रभाग निधी वाटप',
    'metrics.resolutionSpeed': 'सरासरी निवारण वेळ',
    'metrics.verified': 'प्रमाणित विकास कामे',
    'metrics.onSchedule': 'नियोजित वेळेनुसार प्रगती',
    'metrics.slaRate': '९४.६% समाधान दर',
    'metrics.citizensJoined': 'नागरिकांचा सक्रिय सहभाग',

    // About Section
    'about.label': 'लोकप्रतिनिधी परिचय',
    'about.heading': 'नगरसेवक महेश केशव शिंदे',
    'about.subtitle': 'जनसेवा, पारदर्शक प्रशासन आणि अकलूज प्रभाग क्र. ८ चा सर्वांगीण विकास',
    'about.partyName': 'भारतीय जनता पार्टी (भाजपा)',
    'about.secretariatTitle': 'प्रभाग क्र. ८ जनसंपर्क कार्यालय',
    'about.secretariatSub': 'नागरिक सेवा, तक्रार निवारण व प्रशासकीय समन्वय केंद्र',
    'about.card1Title': 'पायाभूत सुविधांची प्राथमिकता',
    'about.card1Desc':
      'शुद्ध पिण्याचे पाणी, रुंद काँक्रीट रस्ते, भूमिगत गटारे, ऊर्जा-बचत एलईडी पथदिवे आणि हरित उद्यानांचे नियोजनबद्ध जाळे.',
    'about.card2Title': 'पारदर्शक व जबाबदार कार्यपद्धती',
    'about.card2Desc':
      'प्रभाग विकास निधीचा प्रत्येक रुपया नागरिकांच्या डोळ्यांसमोर खर्च. कंत्राटदारांच्या कामावर गुणवत्ता नियंत्रण व लेखापरीक्षण.',
    'about.card3Title': 'थेट नागरिक संवाद (जनसुनावणी)',
    'about.card3Desc':
      'मध्यस्थ विरहीत प्रशासन. दर शनिवारी उघड्या मंचावर नगरसेवक व महापालिका अधिकारी नागरिकांच्या समस्या जागेवर सोडवतात.',
    'about.card3Grievance': 'तक्रार नोंदवा',
    'about.card3Timings': 'कार्यालय वेळ',
    'about.trustNote': 'अकलूजच्या प्रगतीसाठी प्रामाणिक व अखंड सेवा',
    'about.eduTitle': 'शैक्षणिक पात्रता व अनुभव',
    'about.eduDetails': 'बी.कॉम (पुणे विद्यापीठ) • नागरी प्रशासन व स्थानिक स्वराज्य संस्था प्रमाणपत्र',
    'about.journeyTitle': 'सार्वजनिक सेवा प्रवास (४ टप्पे)',
    'about.journeySub': 'अकलूजच्या विकासातील प्रमुख टप्पे आणि निरंतर जनसेवा',
    'about.stage1Category': 'वर्ष २०१२ – २०१६',
    'about.stage1Title': 'युवा सामाजिक चळवळ व मदत कार्य',
    'about.stage1Desc': 'अकलूज परिसरातील तरुणांना एकत्र आणून वृक्षारोपण, रक्तदान व पूरग्रस्तांना मदत कार्यात सहभाग.',
    'about.stage2Category': 'वर्ष २०१७ – २०२०',
    'about.stage2Title': 'प्रभाग नागरिक मंच व समस्या अभ्यास',
    'about.stage2Desc': 'स्थानिक सोसायट्या व वस्त्यांमध्ये पाणीटंचाई, रस्त्यांचे खड्डे व अस्वच्छतेविरुद्ध नागरी मंच स्थापन.',
    'about.stage3Category': 'वर्ष २०२१ – २०२४',
    'about.stage3Title': 'नगरसेवक पदी भरघोस मतांनी निवड',
    'about.stage3Desc': 'प्रभाग क्र. ८ मधून ऐतिहासिक मताधिक्याने नगरसेवक म्हणून लोकप्रतिनिधित्व करण्याची संधी.',
    'about.stage4Category': 'वर्ष २०२४ – चालू',
    'about.stage4Title': 'डिजिटल तक्रार निवारण व आदर्श प्रभाग',
    'about.stage4Desc': 'स्मार्ट एलईडी, बंदिस्त गटारे, थेट ॲप तक्रार पोर्टल आणि २४ तास जल सेवा नियंत्रण कक्ष कार्यान्वित.',
    'about.valuesTitle': 'मूलभूत कार्यमूल्ये',
    'about.valuesSub': 'पारदर्शकता, तत्परता आणि जनहिताला सर्वोच्च प्राधान्य',
    'about.val1Title': 'पारदर्शकता',
    'about.val1Desc': 'प्रत्येक विकासकामाची माहिती व निधीचा विनियोग नागरिकांसाठी खुला.',
    'about.val2Title': 'जनसहभाग',
    'about.val2Desc': 'प्रभागातील सोसायट्या व ज्येष्ठांच्या सूचनांनुसार कामांचे नियोजन.',
    'about.val3Title': 'जबाबदारी',
    'about.val3Desc': 'वेळेत काम पूर्ण करण्यासाठी कंत्राटदार व अधिकाऱ्यांवर कडक देखरेख.',
    'about.val4Title': 'शाश्वत विकास',
    'about.val4Desc': 'पर्यावरण, वृक्षारोपण व पाण्याचा थेंब न थेंब वाचवण्याचा ध्यास.',
    'about.visionTitle': 'प्रभाग विकासाचे ध्येय',
    'about.visionSub': 'अकलूज प्रभाग क्र. ८ ला राज्यातील एक आदर्श, सुसज्ज व स्वच्छ प्रभाग बनवण्याचा संकल्प.',

    // Development Works
    'works.label': 'प्रभाग विकास प्रकल्प',
    'works.heading': 'पूर्ण, सुरू व प्रस्तावित विकास कामे',
    'works.subtitle': 'अकलूज प्रभाग क्र. ८ मधील मंजूर प्रकल्प, निधी, कंत्राटदार व कामाची सद्यस्थिती',
    'works.allTab': 'सर्व प्रकल्प',
    'works.waterTab': 'पाणीपुरवठा',
    'works.roadsTab': 'रस्ते व गटारे',
    'works.lightsTab': 'पथदिवे',
    'works.gardensTab': 'उद्याने व जागा',
    'works.sanitationTab': 'स्वच्छता',
    'works.facilitiesTab': 'आरोग्य व नागरी सोयी',
    'works.statusAll': 'सर्व स्थिती',
    'works.statusCompleted': 'पूर्ण झाले',
    'works.statusInProgress': 'सुरू आहे',
    'works.statusProposed': 'प्रस्तावित',
    'works.viewDetails': 'सविस्तर माहिती पहा',
    'works.closeModal': 'बंद करा',
    'works.contractor': 'अधिकृत कंत्राटदार',
    'works.budget': 'मंजूर अंदाजपत्रक निधी',
    'works.sanctionDate': 'मंजुरी तारीख',
    'works.completion': 'पूर्णत्व / उद्दिष्ट दिनांक',
    'works.beneficiaries': 'लाभार्थी नागरिक',
    'works.scopeTitle': 'कामाचा सविस्तर तपशील व व्याप्ती',

    // Flowchart & Interactions
    'flowchart.label': 'नागरी कार्यप्रणाली',
    'flowchart.heading': 'तक्रार निवारण व विकास कामांचा जीवनप्रवाह (Duration Flowchart)',
    'flowchart.subtitle': 'तुमची समस्या नोंदवल्यापासून प्रत्यक्ष जागेवर निवारणापर्यंत पारदर्शक ५ टप्पे',
    'flowchart.step1Title': '१. तक्रार नोंदणी',
    'flowchart.step1Desc': 'पोर्टल किंवा व्हॉट्सॲपवर तक्रार आल्यानंतर १० मिनिटांत युनिक टोकन व एसएमएस मिळतो.',
    'flowchart.step1Time': 'कालावधी: १० मिनिटे',
    'flowchart.step2Title': '२. जागेवर पाहणी',
    'flowchart.step2Desc': 'नगरसेवक कार्यालय व संबंधित कनिष्ठ अभियंता २४ तासांत जागेवर जाऊन पाहणी करतात.',
    'flowchart.step2Time': 'कालावधी: २४ तास',
    'flowchart.step3Title': '३. निधी व कार्यआदेश',
    'flowchart.step3Desc': 'कामाचे अंदाजपत्रक तयार करून संबंधित विभागाकडे त्वरित वर्क ऑर्डर दिली जाते.',
    'flowchart.step3Time': 'कालावधी: ४८ तास',
    'flowchart.step4Title': '४. प्रत्यक्ष काम पूर्तता',
    'flowchart.step4Desc': 'ठेकेदार पथक प्रत्यक्ष जागेवर काम सुरू करते; नागरिकांना प्रगतीचा एसएमएस मिळतो.',
    'flowchart.step4Time': 'कालावधी: २-४ दिवस',
    'flowchart.step5Title': '५. नागरिक खात्री व बंद',
    'flowchart.step5Desc': 'नागरिकाने स्वतः समाधानी असल्याचा प्रतिसाद दिल्यानंतरच तक्रार पूर्ण (Resolved) केली जाते.',
    'flowchart.step5Time': 'कालावधी: अंतिम टप्पा',

    // Poll & Social
    'poll.label': 'सहभागी प्रभाग अर्थसंकल्प',
    'poll.heading': 'नागरिकांचे मत – प्रभाग प्राधान्यक्रम जनमत चाचणी',
    'poll.subtitle': 'तुमच्या मताला प्रशासनात स्थान. आगामी तिमाहीत कोणते काम प्राधान्याने करावे?',
    'poll.voteBtn': 'मत नोंदवा',
    'poll.votedText': 'आपले मत नोंदवले गेले आहे! धन्यवाद.',
    'poll.totalVotes': 'एकूण मते',
    'social.heading': 'अधिकृत सोशल मीडिया व जनसंवाद मंच',
    'social.subtitle': 'दैनिक कामांचे थेट अपडेट्स, बैठकींच्या सूचना आणि समाज माध्यमांवर थेट संपर्क',
    'social.facebook': 'फेसबुक पेज',
    'social.instagram': 'इन्स्टाग्राम',
    'social.youtube': 'युट्यूब चॅनेल',
    'social.whatsapp': 'व्हॉट्सॲप हेल्पलाईन',

    // Public Initiatives
    'initiatives.label': 'नागरी कल्याण उपक्रम',
    'initiatives.heading': 'सक्रिय जनसहभाग व जनकल्याण मोहीम',
    'initiatives.subtitle': 'नियमित स्वच्छता मोहीम, जल तपासणी, सुरक्षित रस्ते आणि जनसुनावणीचे उपक्रम',
    'initiatives.weeklyTitle': 'स्वच्छ प्रभाग रविवार मोहीम',
    'initiatives.weeklyDesc': 'दर रविवारी प्रभाग नागरिक, तरुण व स्वच्छता कर्मचाऱ्यांच्या सहभागाने स्वच्छता व गटार साफसफाई.',
    'initiatives.treeTitle': 'हरित प्रभाग व वृक्षारोपण',
    'initiatives.treeDesc': 'स्थानिक सोसायट्यांच्या सहभागाने ५००+ देशी झाडे लावण्याचा संकल्प व संगोपन.',

    // News & Announcements
    'news.label': 'अधिकृत प्रसिद्धी पत्रके',
    'news.heading': 'बातम्या, जाहीर सूचना व महत्त्वाचे अपडेट्स',
    'news.subtitle': 'प्रभागातील नागरिकांसाठी पाणीपुरवठा वेळापत्रक, बैठका व प्रशासकीय निर्णय',
    'news.readMore': 'पूर्ण पत्रक वाचा',
    'news.issuedBy': 'प्रसिद्धी कर्ता',
    'news.all': 'सर्व सूचना',

    // Gallery
    'gallery.label': 'कार्य छायाचित्र दालन',
    'gallery.heading': 'प्रत्यक्ष प्रभाग पाहणी व जनसंवाद क्षणचित्रे',
    'gallery.subtitle': 'कामाची गुणवत्ता पाहणी, जनसुनावणी सभा व विकास कामांची छायाचित्रे',
    'gallery.filterAll': 'सर्व छायाचित्रे',
    'gallery.filterInspection': 'प्रभाग पाहणी',
    'gallery.filterWorks': 'विकास कामे',
    'gallery.filterMeetings': 'जनसंवाद सभा',
    'gallery.filterDevelopment': 'उद्यान व सुविधा',

    // Grievance Portal
    'grievance.label': 'नागरी समस्या निवारण प्रणाली',
    'grievance.heading': 'थेट तक्रार नोंदणी व ऑनलाईन ट्रॅकिंग',
    'grievance.subtitle': 'रस्ते, पाणी, सांडपाणी, पथदिवे किंवा इतर नागरी समस्या येथे नोंदवा आणि प्रगती ट्रॅक करा',
    'grievance.tabRegister': 'नवीन तक्रार नोंदवा',
    'grievance.tabTrack': 'तक्रारीची सद्यस्थिती शोधा',
    'grievance.nameLabel': 'नागरिकाचे पूर्ण नाव',
    'grievance.namePlaceholder': 'उदा. राहुल रमेश पाटील',
    'grievance.mobileLabel': 'मोबाईल क्रमांक (एसएमएससाठी)',
    'grievance.mobilePlaceholder': '१० अंकी मोबाईल क्रमांक',
    'grievance.areaLabel': 'प्रभागातील परिसर / रस्ता',
    'grievance.catLabel': 'समस्येचा प्रकार',
    'grievance.descLabel': 'समस्येचे सविस्तर वर्णन',
    'grievance.descPlaceholder': 'खड्डा, पाण्याची गळती किंवा बंद दिव्याचे नेमके ठिकाण व समस्या लिहा...',
    'grievance.attachLabel': 'फोटो जोडा (पर्यायी)',
    'grievance.consentLabel': 'मी ही तक्रार अधिकृत निवारणासाठी नगरसेवक कार्यालयाकडे नोंदवण्यास संमती देत आहे.',
    'grievance.dragDrop': 'फोटो येथे ड्रॅग करा किंवा ',
    'grievance.browse': 'ब्राउझ करा',
    'grievance.submitBtn': 'अधिकृत तक्रार नोंदवा',
    'grievance.submitting': 'नोंदणी होत आहे...',
    'grievance.urgentHelp': 'तातडीच्या आपत्कालीन मदतीसाठी थेट फोन करा:',
    'grievance.whatsappDesk': 'व्हॉट्सॲप तक्रार कक्ष',
    'grievance.trackPlaceholder': 'तक्रार टोकन क्रमांक (उदा. AKL-W8-2025-0842) किंवा मोबाईल नंबर टाका...',
    'grievance.searchBtn': 'तपासा',
    'grievance.statusHeading': 'तक्रार प्रगती अहवाल',
    'grievance.assignedTo': 'नियुक्त अधिकारी',
    'grievance.remarks': 'कार्यालयीन शेरा',
    'grievance.downloadReceipt': 'पावती डाउनलोड करा / प्रिंट करा',

    // Akluj Map
    'map.label': 'भौगोलिक प्रभाग नकाशा',
    'map.heading': 'अकलूज प्रभाग क्र. ८ संवादी नकाशा (Interactive Map)',
    'map.subtitle': 'कार्यालय, जलकुंभ, काँक्रीट रस्ते व मध्यवर्ती उद्यानाचे अचूक स्थान',
    'map.directions': 'गुगल मॅप्सवर रस्ता पहा',
    'map.pinsInfo': 'नकाशातील बिंदूवर क्लिक करून प्रकल्पाची माहिती पहा',

    // Secretariat Contact & Form
    'contact.label': 'कार्यालय संपर्क व थेट संदेश',
    'contact.heading': 'नगरसेवक जनसंपर्क कार्यालय, अकलूज',
    'contact.subtitle': 'नागरिकांच्या भेटीसाठी कार्यालय सदैव खुले आहे. आपण थेट भेटू शकता किंवा खालील फॉर्मद्वारे संदेश पाठवू शकता.',
    'contact.officeAddr1': 'प्रभाग क्र. ८ जनसंपर्क कार्यालय',
    'contact.officeAddr2': 'संगम चौक जवळ, मुख्य संगम रस्ता, अकलूज',
    'contact.officeAddr3': 'ता. माळशिरस, जि. सोलापूर, महाराष्ट्र ४१३१०१',
    'contact.hoursTitle': 'कार्यालयीन व प्रभाग पाहणी वेळ',
    'contact.email': 'अधिकृत संपर्क ईमेल:',
    'contact.emergency': 'आपत्कालीन प्रभाग डेस्क:',
    'contact.formHeading': 'नगरसेवकांना थेट संदेश किंवा समस्या पाठवा',
    'contact.formSub': 'आपली सूचना, काम किंवा संदेश लिहा; आमचे कार्यालय २४ तासांत संपर्क करेल.',
    'contact.sendBtn': 'संदेश पाठवा',
    'contact.sentSuccess': 'आपला संदेश नगरसेवक कार्यालयास प्राप्त झाला आहे. आम्ही लवकरच संपर्क करू.',

    // Admin Dashboard
    'admin.label': 'प्रशासक नियंत्रण कक्ष',
    'admin.heading': 'प्रभाग व्यवस्थापन व विकास नियंत्रण पॅनेल',
    'admin.subtitle': 'तक्रारींचे निवारण, नवीन विकास प्रकल्प जोडणे, जाहीर सूचना प्रसिद्ध करणे व अहवाल',
    'admin.passcodePrompt': 'प्रशासक पासवर्ड प्रविष्ट करा',
    'admin.loginBtn': 'प्रवेश करा',
    'admin.tabComplaints': 'सर्व तक्रारी व्यवस्थापन',
    'admin.tabAddWork': 'नवीन विकास काम जोडा',
    'admin.tabPublishNews': 'नवीन सूचना प्रसिद्ध करा',
    'admin.exportCsv': 'तक्रार अहवाल CSV डाउनलोड करा',
    'admin.updateStatus': 'स्थिती बदला',
    'admin.saveChanges': 'बदल जतन करा',

    // AI Civic Assistant
    'ai.title': 'अकलूज प्रभाग AI मित्र (Civic Assistant)',
    'ai.subtitle': '२४ तास नागरी सहाय्यक – समस्या नोंदणी, वेळापत्रक व योजनांची उत्तरे',
    'ai.placeholder': 'आपला प्रश्न येथे विचारा (उदा. पाणीपुरवठा वेळ, तक्रार कशी करावी)...',
    'ai.send': 'विचारा',

    // Footer
    'footer.desc':
      'अकलूज नगर परिषद प्रभाग क्र. ८ चे अधिकृत नागरी पोर्टल. नागरिकांच्या सहभागाने स्वच्छ, सुंदर आणि समृद्ध प्रभागाच्या निर्मितीसाठी सदैव कटिबद्ध.',
    'footer.officeTitle': 'कार्यालय पत्ता',
    'footer.timingsTitle': 'भेटीची वेळ व हेल्पलाईन',
    'footer.channelsTitle': 'महत्त्वाचे दुवे',
    'footer.bjpLabel': 'भारतीय जनता पार्टी (भाजपा)',
    'footer.topBtn': 'वर जा',
    'footer.copyright': '© २०२६ प्रभाग क्र. ८ अकलूज नगर परिषद. सर्व हक्क राखीव. लोकसेवा पोर्टल.',
    'floating.btn': 'तक्रार नोंदवा',
  },
  en: {
    // Nav
    'nav.councillorName': 'Mahesh Keshav Shinde',
    'nav.designation': 'Municipal Councillor • Ward No. 8, Akluj',
    'nav.party': 'Bharatiya Janata Party (BJP)',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.works': 'Development Works',
    'nav.flowchart': 'Civic Workflow',
    'nav.initiatives': 'Public Initiatives',
    'nav.news': 'News & Notices',
    'nav.grievance': 'Grievance Redressal',
    'nav.gallery': 'Photo Gallery',
    'nav.map': 'Akluj Map',
    'nav.contact': 'Contact Office',
    'nav.admin': 'Admin Portal',
    'nav.submitGrievance': 'Register Complaint',
    'nav.trackGrievance': 'Track Status',
    'nav.langToggle': 'मराठी',

    // Top Alert
    'alert.tag': 'Urgent Civic Alert',
    'alert.text': 'Scheduled water pipeline maintenance in Sector 4 & Sangam Chowk on 24th Oct from 1 PM to 6 PM. Emergency tanker hotline: 02185-222008.',
    'alert.btn': 'View Circular',

    // Hero
    'hero.badge': 'Official Civic Portal • Ward No. 8 | Akluj Municipal Council',
    'hero.titlePre': 'Development of Ward 8, ',
    'hero.titleHighlight1': 'Transparent',
    'hero.titleMid': ' & ',
    'hero.titleHighlight2': 'Accountable',
    'hero.titlePost': ' Public Leadership',
    'hero.description':
      'Committed under the Bharatiya Janata Party (BJP) to continuous clean water, concrete roads, stormwater drainage, smart LED street lighting, and direct Jan Sunwai grievance resolution for every resident.',
    'hero.ctaGrievance': 'Register Grievance',
    'hero.ctaWorks': 'View Development Works',
    'hero.ctaTrack': 'Track Complaint Status',
    'hero.wardLabel': 'Elected Constituency',
    'hero.wardVal': 'Ward No. 8, Akluj',
    'hero.repLabel': 'Municipal Authority',
    'hero.repVal': 'Akluj Nagar Parishad',
    'hero.janSunwaiLabel': 'Open Jan Sunwai',
    'hero.janSunwaiVal': 'Alternate Saturdays 10 AM',
    'hero.electedBadge': 'Elected Representative',
    'hero.councillorTitle': 'Mahesh Keshav Shinde',
    'hero.councillorSub': 'Municipal Councillor • Ward No. 8, Akluj (Solapur)',
    'hero.officeHours': 'Public Office Hours: Mon – Sat • 10:00 AM to 1:00 PM',
    'hero.activeDesk': 'Public Desk Active',
    'hero.demoNotice': 'Demo Prototype — Fictional Politician Profile for Demonstration',

    // Metrics Bar
    'metrics.heading': 'Administrative Efficiency & Ward Development Metrics',
    'metrics.liveView': 'Live Civic Tracker',
    'metrics.auditView': 'Audited Annual View',
    'metrics.auditPeriod': 'Official Audit Period: FY 2024–2025',
    'metrics.completedWorks': 'Completed Projects',
    'metrics.inProgressWorks': 'Active In-Progress',
    'metrics.grievancesResolved': 'Resolved Grievances',
    'metrics.fundsAllocated': 'Ward Funds Allocated',
    'metrics.resolutionSpeed': 'Avg. Resolution Speed',
    'metrics.verified': 'Verified Public Works',
    'metrics.onSchedule': 'On-Schedule Delivery',
    'metrics.slaRate': '94.6% Satisfaction Rate',
    'metrics.citizensJoined': 'Citizens Participated',

    // About Section
    'about.label': 'Representative Profile',
    'about.heading': 'Councillor Mahesh Keshav Shinde',
    'about.subtitle': 'Grassroots Public Service, Transparent Governance & Holistic Ward Development',
    'about.partyName': 'Bharatiya Janata Party (BJP)',
    'about.secretariatTitle': 'Ward No. 8 Public Secretariat',
    'about.secretariatSub': 'Civic Redressal, Coordination & Community Liaison Hub',
    'about.card1Title': 'Basic Infrastructure First',
    'about.card1Desc':
      'Uninterrupted potable water supply, high-density concrete roads, concealed RCC stormwater drains, and modern smart LED lighting network.',
    'about.card2Title': 'Accountable Administration',
    'about.card2Desc':
      'Zero tolerance for contractor negligence. Every rupee of municipal ward development funds is published openly for citizen scrutiny.',
    'about.card3Title': 'Direct Jan Sunwai Sabhas',
    'about.card3Desc':
      'Bridging citizens and municipal administration without bureaucratic delay. Direct open-floor consultations on alternate Saturdays.',
    'about.card3Grievance': 'Register Grievance',
    'about.card3Timings': 'Office Timings',
    'about.trustNote': 'Dedicated, Accessible & Accountable Civic Leadership',
    'about.eduTitle': 'Education & Experience',
    'about.eduDetails': 'B.Com (Savitribai Phule Pune University) • Diploma in Civic Governance & Urban Administration',
    'about.journeyTitle': 'Public Service Trajectory (4 Milestones)',
    'about.journeySub': 'A dedicated timeline of civic contributions and community advocacy in Akluj',
    'about.stage1Category': '2012 – 2016',
    'about.stage1Title': 'Youth Social Welfare & Flood Relief',
    'about.stage1Desc': 'Organized blood donation camps, local tree drives, and relief material distribution during regional rural distress.',
    'about.stage2Category': '2017 – 2020',
    'about.stage2Title': 'Ward Civic Forum & Water Advocacy',
    'about.stage2Desc': 'Campaigned with residential societies for equal drinking water distribution and pre-monsoon desilting.',
    'about.stage3Category': '2021 – 2024',
    'about.stage3Title': 'Election as Municipal Councillor',
    'about.stage3Desc': 'Elected with an overwhelming mandate to represent Ward No. 8 in the municipal council.',
    'about.stage4Category': '2024 – Present',
    'about.stage4Title': 'Digital Ward Transformation & Smart Amenities',
    'about.stage4Desc': 'Rolled out online grievance tracking, smart streetlights, community park overhaul, and 24x7 water control desk.',
    'about.valuesTitle': 'Core Guiding Values',
    'about.valuesSub': 'Transparency, responsiveness, and people-first governance in every initiative',
    'about.val1Title': 'Transparency',
    'about.val1Desc': 'Open publication of project budgets, timelines, and municipal fund allocation.',
    'about.val2Title': 'Citizen Participation',
    'about.val2Desc': 'Consultative decision-making with residential societies and senior citizens.',
    'about.val3Title': 'Strict Accountability',
    'about.val3Desc': 'Rigorous SLA enforcement on contractors and prompt redressing of lapses.',
    'about.val4Title': 'Sustainable Development',
    'about.val4Desc': 'Eco-conscious infrastructure, solar lighting, and groundwater recharging.',
    'about.visionTitle': 'Ward Vision & Priorities',
    'about.visionSub': 'Transforming Ward 8 into a model civic zone with modern amenities in Solapur district.',

    // Development Works
    'works.label': 'Ward Development Projects',
    'works.heading': 'Completed, Active & Proposed Civic Projects',
    'works.subtitle': 'Track verified budgets, contractors, sanction timelines, and field inspection photographs',
    'works.allTab': 'All Works',
    'works.waterTab': 'Water Supply',
    'works.roadsTab': 'Roads & Drainage',
    'works.lightsTab': 'Street Lighting',
    'works.gardensTab': 'Gardens & Spaces',
    'works.sanitationTab': 'Sanitation',
    'works.facilitiesTab': 'Public Facilities',
    'works.statusAll': 'All Statuses',
    'works.statusCompleted': 'Completed',
    'works.statusInProgress': 'In Progress',
    'works.statusProposed': 'Proposed',
    'works.viewDetails': 'View Project Details',
    'works.closeModal': 'Close',
    'works.contractor': 'Authorized Contractor',
    'works.budget': 'Sanctioned Budget',
    'works.sanctionDate': 'Sanction Date',
    'works.completion': 'Completion / Target Date',
    'works.beneficiaries': 'Beneficiary Citizens',
    'works.scopeTitle': 'Detailed Scope of Work & Engineering Specs',

    // Flowchart & Interactions
    'flowchart.label': 'Civic Workflow & Stepper',
    'flowchart.heading': 'Grievance Redressal & Work Lifecycle (Duration Flowchart)',
    'flowchart.subtitle': 'A structured, transparent 5-step journey from citizen complaint to verified field resolution',
    'flowchart.step1Title': '1. Grievance Logging',
    'flowchart.step1Desc': 'Unique token ID generated within 10 minutes with instant SMS confirmation to complainant.',
    'flowchart.step1Time': 'Duration: 10 Mins',
    'flowchart.step2Title': '2. 24h Site Inspection',
    'flowchart.step2Desc': 'Ward Councillor secretariat and junior civil/electrical engineer inspect the site physically.',
    'flowchart.step2Time': 'Duration: 24 Hours',
    'flowchart.step3Title': '3. Sanction & Work Order',
    'flowchart.step3Desc': 'Budget allocated and emergency maintenance work order issued to designated municipal contractor.',
    'flowchart.step3Time': 'Duration: 48 Hours',
    'flowchart.step4Title': '4. Ground Execution',
    'flowchart.step4Desc': 'Repair/construction undertaken on-site with live tracking updates provided to the citizen.',
    'flowchart.step4Time': 'Duration: 2-4 Days',
    'flowchart.step5Title': '5. Verification & Closure',
    'flowchart.step5Desc': 'Closed only after complainant verification and satisfactory sign-off by junior engineer.',
    'flowchart.step5Time': 'Final Sign-off',

    // Poll & Social
    'poll.label': 'Participatory Budgeting',
    'poll.heading': 'People’s Voice – Ward 8 Community Priority Poll',
    'poll.subtitle': 'Direct citizen participation in civic choices. Which amenity should receive top priority in Q3?',
    'poll.voteBtn': 'Cast Your Vote',
    'poll.votedText': 'Your vote has been counted! Thank you for participating.',
    'poll.totalVotes': 'Total Citizen Votes',
    'social.heading': 'Official Social Media & Connect Hub',
    'social.subtitle': 'Daily public service updates, event live-streams, and verified direct civic communication channels',
    'social.facebook': 'Facebook Page',
    'social.instagram': 'Instagram',
    'social.youtube': 'YouTube Channel',
    'social.whatsapp': 'WhatsApp Helpline',

    // Public Initiatives
    'initiatives.label': 'Civic Engagement',
    'initiatives.heading': 'Community Welfare & Participatory Drives',
    'initiatives.subtitle': 'Active citizen participation in cleanliness drives, water audits, night safety, and public sabhas',
    'initiatives.weeklyTitle': 'Clean Ward Sunday Drive',
    'initiatives.weeklyDesc': 'Weekly community-led drain cleaning, debris clearing, and public sanitation campaigns.',
    'initiatives.treeTitle': 'Green Ward Plantation Drive',
    'initiatives.treeDesc': 'Planting 500+ indigenous trees across road verges, public parks, and school campuses.',

    // News & Announcements
    'news.label': 'Official Circulars & Press',
    'news.heading': 'News, Public Notices & Ward Announcements',
    'news.subtitle': 'Stay informed with water supply advisories, community health camps, and infrastructure updates',
    'news.readMore': 'Read Full Notice',
    'news.issuedBy': 'Issued By',
    'news.all': 'All Notices',

    // Gallery
    'gallery.label': 'Field Visual Archive',
    'gallery.heading': 'Site Inspections, Citizen Sabhas & Public Works',
    'gallery.subtitle': 'Photographic documentation of completed projects, ongoing road laying, and public consultations',
    'gallery.filterAll': 'All Photos',
    'gallery.filterInspection': 'Ward Inspections',
    'gallery.filterWorks': 'Public Works',
    'gallery.filterMeetings': 'Citizen Sabhas',
    'gallery.filterDevelopment': 'Parks & Spaces',

    // Grievance Portal
    'grievance.label': 'Civic Grievance Redressal System',
    'grievance.heading': 'Direct Complaint Registration & Live Status Tracking',
    'grievance.subtitle': 'Report road potholes, water leakage, choked drainage, or street light issues with verified SLA tracking',
    'grievance.tabRegister': 'Register New Complaint',
    'grievance.tabTrack': 'Track Complaint Status',
    'grievance.nameLabel': 'Citizen Full Name',
    'grievance.namePlaceholder': 'e.g. Ramesh Shankar Patil',
    'grievance.mobileLabel': 'Mobile Number (For SMS Updates)',
    'grievance.mobilePlaceholder': '10-digit mobile number',
    'grievance.areaLabel': 'Locality / Street in Ward 8',
    'grievance.catLabel': 'Issue Category',
    'grievance.descLabel': 'Detailed Description of Grievance',
    'grievance.descPlaceholder': 'Specify exact landmark, severity of pothole/leak, and duration of issue...',
    'grievance.attachLabel': 'Attach Photo / Evidence (Optional)',
    'grievance.consentLabel': 'I give consent to process this civic complaint for official municipal action and verification.',
    'grievance.dragDrop': 'Drag & drop image here or ',
    'grievance.browse': 'Browse Files',
    'grievance.submitBtn': 'Submit Official Grievance',
    'grievance.submitting': 'Registering...',
    'grievance.urgentHelp': 'For urgent civic breakdown emergencies, call direct line:',
    'grievance.whatsappDesk': 'WhatsApp Grievance Desk',
    'grievance.trackPlaceholder': 'Enter Reference Ticket ID (e.g. AKL-W8-2025-0842) or Mobile Number...',
    'grievance.searchBtn': 'Track Now',
    'grievance.statusHeading': 'Grievance Status & Action Timeline',
    'grievance.assignedTo': 'Assigned Officer',
    'grievance.remarks': 'Desk Resolution Notes',
    'grievance.downloadReceipt': 'Print / Save Official Receipt',

    // Akluj Map
    'map.label': 'Geographical Boundary',
    'map.heading': 'Akluj Ward No. 8 Interactive Civic Map',
    'map.subtitle': 'Locate the Secretariat, Water Reservoir, Shastri Nagar Road Project, and Central Garden',
    'map.directions': 'Get Google Maps Directions',
    'map.pinsInfo': 'Click any location pin on the map to explore project details & coordinates',

    // Secretariat Contact & Form
    'contact.label': 'Secretariat & Direct Connect',
    'contact.heading': 'Ward No. 8 Public Secretariat, Akluj',
    'contact.subtitle': 'Citizens are warmly welcome during public hours without appointment. You can also send a direct message below.',
    'contact.officeAddr1': 'Ward 8 Civic Secretariat',
    'contact.officeAddr2': 'Near Sangam Chowk, Main Sangam Road, Akluj',
    'contact.officeAddr3': 'Taluka Malshiras, Solapur District, Maharashtra 413101',
    'contact.hoursTitle': 'Consultation & Field Inspection Hours',
    'contact.email': 'Official Contact Email:',
    'contact.emergency': 'Emergency Civic Hotline:',
    'contact.formHeading': 'Send a Direct Message or Civic Feedback to Councillor',
    'contact.formSub': 'Write your suggestion, query, or invitation; the secretariat will respond within 24 hours.',
    'contact.sendBtn': 'Send Direct Message',
    'contact.sentSuccess': 'Your message has been delivered to Councillor Mahesh Shinde’s office. We will get in touch shortly.',

    // Admin Dashboard
    'admin.label': 'Admin & Developer Console',
    'admin.heading': 'Ward Management & Civic CMS Control Panel',
    'admin.subtitle': 'Manage citizen complaints, update project progress, post urgent notices, and export reports',
    'admin.passcodePrompt': 'Enter Administrator Passcode',
    'admin.loginBtn': 'Unlock Dashboard',
    'admin.tabComplaints': 'All Complaints Manager',
    'admin.tabAddWork': 'Add Development Project',
    'admin.tabPublishNews': 'Publish Notice / Circular',
    'admin.exportCsv': 'Export Complaints as CSV',
    'admin.updateStatus': 'Update Status',
    'admin.saveChanges': 'Save Changes',

    // AI Civic Assistant
    'ai.title': 'Akluj Ward 8 AI Mitra (Civic Assistant)',
    'ai.subtitle': '24/7 Smart Citizen Helpdesk — Timings, Grievance Guide & Ward FAQs',
    'ai.placeholder': 'Ask any question about Ward 8 services...',
    'ai.send': 'Ask',

    // Footer
    'footer.desc':
      'Official Civic & Public Representation Portal for Ward No. 8, Akluj Nagar Parishad. Committed to transparent, responsive, and people-first governance.',
    'footer.officeTitle': 'Secretariat Address',
    'footer.timingsTitle': 'Office Timings & Hotline',
    'footer.channelsTitle': 'Quick Navigation',
    'footer.bjpLabel': 'Bharatiya Janata Party (BJP)',
    'footer.topBtn': 'Back to Top',
    'footer.copyright': '© 2026 Ward No. 8 Akluj Municipal Council. All rights reserved. Public Service Portal.',
    'floating.btn': 'Report Civic Issue',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('civic_lang');
      return saved === 'mr' || saved === 'en' ? saved : 'mr';
    } catch {
      return 'mr';
    }
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('civic_lang', lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'mr' ? 'en' : 'mr');
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        isMarathi: language === 'mr',
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
