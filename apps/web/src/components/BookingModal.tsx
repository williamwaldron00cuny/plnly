import { useState } from "react";
import { Card, Orbit, Eyebrow, Button, Input } from "@plnly/ui";
import { italicCoral } from "./shared";

export function BookingModal({ onClose }: { onClose: () => void }) {
  const [sent, setSent] = useState(false);
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        background: "rgba(32,36,43,0.42)",
        backdropFilter: "blur(3px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div onClick={(e) => e.stopPropagation()} style={{ width: 460, maxWidth: "100%" }}>
        <Card surface="white" elevation="overlay" radius="card-lg" padding={40} style={{ position: "relative" }}>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              position: "absolute",
              top: 18,
              right: 20,
              background: "none",
              border: "none",
              fontSize: 20,
              color: "var(--plnly-ink-35)",
              cursor: "pointer",
              lineHeight: 1,
            }}
          >
            ×
          </button>
          {sent ? (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <div style={{ display: "inline-flex" }}>
                <Orbit tone="faint" size={120} />
              </div>
              <div
                style={{
                  fontFamily: "var(--plnly-font-display)",
                  fontWeight: 500,
                  fontSize: 24,
                  color: "var(--plnly-ink)",
                  marginTop: 8,
                }}
              >
                Set up. <em style={italicCoral}>{"We'll be in touch."}</em>
              </div>
              <p
                style={{
                  fontFamily: "var(--plnly-font-body)",
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "var(--plnly-ink-55)",
                  margin: "12px 0 24px",
                }}
              >
                {"We'll reach out within a day to find a time. No phone tree, no chatbot — just us."}
              </p>
              <Button onClick={onClose}>Back to the site</Button>
            </div>
          ) : (
            <>
              <Eyebrow>Start the setup</Eyebrow>
              <h3
                style={{
                  fontFamily: "var(--plnly-font-display)",
                  fontWeight: 500,
                  fontSize: 28,
                  lineHeight: 1.15,
                  letterSpacing: "-0.01em",
                  color: "var(--plnly-ink)",
                  margin: "14px 0 6px",
                }}
              >
                Tell us about your household.
              </h3>
              <p
                style={{
                  fontFamily: "var(--plnly-font-body)",
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "var(--plnly-ink-55)",
                  margin: "0 0 24px",
                }}
              >
                A short note is plenty. We read every one.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <Input label="Name" placeholder="Your name" />
                <Input label="Email" placeholder="you@household.com" type="email" />
                <Input label="What would you like set up?" placeholder="Scheduling, travel, the kids' tools…" />
                <Button onClick={() => setSent(true)} style={{ marginTop: 4 }}>
                  Send it over
                </Button>
              </div>
            </>
          )}
        </Card>
      </div>
    </div>
  );
}
