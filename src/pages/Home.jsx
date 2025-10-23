import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-blue-50 dark:bg-gray-900 text-center text-gray-900 dark:text-white px-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to Week 3 Project 🌿</h1>
      <p className="mb-8 max-w-xl">
        This React + Tailwind CSS app demonstrates components, hooks, and API integration — 
        now with dark mode, clean design, and some added life!
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/tasks"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
        >
          Go to Task Manager
        </Link>

        <Link
          to="/api"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
        >
          View API Data
        </Link>
      </div>

      <div className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow max-w-md">
        <h2 className="text-xl font-semibold mb-2">✨ Quick Tip:</h2>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Try switching between <span className="font-semibold">Light</span> and <span className="font-semibold">Dark</span> mode using the button in the navbar!
        </p>
      </div>
    </div>
  );
}
