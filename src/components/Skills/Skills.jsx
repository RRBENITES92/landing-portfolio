import { useReveal } from "../../hooks/useReveal";

function Skills() {

  const { ref, isVisible } = useReveal();

  return (
    <section id="skills" className="bg-gray-50 py-20 dark:bg-gray-950">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <h2 className="mb-10 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
          Habilidades
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:bg-gray-900">
            <h3 className="mb-3 font-semibold text-blue-600 dark:text-blue-400">Backend</h3>
            <p className="text-gray-600 dark:text-gray-300">
              C#, .NET, APIs REST, Entity Framework
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:bg-gray-900">
            <h3 className="mb-3 font-semibold text-blue-600 dark:text-blue-400">Frontend</h3>
            <p className="text-gray-600 dark:text-gray-300">
              React, JavaScript, HTML, CSS
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:bg-gray-900">
            <h3 className="mb-3 font-semibold text-blue-600 dark:text-blue-400">Base de datos</h3>
            <p className="text-gray-600 dark:text-gray-300">
              SQL Server, consultas, diseño de tablas
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:bg-gray-900">
            <h3 className="mb-3 font-semibold text-blue-600 dark:text-blue-400">Otros</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Git, buenas prácticas, arquitectura básica
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;