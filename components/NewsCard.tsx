import Image from "next/image";
import Link from "next/link";

type Article = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  image: string;
  author: string;
  date: string;
  category: string;
};

export default function NewsCard({ article }: { article: Article }) {
  return (
    <Link href={`/news/${article.slug}`} className="group block border rounded overflow-hidden hover:shadow-md transition">
      <div className="relative h-44 w-full">
        <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform" />
      </div>
      <div className="p-3">
        <h3 className="text-lg font-semibold group-hover:underline">{article.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{article.summary}</p>
        <p className="text-xs text-gray-500 mt-2">{article.author}</p>
      </div>
    </Link>
  );
}