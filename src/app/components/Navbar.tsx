'use client';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 shadow-md bg-white sticky top-0 z-50">
      <h1 className="text-xl font-bold">Logo</h1>
      <ul className="flex gap-6 text-base">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};
