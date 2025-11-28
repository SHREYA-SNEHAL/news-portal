export default function NotFound() {
  return (
    <div className="py-12 text-center">
      <h1 className="text-2xl font-semibold mb-2">Article not found</h1>
      <p className="text-gray-600 dark:text-gray-300">We couldn't find the article you're looking for.</p>
      <a href="/" className="inline-block mt-4 text-blue-600 hover:underline">Back to Home</a>
    </div>
  );
}