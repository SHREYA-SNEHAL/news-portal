"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const theme = localStorage.getItem("theme");
    if (theme === "dark" || (!theme && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDark(false);
    }
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  // Prevent hydration mismatch
  if (!mounted) return null;

  const categories = [
    { label: "Politics", slug: "politics" },
    { label: "Sports", slug: "sports" },
    { label: "Entertainment", slug: "entertainment" },
    { label: "Business", slug: "business" },
  ];

  function isActive(href: string) {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  async function onSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = searchTerm.trim();
    if (!q) return;
    // navigate to search page with query
    router.push(`/search?q=${encodeURIComponent(q)}`);
  }

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-2xl font-bold">
            NewsApp
          </Link>
          <nav className="hidden md:flex gap-2 text-sm">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/category/${c.slug}`}
                className={`px-3 py-1 rounded transition ${
                  isActive(`/category/${c.slug}`)
                    ? "text-blue-600 font-semibold bg-blue-50 dark:bg-blue-900/30"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {c.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {dark ? "🌙" : "🔆"}
          </button>

          <form onSubmit={onSearchSubmit} className="hidden sm:flex items-center gap-2">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
              className="px-2 py-1 border rounded bg-white dark:bg-gray-900 dark:border-gray-700"
              aria-label="Search articles"
            />
            <button type="submit" className="px-3 py-1 bg-blue-600 text-white rounded">Search</button>
          </form>
        </div>
      </div>
    </header>
  );
}