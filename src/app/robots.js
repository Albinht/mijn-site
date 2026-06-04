export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'],
    },
    sitemap: 'https://niblah.com/sitemap.xml',
    host: 'https://niblah.com',
  }
}
