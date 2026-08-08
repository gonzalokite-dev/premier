import type { ClubSlug } from "./clubs";

export type FAQItem = {
  question: string;
  answer: string;
};

const COMMON_FAQS: FAQItem[] = [
  {
    question: "¿Hay matrícula o permanencia?",
    answer:
      "No. En Premier Gym no cobramos matrícula y nuestras membresías no tienen permanencia, tanto en la modalidad mensual como en la trimestral.",
  },
  {
    question: "¿Puedo probar el club antes de hacerme socio?",
    answer:
      "Sí. Además de la membresía, ofrecemos accesos temporales (Day Pass, Week Pass y 15 Day Pass) para que conozcas las instalaciones sin compromiso.",
  },
  {
    question: "¿En qué consiste el seguimiento personalizado?",
    answer:
      "Cada socio recibe un plan de entrenamiento personalizado apoyado en el análisis corporal InBody y la evaluación BioAge, con un equipo profesional que realiza un seguimiento continuo de tu progreso.",
  },
  {
    question: "¿El club tiene aforo limitado?",
    answer:
      "Sí, mantenemos un aforo controlado en todo momento para que puedas entrenar con comodidad, sin masificaciones y sin esperas para usar la maquinaria.",
  },
  {
    question: "¿Diferencia entre la membresía mensual y la trimestral?",
    answer:
      "Ambas incluyen acceso ilimitado, plan personalizado y uso de todas las instalaciones. La trimestral no tiene permanencia adicional, simplemente ofrece el mejor precio por mes.",
  },
  {
    question: "¿Cómo doy de baja mi membresía?",
    answer:
      "Al no tener permanencia, puedes darte de baja cuando quieras. Escríbenos por WhatsApp o email y te indicamos el proceso.",
  },
];

export const FAQS: Record<ClubSlug, FAQItem[]> = {
  sescorxador: [
    {
      question: "¿Qué zonas tiene Premier Gym S'Escorxador?",
      answer:
        "El club cuenta con circuito inteligente EGYM, zona de cardio, zona de discos y placas y zona de peso libre, todo con maquinaria de última generación.",
    },
    ...COMMON_FAQS,
  ],
  avenidas: [
    {
      question: "¿Qué es la Recovery Zone?",
      answer:
        "Es un espacio exclusivo de Premier Gym Avenidas con sauna y baño de agua fría (ice bath), pensado para favorecer la recuperación muscular y reducir la fatiga después de entrenar.",
    },
    {
      question: "¿Cómo funcionan las clases de Pilates y Yoga?",
      answer:
        "Premier Gym Avenidas dispone de una sala polivalente para Pilates, Yoga y actividades dirigidas. {{TBD: información de horarios y reservas de clases}}",
    },
    ...COMMON_FAQS,
  ],
};
