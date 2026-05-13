"use client";

import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function AdminPage() {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    date: "",
    excerpt: "",
    content: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;

    // Auto generate slug from title
    if (name === "title") {
      const autoSlug = value
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .replace(/\s+/g, "-")
        .trim();
      setForm({ ...form, title: value, slug: autoSlug });
    } else {
      setForm({ ...form, [name]: value });
    }
  }

  async function handleSubmit() {
    setStatus("loading");
    setMessage("");

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      setStatus("success");
      setMessage("Post published successfully!");
      setForm({ title: "", slug: "", date: "", excerpt: "", content: "" });
    } else {
      setStatus("error");
      setMessage(data.error || "Something went wrong");
    }
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-2">New Blog Post</h1>
      <p className="text-gray-500 mb-10">
        Fill in the details to publish a post.
      </p>

      <div className="flex flex-col gap-5">
        <div>
          <label className="text-sm font-medium block mb-1">Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="My awesome post"
            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="text-sm font-medium block mb-1">
            Slug{" "}
            <span className="text-gray-400 font-normal">(auto generated)</span>
          </label>
          <input
            name="slug"
            value={form.slug}
            onChange={handleChange}
            placeholder="my-awesome-post"
            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black bg-gray-50"
          />
        </div>

        <div>
          <label className="text-sm font-medium block mb-1">Date</label>
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="text-sm font-medium block mb-1">Excerpt</label>
          <input
            name="excerpt"
            value={form.excerpt}
            onChange={handleChange}
            placeholder="A short summary of your post..."
            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="text-sm font-medium block mb-1">Content</label>
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="Write your post content here..."
            rows={8}
            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black resize-none"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={status === "loading"}
          className="bg-black text-white py-3 rounded-lg font-medium hover:opacity-80 transition disabled:opacity-50"
        >
          {status === "loading" ? "Publishing..." : "Publish Post"}
        </button>

        {status === "success" && (
          <p className="text-green-600 text-sm text-center flex items-center justify-center gap-2">
            <CheckCircleIcon className="h-4 w-4" />
            {message}
          </p>
        )}
        {status === "error" && (
          <p className="text-red-500 text-sm text-center">{message}</p>
        )}
      </div>
    </main>
  );
}
