import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Post from "@/lib/models/Post";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { title, slug, date, excerpt, content } = body;

  if (!title || !slug || !date || !excerpt || !content) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 },
    );
  }

  try {
    await connectDB();
    const post = await Post.create({ title, slug, date, excerpt, content });
    return NextResponse.json({ success: true, post }, { status: 201 });
  } catch (error: any) {
    if (error.code === 11000) {
      return NextResponse.json(
        { error: "A post with this slug already exists" },
        { status: 400 },
      );
    }
    return NextResponse.json(
      { error: "Failed to create post", details: error.message },
      { status: 500 },
    );
  }
}
