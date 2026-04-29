import { NextResponse } from "next/server";
import { MOCK_CARS } from "@/app/api/bot/_mock-cars";

const EXTERNAL_BOT_URL = process.env.AUTO1_BOT_URL;

// How many ms to "simulate" the search taking
const MOCK_SEARCH_DELAY_MS = 5000;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  if (!token) {
    return NextResponse.json({ error: "token required" }, { status: 400 });
  }

  // If external bot is configured, proxy to it
  if (EXTERNAL_BOT_URL) {
    try {
      const res = await fetch(`${EXTERNAL_BOT_URL}/api/results/${token}`);
      const data = await res.json();
      return NextResponse.json(data, { status: res.status });
    } catch {
      return NextResponse.json({ error: "Bot unavailable" }, { status: 502 });
    }
  }

  // Mock mode: decode token and check if delay has passed
  try {
    const payload = JSON.parse(Buffer.from(token, "base64url").toString());
    const elapsed = Date.now() - payload.ts;

    if (elapsed < MOCK_SEARCH_DELAY_MS) {
      return NextResponse.json({ status: "pending" });
    }

    // Filter mock cars based on filters
    const filters = payload.filters ?? {};
    let results = [...MOCK_CARS];

    if (filters.bodyType) {
      results = results.filter(
        (c) => (c as Record<string, unknown>)["_bodyType"]?.toString().toLowerCase() === filters.bodyType.toLowerCase()
      );
    }
    if (filters.brand) {
      results = results.filter(
        (c) => (c as Record<string, unknown>)["_brand"]?.toString().toLowerCase() === filters.brand.toLowerCase()
      );
    }
    if (filters.yearMin) {
      results = results.filter((c) => c.year >= filters.yearMin);
    }
    if (filters.maxPriceEur) {
      results = results.filter((c) => c.priceEur <= filters.maxPriceEur);
    }
    if (filters.fuel && filters.fuel !== "Oricare") {
      results = results.filter(
        (c) => c.fuel.toLowerCase() === filters.fuel.toLowerCase()
      );
    }

    // If no results match, return all mock cars (better UX for demo)
    if (results.length === 0) results = MOCK_CARS;

    return NextResponse.json({
      status: "done",
      searchId: `mock-${payload.ts}`,
      results,
    });
  } catch {
    return NextResponse.json({ error: "Invalid token" }, { status: 400 });
  }
}
