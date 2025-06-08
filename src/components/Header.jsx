import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleScrollToSection = (e, id) => {
    e.preventDefault();

    const el = document.getElementById(id);

    if (el) {
      const yOffset = 72;
      const y = el.getBoundingClientRect().top + window.pageYOffset - yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#232526]/90 dark:bg-[#ffffff]/90 backdrop-blur-md shadow-sm dark:shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text select-none">
          Georgi Beshirov
        </span>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            aria-label="Toggle dark mode"
          >
            <svg
              className="w-6 h-6 text-gray-200 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {theme === "dark" ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m16.95 4.95l-.707-.707M6.757 6.757l-.707-.707m0 12.728l.707-.707M17.243 6.757l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>

          </button>
          {open ? (
            <button
              className="md:hidden text-gray-200 focus:outline-none"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Затвори меню"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          ) : (
            <button
              className="md:hidden text-gray-200 focus:outline-none"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Меню"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.href.replace('#', ''))}
                className="text-gray-200 dark:text-gray-800 hover:text-cyan-400 dark:hover:text-pink-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col items-center bg-[#232526] dark:bg-[#ffffff] border-t border-[#383a47] dark:border-[#e5e5e5] py-4 gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-200 dark:text-gray-800 hover:text-cyan-400 font-medium text-lg block"
                onClick={(e) => {
                  handleScrollToSection(e, link.href.replace("#", ""));
                  setOpen(false);
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
