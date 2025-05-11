import React from "react";

const experiences = [
  {
    title: "Full-Stack Разработчик",
    company: "Tech Solutions Ltd.",
    date: "2022 - 2024",
    description:
      "Разработване на уеб приложения с React, Node.js и MongoDB. Водене на малък екип и внедряване на иновативни решения за клиенти.",
  },
  {
    title: "Frontend Разработчик",
    company: "Web Creative Studio",
    date: "2020 - 2022",
    description:
      "Изграждане на модерни и адаптивни потребителски интерфейси с React и Tailwind CSS. Оптимизация на UX/UI и работа в Agile среда.",
  },
  {
    title: "Стажант Програмист",
    company: "StartIT",
    date: "2019 - 2020",
    description:
      "Участие в разработката на малки проекти, поддръжка и тестване на уеб приложения. Натрупване на практически опит с JavaScript и Git.",
  },
];

const accentColor = "bg-gradient-to-r from-cyan-400 to-pink-400";

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full py-12 px-4 flex flex-col items-center bg-[#232526]"
    >
      <h2 className="text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
        Опит
      </h2>
      <div className="relative max-w-3xl w-full">
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-cyan-400 to-pink-400 opacity-40 z-0" />
        <ul className="space-y-12">
          {experiences.map((exp, idx) => (
            <li
              key={exp.title}
              className={`relative flex flex-col md:flex-row items-center md:items-stretch ${
                idx % 2 === 0
                  ? "md:flex-row-reverse md:justify-end"
                  : "md:justify-start"
              }`}
            >
              <span
                className={`hidden md:block absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white ${accentColor} z-10`}
                style={{ top: 24 }}
              />
              <div
                className={`bg-[#2d2f38] rounded-xl shadow-md p-6 w-full md:w-1/2 border border-[#383a47] z-10 ${
                  idx % 2 === 0 ? "md:mr-12" : "md:ml-12"
                }`}
              >
                <h3 className="text-xl font-semibold text-cyan-200 mb-1">
                  {exp.title}
                </h3>
                <div className="text-pink-300 font-medium mb-1">
                  {exp.company}
                </div>
                <div className="text-sm text-gray-400 mb-3">{exp.date}</div>
                <p className="text-gray-200 text-base">{exp.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;