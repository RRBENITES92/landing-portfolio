import { useReveal } from "../../hooks/useReveal";

function About() {

  const { ref, isVisible } = useReveal();

  return (
    <section id="about" className="bg-gray-50 py-20 dark:bg-gray-950">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Sobre mí
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Soy analista programador con experiencia desarrollando aplicaciones
            usando C#, bases de datos y tecnologías web.
          </p>

          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Me interesa crear soluciones claras, funcionales y fáciles de
            mantener, combinando lógica de backend con interfaces simples para
            el usuario.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;