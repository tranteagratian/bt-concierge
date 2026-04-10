const WORKSHOP_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCbJBrXn7qNBJ1dJZclgDq_-Y9eCP1uUUdY-W3wtzrZKEaLxiDmnD7tycG3JswIERdnbWV_d6JL4uWwIJaHPUOqFlte5pG0whXHaQCIdzgNTKeI1Fg11tq1F9RZMRTWjUaCVU9vi0Z3FVxN2E51yYcobLSLf1B9Sfn0PAmyamgNuFUz-_51GK804pumiqbRU_GpQz1wqyMmm31rA2-LADky2EY5sO5oHguRGm04SLG_C0ApY9BAhOBQ6kE4D6cUP-5Xz_YRUE-czcI";

export default function PartsService() {
  return (
    <section className="py-32 bg-white" id="service">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold text-ocean-deep mb-4">
            We&apos;re Here for the Long Run
          </h2>
          <p className="text-slate-500">
            Beyond finding your car, we keep it happy and healthy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Wholesale Parts card (2 cols) */}
          <div className="md:col-span-2 bg-sky-soft rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center gap-10 border border-sky-100">
            <div className="w-full md:w-1/2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={WORKSHOP_IMAGE}
                alt="Workshop detail"
                className="rounded-3xl shadow-xl w-full aspect-video object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-3xl mb-4 block">🛠️</span>
              <h3 className="font-headline font-bold text-2xl text-ocean-deep mb-4">
                Wholesale Spare Parts
              </h3>
              <p className="text-slate-600 mb-6">
                Need new brakes or a filter? We get you original parts at dealer
                prices. No markup for us, just more savings for you.
              </p>
              <button className="bg-white text-ocean-deep font-bold px-6 py-2 rounded-full border-2 border-sky-200 hover:bg-sky-50 transition-colors cursor-pointer">
                Learn how
              </button>
            </div>
          </div>

          {/* Maintenance guides card */}
          <div className="bg-mint-dream rounded-[2.5rem] p-10 border border-green-100 flex flex-col justify-between">
            <div>
              <span className="text-3xl mb-4 block">📖</span>
              <h3 className="font-headline font-bold text-2xl text-green-800 mb-4">
                Maintenance Guides
              </h3>
              <p className="text-green-900/70">
                Personalized step-by-step care plans for your specific car
                model. We show you exactly what to check and when.
              </p>
            </div>
            <div className="mt-8 flex justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-green-600 shadow-sm">
                <span className="material-symbols-outlined text-3xl">
                  menu_book
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
