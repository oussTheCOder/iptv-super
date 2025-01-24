// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains: ['image.tmdb.org'],
//     },
//     async redirects() {
//         return [
//           {
//             source: '/en/',
//             destination: '/en',
//             permanent: true,
//           },
//           {
//             source: '/de',
//             destination: '/',
//             permanent: true, // Use a 301 redirect for permanent redirection
//           },
//           {
//             source: '/de/',
//             destination: '/',
//             permanent: true, // Handle trailing slash as well
//           },
//         ];
//       },
//     trailingSlash: false,
// };

// export default nextConfig;

module.exports = {
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    localeDetection: false,
  },
  async rewrites() {
    return [
      {
        source: '/:locale',
        destination: '/:locale/home',
      },
    ];
  },
};

