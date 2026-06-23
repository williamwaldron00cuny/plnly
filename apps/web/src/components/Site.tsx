"use client";

import { useState } from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Marquee } from "./Marquee";
import { PositioningBand } from "./PositioningBand";
import { Service } from "./Service";
import { Capabilities } from "./Capabilities";
import { WhoFor } from "./WhoFor";
import { PlainlyAI } from "./PlainlyAI";
import { BrooklynBand } from "./BrooklynBand";
import { FoundingNote } from "./FoundingNote";
import { Essence } from "./Essence";
import { FAQ } from "./FAQ";
import { Booking } from "./Booking";
import { Footer } from "./Footer";
import { BookingModal } from "./BookingModal";
import { StickyCTA } from "./StickyCTA";
import { Reveal } from "./Reveal";

export function Site() {
  const [booking, setBooking] = useState(false);
  const open = () => setBooking(true);
  return (
    <div
      style={{
        background: "var(--plnly-greige)",
        fontFamily: "var(--plnly-font-body)",
        color: "var(--plnly-ink)",
        overflowX: "hidden",
      }}
    >
      <div className="plnly-grain" />
      <Header onBook={open} />
      <Hero onBook={open} />
      <Marquee />
      <Reveal>
        <PositioningBand />
      </Reveal>
      <Reveal>
        <Service />
      </Reveal>
      <Reveal>
        <Capabilities />
      </Reveal>
      <Reveal>
        <WhoFor />
      </Reveal>
      <BrooklynBand />
      <Reveal>
        <PlainlyAI />
      </Reveal>
      <Reveal>
        <FoundingNote />
      </Reveal>
      <Reveal>
        <Essence />
      </Reveal>
      <Reveal>
        <FAQ />
      </Reveal>
      <Reveal>
        <Booking />
      </Reveal>
      <Footer onBook={open} />
      {booking && <BookingModal onClose={() => setBooking(false)} />}
      <StickyCTA onBook={open} />
    </div>
  );
}
