"use client";

import Image from "next/image";

import { motion } from "motion/react";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";

export function Clients() {
	const clientLogos = [
		{ name: "100 Power", src: "/assets/clients/100-power.png" },
		{ name: "Direct LS", src: "/assets/clients/direct-ls.svg" },
		{ name: "M2Mtek", src: "/assets/clients/m2mtek.png" },
		{ name: "Maxline", src: "/assets/clients/maxline.png" },
		{ name: "MC", src: "/assets/clients/mc.svg" },
		{ name: "Piptan", src: "/assets/clients/piptan.png" },
		{ name: "Qordz", src: "/assets/clients/qordz.svg" },
		{ name: "Simply KF", src: "/assets/clients/simply-kf.png" },
		{ name: "Smart Kitchen", src: "/assets/clients/smart-kitchen.png" },
		{ name: "Sphere IT", src: "/assets/clients/sphere-it.svg" },
	];

	return (
		<section className="border-slate-100 border-b py-8 md:py-12">
			<div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
				<motion.h4
					className="mb-8 text-center font-semibold text-slate-400 text-sm tracking-wider"
					initial={{ opacity: 0, y: 10 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					whileInView={{ opacity: 1, y: 0 }}
				>
					Trusted by 100+ Businesses Across UAE
				</motion.h4>

				<motion.div
					className="relative"
					initial={{ opacity: 0 }}
					transition={{ duration: 0.7, delay: 0.2 }}
					viewport={{ once: true }}
					whileInView={{ opacity: 1 }}
				>
					<Carousel
						autoScroll={true}
						className="mask-image-fade w-full"
						opts={{
							align: "start",
							loop: true,
						}}
					>
						<CarouselContent className="-ml-2 md:-ml-4">
							{clientLogos.map((logo) => (
								<CarouselItem
									className="basis-1/2 pl-2 sm:basis-1/3 md:basis-1/4 md:pl-4 lg:basis-1/5"
									key={logo.name}
								>
									<div className="group flex h-24 cursor-default items-center justify-center rounded-lg border border-transparent p-4 transition-all duration-300 hover:border-slate-100 hover:bg-slate-50">
										<Image
											alt={logo.name}
											className="h-8 w-auto scale-95 object-contain transition-all duration-300 group-hover:scale-100 sm:h-10"
											height={80}
											src={logo.src}
											width={160}
										/>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</motion.div>
			</div>
		</section>
	);
}
