import Image from "next/image";
import FeaturedNews from "../components/FeaturedNews";
import CategorySection from "../components/CategorySection";
import NewsCard from "../components/NewsCard";
import newsData from "../data/news.json";
import { formatDate } from "../utils/formatDate";

/**
 * Metadata for the home page.
 * This replaces the previous metadata to match the requested title/description.
 */
export const metadata = {
  title: "NewsApp – Latest Headlines",
  description: "A demo news portal built using Next.js",
};

export default function HomePage() {
  // newsData is imported from /data/news.json at build time. This keeps the page static.
  const featured = newsData[0];
  const categories = Array.from(new Set(newsData.map((n) => n.category))).slice(0, 6);

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "NewsApp",
    "url": "http://localhost:3000/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "http://localhost:3000/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="py-6">
      {/* JSON-LD for the website (basic) */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
      />

      <div className="mb-6">
        <FeaturedNews article={featured} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Top Stories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {newsData.slice(1, 5).map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">More News</h2>
            <div className="space-y-4">
              {newsData.slice(5).map((a) => (
                <article key={a.id} className="flex gap-4 items-start p-3 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                  <Image
                    src={a.image}
                    alt={a.title}
                    width={120}
                    height={80}
                    className="rounded object-cover"
                  />
                  <div>
                    <a href={`/news/${a.slug}`} className="text-lg font-medium hover:underline">
                      {a.title}
                    </a>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{a.summary}</p>
                    <p className="text-xs text-gray-500 mt-1">{a.author} • {formatDate(a.date)}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <CategorySection categories={categories} />
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded">
            <h3 className="font-semibold mb-2">Newsletter</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Subscribe to our newsletter for daily updates.</p>
            <form className="mt-3 flex gap-2">
              <input className="flex-1 p-2 rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900" placeholder="Email address" />
              <button className="bg-blue-600 text-white px-3 py-2 rounded">Subscribe</button>
            </form>
          </div>
        </aside>
      </div>
    </div>
  );
}