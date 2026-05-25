import { useReveal } from "../../hooks/useReveal";

function Projects() {

  const { ref, isVisible } = useReveal();

  return (
    <section id="projects" className="bg-gray-50 py-20 dark:bg-gray-950">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <h2 className="mb-10 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
          Proyectos
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              API REST para restaurante
            </h3>

            <p className="mb-5 leading-relaxed text-gray-600 dark:text-gray-300">
              Backend desarrollado con C#, .NET, Entity Framework y SQL Server.
              Incluye CRUD, paginación, búsqueda y buenas prácticas.
            </p>

            <div className="mb-5 flex flex-wrap gap-2">
              <span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                C#
              </span>
              <span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                .NET
              </span>
              <span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                SQL Server
              </span>
              <span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                API REST
              </span>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://github.com/RRBENITES92/restaurant-api"
                target="_blank"
                className="rounded-lg bg-blue-600 px-4 py-2 text-center font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
              >
                GitHub
              </a>

              <a
                href="#"
                className="rounded-lg border border-blue-600 px-4 py-2 text-center font-semibold text-blue-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-950"
              >
                Demo
              </a>
            </div>
          </article>

          <article className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Landing portfolio
            </h3>

            <p className="mb-5 leading-relaxed text-gray-600 dark:text-gray-300">
              Página personal creada con React, Vite, JavaScript y Tailwind CSS,
              enfocada en mostrar habilidades y proyectos.
            </p>

            <div className="mb-5 flex flex-wrap gap-2">
              <span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                React
              </span>
              <span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                Tailwind
              </span>
              <span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                Responsive
              </span>
              <span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                Dark Mode
              </span>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://github.com/RRBENITES92/landing-portfolio"
                target="_blank"
                className="rounded-lg bg-blue-600 px-4 py-2 text-center font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
              >
                GitHub
              </a>

              <a
                href="https://landing-portfolio-olive-three.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-blue-600 px-4 py-2 text-center font-semibold text-blue-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-950"
              >
                Demo
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projects;