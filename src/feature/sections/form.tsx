"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail, Phone, Building2, User } from "lucide-react";

export function FormSection() {
	return (
		<section id="contact" className="py-20 md:py-32 bg-white relative overflow-hidden">
			{/* Background accents */}
			<div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
			<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
					{/* Text Content */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="flex flex-col text-left"
					>
						<Badge className="bg-slate-900 text-white hover:bg-slate-800 border-none mb-6 px-4 py-1.5 text-xs font-semibold tracking-wider rounded-lg w-fit">
							<span className="w-2 h-2 rounded-full bg-amber-500 mr-2"></span>
							Free Audit
						</Badge>
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
							Ready to scale your <span className="text-amber-500">revenue</span>?
						</h2>
						<p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 max-w-md">
							Fill out the form to get a complimentary marketing audit and discover exactly how much growth you're missing out on.
						</p>
					</motion.div>

					{/* Form Card */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<div className="bg-slate-900 p-8 md:p-10 rounded-3xl shadow-2xl shadow-slate-900/20 border border-slate-800 relative overflow-hidden">

							<form className="flex flex-col gap-6 mt-2" onSubmit={(e) => e.preventDefault()}>
								{/* Name */}
								<div className="flex flex-col gap-2.5">
									<label htmlFor="name" className="text-sm font-bold text-slate-200 ml-1">Full Name</label>
									<div className="relative">
										<User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
										<Input 
											id="name" 
											placeholder="John Doe" 
											className="pl-11 h-14 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-amber-500 focus-visible:border-amber-500 rounded-xl text-base shadow-sm"
										/>
									</div>
								</div>

								{/* Email */}
								<div className="flex flex-col gap-2.5">
									<label htmlFor="email" className="text-sm font-bold text-slate-200 ml-1">Email Address</label>
									<div className="relative">
										<Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
										<Input 
											id="email" 
											type="email"
											placeholder="john@company.com" 
											className="pl-11 h-14 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-amber-500 focus-visible:border-amber-500 rounded-xl text-base shadow-sm"
										/>
									</div>
								</div>

								{/* Phone Number */}
								<div className="flex flex-col gap-2.5">
									<label htmlFor="phone" className="text-sm font-bold text-slate-200 ml-1">Phone Number</label>
									<div className="relative">
										<Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
										<Input 
											id="phone" 
											type="tel"
											placeholder="+971 50 123 4567" 
											className="pl-11 h-14 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-amber-500 focus-visible:border-amber-500 rounded-xl text-base shadow-sm"
										/>
									</div>
								</div>

								{/* Company Name */}
								<div className="flex flex-col gap-2.5">
									<label htmlFor="company" className="text-sm font-bold text-slate-200 ml-1">Company Name</label>
									<div className="relative">
										<Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
										<Input 
											id="company" 
											placeholder="Your Company LLC" 
											className="pl-11 h-14 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-amber-500 focus-visible:border-amber-500 rounded-xl text-base shadow-sm"
										/>
									</div>
								</div>

								<Button className="w-full h-14 mt-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-amber-500/25 group">
									Get My Free Audit
									<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
								</Button>
								<p className="text-center text-sm text-slate-500 mt-2 font-medium">
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
