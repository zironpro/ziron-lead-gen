"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { ArrowRight, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";

import { HeroResults } from "../components/hero-results";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
		<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
	</svg>
);

function Counter({
	target,
	duration = 2000,
}: {
	target: number;
	duration?: number;
}) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		let startTime: number | null = null;
		let animationFrame: number;

		const animate = (currentTime: number) => {
			if (!startTime) startTime = currentTime;
			const progress = Math.min((currentTime - startTime) / duration, 1);

			// Easing function (easeOutQuart)
			const easeProgress = 1 - Math.pow(1 - progress, 4);
			setCount(Math.round(easeProgress * target));

			if (progress < 1) {
				animationFrame = requestAnimationFrame(animate);
			}
		};

		animationFrame = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(animationFrame);
	}, [target, duration]);

	return <span>{count}</span>;
}

export function Hero() {
	return (
		<>
			<section className="relative overflow-hidden bg-[#f7f8fa] pt-36 pb-36 md:pt-30 md:pb-48 lg:pt-28 lg:pb-56">
				{/* Software House Inspired Background */}
				<div className="pointer-events-none absolute inset-0 overflow-hidden">
					{/* Base Background */}
					<div className="absolute inset-0 bg-gradient-to-r from-[#f8f3ea] via-[#f8f8fa] to-[#edf5ff]" />

					{/* Left Side */}
					<div className="absolute top-0 left-0 h-[60%] w-[12%] bg-white/70" />

					<div className="absolute top-0 left-[8%] h-[55%] w-[18%] bg-[#ffc650]/20/40" />

					<div className="absolute top-[5%] left-[22%] h-[22%] w-[18%] -skew-x-[35deg] bg-slate-100/70" />

					<div className="absolute top-[20%] left-[15%] h-[25%] w-[28%] -skew-x-[35deg] bg-[#ffc650]/10/70" />

					{/* Center */}
					<div className="absolute top-0 left-[35%] h-[30%] w-[18%] -skew-x-[35deg] bg-indigo-100/40" />

					<div className="absolute top-[18%] left-[42%] h-[28%] w-[22%] -skew-x-[35deg] bg-indigo-100/30" />

					<div className="absolute top-[38%] left-[48%] h-[18%] w-[25%] -skew-x-[35deg] bg-slate-100/40" />

					{/* Right Side */}
					<div className="absolute top-0 right-[20%] h-[35%] w-[18%] -skew-x-[35deg] bg-blue-100/40" />

					<div className="absolute top-[8%] right-[5%] h-[45%] w-[22%] -skew-x-[35deg] bg-blue-100/50" />

					<div className="absolute top-[32%] right-[18%] h-[20%] w-[30%] -skew-x-[35deg] bg-blue-50/50" />

					<div className="absolute top-0 right-0 h-[60%] w-[12%] bg-blue-100/40" />

					{/* Soft Fade Overlay */}
					<div className="absolute inset-0 bg-white/20" />
				</div>

				<div className="container relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 items-center gap-4 md:gap-8 lg:grid-cols-2 lg:gap-12">
						{/* Text Content */}
						<div className="flex w-full max-w-3xl animate-hero-fade-in flex-col items-start space-y-8 text-left">
							<div className="inline-flex items-center gap-2 rounded-lg border border-[#ffc650] bg-[#ffc650]/20 px-4 py-1.5 font-bold text-[#ffc650] text-sm tracking-wide">
								<TrendingUp className="h-4 w-4" />
								<span>Proven Digital Marketing in UAE</span>
							</div>

							<h1 className="font-extrabold text-5xl text-slate-900 leading-[1.1] tracking-tight md:text-6xl lg:text-[72px]">
								We Generated <br />
								<span className="inline-block text-[#ffc650] drop-shadow-sm">
									<Counter target={50} /> Qualified Leads
								</span>{" "}
								<br />
								in 10 Days.
							</h1>

							<p className="max-w-2xl text-lg text-slate-600 leading-relaxed md:text-xl">
								Stop guessing. Start closing. Discover how our data-driven
								social media and paid campaigns scale businesses.
							</p>

							<div className="flex w-full flex-col gap-4">
								{/* Call to Action Buttons */}
								<div className="flex w-full flex-col items-center justify-start gap-4 pt-4 sm:flex-row">
									<Button
										className="group h-14 w-full rounded-lg bg-[#ffc650] px-8 font-bold text-lg text-white shadow-[#ffc650]/ shadow-lg transition-all hover:bg-[#ffc650] sm:w-auto"
										nativeButton={false}
										onClick={(e) => {
											e.preventDefault();
											document
												.getElementById("contact")
												?.scrollIntoView({ behavior: "smooth" });
										}}
										render={<Link href="#contact" />}
									>
										Get Your Free Audit
										<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
									</Button>

									<Button
										className="h-14 w-full rounded-lg border-transparent bg-[#25D366] px-8 font-bold text-lg text-white shadow-sm transition-all hover:bg-[#20bd5a] hover:text-white sm:w-auto"
										nativeButton={false}
										render={
											<Link
												href="https://wa.me/971542588446"
												rel="noopener noreferrer"
												target="_blank"
											/>
										}
										variant="outline"
									>
										<WhatsAppIcon className="mr-3 h-10 w-10 text-white sm:mr-4 sm:h-12 sm:w-12" />
										WhatsApp
									</Button>
								</div>
							</div>
						</div>

						{/* Right Image */}
						<div className="relative flex w-full animate-hero-fade-in items-center justify-center pt-2 lg:pt-0">
							<Image
								alt="Hero Graphic"
								className="h-auto w-full max-w-[600px] object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
								height={1600}
								priority
								quality={100}
								src="/digital-marketing/image/hero.png"
								unoptimized={true}
								width={1600}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Overlapping Hero Results */}
			<div className="relative z-20 mx-auto -mt-20 w-full max-w-[1200px] px-4 sm:px-6 md:-mt-24 lg:-mt-32 lg:px-8">
				<HeroResults />
			</div>
		</>
	);
}
