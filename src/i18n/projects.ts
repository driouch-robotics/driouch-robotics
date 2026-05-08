import type { Locale } from '~/i18n/config';

type ProjectLocaleText = {
  title: string;
  category: string;
  institution: string;
  supervisor: string;
  domain: string;
};

const common = {
  ar: {
    supervisorPrefix: 'إشراف:',
    teamTitle: 'المهندسون المشاركون في هذا المشروع',
    badge: 'البطاقة الرقمية',
    imageAltPrefix: 'صورة',
    imageAltMiddle: 'لمشروع',
    category: {
      robotics: 'الأنظمة المدمجة والروبوتيك',
      ai: 'الرقمنة والذكاء الاصطناعي',
      awareness: 'التوعية والمسابقات التقنية',
    },
    institution: 'ثانوية الوحدة الإعدادية الرائدة',
    supervisor: 'الأستاذ محمد الغوات',
  },
  fr: {
    supervisorPrefix: 'Encadrement :',
    teamTitle: 'Jeunes ingénieurs participant à ce projet',
    badge: 'Badge numérique',
    imageAltPrefix: 'Image',
    imageAltMiddle: 'du projet',
    category: {
      robotics: 'Systèmes embarqués et robotique',
      ai: 'Numérisation et intelligence artificielle',
      awareness: 'Sensibilisation et compétitions techniques',
    },
    institution: 'Collège pionnier Al Wahda',
    supervisor: 'Prof. Mohamed El Rhaouat',
  },
  en: {
    supervisorPrefix: 'Supervised by:',
    teamTitle: 'Young engineers involved in this project',
    badge: 'Digital badge',
    imageAltPrefix: 'Image',
    imageAltMiddle: 'for project',
    category: {
      robotics: 'Embedded systems and robotics',
      ai: 'Digitalization and artificial intelligence',
      awareness: 'Awareness and technical competitions',
    },
    institution: 'Al Wahda Pioneer Middle School',
    supervisor: 'Prof. Mohamed El Rhaouat',
  },
} as const;

const projectTexts = {
  'smart-driouch': {
    fr: {
      title: 'Projet Ville intelligente de Driouch (Smart Driouch)',
      category: common.fr.category.robotics,
      institution: common.fr.institution,
      supervisor: common.fr.supervisor,
      domain: 'Sciences de l’ingénieur, programmation informatique et intelligence artificielle',
    },
    en: {
      title: 'Driouch Smart City Project (Smart Driouch)',
      category: common.en.category.robotics,
      institution: common.en.institution,
      supervisor: common.en.supervisor,
      domain: 'Engineering sciences, computer programming and artificial intelligence',
    },
  },
  'robotic-arm': {
    fr: {
      title: 'Projet Bras robotique et tri intelligent',
      category: common.fr.category.robotics,
      institution: common.fr.institution,
      supervisor: common.fr.supervisor,
      domain: 'Sciences de l’ingénieur, programmation informatique et systèmes embarqués',
    },
    en: {
      title: 'Robotic Arm and Smart Sorting Project',
      category: common.en.category.robotics,
      institution: common.en.institution,
      supervisor: common.en.supervisor,
      domain: 'Engineering sciences, computer programming and embedded systems',
    },
  },
  'explorer-car': {
    fr: {
      title: 'Projet Voiture exploratrice intelligente',
      category: common.fr.category.robotics,
      institution: common.fr.institution,
      supervisor: common.fr.supervisor,
      domain: 'Sciences de l’ingénieur, robotique et systèmes embarqués',
    },
    en: {
      title: 'Smart Explorer Car Project',
      category: common.en.category.robotics,
      institution: common.en.institution,
      supervisor: common.en.supervisor,
      domain: 'Engineering sciences, robotics and embedded systems',
    },
  },
  'autonomous-vehicle': {
    fr: {
      title: 'Projet Véhicule autonome et suivi de ligne',
      category: common.fr.category.robotics,
      institution: common.fr.institution,
      supervisor: common.fr.supervisor,
      domain: 'Sciences de l’ingénieur, intelligence de navigation et systèmes embarqués',
    },
    en: {
      title: 'Autonomous Vehicle and Line Tracking Project',
      category: common.en.category.robotics,
      institution: common.en.institution,
      supervisor: common.en.supervisor,
      domain: 'Engineering sciences, navigation intelligence and embedded systems',
    },
  },
  'smart-bell': {
    fr: {
      title: 'Projet Cloche intelligente et gardien de sécurité Al Wahda',
      category: common.fr.category.robotics,
      institution: common.fr.institution,
      supervisor: common.fr.supervisor,
      domain: 'Sciences de l’ingénieur, automatisation et systèmes de sécurité',
    },
    en: {
      title: 'Al Wahda Smart Bell and Safety Guard Project',
      category: common.en.category.robotics,
      institution: common.en.institution,
      supervisor: common.en.supervisor,
      domain: 'Engineering sciences, automation and safety systems',
    },
  },
  'smart-farm': {
    fr: {
      title: 'Projet Ferme intelligente et protection des cultures',
      category: common.fr.category.robotics,
      institution: common.fr.institution,
      supervisor: common.fr.supervisor,
      domain: 'Sciences de l’ingénieur, agriculture intelligente et systèmes embarqués',
    },
    en: {
      title: 'Smart Farm and Crop Protection Project',
      category: common.en.category.robotics,
      institution: common.en.institution,
      supervisor: common.en.supervisor,
      domain: 'Engineering sciences, smart agriculture and embedded systems',
    },
  },
  'smart-helmet': {
    fr: {
      title: 'Projet Casque intelligent pour la protection des conducteurs',
      category: common.fr.category.robotics,
      institution: common.fr.institution,
      supervisor: common.fr.supervisor,
      domain: 'Sciences de l’ingénieur, sécurité routière et systèmes embarqués',
    },
    en: {
      title: 'Smart Helmet System for Driver Protection',
      category: common.en.category.robotics,
      institution: common.en.institution,
      supervisor: common.en.supervisor,
      domain: 'Engineering sciences, road safety and embedded systems',
    },
  },
  'smart-assistant': {
    fr: {
      title: 'Projet Assistant intelligent et chatbot de l’établissement',
      category: common.fr.category.ai,
      institution: common.fr.institution,
      supervisor: common.fr.supervisor,
      domain: 'Intelligence artificielle, développement web et automatisation',
    },
    en: {
      title: 'School Smart Assistant and Chatbot Project',
      category: common.en.category.ai,
      institution: common.en.institution,
      supervisor: common.en.supervisor,
      domain: 'Artificial intelligence, web development and automation',
    },
  },
  'digital-absence-management': {
    fr: {
      title: 'Projet Système numérique de gestion des absences et communication intelligente',
      category: common.fr.category.ai,
      institution: common.fr.institution,
      supervisor: common.fr.supervisor,
      domain: 'Développement web, administration éducative et automatisation',
    },
    en: {
      title: 'Digital Absence Management and Smart Communication System',
      category: common.en.category.ai,
      institution: common.en.institution,
      supervisor: common.en.supervisor,
      domain: 'Web development, educational administration and automation',
    },
  },
  'digital-textbook': {
    fr: {
      title: 'Projet Plateforme interactive et numérisation du manuel scolaire',
      category: common.fr.category.ai,
      institution: common.fr.institution,
      supervisor: common.fr.supervisor,
      domain: 'Innovation pédagogique, ressources numériques et évaluation interactive',
    },
    en: {
      title: 'Interactive Platform and Digital Textbook Project',
      category: common.en.category.ai,
      institution: common.en.institution,
      supervisor: common.en.supervisor,
      domain: 'Pedagogical innovation, digital resources and interactive assessment',
    },
  },
  'ai-content-creation': {
    fr: {
      title: 'Projet Création de contenus et de films par IA',
      category: common.fr.category.ai,
      institution: common.fr.institution,
      supervisor: common.fr.supervisor,
      domain: 'Génération créative, ingénierie des prompts et production audiovisuelle',
    },
    en: {
      title: 'AI Content and Film Creation Project',
      category: common.en.category.ai,
      institution: common.en.institution,
      supervisor: common.en.supervisor,
      domain: 'Creative generation, prompt engineering and audiovisual production',
    },
  },
  'informatics-olympiad': {
    fr: {
      title: 'Olympiade de la culture informatique',
      category: common.fr.category.awareness,
      institution: common.fr.institution,
      supervisor: common.fr.supervisor,
      domain: 'Culture numérique, intelligence artificielle et programmation',
    },
    en: {
      title: 'Informatics Knowledge Olympiad',
      category: common.en.category.awareness,
      institution: common.en.institution,
      supervisor: common.en.supervisor,
      domain: 'Digital culture, artificial intelligence and programming',
    },
  },
  'video-games-awareness': {
    fr: {
      title: 'Table ronde : la face cachée des jeux vidéo',
      category: common.fr.category.awareness,
      institution: common.fr.institution,
      supervisor: common.fr.supervisor,
      domain: 'Sensibilisation numérique, analyse psychologique et compétences de vie',
    },
    en: {
      title: 'Panel Discussion: The Hidden Side of Video Games',
      category: common.en.category.awareness,
      institution: common.en.institution,
      supervisor: common.en.supervisor,
      domain: 'Digital awareness, psychological analysis and life skills',
    },
  },
  'typing-speed-challenge': {
    fr: {
      title: 'Concours Défi de vitesse numérique',
      category: common.fr.category.awareness,
      institution: common.fr.institution,
      supervisor: common.fr.supervisor,
      domain: 'Compétences numériques, compétition positive et logiciels éducatifs',
    },
    en: {
      title: 'Digital Typing Speed Challenge',
      category: common.en.category.awareness,
      institution: common.en.institution,
      supervisor: common.en.supervisor,
      domain: 'Digital skills, positive competition and educational software',
    },
  },
} as const;

export const getProjectLabels = (locale: Locale = 'ar') => common[locale];

export const getProjectLocaleText = (
  slug: string,
  locale: Locale,
  fallback: ProjectLocaleText
): ProjectLocaleText => {
  if (locale === 'ar') return fallback;

  return projectTexts[slug]?.[locale] || fallback;
};
