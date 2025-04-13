// src/app/page.tsx

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#d79900] font-['Roboto']">
      {/* Header */}
      <header className="bg-white shadow-md px-8 py-4 flex justify-between items-center animate-fade-down transition duration-1000">
        <div className="text-2xl font-bold text-gray-800">AJIET</div>
        <nav className="space-x-8">
          <a href="#" className="text-gray-800 hover:text-gray-600 transition">
            Home
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600 transition">
            About
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600 transition">
            Contact
          </a>
        </nav>
      </header>

      {/* Main */}
      <main className="text-center px-4 py-16">
        <h1 className="text-4xl md:text-6xl text-black font-bold mb-8 transition-opacity duration-1000 ease-in-out opacity-0 animate-fade-in">
          CULTURAL COMMITTEE
        </h1>

        {/* Buttons */}
        <div className="flex justify-center space-x-50 mb-12 animate-fade-up delay-200">
          <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-600 transition-transform transform hover:scale-105 duration-300">
            Events
          </button>
          <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-600 transition-transform transform hover:scale-105 duration-300">
            Register
          </button>
        </div>
      </main>
    </div>
  );
}
