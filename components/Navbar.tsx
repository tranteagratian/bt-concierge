export default function Navbar() {
  return (
    <nav className="bt-nav">
      <div className="bt-nav-inner">
        <a href="/" className="logo">
          <span className="logo-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 17h14l-1.5-5.5a2 2 0 0 0-1.9-1.5H8.4a2 2 0 0 0-1.9 1.5L5 17Z" />
              <path d="M5 17v2M19 17v2" />
              <circle cx="8" cy="17" r="1.6" fill="currentColor" />
              <circle cx="16" cy="17" r="1.6" fill="currentColor" />
            </svg>
          </span>
          <span>B&amp;T Concierge</span>
        </a>

        <div className="nav-links">
          <a href="#cum">Procesul</a>
          <a href="#preturi">Prețuri</a>
          <a href="#servicii">Extra</a>
        </div>

        <a
          href="https://wa.me/40700000000"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          Stai de vorbă
        </a>
      </div>
    </nav>
  );
}
