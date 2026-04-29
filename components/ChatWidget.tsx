"use client";

import { useState, useRef, useEffect } from "react";
import type { CarResult } from "@/components/SearchResults";

interface Message {
  from: "bot" | "user";
  text: string;
}

interface Filters {
  bodyType?: string;
  brand?: string;
  yearMin?: number;
  maxPriceEur?: number;
  fuel?: string;
}

type Step =
  | "bodyType"
  | "brand"
  | "yearMin"
  | "price"
  | "fuel"
  | "name"
  | "phone"
  | "searching"
  | "done"
  | "error";

const BODY_OPTIONS = ["SUV", "Sedan", "Hatchback", "Break", "Coupe", "Van"];
const BRAND_OPTIONS = [
  "Orice", "BMW", "Volkswagen", "Audi", "Mercedes",
  "Toyota", "Ford", "Renault", "Skoda", "Hyundai", "Kia", "Volvo",
];
const FUEL_OPTIONS = ["Diesel", "Benzină", "Hybrid", "Electric", "Oricare"];

const INITIAL_MESSAGES: Message[] = [
  { from: "bot", text: "Bună ziua. Sunt aici să vă ajut să găsiți mașina potrivită." },
  { from: "bot", text: "Ce tip de caroserie luați în considerare?" },
];

interface Props {
  onResults: (cars: CarResult[]) => void;
}

export default function ChatWidget({ onResults }: Props) {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [step, setStep] = useState<Step>("bodyType");
  const [filters, setFilters] = useState<Filters>({});
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [input, setInput] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [pollCount, setPollCount] = useState(0);

  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = messagesRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages]);

  useEffect(() => {
    if (step !== "searching" || !token) return;
    const interval = setInterval(async () => {
      try {
        const res = await fetch(`/api/bot/results?token=${token}`);
        const data = await res.json();
        if (data.status === "done") {
          clearInterval(interval);
          const cars: CarResult[] = data.results ?? [];
          if (data.searchId) {
            fetch("/api/bot/leads", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ searchId: data.searchId, name: clientName, phone: clientPhone }),
            }).catch(() => {});
          }
          addBotMessage(
            cars.length > 0
              ? `Am găsit ${cars.length} mașini potrivite. Derulează în jos pentru detalii.`
              : "Nicio mașină nu s-a potrivit cu criteriile. Încearcă să relaxezi câteva opțiuni."
          );
          onResults(cars);
          setStep("done");
        } else if (data.status === "error") {
          clearInterval(interval);
          addBotMessage("Ceva nu a mers bine. Te rog încearcă din nou.");
          setStep("error");
        } else {
          setPollCount((n) => n + 1);
        }
      } catch {
        clearInterval(interval);
        addBotMessage("Nu am putut contacta serverul. Te rog încearcă din nou.");
        setStep("error");
      }
    }, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, token]);

  function addBotMessage(text: string) {
    setMessages((prev) => [...prev, { from: "bot", text }]);
  }
  function addUserMessage(text: string) {
    setMessages((prev) => [...prev, { from: "user", text }]);
  }
  function advanceTo(nextStep: Step, botMessage: string) {
    addBotMessage(botMessage);
    setStep(nextStep);
  }

  function handleQuickReply(value: string) {
    addUserMessage(value);
    if (step === "bodyType") {
      setFilters((f) => ({ ...f, bodyType: value === "Any" ? undefined : value }));
      advanceTo("brand", "Notat. Aveți o marcă preferată?");
    } else if (step === "brand") {
      setFilters((f) => ({ ...f, brand: value === "Orice" ? undefined : value }));
      advanceTo("yearMin", "De la ce an de fabricație? (ex: 2018)");
    } else if (step === "fuel") {
      setFilters((f) => ({ ...f, fuel: value === "Oricare" ? undefined : value }));
      advanceTo("name", "Aproape gata. Cum vă numiți?");
    }
  }

  async function handleSend() {
    const val = input.trim();
    if (!val) return;
    setInput("");
    addUserMessage(val);
    if (step === "yearMin") {
      const year = parseInt(val.replace(/\D/g, ""));
      if (isNaN(year) || year < 2000 || year > 2025) {
        addBotMessage("Te rog introdu un an valid între 2000 și 2025.");
        return;
      }
      setFilters((f) => ({ ...f, yearMin: year }));
      advanceTo("price", "Care este bugetul tău maxim în €?");
    } else if (step === "price") {
      const price = parseInt(val.replace(/\D/g, ""));
      if (isNaN(price) || price <= 0) {
        addBotMessage("Te rog introdu un număr valid, ex: 15000");
        return;
      }
      setFilters((f) => ({ ...f, maxPriceEur: price }));
      advanceTo("fuel", "Ce combustibil preferi?");
    } else if (step === "name") {
      if (val.length < 2) { addBotMessage("Te rog introdu cel puțin prenumele tău."); return; }
      setClientName(val);
      advanceTo("phone", `Mulțumim, ${val}. Care este numărul de telefon la care putem reveni?`);
    } else if (step === "phone") {
      const digits = val.replace(/\D/g, "");
      if (digits.length < 9) { addBotMessage("Te rog introdu un număr de telefon valid (minim 9 cifre)."); return; }
      setClientPhone(val);
      addBotMessage("Mulțumim. Începem căutarea pe Auto1 — durează 30–60 de secunde.");
      setStep("searching");
      startSearch(clientName, val);
    }
  }

  async function startSearch(name: string, phone: string) {
    try {
      const res = await fetch("/api/bot/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ clientName: `${name} | ${phone}`, filters }),
      });
      const data = await res.json();
      if (data.token) {
        setToken(data.token);
      } else {
        addBotMessage("Nu am putut porni căutarea. Te rog încearcă din nou.");
        setStep("error");
      }
    } catch {
      addBotMessage("Nu am putut contacta serverul. Te rog încearcă din nou.");
      setStep("error");
    }
  }

  const showInput = ["yearMin", "price", "name", "phone"].includes(step);
  const inputType = ["yearMin", "price"].includes(step) ? "number" : step === "phone" ? "tel" : "text";
  const placeholder =
    step === "yearMin" ? "An minim, ex: 2018"
    : step === "price" ? "Buget maxim în €, ex: 15.000"
    : step === "name" ? "Numele dumneavoastră..."
    : step === "phone" ? "Număr de telefon..."
    : "Răspundeți aici...";

  return (
    <div className="phone-mockup">
      <div className="phone-screen">
        {/* Header */}
        <div className="phone-header">
          <div className="bot-avatar-circle">
            <img src="/matei-bot.png" alt="Matei" />
          </div>
          <div>
            <div className="bot-name-text">Matei</div>
            <div className="bot-status-text">
              {step === "searching"
                ? `Caut pe Auto1${".".repeat((pollCount % 3) + 1)}`
                : "Online · răspunde în câteva secunde"}
            </div>
          </div>
        </div>

        {/* Messages */}
        <div ref={messagesRef} className="phone-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`msg-bubble ${msg.from}`}>
              {msg.text}
              <div className="msg-time">{new Date().getHours()}:{String(new Date().getMinutes()).padStart(2, "0")}</div>
            </div>
          ))}

          {step === "searching" && (
            <div className="typing-dots">
              <span /><span /><span />
            </div>
          )}

          {step === "bodyType" && (
            <div className="chip-grid">
              {BODY_OPTIONS.map((opt) => (
                <button key={opt} className="opt-chip" onClick={() => handleQuickReply(opt)}>
                  {opt}
                </button>
              ))}
            </div>
          )}
          {step === "brand" && (
            <div className="chip-grid">
              {BRAND_OPTIONS.map((opt) => (
                <button key={opt} className="opt-chip" onClick={() => handleQuickReply(opt)}>
                  {opt}
                </button>
              ))}
            </div>
          )}
          {step === "fuel" && (
            <div className="chip-grid">
              {FUEL_OPTIONS.map((opt) => (
                <button key={opt} className="opt-chip" onClick={() => handleQuickReply(opt)}>
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Input */}
        <div className="phone-input-row">
          <input
            type={inputType}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder={placeholder}
            disabled={!showInput}
            className="phone-input"
          />
          <button
            onClick={handleSend}
            disabled={!showInput || !input.trim()}
            className="phone-send-btn"
          >
            →
          </button>
        </div>

        {(step === "done" || step === "error") && (
          <button
            onClick={() => {
              setMessages(INITIAL_MESSAGES);
              setStep("bodyType");
              setFilters({});
              setClientName(""); setClientPhone(""); setToken(null); setPollCount(0);
            }}
            className="phone-reset-btn"
          >
Caută din nou
          </button>
        )}
      </div>
    </div>
  );
}
