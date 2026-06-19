"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { ArrowRight, Phone, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";

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
		<section className="relative overflow-hidden bg-gradient-to-br from-amber-50/80 via-white to-orange-50/80 py-24 md:py-32 lg:py-40">
			{/* Decorative glowing background orbs */}
			<div className="pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/2 rounded-full bg-amber-300/20 blur-[120px]" />
			<div className="pointer-events-none absolute bottom-0 left-0 h-[600px] w-[600px] -translate-x-1/3 translate-y-1/3 rounded-full bg-orange-300/20 blur-[120px]" />

			<div className="container relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
				<div className="flex max-w-3xl flex-col items-start justify-center text-left">
					{/* Text Content */}
					<motion.div
						animate={{ opacity: 1, y: 0 }}
						className="flex w-full flex-col items-start space-y-8"
						initial={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.6 }}
					>
						<div className="inline-flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-100 px-4 py-1.5 font-bold text-amber-700 text-sm tracking-wide">
							<TrendingUp className="h-4 w-4" />
							<span>Proven Digital Marketing in UAE</span>
						</div>

						<h1 className="font-extrabold text-5xl text-slate-900 leading-[1.1] tracking-tight md:text-6xl lg:text-[72px]">
							We Generated <br />
							<span className="inline-block text-amber-500 drop-shadow-sm">
								<Counter target={50} /> Qualified Leads
							</span>{" "}
							<br />
							in 10 Days.
						</h1>

						<p className="max-w-2xl text-lg text-slate-600 leading-relaxed md:text-xl">
							Stop guessing. Start closing. Discover how our data-driven social
							media and paid campaigns scale businesses.
						</p>

						{/* Call to Action Buttons */}
						<div className="flex w-full flex-col items-center justify-start gap-4 pt-4 sm:flex-row">
							<Button
								className="group h-14 w-full rounded-lg bg-amber-500 px-8 font-bold text-lg text-white shadow-amber-500/20 shadow-lg transition-all hover:bg-amber-600 sm:w-auto"
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
								className="h-14 w-full rounded-lg border-slate-200 bg-white px-8 font-bold text-lg text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900 sm:w-auto"
								nativeButton={false}
								onClick={(e) => {
									e.preventDefault();
									document
										.getElementById("pricing")
										?.scrollIntoView({ behavior: "smooth" });
								}}
								render={<Link href="#pricing" />}
								variant="outline"
							>
								View All Packages
							</Button>
						</div>

						{/* Contact Buttons */}
						<div className="flex w-full flex-row items-center justify-start gap-3 pt-2 sm:gap-4">
							<Button
								className="h-14 flex-1 rounded-lg border-slate-200 bg-white px-2 font-bold text-base text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900 sm:w-auto sm:flex-none sm:px-8 sm:text-lg"
								nativeButton={false}
								render={<Link href="tel:+971542588446" />}
								variant="outline"
							>
								<Phone className="mr-1.5 h-4 w-4 sm:mr-2 sm:h-5 sm:w-5" />
								Call
							</Button>
							<Button
								className="h-14 flex-1 rounded-lg bg-[#25D366] px-2 font-bold text-base text-white shadow-[#25D366]/20 shadow-lg transition-all hover:bg-[#20bd5a] sm:w-auto sm:flex-none sm:px-8 sm:text-lg"
								nativeButton={false}
								render={
									<Link
										href="https://wa.me/971566646539"
										rel="noopener noreferrer"
										target="_blank"
									/>
								}
							>
								<WhatsAppIcon className="mr-1.5 h-4 w-4 sm:mr-2 sm:h-5 sm:w-5" />
								WhatsApp
							</Button>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
