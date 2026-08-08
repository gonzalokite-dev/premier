import type { ClubSlug } from "./clubs";

export type OpeningHours = {
  weekdays: string;
  weekend: string;
};

export const OPENING_HOURS: Record<ClubSlug, OpeningHours> = {
  sescorxador: {
    weekdays: "Lunes a Viernes: 06:00 – 23:00",
    weekend: "Sábados, Domingos y Festivos: 08:00 – 20:00",
  },
  // {{TBD: confirmar si el horario de Avenidas es el mismo}}
  avenidas: {
    weekdays: "Lunes a Viernes: 06:00 – 23:00",
    weekend: "Sábados, Domingos y Festivos: 08:00 – 20:00",
  },
};

export const MAPS_EMBED: Record<ClubSlug, string | null> = {
  sescorxador:
    "https://www.google.com/maps?q=Carrer+Germans+Garc%C3%ADa+Pe%C3%B1aranda+1A+07010+Palma+de+Mallorca&output=embed",
  // {{TBD: dirección completa Avenidas}}
  avenidas: null,
};
