import { NextResponse } from "next/server";

const EXTERNAL_BOT_URL = process.env.AUTO1_BOT_URL;

export async function POST(request: Request) {
  const body = await request.json();

  // If external bot is configured, proxy to it
  if (EXTERNAL_BOT_URL) {
    try {
      const res = await fetch(`${EXTERNAL_BOT_URL}/api/leads`, {
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

  // Mock mode: just log and confirm
  console.log("[leads] New lead:", body);
  return NextResponse.json({ ok: true });
}
