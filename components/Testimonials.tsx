const TESTIMONIALS = [
  {
    quote:
      "Mi-au scutit săptămâni de căutare și de stres. Am primit BMW-ul exact cum mi-l doream, cu hârtiile puse la punct și fără surprize.",
    name: "Andrei M.",
    meta: "București · BMW Seria 3",
    savings: "−2.800€",
    av: "a2",
  },
  {
    quote:
      "Prima dată când simt transparență reală pe un proces auto. Mi-au explicat fiecare pas, fără să mă grăbească. Recomand cu toată inima.",
    name: "Roxana T.",
    meta: "Cluj · Audi A4 Avant",
    savings: "−3.200€",
    av: "a3",
  },
  {
    quote:
      "Aveam nevoie urgent de un SUV pentru familie. În trei săptămâni aveam Tiguan-ul în garaj, înmatriculat. Profesionalism real, oameni de cuvânt.",
    name: "Mihai & Ana",
    meta: "Brașov · VW Tiguan",
    savings: "−4.100€",
    av: "a1",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimoniale">
      <div className="bt-container">
        <div className="section-head reveal">
          <div className="section-eyebrow">POVEȘTI REALE</div>
          <h2 className="section-title">
            Oameni ca tine. <span className="blue">Mașini ca ale lor.</span>
          </h2>
          <p className="section-sub">
            Peste 50 de români ne-au lăsat să le găsim mașina potrivită. Iată
            ce au de spus despre experiență.
          </p>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className={`testimonial reveal${i > 0 ? ` reveal-d${i}` : ""}`}
            >
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-quote">{t.quote}</p>
              <div className="testimonial-foot">
                <div className={`avatar ${t.av}`} />
                <div>
                  <div className="name">{t.name}</div>
                  <div className="meta">{t.meta}</div>
                </div>
                <div className="savings-pill">{t.savings}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
