export type Space = {
  slug: "egym" | "cardio" | "discos-y-placas" | "peso-libre" | "recovery";
  title: string;
  text: string;
  image: string | null;
  imageAlt: string;
  imagePlaceholder: string;
  avenidasOnly?: boolean;
};

export const SPACES: Space[] = [
  {
    slug: "egym",
    title: "Zona EGYM",
    text: "La Zona EGYM de Premier Gym combina innovación y entrenamiento inteligente. Cada máquina se ajusta automáticamente a tus necesidades para que entrenes mejor, progreses más rápido y disfrutes de una experiencia única en uno de los pocos gimnasios con EGYM en Palma de Mallorca.",
    image: "/assets/images/sescorxador/egym.jpg",
    imageAlt: "Circuito inteligente EGYM en Premier Gym S'Escorxador, Palma de Mallorca",
    imagePlaceholder: "{{TBD: fotografía zona EGYM}}",
  },
  {
    slug: "cardio",
    title: "Zona Cardio",
    text: "Nuestra Zona Cardio cuenta con equipamiento de última generación para que disfrutes de una experiencia cómoda, eficiente y motivadora. Cintas de correr, bicicletas, elípticas y mucho más en un espacio diseñado para mejorar tu resistencia, cuidar tu salud cardiovascular y alcanzar tus objetivos en uno de los gimnasios premium de Palma.",
    image: "/assets/images/sescorxador/cardio.jpg",
    imageAlt: "Zona de cardio con cintas de correr en Premier Gym S'Escorxador, Palma",
    imagePlaceholder: "{{TBD: fotografía zona cardio}}",
  },
  {
    slug: "discos-y-placas",
    title: "Zona Discos y Placas",
    text: "Entrena con una amplia selección de máquinas de discos y placas diseñadas para trabajar cada grupo muscular con máxima precisión, estabilidad y comodidad. Equipamiento de última generación para disfrutar de un entrenamiento de fuerza seguro y eficaz en Premier Gym.",
    image: "/assets/images/sescorxador/discos-placas.jpg",
    imageAlt: "Máquinas de discos y placas en Premier Gym S'Escorxador, Palma de Mallorca",
    imagePlaceholder: "{{TBD: fotografía zona discos y placas}}",
  },
  {
    slug: "peso-libre",
    title: "Zona Peso Libre",
    text: "Nuestra Zona de Peso Libre está equipada con racks, bancos, barras y mancuernas para que puedas entrenar con total libertad. Un espacio amplio y diseñado para desarrollar fuerza, ganar masa muscular y llevar tu entrenamiento al máximo nivel en Premier Gym Palma.",
    image: "/assets/images/sescorxador/peso-libre.jpg",
    imageAlt: "Zona de peso libre con racks y mancuernas en Premier Gym S'Escorxador, Palma",
    imagePlaceholder: "{{TBD: fotografía zona peso libre}}",
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
