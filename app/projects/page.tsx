const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind"],
    link: "#",
  },
  {
    title: "React Dashboard",
    description: "An admin dashboard with charts and data tables.",
    tech: ["React", "CSS"],
    link: "#",
  },
  {
    title: "Blog App",
    description: "A full stack blog with authentication and markdown support.",
    tech: ["Next.js", "TypeScript"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10">Projects</h1>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <div key={project.title} className="border rounded-xl p-6">
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-500 mb-4">{project.description}</p>
            <div className="flex gap-2 flex-wrap">
              {project.tech.map((t) => (
                <span key={t} className="text-sm border px-3 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
