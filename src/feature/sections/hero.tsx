"use client";

import { useState, useEffect } from "react";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

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
		<section
			className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-cover bg-center bg-no-repeat"
			style={{
				backgroundImage: `url('/image/leads%20page%20hero%20image%20bg.jpg.jpeg')`,
			}}
		>
			{/* Subtle overlay for text readability */}
			<div className="absolute inset-0 bg-slate-950/20 z-0 pointer-events-none"></div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] relative z-10">
				<div className="flex flex-col items-start justify-center text-left max-w-3xl">
					{/* Text Content */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="w-full flex flex-col items-start space-y-8"
					>
						<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white/10 border border-white/20 text-amber-400 text-sm font-medium backdrop-blur-md">
							<TrendingUp className="w-4 h-4" />
							<span>Proven Digital Marketing in UAE</span>
						</div>

						<h1 className="text-5xl md:text-6xl lg:text-[72px] font-extrabold leading-[1.1] tracking-tight text-white drop-shadow-md">
							We Generated <br />
							<span className="text-amber-500 inline-block drop-shadow-lg">
								<Counter target={87} /> Qualified Leads
							</span>{" "}
							<br />
							in 30 Days.
						</h1>

						<p className="text-slate-100 text-lg md:text-xl max-w-2xl leading-relaxed drop-shadow">
							Stop guessing. Start closing. Discover how our data-driven social
							media and paid campaigns scale businesses.
						</p>

						{/* Call to Action Buttons */}
						<div className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-4 w-full">
							<Button className="bg-amber-500 hover:bg-amber-600 text-white rounded-lg px-8 h-14 font-bold text-lg shadow-lg shadow-amber-500/20 w-full sm:w-auto transition-all group">
								Get Your Free Audit
								<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
							</Button>
							<Button
								variant="outline"
								className="rounded-lg px-8 h-14 font-bold text-lg text-white border-white/30 bg-white/5 hover:bg-white/20 hover:text-white backdrop-blur-sm w-full sm:w-auto transition-all shadow-sm"
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
