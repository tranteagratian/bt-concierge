export default function Stats() {
  return (
    <section className="stats">
      <div className="bt-container">
        <div className="section-head reveal">
          <div className="section-eyebrow">CIFRE REALE</div>
          <h2 className="section-title">
            Date concrete
            <br />
            despre <span className="blue">ce facem.</span>
          </h2>
        </div>
        <div className="stats-grid">
          <div className="stat-card reveal">
            <div className="stat-num">
              50<span className="plus">+</span>
            </div>
            <div className="stat-label">
              Familii care și-au luat mașina prin noi
            </div>
          </div>
          <div className="stat-card reveal reveal-d1">
            <div className="stat-num">
              3.200<span className="plus">€</span>
            </div>
            <div className="stat-label">Economia medie a unui client B&amp;T</div>
          </div>
          <div className="stat-card reveal reveal-d2">
            <div className="stat-num">
              60K<span className="plus">+</span>
            </div>
            <div className="stat-label">
              Mașini analizate zilnic în piețele europene
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
