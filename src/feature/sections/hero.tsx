"use client";

import { useState, useEffect } from "react";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Link from "next/link";
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
			setCount(Math.floor(easeProgress * target));

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
		<section className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-amber-50/80 via-white to-orange-50/80">
			{/* Decorative glowing background orbs */}
			<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-300/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
			<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-300/20 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
			
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] relative z-10">
				<div className="flex flex-col items-start justify-center text-left max-w-3xl">
					{/* Text Content */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="w-full flex flex-col items-start space-y-8"
					>
						<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-amber-100 border border-amber-200 text-amber-700 text-sm font-bold tracking-wide">
							<TrendingUp className="w-4 h-4" />
							<span>Proven Digital Marketing in UAE</span>
						</div>

						<h1 className="text-5xl md:text-6xl lg:text-[72px] font-extrabold leading-[1.1] tracking-tight text-slate-900">
							We Generated <br />
							<span className="text-amber-500 inline-block drop-shadow-sm">
								<Counter target={50} /> Qualified Leads
							</span>{" "}
							<br />
							in 10 Days.
						</h1>

						<p className="text-slate-600 text-lg md:text-xl max-w-2xl leading-relaxed">
							Stop guessing. Start closing. Discover how our data-driven social
							media and paid campaigns scale businesses.
						</p>

						{/* Call to Action Buttons */}
						<div className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-4 w-full">
							<Button 
								nativeButton={false}
								render={<Link href="#contact" />}
								onClick={(e) => {
									e.preventDefault();
									document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
								}}
								className="bg-amber-500 hover:bg-amber-600 text-white rounded-lg px-8 h-14 font-bold text-lg shadow-lg shadow-amber-500/20 w-full sm:w-auto transition-all group"
							>
								Get Your Free Audit
								<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
							</Button>
							<Button
								variant="outline"
								nativeButton={false}
								render={<Link href="#pricing" />}
								onClick={(e) => {
									e.preventDefault();
									document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
								}}
								className="rounded-lg px-8 h-14 font-bold text-lg text-slate-700 border-slate-200 bg-white hover:bg-slate-50 hover:text-slate-900 w-full sm:w-auto transition-all shadow-sm"
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
