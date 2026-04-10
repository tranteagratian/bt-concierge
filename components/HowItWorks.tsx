const steps = [
  {
    icon: "chat_bubble",
    color: "bg-sky-100",
    iconColor: "text-ocean-deep",
    title: "1. Let's Chat",
    description:
      "Tell us your favorite colors, models, and budget over a quick chat.",
  },
  {
    icon: "search",
    color: "bg-buddy-green",
    iconColor: "text-green-700",
    title: "2. We Explore",
    description:
      "We scout the massive Auto1 platform for the hidden gems.",
  },
  {
    icon: "verified_user",
    color: "bg-lavender-light",
    iconColor: "text-purple-600",
    title: "3. We Verify",
    description:
      "No surprises! We check every document and mechanical detail for you.",
  },
  {
    icon: "payments",
    color: "bg-coral-soft",
    iconColor: "text-rose-500",
    title: "4. Tiny Fee",
    description: "Pay our 300€ service fee only when you find 'The One'.",
  },
  {
    icon: "celebration",
    color: "bg-mint-dream",
    iconColor: "text-green-600",
    title: "5. You Celebrate!",
    description:
      "Pick up your keys! We handle the final paperwork and delivery.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-32 bg-white overflow-hidden" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-ocean-deep mb-6">
            A Playful Journey to Your New Car
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            We&apos;ve simplified the car buying process into 5 cheerful steps.
            No stress, just success!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {steps.map((step) => (
            <div key={step.title} className="text-center group">
              <div
                className={`${step.color} w-24 h-24 rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] mx-auto mb-8 flex items-center justify-center group-hover:scale-110 transition-transform`}
              >
                <span
                  className={`material-symbols-outlined text-4xl ${step.iconColor}`}
                  style={{ fontVariationSettings: "'opsz' 48" }}
                >
                  {step.icon}
                </span>
              </div>
              <h3 className="font-headline font-bold text-xl text-ocean-deep mb-3">
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm px-4 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
