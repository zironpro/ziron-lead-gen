"use client";

import Image from "next/image";

export function Footer() {
	return (
		<footer className="overflow-hidden bg-slate-950 pt-10 pb-28 md:border-slate-200 md:border-t md:bg-white md:py-10">
			<div className="container mx-auto max-w-[1400px] px-6 lg:px-12">
				<div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
					{/* Left: Logo */}
					<div className="flex w-full justify-center md:w-auto">
						<Image
							alt="Ziron Pro Logo"
							className="h-10 w-auto object-contain"
							height={36}
							src="/digital-marketing/assets/logo.svg"
							width={200}
						/>
					</div>

					{/* Right: Partner Badges */}
					<div className="-mx-6 flex w-[calc(100%+3rem)] flex-row flex-nowrap items-center justify-center gap-3 overflow-x-auto bg-white px-6 py-4 sm:gap-6 md:mx-0 md:w-auto md:justify-end md:rounded-2xl md:bg-transparent md:p-0">
						<Image
							alt="Google Partner"
							className="h-6 w-auto shrink-0 object-contain transition-transform hover:scale-105 sm:h-8"
							height={40}
							src="/digital-marketing/assets/partner/google.svg"
							width={120}
						/>
						<Image
							alt="Meta Partner"
							className="h-6 w-auto shrink-0 object-contain transition-transform hover:scale-105 sm:h-8"
							height={40}
							src="/digital-marketing/assets/partner/meta.svg"
							width={120}
						/>
						<Image
							alt="TikTok Partner"
							className="h-6 w-auto shrink-0 object-contain transition-transform hover:scale-105 sm:h-8"
							height={40}
							src="/digital-marketing/assets/partner/tiktok.svg"
							width={120}
						/>
					</div>
				</div>
			</div>
		</footer>
	);
}
