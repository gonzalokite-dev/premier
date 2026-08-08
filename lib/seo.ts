import { SITE_URL } from "@/content/site";

export type Crumb = { label: string; href: string };

export function ogImageUrl(title: string, eyebrow = "Palma de Mallorca") {
  const params = new URLSearchParams({ title, eyebrow });
  return `${SITE_URL}/api/og?${params.toString()}`;
}

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      item: `${SITE_URL}${crumb.href}`,
    })),
  };
}
