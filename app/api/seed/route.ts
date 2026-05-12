import { connectDB } from "@/lib/db";
import Post from "@/lib/models/Post";
import { NextResponse } from "next/server";

const posts = [
  {
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    date: "May 01, 2026",
    excerpt:
      "Reejaul Hussain: A beginner's guide to building apps with Next.js App Router.",
    content:
      "Next.js is a React framework that gives you routing, SSR, and SSG out of the box. You don't need react-router or a separate backend server for basic APIs.",
  },
  {
    title: "React vs Next.js — What's the difference?",
    slug: "react-vs-nextjs",
    date: "April 20, 2026",
    excerpt:
      "Understanding when to use React alone and when Next.js makes sense.",
    content:
      "React is a UI library — it only handles the view layer of your app. Next.js is a full framework built on top of React. It adds routing, data fetching strategies, image optimization, and API routes.",
  },
  {
    title: "10 Tailwind CSS Tips I wish I knew earlier",
    slug: "tailwind-tips",
    date: "April 10, 2026",
    excerpt: "Practical Tailwind tricks that will speed up your development.",
    content:
      "Tailwind CSS is a utility-first CSS framework. Instead of writing custom CSS, you apply small utility classes directly in your HTML.",
  },
];

export async function GET() {
  try {
    await connectDB();
    await Post.deleteMany({});
    await Post.insertMany(posts);
    return NextResponse.json({ success: true, message: "Database seeded!" });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Seeding failed" },
      { status: 500 },
    );
  }
}
