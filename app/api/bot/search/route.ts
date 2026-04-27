import { NextResponse } from "next/server";

const EXTERNAL_BOT_URL = process.env.AUTO1_BOT_URL;

// Mock car data matching the CarResult interface
const MOCK_CARS = [
  {
    id: "mock-1",
    title: "Volkswagen Golf 2.0 TDI",
    year: 2021,
    priceEur: 18500,
    km: 45000,
    fuel: "Diesel",
    gearType: "Manual",
    hp: 115,
    colour: "White",
    doors: 5,
    images: ["https://placehold.co/800x500/e0f2fe/0c4a6e?text=VW+Golf+2021"],
    auto1Link: null,
    _bodyType: "Hatchback",
    _brand: "Volkswagen",
  },
  {
    id: "mock-2",
    title: "BMW X3 xDrive20d",
    year: 2020,
    priceEur: 32000,
    km: 62000,
    fuel: "Diesel",
    gearType: "Automatic",
    hp: 190,
    colour: "Black",
    doors: 5,
    images: ["https://placehold.co/800x500/e0f2fe/0c4a6e?text=BMW+X3+2020"],
    auto1Link: null,
    _bodyType: "SUV",
    _brand: "BMW",
  },
  {
    id: "mock-3",
    title: "Toyota RAV4 2.5 Hybrid",
    year: 2022,
    priceEur: 27500,
    km: 28000,
    fuel: "Hybrid",
    gearType: "Automatic",
    hp: 218,
    colour: "Grey",
    doors: 5,
    images: ["https://placehold.co/800x500/e0f2fe/0c4a6e?text=Toyota+RAV4+2022"],
    auto1Link: null,
    _bodyType: "SUV",
    _brand: "Toyota",
  },
  {
    id: "mock-4",
    title: "Skoda Octavia 2.0 TDI",
    year: 2020,
    priceEur: 16900,
    km: 78000,
    fuel: "Diesel",
    gearType: "Manual",
    hp: 150,
    colour: "Blue",
    doors: 4,
    images: ["https://placehold.co/800x500/e0f2fe/0c4a6e?text=Skoda+Octavia+2020"],
    auto1Link: null,
    _bodyType: "Sedan",
    _brand: "Skoda",
  },
  {
    id: "mock-5",
    title: "Audi A4 2.0 TDI S tronic",
    year: 2019,
    priceEur: 24000,
    km: 95000,
    fuel: "Diesel",
    gearType: "Automatic",
    hp: 150,
    colour: "Silver",
    doors: 4,
    images: ["https://placehold.co/800x500/e0f2fe/0c4a6e?text=Audi+A4+2019"],
    auto1Link: null,
    _bodyType: "Sedan",
    _brand: "Audi",
  },
  {
    id: "mock-6",
    title: "Renault Megane 1.5 dCi",
    year: 2021,
    priceEur: 14500,
    km: 38000,
    fuel: "Diesel",
    gearType: "Manual",
    hp: 115,
    colour: "Red",
    doors: 5,
    images: ["https://placehold.co/800x500/e0f2fe/0c4a6e?text=Renault+Megane+2021"],
    auto1Link: null,
    _bodyType: "Hatchback",
    _brand: "Renault",
  },
];

export async function POST(request: Request) {
  const body = await request.json();

  // If external bot is configured, proxy to it
  if (EXTERNAL_BOT_URL) {
    try {
      const res = await fetch(`${EXTERNAL_BOT_URL}/api/search`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      return NextResponse.json(data, { status: res.status });
    } catch {
      return NextResponse.json({ error: "Bot unavailable" }, { status: 502 });
    }
  }

  // Mock mode: encode search params + timestamp into token
  const filters = body.filters ?? {};
  const payload = {
    ts: Date.now(),
    filters,
    clientName: body.clientName ?? "",
  };
  const token = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return NextResponse.json({ token });
}

export { MOCK_CARS };
