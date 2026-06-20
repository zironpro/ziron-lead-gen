"use client";

import Image from "next/image";

import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";

export function MetaAds() {
	return (
		<section className="bg-white py-8 md:py-12">
			<div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
				<motion.div
					className="flex flex-col items-center"
					initial={{ opacity: 0, y: 20 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					whileInView={{ opacity: 1, y: 0 }}
				>
					{/* Header */}
					<div className="mb-12 text-center md:mb-16">
						<div className="flex w-full flex-col items-center justify-center gap-4">
							<Badge className="mx-auto mb-4 flex w-fit items-center justify-center rounded-lg border-none bg-slate-900 px-4 py-1.5 font-semibold text-white text-xs tracking-wider hover:bg-slate-800">
								<span className="mr-2 h-2 w-2 rounded-full bg-amber-500" />
								Case Study
							</Badge>
							<h2 className="font-extrabold text-4xl text-slate-900 leading-tight tracking-tight md:text-5xl">
								Meta Ads Performance
							</h2>
						</div>
					</div>

					{/* Content Card */}
					<div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-slate-200/50 shadow-xl sm:p-8">
						<div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
							<div className="flex flex-col gap-3">
								<h4 className="font-bold text-slate-900 text-xl sm:text-2xl">
									Maxline Global{" "}
									<span className="font-medium text-slate-400">–</span> Lead Gen
									Campaign
								</h4>
								<div className="w-fit rounded-full bg-slate-100 px-4 py-1.5 font-semibold text-slate-600 text-sm">
									May 1 – May 10, 2024
								</div>
							</div>
							<div className="flex-shrink-0 rounded-xl border border-slate-100 bg-slate-50 p-3">
								<Image
									alt="Meta"
									className="h-8 w-auto object-contain sm:h-10"
									height={40}
									src="/digital-marketing/assets/partner/meta.svg"
									width={80}
								/>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
