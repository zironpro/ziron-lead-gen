"use client";

import Image from "next/image";

export function Footer() {
	return (
		<footer className="bg-slate-950 md:bg-white pt-10 pb-28 md:py-10 overflow-hidden md:border-t md:border-slate-200">
			<div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
				<div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
					{/* Left: Logo */}
					<div className="w-full md:w-auto flex justify-center">
						<Image
							src="/assets/logo.svg"
							alt="Ziron Pro Logo"
							width={200}
							height={36}
							className="h-10 w-auto object-contain"
						/>
					</div>

					{/* Right: Partner Badges */}
					<div className="flex flex-row flex-nowrap gap-3 sm:gap-6 items-center justify-center md:justify-end bg-white md:bg-transparent py-4 px-6 md:p-0 -mx-6 w-[calc(100%+3rem)] md:mx-0 md:w-auto md:rounded-2xl overflow-x-auto">
						<Image
							src="/assets/partner/google.svg"
							alt="Google Partner"
							width={120}
							height={40}
							className="h-6 sm:h-8 w-auto object-contain hover:scale-105 transition-transform shrink-0"
						/>
						<Image
							src="/assets/partner/meta.svg"
							alt="Meta Partner"
							width={120}
							height={40}
							className="h-6 sm:h-8 w-auto object-contain hover:scale-105 transition-transform shrink-0"
						/>
						<Image
							src="/assets/partner/tiktok.svg"
							alt="TikTok Partner"
							width={120}
							height={40}
							className="h-6 sm:h-8 w-auto object-contain hover:scale-105 transition-transform shrink-0"
						/>
					</div>
				</div>
			</div>
		</footer>
	);
}
