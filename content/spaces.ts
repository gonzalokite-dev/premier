export type SpaceImage = {
  src: string;
  alt: string;
};

export type Space = {
  slug: "egym" | "cardio" | "maquinas-y-peso-libre" | "vestuarios" | "recovery";
  title: string;
  text: string;
  image: string | null;
  imageAlt: string;
  imagePlaceholder: string;
  // Galería de la zona, visible al entrar en /espacios/[slug]. La imagen
  // principal de arriba no se repite aquí.
  gallery?: SpaceImage[];
  avenidasOnly?: boolean;
};

const SESCORXADOR = "/assets/images/sescorxador";

export const SPACES: Space[] = [
  {
    slug: "egym",
    title: "Zona EGYM",
    text: "La Zona EGYM de Premier Gym combina innovación y entrenamiento inteligente. Cada máquina se ajusta automáticamente a tus necesidades para que entrenes mejor, progreses más rápido y disfrutes de una experiencia única en uno de los pocos gimnasios con EGYM en Palma de Mallorca.",
    image: `${SESCORXADOR}/egym/zona-exclusiva-egym-tecnologia-salud.webp`,
    imageAlt:
      "Zona exclusiva EGYM de entrenamiento inteligente en Premier Gym S'Escorxador, Palma de Mallorca",
    imagePlaceholder: "{{TBD: fotografía zona EGYM}}",
    gallery: [
      {
        src: `${SESCORXADOR}/egym/maquinas-egym-premier.webp`,
        alt: "Máquinas del circuito inteligente EGYM en Premier Gym S'Escorxador",
      },
      {
        src: `${SESCORXADOR}/egym/inbody-egym-tecnologia-gimnasio.webp`,
        alt: "Análisis corporal InBody en la zona EGYM de Premier Gym S'Escorxador",
      },
      {
        src: `${SESCORXADOR}/egym/control-salud-egym-gimnasio.webp`,
        alt: "Control de salud y seguimiento con tecnología EGYM en Premier Gym S'Escorxador",
      },
    ],
  },
  {
    slug: "cardio",
    title: "Zona Cardio",
    text: "Nuestra Zona Cardio cuenta con equipamiento de última generación para que disfrutes de una experiencia cómoda, eficiente y motivadora. Cintas de correr, bicicletas, elípticas y mucho más en un espacio diseñado para mejorar tu resistencia, cuidar tu salud cardiovascular y alcanzar tus objetivos en uno de los gimnasios premium de Palma.",
    image: `${SESCORXADOR}/cardio.jpg`,
    imageAlt: "Zona de cardio con cintas de correr en Premier Gym S'Escorxador, Palma",
    imagePlaceholder: "{{TBD: fotografía zona cardio}}",
    gallery: [
      {
        src: `${SESCORXADOR}/cardio/maquinas-de-correr-en-premier-gym.webp`,
        alt: "Cintas de correr en la zona de cardio de Premier Gym S'Escorxador",
      },
      {
        src: `${SESCORXADOR}/cardio/zona-cardio-premier-gym.webp`,
        alt: "Zona de cardio con bicicletas y elípticas en Premier Gym S'Escorxador",
      },
      {
        src: `${SESCORXADOR}/cardio/gym-tecnologia-cardio-premier.webp`,
        alt: "Equipamiento de cardio de última generación en Premier Gym S'Escorxador",
      },
      {
        src: `${SESCORXADOR}/cardio/zona-exclusiva-cardio-gym-premier.webp`,
        alt: "Espacio exclusivo de entrenamiento cardiovascular en Premier Gym S'Escorxador",
      },
    ],
  },
  {
    slug: "maquinas-y-peso-libre",
    title: "Zona Máquinas y Peso Libre",
    text: "Una única sala que reúne todo el entrenamiento de fuerza. Máquinas de discos y placas para trabajar cada grupo muscular con máxima precisión y estabilidad, junto a una completa zona de peso libre con racks, bancos, barras y juego completo de mancuernas. Equipamiento de última generación y espacio de sobra para entrenar con seguridad, ya prefieras la guía de la máquina o la libertad de la barra, en Premier Gym Palma.",
    image: `${SESCORXADOR}/musculacion/vista-poleas-maquinas-premier-gym.webp`,
    imageAlt:
      "Sala de máquinas y peso libre en Premier Gym S'Escorxador, Palma de Mallorca",
    imagePlaceholder: "{{TBD: fotografía zona máquinas y peso libre}}",
    gallery: [
      {
        src: `${SESCORXADOR}/musculacion/zona-peso-libre-en-premier-gym.webp`,
        alt: "Zona de peso libre con racks y juego completo de mancuernas en Premier Gym S'Escorxador",
      },
      {
        src: `${SESCORXADOR}/musculacion/sala-musculacion-premier-gym.webp`,
        alt: "Sala de peso libre con racks, mancuernas y bancos en Premier Gym S'Escorxador",
      },
      {
        src: `${SESCORXADOR}/musculacion/peso-libre-y-musculacion-premier.webp`,
        alt: "Máquinas de discos y prensa de piernas en Premier Gym S'Escorxador",
      },
      {
        src: `${SESCORXADOR}/musculacion/tecnologia-musculacion-peso-libre-egym.webp`,
        alt: "Torres de poleas, bancos y máquinas de fuerza en Premier Gym S'Escorxador",
      },
      {
        src: `${SESCORXADOR}/musculacion/tonificacion-y-musculacion-gimnasio-premier.webp`,
        alt: "Máquinas selectorizadas en la sala de musculación de Premier Gym S'Escorxador",
      },
      {
        src: `${SESCORXADOR}/musculacion/tonificacion-maquinas-tecnologia-premier.webp`,
        alt: "Máquinas selectorizadas Matrix para tonificación en Premier Gym S'Escorxador",
      },
      {
        src: `${SESCORXADOR}/musculacion/acceso-maquinas-premier-musculacion.webp`,
        alt: "Acceso a la sala de máquinas de Premier Gym S'Escorxador",
      },
    ],
  },
  {
    slug: "vestuarios",
    title: "Vestuarios",
    text: "Nuestros vestuarios están pensados para que llegar y marcharte del gimnasio sea tan cómodo como el propio entrenamiento. Taquillas amplias, duchas, zona de cambiador accesible y un mantenimiento diario que cuida cada detalle. Un espacio limpio, ordenado y con la privacidad necesaria para que puedas venir a entrenar directamente desde el trabajo y seguir con tu día sin complicaciones.",
    image: `${SESCORXADOR}/taquillas-vestuario/gimnasio-moderno-vestuarios-premier.webp`,
    imageAlt: "Vestuarios modernos de Premier Gym S'Escorxador, Palma de Mallorca",
    imagePlaceholder: "{{TBD: fotografía vestuarios}}",
    gallery: [
      {
        src: `${SESCORXADOR}/taquillas-vestuario/acceso-taquillas-premier-gym.webp`,
        alt: "Acceso a la zona de taquillas de Premier Gym S'Escorxador",
      },
      {
        src: `${SESCORXADOR}/taquillas-vestuario/duchas-y-vestuario-premier.webp`,
        alt: "Duchas del vestuario de Premier Gym S'Escorxador",
      },
      {
        src: `${SESCORXADOR}/taquillas-vestuario/cambiador-accesible-comodo-premier-gym.webp`,
        alt: "Vestuario amplio y accesible en Premier Gym S'Escorxador",
      },
      {
        src: `${SESCORXADOR}/taquillas-vestuario/zona-banos-vestuario-gimnasio-premier.webp`,
        alt: "Zona de baños y vestuario de Premier Gym S'Escorxador",
      },
    ],
  },
  {
    slug: "recovery",
    title: "Zona Recovery",
    text: "La exclusiva Recovery Zone de Premier Gym Avenidas redefine la forma de recuperarte después de entrenar. Disfruta de nuestra sauna y ice bath (baño de agua fría), una combinación cada vez más utilizada por deportistas para favorecer la recuperación muscular, reducir la fatiga y mejorar el bienestar. Un espacio diseñado para que recuperarte forme parte de tu entrenamiento y convierta cada visita a Premier Gym en una experiencia completa.",
    image: null,
    imageAlt: "Sauna e ice bath de la Recovery Zone en Premier Gym Avenidas Palma",
    imagePlaceholder: "{{TBD: fotografía Recovery Zone}}",
    avenidasOnly: true,
  },
];

// {{TBD: listado de marcas de la maquinaria}}
export const MACHINE_BRANDS: string[] = [];

// {{TBD: copy sala polivalente Pilates, Yoga y actividades dirigidas}}
export const MULTIPURPOSE_ROOM_COPY: string | null = null;
