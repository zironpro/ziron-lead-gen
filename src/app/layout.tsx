import type { Metadata } from "next";

import { FloatingButtonsMobile } from "@/components/layout/floating-buttons-mobile";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { NextSectionButton } from "@/components/layout/next";
import { WhatsAppButton } from "@/components/layout/whatsapp";

import { clash, inter, mono } from "@/assets/fonts";

import { cn } from "@/lib/utils";
import "./globals.css";
import { ToastProvider } from "@/components/ui/toast";

export const metadata: Metadata = {
	title: "Best Digital Marketing Agency in UAE",
	description: "Result-driven social media strategy & lead generation.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className="h-full" lang="en">
			<body
				className={cn(
					"m-0 flex min-h-full w-full flex-col overflow-x-hidden bg-stone-100 p-0 font-sans text-gray-900",
					"antialiased",
					clash.variable,
					inter.className,
					mono.variable
				)}
			>
				<ToastProvider position="top-center">
					<Navbar />
					<main className="relative flex w-full flex-1 flex-col overflow-x-hidden">
						{children}
					</main>
					<Footer />
					<WhatsAppButton />
					<NextSectionButton />
					<FloatingButtonsMobile />
				</ToastProvider>
			</body>
		</html>
	);
}
