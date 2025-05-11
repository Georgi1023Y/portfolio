import React from "react";
import me from "../assets/georgi.webp";

const technologies = [
  "React",
  "Node.js",
  "Tailwind CSS",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "HTML",
  "CSS",
];

const AboutMe = () => {
  return (
    <section
      id="about"
      className="w-full bg-gradient-to-br from-[#232526] to-[#414345] text-gray-100 py-10 px-4 flex flex-col items-center"
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 max-w-4xl w-full items-center">
        <div className="flex-shrink-0 flex justify-center md:justify-start">
          <img
            src={me}
            alt="Профилна снимка"
            className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full border-4 border-cyan-400 shadow-lg object-cover bg-[#232526]"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-cyan-400">
            За мен
          </h2>
          <p className="text-base sm:text-lg text-gray-200 mb-4">
            Здравейте! Аз съм Георги Беширов, Full-Stack разработчик с опит в
            създаването на модерни уеб приложения. Обичам да комбинирам
            креативност с технологии, за да предоставям иновативни решения и
            отлично потребителско изживяване.
          </p>
          <div className="mb-4">
            <span className="font-semibold text-pink-400">
              Технологии, които използвам:
            </span>
            <ul className="flex flex-wrap gap-2 mt-2">
              {technologies.map((tech) => (
                <li
                  key={tech}
                  className="bg-gradient-to-r from-cyan-400 to-pink-400 text-white rounded-lg px-3 py-1 text-xs font-medium shadow"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="font-semibold text-cyan-400">Любопитен факт:</span>
            <span className="ml-2 text-gray-100">
              В свободното си време обичам да пътувам и да снимам природата.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
