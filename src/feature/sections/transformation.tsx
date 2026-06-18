"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function Transformation() {
	return (
		<section className="pt-8 md:pt-12 pb-12 relative">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="flex flex-col items-center justify-center mb-16 text-center"
				>
					<Badge className="bg-slate-900 text-white hover:bg-slate-800 border-none mb-6 px-4 py-1.5 text-xs font-semibold tracking-wider rounded-lg">
						<span className="w-2 h-2 rounded-full bg-amber-500 mr-2"></span>
						Before & After
					</Badge>
					<h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
						See The Transformation
					</h2>
				</motion.div>

				{/* Comparison Card Container */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="bg-white rounded-lg border border-slate-200 p-8 md:p-16 relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8"
				>
					{/* Before Column */}
					<div className="w-full md:w-5/12 flex flex-col items-center text-center">
						<div className="flex flex-col items-center">
							<div className="flex flex-col items-center gap-2 mb-8">
								<div className="px-8 py-1.5 rounded-lg bg-white border border-amber-500 text-amber-500 font-bold text-lg mb-2 shadow-lg">
									Before
								</div>
								<div className="px-4 py-1 rounded-full bg-red-600 text-white font-medium text-sm shadow-md">
									Low Engagement
								</div>
								<div className="px-4 py-1 rounded-full bg-red-600 text-white font-medium text-sm shadow-md">
									No Consistent Leads
								</div>
							</div>
						</div>

						{/* Before Image */}
						<div className="overflow-hidden w-full max-w-[260px] mx-auto shadow-2xl shadow-amber-500/10 mb-8 transform hover:-translate-y-2 transition-transform duration-500">
							<Image
								src="/image/before.png"
								alt="Before transformation"
								width={260}
								height={400}
								priority
								className="w-full h-auto object-cover"
							/>
						</div>

						<div className="text-slate-400 text-xs font-bold tracking-wider mb-2">
							Avg. Monthly Leads
						</div>
						<div className="text-4xl font-extrabold text-slate-400">5 - 8</div>
					</div>

					{/* Curved Arrow (Desktop) */}
					<div className="hidden md:flex absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 w-32 items-center justify-center text-amber-300">
						<svg
							viewBox="0 0 100 50"
							fill="none"
							className="w-full h-auto drop-shadow-sm overflow-visible"
						>
							<path
								d="M10,40 Q50,0 90,35"
								stroke="currentColor"
								strokeWidth="3"
								fill="none"
								strokeLinecap="round"
								strokeDasharray="6 6"
							/>
							<path
								d="M80,35 L90,35 L88,25"
								stroke="currentColor"
								strokeWidth="3"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>

					{/* Mobile Arrow */}
					<div className="md:hidden flex justify-center text-amber-300 my-4">
						<svg
							width="32"
							height="32"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="3"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeDasharray="4 4"
						>
							<path d="M12 5v14M19 12l-7 7-7-7" />
						</svg>
					</div>

					{/* After Column */}
					<div className="w-full md:w-5/12 flex flex-col items-center text-center">
						<div className="flex flex-col items-center">
							<div className="flex flex-col items-center gap-2 mb-8">
								<div className="px-8 py-1.5 rounded-lg bg-white border border-amber-500 text-amber-500 font-bold text-lg mb-2 shadow-lg">
									After
								</div>
								<div className="px-4 py-1 rounded-full bg-green-600 text-white font-medium text-sm shadow-md">
									High Engagement
								</div>
								<div className="px-4 py-1 rounded-full bg-green-600 text-white font-medium text-sm shadow-md">
									Consistent Inquiries
								</div>
							</div>
						</div>

						{/* After Image */}
						<div className="overflow-hidden w-full max-w-[260px] mx-auto shadow-2xl shadow-amber-500/10 mb-8 transform hover:-translate-y-2 transition-transform duration-500">
							<Image
								src="/image/after.png"
								alt="After transformation"
								width={260}
								height={400}
								priority
								className="w-full h-auto object-cover"
							/>
						</div>

						<div className="text-slate-500 text-xs font-bold tracking-wider mb-2">
							Avg. Monthly Leads
						</div>
						<div className="text-5xl font-black text-amber-600">80+</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
