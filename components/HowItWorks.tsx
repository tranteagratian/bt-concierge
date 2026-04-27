"use client";

import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    num: "PASUL 01",
    title: "Stăm de vorbă",
    desc: "Pe WhatsApp sau direct cu botul. Vrem să te cunoaștem.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    num: "PASUL 02",
    title: "Căutăm pentru tine",
    desc: "Filtrăm mii de oferte din Europa. Îți trimitem doar ce merită.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    num: "PASUL 03",
    title: "Verificăm cu lupa",
    desc: "Istoric complet, daune, kilometraj real, fișă tehnică, mecanică.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    num: "PASUL 04",
    title: "Confirmi alegerea",
    desc: "Plătești taxa fixă. Niciun adaos, fără surprize.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  {
    num: "PASUL 05",
    title: "Iei cheile acasă",
    desc: "Mașina vine înmatriculată, cu hârtii puse la punct. Drum bun!",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="7.5" cy="15.5" r="5.5" />
        <path d="m21 2-9.6 9.6" />
        <path d="m15.5 7.5 3 3L22 7l-3-3" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          let i = 0;
          setActive(0);
          intervalRef.current = setInterval(() => {
            i = (i + 1) % STEPS.length;
            setActive(i);
          }, 2000);
        } else if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  function handleHover(i: number) {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setActive(i);
  }

  return (
    <section className="journey" id="cum">
      <div className="bt-container">
        <div className="section-head reveal">
          <div className="section-eyebrow">CUM FUNCȚIONEAZĂ</div>
          <h2 className="section-title">
            5 pași până la <span className="blue">cheile tale</span>
          </h2>
          <p className="section-sub">
            Tu ne spui ce ți-ai dori. Restul îl facem noi — pas cu pas, fără
            bătăi de cap, fără surprize la final.
          </p>
        </div>

        <div className="journey-grid" ref={wrapRef}>
          {STEPS.map((s, i) => (
            <div
              key={i}
              className={`journey-step${active === i ? " active" : ""}`}
              onMouseEnter={() => handleHover(i)}
            >
              <div className="js-num">{s.num}</div>
              <div className="js-icon">{s.icon}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
