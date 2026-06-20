export function InfoNav() {
	return (
		<div className="relative flex w-full items-center justify-center bg-gradient-to-r from-amber-100/50 via-amber-50 to-amber-100/50 px-4 py-2 sm:px-6 lg:px-8">
			<div className="flex flex-row flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-center sm:gap-3 lg:gap-4">
				{/* <div className="flex shrink-0 items-center gap-1.5 rounded-full bg-amber-500 px-3 py-1 shadow-sm">
					<span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
					<span className="font-bold text-[11px] text-white uppercase leading-none tracking-wider">
						NEW LAUNCH
					</span>
				</div> */}
				<p className="font-semibold text-[13.5px] text-slate-900 sm:text-sm">
					Get 50 Qualified Leads in 10 Days
				</p>
				{/* <Link
					className="group flex shrink-0 items-center gap-1 font-bold text-[13.5px] sm:text-sm"
					href="#contact"
				>
					<span className="animate-text-shimmer bg-[length:200%_auto] bg-[linear-gradient(110deg,#d97706,45%,#fff,55%,#d97706)] bg-clip-text text-transparent transition-opacity hover:opacity-80">
						Explore More
					</span>
					<ArrowRight className="h-4 w-4 text-amber-600 transition-transform group-hover:translate-x-0.5" />
				</Link> */}
			</div>
		</div>
	);
}
