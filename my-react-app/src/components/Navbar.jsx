import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <nav className="bg-blue dark:bg-gray-900 shadow p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-gray-800 dark:text-white">My Products App</div>
      <div className="flex items-center gap-6 ">
        <Link to="/" className="text-gray-800 dark:text-white hover:underline">Home</Link>
        <Link to="/products" className="text-gray-800 dark:text-white hover:underline">Products</Link>
        <Link to="/contact" className="text-gray-800 dark:text-white hover:underline">Contact</Link>
       
      </div>
    </nav>
  );
}
