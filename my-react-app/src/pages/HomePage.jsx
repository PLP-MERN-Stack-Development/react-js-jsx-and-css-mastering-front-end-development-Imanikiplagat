import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto p-10 text-center  ">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
        Welcome to My Products App
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        This is a simple product management app where you can add, edit, and delete your products easily.
      </p>
      <button
        onClick={() => navigate("/products")}
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        View Products
      </button>
    </div>
  );
}
