import { MetadataRoute } from 'next';
import blogData from '@/data/blog.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const blogUrls = blogData.map((article) => ({
    url: `https://alwalaaoman.com/blog/${article.slug}`,
    lastModified: article.date,
  }));

  return [
    {
      url: 'https://alwalaaoman.com',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://alwalaaoman.com/blog',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogUrls,
  ];
}
