"use client";

import { useEffect, useState, useCallback } from "react";
import type { CarResult } from "@/components/SearchResults";

interface Props {
  car: CarResult;
  onClose: () => void;
}

const INFO_SECTIONS = [
  {
    icon: "menu_book",
    iconColor: "text-ocean-deep",
    bg: "bg-sky-soft",
    title: "Service Book",
    description:
      "Full service history, maintenance records and original documentation are available upon request. Contact us for a complete dossier.",
  },
  {
    icon: "build",
    iconColor: "text-amber-500",
    bg: "bg-amber-50",
    title: "Wear & Condition Details",
    description:
      "Detailed inspection report including tyre depth, brake pad status, interior wear and bodywork condition available on request.",
  },
  {
    icon: "local_shipping",
    iconColor: "text-purple-500",
    bg: "bg-lavender-light",
    title: "Transport & Delivery",
    description:
      "We arrange secure door-to-door transport across Europe. Pricing depends on distance and vehicle class. Get in touch for a quote.",
  },
  {
    icon: "verified",
    iconColor: "text-green-600",
    bg: "bg-mint-dream",
    title: "Full Verification Report",
    description:
      "VIN check, accident history, finance check and multi-point inspection included. Reach out for the complete report.",
  },
];

export default function CarModal({ car, onClose }: Props) {
  const images = car.images?.length ? car.images : [];
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() =>
    setCurrent((i) => (i === 0 ? images.length - 1 : i - 1)),
    [images.length]
  );
  const next = useCallback(() =>
    setCurrent((i) => (i === images.length - 1 ? 0 : i + 1)),
    [images.length]
  );

  // Keyboard navigation
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const price = car.priceEur
    ? `€${car.priceEur.toLocaleString("de-DE")}`
    : "Price on request";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ocean-deep/40 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-[2.5rem] w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl shadow-sky-900/20">

        {/* Close button */}
        <div className="sticky top-0 z-10 flex justify-end p-4 bg-white/80 backdrop-blur-sm rounded-t-[2.5rem]">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-sky-soft flex items-center justify-center text-ocean-deep hover:bg-sky-200 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        <div className="px-8 pb-8 -mt-4">
          {/* Image gallery */}
          {images.length > 0 ? (
            <div className="mb-6">
              {/* Main image */}
              <div className="relative aspect-[16/10] rounded-[1.5rem] overflow-hidden bg-sky-soft mb-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={images[current]}
                  alt={`${car.title} — image ${current + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Counter */}
                <span className="absolute bottom-3 right-4 bg-black/50 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {current + 1} / {images.length}
                </span>
                {/* Prev / Next */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors cursor-pointer shadow"
                    >
                      <span className="material-symbols-outlined text-ocean-deep">chevron_left</span>
                    </button>
                    <button
                      onClick={next}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors cursor-pointer shadow"
                    >
                      <span className="material-symbols-outlined text-ocean-deep">chevron_right</span>
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`shrink-0 w-16 h-12 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        i === current
                          ? "border-ocean-deep shadow-md"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="aspect-[16/10] rounded-[1.5rem] bg-sky-soft flex items-center justify-center mb-6 text-sky-200">
              <span className="material-symbols-outlined" style={{ fontSize: "64px" }}>
                directions_car
              </span>
            </div>
          )}

          {/* Title & price */}
          <h2 className="font-headline font-bold text-2xl text-ocean-deep mb-2 leading-tight">
            {car.title}
          </h2>
          <div className="inline-block bg-buddy-green/20 text-green-700 font-headline font-bold text-2xl px-5 py-1.5 rounded-full mb-6">
            {price}
          </div>

          {/* Specs grid */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { icon: "calendar_month", label: car.year ? String(car.year) : null, name: "Year" },
              { icon: "speed", label: car.km ? `${car.km.toLocaleString("de-DE")} km` : null, name: "Mileage" },
              { icon: "local_gas_station", label: car.fuel, name: "Fuel" },
              { icon: "settings", label: car.gearType, name: "Gearbox" },
              { icon: "bolt", label: car.hp ? `${car.hp} hp` : null, name: "Power" },
              { icon: "palette", label: car.colour, name: "Colour" },
              { icon: "door_front", label: car.doors ? `${car.doors} doors` : null, name: "Doors" },
            ]
              .filter((s) => s.label)
              .map((s) => (
                <div key={s.name} className="bg-sky-soft rounded-2xl p-3 text-center">
                  <span
                    className="material-symbols-outlined text-ocean-deep block mb-1"
                    style={{ fontSize: "20px" }}
                  >
                    {s.icon}
                  </span>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide mb-0.5">
                    {s.name}
                  </p>
                  <p className="text-sm font-bold text-ocean-deep">{s.label}</p>
                </div>
              ))}
          </div>

          {/* Info sections */}
          <div className="space-y-3 mb-8">
            {INFO_SECTIONS.map((s) => (
              <div key={s.title} className={`${s.bg} rounded-2xl p-5 flex gap-4 items-start`}>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <span className={`material-symbols-outlined ${s.iconColor}`} style={{ fontSize: "20px" }}>
                    {s.icon}
                  </span>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-ocean-deep mb-1">{s.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="bg-ocean-deep rounded-[1.5rem] p-6 text-center">
            <span className="text-3xl block mb-3">👋</span>
            <h3 className="font-headline font-bold text-white text-xl mb-2">
              Want the full picture?
            </h3>
            <p className="text-sky-100 text-sm mb-5">
              Contact us for service history, full inspection report, transport quote and anything else you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/40700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-buddy-green text-green-900 px-6 py-3 rounded-full font-headline font-bold hover:scale-105 transition-all shadow-lg shadow-green-900/20"
              >
                <span className="material-symbols-outlined text-base">forum</span>
                WhatsApp Us
              </a>
              <a
                href="mailto:contact@btconcierge.ro"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border-2 border-white/20 px-6 py-3 rounded-full font-headline font-bold hover:bg-white/20 transition-all"
              >
                <span className="material-symbols-outlined text-base">mail</span>
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
