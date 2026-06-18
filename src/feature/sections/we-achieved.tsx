"use client";

import { motion } from "motion/react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays } from "lucide-react";

export function WeAchieved() {
	const breakdown = [
		{
			title: "1. Profile Optimization",
			content:
				"We overhauled the bio, highlights, and visual identity to immediately convey trust and luxury to potential real estate buyers.",
		},
		{
			title: "2. Content Strategy Shift",
			content:
				"Transitioned from generic property listings to engaging video tours, market insights, and educational reels that positioned them as industry authorities.",
		},
		{
			title: "3. Targeted Ad Campaigns",
			content:
				"Deployed precision-targeted Meta ads focusing on high-net-worth individuals and expats actively looking for UAE real estate.",
		},
		{
			title: "4. Community Management",
			content:
				"Implemented a rapid response protocol for DMs and comments, capturing leads while their intent was highest.",
		},
	];

	return (
		<section className="pb-10 md:pb-16 relative">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start"
				>
					{/* Left Column: Info & CTA */}
					<div className="w-full lg:w-5/12 bg-white rounded-lg p-8 md:p-10 border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden lg:sticky lg:top-24">
						{/* Background decoration */}
						<div className="absolute top-0 right-0 -mt-16 -mr-16 w-48 h-48 bg-amber-50 rounded-full blur-3xl z-0"></div>

						<div className="relative z-10">
							<Badge className="bg-slate-900 text-white hover:bg-slate-800 border-none mb-6 px-4 py-1.5 text-xs font-semibold tracking-wider rounded-lg">
								<span className="w-2 h-2 rounded-full bg-amber-500 mr-2"></span>
								The Methodology
							</Badge>

							<h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
								How We Achieved This Growth
							</h2>

							<p className="text-slate-600 text-base md:text-lg leading-relaxed mb-10">
								Success is never an accident. Discover the exact 4-step
								framework we used to turn a stagnant social presence into a
								predictable, high-converting revenue engine.
							</p>

							<Button className="bg-amber-500 hover:bg-amber-600 text-white rounded-lg px-8 h-12 font-bold shadow-lg shadow-amber-500/20 group w-full sm:w-auto transition-all">
								<CalendarDays className="w-4 h-4 mr-2" />
								Book a Strategy Call
								<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
							</Button>
						</div>
					</div>

					{/* Right Column: Accordion Steps */}
					<div className="w-full lg:w-7/12 flex flex-col justify-center mt-4 lg:mt-0">
						<Accordion className="w-full bg-transparent">
							{breakdown.map((item, index) => (
								<AccordionItem
									key={index}
									value={`item-${index}`}
									className="border-b border-slate-200 mb-2"
								>
									<AccordionTrigger className="text-left font-bold text-lg md:text-xl text-slate-900 hover:text-amber-600 hover:no-underline py-5 px-2 transition-colors">
										{item.title}
									</AccordionTrigger>
									<AccordionContent className="text-slate-600 text-base leading-relaxed pb-6 px-2">
										{item.content}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
