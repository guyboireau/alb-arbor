// ═════════════════════════════════════════════════════════════════════════════
//  SITE CONFIG — fichier unique à modifier par client
//  Structure :
//    siteConfig.business  → infos de l'entreprise
//    siteConfig.branding  → couleurs, polices, logo
//    siteConfig.seo       → titre, description, mots-clés
//    siteConfig.design    → variantes de mise en page A/B/C par section
//    siteConfig.pages     → titres/descriptions des pages (multipage)
//    siteConfig.features  → activer/désactiver des modules
//    siteConfig.content   → contenus sections (hero, services, etc.)
// ═════════════════════════════════════════════════════════════════════════════

export const siteConfig = {
  // Navigation (landing 1 page)
  nav: [
    { label: 'Services',  href: '#services' },
    { label: 'À propos',  href: '#apropos' },
    { label: 'Réalisations', href: '#realisations' },
    { label: 'Contact',   href: '#contact' },
  ],

  // ── 1. INFORMATIONS BUSINESS ───────────────────────────────────────────────
  business: {
    name:     'ALB-Arbor',
    tagline:  'Arboriste Grimpeur Diplômé - Entretien, Abattage et Sécurisation',
    industry: 'services',          // utilisé pour schema.org + choix de contenu IA
    icon:     'tree',            // Icône de métier (Phosphor icon name sans le préfixe ph-)
    phone:    '07 67 87 90 30',
    email:    'alb-arbor@outlook.fr',
    address: {
      street:     '',
      city:       'Kerlaz',
      postalCode: '29100',
      country:    'FR',
    },
    openingHours: {
      monday:    '08:00-18:00',
      tuesday:   '08:00-18:00',
      wednesday: '08:00-18:00',
      thursday:  '08:00-18:00',
      friday:    '08:00-18:00',
      saturday:  null,
      sunday:    null,
    },
    socialLinks: {
      linkedin:  '',
      instagram: '',
      facebook:  'https://www.facebook.com/albarboriste/',
      twitter:   '',
    },
    siret:        '',
    availability: 'Disponible',
    urgency: {
      active:    true,
      label:     'Intervention d\'urgence',
      phone:     '07 67 87 90 30',
    },
    serviceArea: [
      'Kerlaz',
      'Douarnenez',
      'Pont-Aven',
      'Finistère',
    ],
    certifications: [
      { label: 'CS Arboriste Élagueur', sublabel: 'Diplôme d\'État spécialisé',          icon: '🎓' },
      { label: 'Sécurité optimale',                sublabel: 'Interventions maîtrisées et sécurisées', icon: '🛡️' },
      { label: 'Respect de l\'arbre',           sublabel: 'Taille douce et adaptée',            icon: '🌿' },
    ],
    assurance: {
      name:   '',
      numero: '',
    },
  },

  // ── 2. BRANDING ────────────────────────────────────────────────────────────
  branding: {
    primaryColor:    '#4a7c59',
    primaryDark:     '#3a6347',
    primarySoft:     '#dcf0e4',
    secondaryColor:  '#2a362e',
    accentColor:     '#b8763d',
    fontHeading:     'Outfit',
    fontBody:        'Outfit',
    fontMono:        'Geist Mono',
    logoPath:        '/assets/logo.svg',
    faviconPath:     '/favicon.svg',
  },

  // ── 3. SEO ─────────────────────────────────────────────────────────────────
  seo: {
    titleTemplate:      '%s | ALB-Arbor - Arboriste Grimpeur',
    defaultTitle:       'ALB-Arbor — Arboriste Grimpeur Élagueur à Kerlaz (Finistère)',
    defaultDescription: 'ALB-Arbor, arboriste grimpeur diplômé à Kerlaz et dans le Finistère. Taille douce, soins aux arbres, abattage délicat, démontage et sécurisation de zones. Devis gratuit.',
    keywords: [
      'arboriste grimpeur',
      'élagage kerlaz',
      'abattage arbre finistère',
      'taille de soin',
      'démontage arbre dangereux',
      'douarnenez',
      'pont-aven'
    ],
    googleBusinessUrl:   '',
    googleAnalyticsId:   '',
    googleSearchConsole: '',
    bingWebmasterKey:    '',
    plausibleDomain:     '',
    sentryDsn:           '',
    locale:              'fr_FR',
    siteUrl:             'https://alb-arbor.vercel.app',
    ogImage:             '/assets/images/hero-arbor.jpg',
  },

  // ── 4. DESIGN VARIANTS ─────────────────────────────────────────────────────
  design: {
    isSketchy: false,
    variants: {
      header:       'A',
      hero:         'A',
      services:     'A',
      about:        'A',
      testimonials: 'A',
      pricing:      'A',
      faq:          'A',
      cta:          'A',
      footer:       'A',
    },
  },

  // ── 5. PAGES (multipage) ──────────────────────────────────────────────────
  pages: {
    home: {
      slug:        '/',
      title:       'Accueil',
      description: 'Bienvenue chez ALB-Arbor.',
    },
    services: {
      slug:        '/services',
      title:       'Nos services',
      description: 'Découvrez nos prestations d\'élagage et soins aux arbres.',
    },
    about: {
      slug:        '/a-propos',
      title:       'À propos',
      description: 'En savoir plus sur notre entreprise d\'arboriculture.',
    },
    blog: {
      slug:        '/blog',
      title:       'Blog',
      description: 'Actualités et conseils.',
    },
    realisations: {
      slug:        '/realisations',
      title:       'Réalisations',
      description: 'Nos chantiers d\'élagage et abattage récents.',
    },
    contact: {
      slug:        '/contact',
      title:       'Contact',
      description: 'Contactez-nous pour un devis gratuit.',
    },
  },

  // ── 6. FEATURES ────────────────────────────────────────────────────────────
  features: {
    blog:          false,
    booking:       false,
    multilingual:  false,
    pricing:       false,
    testimonials:  false,
    newsletter:    false,
    cookieBanner:  true,
    analytics:     false,
    plausible:     false,
    sentry:        false,
  },

  // ── 7. CONTENT ─────────────────────────────────────────────────────────────
  content: {

    hero: {
      eyebrow:  'ARBORISTE GRIMPEUR DIPLÔMÉ',
      h1:       'L\'Expertise au service de vos Arbres',
      subtitle: 'Taille douce, soins spécialisés, abattages délicats et sécurisation post-intempéries. ALB-Arbor intervient à Kerlaz et dans tout le Finistère pour la pérennité de votre patrimoine arboré.',
      image:    '/assets/images/img1.jpg',
      cta1:     { label: 'Demander un devis', href: '#contact' },
      cta2:     { label: 'Nos prestations', href: '#services' },
      trust:    ['Diplômé d\'État', 'Intervention en accès difficile', 'Respect de l\'arbre'],
      badge:    { label: 'Intervention Rapide', value: 'Sécurisation', sub: 'Suite aux intempéries' },
      infoCard: { status: 'Disponible', hours: 'Lun–Ven · 8h–18h', location: 'Kerlaz & Finistère' },
    },

    services: {
      eyebrow:  '— Nos prestations',
      title:    'Soins, Tailles et Abattages',
      subtitle: 'Des interventions sur-mesure, adaptées à l\'essence de l\'arbre et aux contraintes de votre environnement.',
      items: [
        {
          icon:  'scissors',
          title: 'Taille & Soins aux arbres',
          text:  'Taille douce et sanitaire pour préserver la santé de l\'arbre. Adaptation au milieu pour alléger la structure tout en respectant son port naturel.',
          link:  'En savoir plus →',
          tag:   'Soin',
          features: ['Taille douce', 'Allègement de structure', 'Diagnostic de santé'],
        },
        {
          icon:  'tree-palm',
          title: 'Abattage & Démontage',
          text:  'Abattage maîtrisé et démontage d\'arbres morts, dangereux ou instables, y compris en zones inaccessibles à l\'aide de grues si nécessaire.',
          link:  'En savoir plus →',
          tag:   'Technique',
          features: ['Démontage avec rétention', 'Intervention en hauteur', 'Évacuation des déchets'],
        },
        {
          icon:  'shield-warning',
          title: 'Sécurisation d\'urgence',
          text:  'Intervention rapide après tempêtes, inondations ou éboulements pour sécuriser la zone, nettoyer les accès et évacuer les arbres instables.',
          link:  'En savoir plus →',
          tag:   'Urgence',
          features: ['Intervention post-tempête', 'Nettoyage de falaise', 'Mise en sécurité'],
        },
      ],
    },

    about: {
      eyebrow: '— À propos',
      title:   'Passion, Hauteur & Sécurité',
      text: [
        'Basée à Kerlaz, l\'entreprise ALB-Arbor est dirigée par un Arboriste Grimpeur diplômé du CS arboriste élagueur. Notre mission est de vous accompagner dans la gestion et l\'entretien de vos arbres avec le plus grand respect du végétal.',
        'Que ce soit pour une taille de soin au-dessus d\'un cours d\'eau ou le démontage d\'un érable centenaire menaçant des habitations, nous mettons en œuvre les techniques de grimpe et de mouflage les plus modernes pour garantir une sécurité absolue et un résultat impeccable.'
      ],
      stats: [
        { value: '100%',   label: 'Sécurité' },
        { value: '10+',  label: 'Ans de passion' },
        { value: '7/7',  label: 'En urgence' },
      ],
      cta:    { label: 'Nous contacter', href: '#contact' },
      image:  '/assets/images/img2.jpg',
      author: { name: 'ALB-Arbor', role: 'Gérant / Arboriste', image: '/assets/images/img5.jpg' },
    },

    testimonials: {
      eyebrow:   '— Témoignages',
      title:     'Ce que nos clients disent',
      ratingStr: '5.0 / 5 · 1 avis',
      items: [
        {
          quote:   'Intervention très professionnelle. Travail propre, efficace et respectueux de la nature.',
          name:    'Client Local',
          role:    'Particulier, Finistère',
          initial: 'C',
        },
      ],
    },

    pricing: {
      eyebrow:  '— Tarifs',
      title:    'Devis sur mesure',
      subtitle: 'Chaque arbre est unique. Nos tarifs sont établis sur devis après visite sur site.',
      plans: [],
    },

    faq: {
      eyebrow: '— Questions fréquentes',
      title:   'Vos questions, nos réponses',
      items: [
        { q: 'Intervenez-vous pour les arbres dangereux ?', a: 'Oui, nous sommes spécialisés dans le démontage d\'arbres morts ou dangereux (ex: érable sycomore mort), avec déclaration préalable si nécessaire.' },
        { q: 'Que faites-vous des déchets verts ?', a: 'Les branches et rémanents peuvent être broyés sur place et mis à disposition pour le paillage de vos massifs, ou évacués selon votre souhait.' },
        { q: 'Quels secteurs couvrez-vous ?', a: 'Nous sommes basés à Kerlaz et intervenons régulièrement sur Douarnenez, Pont-Aven et tout le Finistère.' },
        { q: 'Faites-vous de l\'abattage classique ?', a: 'Nous privilégions toujours la taille et le soin. L\'abattage est réalisé en dernier recours ou si l\'arbre menace la sécurité.' },
      ],
    },

    cta: {
      eyebrow:  'PRENEZ SOIN DE VOS ARBRES',
      title:    'Besoin d\'un diagnostic ou d\'une intervention ?',
      subtitle: 'Contactez-nous pour échanger sur vos besoins et obtenir un devis gratuit et personnalisé.',
      cta1:     { label: 'Nous appeler', href: 'tel:0767879030' },
      cta2:     { label: 'Nous écrire',  href: 'mailto:alb-arbor@outlook.fr' },
    },

    contact: {
      eyebrow:        '— Contact',
      title:          'Discutons de vos projets',
      subtitle:       'Laissez-nous un message et nous vous recontacterons dans les plus brefs délais pour planifier une visite.',
      successMessage: 'Votre message a bien été envoyé. Nous vous répondons rapidement.',
      formTypes:      ['Demande de devis', 'Urgence', 'Conseil d\'entretien', 'Autre'],
    },
    certifications: {
      eyebrow:  '— Certifications & Garanties',
      title:    'Des interventions professionnelles et sécurisées',
      subtitle: 'Nous intervenons dans les règles de l\'art de l\'arboriculture moderne.',
    },

    footer: {
      description: 'ALB-Arbor - Arboriste Grimpeur diplômé pour l\'entretien, l\'abattage et les soins aux arbres dans le Finistère.',
      links: [
        { label: 'Services',  href: '#services' },
        { label: 'À propos',  href: '#apropos' },
        { label: 'Réalisations', href: '#realisations' },
        { label: 'Contact',   href: '#contact' },
      ],
      legal: [
        { label: 'Mentions légales', href: '/mentions-legales' },
        { label: 'CGV',              href: '/cgv' },
        { label: 'RGPD',             href: '/rgpd' },
      ],
      madeBy: 'Site réalisé avec soin par <a href="https://guyboireau.com" rel="noopener" target="_blank">Guy Boireau</a>',
    },
    portfolio: {
      items: [
        {
          title:       'Sécurisation à Pont-Aven',
          category:    'Taille & Allègement',
          location:    'Pont-Aven',
          year:        '2024',
          description: 'Suite aux inondations hivernales, intervention sur des chênes et frênes. Réduction du port pour alléger la structure et sécuriser les abords du Restaurant de Rosmadec.',
          before:      '/assets/images/img3.jpg',
          after:       '/assets/images/img4.jpg',
        },
        {
          title:       'Démontage d\'un Érable Sycomore',
          category:    'Démontage',
          location:    'Douarnenez',
          year:        '2024',
          description: 'Démontage d\'un arbre mort pour sécuriser le passage des riverains. Rémanents broyés et mis à disposition pour le paillage.',
          before:      '/assets/images/img4.jpg',
          after:       '/assets/images/img3.jpg',
        },
        {
          title:       'Nettoyage de Falaise',
          category:    'Intervention spéciale',
          location:    'Finistère',
          year:        '2023',
          description: 'Sécurisation et nettoyage de zone après un éboulement de falaise. Évacuation des arbres instables avec utilisation de grue.',
          before:      '/assets/images/img1.jpg',
          after:       '/assets/images/img2.jpg',
        },
      ]
    },

  }, // fin content

} as const;

// ─── Re-exports nommés (compat avec les composants existants) ──────────────
export type Variant = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';

export const { business, branding, seo, design, features, pages, nav, content } = siteConfig;
export const variants      = siteConfig.design.variants;
export const hero          = siteConfig.content.hero;
export const services      = siteConfig.content.services;
export const about         = siteConfig.content.about;
export const testimonials  = siteConfig.content.testimonials;
export const pricing       = siteConfig.content.pricing;
export const faq           = siteConfig.content.faq;
export const cta           = siteConfig.content.cta;
export const contact       = siteConfig.content.contact;
export const footer        = siteConfig.content.footer;
export const portfolio     = siteConfig.content.portfolio;
export const certifications = siteConfig.content.certifications;
