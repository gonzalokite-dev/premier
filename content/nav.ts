export type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Nuestros Clubes", href: "/clubes" },
  { label: "Espacios", href: "/espacios" },
  { label: "Hazte Socio", href: "/hazte-socio" },
  { label: "Contacto", href: "/contacto" },
];

export const FOOTER_LEGAL_LINKS: NavItem[] = [
  { label: "Aviso Legal", href: "/aviso-legal" },
  { label: "Política de Privacidad", href: "/privacidad" },
  { label: "Política de Cookies", href: "/cookies" },
];
