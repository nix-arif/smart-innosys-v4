"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-transparent text-[#045494] px-6 py-4 fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="logo" width={40} height={40} />
          <span className="text-sm font-semibold">SMART INNOSYS SDN BHD</span>
        </Link>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <svg
              className="w-7 h-7 text-[#045494]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks
            onClick={() => {}}
            dropdownOpen={dropdownOpen}
            setDropdownOpen={setDropdownOpen}
          />
        </div>
      </div>

      {/* Mobile Slide-out */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-50`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="text-[#045494] hover:text-blue-500 transition"
          >
            ✕
          </button>
        </div>
        <div className="flex flex-col p-6 pt-0 space-y-6 text-lg text-[#045494]">
          <NavLinks
            onClick={() => setIsOpen(false)}
            dropdownOpen={dropdownOpen}
            setDropdownOpen={setDropdownOpen}
            isMobile
          />
        </div>
      </div>
    </nav>
  );
};

interface NavLinksProps {
  onClick: () => void;
  dropdownOpen: boolean;
  setDropdownOpen: (value: boolean) => void;
  isMobile?: boolean;
}

const NavLinks = ({
  onClick,
  dropdownOpen,
  setDropdownOpen,
  isMobile = false,
}: NavLinksProps) => (
  <>
    <Link
      href="/"
      onClick={onClick}
      className="hover:text-blue-500 transition duration-200"
    >
      Home
    </Link>
    <Link
      href="/about"
      onClick={onClick}
      className="hover:text-blue-500 transition duration-200"
    >
      About
    </Link>

    {/* Dropdown */}
    <div className="relative group">
      <button
        className="flex items-center gap-1 hover:text-blue-500 transition duration-200"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        Services
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`${dropdownOpen ? "block" : "hidden"} absolute ${
          isMobile ? "relative" : "top-full left-0"
        } bg-white shadow-md mt-2 rounded-md z-50 min-w-[160px] text-sm`}
      >
        <Link
          href="/services/web"
          onClick={onClick}
          className="block px-4 py-2 hover:bg-blue-50"
        >
          Web Development
        </Link>
        <Link
          href="/services/design"
          onClick={onClick}
          className="block px-4 py-2 hover:bg-blue-50"
        >
          Design
        </Link>
        <Link
          href="/services/seo"
          onClick={onClick}
          className="block px-4 py-2 hover:bg-blue-50"
        >
          SEO
        </Link>
      </div>
    </div>

    <Link
      href="/contact"
      onClick={onClick}
      className="hover:text-blue-500 transition duration-200"
    >
      Contact
    </Link>
  </>
);

export default Navbar;
