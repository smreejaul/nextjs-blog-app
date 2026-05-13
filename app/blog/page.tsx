import { connectDB } from "@/lib/db";
import Post from "@/lib/models/Post";
import Link from "next/link";
import { ArrowRightIcon, NewspaperIcon } from "@heroicons/react/24/outline";

export const dynamic = "force-dynamic";

export default async function Blog() {
  await connectDB();
  const posts = await Post.find().sort({ date: -1 }).lean().exec();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 pt-20 pb-12">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">Blog</h1>
        <p className="text-xl text-gray-600">
          Thoughts, tutorials, and insights on frontend development, React, and modern web technologies.
        </p>
      </div>

      {/* Posts Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 gap-8">
              {posts.map((post) => (
                <Link
                  href={`/blog/${post.slug}`}
                  key={post.slug}
                  className="group bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                      {post.date}
                    </p>
                    <span className="text-gray-400 group-hover:text-blue-600 transition">
                      <ArrowRightIcon className="w-5 h-5" />
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                    Read Article
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-100 text-blue-600">
                <NewspaperIcon className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">No posts yet</h2>
              <p className="text-gray-600">Check back soon for articles and insights.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      {posts.length > 0 && (
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to my blog</h2>
            <p className="text-blue-100 mb-8">
              Get notified when I publish new articles and insights about frontend development.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
