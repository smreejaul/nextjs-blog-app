import Link from "next/link";
import { ArrowRightIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import { resumeData } from "@/lib/resumeData";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero */}
      <div className="max-w-4xl mx-auto pt-20 pb-10">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">About Me</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          {resumeData.summary}
        </p>
      </div>

      {/* Core Skills */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {Object.entries(resumeData.coreSkills).map(([category, skills]) => (
              <div key={category}>
                <h3 className="text-lg font-bold mb-4 text-gray-900">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full text-sm font-medium text-gray-800 hover:border-blue-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Expertise */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">
            Domain Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.domainExpertise.map((domain, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-blue-600">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-700">{domain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto rounded-3xl border border-blue-200 bg-white p-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
              <BriefcaseIcon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
                Experience
              </p>
              <p className="text-gray-700">
                Professional experience has been moved to a dedicated page so
                the About section stays focused on skills, expertise,
                certifications, and education.
              </p>
            </div>
          </div>
          <Link
            href="/experiences"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
          >
            See Full Experience <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Certifications & Education */}
      <section className="py-16 px-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Certifications</h3>
              <div className="space-y-4">
                {resumeData.certifications.map((cert, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
                    </div>
                    <p className="text-gray-200">{cert}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Education</h3>
              <div className="space-y-6">
                {resumeData.education.map((edu, idx) => (
                  <div key={idx}>
                    <p className="font-semibold text-lg">{edu.degree}</p>
                    <p className="text-gray-300">{edu.school}</p>
                    {edu.year && (
                      <p className="text-gray-400 text-sm">{edu.year}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="mt-16 pt-16 border-t border-gray-700">
            <h3 className="text-2xl font-bold mb-8">Languages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resumeData.languages.map((lang, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span className="font-medium">{lang.language}</span>
                  <span className="text-gray-400">{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
