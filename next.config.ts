import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // Demand exists for this slug and no such route was ever built: it was
        // arriving at the 404 page. /chart is the site's own "Morse Code Chart".
        source: "/morse-code-chart",
        destination: "/chart",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
