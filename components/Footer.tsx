export default function Footer() {
  return (
    <footer className="bt-footer">
      <div className="bt-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-mark">B&amp;T</div>
              <span>Prime</span>
            </div>
            <p>
              Concierge auto pentru cumpărători individuali din România.
              Identificăm, verificăm și aducem mașina dorită din piețele auto
              europene — la prețuri corecte, fără adaosuri ascunse.
            </p>
          </div>
          <div className="footer-col">
            <h4>Servicii</h4>
            <a href="#">Concierge cumpărare</a>
            <a href="#">Piese wholesale</a>
            <a href="#">Mentenanță</a>
            <a href="#">Suport lung</a>
          </div>
          <div className="footer-col">
            <h4>Companie</h4>
            <a href="#">Despre noi</a>
            <a href="#cum">Cum funcționează</a>
            <a href="#testimoniale">Testimoniale</a>
            <a href="#">Blog</a>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a
              href="https://wa.me/40700000000"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a href="mailto:contact@btprime.ro">contact@btprime.ro</a>
            <a href="#">+40 7XX XXX XXX</a>
            <a href="#">București, RO</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 B&amp;T PRIME SOLUTIONS SRL · CUI RO XXXXXX</span>
          <div style={{ display: "flex", gap: 24 }}>
            <a href="#">Termeni</a>
            <a href="#">Confidențialitate</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
