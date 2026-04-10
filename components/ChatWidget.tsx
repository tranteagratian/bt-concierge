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
const FUEL_OPTIONS = ["Diesel", "Petrol", "Hybrid", "Electric", "Oricare"];

const INITIAL_MESSAGES: Message[] = [
  {
    from: "bot",
    text: "👋 Hi there! I'm your concierge. What kind of car are you dreaming of today?",
  },
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

  // Scroll inside chat container only
  useEffect(() => {
    const el = messagesRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages]);

  // Poll for results
  useEffect(() => {
    if (step !== "searching" || !token) return;

    const interval = setInterval(async () => {
      try {
        const res = await fetch(`/api/bot/results?token=${token}`);
        const data = await res.json();

        if (data.status === "done") {
          clearInterval(interval);
          const cars: CarResult[] = data.results ?? [];

          // Save lead now that we have the searchId
          if (data.searchId) {
            fetch("/api/bot/leads", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                searchId: data.searchId,
                name: clientName,
                phone: clientPhone,
              }),
            }).catch(() => {/* non-critical */});
          }

          addBotMessage(
            cars.length > 0
              ? `✅ Found ${cars.length} cars! Scroll down to see them 👇`
              : "🔍 Search done, but no cars matched. Try again with different criteria."
          );
          onResults(cars);
          setStep("done");
        } else if (data.status === "error") {
          clearInterval(interval);
          addBotMessage("😔 Something went wrong. Please try again.");
          setStep("error");
        } else {
          setPollCount((n) => n + 1);
        }
      } catch {
        clearInterval(interval);
        addBotMessage("😔 Couldn't reach the bot. Please try again.");
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
      advanceTo("brand", `Great choice! Any preferred brand?`);
    } else if (step === "brand") {
      setFilters((f) => ({ ...f, brand: value === "Orice" ? undefined : value }));
      advanceTo("yearMin", "What's the minimum year? (e.g. 2018)");
    } else if (step === "fuel") {
      setFilters((f) => ({ ...f, fuel: value === "Oricare" ? undefined : value }));
      advanceTo("name", "Almost there! 😊 What's your name?");
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
        addBotMessage("Please enter a valid year between 2000 and 2025.");
        return;
      }
      setFilters((f) => ({ ...f, yearMin: year }));
      advanceTo("price", "What's your maximum budget in €?");

    } else if (step === "price") {
      const price = parseInt(val.replace(/\D/g, ""));
      if (isNaN(price) || price <= 0) {
        addBotMessage("Please enter a valid number, e.g. 15000");
        return;
      }
      setFilters((f) => ({ ...f, maxPriceEur: price }));
      advanceTo("fuel", "Fuel preference?");

    } else if (step === "name") {
      if (val.length < 2) {
        addBotMessage("Please enter at least your first name.");
        return;
      }
      setClientName(val);
      advanceTo("phone", `Nice to meet you, ${val}! 📱 What's your phone number so we can reach you?`);

    } else if (step === "phone") {
      const digits = val.replace(/\D/g, "");
      if (digits.length < 9) {
        addBotMessage("Please enter a valid phone number (at least 9 digits).");
        return;
      }
      setClientPhone(val);
      addBotMessage("🔍 Perfect! I'm searching Auto1 now — usually takes 30–60 seconds...");
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
        addBotMessage("😔 Couldn't start the search. Please try again.");
        setStep("error");
      }
    } catch {
      addBotMessage("😔 Couldn't reach the bot. Please try again.");
      setStep("error");
    }
  }

  function QuickReplies({ options }: { options: string[] }) {
    return (
      <div className="flex flex-wrap gap-2 mt-3">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => handleQuickReply(opt)}
            className="px-4 py-2 rounded-full bg-sky-soft border border-sky-200 text-ocean-deep text-sm font-semibold hover:bg-ocean-deep hover:text-white transition-all cursor-pointer"
          >
            {opt}
          </button>
        ))}
      </div>
    );
  }

  const showInput = ["yearMin", "price", "name", "phone"].includes(step);
  const inputType = ["yearMin", "price"].includes(step) ? "number" : step === "phone" ? "tel" : "text";
  const placeholder =
    step === "yearMin" ? "Minimum year, e.g. 2018"
    : step === "price" ? "Max price in €, e.g. 15000"
    : step === "name" ? "Your name..."
    : step === "phone" ? "Your phone number..."
    : "Type your dream car...";

  return (
    <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-sky-900/10 p-8 border border-sky-50 relative">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 border-b border-slate-50 pb-4">
        <div className="w-10 h-10 rounded-full bg-buddy-green flex items-center justify-center">
          <span className="material-symbols-outlined text-white">face</span>
        </div>
        <div>
          <h3 className="font-headline font-bold text-ocean-deep">Car Finder Bot</h3>
          <p className="text-xs text-green-500 flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse inline-block" />
            {step === "searching"
              ? `Searching Auto1${".".repeat((pollCount % 3) + 1)}`
              : "Online & ready to help"}
          </p>
        </div>
      </div>

      {/* Messages */}
      <div ref={messagesRef} className="h-72 overflow-y-auto pr-1 space-y-1">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={msg.from === "bot" ? "chat-bubble-left text-sm" : "chat-bubble-right text-sm"}
          >
            {msg.text}
          </div>
        ))}

        {step === "searching" && (
          <div className="chat-bubble-left text-sm flex items-center gap-2 text-slate-400">
            <span className="w-2 h-2 bg-sky-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
            <span className="w-2 h-2 bg-sky-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
            <span className="w-2 h-2 bg-sky-400 rounded-full animate-bounce" />
          </div>
        )}

        {step === "bodyType" && <QuickReplies options={BODY_OPTIONS} />}
        {step === "brand"    && <QuickReplies options={BRAND_OPTIONS} />}
        {step === "fuel"     && <QuickReplies options={FUEL_OPTIONS} />}
      </div>

      {/* Input */}
      <div className="mt-6 flex gap-3">
        <input
          type={inputType}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder={placeholder}
          disabled={!showInput}
          className="flex-1 bg-slate-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-sky-200 font-medium text-sm outline-none disabled:opacity-40"
        />
        <button
          onClick={handleSend}
          disabled={!showInput || !input.trim()}
          className="w-14 h-14 bg-ocean-deep text-white rounded-2xl flex items-center justify-center shadow-lg shadow-sky-900/20 hover:bg-sky-800 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <span className="material-symbols-outlined">send</span>
        </button>
      </div>

      {(step === "done" || step === "error") && (
        <button
          onClick={() => {
            setMessages(INITIAL_MESSAGES);
            setStep("bodyType");
            setFilters({});
            setClientName("");
            setClientPhone("");
            setToken(null);
            setPollCount(0);
          }}
          className="mt-4 w-full text-center text-sm text-ocean-deep/60 hover:text-ocean-deep transition-colors cursor-pointer"
        >
          ↺ Start a new search
        </button>
      )}
    </div>
  );
}
