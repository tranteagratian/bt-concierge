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
    <section ref={sectionRef} className="results-section">
      <div className="bt-container">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            className="eyebrow"
            style={{ justifyContent: "center", marginBottom: 20, display: "inline-flex" }}
          >
            Căutare finalizată
          </span>
          <h2
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: "clamp(40px, 5vw, 72px)",
              lineHeight: 1,
              letterSpacing: "-0.03em",
              margin: "0 0 16px",
              color: "var(--ink)",
            }}
          >
            Am găsit <em>{results.length} mașini</em> pentru tine.
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "var(--mute)",
              maxWidth: 540,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Direct de pe Auto1 B2B — selecție live, fără intermediari.
          </p>
        </div>

        {results.length === 0 ? (
          <div
            style={{
              background: "var(--cream-warm)",
              borderRadius: 8,
              padding: 64,
              textAlign: "center",
              border: "1px solid var(--line)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 26,
                marginBottom: 12,
                letterSpacing: "-0.02em",
              }}
            >
              Nicio mașină nu s-a potrivit cu filtrele tale.
            </h3>
            <p style={{ color: "var(--mute)", marginBottom: 32 }}>
              Încearcă să relaxezi câteva criterii și caută din nou.
            </p>
            <button onClick={onClose} className="btn-primary">
              Încearcă din nou
            </button>
          </div>
        ) : (
          <>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: 24,
              }}
            >
              {results.map((car) => (
                <CarCard key={car.id} car={car} onClick={() => setSelectedCar(car)} />
              ))}
            </div>
            <div style={{ marginTop: 64, textAlign: "center" }}>
              <button onClick={onClose} className="btn-ghost">
                Caută din nou
              </button>
            </div>
          </>
        )}
      </div>

      {selectedCar && <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />}
    </section>
  );
}

function CarCard({ car, onClick }: { car: CarResult; onClick: () => void }) {
  const image = car.images?.[0];

  return (
    <div className="result-card" onClick={onClick}>
      <div className="result-img">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={car.title} />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 200,
            }}
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--line-strong)" strokeWidth="1">
              <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" />
              <rect x="9" y="11" width="14" height="10" rx="2" />
              <circle cx="12" cy="20" r="1" />
              <circle cx="20" cy="20" r="1" />
            </svg>
          </div>
        )}
      </div>
      <div className="result-content">
        <h3
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 18,
            letterSpacing: "-0.015em",
            marginBottom: 8,
            lineHeight: 1.25,
            color: "var(--ink)",
          }}
        >
          {car.title}
        </h3>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20, marginTop: 12 }}>
          {car.year && <span className="spec-pill">{car.year}</span>}
          {car.km && <span className="spec-pill">{car.km.toLocaleString("de-DE")} km</span>}
          {car.fuel && <span className="spec-pill">{car.fuel}</span>}
          {car.gearType && <span className="spec-pill">{car.gearType}</span>}
          {car.hp && <span className="spec-pill">{car.hp} CP</span>}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
            paddingTop: 16,
            borderTop: "1px solid var(--line)",
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            fontWeight: 500,
            color: "var(--ink)",
          }}
        >
          <span>Vezi detalii și galerie</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
