import { NextResponse } from "next/server";

const BOT_URL = process.env.AUTO1_BOT_URL ?? "http://localhost:3000";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  if (!token) {
    return NextResponse.json({ error: "token required" }, { status: 400 });
  }

  try {
    const res = await fetch(`${BOT_URL}/api/results/${token}`);
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json({ error: "Bot unavailable" }, { status: 502 });
  }
}
