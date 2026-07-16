import { OrbitCanvas } from "./OrbitCanvas";
import { Hero } from "./Hero";
import { PackagesOrbit } from "./PackagesOrbit";
import { PackagesRecap } from "./PackagesRecap";
import { CityStrip } from "./CityStrip";
import { TravelTeaser } from "./TravelTeaser";
import { FoundingOffer } from "./FoundingOffer";

export function Site() {
  return (
    <div style={{ overflowX: "clip" }}>
      {/* Orbit scope: the canvas is position:sticky (see OrbitCanvas) and pins for
          exactly the height of Hero + PackagesOrbit below, then scrolls away —
          it must never bleed into PackagesRecap/CityStrip/TravelTeaser/FoundingOffer/Footer. */}
      <div style={{ position: "relative", background: "var(--plnly-ink-2)" }}>
        <OrbitCanvas />
        <div style={{ position: "relative", zIndex: 1 }}>
          <Hero />
          <PackagesOrbit />
        </div>
      </div>
      <PackagesRecap />
      <CityStrip />
      <TravelTeaser />
      <FoundingOffer />
    </div>
  );
}
