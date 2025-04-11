"use client";
import React from "react";
import { Timeline } from "@/components/Timeline";

// Projects timeline data
const projectsData = [
  {
    title: "2022",
    content: (
      <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-md">
        <h4 className="text-xl font-bold mb-2 text-black dark:text-white">Personal Portfolio</h4>
        <p className="text-neutral-700 dark:text-neutral-300">
          My first real project was a simple portfolio site built with HTML, CSS, and a bit of JavaScript.
          It featured a responsive design and basic animations. This project taught me about layout,
          design principles, and the importance of mobile responsiveness.
        </p>
        <div className="mt-4 flex items-center space-x-4">
          <a
            href="#"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
          <a
            href="#"
            className="text-neutral-600 dark:text-neutral-400 hover:underline font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-xs">HTML</span>
          <span className="px-2 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-100 rounded-full text-xs">CSS</span>
          <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 rounded-full text-xs">JavaScript</span>
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-md">
        <h4 className="text-xl font-bold mb-2 text-black dark:text-white">Weather Dashboard</h4>
        <p className="text-neutral-700 dark:text-neutral-300">
          A weather application that fetches data from a public API and displays current conditions and forecasts.
          Users can search for locations and save favorites. This project helped me understand APIs, async JavaScript,
          and local storage.
        </p>
        <div className="mt-4 flex items-center space-x-4">
          <a
            href="#"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
          <a
            href="#"
            className="text-neutral-600 dark:text-neutral-400 hover:underline font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 rounded-full text-xs">JavaScript</span>
          <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 rounded-full text-xs">REST API</span>
          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-xs">LocalStorage</span>
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-md">
        <h4 className="text-xl font-bold mb-2 text-black dark:text-white">Task Management App</h4>
        <p className="text-neutral-700 dark:text-neutral-300">
          A React-based task management application with features like drag-and-drop organization,
          task prioritization, and deadline tracking. This project was my first deep dive into React
          and state management.
        </p>
        <div className="mt-4 flex items-center space-x-4">
          <a
            href="#"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
          <a
            href="#"
            className="text-neutral-600 dark:text-neutral-400 hover:underline font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-100 rounded-full text-xs">React</span>
          <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-xs">Redux</span>
          <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-100 rounded-full text-xs">Tailwind CSS</span>
        </div>
      </div>
    ),
  },
  {
    title: "2025",
    content: (
      <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-md">
        <h4 className="text-xl font-bold mb-2 text-black dark:text-white">E-commerce Platform</h4>
        <p className="text-neutral-700 dark:text-neutral-300">
          A full-stack e-commerce application with user authentication, product catalog, shopping cart,
          and payment processing. Built with Next.js for the frontend and Node.js/Express for the backend,
          with MongoDB as the database.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 mt-2">
          This was my most complex project to date, incorporating everything I've learned about both
          frontend and backend development, plus new skills like payment gateway integration and advanced state management.
        </p>
        <div className="mt-4 flex items-center space-x-4">
          <a
            href="#"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
          <a
            href="#"
            className="text-neutral-600 dark:text-neutral-400 hover:underline font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-100 rounded-full text-xs">Next.js</span>
          <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full text-xs">Node.js</span>
          <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100 rounded-full text-xs">Express</span>
          <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-xs">MongoDB</span>
        </div>
      </div>
    ),
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-neutral-950 dark:to-neutral-900 py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-indigo-900 dark:text-white mb-6">
            Projects
          </h1>
          <p className="text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
            A showcase of projects I've built throughout my coding journey
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <Timeline data={projectsData} />
    </div>
  );
}