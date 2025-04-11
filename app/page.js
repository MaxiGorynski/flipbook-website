"use client";
import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-neutral-950 dark:to-neutral-900 py-32 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 dark:text-white mb-6">
            Maxi's Flipbook
          </h1>
          <p className="text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto mb-8">
            A collection of my coding adventures, projects, and learnings
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/adventure"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
            >
              The Adventure
            </Link>
            <Link
              href="/projects"
              className="px-6 py-3 rounded-lg bg-neutral-800 dark:bg-neutral-700 text-white font-medium hover:bg-neutral-900 dark:hover:bg-neutral-600 transition-colors"
            >
              Projects
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8 bg-white dark:bg-neutral-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8 text-center">
            About This Flipbook
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
                The Adventure
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                Follow my journey through the world of programming, from my first
                "Hello World" to complex full-stack applications. This timeline
                documents my learning path, challenges overcome, and skills acquired.
              </p>
              <Link
                href="/adventure"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Explore my journey →
              </Link>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
                Projects
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                Browse through the projects I've built along the way. Each project
                represents a milestone in my development journey, showcasing different
                technologies and problem-solving approaches.
              </p>
              <Link
                href="/projects"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                View my projects →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}