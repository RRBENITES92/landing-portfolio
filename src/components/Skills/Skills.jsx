import { useReveal } from "../../hooks/useReveal";

function Skills() {
  const { ref, isVisible } = useReveal();

  const skillGroups = [
    {
      title: "Backend",
      description: "Desarrollo de APIs, lógica de negocio y servicios backend.",
      skills: ["C#", ".NET", "ASP.NET Core", "APIs REST", "Entity Framework", "JWT"],
    },
    {
      title: "Frontend",
      description: "Interfaces web modernas conectadas a APIs.",
      skills: ["React", "Vite", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      title: "Base de datos",
      description: "Diseño, consultas y persistencia de información.",
      skills: ["SQL Server", "SQLite", "Consultas SQL", "Relaciones", "Paginación"],
    },
    {
      title: "Herramientas y prácticas",
      description: "Buenas prácticas para construir proyectos mantenibles.",
      skills: ["Git", "GitHub", "DTOs", "Validaciones", "Arquitectura por capas"],
    },
  ];

  return (
    <section id="skills" className="bg-gray-50 py-20 dark:bg-gray-950">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
            Skills
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Tecnologías y herramientas
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Stack técnico orientado al desarrollo de aplicaciones empresariales,
            APIs REST y frontend moderno con React.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-950"
            >
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                {group.title}
              </h3>

              <p className="mb-5 text-gray-600 dark:text-gray-400">
                {group.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-white px-2.5 py-1 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:ring-gray-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;