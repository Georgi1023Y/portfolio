import React, { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

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
    <header className="fixed top-0 left-0 w-full z-50 bg-[#232526]/90 backdrop-blur-md shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text select-none">
          Georgi Beshirov
        </span>
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

        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-200 hover:text-cyan-400 font-medium transition-colors duration-150 cursor-pointer"
                onClick={(e) =>
                  handleScrollToSection(e, link.href.replace("#", ""))
                }
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col items-center bg-[#232526] border-t border-[#383a47] py-4 gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-200 hover:text-cyan-400 font-medium text-lg block"
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
