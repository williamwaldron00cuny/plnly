"use client";

import { useState } from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { PositioningBand } from "./PositioningBand";
import { Service } from "./Service";
import { WhoFor } from "./WhoFor";
import { PlainlyAI } from "./PlainlyAI";
import { Essence } from "./Essence";
import { Booking } from "./Booking";
import { Footer } from "./Footer";
import { BookingModal } from "./BookingModal";
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
      <Reveal>
        <PositioningBand />
      </Reveal>
      <Reveal>
        <Service />
      </Reveal>
      <Reveal>
        <WhoFor />
      </Reveal>
      <Reveal>
        <PlainlyAI />
      </Reveal>
      <Reveal>
        <Essence />
      </Reveal>
      <Reveal>
        <Booking />
      </Reveal>
      <Footer onBook={open} />
      {booking && <BookingModal onClose={() => setBooking(false)} />}
    </div>
  );
}
