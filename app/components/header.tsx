"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../images/Bauvision_Logo_transparent.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "auto";
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <header className="sticky top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-4 flex-shrink-0">
              <Image
                src={Logo}
                alt="Bauvision360 Logo"
                width={148}
                height={85}
                priority
              />
              <span className="hidden lg:inline">
                Ihr verlässlicher Partner im Baugewerbe
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="duration-200 font-medium bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-md transition-colors"
              >
                Startseite
              </Link>
              <Link
                href="/about"
                className="duration-200 font-medium bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-md transition-colors"
              >
                Über uns
              </Link>
              <Link
                href="/services"
                className="duration-200 font-medium bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-md transition-colors"
              >
                Leistungen
              </Link>
              <Link
                href="/contact"
                className="duration-200 font-medium bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-md transition-colors"
              >
                Kontakt
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center p-2 mr-4 rounded-md text-primary focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Menü öffnen</span>
              <div className="relative w-6 h-12">
                <span
                  className={`absolute block w-10 h-1 bg-current transform transition-all duration-300 ease-in-out rounded ${
                    isOpen ? "rotate-45 top-5" : "top-2"
                  }`}
                />
                <span
                  className={`absolute block w-10 h-1 bg-current transform transition-all duration-300 ease-in-out rounded ${
                    isOpen ? "opacity-0" : "opacity-100"
                  } top-5`}
                />
                <span
                  className={`absolute block w-10 h-1 bg-current transform transition-all duration-300 ease-in-out rounded ${
                    isOpen ? "-rotate-45 top-5" : "top-8"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40">
          <div className="h-full flex flex-col">
            <div className="flex justify-end p-4">
              <button
                onClick={closeMenu}
                className="p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
              >
                <span className="sr-only">Menü schließen</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center items-center space-y-8 px-12">
              <Link
                href="/"
                className="duration-200 text-3xl bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-md transition-colors w-full text-center"
                onClick={closeMenu}
              >
                Startseite
              </Link>
              <Link
                href="/about"
                className="duration-200 text-3xl bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-md transition-colors w-full text-center"
                onClick={closeMenu}
              >
                Über uns
              </Link>
              <Link
                href="/services"
                className="duration-200 text-3xl bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-md transition-colors w-full text-center"
                onClick={closeMenu}
              >
                Leistungen
              </Link>
              <Link
                href="/contact"
                className="duration-200 text-3xl bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-md transition-colors w-full text-center"
                onClick={closeMenu}
              >
                Kontakt
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
