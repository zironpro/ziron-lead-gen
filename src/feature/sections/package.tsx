"use client";

import { useState } from "react";

import Link from "next/link";

import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "motion/react";

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
			className="relative overflow-hidden bg-[#fafafa] pt-8 pb-20 md:pt-12 md:pb-32"
			id="pricing"
		>
			<div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<motion.div
					className="mb-16 grid grid-cols-1 items-center gap-8 text-left md:grid-cols-2 md:gap-12"
					initial={{ opacity: 0, y: 20 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					whileInView={{ opacity: 1, y: 0 }}
				>
					<h2 className="font-extrabold text-5xl text-slate-900 tracking-tight md:text-6xl">
						Pricing plans
					</h2>
					<p className="font-medium text-lg text-slate-900 md:text-xl">
						Choose the right plan for your needs.
					</p>
				</motion.div>

				{/* Pricing Carousel / Grid */}
				<Carousel
					className="w-full max-w-full"
					opts={{ align: "center", loop: false }}
				>
					<CarouselContent className="-ml-4 items-stretch pt-6 pb-6 md:-ml-8">
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
										className="relative flex h-full w-full flex-col rounded-[32px] bg-white p-3 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.06)]"
										initial={{ opacity: 0, y: 40 }}
										transition={{ duration: 0.6, delay: index * 0.1 }}
										viewport={{ once: true }}
										whileInView={{ opacity: 1, y: 0 }}
									>
										{/* Inner Top Colored Box */}
										<div
											className={`flex flex-col items-start rounded-[24px] p-6 pb-8 ${
												pkg.popular
													? "bg-gradient-to-br from-[#e0e7ff] to-[#eef2ff]"
													: "bg-[#f4f4f5]"
											}`}
										>
											<div className="mb-6 inline-flex items-center justify-center rounded-full bg-white/90 px-4 py-1.5 font-bold text-[11px] text-slate-900 uppercase tracking-wider shadow-sm">
												{pkg.title}
											</div>

											<div className="mb-2 flex items-baseline gap-1">
												<span className="font-extrabold text-4xl text-slate-900 tracking-tight xl:text-5xl">
													{pkg.price}
												</span>
												{pkg.priceSub &&
													pkg.priceSub !== "Tailored Investment Plan" && (
														<span className="font-bold text-slate-900 text-sm">
															/{pkg.priceSub.replace("per ", "")}
														</span>
													)}
											</div>

											<p className="font-medium text-slate-900 text-sm">
												{pkg.subtitle}
											</p>
										</div>

										{/* Button */}
										<div className="px-2 pt-4">
											<Button
												className="h-[52px] w-full rounded-full bg-[#18181b] font-medium text-[15px] text-white shadow-md transition-all hover:bg-black"
												nativeButton={false}
												onClick={(e) => {
													e.preventDefault();
													document
														.getElementById("contact")
														?.scrollIntoView({ behavior: "smooth" });
												}}
												render={<Link href="#contact" />}
											>
												{pkg.price === "Custom" ? "Contact Us" : "Get Started"}
											</Button>
										</div>

										{/* Features List */}
										<div className="flex flex-1 flex-col px-4 py-8">
											<div className="flex flex-col gap-6">
												{visibleCategories.map((category) => (
													<motion.div
														animate={{ opacity: 1, height: "auto" }}
														className="flex flex-col gap-3"
														initial={{ opacity: 0, height: 0 }}
														key={category.name}
														transition={{ duration: 0.3 }}
													>
														<h4 className="font-bold text-[13px] text-slate-400 uppercase tracking-wide">
															{category.name}
														</h4>
														<ul className="flex flex-col gap-3">
															{category.items.map((item) => (
																<li
																	className="flex items-start gap-3"
																	key={item}
																>
																	<Check
																		className="mt-0.5 h-[18px] w-[18px] shrink-0 text-slate-300"
																		strokeWidth={3}
																	/>
																	<span className="font-medium text-[14px] text-slate-700 leading-snug">
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
													className="mt-8 flex w-full items-center justify-center gap-1.5 py-2 font-bold text-slate-400 text-sm transition-colors hover:text-slate-900"
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
						<CarouselPrevious className="static h-12 w-12 translate-y-0 border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-900" />
						<CarouselNext className="static h-12 w-12 translate-y-0 border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-900" />
					</div>
				</Carousel>
			</div>
		</section>
	);
}
