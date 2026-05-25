function Hero() {
  return (
    <section id="home" className="bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto grid min-h-[70vh] max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">

        <div>
          <p className="mb-4 font-semibold text-blue-600">
            Hola, soy Ronald
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl dark:text-white">
            Desarrollador backend en C# y .NET enfocado en APIs y aplicaciones web
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Desarrollo APIs REST y aplicaciones conectadas a base de datos,
            enfocándome en código limpio, rendimiento y soluciones prácticas.
            Actualmente estoy reforzando frontend con React.
          </p>

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
          <div className="flex h-72 w-72 items-center justify-center rounded-full bg-blue-100 text-6xl font-bold text-blue-600 shadow-lg dark:bg-blue-950 dark:text-blue-400">
            RR
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;