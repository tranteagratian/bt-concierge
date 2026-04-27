export default function CTA() {
  return (
    <section className="final-cta">
      <div className="bt-container">
        <div
          className="section-eyebrow reveal"
          style={{ justifyContent: "center", display: "inline-flex" }}
        >
          URMĂTORUL PAS E AL TĂU
        </div>
        <h2 className="reveal reveal-d1">
          Hai să-ți găsim
          <br />
          <span className="blue">mașina potrivită.</span>
        </h2>
        <p className="reveal reveal-d2">
          Un mesaj scurt pe WhatsApp sau două minute cu botul. Atât. De-acolo,
          ne ocupăm noi.
        </p>
        <div className="final-ctas reveal reveal-d3">
          <a
            href="https://wa.me/40700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-pill"
          >
            <span className="wa-icon">✓</span>
            Scrie-ne pe WhatsApp
          </a>
          <a href="#bot" className="btn-secondary-pill">
            Încearcă Finder Bot
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
