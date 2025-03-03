/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['image.tmdb.org'],
  },
  async redirects() {
    return [
      // Redirect root ("/") to the default language (German)
      {
        source: "/",
        destination: "/de",
        permanent: true, // 301 for SEO
      },
      // Ensure /en and /de don't have trailing slashes
      {
        source: "/en/",
        destination: "/en",
        permanent: true,
      },
      {
        source: "/de/",
        destination: "/de",
        permanent: true,
      },
    ];
  },
  i18n: {
    locales: ["de", "en"],
    defaultLocale: "de",
  },
  trailingSlash: false, // Ensures consistent URLs without trailing slashes
};

export default nextConfig;


