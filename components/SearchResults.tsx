"use client";

import { useEffect, useRef, useState } from "react";
import CarModal from "@/components/CarModal";

export interface CarResult {
  id: string;
  title: string;
  priceEur: number | null;
  year: number | null;
  km: number | null;
  fuel: string | null;
  gearType: string | null;
  hp: number | null;
  colour: string | null;
  doors: number | null;
  images: string[];
  auto1Link: string | null;
}

interface Props {
  results: CarResult[];
  onClose: () => void;
}

export default function SearchResults({ results, onClose }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedCar, setSelectedCar] = useState<CarResult | null>(null);

  useEffect(() => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header — same pattern as HowItWorks / PartsService */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-buddy-green/20 text-green-700 font-bold text-sm mb-6">
            🎉 Search complete
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-ocean-deep mb-4">
            We found{" "}
            <span className="text-green-500">{results.length} cars</span> for
            you!
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">
            Direct from Auto1 B2B — real dealer prices, zero markup.
          </p>
        </div>

        {results.length === 0 ? (
          /* Empty state */
          <div className="bg-sky-soft rounded-[2.5rem] p-16 text-center border border-sky-100">
            <span className="text-5xl block mb-6">🔍</span>
            <h3 className="font-headline font-bold text-2xl text-ocean-deep mb-3">
              No cars matched your filters
            </h3>
            <p className="text-slate-500 mb-8">
              Try relaxing some criteria and search again.
            </p>
            <button
              onClick={onClose}
              className="bg-ocean-deep text-white px-8 py-3 rounded-full font-headline font-semibold hover:bg-sky-800 transition-colors cursor-pointer shadow-md shadow-sky-900/20"
            >
              Try again
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((car) => (
                <CarCard key={car.id} car={car} onClick={() => setSelectedCar(car)} />
              ))}
            </div>

            {/* Bottom reset */}
            <div className="mt-16 text-center">
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 border-2 border-sky-200 text-ocean-deep px-8 py-3 rounded-full font-headline font-semibold hover:bg-sky-50 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">refresh</span>
                Search again
              </button>
            </div>
          </>
        )}
      </div>

      {/* Car detail modal */}
      {selectedCar && (
        <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />
      )}
    </section>
  );
}

function CarCard({ car, onClick }: { car: CarResult; onClick: () => void }) {
  const image = car.images?.[0];
  const price = car.priceEur
    ? `€${car.priceEur.toLocaleString("de-DE")}`
    : "Price on request";

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-[2rem] border border-sky-100 overflow-hidden shadow-md shadow-sky-900/5 hover:shadow-xl hover:shadow-sky-900/10 hover:-translate-y-1 transition-all group cursor-pointer"
    >

      {/* Image */}
      <div className="aspect-[16/10] bg-sky-soft overflow-hidden">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={car.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-sky-200">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "56px" }}
            >
              directions_car
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="font-headline font-bold text-ocean-deep text-lg leading-tight mb-3 line-clamp-2">
          {car.title}
        </h3>

        {/* Price badge */}
        <div className="inline-block bg-buddy-green/20 text-green-700 font-headline font-bold text-xl px-4 py-1 rounded-full mb-5">
          {price}
        </div>

        {/* Specs — pill tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {car.year && <SpecTag icon="calendar_month" label={String(car.year)} />}
          {car.km && (
            <SpecTag
              icon="speed"
              label={`${car.km.toLocaleString("de-DE")} km`}
            />
          )}
          {car.fuel && <SpecTag icon="local_gas_station" label={car.fuel} />}
          {car.gearType && <SpecTag icon="settings" label={car.gearType} />}
          {car.hp && <SpecTag icon="bolt" label={`${car.hp} hp`} />}
          {car.colour && <SpecTag icon="palette" label={car.colour} />}
        </div>

        {/* Click hint */}
        <div className="flex items-center justify-center gap-2 bg-sky-soft text-ocean-deep py-3 rounded-full font-headline font-semibold text-sm group-hover:bg-ocean-deep group-hover:text-white transition-colors">
          <span className="material-symbols-outlined text-base">open_in_full</span>
          View details & gallery
        </div>
      </div>
    </div>
  );
}

function SpecTag({ icon, label }: { icon: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1 bg-sky-soft text-ocean-deep text-xs font-semibold px-3 py-1 rounded-full">
      <span
        className="material-symbols-outlined"
        style={{ fontSize: "13px", fontVariationSettings: "'opsz' 16" }}
      >
        {icon}
      </span>
      {label}
    </span>
  );
}
