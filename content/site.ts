// {{TBD: sustituir por el dominio real de producción}}
export const SITE_URL = "https://www.premiergym.es";

export const SITE_NAME = "Premier Gym";

export const PHONE_DISPLAY = "630 863 949";
export const PHONE_HREF = "tel:+34630863949";

export const WHATSAPP_NUMBER = "34630863949";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const EMAIL = "premiergymsescorxador@gmail.com";
export const EMAIL_HREF = `mailto:${EMAIL}`;

// Alta de socio online (Gym-Up). Solo disponible por ahora para S'Escorxador (instance_id=62).
// {{TBD: enlace de alta online específico para Avenidas}}
export const SIGNUP_URL_SESCORXADOR =
  "https://app.gym-up.es/ws/v2/public_register/98fcc378d7f5adda37f271debf5d7a4d1cdd37b9/?instance_id=62&domicile_payment_method=CARD";

// {{TBD: perfiles de redes sociales}}
export const SOCIAL_LINKS: { label: string; href: string }[] = [];

export function whatsappHref(message: string) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}
