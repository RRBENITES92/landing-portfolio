import { useReveal } from "../../hooks/useReveal";

function About() {
  const { ref, isVisible } = useReveal();

  const highlights = [
    {
      title: "Experiencia empresarial",
      description: "Desarrollo de sistemas internos y aplicaciones de gestión.",
    },
    {
      title: "Backend .NET",
      description: "APIs REST, autenticación JWT, roles, DTOs y validaciones.",
    },
    {
      title: "Frontend moderno",
      description: "Interfaces con React, Vite, rutas protegidas y consumo de APIs.",
    },
  ];

  return (
    <section id="about" className="bg-white py-20 dark:bg-gray-900">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
              Sobre mí
            </p>

            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Transformando ideas en soluciones de software
            </h2>

            <div className="space-y-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              <p>
                Soy Analista Programador con experiencia desarrollando aplicaciones
                empresariales, principalmente con C#, .NET, SQL Server y WPF.
              </p>

              <p>
                Actualmente estoy fortaleciendo mi perfil fullstack construyendo
                proyectos con ASP.NET Core Web API y React, aplicando autenticación,
                roles, validaciones, consumo de APIs y componentes reutilizables.
              </p>

              <p>
                Mi enfoque está en crear soluciones mantenibles, seguras y prácticas,
                combinando lógica de backend con interfaces claras para el usuario.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-gray-50 p-6 shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-md dark:bg-gray-950 dark:ring-gray-800"
              >
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;