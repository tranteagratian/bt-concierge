export default function Why() {
  return (
    <section className="why">
      <div className="bt-container">
        <div className="section-head reveal">
          <div className="section-eyebrow">DE CE B&amp;T</div>
          <h2 className="section-title">
            Cumpărarea unei mașini,{" "}
            <span className="blue">așa cum ar trebui să fie</span>
          </h2>
          <p className="section-sub">
            Fără presiune, fără mecanici dubioși, fără adaosuri ascunse.{" "}
            <strong>Trei lucruri simple</strong> care schimbă tot procesul:
          </p>
        </div>
        <div className="why-grid">
          <div className="why-card reveal">
            <div className="why-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2 L3 7 v6 c0 5 4 9 9 9 s9-4 9-9 V7 z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3>Verificare reală, nu pe cuvânt</h3>
            <p>
              Verificăm istoric complet, daune, kilometraj, fișa tehnică și
              starea mecanică. Afli adevărul despre mașină înainte să dai
              vreun ban.
            </p>
          </div>
          <div className="why-card reveal reveal-d1">
            <div className="why-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
            <h3>Căutare făcută cap-coadă pentru tine</h3>
            <p>
              Spui ce vrei, noi căutăm. Fără weekend-uri pierdute la parcări,
              fără vânzători care te trag de mânecă. Doar mașini care se
              potrivesc cu adevărat.
            </p>
          </div>
          <div className="why-card reveal reveal-d2">
            <div className="why-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h3>Taxă fixă. Ce vezi, ăla plătești.</h3>
            <p>
              Comisionul nostru e o sumă fixă — indiferent de prețul mașinii.
              Economia medie a clienților noștri pleacă de la{" "}
              <strong>3.000€</strong> față de un dealer clasic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
