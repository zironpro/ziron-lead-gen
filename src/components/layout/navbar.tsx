"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change background after scrolling down 20px
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Initial check in case of page refresh while scrolled down
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`w-full fixed top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200 py-4" 
          : "bg-transparent border-transparent py-6 md:py-8"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] flex items-center justify-center md:justify-start">
        <Link href="/" className="flex-shrink-0 flex items-center transition-opacity hover:opacity-80">
          <Image 
            src="/assets/logo.svg" 
            alt="Ziron Pro Logo" 
            width={605} 
            height={110} 
            className={`h-auto object-contain transition-all duration-500 ${
              isScrolled ? "w-40 sm:w-48 md:w-52" : "w-48 sm:w-56 md:w-64"
            }`}
            priority
          />
        </Link>
      </div>
    </header>
  );
}
