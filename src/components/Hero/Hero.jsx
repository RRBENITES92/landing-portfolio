import profile from "../../assets/profile.png";

function Hero() {
  const skills = ["C#", ".NET", "ASP.NET Core", "React", "SQL Server", "WPF", "JWT"];

  return (
    <section id="home" className="bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto grid min-h-[70vh] max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">

        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Analista Programador
            </p>

            <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-4xl dark:text-white">
              Full Stack .NET Developer
            </h1>
          </div>

          <p className="max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Desarrollo soluciones empresariales con C#, ASP.NET Core,
            SQL Server y React. Tengo experiencia construyendo sistemas de gestión,
            APIs seguras con JWT y aplicaciones WPF utilizadas en entornos reales de negocio.
          </p>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:ring-gray-800"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
            >
              Ver proyectos
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-blue-600 px-5 py-3 text-center font-semibold text-blue-600 transition hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-950"
            >
              Contactarme
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="rounded-3xl bg-white p-2 shadow-2xl ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
            <img
              src={profile}
              alt="Foto profesional de Ronald Ramirez"
              className="h-80 w-72 rounded-2xl object-cover object-top"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;