import NewsCard from "../../../components/NewsCard";
import newsData from "../../../data/news.json";

/**
 * Category page - lists articles for a given category slug.
 * This server component reads params and filters the mock JSON data.
 *
 * Example: /category/politics
 */

export default function CategoryPage({ params }: { params: { cat: string } }) {
  const rawCat = params.cat || "";
  const catNormalized = rawCat.toLowerCase();

  const matched = newsData.filter((n) => n.category.toLowerCase() === catNormalized);

  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold mb-4">Category: {rawCat}</h1>

      {matched.length === 0 ? (
        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded">
          <p className="text-gray-600 dark:text-gray-300">No articles found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {matched.map((a) => (
            <NewsCard key={a.id} article={a} />
          ))}
        </div>
      )}
    </div>
  );
}