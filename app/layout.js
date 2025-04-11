"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className="min-h-screen bg-white dark:bg-neutral-950">
        <header className="w-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm sticky top-0 z-50 border-b border-neutral-200 dark:border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
                Maxi's Flipbook
              </Link>

              <nav className="flex items-center space-x-1 md:space-x-4">
                <Link
                  href="/"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === "/"
                      ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                      : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/adventure"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === "/adventure"
                      ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                      : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  }`}
                >
                  The Adventure
                </Link>
                <Link
                  href="/projects"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === "/projects"
                      ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                      : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  }`}
                >
                  Projects
                </Link>
              </nav>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="w-full bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 py-8">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center text-neutral-600 dark:text-neutral-400">
            <p>© {new Date().getFullYear()} Maxi's Flipbook. All coding adventures documented with ❤️</p>
          </div>
        </footer>
      </body>
    </html>
  );
}