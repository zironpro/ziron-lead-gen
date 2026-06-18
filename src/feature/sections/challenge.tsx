"use client";

import { CalendarMinus, FileX, Target, Users } from "lucide-react";
import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Challenge() {
	const items = [
		{
			icon: <Users className="h-6 w-6 text-amber-600" />,
			title: "Low Engagement",
			description:
				"Very low likes, comments & reach, making the brand feel stagnant.",
			bgClass: "bg-amber-50/50 hover:bg-amber-50",
			borderClass: "hover:border-amber-200",
			iconBgClass: "bg-amber-100 group-hover:bg-amber-200",
		},
		{
			icon: <FileX className="h-6 w-6 text-rose-600" />,
			title: "No Quality Leads",
			description:
				"Zero inquiries or property requests from their social presence.",
			bgClass: "bg-rose-50/50 hover:bg-rose-50",
			borderClass: "hover:border-rose-200",
			iconBgClass: "bg-rose-100 group-hover:bg-rose-200",
		},
		{
			icon: <CalendarMinus className="h-6 w-6 text-blue-600" />,
			title: "Inconsistent Posting",
			description: "Random posting with no clear strategy or visual identity.",
			bgClass: "bg-blue-50/50 hover:bg-blue-50",
			borderClass: "hover:border-blue-200",
			iconBgClass: "bg-blue-100 group-hover:bg-blue-200",
		},
		{
			icon: <Target className="h-6 w-6 text-emerald-600" />,
			title: "Competitors Ahead",
			description:
				"Competitors were capturing all the high-value real estate leads.",
			bgClass: "bg-emerald-50/50 hover:bg-emerald-50",
			borderClass: "hover:border-emerald-200",
			iconBgClass: "bg-emerald-100 group-hover:bg-emerald-200",
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	return (
		<section className="relative border-slate-100 border-b bg-neutral-50 py-10 md:py-16">
			<div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<motion.div
					className="mx-auto mb-20 max-w-3xl text-center"
					initial={{ opacity: 0, y: 20 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					whileInView={{ opacity: 1, y: 0 }}
				>
					<Badge className="mb-6 rounded-lg border-none bg-slate-900 px-4 py-1.5 font-semibold text-white text-xs tracking-wider hover:bg-slate-800">
						<span className="mr-2 h-2 w-2 rounded-full bg-amber-500" />
						Before Working With Us
					</Badge>
					<h2 className="font-extrabold text-4xl text-slate-900 leading-tight tracking-tight md:text-5xl">
						A Real Client Growth Story Backed by Results
					</h2>
					<p className="mt-6 text-lg text-slate-600">
						Despite offering top-tier real estate services, their digital
						presence wasn't reflecting their true value.
					</p>
				</motion.div>

				{/* 4 Column Grid */}
				<motion.div
					className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4"
					initial="hidden"
					variants={containerVariants}
					viewport={{ once: true }}
					whileInView="visible"
				>
					{items.map((item) => (
						<motion.div
							className="h-full"
							key={item.title}
							variants={itemVariants}
						>
							<Card
								className={`group h-full cursor-default border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${item.bgClass} ${item.borderClass}`}
							>
								<CardHeader className="pb-4">
									<div
										className={`mb-4 flex h-14 w-14 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110 ${item.iconBgClass}`}
									>
										{item.icon}
									</div>
									<CardTitle className="font-bold text-slate-900 text-xl">
										{item.title}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-slate-600 text-sm leading-relaxed">
										{item.description}
									</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
