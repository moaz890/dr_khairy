import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**",
      },
    ],
  },
  turbopack: {
    resolveAlias: {
      "next/dist/build/polyfills/polyfill-module": "./lib/modern-polyfill.ts",
    },
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "next/dist/build/polyfills/polyfill-module": false,
    };
    return config;
  },
  async rewrites() {
    return [
      // Service pages
      { source: "/عملية-تجميل-الأنف", destination: "/services/rhinoplasty" },
      { source: "/تجميل-الأنف-الوظيفي", destination: "/services/functional-rhinoplasty" },
      { source: "/تصحيح-تجميل-الأنف", destination: "/services/revision-rhinoplasty" },
      { source: "/عملية-الحاجز-الأنفي", destination: "/services/septoplasty" },
      { source: "/علاج-انسداد-الأنف", destination: "/services/nasal-obstruction" },
      { source: "/إزالة-الزوائد-الأنفية", destination: "/services/nasal-polyps" },
      { source: "/عملية-مناظير-الجيوب-الأنفية", destination: "/services/sinus-surgery" },
      { source: "/علاج-التهاب-الجيوب-الأنفية", destination: "/services/sinusitis" },
      { source: "/علاج-حساسية-الأنف", destination: "/services/allergic-rhinitis" },
      { source: "/علاج-طنين-الأذن", destination: "/services/tinnitus" },
      { source: "/علاج-ضعف-السمع", destination: "/services/hearing-loss" },
      { source: "/علاج-التهاب-الأذن", destination: "/services/ear-infection" },
      { source: "/علاج-الدوار-والدوخة", destination: "/services/vertigo" },
      { source: "/عملية-استئصال-اللوزتين", destination: "/services/tonsillectomy" },
      { source: "/عملية-اللحمية-للأطفال", destination: "/services/adenoidectomy" },
      { source: "/علاج-بحة-الصوت", destination: "/services/hoarseness" },
      { source: "/علاج-صعوبة-البلع", destination: "/services/swallowing-disorders" },
      { source: "/علاج-الشخير", destination: "/services/snoring" },
      { source: "/علاج-توقف-التنفس-أثناء-النوم", destination: "/services/sleep-apnea" },

      // Local pages
      { source: "/تجميل-الأنف-القاهرة", destination: "/cairo/rhinoplasty" },
      { source: "/دكتور-أنف-وأذن-التجمع-الخامس", destination: "/cairo/ent-specialist" },
      { source: "/تجميل-الأنف-الزقازيق", destination: "/zagazig/rhinoplasty" },
      { source: "/عملية-الجيوب-الأنفية-الزقازيق", destination: "/zagazig/sinus-surgery" },
    ];
  },
};

export default nextConfig;
