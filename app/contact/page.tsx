"use client";

import { useActionState } from "react";
import { sendContactMessage } from "@/app/actions/contact";

const initialState = { success: false, error: "" };

export default function Contact() {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialState,
  );

  return (
    <main className="max-w-xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-2">Contact Me</h1>
      <p className="text-gray-500 mb-10">Have a project in mind? Let's talk.</p>

      <form action={formAction} className="flex flex-col gap-4">
        <div>
          <label className="text-sm font-medium block mb-1">Name</label>
          <input
            name="name"
            placeholder="Your name"
            disabled={pending}
            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black disabled:opacity-50"
          />
        </div>

        <div>
          <label className="text-sm font-medium block mb-1">Email</label>
          <input
            name="email"
            type="email"
            placeholder="your@email.com"
            disabled={pending}
            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black disabled:opacity-50"
          />
        </div>

        <div>
          <label className="text-sm font-medium block mb-1">Message</label>
          <textarea
            name="message"
            placeholder="Tell me about your project..."
            rows={5}
            disabled={pending}
            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black resize-none disabled:opacity-50"
          />
        </div>

        <button
          type="submit"
          disabled={pending}
          className="bg-black text-white py-3 rounded-lg font-medium hover:opacity-80 transition disabled:opacity-50"
        >
          {pending ? "Sending..." : "Send Message"}
        </button>

        {state.success && (
          <p className="text-green-600 text-sm text-center">
            Message sent successfully! ✅
          </p>
        )}
        {state.error && (
          <p className="text-red-500 text-sm text-center">{state.error}</p>
        )}
      </form>
    </main>
  );
}
