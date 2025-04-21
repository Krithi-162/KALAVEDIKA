"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
<div className="relative min-h-screen w-full font-[' '] flex flex-col overflow-hidden">
 
  <div className="absolute inset-0 bg-[url('/cultural-bg.jpg')] bg-cover bg-center"></div>

      {/* Header */}
      <header className="bg-black shadow-md px-4 md:px-8 py-4 flex justify-between items-center bg-white/90 backdrop-blur-sm shadow-md px-4 md:px-8 py-4 flex justify-between items-center z-10">
        <img src="/ajiet-logo.svg" alt="AJIET Logo" className="h-13 w-auto" />
       <nav className="hidden md:flex space-x-6 md:space-x-8">
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
      <main className="flex flex-col items-center justify-between flex-1 text-center px-10 py-10">
        {/* Title */}
        <h1
          style={{ color: "#930a00" }}
          className={`mt-38 text-4xl sm:text-4xl md:text-8xl font-bold transition-opacity duration-1000 ease-in-out text-center ${
          mounted ? "opacity-98" : "opacity-0"
  }`}
>
  KALAVEDIKA
</h1>
        {/* Spacer to push buttons down */}
        <div className="flex flex-col items-center mt-auto mb-30">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-40">
            <button className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-600 transition-transform transform hover:scale-105 duration-300">
              Events
            </button>
            <button className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-600 transition-transform transform hover:scale-105 duration-300">
              Register
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
