"use client";

import { useEffect, useState, useCallback } from "react";
import type { CarResult } from "@/components/SearchResults";

interface Props {
  car: CarResult;
  onClose: () => void;
}

const INFO_SECTIONS = [
  {
    title: "Carte service",
    description:
      "Istoricul complet de service, evidența întreținerii și documentele originale, disponibile la cerere.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M9 13h6M9 17h6" />
      </svg>
    ),
  },
  {
    title: "Stare și uzură",
    description:
      "Raport detaliat de inspecție: anvelope, plăcuțe de frână, interior și caroserie, fără surprize.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Transport și livrare",
    description:
      "Organizăm transport securizat, din ușă în ușă, în toată Europa. Solicitați o ofertă personalizată.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="1" y="3" width="15" height="13" />
        <path d="M16 8h4l3 3v5h-7zM5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM18.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
      </svg>
    ),
  },
  {
    title: "Raport complet de verificare",
    description:
      "Verificare VIN, istoric accidente, control financiar și inspecție tehnică completă, incluse.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

export default function CarModal({ car, onClose }: Props) {
  const images = car.images?.length ? car.images : [];
  const [current, setCurrent] = useState(0);

  const prev = useCallback(
    () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1)),
    [images.length]
  );
  const next = useCallback(
    () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1)),
    [images.length]
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        background: "rgba(14, 14, 14, 0.6)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        style={{
          background: "var(--cream)",
          borderRadius: 8,
          width: "100%",
          maxWidth: 760,
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow: "var(--shadow-lift)",
          border: "1px solid var(--line)",
        }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            display: "flex",
            justifyContent: "flex-end",
            padding: 16,
            background: "rgba(245, 241, 234, 0.94)",
            backdropFilter: "blur(8px)",
            borderRadius: "8px 8px 0 0",
          }}
        >
          <button
            onClick={onClose}
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "1px solid var(--line)",
              background: "var(--paper)",
              cursor: "pointer",
              display: "grid",
              placeItems: "center",
              fontSize: 16,
              color: "var(--ink)",
              fontFamily: "var(--font-sans)",
            }}
          >
            ✕
          </button>
        </div>

        <div style={{ padding: "0 36px 36px", marginTop: -8 }}>
          {images.length > 0 ? (
            <div style={{ marginBottom: 28 }}>
              <div
                style={{
                  position: "relative",
                  aspectRatio: "16/10",
                  borderRadius: 8,
                  overflow: "hidden",
                  background: "var(--cream-warm)",
                  marginBottom: 12,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={images[current]}
                  alt={`${car.title} — ${current + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <span
                  style={{
                    position: "absolute",
                    bottom: 12,
                    right: 16,
                    background: "rgba(14, 14, 14, 0.75)",
                    color: "var(--cream)",
                    padding: "4px 12px",
                    borderRadius: 999,
                    fontSize: 11,
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {current + 1} / {images.length}
                </span>
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      style={{
                        position: "absolute",
                        left: 12,
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: "rgba(245, 241, 234, 0.94)",
                        border: "1px solid var(--line)",
                        cursor: "pointer",
                        fontSize: 16,
                      }}
                    >
                      ‹
                    </button>
                    <button
                      onClick={next}
                      style={{
                        position: "absolute",
                        right: 12,
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: "rgba(245, 241, 234, 0.94)",
                        border: "1px solid var(--line)",
                        cursor: "pointer",
                        fontSize: 16,
                      }}
                    >
                      ›
                    </button>
                  </>
                )}
              </div>
              {images.length > 1 && (
                <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4 }}>
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      style={{
                        flexShrink: 0,
                        width: 64,
                        height: 48,
                        borderRadius: 6,
                        overflow: "hidden",
                        border:
                          i === current ? "2px solid var(--terracotta)" : "1px solid var(--line)",
                        opacity: i === current ? 1 : 0.65,
                        cursor: "pointer",
                        padding: 0,
                        transition: "all .2s",
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div
              style={{
                aspectRatio: "16/10",
                borderRadius: 8,
                background: "var(--cream-warm)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 28,
              }}
            >
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="var(--line-strong)" strokeWidth="1">
                <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" />
                <rect x="9" y="11" width="14" height="10" rx="2" />
                <circle cx="12" cy="20" r="1" />
                <circle cx="20" cy="20" r="1" />
              </svg>
            </div>
          )}

          <h2
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 32,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              marginBottom: 12,
              color: "var(--ink)",
            }}
          >
            {car.title}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1,
              background: "var(--line)",
              border: "1px solid var(--line)",
              borderRadius: 8,
              overflow: "hidden",
              marginBottom: 36,
            }}
          >
            {[
              { label: "An", value: car.year ? String(car.year) : null },
              { label: "Rulaj", value: car.km ? `${car.km.toLocaleString("de-DE")} km` : null },
              { label: "Combustibil", value: car.fuel },
              { label: "Cutie", value: car.gearType },
              { label: "Putere", value: car.hp ? `${car.hp} CP` : null },
              { label: "Culoare", value: car.colour },
              { label: "Uși", value: car.doors ? `${car.doors}` : null },
            ]
              .filter((s) => s.value)
              .map((s) => (
                <div
                  key={s.label}
                  style={{
                    background: "var(--paper)",
                    padding: "16px 18px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 10,
                      color: "var(--mute)",
                      marginBottom: 6,
                      textTransform: "uppercase",
                      letterSpacing: "0.16em",
                      margin: 0,
                    }}
                  >
                    {s.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 16,
                      fontWeight: 500,
                      color: "var(--ink)",
                      margin: "4px 0 0",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {s.value}
                  </p>
                </div>
              ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 1, marginBottom: 36, background: "var(--line)", border: "1px solid var(--line)", borderRadius: 8, overflow: "hidden" }}>
            {INFO_SECTIONS.map((s) => (
              <div
                key={s.title}
                style={{
                  background: "var(--paper)",
                  padding: 22,
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    flexShrink: 0,
                    color: "var(--terracotta)",
                  }}
                >
                  {s.icon}
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 500,
                      fontSize: 16,
                      letterSpacing: "-0.01em",
                      margin: "0 0 4px",
                      color: "var(--ink)",
                    }}
                  >
                    {s.title}
                  </h4>
                  <p style={{ fontSize: 14, color: "var(--mute)", lineHeight: 1.55, margin: 0 }}>
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              background: "var(--ink)",
              borderRadius: 8,
              padding: 36,
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                color: "var(--cream)",
                fontSize: 24,
                letterSpacing: "-0.02em",
                margin: "0 0 10px",
                lineHeight: 1.15,
              }}
            >
              Doriți toate detaliile?
            </h3>
            <p
              style={{
                color: "rgba(245, 241, 234, 0.7)",
                fontSize: 15,
                margin: "0 0 28px",
                lineHeight: 1.55,
                maxWidth: 460,
                marginInline: "auto",
              }}
            >
              Vă oferim istoricul complet de service, raportul de inspecție și răspunsuri la orice întrebare.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
              <a
                href="https://wa.me/40700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ background: "var(--terracotta)", borderColor: "var(--terracotta)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Scrie pe WhatsApp
              </a>
              <a
                href="mailto:contact@btprime.ro"
                className="btn-secondary"
                style={{
                  color: "var(--cream)",
                  borderColor: "rgba(245, 241, 234, 0.3)",
                }}
              >
                Trimite Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
