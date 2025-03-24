"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../images/Bauvision_logo.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNav() {
    setIsOpen(!isOpen);
    document.body.classList.toggle("modal-open", !isOpen);
  }

  function closeNav() {
    setIsOpen(false);
    document.body.classList.remove("modal-open");
  }

  return (
    <header className="sticky top-0 w-full bg-white shadow-md z-50">
      <nav className="relative max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-primary hover:text-secondary transition-colors relative z-50"
        >
          <Image
            src={Logo}
            alt="Das Logo von Bauvision360"
            width={140}
            height={80}
          />
        </Link>
        <button
          className={`mobile-nav-toggle lg:hidden relative z-50 ${isOpen ? "active" : ""
            }`}
          aria-label="Menü öffnen"
          onClick={toggleNav}
        >
          <div className="space-y-2">
            <span className="block w-6 h-0.5 bg-primary"></span>
            <span className="block w-6 h-0.5 bg-primary"></span>
            <span className="block w-6 h-0.5 bg-primary"></span>
          </div>
        </button>
        <div
          className={`nav-links ${isOpen ? "active" : ""
            } lg:flex flex-col lg:flex-row bg-white lg:bg-transparent p-5 lg:p-0 fixed lg:relative top-0 lg:top-auto left-0 w-full lg:w-auto h-screen lg:h-auto pt-24 lg:pt-0 z-40 gap-4 justify-center items-center text-center`}
        >
          <Link
            href="/"
            className="block w-full lg:w-auto bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-md transition-colors"
            onClick={closeNav}
          >
            Start
          </Link>
          <Link
            href="/about"
            className="block w-full lg:w-auto bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-md transition-colors"
            onClick={closeNav}
          >
            Über uns
          </Link>
          <Link
            href="/services"
            className="block w-full lg:w-auto bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-md transition-colors"
            onClick={closeNav}
          >
            Leistungen
          </Link>
          <Link
            href="/contact"
            className="block w-full lg:w-auto bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-md transition-colors"
            onClick={closeNav}
          >
            Kontakt
          </Link>
        </div>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30"
            onClick={closeNav}
          ></div>
        )}
      </nav>
    </header>
  );
}
