"use client";

import { useState } from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { PositioningBand } from "./PositioningBand";
import { Service } from "./Service";
import { WhoFor } from "./WhoFor";
import { PlainlyAI } from "./PlainlyAI";
import { Essence } from "./Essence";
import { Footer } from "./Footer";
import { BookingModal } from "./BookingModal";

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
      <Header onBook={open} />
      <Hero onBook={open} />
      <PositioningBand />
      <Service />
      <WhoFor />
      <PlainlyAI />
      <Essence />
      <Footer onBook={open} />
      {booking && <BookingModal onClose={() => setBooking(false)} />}
    </div>
  );
}
