"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-[#9AC450]">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#9AC450] transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#9AC450] transition-colors">
              About Us
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-[#9AC450] transition-colors">
              Our Products
            </Link>
            <Link href="/exports" className="text-gray-700 hover:text-[#9AC450] transition-colors">
              Exports
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#9AC450] transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 py-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-[#9AC450] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-[#9AC450] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/products"
                className="text-gray-700 hover:text-[#9AC450] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Our Products
              </Link>
              <Link
                href="/exports"
                className="text-gray-700 hover:text-[#9AC450] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Exports
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-[#9AC450] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}