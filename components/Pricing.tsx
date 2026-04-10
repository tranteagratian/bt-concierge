export default function Pricing() {
  return (
    <section className="py-24 bg-lavender-light/30" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[3rem] p-12 shadow-xl shadow-purple-900/5 border border-purple-50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left: copy */}
            <div>
              <h2 className="font-headline text-4xl font-bold text-ocean-deep mb-6">
                Honest Pricing for Kind People
              </h2>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                Dealers usually hide their profits in the car&apos;s price. We
                think that&apos;s silly. We just charge one flat fee for our
                expert help.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-buddy-green/20 flex items-center justify-center text-green-600 shrink-0">
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-ocean-deep text-lg">
                      No Hidden Margins
                    </h4>
                    <p className="text-sm text-slate-400">
                      You pay what we pay. Pure and simple.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                    <span className="material-symbols-outlined">lock_open</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-ocean-deep text-lg">
                      Full Access
                    </h4>
                    <p className="text-sm text-slate-400">
                      Shop from dealer-only platforms where cars are cheaper.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: comparison */}
            <div className="relative">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-buddy-green/10 rounded-full blur-3xl" />
                <div className="space-y-6 relative z-10">
                  <div className="flex justify-between items-center text-sm font-bold text-slate-400 uppercase tracking-widest">
                    <span>Typical Dealer</span>
                    <span className="text-ocean-deep">B&T Way</span>
                  </div>
                  <div className="h-px bg-slate-200" />
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Car Price</span>
                    <div className="flex gap-12">
                      <span className="font-bold">20,000€</span>
                      <span className="font-bold text-ocean-deep">20,000€</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm">
                    <span className="text-slate-500">Service Fee</span>
                    <div className="flex gap-12">
                      <span className="font-bold text-rose-400">+3,500€</span>
                      <span className="font-bold text-green-500">+300€</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <span className="font-headline font-bold text-xl">
                      Total Pay
                    </span>
                    <div className="flex gap-12 items-baseline">
                      <span className="font-bold text-slate-400 line-through">
                        23,500€
                      </span>
                      <span className="font-headline font-bold text-3xl text-ocean-deep">
                        20,300€
                      </span>
                    </div>
                  </div>
                  <div className="bg-buddy-green text-green-900 font-bold py-4 rounded-2xl text-center shadow-lg shadow-green-500/20">
                    🥳 You save 3,200€!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
