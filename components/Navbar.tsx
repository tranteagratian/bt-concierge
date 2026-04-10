export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl rounded-full bg-white/80 backdrop-blur-xl border border-sky-100/50 z-50 flex justify-between items-center px-6 py-3 shadow-lg shadow-sky-900/5">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-buddy-green rounded-full flex items-center justify-center">
          <span
            className="material-symbols-outlined text-white text-xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            directions_car
          </span>
        </div>
        <span className="text-xl font-headline font-bold tracking-tight text-ocean-deep">
          B&T Concierge
        </span>
      </div>

      {/* Links */}
      <div className="hidden md:flex gap-8 items-center font-semibold text-ocean-deep/70">
        <a
          href="#how-it-works"
          className="hover:text-ocean-deep transition-colors"
        >
          How it works
        </a>
        <a href="#pricing" className="hover:text-ocean-deep transition-colors">
          Simple Pricing
        </a>
        <a href="#service" className="hover:text-ocean-deep transition-colors">
          Service
        </a>
      </div>

      {/* CTA */}
      <button className="bg-ocean-deep text-white px-6 py-2 rounded-full font-headline font-semibold hover:bg-sky-800 transition-all shadow-md shadow-sky-900/20 cursor-pointer">
        Hi! Let&apos;s talk
      </button>
    </nav>
  );
}
