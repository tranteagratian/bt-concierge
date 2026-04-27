export default function ChatbotSection() {
  return (
    <section className="verify" id="verificare">
      <div className="bt-container">
        <div className="verify-grid">
          <div className="reveal">
            <div className="section-eyebrow">VERIFICARE 360°</div>
            <h2 className="section-title">
              Vezi exact <span className="blue">ce cumperi.</span>
            </h2>
            <p>
              Pentru fiecare mașină pe care ne-o ceri, livrăm un raport complet
              cu istoric, daune, kilometraj real, fișă tehnică și{" "}
              <strong>scor de încredere</strong>. Nimic nu rămâne pe ghicite.
            </p>
            <ul className="chatbot-bullets">
              <li>VIN verificat în 12+ baze de date europene</li>
              <li>Comparație directă: prețul tău vs. dealer tradițional</li>
              <li>Scor de încredere cu argumente concrete pentru fiecare detaliu</li>
            </ul>
            <a
              href="https://wa.me/40700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-pill"
            >
              Cere un raport demo
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="hero-visual reveal reveal-d1">
            <div className="float-badge fb-1">
              <div className="ic">€</div>
              <div>
                −3.200€
                <br />
                <span style={{ fontWeight: 500, opacity: 0.85, fontSize: 11 }}>
                  vs. dealer
                </span>
              </div>
            </div>
            <div className="float-badge fb-2">
              <div className="ic">✓</div>
              <div>
                Verificat
                <br />
                <span style={{ fontWeight: 500, opacity: 0.85, fontSize: 11 }}>
                  istoric complet
                </span>
              </div>
            </div>

            <div className="report-card rc-1">
              <div className="rc-head">
                <span className="rc-vin">VIN · WBA8E51010K12345</span>
                <span className="rc-status">CURAT</span>
              </div>
              <div className="rc-title">BMW Seria 3 · 320d</div>
              <div className="rc-meta">2022 · 48.500 km · Diesel</div>
              <div className="rc-stat-row">
                <span className="k">Daune</span>
                <span className="v green">Niciuna</span>
              </div>
              <div className="rc-stat-row">
                <span className="k">Kilometraj</span>
                <span className="v green">Confirmat</span>
              </div>
            </div>

            <div className="report-card rc-2">
              <div className="rc-head">
                <span className="rc-vin">OFERTĂ · LOT #28104</span>
                <span className="rc-status warn">SELECȚIE</span>
              </div>
              <div className="rc-title">Audi A4 Avant · 40 TDI</div>
              <div className="rc-meta">2022 · 52.300 km · Quattro</div>
              <div className="rc-stat-row">
                <span className="k">Preț de achiziție</span>
                <span className="v">20.000€</span>
              </div>
              <div className="rc-stat-row">
                <span className="k">Total cu B&amp;T</span>
                <span className="v blue">20.300€</span>
              </div>
              <div className="rc-stat-row">
                <span className="k">Total la dealer</span>
                <span
                  className="v"
                  style={{ color: "var(--red)", textDecoration: "line-through" }}
                >
                  23.500€
                </span>
              </div>
            </div>

            <div className="report-card rc-3">
              <div className="rc-head">
                <span className="rc-vin">SCAN COMPLET · 12 surse</span>
                <span className="rc-status">100%</span>
              </div>
              <div className="rc-title">Verificare istoric</div>
              <div className="rc-meta">Daune · Km · Hârtii · Mecanică</div>
              <div className="rc-stat-row">
                <span className="k">Surse verificate</span>
                <span className="v">12 / 12</span>
              </div>
              <div className="rc-bar">
                <div className="rc-bar-fill" style={{ width: "100%" }} />
              </div>
              <div className="rc-stat-row" style={{ paddingTop: 14 }}>
                <span className="k">Scor încredere</span>
                <span className="v blue">98 / 100</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
