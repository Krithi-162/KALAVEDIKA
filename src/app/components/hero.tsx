'use client';

import Image from 'next/image';
import Link from 'next/link';



export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="bg-[url('/cultural-bg.svg')] bg-no-repeat bg-cover bg-center h-screen w-full">
      <h1 className="text-white text-4xl font-bold text-center pt-20">CULTURAL COMMITTEE</h1>
    </div>
      <Image
        src="/cultural-bg.jpg"
        alt="Cultural Committee"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-20 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-10">CULTURAL COMMITTEE</h1>
        <div className="flex gap-6">
          <Link href="/events">
            <button className="bg-blue-900 hover:bg-blue-700 text-white text-xl font-semibold px-8 py-3 rounded-md transition-all duration-300">
              Events
            </button>
          </Link>
          <Link href="/register">
            <button className="bg-blue-900 hover:bg-blue-700 text-white text-xl font-semibold px-8 py-3 rounded-md transition-all duration-300">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
