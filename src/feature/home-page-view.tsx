import { Hero } from "./sections/hero";
import { Clients } from "./sections/clients";
import { Challenge } from "./sections/challenge";
import { Strategy } from "./sections/strategy";
import { Results } from "./sections/results";
import { Transformation } from "./sections/transformation";
import { Package } from "./sections/package";

export function HomePageView() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Clients />
      <Challenge />
      <Strategy />
      <Results />
      <Package />
      <Transformation />
    </main>
  );
}
