"use client";
import React from "react";
import { Timeline } from "@/components/Timeline";

// Adventure timeline data
const adventureData = [
  {
    title: "2022",
    content: (
      <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-md">
        <h4 className="text-xl font-bold mb-2 text-black dark:text-white">The Beginning</h4>
        <p className="text-neutral-700 dark:text-neutral-300">
          My coding journey began with curiosity. I started with online tutorials and free resources,
          learning the basics of web development. The first "Hello World" page was a small victory
          that sparked my interest in digging deeper.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-xs">HTML</span>
          <span className="px-2 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-100 rounded-full text-xs">CSS</span>
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-md">
        <h4 className="text-xl font-bold mb-2 text-black dark:text-white">Getting Serious</h4>
        <p className="text-neutral-700 dark:text-neutral-300">
          As my interest grew, I enrolled in a structured web development bootcamp. The intensity of the
          program pushed me to learn JavaScript deeply. I built several small applications and gained
          confidence in my problem-solving abilities.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 mt-2">
          Key lesson: Consistency is more important than intensity. Daily practice, even if just for 30 minutes,
          led to steady progress.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 rounded-full text-xs">JavaScript</span>
          <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 rounded-full text-xs">Git</span>
          <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-xs">Responsive Design</span>
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-md">
        <h4 className="text-xl font-bold mb-2 text-black dark:text-white">Framework Exploration</h4>
        <p className="text-neutral-700 dark:text-neutral-300">
          This was the year of frameworks and libraries. I dove into React, experimented with Vue,
          and eventually settled on Next.js for most of my projects. Learning these tools opened new
          possibilities and made me appreciate the evolution of web development.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 mt-2">
          I also participated in my first hackathon and collaborated with other developers for the first time.
          The experience taught me about teamwork and the importance of clear communication in coding projects.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-100 rounded-full text-xs">React</span>
          <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full text-xs">Vue</span>
          <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-100 rounded-full text-xs">Next.js</span>
          <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-100 rounded-full text-xs">Tailwind CSS</span>
        </div>
      </div>
    ),
  },
  {
    title: "2025",
    content: (
      <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-md">
        <h4 className="text-xl font-bold mb-2 text-black dark:text-white">Full Stack Journey</h4>
        <p className="text-neutral-700 dark:text-neutral-300">
          Taking the leap into backend development, I started learning Node.js, Express, and MongoDB.
          Building full-stack applications gave me a comprehensive understanding of web development
          from server to client.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 mt-2">
          I also began contributing to open-source projects and learning about deployment and CI/CD pipelines.
          Each new skill built upon the foundation of previous learnings, creating a stronger overall knowledge base.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full text-xs">Node.js</span>
          <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100 rounded-full text-xs">Express</span>
          <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-xs">MongoDB</span>
          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-xs">CI/CD</span>
        </div>
      </div>
    ),
  },
];

export default function AdventurePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-neutral-950 dark:to-neutral-900 py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 dark:text-white mb-6">
            The Adventure
          </h1>
          <p className="text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
            A timeline of my coding journey, showcasing the evolution of my skills and knowledge
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <Timeline data={adventureData} />
    </div>
  );
}