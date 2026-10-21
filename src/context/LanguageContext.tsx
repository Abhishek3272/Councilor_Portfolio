import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'mr' | 'en';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isMarathi: boolean;
  t: (key: string) => string;
}

export const translations = {
  mr: {
    // Nav
    'nav.councillorName': 'महेश केशव शिंदे',
    'nav.designation': 'नगरसेवक • प्रभाग क्र. ८',
    'nav.party': 'भारतीय जनता पार्टी (भाजपा)',
    'nav.home': 'मुख्यपृष्ठ',
    'nav.about': 'परिचय',
    'nav.works': 'विकास कामे',
    'nav.initiatives': 'नागरी उपक्रम',
    'nav.grievance': 'तक्रार निवारण',
    'nav.gallery': 'छायाचित्र दालन',
    'nav.contact': 'संपर्क कार्यालय',
    'nav.submitGrievance': 'तक्रार नोंदवा',
    'nav.langToggle': 'मराठी / ENG',

    // Hero
    'hero.badge': 'नागरी मंच • प्रभाग क्र. ८ | महानगरपालिका',
    'hero.titlePre': 'प्रभाग क्र. ८ चा विकास, ',
    'hero.titleHighlight1': 'पारदर्शक',
    'hero.titleMid': ' व ',
    'hero.titleHighlight2': 'जबाबदार',
    'hero.titlePost': ' लोकप्रतिनिधित्व',
    'hero.description':
      'भारतीय जनता पार्टीच्या (भाजपा) नेतृत्वाखाली प्रभागातील नागरिकांसाठी शुद्ध व नियमित पाणीपुरवठा, दर्जेदार रस्ते, प्रभावी सांडपाणी निचरा आणि थेट तक्रार निवारणासाठी सदैव तत्पर.',
    'hero.ctaGrievance': 'नागरी तक्रार नोंदवा',
    'hero.ctaWorks': 'विकास कामे पहा',
    'hero.wardLabel': 'निर्वाचित प्रभाग',
    'hero.wardVal': 'प्रभाग क्र. ८',
    'hero.repLabel': 'प्रतिनिधित्व',
    'hero.repVal': 'महानगरपालिका',
    'hero.janSunwaiLabel': 'जनसुनावणी',
    'hero.janSunwaiVal': 'प्रत्येक शनिवार',
    'hero.electedBadge': 'निर्वाचित लोकप्रतिनिधी',
    'hero.councillorTitle': 'महेश केशव शिंदे',
    'hero.councillorSub': 'नगरसेवक • प्रभाग क्र. ८',
    'hero.officeHours': 'कार्यालयीन वेळ: सोम – शनि • स. १०:०० ते दु. १:००',
    'hero.activeDesk': 'कार्यालय सुरू',

    // Metrics Bar
    'metrics.heading': 'प्रशासकीय कार्यक्षमता व विकास कार्य प्रगती',
    'metrics.liveView': 'थेट नोंदणी दृश्य',
    'metrics.auditView': 'लेखापरीक्षण दृश्य',
    'metrics.auditPeriod': 'अधिकृत कालावधी: वर्ष २०२४-२०२५',
    'metrics.completedWorks': 'पूर्ण झालेली कामे',
    'metrics.inProgressWorks': 'सुरू असलेली कामे',
    'metrics.grievancesResolved': 'सोडवलेल्या तक्रारी',
    'metrics.communityDrives': 'नागरी उपक्रम व स्वच्छता मोहीम',
    'metrics.verified': 'प्रमाणित कामे',
    'metrics.onSchedule': 'नियोजित वेळेनुसार',
    'metrics.slaRate': '९४% वेळेवर निवारण',
    'metrics.citizensJoined': 'नागरिकांचा सक्रिय सहभाग',

    // About Section
    'about.label': 'लोकप्रतिनिधी परिचय',
    'about.heading': 'नगरसेवक महेश केशव शिंदे',
    'about.subtitle': 'जनसेवा, नागरिक संवाद व प्रभागाचा सर्वांगीण विकास',
    'about.partyName': 'भारतीय जनता पार्टी (भाजपा)',
    'about.secretariatTitle': 'प्रभाग क्र. ८ कार्यालय',
    'about.secretariatSub': 'महानगरपालिका जनसंपर्क व प्रशासकीय कक्ष',
    'about.card1Title': 'विकास कामांची प्राथमिकता',
    'about.card1Desc':
      'प्रभागातील प्रत्येक भागात नियमित शुद्ध पिण्याचे पाणी, भुयारी गटारे व सांडपाणी निचरा, काँक्रीट रस्ते आणि अखंडित पथदिवे या मूलभूत सुविधांवर भर.',
    'about.card2Title': 'पारदर्शक प्रशासकीय दृष्टिकोन',
    'about.card2Desc':
      'महानगरपालिका अधिकारी आणि ठेकेदारांवर कडक देखरेख, निधीचा योग्य व पारदर्शक वापर आणि नागरिकांच्या सूचनांचा थेट प्रशासनात समावेश.',
    'about.card3Title': 'नागरिक संवाद व सहज संपर्क',
    'about.card3Desc':
      'दररोज जनसंपर्क कार्यालयात नागरिकांच्या अडीअडचणींची थेट सुनावणी, प्रत्यक्ष जागेवर जाऊन पाहणी आणि डिजिटल तक्रार कक्ष.',
    'about.card3Grievance': 'तक्रार नोंदवा',
    'about.card3Timings': 'कार्यालयीन वेळ',
    'about.trustNote':
      'प्रभाग क्र. ८ मधील सर्व ज्येष्ठ नागरिक, महिला व कुटुंबांच्या सर्वांगीण विकासासाठी कटिबद्ध लोकप्रतिनिधित्व.',
    'about.journeyTitle': 'सार्वजनिक व सामाजिक प्रवास',
    'about.journeySub': 'प्रभाग क्र. ८ मधील सातत्यपूर्ण जनसेवा आणि सामाजिक बांधिलकीचे टप्पे',
    'about.stage1Category': 'सामाजिक कार्य',
    'about.stage1Title': 'जनसेवेची सुरुवात',
    'about.stage1Desc':
      'स्थानिक प्रभागात नागरिकांच्या मदतीसाठी सामाजिक कार्य, स्वच्छता अभियान आणि मदत उपक्रमांमध्ये सक्रिय सहभाग.',
    'about.stage2Category': 'नागरी हक्कांची जाणीव',
    'about.stage2Title': 'लोकप्रश्नांवर प्रत्यक्ष लढा',
    'about.stage2Desc':
      'पाणीपुरवठा, आरोग्य सुविधा व रस्त्यांच्या प्रश्नांवर महानगरपालिकेकडे सातत्यपूर्ण पाठपुरावा करून समस्यांचे निराकरण.',
    'about.stage3Category': 'राजकीय वाटचाल',
    'about.stage3Title': 'सक्रिय राजकारणात प्रवेश',
    'about.stage3Desc':
      'भारतीय जनता पार्टीच्या माध्यमातून जनतेच्या सेवेसाठी समर्पित भावाने निवडणूक रिंगणात प्रवेश व भरघोस पाठिंबा.',
    'about.stage4Category': 'सध्याची जबाबदारी',
    'about.stage4Title': 'नगरसेवक पदाची लोकसेवा',
    'about.stage4Desc':
      'प्रभाग क्र. ८ चे लोकप्रतिनिधी म्हणून मंजूर कोट्यवधींच्या विकास कामांचे प्रत्यक्ष संचलन, गुणवत्ता तपासणी व दररोज नागरिकांशी संवाद.',
    'about.valuesTitle': 'मूलभूत कार्यतत्त्वे',
    'about.valuesSub': 'प्रत्येक निर्णयामध्ये पारदर्शकता आणि जनहिताला सर्वोच्च प्राधान्य',
    'about.val1Title': 'पारदर्शकता आणि जबाबदारी',
    'about.val1Desc': 'विकास निधीचा संपूर्ण हिशोब आणि प्रगती अहवाल जनतेसमोर जाहीर ठेवणे.',
    'about.val2Title': 'नागरिक सहभाग व सुलभता',
    'about.val2Desc': 'प्रत्येक नागरिकासाठी थेट भेटीची वेळ आणि तक्रारींवर त्वरित कारवाई.',
    'about.val3Title': 'जबाबदार स्थानिक स्वराज्य',
    'about.val3Desc': 'महानगरपालिका यंत्रणेशी उत्तम समन्वय आणि कामांचा दर्जा टिकवणे.',
    'about.val4Title': 'सर्वांगीण प्रभाग विकास',
    'about.val4Desc': 'सर्व गल्ल्या, सोसायट्या आणि झोपडपट्टी परिसरांचा समतोल विकास साधणे.',
    'about.visionTitle': 'भविष्यातील संकल्प व विकास ध्येये',
    'about.visionSub': 'प्रभाग क्र. ८ ला एक आदर्श आणि स्वयंपूर्ण प्रभाग बनवण्याचा संकल्प',

    // Development Works
    'works.label': 'सार्वजनिक कामांचा ताळेबंद',
    'works.heading': 'प्रभाग क्र. ८ मधील पायाभूत विकास कामे',
    'works.subtitle':
      'महानगरपालिकेकडून मंजूर व कार्यान्वित विकास प्रकल्पांची अधिकृत माहिती, बजेट आणि प्रगती तपशील.',
    'works.allTab': 'सर्व कामे',
    'works.waterTab': 'पाणीपुरवठा',
    'works.roadsTab': 'रस्ते व गटारे',
    'works.lightsTab': 'पथदिवे',
    'works.gardensTab': 'उद्याने व परिसर',
    'works.sanitationTab': 'स्वच्छता व कचरा',
    'works.facilitiesTab': 'नागरी सुविधा',
    'works.statusCompleted': 'पूर्ण झाले',
    'works.statusInProgress': 'प्रगतीपथावर',
    'works.statusProposed': 'प्रस्तावित / निविदा',
    'works.viewDetails': 'तांत्रिक तपशील पहा',
    'works.modalClose': 'बंद करा',
    'works.location': 'ठिकाण:',
    'works.contractor': 'ठेकेदार संस्था:',
    'works.sanctionDate': 'मंजुरी दिनांक:',
    'works.completion': 'पूर्णत्व / मुदत:',
    'works.budget': 'अंदाजित निधी:',
    'works.beneficiaries': 'लाभार्थी नागरिक:',
    'works.scopeTitle': 'कामाचे प्रत्यक्ष स्वरूप व व्याप्ती:',

    // Initiatives
    'initiatives.label': 'लोकसहभाग व मोहीम',
    'initiatives.heading': 'नागरिक केंद्रित उपक्रम व जनजागृती',
    'initiatives.subtitle':
      'प्रभागातील नागरिकांच्या सहकार्याने राबविले जाणारे नियमित साप्ताहिक व मासिक सामाजिक कार्यक्रम.',
    'initiatives.weeklyTitle': 'स्वच्छ प्रभाग अभियान',
    'initiatives.weeklyDesc':
      'प्रत्येक रविवारी प्रभागातील विविध सोसायट्या आणि गल्ल्यांमध्ये लोकसहभागातून स्वच्छता मोहीम.',
    'initiatives.treeTitle': 'हरित प्रभाग वृक्षारोपण',
    'initiatives.treeDesc':
      'स्थानिक झाडांची लागवड आणि वृक्ष संवर्धनासाठी सोसायटी स्तरावर रोपांचे मोफत वाटप.',
    'initiatives.seniorTitle': 'ज्येष्ठ नागरिक आरोग्य तपासणी',
    'initiatives.seniorDesc':
      'मोफत आरोग्य तपासणी शिबिरे, ईसीजी, मधुमेह चाचणी आणि मोफत औषधोपचार वितरण.',
    'initiatives.youthTitle': 'क्रीडा व युवा मंच',
    'initiatives.youthDesc':
      'प्रभागातील तरुणांसाठी खुल्या व्यायामशाळांची देखभाल आणि क्रीडा स्पर्धांचे आयोजन.',

    // Grievance Portal
    'grievance.label': 'नागरिक सेवा केंद्र',
    'grievance.heading': 'थेट नागरिक तक्रार निवारण कक्ष',
    'grievance.subtitle':
      'नगरसेवक महेश केशव शिंदे यांच्या जनसंपर्क कार्यालयाकडे थेट तक्रार नोंदवा. प्रत्येक तक्रारीला अधिकृत टोकन क्रमांक दिला जातो.',
    'grievance.urgentHelp':
      'तातडीची समस्या? (उदा. जलवाहिनी फुटणे अथवा ड्रेनेज चोकअप) महानगरपालिका आपत्कालीन नियंत्रण कक्षाशी संपर्क साधा:',
    'grievance.nameLabel': 'आपले पूर्ण नाव',
    'grievance.namePlaceholder': 'उदा. राहुल रमेश जोशी',
    'grievance.mobileLabel': 'मोबाईल नंबर',
    'grievance.mobilePlaceholder': '१० अंकी मोबाईल नंबर',
    'grievance.areaLabel': 'प्रभागातील परिसर / सोसायटी',
    'grievance.catLabel': 'तक्रारीचा प्रकार',
    'grievance.descLabel': 'तक्रारीचा सविस्तर तपशील',
    'grievance.descPlaceholder': 'समस्येचे अचूक ठिकाण, जवळची खूण, गल्ली क्रमांक आणि माहिती नमूद करा...',
    'grievance.attachLabel': 'समस्येचा फोटो जोडा (पर्यायी)',
    'grievance.dragDrop': 'फोटो येथे ड्रॅग करा किंवा ',
    'grievance.browse': 'फाईल निवडा',
    'grievance.submitBtn': 'तक्रार नोंदवा',
    'grievance.submitting': 'तक्रार नोंदवली जात आहे...',
    'grievance.whatsappDesk': 'व्हॉट्सॲप संपर्क',

    // Action Gallery
    'gallery.label': 'प्रत्यक्ष विकास कार्य',
    'gallery.heading': 'प्रभाग पाहणी व कार्य छायाचित्रे',
    'gallery.subtitle': 'प्रभागात सुरू असलेली कामे, प्रत्यक्ष पाहणी आणि नागरिक संवाद बैठकांचे छायाचित्र दालन.',
    'gallery.filterAll': 'सर्व छायाचित्रे',
    'gallery.filterInspection': 'प्रभाग पाहणी',
    'gallery.filterWorks': 'विकास कामे',
    'gallery.filterMeetings': 'नागरिक सभा',
    'gallery.filterDevelopment': 'सुशोभीकरण',

    // Contact
    'contact.label': 'कार्यालयीन संपर्क',
    'contact.heading': 'प्रभाग सचिवालय व जनसंपर्क कार्यालय',
    'contact.subtitle':
      'नागरिकांना वैयक्तिक भेटीसाठी, कामाच्या पाठपुराव्यासाठी आणि अर्जांसाठी संपर्क माहिती.',
    'contact.officeTitle': 'मुख्य जनसंपर्क कार्यालय',
    'contact.officeAddr1': 'कार्यालय क्र. ४, प्रशासकीय संकुल इमारत',
    'contact.officeAddr2': 'शास्त्री नगर मुख्य रस्ता, प्रभाग क्र. ८',
    'contact.officeAddr3': 'सामुदायिक सभागृहाच्या समोर, पिन कोड: ४११००८',
    'contact.hoursTitle': 'भेटीची वेळ व सुनावणी',
    'contact.hoursDesk': 'कार्यालयीन नागरिक भेट: सोम – शनि • स. १०:०० ते दु. १:००',
    'contact.hoursField': 'प्रत्यक्ष प्रभाग पाहणी: दु. ३:०० ते सायं. ६:००',
    'contact.emergency': 'आपत्कालीन नियंत्रण:',
    'contact.email': 'अधिकृत ईमेल:',
    'contact.mapTitle': 'प्रभाग क्र. ८ सीमा व कार्यक्षेत्र',
    'contact.mapSub': 'महानगरपालिका राजपत्रातील अधिकृत सीमांकनानुसार प्रभाग कार्यक्षेत्र',

    // Footer
    'footer.desc':
      'प्रभाग क्र. ८ मधील नागरिकांच्या सर्वांगीण विकासासाठी आणि तत्पर जनसेवेसाठी कार्यरत अधिकृत नागरी पोर्टल. भारतीय जनता पार्टी (भाजपा).',
    'footer.officeTitle': 'प्रभाग कार्यालय',
    'footer.timingsTitle': 'वेळ व संपर्क',
    'footer.channelsTitle': 'नागरिक सुविधा दुवे',
    'footer.copyright':
      '© २०२५ महेश केशव शिंदे जनसंपर्क कार्यालय, नगरसेवक प्रभाग क्र. ८. सर्व हक्क सुरक्षित.',
    'footer.topBtn': 'वर जा',
    'footer.bjpLabel': 'भारतीय जनता पार्टी (भाजपा) • अधिकृत लोकप्रतिनिधी पोर्टल',
    'floating.btn': 'तक्रार नोंदवा',
  },
  en: {
    // Nav
    'nav.councillorName': 'Mahesh Keshav Shinde',
    'nav.designation': 'Municipal Councillor • Ward No. 8',
    'nav.party': 'Bharatiya Janata Party (BJP)',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.works': 'Development Works',
    'nav.initiatives': 'Initiatives',
    'nav.grievance': 'Grievance',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.submitGrievance': 'Submit Grievance',
    'nav.langToggle': 'मराठी / ENG',

    // Hero
    'hero.badge': 'Civic Profile • Ward No. 8 | Municipal Corporation',
    'hero.titlePre': 'Serving Ward No. 8 Through ',
    'hero.titleHighlight1': 'Responsible',
    'hero.titleMid': ' & ',
    'hero.titleHighlight2': 'Accountable',
    'hero.titlePost': ' Civic Work',
    'hero.description':
      'Dedicated to transparent municipal governance, accelerated local development, robust stormwater drainage, round-the-clock water distribution, and direct citizen redressal under the leadership of Bharatiya Janata Party (BJP).',
    'hero.ctaGrievance': 'Submit Grievance',
    'hero.ctaWorks': 'View Development Works',
    'hero.wardLabel': 'Elected Ward',
    'hero.wardVal': 'Ward No. 8',
    'hero.repLabel': 'Representation',
    'hero.repVal': 'Municipal Corp',
    'hero.janSunwaiLabel': 'Jan Sunwai',
    'hero.janSunwaiVal': 'Every Saturday',
    'hero.electedBadge': 'Elected Public Representative',
    'hero.councillorTitle': 'Mahesh Keshav Shinde',
    'hero.councillorSub': 'Municipal Councillor • Ward No. 8',
    'hero.officeHours': 'Office Hours: Mon – Sat • 10:00 AM – 1:00 PM',
    'hero.activeDesk': 'Desk Active',

    // Metrics Bar
    'metrics.heading': 'Civic Performance & Accountable Metrics',
    'metrics.liveView': 'Live Register View',
    'metrics.auditView': 'Audit Period View',
    'metrics.auditPeriod': 'Official Audit Period: FY 2024–2025',
    'metrics.completedWorks': 'Works Completed',
    'metrics.inProgressWorks': 'Projects In Progress',
    'metrics.grievancesResolved': 'Grievances Addressed',
    'metrics.communityDrives': 'Community Initiatives',
    'metrics.verified': 'Municipal audit in progress',
    'metrics.onSchedule': 'Monsoon SLA benchmark',
    'metrics.slaRate': 'Average resolution: 48h',
    'metrics.citizensJoined': 'Citizen volunteers joined',

    // About Section
    'about.label': 'COUNCILLOR PROFILE',
    'about.heading': 'About Mahesh Keshav Shinde',
    'about.subtitle': 'Public Service, Community Engagement & Ward Development',
    'about.partyName': 'Bharatiya Janata Party (BJP)',
    'about.secretariatTitle': 'Ward No. 8 Secretariat',
    'about.secretariatSub': 'Municipal Corporation Governance Office',
    'about.card1Title': 'Public Service Priorities',
    'about.card1Desc':
      'Focusing core municipal resources on dependable water supply, efficient sanitation, systematic waste management, durable roads, and robust drainage networks across all ward sectors.',
    'about.card2Title': 'Approach to Governance',
    'about.card2Desc':
      'Ensuring active accountability, close coordination with municipal authorities, transparent administrative communication, and thorough follow-through on residents’ concerns.',
    'about.card3Title': 'Citizen Engagement & Access',
    'about.card3Desc':
      'Providing regular opportunities for residents to voice civic concerns, offer community feedback, and access official grievance and contact channels.',
    'about.card3Grievance': 'Submit Grievance',
    'about.card3Timings': 'Office Timings',
    'about.trustNote':
      'Committed to proactive public stewardship and accessible representation for all citizens across Ward No. 8.',
    'about.journeyTitle': 'Public Journey',
    'about.journeySub': 'Milestones and commitment to community service across Ward No. 8',
    'about.stage1Category': 'Community Service',
    'about.stage1Title': 'Beginning of Public Service',
    'about.stage1Desc':
      'Active participation in grassroots neighborhood welfare, cleanliness drives, and community support initiatives across local residential areas.',
    'about.stage2Category': 'Civic Advocacy',
    'about.stage2Title': 'Social Work & Resident Representation',
    'about.stage2Desc':
      'Liaising with civic authorities to address localized water distribution challenges, sanitation drives, and road safety concerns raised by local families.',
    'about.stage3Category': 'Democratic Representation',
    'about.stage3Title': 'Entry into Public Life',
    'about.stage3Desc':
      'Stepping forward into formal municipal public representation under the Bharatiya Janata Party (BJP) to champion transparent and development-oriented governance.',
    'about.stage4Category': 'Current Office',
    'about.stage4Title': 'Current Public Responsibilities',
    'about.stage4Desc':
      'Serving as Municipal Councillor for Ward No. 8 — supervising sanctioned civic works, conducting field inspections, and holding regular public consultation hours.',
    'about.valuesTitle': 'Core Values',
    'about.valuesSub': 'Principles guiding every administrative action and civic priority',
    'about.val1Title': 'Transparency and Accountability',
    'about.val1Desc':
      'Open communication regarding ward funds, project timelines, and clear progress reporting for all residents.',
    'about.val2Title': 'Citizen Engagement',
    'about.val2Desc':
      'Accessible consultation hours, active hearing of grievances, and community participation in neighborhood planning.',
    'about.val3Title': 'Responsible Governance',
    'about.val3Desc':
      'Disciplined coordination with municipal engineers, contractor accountability, and rule-based public administration.',
    'about.val4Title': 'Community Development',
    'about.val4Desc':
      'Fostering clean, well-lit, secure, and sustainable neighborhoods with equitable access to public infrastructure.',
    'about.visionTitle': 'Vision & Ward Priorities',
    'about.visionSub': 'Strategic priorities and intended goals for continuous ward enhancement',

    // Development Works
    'works.label': 'INFRASTRUCTURE LEDGER',
    'works.heading': 'Ward No. 8 Development Works',
    'works.subtitle':
      'Official register of municipal projects sanctioned, executed, and monitored for accountability and public verification.',
    'works.allTab': 'All Works',
    'works.waterTab': 'Water Supply',
    'works.roadsTab': 'Roads & Drainage',
    'works.lightsTab': 'Street Lighting',
    'works.gardensTab': 'Gardens & Spaces',
    'works.sanitationTab': 'Sanitation',
    'works.facilitiesTab': 'Public Facilities',
    'works.statusCompleted': 'Completed',
    'works.statusInProgress': 'In Progress',
    'works.statusProposed': 'Proposed',
    'works.viewDetails': 'View Technical Details',
    'works.modalClose': 'Close',
    'works.location': 'Location:',
    'works.contractor': 'Contractor:',
    'works.sanctionDate': 'Sanction Date:',
    'works.completion': 'Target / Completion:',
    'works.budget': 'Estimated Budget:',
    'works.beneficiaries': 'Beneficiaries:',
    'works.scopeTitle': 'Detailed Scope of Work:',

    // Initiatives
    'initiatives.label': 'COMMUNITY ACTION',
    'initiatives.heading': 'Grassroots Civic Initiatives',
    'initiatives.subtitle':
      'Participatory drives, public hygiene campaigns, and citizen-led neighborhood improvements across Ward No. 8.',
    'initiatives.weeklyTitle': 'Swachh Ward Abhiyan',
    'initiatives.weeklyDesc':
      'Weekly citizen-participatory cleaning and drain clearing drives in vulnerable spots, eliminating localized black-spots.',
    'initiatives.treeTitle': 'Harit Ward Plantation',
    'initiatives.treeDesc':
      'Targeted avenue tree planting, median greenery, and indigenous sapling distribution drives for housing societies.',
    'initiatives.seniorTitle': 'Senior Citizen Health Camps',
    'initiatives.seniorDesc':
      'Quarterly preventative checkup camps with free BP, blood sugar tests, and basic geriatric healthcare consultations.',
    'initiatives.youthTitle': 'Ward Sports & Open Gyms',
    'initiatives.youthDesc':
      'Maintenance and equipment renewal of municipal open-air gymnasiums and youth athletic coaching clinics.',

    // Grievance Portal
    'grievance.label': 'Citizen Desk',
    'grievance.heading': 'Direct Citizen Grievance Redressal',
    'grievance.subtitle':
      "Log municipal issues directly with Councillor Mahesh Keshav Shinde's office. Each complaint receives an official reference number and is tracked until resolved.",
    'grievance.urgentHelp':
      'Urgent Drainage or Main Pipeline Burst? Contact Municipal Emergency Control:',
    'grievance.nameLabel': 'Full Name',
    'grievance.namePlaceholder': 'Enter your name',
    'grievance.mobileLabel': 'Mobile Number',
    'grievance.mobilePlaceholder': '10-digit number',
    'grievance.areaLabel': 'Area / Locality',
    'grievance.catLabel': 'Grievance Category',
    'grievance.descLabel': 'Detailed Description',
    'grievance.descPlaceholder': 'Provide landmark, lane number, and specific issue details...',
    'grievance.attachLabel': 'Attach Photo / Site Evidence (Optional)',
    'grievance.dragDrop': 'Drag & drop photo here or ',
    'grievance.browse': 'browse file',
    'grievance.submitBtn': 'Submit Grievance to Ward Office',
    'grievance.submitting': 'Logging Ticket in Registry...',
    'grievance.whatsappDesk': 'WhatsApp Desk',

    // Action Gallery
    'gallery.label': 'VISUAL DOCUMENTATION',
    'gallery.heading': 'Ward Action & Field Inspections',
    'gallery.subtitle':
      'Photographic records of ongoing civil work, daily site inspections, and direct citizen sabhas across Ward No. 8.',
    'gallery.filterAll': 'All Records',
    'gallery.filterInspection': 'Ward Inspection',
    'gallery.filterWorks': 'Public Works',
    'gallery.filterMeetings': 'Citizen Sabhas',
    'gallery.filterDevelopment': 'Development',

    // Contact
    'contact.label': 'OFFICIAL ENGAGEMENT',
    'contact.heading': 'Ward Secretariat & Jurisdiction',
    'contact.subtitle':
      'Official administrative office, citizen walk-in timings, and jurisdictional demarcation of Ward No. 8.',
    'contact.officeTitle': 'Ward Secretariat Office',
    'contact.officeAddr1': 'Office No. 4, Municipal Administrative Complex',
    'contact.officeAddr2': 'Shastri Nagar Main Road, Ward No. 8',
    'contact.officeAddr3': 'Opposite Community Hall, Pin: 411008',
    'contact.hoursTitle': 'Consultation & Timings',
    'contact.hoursDesk': 'In-Office Citizen Meetings: Mon – Sat • 10:00 AM – 1:00 PM',
    'contact.hoursField': 'Field Site Inspections: 3:00 PM – 6:00 PM Daily',
    'contact.emergency': 'Emergency Control:',
    'contact.email': 'Official Email:',
    'contact.mapTitle': 'Ward No. 8 Jurisdiction Map',
    'contact.mapSub': 'Cadastral Boundary & Sector Infrastructure Layout',

    // Footer
    'footer.desc':
      'Official Civic Portal operated in service of Ward No. 8 residents under Bharatiya Janata Party (BJP). Dedicated to rapid civic resolutions, clean drinking water, modern roads, and public accountability.',
    'footer.officeTitle': 'Ward Office',
    'footer.timingsTitle': 'Grievance & Timings',
    'footer.channelsTitle': 'Citizen Channels',
    'footer.copyright':
      '© 2025 Office of Mahesh Keshav Shinde, Municipal Councillor, Ward No. 8. All rights reserved.',
    'footer.topBtn': 'Top',
    'footer.bjpLabel': 'Official Public Representative Portal • Bharatiya Janata Party (BJP)',
    'floating.btn': 'Submit Grievance',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('ward8_portal_lang');
    if (saved === 'mr' || saved === 'en') return saved;
    return 'mr'; // Default to Marathi (official local language)
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('ward8_portal_lang', lang);
  };

  const toggleLanguage = () => {
    const nextLang = language === 'mr' ? 'en' : 'mr';
    setLanguage(nextLang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    const langDict = translations[language];
    if (langDict && key in langDict) {
      return (langDict as Record<string, string>)[key];
    }
    // fallback to English
    return (translations.en as Record<string, string>)[key] || key;
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
