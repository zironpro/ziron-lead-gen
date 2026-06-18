"use client";

import { useState } from "react";
import { Check, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

const packages = [
	{
		title: "Basic Package",
		subtitle: "Ideal for small business or startups",
		price: "AED 2,500",
		priceSub: "per month",
		popular: false,
		categories: [
			{
				name: "Social Media",
				items: [
					"Instagram, facebook, Linkedin",
					"10-15 custom posts",
					"3 reels",
					"Competitor Analysis",
					"Content Calendar",
					"Marketing Strategy",
					"Scheduling",
				],
			},
			{
				name: "5 PPC campaigns",
				items: [
					"Videos, Stories, Posts",
					"Performance Analysis",
					"Monitoring & Reporting",
					"Monitoring KPIs",
				],
			},
		],
	},
	{
		title: "Standard",
		subtitle: "Best for growing businesses",
		price: "AED 4,500",
		priceSub: "per month",
		popular: true,
		categories: [
			{
				name: "Social Media",
				items: [
					"Instagram, Facebook, Linkedin, Tiktok",
					"20 custom posts",
					"5 reels per month",
					"Competitor Analysis",
					"Content Calendar",
					"Marketing Strategy",
					"Community Management",
					"Scheduling",
					"10 edited stories",
				],
			},
			{
				name: "Email Marketing",
				items: ["Campaigns", "Template Design"],
			},
			{
				name: "PPC",
				items: ["Unlimited PPC", "Campaign Setup"],
			},
			{
				name: "Lead Generation",
				items: [
					"Videos, Stories, Posts",
					"Performance Analysis",
					"Monitoring & Reporting",
					"Monitoring KPIs",
				],
			},
		],
	},
	{
		title: "Premium",
		subtitle: "Tailored for large businesses or High Growth Companies",
		price: "Custom",
		priceSub: "Tailored Investment Plan",
		popular: false,
		categories: [
			{
				name: "Social Media",
				items: [
					"Instagram, facebook, linkedin, tiktok",
					"30 custom posts",
					"6-10 reels per month",
					"Competitor Analysis",
					"Content Calendar",
					"Marketing Strategy",
					"Community Management",
					"Scheduling",
				],
			},
			{
				name: "On-site shoot",
				items: [
					"2 on-site shoots per month",
					"Creative concept development",
					"Scriptwriting",
					"Shoot planning",
					"Professional filming",
					"Video editing & final delivery",
				],
			},
			{
				name: "Basic SEO",
				items: ["On page & Off page SEO", "Keyword Research", "Blog Content"],
			},
			{
				name: "Email Marketing",
				items: ["Campaigns", "Template design"],
			},
			{
				name: "PPC",
				items: ["Unlimited PPC", "As strategy", "Campaign Management"],
			},
			{
				name: "Lead Generation & CRM integration",
				items: ["Advanced Lead Generation CRM integration"],
			},
			{
				name: "Influencer Marketing",
				items: ["Collobrations", "Sponsored Posts"],
			},
			{
				name: "Branding",
				items: ["Logo & Bran Guidelines", "Re-branding"],
			},
		],
	},
];

export function Package() {
	const [expandedCards, setExpandedCards] = useState<number[]>([]);

	const toggleExpand = (index: number) => {
		setExpandedCards((prev) =>
			prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
		);
	};

	return (
		<section id="pricing" className="pt-16 md:pt-24 pb-16 md:pb-24 relative border-b border-slate-100 bg-slate-50 overflow-hidden">
			{/* Decorative Background */}
			<div className="absolute top-0 left-0 w-full h-[500px] bg-white rounded-b-[100px] sm:rounded-b-[200px] z-0 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.03)] pointer-events-none" />

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
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
						Pricing Plans
					</Badge>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
						Transparent Pricing.
						<br /> <span className="text-amber-500">Unlimited Value.</span>
					</h2>
					<p className="text-slate-600 text-lg md:text-xl max-w-2xl">
						Choose the perfect package to accelerate your growth. No hidden
						fees, just pure ROI-focused marketing.
					</p>
				</motion.div>

				{/* Pricing Carousel / Grid */}
				<Carousel 
					opts={{ align: "center", loop: false }} 
					className="w-full max-w-full"
				>
					<CarouselContent className="-ml-4 md:-ml-8 items-start pt-6 pb-6">
						{packages.map((pkg, index) => {
							const isExpanded = expandedCards.includes(index);
							const visibleCategories = isExpanded ? pkg.categories : pkg.categories.slice(0, 1);

							return (
								<CarouselItem key={pkg.title} className="pl-4 md:pl-8 basis-[95%] sm:basis-[85%] md:basis-[60%] lg:basis-1/3 flex">
									<motion.div
										key={pkg.title}
										initial={{ opacity: 0, y: 40 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.6, delay: index * 0.1 }}
										className={`w-full relative bg-white rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border ${
											pkg.popular
												? "border-amber-400 shadow-amber-500/10 ring-4 ring-amber-500/10"
												: "border-slate-200 hover:border-amber-200"
										} transition-all duration-300 flex flex-col h-full`}
									>
										{/* Gradient background layers */}
										<div className="absolute inset-0 pointer-events-none z-0 rounded-3xl overflow-hidden">
											<div className="absolute -top-20 left-1/2 -translate-x-1/2 w-full h-[200px] bg-blue-100/60 blur-[60px]" />
											<div className="absolute top-[160px] -left-20 -right-20 h-[140px] bg-gradient-to-r from-orange-200/60 via-amber-200/60 to-orange-200/60 blur-[45px]" />
										</div>
										
										{pkg.popular && (
									<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
										<div className="bg-amber-500 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg shadow-amber-500/30">
											Most Popular
										</div>
									</div>
								)}

								<div className="relative z-10 flex flex-col h-full p-8 sm:p-10">
									<div className="mb-8">
									<h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
										{pkg.title}
									</h3>
									<p className="text-slate-500 text-sm font-medium h-10">
										{pkg.subtitle}
									</p>
								</div>

								<div className="flex flex-col mb-8 pb-8 border-b border-slate-100">
									<div className="flex items-end gap-2">
										<span className="text-4xl xl:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
											{pkg.price}
										</span>
									</div>
									<span className="text-slate-500 text-sm font-medium mt-2">
										{pkg.priceSub}
									</span>
								</div>

								<Button
									nativeButton={false}
									render={<Link href="#contact" />}
									onClick={(e) => {
										e.preventDefault();
										document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
									}}
									className="w-full h-14 rounded-xl text-base font-bold mb-10 transition-all shrink-0 bg-black hover:bg-slate-900 text-white shadow-lg shadow-black/10"
								>
									{pkg.popular ? "Get Started Now" : "Choose Plan"}
								</Button>

								<div className="flex flex-col gap-8 flex-1">
									{visibleCategories.map((category) => (
										<motion.div 
											key={category.name} 
											className="flex flex-col gap-4"
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: "auto" }}
											transition={{ duration: 0.3 }}
										>
											<h4 className="font-bold text-slate-900 text-[15px] uppercase tracking-wide">
												{category.name}
											</h4>
											<ul className="flex flex-col gap-3">
												{category.items.map((item) => (
													<li
														key={item}
														className="flex items-start gap-3 text-slate-600"
													>
														<div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center">
															<Check
																className="w-3 h-3 text-amber-600"
																strokeWidth={3}
															/>
														</div>
														<span className="text-[15px] font-medium leading-snug">
															{item}
														</span>
													</li>
												))}
											</ul>
										</motion.div>
									))}
								</div>

								{pkg.categories.length > 1 && (
									<button
										onClick={() => toggleExpand(index)}
										className="mt-8 flex items-center justify-center gap-1.5 w-full py-3 rounded-lg border border-slate-200 text-slate-600 text-sm font-bold hover:bg-slate-50 hover:text-slate-900 transition-colors"
									>
										{isExpanded ? (
											<>
												View Less <ChevronUp className="w-4 h-4" />
											</>
										) : (
											<>
												View All Features <ChevronDown className="w-4 h-4" />
											</>
										)}
									</button>
								)}
								</div>
								</motion.div>
							</CarouselItem>
						);
					})}
					</CarouselContent>
					<div className="flex items-center justify-center gap-4 mt-4 lg:hidden">
						<CarouselPrevious className="static translate-y-0 h-12 w-12 bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-amber-600 shadow-sm" />
						<CarouselNext className="static translate-y-0 h-12 w-12 bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-amber-600 shadow-sm" />
					</div>
				</Carousel>
			</div>
		</section>
	);
}
