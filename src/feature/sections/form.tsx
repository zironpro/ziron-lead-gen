"use client";

import { useState } from "react";

import {
	ArrowRight,
	AtSign,
	Building2,
	Phone,
	ShieldCheck,
	User,
} from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { sendContactFormSubmissionEmail } from "@/feature/email/nodemailer/send-contact-form-submission";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		fill="none"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		viewBox="0 0 24 24"
		{...props}
	>
		<rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
		<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
		<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
	</svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		fill="none"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		viewBox="0 0 24 24"
		{...props}
	>
		<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
		<rect height="12" width="4" x="2" y="9" />
		<circle cx="4" cy="4" r="2" />
	</svg>
);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
		<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
	</svg>
);

export function FormSection() {
	const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

	async function handleSubmit(formData: FormData) {
		setStatus("loading");
		const name = formData.get("name") as string;
		const company = formData.get("company") as string;
		const phone = formData.get("phone") as string;
		const website = formData.get("website") as string;

		const isSent = await sendContactFormSubmissionEmail({
			name,
			company,
			phone,
			website,
		});

		if (isSent) {
			setStatus("success");
		} else {
			setStatus("error");
		}
	}

	return (
		<section className="relative overflow-hidden bg-slate-900 pt-12 pb-20 md:pt-16 md:pb-32">
			<div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
					{/* Left Side: Header & Text Content */}
					<motion.div
						className="flex flex-col text-left"
						initial={{ opacity: 0, x: -30 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, x: 0 }}
					>
						<h2 className="mb-6 font-extrabold text-4xl text-white leading-tight tracking-tight md:text-5xl lg:text-6xl">
							Ready to scale your <br className="hidden sm:block" />
							<span className="text-[#ffc650]">revenue</span>?
						</h2>
						<p className="mb-10 max-w-xl text-lg text-slate-300 leading-relaxed md:text-xl">
							Fill out the form to get a complimentary marketing audit and
							discover exactly how much growth your business is missing out on.
							Our experts will craft a custom strategy tailored for you.
						</p>
						{/* Socials / Stay Connected */}
						<div className="relative z-10 flex shrink-0 flex-col" id="contact">
							<p className="mb-6 font-semibold text-[15px] text-white uppercase tracking-wider">
								Stay Connected
							</p>
							<div className="flex gap-4">
								<a
									className="flex h-14 w-14 items-center justify-center rounded-lg bg-white/10 transition-all hover:scale-105 hover:bg-white/20"
									href="https://www.linkedin.com/company/zironpro/"
									rel="noopener noreferrer"
									target="_blank"
								>
									<LinkedinIcon className="h-6 w-6 text-white" />
								</a>
								<a
									className="flex h-14 w-14 items-center justify-center rounded-lg bg-white/10 transition-all hover:scale-105 hover:bg-white/20"
									href="https://www.instagram.com/ziron_pro/"
									rel="noopener noreferrer"
									target="_blank"
								>
									<InstagramIcon className="h-6 w-6 text-white" />
								</a>
								<a
									className="flex h-14 w-14 items-center justify-center rounded-lg bg-white/10 transition-all hover:scale-105 hover:bg-white/20"
									href="https://wa.me/971542588446"
									rel="noopener noreferrer"
									target="_blank"
								>
									<WhatsAppIcon className="h-6 w-6 text-white" />
								</a>
							</div>
						</div>
					</motion.div>

					{/* Right Side: Form Card */}
					<motion.div
						className="mx-auto w-full max-w-lg lg:max-w-none"
						initial={{ opacity: 0, y: 30 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						<div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl shadow-black/20 md:p-10">
							{/* Form Header */}
							<div className="mb-8 text-center sm:text-left">
								<h3 className="font-bold text-2xl text-slate-900 tracking-tight sm:text-3xl">
									Get Your Free <br className="hidden sm:block" />
									<span className="text-[#ffc650]">Social Media Audit</span>
								</h3>
								<p className="mt-3 text-slate-600 text-sm sm:text-base">
									We'll review your social media and create a custom strategy to
									grow your business.
								</p>
							</div>

							<form
								action={handleSubmit}
								className="flex flex-col gap-5"
							>
								{/* Name */}
								<div className="relative">
									<User className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-400" />
									<Input
										className="h-14 rounded-xl border border-slate-200 bg-slate-50 pl-12 text-base text-slate-900 shadow-sm transition-colors placeholder:text-slate-400 focus-visible:border-[#ffc650] focus-visible:bg-white focus-visible:ring-1 focus-visible:ring-amber-500"
										id="name"
										name="name"
										placeholder="Full Name"
										required
									/>
								</div>

								{/* Company */}
								<div className="relative">
									<Building2 className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-400" />
									<Input
										className="h-14 rounded-xl border border-slate-200 bg-slate-50 pl-12 text-base text-slate-900 shadow-sm transition-colors placeholder:text-slate-400 focus-visible:border-[#ffc650] focus-visible:bg-white focus-visible:ring-1 focus-visible:ring-amber-500"
										id="company"
										name="company"
										placeholder="Company Name"
									/>
								</div>

								{/* Phone */}
								<div className="relative">
									<Phone className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-400" />
									<Input
										className="h-14 rounded-xl border border-slate-200 bg-slate-50 pl-12 text-base text-slate-900 shadow-sm transition-colors placeholder:text-slate-400 focus-visible:border-[#ffc650] focus-visible:bg-white focus-visible:ring-1 focus-visible:ring-amber-500"
										id="phone"
										name="phone"
										placeholder="WhatsApp Number"
										required
										type="tel"
									/>
								</div>

								{/* Website / Instagram */}
								<div className="relative">
									<AtSign className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-400" />
									<Input
										className="h-14 rounded-xl border border-slate-200 bg-slate-50 pl-12 text-base text-slate-900 shadow-sm transition-colors placeholder:text-slate-400 focus-visible:border-[#ffc650] focus-visible:bg-white focus-visible:ring-1 focus-visible:ring-amber-500"
										id="website"
										name="website"
										placeholder="Website / Instagram Link"
									/>
								</div>

								<Button 
									className="group mt-2 h-14 w-full rounded-xl bg-[#ffc650] font-bold text-lg text-white shadow-[#ffc650]/ shadow-lg transition-all hover:bg-amber-700 hover:shadow-[#ffc650]/"
									disabled={status === "loading" || status === "success"}
									type="submit"
								>
									{status === "loading" ? "Sending..." : status === "success" ? "Sent Successfully!" : "Get My Free Audit"}
									{status !== "success" && <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />}
								</Button>
								{status === "error" && (
									<p className="text-center font-medium text-red-500 text-sm">
										Failed to send message. Please try again or contact us directly.
									</p>
								)}
								<div className="mt-4 flex items-center justify-center gap-2 text-slate-500">
									<ShieldCheck className="h-4 w-4 text-green-500" />
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
