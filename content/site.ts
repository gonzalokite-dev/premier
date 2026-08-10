export const SITE_URL = "https://www.premiergym.es";

export const SITE_NAME = "Premier Gym";

export const PHONE_DISPLAY = "630 863 949";
export const PHONE_HREF = "tel:+34630863949";

export const WHATSAPP_NUMBER = "34630863949";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const EMAIL = "info@premiergym.es";
export const EMAIL_HREF = `mailto:${EMAIL}`;

// Alta de socio online (Gym-Up).
export const SIGNUP_URL_SESCORXADOR =
  "https://app.gym-up.es/ws/v2/public_register/98fcc378d7f5adda37f271debf5d7a4d1cdd37b9/?instance_id=62&domicile_payment_method=CARD";

export const SIGNUP_URL_AVENIDAS =
  "https://app.gym-up.es/ws/v2/public_register/e77f8d53c6dfa1c3f308adcfa8a42cd169cb8a8b/?instance_id=79";

// {{TBD: perfiles de redes sociales}}
export const SOCIAL_LINKS: { label: string; href: string }[] = [];

export function whatsappHref(message: string) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

export function googleMapsDirectionsUrl(address: string) {
  const params = new URLSearchParams({ api: "1", destination: address });
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}
