import type { Metadata } from "next";
import { clash, inter, mono } from "@/assets/fonts";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp";
import { NextSectionButton } from "@/components/layout/next";
import { FloatingButtonsMobile } from "@/components/layout/floating-buttons-mobile";
import "./globals.css";

export const metadata: Metadata = {
	title: "Best AI Marketing Agency in Abu Dhab",
	description: "Result-driven social media strategy & lead generation.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="h-full">
			<body
				className={cn(
					"min-h-full flex flex-col font-sans text-gray-900 bg-stone-100 m-0 p-0 overflow-x-hidden w-full",
					"antialiased",
					clash.variable,
					inter.className,
					mono.variable
				)}
			>
				<Navbar />
				{children}
				<Footer />
				<WhatsAppButton />
				<NextSectionButton />
				<FloatingButtonsMobile />
			</body>
		</html>
	);
}
