import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json(); 
    if (!body.email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    console.log("📩 New waitlist entry:", body.email);

    return NextResponse.json({ message: "Success! You are on the waitlist." }, { status: 201 });
  } catch (error) {
    console.error("❌ Server error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
