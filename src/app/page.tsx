"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#d79900] font-['Roboto'] flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
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
      <main className="flex flex-col items-center justify-between flex-1 text-center px-4 py-16">
        {/* Title */}
        <h1
          className={`text-4xl md:text-6xl text-white font-bold transition-opacity duration-1000 ease-in-out ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          CULTURAL COMMITTEE
        </h1>

        {/* Spacer to push buttons down */}
        <div className="flex flex-col items-center mt-auto mb-12">
          <div className="flex gap-50">
            <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-600 transition-transform transform hover:scale-105 duration-300">
              Events
            </button>
            <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-600 transition-transform transform hover:scale-105 duration-300">
              Register
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
