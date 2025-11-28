import Link from "next/link";

export default function CategorySection({ categories }: { categories: string[] }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-100 dark:border-gray-700">
      <h3 className="font-semibold mb-3">Categories</h3>
      <ul className="flex flex-wrap gap-2">
        {categories.map((c) => {
          const slug = c.toLowerCase();
          return (
            <li key={c}>
              <Link
                href={`/category/${encodeURIComponent(slug)}`}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm hover:underline transition"
              >
                {c}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}