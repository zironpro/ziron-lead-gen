"use client";

import Image from "next/image";

import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";

export function Transformation() {
	return (
		<section className="relative pt-8 pb-12 md:pt-12">
			<div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<motion.div
					className="mb-16 flex flex-col items-center justify-center text-center"
					initial={{ opacity: 0, y: 20 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					whileInView={{ opacity: 1, y: 0 }}
				>
					<Badge className="mb-6 rounded-lg border-none bg-slate-900 px-4 py-1.5 font-semibold text-white text-xs tracking-wider hover:bg-slate-800">
						<span className="mr-2 h-2 w-2 rounded-full bg-amber-500" />
						Before & After
					</Badge>
					<h2 className="font-extrabold text-4xl text-slate-900 leading-tight tracking-tight md:text-5xl">
						See The Transformation
					</h2>
				</motion.div>

				{/* Comparison Card Container */}
				<motion.div
					className="relative flex flex-col items-center justify-between gap-12 rounded-lg border border-slate-200 bg-white p-8 md:flex-row md:gap-8 md:p-16"
					initial={{ opacity: 0, y: 40 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					whileInView={{ opacity: 1, y: 0 }}
				>
					{/* Before Column */}
					<div className="flex w-full flex-col items-center text-center md:w-5/12">
						<div className="flex flex-col items-center">
							<div className="mb-8 flex flex-col items-center gap-2">
								<div className="mb-2 rounded-lg border border-amber-500 bg-white px-8 py-1.5 font-bold text-amber-500 text-lg shadow-lg">
									Before
								</div>
								<div className="rounded-full bg-red-600 px-4 py-1 font-medium text-sm text-white shadow-md">
									Low Engagement
								</div>
								<div className="rounded-full bg-red-600 px-4 py-1 font-medium text-sm text-white shadow-md">
									No Consistent Leads
								</div>
							</div>
						</div>

						{/* Before Image */}
						<div className="mx-auto mb-8 w-full max-w-[260px] transform overflow-hidden shadow-2xl shadow-amber-500/10 transition-transform duration-500 hover:-translate-y-2">
							<Image
								alt="Before transformation"
								className="h-auto w-full object-cover"
								height={400}
								priority
								src="/image/beforeimg.png"
								width={260}
							/>
						</div>

						<div className="mb-2 font-bold text-slate-400 text-xs tracking-wider">
							Avg. Monthly Leads
						</div>
						<div className="font-extrabold text-4xl text-slate-400">5 - 8</div>
					</div>

					{/* Curved Arrow (Desktop) */}
					<div className="absolute top-[40%] left-1/2 hidden w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-amber-300 md:flex">
						<svg
							className="h-auto w-full overflow-visible drop-shadow-sm"
							fill="none"
							viewBox="0 0 100 50"
						>
							<path
								d="M10,40 Q50,0 90,35"
								fill="none"
								stroke="currentColor"
								strokeDasharray="6 6"
								strokeLinecap="round"
								strokeWidth="3"
							/>
							<path
								d="M80,35 L90,35 L88,25"
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="3"
							/>
						</svg>
					</div>

					{/* Mobile Arrow */}
					<div className="my-4 flex justify-center text-amber-300 md:hidden">
						<svg
							fill="none"
							height="32"
							stroke="currentColor"
							strokeDasharray="4 4"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="3"
							viewBox="0 0 24 24"
							width="32"
						>
							<path d="M12 5v14M19 12l-7 7-7-7" />
						</svg>
					</div>

					{/* After Column */}
					<div className="flex w-full flex-col items-center text-center md:w-5/12">
						<div className="flex flex-col items-center">
							<div className="mb-8 flex flex-col items-center gap-2">
								<div className="mb-2 rounded-lg border border-amber-500 bg-white px-8 py-1.5 font-bold text-amber-500 text-lg shadow-lg">
									After
								</div>
								<div className="rounded-full bg-green-600 px-4 py-1 font-medium text-sm text-white shadow-md">
									High Engagement
								</div>
								<div className="rounded-full bg-green-600 px-4 py-1 font-medium text-sm text-white shadow-md">
									Consistent Inquiries
								</div>
							</div>
						</div>

						{/* After Image */}
						<div className="mx-auto mb-8 w-full max-w-[260px] transform overflow-hidden shadow-2xl shadow-amber-500/10 transition-transform duration-500 hover:-translate-y-2">
							<Image
								alt="After transformation"
								className="h-auto w-full object-cover"
								height={400}
								priority
								src="/image/afterimg.png"
								width={260}
							/>
						</div>

						<div className="mb-2 font-bold text-slate-500 text-xs tracking-wider">
							Avg. Monthly Leads
						</div>
						<div className="font-black text-5xl text-amber-600">80+</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
