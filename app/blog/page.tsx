import { connectDB } from "@/lib/db";
import Post from "@/lib/models/Post";
import Link from "next/link";

export default async function Blog() {
  await connectDB();
  const posts = await Post.find().sort({ date: -1 }).lean().exec();
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10">Blog</h1>
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            className="border-b pb-6 block hover:opacity-70 transition"
          >
            <p className="text-sm text-gray-400 mb-1">{post.date}</p>
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-500">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
