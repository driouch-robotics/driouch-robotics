import { localizeHomeHref, type Locale } from '~/i18n/config';

const currentYear = new Date().getFullYear();

const projectLinks = {
  robotics: [
    { key: 'smartDriouch', href: '/projects/smart-driouch' },
    { key: 'roboticArm', href: '/projects/robotic-arm' },
    { key: 'explorerCar', href: '/projects/explorer-car' },
    { key: 'autonomousVehicle', href: '/projects/autonomous-vehicle' },
    { key: 'smartBell', href: '/projects/smart-bell' },
    { key: 'smartFarm', href: '/projects/smart-farm' },
    { key: 'smartHelmet', href: '/projects/smart-helmet' },
  ],
  ai: [
    { key: 'smartAssistant', href: '/projects/smart-assistant' },
    { key: 'digitalAbsence', href: '/projects/digital-absence-management' },
    { key: 'digitalTextbook', href: '/projects/digital-textbook' },
    { key: 'aiContent', href: '/projects/ai-content-creation' },
  ],
} as const;

const awarenessProjectLinks = [
  { key: 'olympiadKnowledge', href: '/projects/informatics-olympiad' },
  { key: 'gamesAwareness', href: '/projects/video-games-awareness' },
  { key: 'typingChallenge', href: '/projects/typing-speed-challenge' },
] as const;

const text = {
  ar: {
    nav: {
      home: 'الرئيسية',
      technicalProjects: 'المشاريع التقنية',
      robotics: 'الأنظمة المدمجة والروبوتيك',
      aiDigital: 'الذكاء الاصطناعي والرقمنة',
      awareness: 'التوعية والمسابقات',
      team: 'فريق العمل',
      about: 'من نحن',
      overview: 'معلومات عامة حول التأسيس',
      contact: 'معلومات التواصل',
      faq: 'الأسئلة الشائعة',
      iaDay2025: 'IA Day 2025 Edition 1',
      iaDay2026: 'IA Day 2026 Edition 2',
      location: 'الموقع الجغرافي',
    },
    projectNames: {
      smartDriouch: 'مشروع مدينة الدريوش الذكية',
      roboticArm: 'مشروع الذراع الروبوتية التعليمية',
      explorerCar: 'السيارة الذكية المستكشفة',
      autonomousVehicle: 'المركبة الذاتية متتبعة المسار',
      smartBell: 'الجرس المدرسي الذكي',
      smartFarm: 'المزرعة الذكية المستدامة',
      smartHelmet: 'الخوذة الذكية للسلامة الطرقية',
      smartAssistant: 'المساعد الذكي التفاعلي',
      digitalAbsence: 'نظام تدبير الغياب الرقمي',
      digitalTextbook: 'الكتاب الرقمي التفاعلي',
      aiContent: 'صناعة المحتوى بالذكاء الاصطناعي',
      olympiadKnowledge: 'أولمبياد المعرفة',
      gamesAwareness: 'الوجه الخفي للألعاب',
      typingChallenge: 'تحدي السرعة الرقمي',
    },
    actions: {
      iaMemory: 'IA 2025',
      olympiad: 'الأولمبياد',
    },
    headerLabels: {
      languageSwitcher: 'تغيير اللغة',
      mainSection: 'قسم رئيسي',
      projectsLabel: 'مشاريع',
      sectionProjects: 'المشاريع التابعة لهذا القسم',
    },
    footer: {
      aboutTitle: 'عن النادي',
      programsTitle: 'البرامج',
      quickTitle: 'روابط سريعة',
      contactTitle: 'تواصل',
      about: 'من نحن',
      history: 'تاريخ التأسيس',
      founder: 'المؤسس: الأستاذ محمد الغوات',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      school: 'ثانوية الوحدة الإعدادية الرائدة',
      locality: 'امطالسة - الدريوش',
      region: 'جهة الشرق - المغرب',
      rights: 'جميع الحقوق محفوظة',
      design: 'تصميم وتطوير',
      spirit: 'بروح الذكاء الاصطناعي والروبوتيك',
      platform: 'منصة أولمبياد المعلوميات التفاعلي - الدريوش',
      brandDescription:
        'نادي تربوي تقني يهدف إلى تمكين المتعلمين من مهارات الروبوتيك، البرمجة، والذكاء الاصطناعي عبر مشاريع تطبيقية وأنشطة تنافسية مرتبطة بالمؤسسة والمحيط المحلي.',
      aboutButton: 'من نحن',
      visitButton: 'زيارة الموقع',
      locationFull: 'ثانوية الوحدة الإعدادية الرائدة، امطالسة، الدريوش، جهة الشرق',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      technicalProjects: 'Projets techniques',
      robotics: 'Systèmes embarqués et robotique',
      aiDigital: 'Intelligence artificielle et numérisation',
      awareness: 'Sensibilisation et compétitions',
      team: 'Équipe',
      about: 'À propos',
      overview: 'Informations générales',
      contact: 'Contact',
      faq: 'Questions fréquentes',
      iaDay2025: 'IA Day 2025 Edition 1',
      iaDay2026: 'IA Day 2026 Edition 2',
      location: 'Localisation',
    },
    projectNames: {
      smartDriouch: 'Ville intelligente de Driouch',
      roboticArm: 'Bras robotique pédagogique',
      explorerCar: 'Voiture exploratrice intelligente',
      autonomousVehicle: 'Véhicule autonome suiveur de ligne',
      smartBell: 'Cloche scolaire intelligente',
      smartFarm: 'Ferme intelligente durable',
      smartHelmet: 'Casque intelligent de sécurité routière',
      smartAssistant: 'Assistant intelligent interactif',
      digitalAbsence: 'Système numérique de gestion des absences',
      digitalTextbook: 'Manuel numérique interactif',
      aiContent: 'Création de contenu par IA',
      olympiadKnowledge: 'Olympiade de la culture informatique',
      gamesAwareness: 'La face cachée des jeux vidéo',
      typingChallenge: 'Défi de vitesse numérique',
    },
    actions: {
      iaMemory: 'IA 2025',
      olympiad: 'Olympiade',
    },
    headerLabels: {
      languageSwitcher: 'Changer de langue',
      mainSection: 'Section principale',
      projectsLabel: 'projets',
      sectionProjects: 'Projets de cette section',
    },
    footer: {
      aboutTitle: 'À propos',
      programsTitle: 'Programmes',
      quickTitle: 'Liens rapides',
      contactTitle: 'Contact',
      about: 'Qui sommes-nous',
      history: 'Histoire du club',
      founder: 'Fondateur : Prof. Mohamed El Rhaouat',
      phone: 'Téléphone',
      email: 'E-mail',
      school: 'Collège pionnier Al Wahda',
      locality: 'Amtalssa - Driouch',
      region: 'Région de l’Oriental - Maroc',
      rights: 'Tous droits réservés',
      design: 'Conception et développement',
      spirit: 'Avec l’esprit de l’IA et de la robotique',
      platform: 'Plateforme interactive de l’olympiade informatique - Driouch',
      brandDescription:
        "Club éducatif et technologique qui aide les élèves à maîtriser la robotique, la programmation et l’intelligence artificielle à travers des projets concrets et des activités compétitives liées à l’établissement et à son territoire.",
      aboutButton: 'À propos',
      visitButton: 'Voir la localisation',
      locationFull: 'Collège pionnier Al Wahda, Amtalssa, Driouch, Région de l’Oriental',
    },
  },
  en: {
    nav: {
      home: 'Home',
      technicalProjects: 'Technical projects',
      robotics: 'Embedded systems and robotics',
      aiDigital: 'Artificial intelligence and digitalization',
      awareness: 'Awareness and competitions',
      team: 'Team',
      about: 'About',
      overview: 'General information',
      contact: 'Contact information',
      faq: 'FAQ',
      iaDay2025: 'IA Day 2025 Edition 1',
      iaDay2026: 'IA Day 2026 Edition 2',
      location: 'Location',
    },
    projectNames: {
      smartDriouch: 'Driouch Smart City',
      roboticArm: 'Educational robotic arm',
      explorerCar: 'Smart explorer car',
      autonomousVehicle: 'Line-tracking autonomous vehicle',
      smartBell: 'Smart school bell',
      smartFarm: 'Sustainable smart farm',
      smartHelmet: 'Smart road safety helmet',
      smartAssistant: 'Interactive smart assistant',
      digitalAbsence: 'Digital absence management system',
      digitalTextbook: 'Interactive digital textbook',
      aiContent: 'AI content creation',
      olympiadKnowledge: 'Informatics knowledge olympiad',
      gamesAwareness: 'The hidden side of video games',
      typingChallenge: 'Digital typing speed challenge',
    },
    actions: {
      iaMemory: 'IA 2025',
      olympiad: 'Olympiad',
    },
    headerLabels: {
      languageSwitcher: 'Change language',
      mainSection: 'Main section',
      projectsLabel: 'projects',
      sectionProjects: 'Projects in this section',
    },
    footer: {
      aboutTitle: 'About',
      programsTitle: 'Programs',
      quickTitle: 'Quick links',
      contactTitle: 'Contact',
      about: 'About us',
      history: 'Founding story',
      founder: 'Founder: Prof. Mohamed El Rhaouat',
      phone: 'Phone',
      email: 'Email',
      school: 'Al Wahda Pioneer Middle School',
      locality: 'Amtalssa - Driouch',
      region: 'Oriental Region - Morocco',
      rights: 'All rights reserved',
      design: 'Design and development',
      spirit: 'Powered by the spirit of AI and robotics',
      platform: 'Interactive informatics olympiad platform - Driouch',
      brandDescription:
        'An educational technology club that helps learners build robotics, programming and artificial intelligence skills through applied projects and competitive activities connected to the school and local community.',
      aboutButton: 'About us',
      visitButton: 'View location',
      locationFull: 'Al Wahda Pioneer Middle School, Amtalssa, Driouch, Oriental Region',
    },
  },
} as const;

const sectionHref = (locale: Locale, href: string) => localizeHomeHref(href, locale);

const projectMenuItems = (
  locale: Locale,
  links: ReadonlyArray<{ key: keyof (typeof text)['ar']['projectNames']; href: string }>
) =>
  links.map(({ key, href }) => ({
    text: text[locale].projectNames[key],
    href,
  }));

export const getHeaderData = (locale: Locale = 'ar') => {
  const t = text[locale];

  return {
    homeHref: sectionHref(locale, '/'),
    labels: t.headerLabels,
    links: [
      {
        text: t.nav.home,
        href: sectionHref(locale, '/'),
      },
      {
        text: t.nav.technicalProjects,
        href: sectionHref(locale, '/#projects'),
        links: [
          {
            text: t.nav.robotics,
            links: projectMenuItems(locale, projectLinks.robotics),
          },
          {
            text: t.nav.aiDigital,
            links: projectMenuItems(locale, projectLinks.ai),
          },
        ],
      },
      {
        text: t.nav.awareness,
        href: sectionHref(locale, '/#awareness'),
        links: projectMenuItems(locale, awarenessProjectLinks),
      },
      {
        text: t.nav.team,
        href: sectionHref(locale, '/#team'),
      },
      {
        text: t.nav.about,
        links: [
          { text: t.nav.overview, href: sectionHref(locale, '/#about') },
          { text: t.nav.contact, href: sectionHref(locale, '/#contact') },
          { text: t.nav.faq, href: sectionHref(locale, '/#faq') },
          { text: t.nav.iaDay2025, href: '/ia-day-edition-1' },
          { text: t.nav.iaDay2026, href: sectionHref(locale, '/#iaday-2026') },
          { text: t.nav.location, href: sectionHref(locale, '/#location') },
        ],
      },
    ],
    actions: [
      {
        text: t.actions.iaMemory,
        href: '/ia-day-edition-1',
        variant: 'secondary',
        icon: 'tabler:photo-spark',
        class:
          'border-[#20A4F3]/45 bg-white/85 text-[#0B1C4B] hover:bg-[#20A4F3] hover:border-[#20A4F3] hover:text-[#0B1C4B] dark:bg-slate-900/80 dark:text-[#7DD3FC] dark:border-[#20A4F3]/45 dark:hover:bg-[#20A4F3] dark:hover:text-[#0B1C4B]',
      },
      {
        text: t.actions.olympiad,
        href: 'https://driouch-robotics.github.io/ia-robotics-olympiad/',
        variant: 'primary',
        icon: 'tabler:trophy',
      },
    ],
  };
};

export const getFooterData = (locale: Locale = 'ar') => {
  const t = text[locale];

  return {
    dir: locale === 'ar' ? 'rtl' : 'ltr',
    brandPanel: {
      eyebrow: 'Future Builders • Since 2024',
      title: 'IA & Robotics Club - Driouch',
      description: t.footer.brandDescription,
      aboutText: t.footer.aboutButton,
      aboutHref: sectionHref(locale, '/#about'),
      visitText: t.footer.visitButton,
      visitHref: sectionHref(locale, '/#location'),
      locationText: t.footer.locationFull,
      locationHref: sectionHref(locale, '/#location'),
      phoneText: '+212 677 035 415',
      phoneHref: 'tel:+212677035415',
      emailText: 'mohamed.elrhaouat@gmail.com',
      emailHref: 'mailto:mohamed.elrhaouat@gmail.com',
      homeHref: sectionHref(locale, '/'),
    },
    links: [
      {
        title: t.footer.aboutTitle,
        links: [
          { text: t.footer.about, href: sectionHref(locale, '/#about') },
          { text: t.footer.history, href: sectionHref(locale, '/#about') },
          { text: t.footer.founder, href: sectionHref(locale, '/#about') },
        ],
      },
      {
        title: t.footer.programsTitle,
        links: [
          { text: t.nav.technicalProjects, href: sectionHref(locale, '/#projects') },
          { text: t.nav.awareness, href: sectionHref(locale, '/#awareness') },
          { text: t.nav.iaDay2025, href: '/ia-day-edition-1' },
          { text: t.nav.iaDay2026, href: sectionHref(locale, '/#iaday-2026') },
        ],
      },
      {
        title: t.footer.quickTitle,
        links: [
          { text: t.nav.team, href: sectionHref(locale, '/#team') },
          { text: t.nav.faq, href: sectionHref(locale, '/#faq') },
          { text: t.footer.contactTitle, href: sectionHref(locale, '/#contact') },
        ],
      },
      {
        title: t.footer.contactTitle,
        links: [
          { text: t.footer.phone, href: 'tel:+212677035415', ariaLabel: t.footer.phone },
          {
            text: t.footer.email,
            href: 'mailto:mohamed.elrhaouat@gmail.com',
            ariaLabel: t.footer.email,
          },
          { text: t.nav.location, href: sectionHref(locale, '/#location') },
        ],
      },
    ],
    secondaryLinks: [
      { text: t.footer.school, href: sectionHref(locale, '/#location') },
      { text: t.footer.locality, href: sectionHref(locale, '/#location') },
      { text: t.footer.region, href: sectionHref(locale, '/#location') },
    ],
    socialLinks: [
      { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
      { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/ia.robotics.club/' },
      { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
      { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/driouch-robotics' },
      { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: '#' },
    ],
    footNote: `
      <div class="flex flex-col gap-1.5">
        <div>
          <span class="font-semibold text-slate-800 dark:text-slate-200">© 2024 - ${currentYear} IA & Robotics Club - Driouch</span>
          <span class="mx-1">•</span>
          <span>${t.footer.rights}</span>
        </div>
        <div class="inline-flex w-fit flex-wrap items-center gap-2 rounded-full border border-[#20A4F3]/25 bg-[#20A4F3]/10 px-3 py-1.5 text-[12px] text-slate-600 shadow-sm dark:border-[#20A4F3]/35 dark:bg-[#20A4F3]/10 dark:text-slate-300">
          <span class="font-semibold">${t.footer.design}</span>
          <a class="font-black tracking-wide text-[#0B1C4B] transition-colors hover:text-[#20A4F3] dark:text-[#7DD3FC]" href="mailto:mohamed.elrhaouat@gmail.com">Mohamed ELRHAOUAT</a>
          <span class="h-1.5 w-1.5 rounded-full bg-[#20A4F3]"></span>
          <span>${t.footer.spirit}</span>
        </div>
      </div>
    `,
  };
};

export const headerData = getHeaderData('ar');
export const footerData = getFooterData('ar');
