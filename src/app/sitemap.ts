import { MetadataRoute } from 'next'
import { allProjects } from '@/data/portfolio-data'
import blog_data from '@/data/BlogData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shadyshanab.tech'

  // Static routes
  const routes = [
    '',
    '/contact',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic portfolio routes
  const portfolioRoutes = Object.keys(allProjects).map((id) => ({
    url: `${baseUrl}/portfolio-details/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Dynamic blog routes
  // Assuming blog_data structure has articles in article_data for each category
  // Flattening all articles from all categories
  const allArticles = blog_data.flatMap(category => category.article_data)
  
  const blogRoutes = allArticles.map((article) => ({
    url: `${baseUrl}/blog-details/${article.id}`, // Assuming your blog details page uses ID
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...routes, ...portfolioRoutes, ...blogRoutes]
}
