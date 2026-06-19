"use client";

import { ArrowRight, Building2, Mail, Phone, User } from "lucide-react";
import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function FormSection() {
	return (
		<section
			className="relative overflow-hidden bg-white py-20 md:py-32"
		>
			{/* Background accents */}
			<div className="pointer-events-none absolute top-0 right-0 -mt-20 -mr-20 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
			<div className="pointer-events-none absolute bottom-0 left-0 -mb-20 -ml-20 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

			<div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
					{/* Text Content */}
					<motion.div
						className="flex flex-col text-left"
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
						className="scroll-mt-24 md:scroll-mt-32"
						id="contact"
						initial={{ opacity: 0, y: 30 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						<div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl shadow-slate-900/20 md:p-10">
							<form
								className="mt-2 flex flex-col gap-6"
								onSubmit={(e) => e.preventDefault()}
							>
								{/* Name */}
								<div className="flex flex-col gap-2.5">
									<label
										className="ml-1 font-bold text-slate-200 text-sm"
										htmlFor="name"
									>
										Full Name
									</label>
									<div className="relative">
										<User className="absolute top-1/2 left-3.5 h-5 w-5 -translate-y-1/2 text-slate-400" />
										<Input
											className="h-14 rounded-xl border-slate-700 bg-slate-800/50 pl-11 text-base text-white shadow-sm placeholder:text-slate-500 focus-visible:border-amber-500 focus-visible:ring-amber-500"
											id="name"
											placeholder="John Doe"
										/>
									</div>
								</div>

								{/* Email */}
								<div className="flex flex-col gap-2.5">
									<label
										className="ml-1 font-bold text-slate-200 text-sm"
										htmlFor="email"
									>
										Email Address
									</label>
									<div className="relative">
										<Mail className="absolute top-1/2 left-3.5 h-5 w-5 -translate-y-1/2 text-slate-400" />
										<Input
											className="h-14 rounded-xl border-slate-700 bg-slate-800/50 pl-11 text-base text-white shadow-sm placeholder:text-slate-500 focus-visible:border-amber-500 focus-visible:ring-amber-500"
											id="email"
											placeholder="john@company.com"
											type="email"
										/>
									</div>
								</div>

								{/* Phone Number */}
								<div className="flex flex-col gap-2.5">
									<label
										className="ml-1 font-bold text-slate-200 text-sm"
										htmlFor="phone"
									>
										Phone Number
									</label>
									<div className="relative">
										<Phone className="absolute top-1/2 left-3.5 h-5 w-5 -translate-y-1/2 text-slate-400" />
										<Input
											className="h-14 rounded-xl border-slate-700 bg-slate-800/50 pl-11 text-base text-white shadow-sm placeholder:text-slate-500 focus-visible:border-amber-500 focus-visible:ring-amber-500"
											id="phone"
											placeholder="+971 56 664 6539"
											type="tel"
										/>
									</div>
								</div>

								{/* Company Name */}
								<div className="flex flex-col gap-2.5">
									<label
										className="ml-1 font-bold text-slate-200 text-sm"
										htmlFor="company"
									>
										Company Name
									</label>
									<div className="relative">
										<Building2 className="absolute top-1/2 left-3.5 h-5 w-5 -translate-y-1/2 text-slate-400" />
										<Input
											className="h-14 rounded-xl border-slate-700 bg-slate-800/50 pl-11 text-base text-white shadow-sm placeholder:text-slate-500 focus-visible:border-amber-500 focus-visible:ring-amber-500"
											id="company"
											placeholder="Your Company LLC"
										/>
									</div>
								</div>

								<Button className="group mt-4 h-14 w-full rounded-xl bg-amber-500 font-bold text-lg text-white shadow-amber-500/25 shadow-lg transition-all hover:bg-amber-600">
									Get My Free Audit
									<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
								</Button>
								<p className="mt-2 text-center font-medium text-slate-500 text-sm">
									We respect your privacy. No spam ever.
								</p>
							</form>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
