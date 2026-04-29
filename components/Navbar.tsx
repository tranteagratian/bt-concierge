export default function Navbar() {
  return (
    <nav className="bt-nav">
      <div className="bt-nav-inner">
        <a href="/" className="logo" aria-label="B&T Concierge">
          <img src="/logo.png" alt="B&T Concierge" className="logo-img" />
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
