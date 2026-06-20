"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { InfoNav } from "@/components/layout/info-nav";

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
			className={`fixed top-0 z-50 w-full transition-all duration-500 ${
				isScrolled
					? "border-slate-200 border-b bg-white/90 backdrop-blur-md"
					: "border-transparent bg-transparent"
			}`}
		>
			<InfoNav />
			<div className={`container mx-auto flex max-w-[1200px] items-center justify-center px-4 sm:px-6 md:justify-start lg:px-8 ${isScrolled ? "py-4" : "py-6 md:py-8"}`}>
				<Link
					className="flex flex-shrink-0 items-center transition-opacity hover:opacity-80"
					href="/"
					onClick={(e) => {
						if (window.location.pathname === "/") {
							e.preventDefault();
							window.scrollTo({ top: 0, behavior: "smooth" });
						}
					}}
				>
					<Image
						alt="Ziron Pro Logo"
						className={`h-auto object-contain transition-all duration-500 ${
							isScrolled ? "w-40 sm:w-48 md:w-52" : "w-48 sm:w-56 md:w-64"
						}`}
						height={110}
						priority
						src="/digital-marketing/assets/logo.svg"
						width={605}
					/>
				</Link>
			</div>
		</header>
	);
}
