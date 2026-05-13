import Link from "next/link";
import { ArrowRightIcon, BriefcaseIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { resumeData } from "@/lib/resumeData";

export default function ExperiencesPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
            <div className="max-w-5xl mx-auto px-6 pt-20 pb-10">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-600 text-white mb-4">
                            <BriefcaseIcon className="h-6 w-6" />
                        </div>
                        <h1 className="text-5xl font-bold mb-4 text-gray-900">Professional Experience</h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            A dedicated page for my complete career history, responsibilities, and achievements across enterprise frontend engineering roles.
                        </p>
                    </div>
                    <Link
                        href="/about"
                        className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
                    >
                        Back to About
                        <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                </div>
            </div>

            <section className="px-6 pb-20">
                <div className="max-w-5xl mx-auto space-y-10">
                    {resumeData.experience.map((exp, idx) => (
                        <div key={idx} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                <div>
                                    <p className="text-sm uppercase tracking-[0.24em] font-semibold text-blue-600 mb-2">
                                        {exp.duration} · {exp.location}
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900">{exp.role}</h2>
                                    <p className="text-lg font-semibold text-blue-600">{exp.company}</p>
                                </div>
                            </div>

                            <ul className="mt-6 space-y-4">
                                {exp.achievements.map((achievement, achievementIndex) => (
                                    <li key={achievementIndex} className="flex gap-3 text-gray-700">
                                        <span className="mt-1 text-blue-600">
                                            <ChevronRightIcon className="h-5 w-5" />
                                        </span>
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
