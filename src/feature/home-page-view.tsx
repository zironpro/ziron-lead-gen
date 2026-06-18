import { Hero } from "./sections/hero";
import { Clients } from "./sections/clients";
import { Challenge } from "./sections/challenge";
import { Strategy } from "./sections/strategy";
import { Results } from "./sections/results";
import { Transformation } from "./sections/transformation";
import { Package } from "./sections/package";
import { WeAchieved } from "./sections/we-achieved";
import { CTC } from "./sections/cta";

export function HomePageView() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-amber-100 selection:text-amber-900 font-sans">
      <Hero />
      <Clients />
      <Challenge />
      <Strategy />
      <Results />
      <Package />
      <Transformation />
      <WeAchieved />
      <CTC />
    </main>
  );
}
