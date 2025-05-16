import React from "react";
import chat from "../assets/chat.png";
import bar from "../assets/bar.png";
import store from "../assets/e-commerce.png";

const projects = [
  {
    title: "Чат Приложение",
    image: chat,
    description:
      "Реално време чат платформа с поддръжка на групови и лични съобщения, аватари и известия.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
    demo: "https://chat-app-9p6u.onrender.com/login",
    github: "https://github.com/Georgi1023Y/chat-app.git",
  },
  {
    title: "Онлайн Магазин",
    image: store,
    description:
      "Модерен e-commerce сайт с количка, плащания и админ панел за управление на продукти.",
    tech: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "Tailwind CSS",
    ],
    demo: "",
    github: "",
  },
  {
    title: "Уебсайт За Бар",
    image: bar,
    description: "Уебсайт за бар с представяне на меню и фотогалерия.",
    tech: ["React", "Tailwind CSS", "EmailJS"],
    demo: "https://bar-center-menu.vercel.app/",
    github: "https://github.com/Georgi1023Y/bar-center-menu",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-12 px-4 flex flex-col items-center bg-gradient-to-br from-[#232526] to-[#414345]"
    >
      <h2 className="text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
        Проекти
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-[#2d2f38] rounded-2xl shadow-lg border border-[#383a47] flex flex-col overflow-hidden hover:scale-[1.025] hover:shadow-2xl transition-transform duration-200"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover object-top bg-[#232526]"
            />
            <div className="flex flex-col flex-1 p-6">
              <h3 className="text-xl font-semibold mb-2 text-cyan-200">
                {project.title}
              </h3>
              <p className="text-gray-200 mb-3 text-sm flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-gradient-to-r from-cyan-400 to-pink-400 text-xs text-white px-3 py-1 rounded-full font-medium shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-3 text-sm sm:text-base rounded-full transition-colors duration-150"
                >
                  Виж Демо
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-3 text-sm sm:text-base rounded-full transition-colors duration-150"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
