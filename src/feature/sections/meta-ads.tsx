"use client";

import Image from "next/image";

import { MousePointerClick, Target, TrendingUp, Users } from "lucide-react";
import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";

export function MetaAds() {
	return (
		<section className="relative overflow-hidden bg-white py-20 md:py-32">
			{/* Background decoration */}
			<div className="pointer-events-none absolute top-0 left-0 -mt-20 -ml-20 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />

			<div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
					{/* Left Column: Video */}
					<motion.div
						className="relative mx-auto w-full max-w-md lg:max-w-none"
						initial={{ opacity: 0, x: -30 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, x: 0 }}
					>
						<div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-2xl shadow-slate-200">
							<div className="absolute top-4 left-4 z-10">
								<Badge className="border-none bg-black/50 px-3 py-1 text-white text-xs uppercase tracking-widest backdrop-blur-md hover:bg-black/70">
									Live Ad Creative
								</Badge>
							</div>
							<video
								autoPlay
								className="h-auto w-full"
								loop
								muted
								playsInline
								src="/digital-marketing/video/meta-ad.mp4"
							/>
						</div>

						{/* Floating Meta badge */}
						<div className="absolute -right-2 -bottom-6 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:-right-6 lg:-right-8">
							<div className="rounded-xl border border-slate-100 bg-slate-50 p-2">
								<Image
									alt="Meta"
									className="h-8 w-8 object-contain"
									height={40}
									src="/digital-marketing/assets/partner/meta.svg"
									width={40}
								/>
							</div>
							<div>
								<p className="font-bold text-[10px] text-slate-500 uppercase tracking-wider sm:text-xs">
									Platform
								</p>
								<p className="font-bold text-slate-900 text-xs sm:text-sm">
									Meta Ads
								</p>
							</div>
						</div>
					</motion.div>

					{/* Right Column: Content & Stats */}
					<motion.div
						className="mt-8 flex flex-col text-left lg:mt-0"
						initial={{ opacity: 0, x: 30 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, x: 0 }}
					>
						<div className="mb-10 space-y-4">
							<h3 className="font-bold text-3xl text-slate-900 tracking-tight">
								Maxline Global{" "}
								<span className="text-amber-500">Lead Gen Campaign</span>
							</h3>
							<p className="text-lg text-slate-600 leading-relaxed">
								We deployed highly targeted video creatives across Facebook and
								Instagram, utilizing broad targeting and machine learning to find
								the perfect audience for Maxline Global.
							</p>
						</div>

						{/* Stats Grid */}
						<div className="grid grid-cols-2 gap-4 sm:gap-6">
							{/* Stat 1 */}
							<div className="flex flex-col items-start rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-all hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg sm:p-6">
								<div className="mb-4 rounded-xl bg-amber-100 p-3">
									<TrendingUp className="h-5 w-5 text-amber-600 sm:h-6 sm:w-6" />
								</div>
								<h4 className="mb-1 font-black text-2xl text-slate-900 sm:text-3xl">
									+340%
								</h4>
								<p className="font-bold text-[10px] text-slate-500 uppercase tracking-wider sm:text-xs">
									ROI Generated
								</p>
							</div>

							{/* Stat 2 */}
							<div className="flex flex-col items-start rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-all hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg sm:p-6">
								<div className="mb-4 rounded-xl bg-blue-100 p-3">
									<Users className="h-5 w-5 text-blue-600 sm:h-6 sm:w-6" />
								</div>
								<h4 className="mb-1 font-black text-2xl text-slate-900 sm:text-3xl">
									1,250+
								</h4>
								<p className="font-bold text-[10px] text-slate-500 uppercase tracking-wider sm:text-xs">
									Qualified Leads
								</p>
							</div>

							{/* Stat 3 */}
							<div className="flex flex-col items-start rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-all hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg sm:p-6">
								<div className="mb-4 rounded-xl bg-emerald-100 p-3">
									<Target className="h-5 w-5 text-emerald-600 sm:h-6 sm:w-6" />
								</div>
								<h4 className="mb-1 font-black text-2xl text-slate-900 sm:text-3xl">
									$4.20
								</h4>
								<p className="font-bold text-[10px] text-slate-500 uppercase tracking-wider sm:text-xs">
									Cost Per Lead
								</p>
							</div>

							{/* Stat 4 */}
							<div className="flex flex-col items-start rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-all hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg sm:p-6">
								<div className="mb-4 rounded-xl bg-purple-100 p-3">
									<MousePointerClick className="h-5 w-5 text-purple-600 sm:h-6 sm:w-6" />
								</div>
								<h4 className="mb-1 font-black text-2xl text-slate-900 sm:text-3xl">
									8.5%
								</h4>
								<p className="font-bold text-[10px] text-slate-500 uppercase tracking-wider sm:text-xs">
									Conversion Rate
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
