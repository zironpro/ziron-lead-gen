"use client";

import { useState } from "react";

import Link from "next/link";

import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

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
		<section
			className="relative overflow-hidden border-slate-100 border-b bg-slate-50 pt-16 pb-16 md:pt-24 md:pb-24"
			id="pricing"
		>
			{/* Decorative Background */}
			<div className="pointer-events-none absolute top-0 left-0 z-0 h-[500px] w-full rounded-b-[100px] bg-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.03)] sm:rounded-b-[200px]" />

			<div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
						Pricing Plans
					</Badge>
					<h2 className="mb-6 font-extrabold text-4xl text-slate-900 leading-tight tracking-tight md:text-5xl lg:text-6xl">
						Transparent Pricing.
						<br /> <span className="text-amber-500">Unlimited Value.</span>
					</h2>
					<p className="max-w-2xl text-lg text-slate-600 md:text-xl">
						Choose the perfect package to accelerate your growth. No hidden
						fees, just pure ROI-focused marketing.
					</p>
				</motion.div>

				{/* Pricing Carousel / Grid */}
				<Carousel
					className="w-full max-w-full"
					opts={{ align: "center", loop: false }}
				>
					<CarouselContent className="-ml-4 items-start pt-6 pb-6 md:-ml-8">
						{packages.map((pkg, index) => {
							const isExpanded = expandedCards.includes(index);
							const visibleCategories = isExpanded
								? pkg.categories
								: pkg.categories.slice(0, 1);

							return (
								<CarouselItem
									className="flex basis-[95%] pl-4 sm:basis-[85%] md:basis-[60%] md:pl-8 lg:basis-1/3"
									key={pkg.title}
								>
									<motion.div
										className={`relative w-full rounded-3xl border bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] ${
											pkg.popular
												? "border-amber-400 shadow-amber-500/10 ring-4 ring-amber-500/10"
												: "border-slate-200 hover:border-amber-200"
										} flex h-full flex-col transition-all duration-300`}
										initial={{ opacity: 0, y: 40 }}
										key={pkg.title}
										transition={{ duration: 0.6, delay: index * 0.1 }}
										viewport={{ once: true }}
										whileInView={{ opacity: 1, y: 0 }}
									>
										{/* Gradient background layers */}
										<div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-3xl">
											<div className="absolute -top-20 left-1/2 h-[200px] w-full -translate-x-1/2 bg-blue-100/60 blur-[60px]" />
											<div className="absolute top-[160px] -right-20 -left-20 h-[140px] bg-gradient-to-r from-orange-200/60 via-amber-200/60 to-orange-200/60 blur-[45px]" />
										</div>

										{pkg.popular && (
											<div className="absolute top-0 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
												<div className="rounded-full bg-amber-500 px-4 py-1.5 font-bold text-white text-xs uppercase tracking-wider shadow-amber-500/30 shadow-lg">
													Most Popular
												</div>
											</div>
										)}

										<div className="relative z-10 flex h-full flex-col p-8 sm:p-10">
											<div className="mb-8">
												<h3 className="mb-3 font-bold text-2xl text-slate-900 tracking-tight">
													{pkg.title}
												</h3>
												<p className="h-10 font-medium text-slate-500 text-sm">
													{pkg.subtitle}
												</p>
											</div>

											<div className="mb-8 flex flex-col border-slate-100 border-b pb-8">
												<div className="flex items-end gap-2">
													<span className="font-extrabold text-4xl text-slate-900 leading-none tracking-tight xl:text-5xl">
														{pkg.price}
													</span>
												</div>
												<span className="mt-2 font-medium text-slate-500 text-sm">
													{pkg.priceSub}
												</span>
											</div>

											<Button
												className="mb-10 h-14 w-full shrink-0 rounded-xl bg-black font-bold text-base text-white shadow-black/10 shadow-lg transition-all hover:bg-slate-900"
												nativeButton={false}
												onClick={(e) => {
													e.preventDefault();
													document
														.getElementById("contact")
														?.scrollIntoView({ behavior: "smooth" });
												}}
												render={<Link href="#contact" />}
											>
												{pkg.popular ? "Get Started Now" : "Choose Plan"}
											</Button>

											<div className="flex flex-1 flex-col gap-8">
												{visibleCategories.map((category) => (
													<motion.div
														animate={{ opacity: 1, height: "auto" }}
														className="flex flex-col gap-4"
														initial={{ opacity: 0, height: 0 }}
														key={category.name}
														transition={{ duration: 0.3 }}
													>
														<h4 className="font-bold text-[15px] text-slate-900 uppercase tracking-wide">
															{category.name}
														</h4>
														<ul className="flex flex-col gap-3">
															{category.items.map((item) => (
																<li
																	className="flex items-start gap-3 text-slate-600"
																	key={item}
																>
																	<div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100">
																		<Check
																			className="h-3 w-3 text-amber-600"
																			strokeWidth={3}
																		/>
																	</div>
																	<span className="font-medium text-[15px] leading-snug">
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
													className="mt-8 flex w-full items-center justify-center gap-1.5 rounded-lg border border-slate-200 py-3 font-bold text-slate-600 text-sm transition-colors hover:bg-slate-50 hover:text-slate-900"
													onClick={() => toggleExpand(index)}
												>
													{isExpanded ? (
														<>
															View Less <ChevronUp className="h-4 w-4" />
														</>
													) : (
														<>
															View All Features{" "}
															<ChevronDown className="h-4 w-4" />
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
					<div className="mt-4 flex items-center justify-center gap-4 lg:hidden">
						<CarouselPrevious className="static h-12 w-12 translate-y-0 border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 hover:text-amber-600" />
						<CarouselNext className="static h-12 w-12 translate-y-0 border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 hover:text-amber-600" />
					</div>
				</Carousel>
			</div>
		</section>
	);
}
