"use client";

import {
	ArrowRight,
	AtSign,
	Building2,
	Phone,
	ShieldCheck,
	User,
} from "lucide-react";
import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function FormSection() {
	return (
		<section className="relative overflow-hidden bg-white py-20 md:py-32">
			{/* Background accents */}
			<div className="pointer-events-none absolute top-0 right-0 -mt-20 -mr-20 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
			<div className="pointer-events-none absolute bottom-0 left-0 -mb-20 -ml-20 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

			<div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
					{/* Text Content */}
					<motion.div
						className="flex hidden flex-col text-left lg:flex"
						initial={{ opacity: 0, x: -30 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, x: 0 }}
					>
						<Badge className="mb-6 w-fit rounded-lg border-none bg-slate-900 px-4 py-1.5 font-semibold text-white text-xs tracking-wider hover:bg-slate-800">
							<span className="mr-2 h-2 w-2 rounded-full bg-amber-500" />
							Free Audit
						</Badge>
						<h2 className="mb-6 font-extrabold text-4xl text-slate-900 leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
							Ready to scale your{" "}
							<span className="text-amber-500">revenue</span>?
						</h2>
						<p className="mb-10 max-w-md text-lg text-slate-600 leading-relaxed md:text-xl">
							Fill out the form to get a complimentary marketing audit and
							discover exactly how much growth you're missing out on.
						</p>
					</motion.div>

					{/* Form Card */}
					<motion.div
						className="mx-auto w-full max-w-md scroll-mt-24 md:scroll-mt-32 lg:max-w-none"
						id="contact"
						initial={{ opacity: 0, y: 30 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						<div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-[#090f1a] p-6 shadow-2xl shadow-slate-900/20 sm:p-8 md:p-10">
							{/* Form Header matching the screenshot */}
							<div className="mb-6">
								<h3 className="font-bold text-white text-xl tracking-wide sm:text-2xl">
									Get Your Free <br />
									<span className="text-[#ff6a00]">Social Media Audit</span>
								</h3>
								<p className="mt-3 text-slate-300 text-sm sm:text-base">
									We'll review your social media and create a custom strategy to
									grow your business.
								</p>
							</div>

							<form
								className="mt-2 flex flex-col gap-4"
								onSubmit={(e) => e.preventDefault()}
							>
								{/* Name */}
								<div className="relative">
									<User className="absolute top-1/2 left-3.5 h-5 w-5 -translate-y-1/2 text-slate-400" />
									<Input
										className="h-12 rounded-xl border-none bg-white pl-11 text-base text-slate-900 shadow-sm placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-[#ff6a00] sm:h-14"
										id="name"
										placeholder="Full Name"
									/>
								</div>

								{/* Company */}
								<div className="relative">
									<Building2 className="absolute top-1/2 left-3.5 h-5 w-5 -translate-y-1/2 text-slate-400" />
									<Input
										className="h-12 rounded-xl border-none bg-white pl-11 text-base text-slate-900 shadow-sm placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-[#ff6a00] sm:h-14"
										id="company"
										placeholder="Company Name"
									/>
								</div>

								{/* Phone */}
								<div className="relative">
									<Phone className="absolute top-1/2 left-3.5 h-5 w-5 -translate-y-1/2 text-slate-400" />
									<Input
										className="h-12 rounded-xl border-none bg-white pl-11 text-base text-slate-900 shadow-sm placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-[#ff6a00] sm:h-14"
										id="phone"
										placeholder="WhatsApp Number"
										type="tel"
									/>
								</div>

								{/* Website / Instagram */}
								<div className="relative">
									<AtSign className="absolute top-1/2 left-3.5 h-5 w-5 -translate-y-1/2 text-slate-400" />
									<Input
										className="h-12 rounded-xl border-none bg-white pl-11 text-base text-slate-900 shadow-sm placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-[#ff6a00] sm:h-14"
										id="website"
										placeholder="Website / Instagram Link"
									/>
								</div>

								<Button className="group mt-2 h-12 w-full rounded-xl bg-[#ff6a00] font-bold text-lg text-white shadow-[#ff6a00]/25 shadow-lg transition-all hover:bg-[#e65f00] sm:h-14">
									Get My Free Audit
									<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
								</Button>
								<div className="mt-3 flex items-center justify-center gap-1.5 text-slate-300">
									<ShieldCheck className="h-4 w-4" />
									<p className="font-medium text-xs sm:text-sm">
										We respect your privacy. No spam ever.
									</p>
								</div>
							</form>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
