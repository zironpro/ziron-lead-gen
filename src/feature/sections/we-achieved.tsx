"use client";

import Link from "next/link";

import { ArrowRight, CalendarDays } from "lucide-react";
import { motion } from "motion/react";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
		<section className="relative pb-10 md:pb-16">
			<div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
				<motion.div
					className="flex flex-col items-start gap-12 lg:flex-row lg:gap-16"
					initial={{ opacity: 0, y: 20 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					whileInView={{ opacity: 1, y: 0 }}
				>
					{/* Left Column: Info & CTA */}
					<div className="relative w-full overflow-hidden rounded-lg border border-slate-200 bg-white p-8 shadow-slate-200/50 shadow-xl md:p-10 lg:sticky lg:top-24 lg:w-5/12">
						{/* Background decoration */}
						<div className="absolute top-0 right-0 z-0 -mt-16 -mr-16 h-48 w-48 rounded-full bg-amber-50 blur-3xl" />

						<div className="relative z-10">
							<Badge className="mb-6 rounded-lg border-none bg-slate-900 px-4 py-1.5 font-semibold text-white text-xs tracking-wider hover:bg-slate-800">
								<span className="mr-2 h-2 w-2 rounded-full bg-amber-500" />
								The Methodology
							</Badge>

							<h2 className="mb-4 font-extrabold text-4xl text-slate-900 leading-tight tracking-tight md:text-5xl">
								How We Achieved This Growth
							</h2>

							<p className="mb-10 text-base text-slate-600 leading-relaxed md:text-lg">
								Success is never an accident. Discover the exact 4-step
								framework we used to turn a stagnant social presence into a
								predictable, high-converting revenue engine.
							</p>

							<Button
								className="group h-12 w-full rounded-lg bg-amber-500 px-8 font-bold text-white shadow-amber-500/20 shadow-lg transition-all hover:bg-amber-600 sm:w-auto"
								nativeButton={false}
								onClick={(e) => {
									e.preventDefault();
									document
										.getElementById("contact")
										?.scrollIntoView({ behavior: "smooth" });
								}}
								render={<Link href="#contact" />}
							>
								<CalendarDays className="mr-2 h-4 w-4" />
								Book a Strategy Call
								<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</Button>
						</div>
					</div>

					{/* Right Column: Accordion Steps */}
					<div className="mt-4 flex w-full flex-col justify-center lg:mt-0 lg:w-7/12">
						<Accordion className="w-full bg-transparent">
							{breakdown.map((item) => (
								<AccordionItem
									className="mb-2 border-slate-200 border-b"
									key={item.title}
									value={`item-${item.title}`}
								>
									<AccordionTrigger className="px-2 py-5 text-left font-bold text-lg text-slate-900 transition-colors hover:text-amber-600 hover:no-underline md:text-xl">
										{item.title}
									</AccordionTrigger>
									<AccordionContent className="px-2 pb-6 text-base text-slate-600 leading-relaxed">
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
