/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://MoussaJa.com',
  generateRobotsTxt: true,
  exclude: ['/test-og'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://MoussaJa.com/sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/test-og'],
      },
    ],
  },
  outDir: 'public',
} 