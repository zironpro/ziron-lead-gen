"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function NextSectionButton() {
  const [isBottom, setIsBottom] = useState(false);

  // Check if we've reached the bottom of the page
  useEffect(() => {
    const handleScroll = () => {
      const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 150;
      setIsBottom(bottom);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (isBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const sections = Array.from(document.querySelectorAll("section"));
    
    // Find the first section that is strictly below the current viewport top
    const nextSection = sections.find(
      (section) => section.getBoundingClientRect().top > 50
    );

    if (nextSection) {
      // Scroll to the next section
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Fallback: just scroll down by a chunk if no distinct section is found
      window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40"
      >
        <button
          onClick={handleClick}
          className="bg-amber-500 p-3 rounded-lg shadow-lg shadow-amber-500/20 border-none hover:bg-amber-400 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center animate-bounce group cursor-pointer"
          aria-label={isBottom ? "Scroll to top" : "Scroll to next section"}
        >
          {isBottom ? (
            <ChevronUp className="w-6 h-6 text-slate-950 transition-colors" />
          ) : (
            <ChevronDown className="w-6 h-6 text-slate-950 transition-colors" />
          )}
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
