import { useReveal } from "../../hooks/useReveal";

function Contact() {

  const { ref, isVisible } = useReveal();

  return (
    <section id="contact" className="bg-gray-50 py-20 dark:bg-gray-950">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >

        <h2 className="mb-5 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
          Contacto
        </h2>

        <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          ¿Tienes una oportunidad laboral, proyecto freelance o idea en mente?
          Estoy disponible para conversar.
        </p>

        <div className="mb-8 space-y-3">
          <p className="text-gray-600 dark:text-gray-300">
            📧 rh.ramirezbenites@gmail.com
          </p>

          <a
            href="https://github.com/RRBENITES92"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-600 hover:underline"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ronald-ramirez-2766b488/"
            target="_blank"
            rel="noreferrer"
            className="block text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        </div>

        <a
          href="mailto:rh.ramirezbenites@gmail.com"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Enviarme un correo
        </a>

      </div>
    </section>
  );
}

export default Contact;