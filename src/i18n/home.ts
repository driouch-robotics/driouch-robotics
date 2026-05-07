export const localizedHome = {
  fr: {
    dir: 'ltr',
    metadata: {
      title: 'IA & Robotics Club - Driouch',
      description:
        "Site officiel du club IA & Robotics du collège pionnier Al Wahda à Amtalssa, Driouch. Un espace dédié aux projets de robotique, d'intelligence artificielle et d'innovation éducative.",
    },
    hero: {
      badge: 'Club scolaire d’innovation technologique',
      title: 'Club de robotique et d’intelligence artificielle',
      accent: 'Driouch',
      subtitle:
        "Nous préparons une génération créative capable d’imaginer, construire et présenter des solutions intelligentes au service de l’école et de son environnement local.",
      primaryCta: 'Découvrir nos projets',
      secondaryCta: 'Voir les jeunes ingénieurs',
      primaryHref: '#projects',
      secondaryHref: '#team',
      institution: 'Collège pionnier Al Wahda - Amtalssa',
      supervisor: 'Encadrement : Prof. Mohamed El Rhaouat',
    },
    countdown: {
      kicker: 'IA Day 2026 Edition 2 Countdown',
      title: "Compte à rebours de la 2e édition de la Journée de l’Intelligence Artificielle",
      dateLabel: 'Date officielle : 8 juin 2026',
      targetLabel: '8 juin 2026',
      finishedLabel: 'IA Day 2026 Edition 2 est arrivé',
      units: {
        days: 'jours',
        hours: 'heures',
        minutes: 'minutes',
      },
    },
    stats: [
      { value: '2024', label: 'année de création' },
      { value: '30+', label: 'élèves impliqués' },
      { value: '14', label: 'projets et actions' },
      { value: '3', label: 'langues du site' },
    ],
    about: {
      kicker: 'À propos du club',
      title: 'Un atelier vivant pour apprendre par la pratique',
      paragraphs: [
        "Le club IA & Robotics - Driouch est un espace éducatif où les élèves découvrent la robotique, la programmation, l’intelligence artificielle et la culture numérique à travers des défis concrets.",
        "Chaque projet développe des compétences scientifiques, l’esprit d’équipe, la communication et la confiance nécessaire pour représenter l’établissement dans des événements technologiques.",
      ],
      cards: [
        {
          icon: 'tabler:cpu',
          title: 'Robotique et systèmes embarqués',
          description:
            'Des prototypes construits autour de capteurs, cartes électroniques, automatisation et logique de contrôle.',
        },
        {
          icon: 'tabler:brain',
          title: 'Intelligence artificielle',
          description:
            'Des usages responsables de l’IA pour l’aide, la création, la décision et l’analyse de données.',
        },
        {
          icon: 'tabler:users-group',
          title: 'Leadership des élèves',
          description:
            'Des rôles clairs pour chaque jeune ingénieur afin de valoriser l’engagement, la prise de parole et la coopération.',
        },
      ],
    },
    projects: {
      kicker: 'Projets techniques',
      title: 'Des idées d’élèves transformées en prototypes',
      subtitle:
        'Une sélection de projets qui combinent sciences de l’ingénieur, robotique, intelligence artificielle et transformation numérique.',
      viewProject: 'Voir la fiche technique',
      categories: [
        {
          title: 'Systèmes embarqués et robotique',
          description: 'Prototypes physiques, capteurs, sécurité, mobilité et automatisation.',
          items: [
            {
              title: 'Ville intelligente de Driouch',
              description:
                'Une maquette de ville intelligente avec gestion des risques, mobilité urbaine, éclairage et solutions environnementales.',
              image: 'src/assets/images/projects/smart-driouch-cover.png',
              href: '/projects/smart-driouch',
              tags: ['Smart City', 'Arduino', 'IA'],
            },
            {
              title: 'Bras robotique pédagogique',
              description:
                'Un bras robotique capable de manipuler et trier des objets en s’appuyant sur la vision et la logique de commande.',
              image: 'src/assets/images/projects/robotic-arm-cover.png',
              href: '/projects/robotic-arm',
              tags: ['Robotique', 'Vision', 'Tri'],
            },
            {
              title: 'Ferme intelligente durable',
              description:
                'Un modèle agricole automatisé pour l’irrigation, la protection des cultures et la gestion rationnelle de l’eau.',
              image: 'src/assets/images/projects/smart-farm-cover.png',
              href: '/projects/smart-farm',
              tags: ['Irrigation', 'Durabilité', 'Capteurs'],
            },
          ],
        },
        {
          title: 'Intelligence artificielle et numérisation',
          description: 'Solutions web, assistants intelligents, contenus numériques et services scolaires.',
          items: [
            {
              title: 'Assistant intelligent interactif',
              description:
                'Un chatbot éducatif conçu pour répondre rapidement aux questions des élèves et des familles.',
              image: 'src/assets/images/projects/smart-assistant-cover.png',
              href: '/projects/smart-assistant',
              tags: ['Chatbot', 'n8n', 'Données'],
            },
            {
              title: 'Gestion numérique des absences',
              description:
                'Une plateforme pour relier l’administration, le tableau de bord et la communication avec les parents.',
              image: 'src/assets/images/projects/absence-sys-cover.png',
              href: '/projects/digital-absence-management',
              tags: ['Web app', 'Dashboard', 'WhatsApp'],
            },
            {
              title: 'Manuel numérique interactif',
              description:
                'Une plateforme d’apprentissage pour suivre les cours, s’exercer et passer des évaluations interactives.',
              image: 'src/assets/images/projects/digital-textbook-cover.png',
              href: '/projects/digital-textbook',
              tags: ['E-learning', 'Quiz', 'Web'],
            },
          ],
        },
      ],
    },
    iaDay: {
      kicker: 'Mémoire du club',
      title: 'IA Day : une histoire qui s’écrit édition après édition',
      edition1: {
        title: 'IA Day 2025 Edition 1',
        description:
          'La première édition a marqué le lancement d’une mémoire collective autour de l’intelligence artificielle, avec des présentations, ateliers et moments documentés par l’équipe.',
        href: '/ia-day-edition-1',
        cta: 'Voir l’album documentaire',
        reportHref: 'https://www.facebook.com/share/p/14RamhsrDmB/',
        reportCta: 'Lire le rapport sur Facebook',
      },
      edition2: {
        title: 'IA Day 2026 Edition 2',
        description:
          'La deuxième édition est prévue le 8 juin 2026 avec une ambition plus large : valoriser les projets, les jeunes talents et la culture de l’IA responsable.',
        href: '#iaday-2026',
        cta: 'Suivre le compte à rebours',
      },
    },
    awareness: {
      kicker: 'Sensibilisation et compétitions',
      title: 'Apprendre aussi à réfléchir aux usages du numérique',
      cards: [
        {
          icon: 'tabler:trophy',
          title: 'Olympiade de la culture informatique',
          description: 'Un défi pour tester et développer les connaissances numériques des élèves.',
        },
        {
          icon: 'tabler:message-circle-question',
          title: 'La face cachée des jeux vidéo',
          description: 'Une discussion interactive sur les impacts des jeux vidéo et l’équilibre scolaire.',
        },
        {
          icon: 'tabler:keyboard',
          title: 'Défi de vitesse numérique',
          description: 'Une compétition autour de la maîtrise du clavier et des compétences pratiques.',
        },
      ],
    },
    team: {
      kicker: 'Équipe de travail',
      title: 'Des jeunes ingénieurs avec des missions claires',
      subtitle:
        'Chaque élève contribue à un projet avec un rôle précis, une responsabilité technique et une progression visible.',
      profileCta: 'Voir son rôle',
    },
    contact: {
      kicker: 'Contact',
      title: 'Rejoindre le club ou suivre ses activités',
      description:
        'Le club est basé au collège pionnier Al Wahda à Amtalssa, Driouch. Les liens ci-dessous permettent de suivre les activités et de contacter l’encadrement.',
      email: 'mohamed.elrhaouat@gmail.com',
      phone: '+212 677 035 415',
      location: 'Collège pionnier Al Wahda, Amtalssa, Driouch, Région de l’Oriental',
      github: 'Profil GitHub du club',
      instagram: 'Compte Instagram du club',
    },
  },
  en: {
    dir: 'ltr',
    metadata: {
      title: 'IA & Robotics Club - Driouch',
      description:
        'Official website of the IA & Robotics Club at Al Wahda Pioneer Middle School in Amtalssa, Driouch. A space for robotics, artificial intelligence and educational innovation projects.',
    },
    hero: {
      badge: 'School technology innovation club',
      title: 'Robotics and Artificial Intelligence Club',
      accent: 'Driouch',
      subtitle:
        'We prepare creative learners to imagine, build and present smart solutions for their school and local community.',
      primaryCta: 'Explore our projects',
      secondaryCta: 'Meet the young engineers',
      primaryHref: '#projects',
      secondaryHref: '#team',
      institution: 'Al Wahda Pioneer Middle School - Amtalssa',
      supervisor: 'Supervised by Prof. Mohamed El Rhaouat',
    },
    countdown: {
      kicker: 'IA Day 2026 Edition 2 Countdown',
      title: 'Countdown to the second edition of the Artificial Intelligence Day',
      dateLabel: 'Official date: June 8, 2026',
      targetLabel: 'June 8, 2026',
      finishedLabel: 'IA Day 2026 Edition 2 has arrived',
      units: {
        days: 'days',
        hours: 'hours',
        minutes: 'minutes',
      },
    },
    stats: [
      { value: '2024', label: 'founded' },
      { value: '30+', label: 'students involved' },
      { value: '14', label: 'projects and actions' },
      { value: '3', label: 'site languages' },
    ],
    about: {
      kicker: 'About the club',
      title: 'A practical workshop for learning by building',
      paragraphs: [
        'IA & Robotics Club - Driouch is an educational space where students explore robotics, programming, artificial intelligence and digital culture through real challenges.',
        'Each project develops scientific skills, teamwork, communication and the confidence needed to represent the school in technology events.',
      ],
      cards: [
        {
          icon: 'tabler:cpu',
          title: 'Robotics and embedded systems',
          description:
            'Physical prototypes built with sensors, electronics boards, automation and control logic.',
        },
        {
          icon: 'tabler:brain',
          title: 'Artificial intelligence',
          description:
            'Responsible AI use cases for assistance, creation, decision-making and data analysis.',
        },
        {
          icon: 'tabler:users-group',
          title: 'Student leadership',
          description:
            'Clear roles for every young engineer to value commitment, public speaking and cooperation.',
        },
      ],
    },
    projects: {
      kicker: 'Technical projects',
      title: 'Student ideas turned into working prototypes',
      subtitle:
        'A selection of projects combining engineering sciences, robotics, artificial intelligence and digital transformation.',
      viewProject: 'Open technical sheet',
      categories: [
        {
          title: 'Embedded systems and robotics',
          description: 'Physical prototypes, sensors, safety, mobility and automation.',
          items: [
            {
              title: 'Driouch Smart City',
              description:
                'A smart city model with risk management, urban mobility, lighting and environmental solutions.',
              image: 'src/assets/images/projects/smart-driouch-cover.png',
              href: '/projects/smart-driouch',
              tags: ['Smart City', 'Arduino', 'AI'],
            },
            {
              title: 'Educational robotic arm',
              description:
                'A robotic arm designed to handle and sort objects using vision and control logic.',
              image: 'src/assets/images/projects/robotic-arm-cover.png',
              href: '/projects/robotic-arm',
              tags: ['Robotics', 'Vision', 'Sorting'],
            },
            {
              title: 'Sustainable smart farm',
              description:
                'An automated agriculture model for irrigation, crop protection and efficient water use.',
              image: 'src/assets/images/projects/smart-farm-cover.png',
              href: '/projects/smart-farm',
              tags: ['Irrigation', 'Sustainability', 'Sensors'],
            },
          ],
        },
        {
          title: 'Artificial intelligence and digitalization',
          description: 'Web solutions, intelligent assistants, digital content and school services.',
          items: [
            {
              title: 'Interactive smart assistant',
              description:
                'An educational chatbot designed to answer questions from students and families quickly.',
              image: 'src/assets/images/projects/smart-assistant-cover.png',
              href: '/projects/smart-assistant',
              tags: ['Chatbot', 'n8n', 'Data'],
            },
            {
              title: 'Digital absence management',
              description:
                'A platform connecting administration, dashboards and communication with parents.',
              image: 'src/assets/images/projects/absence-sys-cover.png',
              href: '/projects/digital-absence-management',
              tags: ['Web app', 'Dashboard', 'WhatsApp'],
            },
            {
              title: 'Interactive digital textbook',
              description:
                'A learning platform for lessons, practice activities and interactive assessments.',
              image: 'src/assets/images/projects/digital-textbook-cover.png',
              href: '/projects/digital-textbook',
              tags: ['E-learning', 'Quizzes', 'Web'],
            },
          ],
        },
      ],
    },
    iaDay: {
      kicker: 'Club memory',
      title: 'IA Day: a history written edition by edition',
      edition1: {
        title: 'IA Day 2025 Edition 1',
        description:
          'The first edition launched a shared memory around artificial intelligence, with presentations, workshops and documented moments from the team.',
        href: '/ia-day-edition-1',
        cta: 'View the documentary album',
        reportHref: 'https://www.facebook.com/share/p/14RamhsrDmB/',
        reportCta: 'Read the Facebook report',
      },
      edition2: {
        title: 'IA Day 2026 Edition 2',
        description:
          'The second edition is planned for June 8, 2026 with a wider ambition: showcasing projects, young talent and responsible AI culture.',
        href: '#iaday-2026',
        cta: 'Follow the countdown',
      },
    },
    awareness: {
      kicker: 'Awareness and competitions',
      title: 'Learning also means thinking about digital habits',
      cards: [
        {
          icon: 'tabler:trophy',
          title: 'Informatics knowledge olympiad',
          description: 'A challenge to test and grow students’ digital knowledge.',
        },
        {
          icon: 'tabler:message-circle-question',
          title: 'The hidden side of video games',
          description: 'An interactive discussion about gaming impact and school-life balance.',
        },
        {
          icon: 'tabler:keyboard',
          title: 'Digital typing speed challenge',
          description: 'A competition focused on keyboard mastery and practical digital skills.',
        },
      ],
    },
    team: {
      kicker: 'Team',
      title: 'Young engineers with clear missions',
      subtitle:
        'Each student contributes to a project with a specific role, technical responsibility and visible progress.',
      profileCta: 'View role',
    },
    contact: {
      kicker: 'Contact',
      title: 'Join the club or follow its activities',
      description:
        'The club is based at Al Wahda Pioneer Middle School in Amtalssa, Driouch. Use the links below to follow activities or contact the supervision team.',
      email: 'mohamed.elrhaouat@gmail.com',
      phone: '+212 677 035 415',
      location: 'Al Wahda Pioneer Middle School, Amtalssa, Driouch, Oriental Region',
      github: 'Club GitHub profile',
      instagram: 'Club Instagram account',
    },
  },
} as const;

export type LocalizedHomeLocale = keyof typeof localizedHome;
