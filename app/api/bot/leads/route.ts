import { NextResponse } from "next/server";

const BOT_URL = process.env.AUTO1_BOT_URL ?? "http://localhost:3000";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const res = await fetch(`${BOT_URL}/api/leads`, {
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
