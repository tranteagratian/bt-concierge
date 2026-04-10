export default function CTA() {
  return (
    <section className="py-32 bg-ocean-deep relative overflow-hidden">
      {/* Decorative wave */}
      <div className="absolute inset-0 opacity-10">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="w-20 h-20 bg-buddy-green rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl shadow-green-500/30">
          <span className="material-symbols-outlined text-white text-4xl">
            waving_hand
          </span>
        </div>
        <h2 className="font-headline text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          Ready to meet your <br />
          perfect car?
        </h2>
        <p className="text-sky-100 text-xl mb-12 max-w-xl mx-auto">
          Drop me a line on WhatsApp or start our car-finder bot. It&apos;s
          totally free to browse!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-buddy-green text-green-900 px-10 py-5 rounded-2xl font-headline font-bold text-xl hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-xl shadow-green-900/20 cursor-pointer">
            <span className="material-symbols-outlined">forum</span>
            Chat on WhatsApp
          </button>
          <button className="bg-white/10 backdrop-blur-md text-white border-2 border-white/20 px-10 py-5 rounded-2xl font-headline font-bold text-xl hover:bg-white/20 transition-all flex items-center justify-center gap-3 cursor-pointer">
            <span className="material-symbols-outlined">smart_toy</span>
            Try the Finder Bot
          </button>
        </div>
      </div>
    </section>
  );
}
