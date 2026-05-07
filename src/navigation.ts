const currentYear = new Date().getFullYear();

export const headerData = {
  links: [
    {
      text: 'الرئيسية',
      href: '/',
    },
    {
      text: 'المشاريع التقنية',
      href: '/#projects',
      links: [
        {
          text: 'الأنظمة المدمجة والروبوتيك',
          links: [
            { text: 'مدينة ذكية', href: '/projects/smart-driouch' },
            { text: 'الذراع الآلية', href: '/projects/robotic-arm' },
            { text: 'السيارة المستكشفة', href: '/projects/explorer-car' },
            { text: 'المركبة الذاتية', href: '/projects/autonomous-vehicle' },
            { text: 'الجرس الذكي', href: '/projects/smart-bell' },
            { text: 'المزرعة الذكية', href: '/projects/smart-farm' },
            { text: 'الخوذة الذكية', href: '/projects/smart-helmet' },
          ],
        },
        {
          text: 'الذكاء الاصطناعي والرقمنة',
          links: [
            { text: 'المساعد الذكي', href: '/projects/smart-assistant' },
            { text: 'إدارة الغياب', href: '/projects/digital-absence-management' },
            { text: 'الكتاب الرقمي', href: '/projects/digital-textbook' },
            { text: 'صناعة المحتوى', href: '/projects/ai-content-creation' },
          ],
        },
      ],
    },
    {
      text: 'التوعية والمسابقات',
      href: '/#awareness',
      links: [
        { text: 'أولمبياد المعرفة', href: '/projects/informatics-olympiad' },
        { text: 'الوجه الخفي للألعاب', href: '/projects/video-games-awareness' },
        { text: 'تحدي السرعة الرقمي', href: '/projects/typing-speed-challenge' },
      ],
    },
    {
      text: 'فريق العمل',
      href: '/#team',
    },
    {
      text: 'من نحن',
      links: [
        {
          text: 'معلومات عامة حول التأسيس',
          href: '/#about',
        },
        {
          text: 'معلومات التواصل',
          href: '/#contact-info',
        },
        {
          text: 'الأسئلة الشائعة',
          href: '/#faq',
        },
        {
          text: 'IA Day Edition 1',
          href: '/ia-day-edition-1',
        },
        {
          text: 'IA Day 2026 Edition 2',
          href: '/#iaday-2026',
        },
      ],
    },
    {
      text: 'الموقع الجغرافي',
      href: '/#location',
    },
  ],
  actions: [
    {
      text: 'ذاكرة IA Day',
      href: '/ia-day-edition-1',
      variant: 'secondary',
      icon: 'tabler:photo-spark',
      class:
        'border-[#20A4F3]/45 bg-white/85 text-[#0B1C4B] hover:bg-[#20A4F3] hover:border-[#20A4F3] hover:text-[#0B1C4B] dark:bg-slate-900/80 dark:text-[#7DD3FC] dark:border-[#20A4F3]/45 dark:hover:bg-[#20A4F3] dark:hover:text-[#0B1C4B]',
    },
    {
      text: 'الأولمبياد',
      href: 'https://driouch-robotics.github.io/ia-robotics-olympiad/',
      variant: 'primary',
      icon: 'tabler:trophy',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'عن النادي',
      links: [
        { text: 'من نحن', href: '/#about' },
        { text: 'تاريخ التأسيس', href: '/#about' },
        { text: 'المؤسس: الأستاذ محمد الغوات', href: '/#about' },
      ],
    },
    {
      title: 'البرامج',
      links: [
        { text: 'المشاريع التقنية', href: '/#projects' },
        { text: 'التوعية والمسابقات', href: '/#awareness' },
        { text: 'IA Day Edition 1', href: '/ia-day-edition-1' },
        { text: 'IA Day 2026', href: '/#iaday-2026' },
      ],
    },
    {
      title: 'روابط سريعة',
      links: [
        { text: 'فريق العمل', href: '/#team' },
        { text: 'الأسئلة الشائعة', href: '/#faq' },
        { text: 'معلومات التواصل', href: '/#contact-info' },
      ],
    },
    {
      title: 'تواصل',
      links: [
        { text: 'الهاتف', href: 'tel:+212677035415', ariaLabel: 'الهاتف' },
        {
          text: 'البريد الإلكتروني',
          href: 'mailto:mohamed.elrhaouat@gmail.com',
          ariaLabel: 'البريد الإلكتروني',
        },
        { text: 'الموقع الجغرافي', href: '/#location' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'ثانوية الوحدة الإعدادية الرائدة', href: '/#location' },
    { text: 'امطالسة - الدريوش', href: '/#location' },
    { text: 'جهة الشرق - المغرب', href: '/#location' },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: '#' },
  ],
  footNote: `
    <span class="font-semibold text-slate-800 dark:text-slate-200">© 2024 - ${currentYear} نادي الروبوتيك والذكاء الاصطناعي - الدريوش</span>
    <span class="mx-1">•</span>
    <span>جميع الحقوق محفوظة</span>
  `,
};
