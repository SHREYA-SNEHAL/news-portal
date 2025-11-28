import { notFound } from "next/navigation";
import Image from "next/image";
import newsData from "../../../data/news.json";
import { formatDate } from "../../../utils/formatDate";

// Type for article
type Article = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
};



// generateStaticParams builds the list of route params at build time.
// Equivalent purpose to getStaticPaths in the pages router.
export async function generateStaticParams() {
  return newsData.map((article) => ({
    slug: article.slug,
  }));
}

// generateMetadata provides dynamic metadata per article (SEO).
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = newsData.find((n) => n.slug === params.slug);
  if (!article) {
    return { title: "Article Not Found" };
  }
  return {
    title: `${article.title} • NewsApp`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = newsData.find((n) => n.slug === params.slug) as Article | undefined;

  if (!article) {
    // Show the Next.js not-found UI (app/news/[slug]/not-found.tsx)
    notFound();
  }

  // Find related articles by category (excluding current)
  const related = newsData.filter((a) => a.category === article!.category && a.slug !== article!.slug).slice(0, 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article!.title,
    image: [article!.image],
    datePublished: article!.date,
    author: [{ "@type": "Person", name: article!.author }],
    publisher: {
      "@type": "Organization",
      name: "NewsApp",
      logo: {
        "@type": "ImageObject",
        url: "https://example.com/logo.png"
      }
    },
    description: article!.summary
  };

  return (
    <article className="py-6">
      <h1 className="text-3xl font-bold mb-3">{article!.title}</h1>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        By {article!.author} • {formatDate(article!.date)} • {article!.category}
      </p>

      <div className="w-full h-[420px] md:h-[480px] relative mb-6 rounded overflow-hidden">
        <Image src={article!.image} alt={article!.title} fill className="object-cover" />
      </div>

      <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: article!.content }} />

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Related News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {related.map((r) => (
            <a key={r.id} href={`/news/${r.slug}`} className="block p-3 rounded hover:bg-gray-50 dark:hover:bg-gray-800">
              <h3 className="font-medium">{r.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{r.summary}</p>
            </a>
          ))}
          {related.length === 0 && <p className="text-sm text-gray-600 dark:text-gray-300">No related articles available.</p>}
        </div>
      </section>

      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </article>
  );
}