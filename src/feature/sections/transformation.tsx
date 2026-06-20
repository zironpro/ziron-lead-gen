"use client";

import Image from "next/image";

import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function Transformation() {
	return (
		<section className="relative pt-8 pb-12 md:pt-12">
			<div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
				{/* Grid Header */}
				<motion.div
					className="mb-16 grid grid-cols-1 items-center gap-6 text-left md:grid-cols-2 md:gap-12"
					initial={{ opacity: 0, y: 20 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					whileInView={{ opacity: 1, y: 0 }}
				>
					<h2 className="font-extrabold text-4xl text-slate-900 leading-tight tracking-tight md:text-5xl">
						See The Transformation
					</h2>
					<p className="font-medium text-lg text-slate-600 md:text-xl">
						Stop guessing what works. We turn low-engagement profiles into
						consistent lead-generation machines.
					</p>
				</motion.div>

				{/* Content Grid */}
				<motion.div
					className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16"
					initial={{ opacity: 0, y: 40 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					whileInView={{ opacity: 1, y: 0 }}
				>
					{/* Left Side: Texts */}
					<div className="flex flex-col space-y-8">
						{/* Mobile Image (Hidden on Desktop) */}
						<div className="relative mx-auto w-full max-w-lg lg:hidden">
							<div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-amber-500/10">
								<Image
									alt="Transformation results"
									className="h-auto w-full object-cover"
									height={1200}
									quality={100}
									src="/digital-marketing/image/socialmedia.jpeg"
									unoptimized={true}
									width={1200}
								/>
							</div>
						</div>

						<div className="space-y-4">
							<h3 className="font-bold text-3xl text-slate-900 tracking-tight">
								From silent followers to highly qualified leads.
							</h3>
							<p className="text-lg text-slate-600 leading-relaxed">
								Before working with us, most businesses struggle with low
								engagement and inconsistent inquiries. We completely overhaul
								your strategy to focus on what matters: revenue.
							</p>
						</div>

						<ul className="space-y-4">
							{[
								"Data-driven social media campaigns",
								"High-converting ad creatives",
								"Targeted audience segmentation",
								"Consistent daily inquiries",
							].map((item) => (
								<li className="flex items-center gap-3" key={item}>
									<div className="flex shrink-0 items-center justify-center rounded-full bg-amber-100 p-1">
										<CheckCircle2 className="h-5 w-5 text-amber-600" />
									</div>
									<span className="font-semibold text-lg text-slate-700">
										{item}
									</span>
								</li>
							))}
						</ul>

						<div className="mt-4 flex flex-col gap-2 rounded-xl border border-slate-100 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
							<div>
								<p className="font-bold text-slate-400 text-sm uppercase tracking-wider">
									Average Monthly Leads
								</p>
								<div className="mt-1 flex items-baseline gap-3">
									<span className="font-medium text-2xl text-slate-300 line-through">
										5-8
									</span>
									<span className="font-black text-4xl text-amber-600">
										80+
									</span>
								</div>
							</div>
						</div>
					</div>

					{/* Right Side: Image (Hidden on Mobile) */}
					<div className="relative mx-auto hidden w-full max-w-lg lg:block lg:max-w-2xl">
						<div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-amber-500/10">
							<Image
								alt="Transformation results"
								className="h-auto w-full object-cover"
								height={1200}
								quality={100}
								src="/digital-marketing/image/socialmedia.jpeg"
								unoptimized={true}
								width={1200}
							/>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
