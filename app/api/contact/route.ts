import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, message } = body;

  // Validate
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 },
    );
  }

  // In a real app you would send an email or save to a database here
  console.log("New message received:", { name, email, message });

  return NextResponse.json(
    { success: true, message: "Message sent successfully!" },
    { status: 200 },
  );
}
