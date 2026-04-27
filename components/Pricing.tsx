"use client";

import { useEffect, useRef, useState } from "react";

export default function Pricing() {
  const [savings, setSavings] = useState(0);
  const counted = useRef(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bannerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const start = performance.now();
          const dur = 1800;
          const target = 3200;
          function tick(now: number) {
            const t = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - t, 3);
            setSavings(Math.round(target * eased));
            if (t < 1) requestAnimationFrame(tick);
            else setSavings(target);
          }
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="pricing" id="preturi">
      <div className="bt-container">
        <div className="section-head reveal">
          <div className="section-eyebrow">COMPARAȚIE REALĂ DE PREȚ</div>
          <h2 className="section-title">
            Aceeași mașină. <span className="blue">3.200€</span> diferență.
          </h2>
          <p className="section-sub">
            Un exemplu concret: un Audi A4 break, 2022, cumpărat de la dealer
            față de cum arată prin noi.{" "}
            <strong>Cifrele vorbesc singure.</strong>
          </p>
        </div>

        <div className="compare-grid reveal">
          <div className="compare-card">
            <span className="compare-label">LA DEALER TRADIȚIONAL</span>
            <h3>
              Cum cumpără
              <br />
              „toată lumea&rdquo;.
            </h3>
            <div className="price-row">
              <span className="price-label">Preț mașină rulată (~2022)</span>
              <span className="price-value">20.000€</span>
            </div>
            <div className="price-row">
              <span className="price-label">Adaos dealer</span>
              <span className="price-value bad">+3.500€</span>
            </div>
            <div className="price-row">
              <span className="price-label">Pregătire la livrare</span>
              <span className="price-value bad">inclus</span>
            </div>
            <div className="price-row">
              <span className="price-label">Verificare independentă</span>
              <span className="price-value bad">nu există</span>
            </div>
            <div className="price-row total">
              <span className="price-label">Total final</span>
              <span className="price-value">23.500€</span>
            </div>
          </div>

          <div className="compare-card bt">
            <span className="compare-label">
              <span className="star">★</span> CU B&amp;T PRIME
            </span>
            <h3>
              Cum cumperi
              <br />
              cu cap.
            </h3>
            <div className="price-row">
              <span className="price-label">Preț mașină din sursa noastră</span>
              <span className="price-value">20.000€</span>
            </div>
            <div className="price-row">
              <span className="price-label">Taxă concierge fixă</span>
              <span className="price-value good">+300€</span>
            </div>
            <div className="price-row">
              <span className="price-label">Verificare 360°</span>
              <span className="price-value good">incluse</span>
            </div>
            <div className="price-row">
              <span className="price-label">Hârtii &amp; logistică</span>
              <span className="price-value good">incluse</span>
            </div>
            <div className="price-row total">
              <span className="price-label">Total final</span>
              <span className="price-value">20.300€</span>
            </div>
          </div>
        </div>

        <div className="savings-banner reveal" ref={bannerRef}>
          <div>
            <div className="savings-label">ECONOMIA TA CU B&amp;T</div>
            <div className="savings-amount">
              {savings.toLocaleString("ro-RO")}
              <span className="blue-text">€</span>
            </div>
          </div>
          <div className="savings-badges">
            <div className="savings-badge">
              <span className="check">✓</span> Fără adaosuri ascunse
            </div>
            <div className="savings-badge">
              <span className="check">✓</span> Acces dealer-only
            </div>
            <div className="savings-badge">
              <span className="check">✓</span> Taxă fixă, oricare ar fi mașina
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
