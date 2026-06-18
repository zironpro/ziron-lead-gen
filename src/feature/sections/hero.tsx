"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { ArrowRight, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";

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
					</motion.div>
				</div>
			</div>
		</section>
	);
}
