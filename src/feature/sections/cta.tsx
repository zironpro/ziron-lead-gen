"use client";

// Inline SVGs for Socials
const _FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		fill="none"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		viewBox="0 0 24 24"
		{...props}
	>
		<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
	</svg>
);

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

export function CTC() {
	return (
		<section className="relative mt-12 w-full overflow-hidden bg-gradient-to-br from-indigo-600 to-indigo-950 text-white">

			<div className="container relative z-10 mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-12 px-6 py-16 md:flex-row md:py-20 lg:px-12 lg:py-24">
				{/* Content */}
				<div className="relative z-10 flex max-w-2xl flex-col items-start gap-8 md:gap-12">
					<h2 className="font-extrabold text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
						Ready to grow? <br />
						<span className="text-[#ffc650]"> We’re ready to go.</span>
					</h2>
				</div>

				{/* Socials / Stay Connected */}
				<div className="relative z-10 flex shrink-0 flex-col md:items-end">
					<p className="mb-6 font-semibold text-[15px] text-white uppercase tracking-wider">
						Stay Connected
					</p>
					<div className="flex gap-4">
						<a
							className="flex h-14 w-14 items-center justify-center rounded-lg bg-black/40 transition-all hover:scale-105 hover:bg-black"
							href="https://www.linkedin.com/company/zironpro/"
							rel="noopener noreferrer"
							target="_blank"
						>
							<LinkedinIcon className="h-6 w-6 text-white" />
						</a>
						<a
							className="flex h-14 w-14 items-center justify-center rounded-lg bg-black/40 transition-all hover:scale-105 hover:bg-black"
							href="https://www.instagram.com/ziron_pro/"
							rel="noopener noreferrer"
							target="_blank"
						>
							<InstagramIcon className="h-6 w-6 text-white" />
						</a>
						<a
							className="flex h-14 w-14 items-center justify-center rounded-lg bg-black/40 transition-all hover:scale-105 hover:bg-black"
							href="https://wa.me/971542588446"
							rel="noopener noreferrer"
							target="_blank"
						>
							<WhatsAppIcon className="h-6 w-6 text-white" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
