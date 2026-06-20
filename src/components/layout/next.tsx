"use client";

import { useEffect, useState } from "react";

import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export function NextSectionButton() {
	const [isBottom, setIsBottom] = useState(false);

	// Check if we've reached the bottom of the page
	useEffect(() => {
		const handleScroll = () => {
			const bottom =
				window.innerHeight + window.scrollY >= document.body.offsetHeight - 150;
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
				animate={{ opacity: 1, y: 0 }}
				className="fixed bottom-8 left-1/2 z-40 hidden -translate-x-1/2 md:block"
				initial={{ opacity: 0, y: 20 }}
			>
				<button
					aria-label={isBottom ? "Scroll to top" : "Scroll to next section"}
					className="group flex animate-bounce cursor-pointer items-center justify-center rounded-lg border-none bg-[#ffc650] p-3 shadow-[#ffc650]/ shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffc650]"
					onClick={handleClick}
				>
					{isBottom ? (
						<ChevronUp className="h-6 w-6 text-slate-950 transition-colors" />
					) : (
						<ChevronDown className="h-6 w-6 text-slate-950 transition-colors" />
					)}
				</button>
			</motion.div>
		</AnimatePresence>
	);
}
