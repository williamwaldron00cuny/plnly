/* global React */
const NS = window.PLNLYDesignSystem_1cc2e7;
const { Wordmark, Orbit, Button, Icon, Eyebrow, Card, Input } = NS;
const { useState } = React;

/* ---------------------------------------------------------------- Header */
function Header({ onBook }) {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 20,
      background: 'rgba(227,225,218,0.82)', backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--plnly-border)',
    }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '18px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Wordmark variant="horizontal" size="sm" />
        <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <a href="#service" style={navLink}>The service</a>
          <a href="#who" style={navLink}>Who it's for</a>
          <Button size="sm" onClick={onBook}>Start the setup</Button>
        </nav>
      </div>
    </header>
  );
}
const navLink = { fontFamily: 'var(--plnly-font-body)', fontSize: 14, color: 'var(--plnly-ink-65)', textDecoration: 'none' };

/* ------------------------------------------------------------------ Hero */
function Hero({ onBook }) {
  return (
    <section style={{ position: 'relative', maxWidth: 1120, margin: '0 auto', padding: '120px 40px 128px', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: -200, top: -120, pointerEvents: 'none' }}>
        <Orbit tone="faint" size={760} spin duration={90} />
      </div>
      <div style={{ position: 'relative', maxWidth: 760 }}>
        <Eyebrow>Modern life, minus the jargon · Brooklyn, NY</Eyebrow>
        <h1 style={{ fontFamily: 'var(--plnly-font-display)', fontWeight: 500, fontSize: 74, lineHeight: 1.04, letterSpacing: '-0.025em', color: 'var(--plnly-ink)', margin: '26px 0 0' }}>
          Built bespoke. <em style={italicCoral}>Yours</em> to run.
        </h1>
        <p style={{ fontFamily: 'var(--plnly-font-body)', fontSize: 20, lineHeight: 1.55, color: 'var(--plnly-ink-80)', margin: '30px 0 0', maxWidth: 560 }}>
          We set the tools of modern life up around how your household actually lives, teach you to run them, and hand over the keys. You own the capability — not a subscription to us.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 22, marginTop: 38 }}>
          <Button size="lg" onClick={onBook}>Start the setup</Button>
          <a href="#service" style={{ fontFamily: 'var(--plnly-font-body)', fontSize: 15, color: 'var(--plnly-ink)', borderBottom: '1px solid rgba(32,36,43,0.3)', paddingBottom: 2, textDecoration: 'none' }}>See how it works</a>
        </div>
      </div>
    </section>
  );
}
const italicCoral = { fontFamily: 'var(--plnly-font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--plnly-coral)' };

/* ----------------------------------------------------------- Positioning */
function PositioningBand() {
  return (
    <section style={{ background: 'var(--plnly-ink)', color: 'var(--plnly-on-ink)' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '90px 40px' }}>
        <Eyebrow onInk>The difference</Eyebrow>
        <div style={{ fontFamily: 'var(--plnly-font-display)', fontWeight: 500, fontSize: 40, lineHeight: 1.2, letterSpacing: '-0.015em', marginTop: 22, maxWidth: 880 }}>
          Everyone else runs the AI and keeps the keys. We set it up, teach you to run it, and <em style={italicCoral}>hand them over.</em>
        </div>
        <p style={{ fontFamily: 'var(--plnly-font-body)', fontSize: 17, lineHeight: 1.6, color: 'var(--plnly-on-ink-dim)', margin: '24px 0 0', maxWidth: 600 }}>
          Ownership, not concierge. When we're done, the capability is yours to keep — and to grow on your own.
        </p>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Service */
const STEPS = [
  { icon: 'focus', title: 'Set up around you', body: "We configure the tools to your household's real rhythm — scheduling, groceries, travel, the operations of a home. Not a template." },
  { icon: 'plan', title: 'Taught, not done-for-you', body: 'You learn to run it, at your pace, in plain language. We explain the real tool and the real task — never "AI-powered solutions."' },
  { icon: 'handover', title: "Then it's yours", body: "We hand over the keys. You stay in control of your own systems, and we're there when you want us — not because you need us.", coral: true },
];
function Service() {
  return (
    <section id="service" style={{ maxWidth: 1120, margin: '0 auto', padding: '104px 40px' }}>
      <Eyebrow>How it works</Eyebrow>
      <h2 style={{ fontFamily: 'var(--plnly-font-display)', fontWeight: 500, fontSize: 38, lineHeight: 1.12, letterSpacing: '-0.015em', color: 'var(--plnly-ink)', margin: '18px 0 0', maxWidth: '18ch' }}>
        Set up around how you <em style={italicCoral}>actually</em> live.
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28, marginTop: 56 }}>
        {STEPS.map((s) => (
          <div key={s.title}>
            <Icon name={s.icon} size={38} coral={s.coral} />
            <div style={{ fontFamily: 'var(--plnly-font-display)', fontWeight: 500, fontSize: 21, color: 'var(--plnly-ink)', marginTop: 20 }}>{s.title}</div>
            <p style={{ fontFamily: 'var(--plnly-font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--plnly-ink-55)', margin: '10px 0 0' }}>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Who it's for */
function WhoFor() {
  return (
    <section id="who" style={{ background: 'var(--plnly-porcelain)' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '104px 40px' }}>
        <Eyebrow>Who it's for</Eyebrow>
        <h2 style={{ fontFamily: 'var(--plnly-font-display)', fontWeight: 500, fontSize: 38, lineHeight: 1.12, letterSpacing: '-0.015em', color: 'var(--plnly-ink)', margin: '18px 0 56px' }}>
          Two households. One idea.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
          <Card surface="quiet" elevation="flat" radius="card-lg" padding={40}>
            <div style={{ ...iconWell, background: 'var(--plnly-mist)' }}><Icon name="orbit" size={20} /></div>
            <div style={cardTitle}>Busy households</div>
            <p style={cardBody}>You could figure the tools out yourself — you'd just rather not lose the weekend to it. We configure AI around your week and hand it back, with you still in control.</p>
          </Card>
          <Card surface="quiet" elevation="flat" radius="card-lg" padding={40}>
            <div style={{ ...iconWell, background: 'var(--plnly-mint)' }}><Icon name="plan" size={20} /></div>
            <div style={cardTitle}>Parents of college-bound teens</div>
            <p style={cardBody}>Real, responsible AI literacy before campus — NotebookLM, citations, the academic-integrity lines. Tool fluency, scoped tight. Not subject tutoring.</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
const iconWell = { width: 42, height: 42, borderRadius: 11, display: 'flex', alignItems: 'center', justifyContent: 'center' };
const cardTitle = { fontFamily: 'var(--plnly-font-display)', fontWeight: 500, fontSize: 23, color: 'var(--plnly-ink)', marginTop: 24 };
const cardBody = { fontFamily: 'var(--plnly-font-body)', fontSize: 15.5, lineHeight: 1.6, color: 'var(--plnly-ink-65)', margin: '12px 0 0' };

/* ---------------------------------------------------------- PLAINLY moment */
function PlainlyAI() {
  return (
    <section style={{ background: 'var(--plnly-ink)', color: 'var(--plnly-on-ink)' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '104px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
        <div>
          <Eyebrow onInk>The two letters we left out</Eyebrow>
          <div style={{ fontFamily: 'var(--plnly-font-display)', fontWeight: 500, fontSize: 60, letterSpacing: '0.04em', color: 'var(--plnly-on-ink)', lineHeight: 1, marginTop: 26 }}>
            PL<span style={{ color: 'var(--plnly-coral)' }}>AI</span>NLY
          </div>
          <p style={{ fontFamily: 'var(--plnly-font-body)', fontSize: 16.5, lineHeight: 1.6, color: 'var(--plnly-on-ink-dim)', margin: '26px 0 0', maxWidth: 440 }}>
            PLNLY is "plainly" with the A and the I taken out — modern life, minus the jargon. Our AI-literacy program is the one place we put them back. Same name, switched on.
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Orbit tone="ink" size={240} spin duration={60} />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Essence */
function Essence() {
  return (
    <section style={{ maxWidth: 1120, margin: '0 auto', padding: '120px 40px', textAlign: 'center' }}>
      <div style={{ fontFamily: 'var(--plnly-font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 56, lineHeight: 1.15, color: 'var(--plnly-ink)' }}>
        a beautiful plainness
      </div>
      <div style={{ marginTop: 26 }}><Eyebrow>Modern life, minus the jargon.</Eyebrow></div>
    </section>
  );
}

/* ----------------------------------------------------------------- Footer */
function Footer({ onBook }) {
  return (
    <footer id="contact" style={{ background: 'var(--plnly-porcelain)', borderTop: '1px solid var(--plnly-border)' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '80px 40px 56px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 40 }}>
          <div>
            <Wordmark variant="stacked" size="sm" style={{ alignItems: 'flex-start' }} />
            <p style={{ fontFamily: 'var(--plnly-font-body)', fontSize: 15, lineHeight: 1.5, color: 'var(--plnly-ink-55)', margin: '22px 0 0', maxWidth: 300 }}>
              Personal AI setup, teaching, and retainer. Brooklyn, NY — and online.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 64, flexWrap: 'wrap' }}>
            <div>
              <Eyebrow>Get in touch</Eyebrow>
              <div style={footCol}>
                <a href="#contact" style={footLink} onClick={(e) => { e.preventDefault(); onBook(); }}>Book an intro call</a>
                <a href="mailto:hello@plnly.co" style={footLink}>hello@plnly.co</a>
              </div>
            </div>
            <div>
              <Eyebrow>Elsewhere</Eyebrow>
              <div style={footCol}>
                <a href="#" style={footLink}>Instagram</a>
                <a href="#" style={footLink}>LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 64, paddingTop: 24, borderTop: '1px solid var(--plnly-border)', flexWrap: 'wrap', gap: 12 }}>
          <Eyebrow>© 2026 PLNLY · Brooklyn, NY</Eyebrow>
          <Eyebrow dot>Modern life, minus the jargon</Eyebrow>
        </div>
      </div>
    </footer>
  );
}
const footCol = { display: 'flex', flexDirection: 'column', gap: 8, marginTop: 14 };
const footLink = { fontFamily: 'var(--plnly-font-body)', fontSize: 15, color: 'var(--plnly-ink)', textDecoration: 'none' };

/* ----------------------------------------------------------- Booking modal */
function BookingModal({ onClose }) {
  const [sent, setSent] = useState(false);
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 50, background: 'rgba(32,36,43,0.42)', backdropFilter: 'blur(3px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: 460, maxWidth: '100%' }}>
        <Card surface="white" elevation="overlay" radius="card-lg" padding={40} style={{ position: 'relative' }}>
          <button onClick={onClose} aria-label="Close" style={{ position: 'absolute', top: 18, right: 20, background: 'none', border: 'none', fontSize: 20, color: 'var(--plnly-ink-35)', cursor: 'pointer', lineHeight: 1 }}>×</button>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ display: 'inline-flex' }}><Orbit tone="faint" size={120} /></div>
              <div style={{ fontFamily: 'var(--plnly-font-display)', fontWeight: 500, fontSize: 24, color: 'var(--plnly-ink)', marginTop: 8 }}>Set up. <em style={italicCoral}>We'll be in touch.</em></div>
              <p style={{ fontFamily: 'var(--plnly-font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--plnly-ink-55)', margin: '12px 0 24px' }}>We'll reach out within a day to find a time. No phone tree, no chatbot — just us.</p>
              <Button onClick={onClose}>Back to the site</Button>
            </div>
          ) : (
            <>
              <Eyebrow>Start the setup</Eyebrow>
              <h3 style={{ fontFamily: 'var(--plnly-font-display)', fontWeight: 500, fontSize: 28, lineHeight: 1.15, letterSpacing: '-0.01em', color: 'var(--plnly-ink)', margin: '14px 0 6px' }}>
                Tell us about your household.
              </h3>
              <p style={{ fontFamily: 'var(--plnly-font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--plnly-ink-55)', margin: '0 0 24px' }}>
                A short note is plenty. We read every one.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <Input label="Name" placeholder="Your name" />
                <Input label="Email" placeholder="you@household.com" type="email" />
                <Input label="What would you like set up?" placeholder="Scheduling, travel, the kids' tools…" />
                <Button onClick={() => setSent(true)} style={{ marginTop: 4 }}>Send it over</Button>
              </div>
            </>
          )}
        </Card>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------- Site */
function Site() {
  const [booking, setBooking] = useState(false);
  const open = () => setBooking(true);
  return (
    <div style={{ background: 'var(--plnly-greige)', fontFamily: 'var(--plnly-font-body)', color: 'var(--plnly-ink)', overflowX: 'hidden' }}>
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

window.Site = Site;

ReactDOM.createRoot(document.getElementById('root')).render(<Site />);
