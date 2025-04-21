'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <div className="w-full h-screen bg-yellow-600 flex flex-col items-center justify-center text-white">
      {/* Title */}
      <h1 className="text-10xl font-bold mb-8 text-center">
        CULTURAL COMMITTEE
      </h1>

      {/* Buttons */}
      <div className="flex gap-8">
        <Link href="/events">
          <button className="bg-gray-900 hover:bg-gray-700 text-white px-6 py-3 rounded-md text-lg">
            Events
          </button>
        </Link>
        <Link href="/register">
          <button className="bg-gray-900 hover:bg-gray-700 text-white px-6 py-3 rounded-md text-lg">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}
