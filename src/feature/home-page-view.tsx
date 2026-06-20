import { Clients } from "./sections/clients";
import { FormSection } from "./sections/form";
import { Hero } from "./sections/hero";
import { MetaAds } from "./sections/meta-ads";
import { Package } from "./sections/package";
import { Transformation } from "./sections/transformation";
export function HomePageView() {
	return (
		<main className="min-h-screen font-sans selection:bg-[#ffc650]/20 selection:text-[#ffc650]">
			<Hero />
			<Clients />
			{/* <Challenge /> */}
			{/* <Strategy /> */}
			{/* <Results /> */}
			<Transformation />
			<Package />
			<MetaAds />
			{/* <WeAchieved /> */}
			<FormSection />
			{/* <CTC /> */}
		</main>
	);
}
