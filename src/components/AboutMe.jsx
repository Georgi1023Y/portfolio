import React from "react";
import me from "../assets/georgi.jpg";

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
      className="w-full bg-gradient-to-br from-[#232526] to-[#414345] dark:from-[#ffffff] dark:to-[#f8f9fa] text-gray-100 dark:text-gray-900 py-10 px-4 flex flex-col items-center"
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 max-w-4xl w-full items-center">
        <div className="flex-shrink-0 flex justify-center md:justify-start">
          <img
            src={me}
            alt="Profile picture"
            className="w-44 h-44 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full border-4 border-cyan-400 dark:border-pink-400 shadow-lg object-cover bg-[#232526] dark:bg-white"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-cyan-400 dark:text-pink-400">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-gray-200 dark:text-gray-700 mb-4">
            Hello! I am Georgi Beshirov, Full-Stack Developer with experience in
            creating modern web applications. I like to combine creativity with
            technology to provide innovative solutions and excellent user
            experience.
          </p>
          <div className="mb-4">
            <span className="font-semibold text-pink-400 dark:text-cyan-400">
              Technologies I use:
            </span>
            <ul className="flex flex-wrap gap-2 mt-2">
              {technologies.map((tech) => (
                <li
                  key={tech}
                  className="bg-gradient-to-r from-cyan-400 to-pink-400 text-white dark:text-gray-900 rounded-lg px-3 py-1 text-xs font-medium shadow"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="font-semibold text-cyan-400 dark:text-pink-400">Curious fact:</span>
            <span className="ml-2 text-gray-100 dark:text-gray-700">
              In my free time I like to travel.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
