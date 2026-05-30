import { useEffect, useState } from "react";

function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold text-gray-900 dark:text-white">
          Ronald Ramirez
        </a>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#about" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              Sobre mí
            </a>
            <a href="#skills" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              Skills
            </a>
            <a href="#projects" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              Proyectos
            </a>
            <a href="#contact" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              Contacto
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-full border border-gray-300 px-3 py-2 text-sm transition hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-gray-900 dark:text-white md:hidden"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-gray-200 bg-white px-6 py-4 dark:border-gray-800 dark:bg-gray-950 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#about" className="text-gray-700 dark:text-gray-300">
              Sobre mí
            </a>
            <a href="#skills" className="text-gray-700 dark:text-gray-300">
              Skills
            </a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300">
              Proyectos
            </a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300">
              Contacto
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;