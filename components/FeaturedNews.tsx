import Image from "next/image";

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

export default function FeaturedNews({ article }: { article: Article }) {
  return (
    <section className="relative rounded overflow-hidden bg-gray-100 dark:bg-gray-800">
      <div className="md:flex">
        <div className="md:flex-1 p-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            <a href={`/news/${article.slug}`} className="hover:underline">
              {article.title}
            </a>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{article.summary}</p>
          <p className="text-sm text-gray-500">{article.author} • {new Date(article.date).toLocaleDateString()}</p>
        </div>
        <div className="md:w-1/2 relative h-56 md:h-auto">
          <Image src={article.image} alt={article.title} fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}