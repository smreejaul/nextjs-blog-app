"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="font-bold text-xl">
        <span className="uppercase">Syed Reejaul Hussain</span>
        <br />
        <small>Principal Software Engineer</small>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8">
        <Link href="/" className="hover:text-gray-500 transition">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-500 transition">
          About
        </Link>
        <Link href="/blog" className="hover:text-gray-500 transition">
          Blog
        </Link>
        <Link href="/projects" className="hover:text-gray-500 transition">
          Projects
        </Link>
        <Link href="/contact" className="hover:text-gray-500 transition">
          Contact
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b flex flex-col px-6 py-4 gap-4 md:hidden">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
          <Link href="/projects" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
