export default function PartsService() {
  return (
    <section className="services" id="servicii">
      <div className="bt-container">
        <div className="section-head reveal">
          <div className="section-eyebrow">SERVICII PE TERMEN LUNG</div>
          <h2 className="section-title">
            Nu te lăsăm <span className="blue">cu ochii-n soare.</span>
          </h2>
          <p className="section-sub">
            După ce ai luat mașina, începe partea lungă: întreținere, piese,
            decizii. Suntem aici pentru toate, ani buni de aici încolo.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card reveal">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </div>
            <h3>Piese auto la prețuri de furnizor</h3>
            <p>
              Lucrăm direct cu furnizori europeni. Tu primești piese OEM și
              aftermarket de calitate cu 30–50% mai puțin decât în
              service-urile autorizate din România.
            </p>
            <a href="#" className="service-link">
              Cere un preț pentru piesa ta →
            </a>
          </div>
          <div className="service-card reveal reveal-d1">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>
            <h3>Ghid personal de întreținere</h3>
            <p>
              Pentru fiecare mașină pe care o aducem, primești un manual
              personalizat: intervale de service, costuri estimate, piese
              sensibile pe model, mecanici verificați în orașul tău.
            </p>
            <a href="#" className="service-link">
              Vezi un exemplu →
            </a>
          </div>
          <div className="service-card reveal reveal-d2">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h3>Sfaturi când ai nevoie de ele</h3>
            <p>
              Probleme la service și nu ești sigur dacă ești tras în piept?
              Vrei a doua opinie tehnică? Te gândești să schimbi mașina?
              Suntem la un mesaj distanță, fără ceas pornit.
            </p>
            <a href="#" className="service-link">
              Scrie-ne pe WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
