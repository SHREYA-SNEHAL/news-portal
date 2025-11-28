import NewsCard from "../../components/NewsCard";
import newsData from "../../data/news.json";

/**
 * Search page: reads query parameter `q` from searchParams and filters articles by title.
 * Example: /search?q=market
 */

export default function SearchPage({ searchParams }: { searchParams?: { q?: string } }) {
  const q = (searchParams && searchParams.q) ? String(searchParams.q) : "";
  const query = q.trim().toLowerCase();

  const results = query
    ? newsData.filter((n) => n.title.toLowerCase().includes(query))
    : [];

  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold mb-4">Search results for: {q ? `"${q}"` : "—"}</h1>

      {!q ? (
        <p className="text-gray-600 dark:text-gray-300">Please enter a search query using the search box.</p>
      ) : results.length === 0 ? (
        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded">
          <p className="text-gray-600 dark:text-gray-300">No result found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {results.map((r) => (
            <NewsCard key={r.id} article={r} />
          ))}
        </div>
      )}
    </div>
  );
}