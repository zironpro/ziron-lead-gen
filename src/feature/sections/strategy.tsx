"use client";

import { Users, MonitorPlay, Megaphone, Target, ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

export function Strategy() {
	const steps = [
		{
			icon: <Users className="w-6 h-6" />,
			title: "Research & Audit",
			description:
				"We studied their market, audience & competitors to find the gaps.",
		},
		{
			icon: <MonitorPlay className="w-6 h-6" />,
			title: "Content Creation",
			description:
				"High-quality posts, reels & property videos that build trust.",
		},
		{
			icon: <Megaphone className="w-6 h-6" />,
			title: "Paid Campaigns",
			description:
				"Targeted ads designed to reach serious, high-intent property buyers.",
		},
		{
			icon: <Target className="w-6 h-6" />,
			title: "Lead Generation",
			description:
				"Optimized campaigns that consistently bring qualified inquiries.",
		},
	];

	return (
		<section className="py-10 md:py-16 relative border-b border-slate-100">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-start relative">
					{/* Right Column: Steps Timeline */}
					<div className="order-2 lg:order-2 relative">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="flex flex-col gap-12"
						>
							{steps.map((step, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0.4 }}
									whileInView={{ opacity: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 1.0 }}
									className="flex flex-row items-start relative group gap-6 md:gap-8"
								>
									{/* Vertical Line linking to next step */}
									{index < steps.length - 1 && (
										<div className="absolute top-16 left-8 w-[2px] h-[calc(100%-1rem)] bg-slate-100 z-0 -ml-[1px]">
											<motion.div
												initial={{ height: "0%" }}
												whileInView={{ height: "100%" }}
												viewport={{ once: true }}
												transition={{
													duration: 0.6,
													delay: index * 1.0 + 0.4,
													ease: "easeInOut",
												}}
												className="absolute top-0 left-0 w-full bg-amber-400"
											/>
											{/* Base Arrowhead */}
											<div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-slate-200">
												<ArrowDown className="w-5 h-5" />
											</div>
											{/* Lit Arrowhead */}
											<motion.div
												initial={{ opacity: 0 }}
												whileInView={{ opacity: 1 }}
												viewport={{ once: true }}
												transition={{ duration: 0.1, delay: (index + 1) * 1.0 }}
												className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-amber-400"
											>
												<ArrowDown className="w-5 h-5" />
											</motion.div>
										</div>
									)}

									{/* Icon Container */}
									<div className="w-16 h-16 shrink-0 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center relative z-10 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm border border-amber-100 group-hover:shadow-amber-200/50 group-hover:shadow-lg">
										<div className="transition-colors duration-300">
											{step.icon}
										</div>

										{/* Step Number Badge */}
										<div className="absolute -top-2 -right-2 w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs border-[2px] border-white shadow-sm z-20">
											{index + 1}
										</div>
									</div>

									{/* Text Content */}
									<div className="pt-2 pb-6">
										<h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
											{step.title}
										</h4>
										<p className="text-slate-600 text-base md:text-lg leading-relaxed">
											{step.description}
										</p>
									</div>
								</motion.div>
							))}
						</motion.div>
					</div>

					{/* Left Column: Heading */}
					<div className="order-1 lg:order-1 lg:sticky lg:top-40 self-start">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="mb-12 lg:mb-0 text-center lg:text-left bg-white border border-slate-300 rounded-lg p-8 md:p-12"
						>
							<Badge className="bg-slate-900 text-white hover:bg-slate-800 border-none mb-6 px-4 py-1.5 text-xs font-semibold tracking-wider rounded-lg">
								<span className="w-2 h-2 rounded-full bg-amber-500 mr-2"></span>
								Our Strategy
							</Badge>
							<h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
								The 4-Step Growth Blueprint
							</h2>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
