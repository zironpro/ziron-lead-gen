import { Clients } from "./sections/clients";
import { CTC } from "./sections/cta";
import { FormSection } from "./sections/form";
import { Hero } from "./sections/hero";
import { Package } from "./sections/package";
import { Results } from "./sections/results";
import { Transformation } from "./sections/transformation";

export function HomePageView() {
	return (
		<main className="min-h-screen font-sans selection:bg-amber-100 selection:text-amber-900">
			<Hero />
			<Clients />
			{/* <Challenge /> */}
			{/* <Strategy /> */}
			<Results />
			<Package />
			<Transformation />
			{/* <WeAchieved /> */}
			<FormSection />
			<CTC />
		</main>
	);
}
