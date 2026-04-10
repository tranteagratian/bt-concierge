export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-buddy-green rounded-full flex items-center justify-center">
              <span
                className="material-symbols-outlined text-white text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                directions_car
              </span>
            </div>
            <span className="text-lg font-headline font-bold text-ocean-deep">
              B&T Concierge
            </span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Making car buying friendly and fair for everyone. © 2024 B&T Prime
            Solutions SRL.
          </p>
        </div>

        {/* About */}
        <div>
          <h4 className="font-bold text-ocean-deep mb-6">About Us</h4>
          <ul className="space-y-4 text-sm text-slate-500 font-medium">
            <li>
              <a href="#" className="hover:text-ocean-deep transition-colors">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-ocean-deep transition-colors">
                Success Stories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-ocean-deep transition-colors">
                The B2B Advantage
              </a>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="font-bold text-ocean-deep mb-6">Help &amp; Support</h4>
          <ul className="space-y-4 text-sm text-slate-500 font-medium">
            <li>
              <a href="#" className="hover:text-ocean-deep transition-colors">
                Pricing FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-ocean-deep transition-colors">
                Privacy Stuff
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-ocean-deep transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-bold text-ocean-deep mb-6">
            Follow Our Journeys
          </h4>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-ocean-deep hover:border-ocean-deep transition-all"
            >
              <span className="material-symbols-outlined text-lg">public</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-ocean-deep hover:border-ocean-deep transition-all"
            >
              <span className="material-symbols-outlined text-lg">mail</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
