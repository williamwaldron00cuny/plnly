import { OrbitCanvas } from "./OrbitCanvas";
import { Hero } from "./Hero";
import { ServicesOrbitSection } from "./ServicesOrbitSection";
import { Packages } from "./Packages";
import { TravelTeaser } from "./TravelTeaser";
import { FoundingOffer } from "./FoundingOffer";

export function Site() {
  return (
    <div style={{ background: "var(--plnly-ink-2)", overflowX: "hidden" }}>
      <OrbitCanvas />
      <Hero />
      <ServicesOrbitSection />
      <Packages />
      <TravelTeaser />
      <FoundingOffer />
    </div>
  );
}
