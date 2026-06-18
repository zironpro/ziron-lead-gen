"use client";

import { CircleDollarSign, TrendingUp, UserPlus, Users } from "lucide-react";
import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";

export function Results() {
	const metrics = [
		{
			icon: <Users className="h-6 w-6 text-white" strokeWidth={1.5} />,
			value: "87",
			label: "Qualified Leads",
			sublabel: "in 30 Days",
		},
		{
			icon: (
				<CircleDollarSign className="h-6 w-6 text-white" strokeWidth={1.5} />
			),
			value: "AED 7.45",
			label: "Cost Per Lead",
			sublabel: "(Reduced by 46%)",
		},
		{
			icon: <TrendingUp className="h-6 w-6 text-white" strokeWidth={1.5} />,
			value: "+310%",
			label: "Increase in Reach",
			sublabel: "Organic & Paid",
		},
		{
			icon: <UserPlus className="h-6 w-6 text-white" strokeWidth={1.5} />,
			value: "23",
			label: "New Customers",
			sublabel: "Converted",
		},
	];

	return (
		<section className="py-8 md:py-12">
			<div className="container mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					whileInView={{ opacity: 1, y: 0 }}
				>
					{/* Header */}
					<div className="mb-16 text-center md:mb-20">
						<div className="flex w-full flex-col items-center justify-center gap-4">
							<Badge className="mx-auto mb-6 flex w-fit items-center justify-center rounded-lg border-none bg-slate-900 px-4 py-1.5 font-semibold text-white text-xs tracking-wider hover:bg-slate-800">
								<span className="mr-2 h-2 w-2 rounded-full bg-amber-500" />A
								Real Client Growth Story Backed by Results
							</Badge>
							<h2 className="font-extrabold text-4xl text-slate-900 leading-tight tracking-tight md:text-5xl">
								The Results
							</h2>
						</div>
					</div>

					{/* 2x2 Mobile / 4-col Desktop Grid Box */}
					<div className="rounded-lg border border-slate-200 bg-white p-6 md:p-10">
						<div className="relative grid grid-cols-2 md:grid-cols-4">
							{metrics.map((metric, index) => (
								<div
									className={`flex flex-col items-center border-slate-100 p-4 text-center sm:p-5 ${
										index !== 3 ? "md:border-r" : "md:border-r-0"
									} ${index % 2 === 0 ? "border-r" : ""} ${
										index < 2 ? "border-b md:border-b-0" : ""
									}`}
									key={metric.label}
								>
									<div className="mb-4 flex h-14 w-14 cursor-default items-center justify-center rounded-lg bg-slate-950 shadow-lg shadow-slate-900/20 transition-transform hover:scale-110">
										{metric.icon}
									</div>
									<div className="mb-2 font-black text-2xl text-amber-500 md:text-3xl">
										{metric.value}
									</div>
									<div className="font-bold text-slate-900 text-sm leading-tight">
										{metric.label}
									</div>
									<div className="mt-1 text-slate-500 text-xs">
										{metric.sublabel}
									</div>
								</div>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
