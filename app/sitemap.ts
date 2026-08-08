import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";
import { CLUB_LIST } from "@/content/clubs";
import { SPACES } from "@/content/spaces";

export default function sitemap(): MetadataRoute.Sitemap {
  const mainRoutes = ["", "/clubes", "/espacios", "/hazte-socio", "/contacto"];

  const clubRoutes = CLUB_LIST.flatMap((club) => [
    `/clubes/${club.slug}`,
    `/hazte-socio/${club.slug}`,
  ]);

  const spaceRoutes = SPACES.map((space) => `/espacios/${space.slug}`);

  const legalRoutes = ["/aviso-legal", "/privacidad", "/cookies"];

  return [
    ...[...mainRoutes, ...clubRoutes, ...spaceRoutes].map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...legalRoutes.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.2,
    })),
  ];
}
