import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Las zonas de máquinas y de peso libre se unificaron en una sola.
    return [
      {
        source: "/espacios/discos-y-placas",
        destination: "/espacios/maquinas-y-peso-libre",
        permanent: true,
      },
      {
        source: "/espacios/peso-libre",
        destination: "/espacios/maquinas-y-peso-libre",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
