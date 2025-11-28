export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-12">
      <div className="container mx-auto px-4 md:px-6 py-8 text-sm text-gray-600 dark:text-gray-300">
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <div>
            <h3 className="font-semibold">NewsApp</h3>
            <p className="mt-1">A demo news front page built with Next.js & TailwindCSS.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Privacy</a>
          </div>
        </div>

        <div className="mt-6 text-xs">
          © {new Date().getFullYear()} NewsApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
}