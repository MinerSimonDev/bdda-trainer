import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Der Multiple-Choice-Modus ist entfallen; alte Links auf /quiz
      // sollen trotzdem im Lernmodus landen statt im 404.
      { source: "/quiz", destination: "/lernen", permanent: false },
      { source: "/quiz/:path*", destination: "/lernen", permanent: false },
    ];
  },
};

export default nextConfig;
