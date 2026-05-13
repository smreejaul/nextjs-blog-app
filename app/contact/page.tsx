"use client";

import { useActionState } from "react";
import { sendContactMessage } from "@/app/actions/contact";
import { resumeData } from "@/lib/resumeData";

const initialState = { success: false, error: "" };

export default function Contact() {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialState,
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 pt-20 pb-12">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">Let&apos;s Work Together</h1>
        <p className="text-xl text-gray-600">
          Have a project in mind? I&apos;d love to hear about it. Get in touch and let&apos;s create something amazing.
        </p>
      </div>

      {/* Content Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Contact Info</h2>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase">Email</p>
                  <a href={`mailto:${resumeData.email}`} className="text-lg font-medium text-blue-600 hover:underline">
                    {resumeData.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 4.493a1 1 0 00.502.727l2.114 1.040a1 1 0 00.958-.164l2.423-2.423a1 1 0 011.414 0l2.828 2.828a1 1 0 010 1.414l-2.423 2.423a1 1 0 00-.164.958l1.040 2.114a1 1 0 00.727.502l4.493 1.498a1 1 0 00.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase">Phone</p>
                  <a href={`tel:${resumeData.phone}`} className="text-lg font-medium text-purple-600 hover:underline">
                    {resumeData.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase">Location</p>
                  <p className="text-lg font-medium text-green-600">{resumeData.location}</p>
                </div>
              </div>

              {/* Availability */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-600 uppercase mb-2">Availability</p>
                <p className="text-gray-700 font-medium">{resumeData.availability}</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm font-semibold text-gray-600 uppercase mb-4">Connect</p>
              <div className="flex gap-4">
                <a
                  href={`https://${resumeData.links.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 hover:bg-blue-200 transition"
                  title="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href={`https://${resumeData.links.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-gray-900 transition"
                  title="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href={`https://${resumeData.links.portfolio}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 hover:bg-purple-200 transition"
                  title="Portfolio"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-4l5.586-5.586a2 2 0 012.828 0 2 2 0 010 2.828L13.414 12" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <form action={formAction} className="flex flex-col gap-6">
                <div>
                  <label className="text-sm font-bold text-gray-900 uppercase tracking-wider block mb-2">
                    Your Name
                  </label>
                  <input
                    name="name"
                    placeholder="John Doe"
                    disabled={pending}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:bg-gray-50 transition"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-gray-900 uppercase tracking-wider block mb-2">
                    Your Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    disabled={pending}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:bg-gray-50 transition"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-gray-900 uppercase tracking-wider block mb-2">
                    Subject
                  </label>
                  <input
                    name="subject"
                    placeholder="Project inquiry"
                    disabled={pending}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:bg-gray-50 transition"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-gray-900 uppercase tracking-wider block mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project, requirements, timeline, and budget..."
                    rows={6}
                    disabled={pending}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:bg-gray-50 resize-none transition"
                  />
                </div>

                <button
                  type="submit"
                  disabled={pending}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-bold uppercase tracking-wider hover:from-blue-700 hover:to-blue-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {pending ? "Sending..." : "Send Message"}
                </button>

                {state.success && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-medium flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Message sent successfully! I&apos;ll get back to you soon.
                    </p>
                  </div>
                )}
                {state.error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-medium">{state.error}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
