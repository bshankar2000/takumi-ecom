"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Apparel", href: "/apparel" },
    { name: "Ceramics", href: "/ceramics" },
    { name: "Accessories", href: "/accessories" },
    { name: "Our Story", href: "/our-story" },
  ];

  return (
    <header
      className="relative w-full bg-[#FAFAFC] py-4 md:py-5 px-6 md:px-12 z-50"
      style={{ fontFamily: "var(--font-manrope)" }}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* Left: Brand / Logo & Mobile Menu Toggle */}
        <div className="flex-1 flex justify-start items-center gap-4">
          <button
            className="md:hidden p-1 -ml-1 text-[#0A192F] hover:opacity-70"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
          <Link
            href="/"
            className="text-xl md:text-[22px] text-[#0A192F] tracking-wide uppercase font-normal"
            style={{ fontFamily: "var(--font-libre-caslon)" }}
          >
            TAKUMI
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group flex items-center justify-center px-3 py-1.5 text-[13px] font-semibold tracking-wide text-[#334155] hover:text-[#0A192F] transition-colors duration-500 whitespace-nowrap"
            >
              <span className="relative z-10 group-hover:text-[#0A192F] transition-colors duration-500">
                {link.name}
              </span>
              {/* Japanese Brush Stroke Background */}
              <span className="absolute inset-0 z-0 scale-[1.15] -rotate-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0_0_0)]">
                {/* Tinted Brush Stroke Image */}
                <span className="absolute inset-0 bg-[#C62828]/15 [mask-image:url('/brushstroke.png')] [-webkit-mask-image:url('/brushstroke.png')] [mask-size:100%_100%] [-webkit-mask-size:100%_100%] [mask-position:center] [-webkit-mask-position:center] [mask-repeat:no-repeat] [-webkit-mask-repeat:no-repeat]" />
              </span>
            </Link>
          ))}
        </nav>

        {/* Right: Action Icons */}
        <div className="flex-1 flex justify-end items-center space-x-4 md:space-x-6 text-[#0A192F]">
          <button
            aria-label="Search"
            className="hover:opacity-70 transition-opacity"
          >
            <Search className="w-5 h-5 stroke-[1.5]" />
          </button>

          <button
            aria-label="User Account"
            className="hover:opacity-70 transition-opacity"
          >
            <User className="w-5 h-5 stroke-[1.5]" />
          </button>

          <button
            aria-label="Shopping Cart"
            className="relative hover:opacity-70 transition-opacity"
          >
            <ShoppingCart className="w-5 h-5 stroke-[1.5]" />
            {/* Red Notification Dot */}
            <span className="absolute -top-0.5 -right-0.5 block h-2.5 w-2.5 rounded-full bg-[#D32F2F] ring-2 ring-[#FAFAFC]" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#FAFAFC] border-t border-gray-200 px-6 py-6 shadow-lg md:hidden">
          <nav className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-wider text-[#334155] hover:text-[#0A192F] transition-colors uppercase"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
