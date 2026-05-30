import { useReveal } from "../../hooks/useReveal";

function Projects() {
  const { ref, isVisible } = useReveal();

  const projects = [
    {
      title: "Restaurant System",
      type: "Proyecto principal",
      description:
        "Sistema fullstack para gestión de restaurante, con backend en ASP.NET Core Web API y frontend en React. Incluye autenticación JWT, roles, CRUD de productos, paginación, validaciones y dashboard administrativo.",
      technologies: [
        "ASP.NET Core",
        "C#",
        "React",
        "JWT",
        "Roles",
        "FluentValidation",
        "Entity Framework",
      ],
      links: [
        {
          label: "Código Frontend",
          url: "https://github.com/RRBENITES92/restaurant-app-frontend",
        },
        {
          label: "Código Backend",
          url: "https://github.com/RRBENITES92/restaurant-api",
        },
      ],
    },
    {
      title: "Landing Portfolio",
      type: "Proyecto frontend",
      description:
        "Página personal desarrollada con React, Vite y Tailwind CSS v4 para presentar mi perfil, habilidades y proyectos de forma profesional.",
      technologies: ["React", "Vite", "Tailwind CSS", "Responsive", "Dark Mode"],
      links: [
        {
          label: "Ver Código",
          url: "https://github.com/RRBENITES92/landing-portfolio",
        },
      ],
    },
  ];

  return (
    <section id="projects" className="bg-white py-20 dark:bg-gray-900">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
            Proyectos
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Proyectos destacados
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Estos proyectos muestran mi evolución hacia el desarrollo fullstack,
            combinando experiencia backend con interfaces modernas en React.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-blue-500">
                {project.type}
              </p>

              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h3>

              <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
                {project.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-blue-600 px-4 py-2 text-center font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;