export type ClubSlug = "sescorxador" | "avenidas";

export type ClubFounderOffer = {
  eyebrow: string;
  heading: string;
  highlights: string[];
  priceOriginal: string;
  priceFounder: string;
  priceNote: string;
  benefits: string[];
  ctaLabel: string;
};

export type ClubRenovation = {
  eyebrow: string;
  heading: string;
  subheading: string;
  description: string[];
  teaser: string[];
  founder: ClubFounderOffer;
};

export type Club = {
  slug: ClubSlug;
  name: string;
  shortName: string;
  eyebrow: string;
  heroImage: string | null;
  heroImageAlt: string;
  heroImagePlaceholder: string;
  introImage: string | null;
  tileImage: string | null;
  intro: string[];
  whyChooseTitle: string;
  whyChoose: string[];
  closing: string;
  addressLines: string[];
  // Cuando un club está cerrado por reforma, se muestra una landing de
  // preinscripción en lugar de la ficha completa. Quitar este campo
  // restaura automáticamente la página completa del club.
  renovation?: ClubRenovation;
};

export const CLUBS: Record<ClubSlug, Club> = {
  sescorxador: {
    slug: "sescorxador",
    name: "Premier Gym S'Escorxador",
    shortName: "S'Escorxador",
    eyebrow: "Palma de Mallorca",
    heroImage: "/assets/images/sescorxador/hero-peso-libre.jpg",
    heroImageAlt:
      "Zona de peso libre de Premier Gym S'Escorxador, gimnasio premium en el centro de Palma de Mallorca",
    heroImagePlaceholder: "{{TBD: fotografía hero S'Escorxador}}",
    introImage: "/assets/images/sescorxador/detail-art.jpg",
    tileImage: "/assets/images/sescorxador/club-tile.jpg",
    intro: [
      "Premier Gym S'Escorxador es un gimnasio premium en el centro de Palma de Mallorca, diseñado para quienes buscan entrenar en un entorno tranquilo, moderno y con un aforo controlado. Si buscas un gimnasio en Palma donde la calidad de la experiencia sea tan importante como el entrenamiento, este es tu lugar.",
      "Nuestro club combina tecnología de última generación, diseño cuidado y atención personalizada para ayudarte a conseguir tus objetivos de forma eficiente. Disponemos de circuito inteligente EGYM, análisis corporal InBody, evaluación BioAge, zona de peso libre, maquinaria premium y planes de entrenamiento adaptados a cada persona.",
      "A diferencia de un gimnasio convencional, en Premier Gym apostamos por un ambiente sin masificaciones, limpio y ordenado, donde puedas entrenar con comodidad y sin esperas. Cada socio recibe un seguimiento personalizado para que pueda progresar de forma constante y segura.",
      "Tanto si estás empezando como si ya tienes experiencia, en Premier Gym S'Escorxador encontrarás un espacio pensado para disfrutar del entrenamiento y convertirlo en un hábito sostenible.",
    ],
    whyChooseTitle: "¿Por qué elegir Premier Gym S'Escorxador?",
    whyChoose: [
      "Gimnasio premium en el centro de Palma.",
      "Aforo controlado para entrenar sin aglomeraciones.",
      "Circuito inteligente EGYM.",
      "Análisis corporal InBody y evaluación BioAge.",
      "Plan de entrenamiento personalizado.",
      "Maquinaria de última generación y zona de peso libre.",
      "Equipo profesional que realiza un seguimiento continuo.",
      "Sin matrícula y sin permanencia.",
    ],
    closing:
      "Si estás buscando un gimnasio en Palma de Mallorca donde entrenar con tranquilidad, tecnología y un servicio personalizado, te invitamos a conocer Premier Gym S'Escorxador y descubrir una forma diferente de entrenar.",
    addressLines: ["Carrer Germans García Peñaranda, 1A", "07010 · Palma de Mallorca"],
  },
  avenidas: {
    slug: "avenidas",
    name: "Premier Gym Avenidas",
    shortName: "Avenidas",
    eyebrow: "Palma de Mallorca",
    heroImage: "/assets/images/avenidas/hero.jpg",
    heroImageAlt: "Interior de Premier Gym Avenidas, gimnasio premium en Palma de Mallorca",
    heroImagePlaceholder: "{{TBD: fotografía Avenidas}}",
    introImage: null,
    tileImage: null,
    intro: [
      "Premier Gym Avenidas es un gimnasio en Palma de Mallorca, donde entrenar con tranquilidad, tecnología y un servicio personalizado. Premier Gym Avenidas es la elección perfecta.",
      "Nuestro nuevo club nace para ofrecer una experiencia de entrenamiento premium en una de las zonas mejor comunicadas de Palma. Un espacio más amplio, con nuevas zonas de entrenamiento, tecnología de última generación y servicios orientados tanto al rendimiento como al bienestar.",
      "En Premier Gym Avenidas encontrarás un completo circuito inteligente EGYM, análisis corporal InBody, evaluación BioAge, amplias zonas de fuerza y cardio, una exclusiva Recovery Zone para optimizar la recuperación muscular y una sala polivalente destinada a Pilates, Yoga y actividades dirigidas.",
      "Como en todos los clubes Premier Gym, mantenemos un aforo controlado, un ambiente tranquilo y un seguimiento personalizado para que cada entrenamiento sea más eficiente y puedas alcanzar tus objetivos de forma segura.",
    ],
    whyChooseTitle: "¿Por qué elegir Premier Gym Avenidas?",
    whyChoose: [
      "Gimnasio en Avenidas, Palma de Mallorca.",
      "Gimnasio premium con instalaciones de última generación.",
      "Circuito inteligente EGYM.",
      "Análisis corporal InBody y BioAge.",
      "Recovery Zone: Zona de Sauna + Ice Bath.",
      "Pilates, Yoga y actividades dirigidas.",
      "Entrenamiento personalizado.",
      "Aforo controlado.",
      "Instalaciones modernas y espacios amplios.",
      "Ubicación céntrica con excelente acceso.",
    ],
    closing:
      "Si estás buscando un gimnasio en Palma, un gimnasio en Avenidas, un centro con Pilates en Palma, Yoga en Palma o un gimnasio con tecnología inteligente y seguimiento personalizado, te invitamos a descubrir Premier Gym Avenidas.",
    addressLines: ["Av. del Gran i General Consell, 5", "Palma de Mallorca"],
    renovation: {
      eyebrow: "Próxima apertura",
      heading: "El gimnasio de los cuadrados llega a Avenidas",
      subheading:
        "Un espacio pensado para entrenar con tranquilidad, sin aglomeraciones y con una experiencia fitness de alta calidad.",
      description: [
        "Premier Gym Avenidas está actualmente en reforma. Estamos preparando un espacio más amplio, con nuevas zonas de entrenamiento y tecnología de última generación, pensado tanto para el rendimiento como para el bienestar.",
        "Cuando abra sus puertas, encontrarás un completo circuito inteligente EGYM, análisis corporal InBody, evaluación BioAge, amplias zonas de fuerza y cardio, una exclusiva Recovery Zone con sauna e ice bath, y una sala polivalente para Pilates, Yoga y actividades dirigidas.",
      ],
      teaser: [
        "Circuito inteligente EGYM.",
        "Análisis corporal InBody y evaluación BioAge.",
        "Recovery Zone: sauna + ice bath.",
        "Sala polivalente para Pilates y Yoga.",
        "Amplias zonas de fuerza y cardio.",
        "Aforo controlado y ambiente tranquilo.",
      ],
      founder: {
        eyebrow: "Condiciones exclusivas pre-apertura",
        heading: "Socio Fundador",
        highlights: ["200 plazas", "Primer mes gratuito"],
        priceOriginal: "89 €/mes",
        priceFounder: "79 €/mes",
        priceNote:
          "Precio exclusivo antes de la apertura. Mantén tu tarifa de Socio Fundador y disfruta de:",
        benefits: [
          "Acceso a los 2 centros Premier Gym.",
          "Sin matrícula.",
          "Sin permanencia.",
        ],
        ctaLabel: "Hazte Socio Fundador",
      },
    },
  },
};

export const CLUB_LIST = Object.values(CLUBS);
