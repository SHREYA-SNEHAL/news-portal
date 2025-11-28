export default function Loading() {
  return (
    <div className="py-12 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600" />
      <span className="ml-3 text-gray-600 dark:text-gray-300">Loading article...</span>
    </div>
  );
}