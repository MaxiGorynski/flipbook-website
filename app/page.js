"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

// Sample timeline data
const timelineData = [
  {
    title: "2024",
    content: (
      <>
        <h4 className="text-xl font-bold mb-2 text-black dark:text-white">First Steps in Coding</h4>
        <p className="text-neutral-700 dark:text-neutral-300 mb-4">
          Started learning HTML, CSS, and JavaScript. Built my first static website and learned the basics of responsive design.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-xs">HTML</span>
          <span className="px-2 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-100 rounded-full text-xs">CSS</span>
          <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 rounded-full text-xs">JavaScript</span>
        </div>
      </>
    ),
  },
  {
    title: "2023",
    content: (
      <>
        <h4 className="text-xl font-bold mb-2 text-black dark:text-white">Diving into React</h4>
        <p className="text-neutral-700 dark:text-neutral-300 mb-4">
          Explored React and built several small applications. Learned about state management, hooks, and component architecture.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-100 rounded-full text-xs">React</span>
          <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-100 rounded-full text-xs">Next.js</span>
          <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-100 rounded-full text-xs">Tailwind CSS</span>
        </div>
      </>
    ),
  },
  {
    title: "2022",
    content: (
      <>
        <h4 className="text-xl font-bold mb-2 text-black dark:text-white">Getting Started</h4>
        <p className="text-neutral-700 dark:text-neutral-300 mb-4">
          Taking my first steps into the world of programming. Learning the basics of logical thinking and problem-solving.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full text-xs">Python</span>
          <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-xs">Algorithms</span>
          <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100 rounded-full text-xs">Programming Logic</span>
        </div>
      </>
    ),
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="relative w-full bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-neutral-950 dark:to-neutral-900 py-12 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 dark:text-white mb-6">
            Maxi's Flipbook Demo
          </h1>
        </div>
      </div>

      <Timeline data={timelineData} />
    </div>
  );
}