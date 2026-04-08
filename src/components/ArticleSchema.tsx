import type { BlogPost } from "@/lib/blog";

export default function ArticleSchema({ post }: { post: BlogPost }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Guillaume",
    },
    publisher: {
      "@type": "Organization",
      name: "Quanta",
      url: "https://quantamonaco.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://quantamonaco.com/blog/${post.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
