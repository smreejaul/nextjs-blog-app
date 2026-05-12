import { connectDB } from "@/lib/db";
import Post from "@/lib/models/Post";

import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await connectDB();
  const { slug } = await params;
  const post = await Post.findOne({ slug }).lean().exec();
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await connectDB();
  const { slug } = await params;
  const post = await Post.findOne({ slug }).lean().exec();

  if (!post) notFound();

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <p className="text-sm text-gray-400 mb-2">{post!.date}</p>
      <h1 className="text-4xl font-bold mb-6">{post!.title}</h1>
      <p className="text-gray-500 mb-10">{post!.excerpt}</p>
      <div className="border-t pt-8 leading-relaxed text-gray-700">
        {post!.content}
      </div>
    </main>
  );
}
