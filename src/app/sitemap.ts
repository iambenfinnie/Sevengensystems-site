import type { MetadataRoute } from 'next'

const SITE_URL = 'https://sevengensystems.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/grow', '/automate', '/learn', '/government', '/about', '/contact']

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
