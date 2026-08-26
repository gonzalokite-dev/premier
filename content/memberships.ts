import type { ClubSlug } from "./clubs";

export type Membership = {
  id: "mensual" | "trimestral";
  title: string;
  text: string;
  features: string[];
  price: string;
  highlight?: string;
};

export type TemporaryPass = {
  id: "day" | "week" | "15day" | "bono5";
  title: string;
  text: string;
  price: number;
};

const TEMP_PASS_COPY: Record<TemporaryPass["id"], { title: string; text: string }> = {
  day: {
    title: "Day Pass",
    text: "Accede a Premier Gym durante un día y disfruta de todas las instalaciones sin necesidad de ser socio. Ideal para probar el club o entrenar durante tu estancia en Palma.",
  },
  week: {
    title: "Week Pass",
    text: "Entrena durante 7 días consecutivos con acceso ilimitado a todas las instalaciones. La opción perfecta para vacaciones, viajes de trabajo o estancias cortas.",
  },
  "15day": {
    title: "15 Day Pass",
    text: "Disfruta de acceso ilimitado durante 15 días y vive la experiencia Premier Gym con total flexibilidad. Ideal para estancias más largas o para quienes quieren entrenar antes de decidirse por una membresía.",
  },
  bono5: {
    title: "Bono 5 Usos",
    text: "Disfruta de 5 accesos a Premier Gym con total flexibilidad. Ideal para estancias más largas o para quienes quieren conocer y disfrutar de nuestras instalaciones antes de decidirse por una membresía. Validez: 3 meses desde la fecha de inicio.",
  },
};

export const MEMBERSHIPS: Record<ClubSlug, Membership[]> = {
  sescorxador: [
    {
      id: "mensual",
      title: "Membresía Mensual",
      text: "Disfruta de acceso ilimitado a Premier Gym con total flexibilidad. Entrena sin permanencia y accede a todas las instalaciones durante el horario de apertura.",
      features: [
        "Acceso ilimitado al club.",
        "Plan de entrenamiento personalizado.",
        "Uso de todas las zonas e instalaciones.",
        "App Premier Gym.",
        "Sin permanencia.",
      ],
      price: "68 € / mes",
    },
    {
      id: "trimestral",
      title: "Membresía Trimestral",
      text: "La mejor opción para quienes buscan continuidad y el mejor precio. Disfruta de todos los servicios de Premier Gym con una tarifa más ventajosa durante tres meses.",
      features: [
        "Acceso ilimitado al club.",
        "Plan de entrenamiento personalizado.",
        "Uso de todas las zonas e instalaciones.",
        "App Premier Gym.",
        "Mejor precio por mes.",
      ],
      price: "190 € / trimestre",
      highlight: "Mejor precio: 63,33 € / mes",
    },
  ],
  avenidas: [
    {
      id: "mensual",
      title: "Membresía Mensual",
      text: "Disfruta de acceso ilimitado a Premier Gym Avenidas con total flexibilidad. Entrena sin permanencia y accede a todas las instalaciones, incluyendo la exclusiva Zona Recovery con sauna y baño de agua fría, diseñada para mejorar tu recuperación y bienestar.",
      features: [
        "Acceso ilimitado al club.",
        "Zona Recovery (sauna + ice bath).",
        "Plan de entrenamiento personalizado.",
        "Uso de todas las zonas e instalaciones.",
        "App Premier Gym.",
        "Sin permanencia.",
      ],
      price: "{{TBD: precio mensual Avenidas}}",
    },
    {
      id: "trimestral",
      title: "Membresía Trimestral",
      text: "La mejor opción para quienes buscan continuidad y el mejor precio. Disfruta de todos los servicios de Premier Gym Avenidas, incluida la exclusiva Zona Recovery con sauna y baño de agua fría, para completar tu entrenamiento con una recuperación de primer nivel.",
      features: [
        "Acceso ilimitado al club.",
        "Zona Recovery (sauna + ice bath).",
        "Plan de entrenamiento personalizado.",
        "Uso de todas las zonas e instalaciones.",
        "App Premier Gym.",
        "Mejor precio por mes.",
      ],
      price: "{{TBD: precio trimestral Avenidas}}",
      highlight: "Mejor precio: {{TBD: equivalencia mensual Avenidas}}",
    },
  ],
};

export const TEMPORARY_PASSES: Record<ClubSlug, TemporaryPass[]> = {
  sescorxador: [
    { id: "day", price: 20, ...TEMP_PASS_COPY.day },
    { id: "bono5", price: 50, ...TEMP_PASS_COPY.bono5 },
    { id: "week", price: 35, ...TEMP_PASS_COPY.week },
    { id: "15day", price: 50, ...TEMP_PASS_COPY["15day"] },
  ],
  avenidas: [
    { id: "day", price: 35, ...TEMP_PASS_COPY.day },
    { id: "week", price: 50, ...TEMP_PASS_COPY.week },
    { id: "15day", price: 75, ...TEMP_PASS_COPY["15day"] },
  ],
};
