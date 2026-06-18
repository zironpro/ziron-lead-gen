"use client";

import { ArrowDown, Megaphone, MonitorPlay, Target, Users } from "lucide-react";
import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";

export function Strategy() {
	const steps = [
		{
			icon: <Users className="h-6 w-6" />,
			title: "Research & Audit",
			description:
				"We studied their market, audience & competitors to find the gaps.",
		},
		{
			icon: <MonitorPlay className="h-6 w-6" />,
			title: "Content Creation",
			description:
				"High-quality posts, reels & property videos that build trust.",
		},
		{
			icon: <Megaphone className="h-6 w-6" />,
			title: "Paid Campaigns",
			description:
				"Targeted ads designed to reach serious, high-intent property buyers.",
		},
		{
			icon: <Target className="h-6 w-6" />,
			title: "Lead Generation",
			description:
				"Optimized campaigns that consistently bring qualified inquiries.",
		},
	];

	return (
		<section className="relative border-slate-100 border-b py-10 md:py-16">
			<div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
				<div className="relative grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-8">
					{/* Right Column: Steps Timeline */}
					<div className="relative order-2 lg:order-2">
						<motion.div
							className="flex flex-col gap-12"
							initial={{ opacity: 0, y: 30 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							whileInView={{ opacity: 1, y: 0 }}
						>
							{steps.map((step, index) => (
								<motion.div
									className="group relative flex flex-row items-start gap-6 md:gap-8"
									initial={{ opacity: 0.4 }}
									key={step.title}
									transition={{ duration: 0.5, delay: index * 1.0 }}
									viewport={{ once: true }}
									whileInView={{ opacity: 1 }}
								>
									{/* Vertical Line linking to next step */}
									{index < steps.length - 1 && (
										<div className="absolute top-16 left-8 z-0 -ml-[1px] h-[calc(100%-1rem)] w-[2px] bg-slate-100">
											<motion.div
												className="absolute top-0 left-0 w-full bg-amber-400"
												initial={{ height: "0%" }}
												transition={{
													duration: 0.6,
													delay: index * 1.0 + 0.4,
													ease: "easeInOut",
												}}
												viewport={{ once: true }}
												whileInView={{ height: "100%" }}
											/>
											{/* Base Arrowhead */}
											<div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-slate-200">
												<ArrowDown className="h-5 w-5" />
											</div>
											{/* Lit Arrowhead */}
											<motion.div
												className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-amber-400"
												initial={{ opacity: 0 }}
												transition={{ duration: 0.1, delay: (index + 1) * 1.0 }}
												viewport={{ once: true }}
												whileInView={{ opacity: 1 }}
											>
												<ArrowDown className="h-5 w-5" />
											</motion.div>
										</div>
									)}

									{/* Icon Container */}
									<div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-amber-100 bg-amber-50 text-amber-600 shadow-sm transition-all duration-300 group-hover:bg-amber-600 group-hover:text-white group-hover:shadow-amber-200/50 group-hover:shadow-lg">
										<div className="transition-colors duration-300">
											{step.icon}
										</div>

										{/* Step Number Badge */}
										<div className="absolute -top-2 -right-2 z-20 flex h-7 w-7 items-center justify-center rounded-lg border-[2px] border-white bg-slate-900 font-bold text-white text-xs shadow-sm">
											{index + 1}
										</div>
									</div>

									{/* Text Content */}
									<div className="pt-2 pb-6">
										<h4 className="mb-3 font-bold text-slate-900 text-xl md:text-2xl">
											{step.title}
										</h4>
										<p className="text-base text-slate-600 leading-relaxed md:text-lg">
											{step.description}
										</p>
									</div>
								</motion.div>
							))}
						</motion.div>
					</div>

					{/* Left Column: Heading */}
					<div className="order-1 self-start lg:sticky lg:top-40 lg:order-1">
						<motion.div
							className="mb-12 rounded-lg border border-slate-300 bg-white p-8 text-center md:p-12 lg:mb-0 lg:text-left"
							initial={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							whileInView={{ opacity: 1, y: 0 }}
						>
							<Badge className="mb-6 rounded-lg border-none bg-slate-900 px-4 py-1.5 font-semibold text-white text-xs tracking-wider hover:bg-slate-800">
								<span className="mr-2 h-2 w-2 rounded-full bg-amber-500" />
								Our Strategy
							</Badge>
							<h2 className="font-extrabold text-4xl text-slate-900 leading-tight tracking-tight md:text-5xl">
								The 4-Step Growth Blueprint
							</h2>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
