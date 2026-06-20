"use client";

import { CircleDollarSign, TrendingUp, UserPlus, Users } from "lucide-react";
import { motion } from "motion/react";

export function HeroResults() {
	const metrics = [
		{
			icon: <Users className="h-8 w-8 text-amber-500" strokeWidth={2} />,
			value: "50",
			label: "Qualified Leads",
			sublabel: "in 10 Days",
			bgClass: "bg-white",
			borderClass: "border-amber-100",
			iconBgClass: "bg-white",
		},
		{
			icon: (
				<CircleDollarSign className="h-8 w-8 text-amber-500" strokeWidth={2} />
			),
			value: "AED 7.45",
			label: "Cost Per Lead",
			sublabel: "(Reduced by 46%)",
			bgClass: "bg-white",
			borderClass: "border-emerald-100",
			iconBgClass: "bg-white",
		},
		{
			icon: <TrendingUp className="h-8 w-8 text-amber-500" strokeWidth={2} />,
			value: "+310%",
			label: "Increase in Reach",
			sublabel: "Organic & Paid",
			bgClass: "bg-white",
			borderClass: "border-blue-100",
			iconBgClass: "bg-white",
		},
		{
			icon: <UserPlus className="h-8 w-8 text-amber-500" strokeWidth={2} />,
			value: "23",
			label: "New Customers",
			sublabel: "Converted",
			bgClass: "bg-white",
			borderClass: "border-purple-100",
			iconBgClass: "bg-white",
		},
	];

	return (
		<div className="w-full">
			<div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
				{metrics.map((metric, index) => (
					<motion.div
						animate={{ opacity: 1, y: 0 }}
						className={`group relative flex flex-col items-start justify-between overflow-hidden rounded-2xl border p-6 shadow-slate-200/50 shadow-xl transition-all hover:scale-105 hover:shadow-slate-300/50 ${metric.bgClass} ${metric.borderClass}`}
						initial={{ opacity: 0, y: 20 }}
						key={metric.label}
						transition={{ duration: 0.5, delay: index * 0.1 }}
					>
						{/* Foreground Content */}
						<div
							className={`relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${metric.iconBgClass}`}
						>
							{metric.icon}
						</div>
						<div className="relative z-10">
							<div className="font-extrabold text-3xl text-slate-900 tracking-tight">
								{metric.value}
							</div>
							<div className="mt-1 font-bold text-slate-800 text-sm">
								{metric.label}
							</div>
							<div className="mt-1 font-medium text-slate-500 text-xs">
								{metric.sublabel}
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
}
