export default function About() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <p className="text-gray-500 text-lg leading-relaxed">
        Hi! I'm Syed Reejaul Hussain, a passionate Frontend Developer skilled in
        React, Next.js, and modern CSS. I love building clean, fast, and
        user-friendly web applications.
      </p>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "HTML",
            "CSS",
          ].map((skill) => (
            <span key={skill} className="px-4 py-2 border rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
