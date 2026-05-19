import { Metadata } from "next";
import BlogContent from "@/components/blog/post/BlogContent";
import blogData from "@/data/blog.json";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = blogData.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found | Alwalaa Oman",
    };
  }

  return {
    title: `${article.title} | Alwalaa Oman`,
    description: article.metaDescription,
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      images: [article.featuredImage],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.metaDescription,
      images: [article.featuredImage],
    },
    alternates: {
      canonical: `https://alwalaaoman.com/blog/${slug}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article = blogData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = blogData
    .filter((a) => a.slug !== slug)
    .slice(0, 2);

  return <BlogContent article={article} relatedArticles={relatedArticles} />;
}
