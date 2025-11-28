import "./globals.css";
import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "NewsApp - Front Page",
  description: "A LiveHindustan-style front page built with Next.js 14, TailwindCSS and TypeScript",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <Navbar />
        <main className="min-h-screen container mx-auto px-4 md:px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}