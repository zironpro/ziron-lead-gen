import { Clients } from "./sections/clients";
import { FormSection } from "./sections/form";
import { Hero } from "./sections/hero";
import { Package } from "./sections/package";
import { Transformation } from "./sections/transformation";
export function HomePageView() {
	return (
		<main className="min-h-screen font-sans selection:bg-amber-100 selection:text-amber-900">
			<Hero />
			<Clients />
			{/* <Challenge /> */}
			{/* <Strategy /> */}
			{/* <Results /> */}
			<Transformation />
			<Package />
			{/* <MetaAds /> */}
			{/* <WeAchieved /> */}
			<FormSection />
			{/* <CTC /> */}
		</main>
	);
}
