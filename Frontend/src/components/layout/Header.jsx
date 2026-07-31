"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-blue-950/95 shadow-lg">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* ================= Logo ================= */}

        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/School.png"
            alt="School Logo"
            width={56}
            height={56}
            className="w-14 h-14 rounded-full shadow-md transition duration-300 group-hover:rotate-6 group-hover:scale-110"
          />

          <div>
            <h1 className="text-2xl font-bold text-white tracking-wide">
              EG School
            </h1>

            <p className="text-cyan-300 text-xs">
              Learn • Lead • Inspire
            </p>
          </div>
        </Link>

        {/* ================= Desktop Menu ================= */}

        <nav className="hidden md:flex items-center gap-8 text-white font-medium">

          <Link href="/" className="hover:text-cyan-300 transition duration-300">
            Home
          </Link>

          <Link href="/about" className="hover:text-cyan-300 transition duration-300">
            About Us
          </Link>

          <Link href="/admission" className="hover:text-cyan-300 transition duration-300">
            Admissions
          </Link>

          {/* Menu Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-cyan-600 hover:bg-cyan-700 transition duration-300 p-3 rounded-xl shadow-lg"
          >
            <HiOutlineMenuAlt3 size={24} />
          </button>

        </nav>

        {/* ================= Mobile Menu Button ================= */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden bg-cyan-600 hover:bg-cyan-700 p-3 rounded-xl text-white transition duration-300"
        >
          <HiOutlineMenuAlt3 size={24} />
        </button>

        {/* ================= Dropdown ================= */}

        {menuOpen && (
          <div className="absolute right-6 top-20 w-72 rounded-2xl bg-white shadow-2xl overflow-hidden border border-cyan-100 animate-fadeIn">

            {/* Mobile Links */}

            <div className="md:hidden">

              <Link
                href="/"
                className="block px-6 py-4 text-gray-800 font-medium hover:bg-cyan-100 hover:text-cyan-700 transition-all duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                href="/about"
                className="block px-6 py-4 text-gray-800 font-medium hover:bg-cyan-100 hover:text-cyan-700 transition-all duration-300"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>

              <Link
                href="/admission"
                className="block px-6 py-4 text-gray-800 font-medium hover:bg-cyan-100 hover:text-cyan-700 transition-all duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Admissions
              </Link>

            </div>

            <Link
              href="/notice"
              className="block px-6 py-4 text-gray-800 font-medium hover:bg-cyan-100 hover:text-cyan-700 transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Notice Board
            </Link>

            <Link
              href="/academics"
              className="block px-6 py-4 text-gray-800 font-medium hover:bg-cyan-100 hover:text-cyan-700 transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Academics
            </Link>

            <Link
              href="/faculty"
              className="block px-6 py-4 text-gray-800 font-medium hover:bg-cyan-100 hover:text-cyan-700 transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Faculty
            </Link>

            <Link
              href="/gallery"
              className="block px-6 py-4 text-gray-800 font-medium hover:bg-cyan-100 hover:text-cyan-700 transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Gallery
            </Link>

            <Link
              href="/facilities"
              className="block px-6 py-4 text-gray-800 font-medium hover:bg-cyan-100 hover:text-cyan-700 transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Facilities
            </Link>

            <Link
              href="/news"
              className="block px-6 py-4 text-gray-800 font-medium hover:bg-cyan-100 hover:text-cyan-700 transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              News & Events
            </Link>

            <Link
              href="/contact"
              className="block px-6 py-4 text-gray-800 font-medium hover:bg-cyan-100 hover:text-cyan-700 transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="border-t"></div>

            <Link
              href="/login"
              className="block px-6 py-4 text-cyan-700 font-semibold hover:bg-cyan-100 transition"
              onClick={() => setMenuOpen(false)}
            >
              Admin Login
            </Link>

          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
