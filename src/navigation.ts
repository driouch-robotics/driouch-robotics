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
            { text: 'مشروع مدينة الدريوش الذكية', href: '/projects/smart-driouch' },
            { text: 'مشروع الذراع الروبوتية التعليمية', href: '/projects/robotic-arm' },
            { text: 'السيارة الذكية المستكشفة', href: '/projects/explorer-car' },
            { text: 'المركبة الذاتية متتبعة المسار', href: '/projects/autonomous-vehicle' },
            { text: 'الجرس المدرسي الذكي', href: '/projects/smart-bell' },
            { text: 'المزرعة الذكية المستدامة', href: '/projects/smart-farm' },
            { text: 'الخوذة الذكية للسلامة الطرقية', href: '/projects/smart-helmet' },
          ],
        },
        {
          text: 'الذكاء الاصطناعي والرقمنة',
          links: [
            { text: 'المساعد الذكي التفاعلي', href: '/projects/smart-assistant' },
            { text: 'نظام تدبير الغياب الرقمي', href: '/projects/digital-absence-management' },
            { text: 'الكتاب الرقمي التفاعلي', href: '/projects/digital-textbook' },
            { text: 'صناعة المحتوى بالذكاء الاصطناعي', href: '/projects/ai-content-creation' },
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
          text: 'IA Day 2025 Edition 1',
          href: '/ia-day-edition-1',
        },
        {
          text: 'IA Day 2026 Edition 2',
          href: '/#iaday-2026',
        },
        {
          text: 'الموقع الجغرافي',
          href: '/#location',
        },
      ],
    },
  ],
  actions: [
    {
      text: 'IA 2025',
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
        { text: 'IA Day 2025 Edition 1', href: '/ia-day-edition-1' },
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
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/ia.robotics.club/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/driouch-robotics' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: '#' },
  ],
  footNote: `
    <div class="flex flex-col gap-1.5">
      <div>
        <span class="font-semibold text-slate-800 dark:text-slate-200">© 2024 - ${currentYear} نادي الروبوتيك والذكاء الاصطناعي - الدريوش</span>
        <span class="mx-1">•</span>
        <span>جميع الحقوق محفوظة</span>
      </div>
      <div class="inline-flex w-fit flex-wrap items-center gap-2 rounded-full border border-[#20A4F3]/25 bg-[#20A4F3]/10 px-3 py-1.5 text-[12px] text-slate-600 shadow-sm dark:border-[#20A4F3]/35 dark:bg-[#20A4F3]/10 dark:text-slate-300">
        <span class="font-semibold">تصميم وتطوير</span>
        <a class="font-black tracking-wide text-[#0B1C4B] transition-colors hover:text-[#20A4F3] dark:text-[#7DD3FC]" href="mailto:mohamed.elrhaouat@gmail.com">Mohamed ELRHAOUAT</a>
        <span class="h-1.5 w-1.5 rounded-full bg-[#20A4F3]"></span>
        <span>بروح الذكاء الاصطناعي والروبوتيك</span>
      </div>
    </div>
  `,
};
