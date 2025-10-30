"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md w-full py-3 px-6 flex justify-between items-center fixed top-0 left-0 z-50">
      <Link href="/" className="text-2xl font-bold text-blue-600">
        📝 NotesApp
      </Link>
      <div className="space-x-4">
        <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
          Home
        </Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
          About
        </Link>
      </div>
    </nav>
  );
}
