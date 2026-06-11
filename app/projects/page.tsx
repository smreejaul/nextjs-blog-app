import { resumeData } from "@/lib/resumeData";
import ProjectGallery from "@/component/ProjectGallery";

export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-6 pt-20 pb-12">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">Featured Projects</h1>
        <p className="text-xl text-gray-600">
          Enterprise SaaS solutions built for the financial and compliance sectors
        </p>
      </div>

      {/* Projects Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 gap-8">
          {resumeData.keyProjects.map((project, idx) => (
            <div
              key={project.name}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-8 md:p-12">
                {/* Project Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-3">
                        Project {idx + 1}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {project.name}
                      </h2>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-blue-700 text-sm font-semibold rounded-lg hover:border-blue-400 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4">
                    Key Highlights
                  </h3>
                  <ul className="space-y-3">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3 text-gray-700">
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-blue-600 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Visuals / Lightbox */}
                {'images' in project && <ProjectGallery images={(project as { images?: string[] }).images} />}
              </div>

              {/* Bottom Accent */}
              <div className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-blue-500 group-hover:to-purple-500 transition-all"></div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Let&apos;s build something amazing together. Get in touch to discuss your requirements.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Additional Info */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-gray-900">What I Bring to Your Project</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Scalable Architecture",
                description: "Component-driven design systems that scale across product lines",
              },
              {
                title: "Performance Optimized",
                description: "Handling 50,000+ rows of data with virtualisation and intelligent caching",
              },
              {
                title: "Enterprise Ready",
                description: "Compliance-aligned solutions for regulated industries like banking",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
