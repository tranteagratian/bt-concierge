"use client";

import ChatWidget from "@/components/ChatWidget";
import type { CarResult } from "@/components/SearchResults";

interface Props {
  onResults: (cars: CarResult[]) => void;
}

export default function Hero({ onResults }: Props) {
  return (
    <section className="hero" id="hero">
      <div className="bt-container">
        <div className="hero-grid">
          <div>
            <div className="hero-eyebrow reveal">
              Concierge auto · România · 50+ familii ajutate
            </div>
            <h1 className="reveal reveal-d1">
              Mașina pe care ți-o dorești.
              <br />
              <span className="blue">Fără surprize, fără adaosuri.</span>
            </h1>
            <p className="hero-sub reveal reveal-d2">
              Suntem oamenii care îți caută, verifică și aduc mașina perfectă
              din piețele auto din Europa. Taxă fixă, totul transparent,
              hârtiile gata. Tu primești cheile — noi facem{" "}
              <strong>partea grea</strong>.
            </p>

            <div className="hero-ctas reveal reveal-d3">
              <a href="#bot" className="btn-primary-pill">
                Începe cu botul
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://wa.me/40700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-pill"
              >
                <span className="wa-icon">✓</span>
                WhatsApp
              </a>
            </div>

            <div className="hero-trust-row reveal reveal-d3">
              <div className="avatar-stack">
                <div className="avatar a1" />
                <div className="avatar a2" />
                <div className="avatar a3" />
                <div className="avatar a4" />
              </div>
              <div className="trust-text">
                <strong>4.9/5</strong>{" "}
                <span className="stars">★★★★★</span> ·{" "}
                <strong>peste 50 de familii</strong> ajutate
                <br />
                Mașini livrate în toată România, din Iași până la Timișoara
              </div>
            </div>
          </div>

          <div className="hero-bot reveal reveal-d2" id="bot">
            <ChatWidget onResults={onResults} />
          </div>
        </div>
      </div>
    </section>
  );
}
