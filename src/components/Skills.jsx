import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiJavascript } from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: <FaReact className="text-cyan-400 dark:text-pink-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 dark:text-cyan-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-300 dark:text-pink-400" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500 dark:text-cyan-400" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-400 dark:text-pink-400" /> },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-400 dark:text-pink-400" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300 dark:text-cyan-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600 dark:text-pink-400" /> },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-orange-400 dark:text-cyan-400" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-300 dark:text-pink-400" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section className="w-full py-12 px-4 bg-gradient-to-br from-[#232526] to-[#414345] dark:from-[#ffffff] dark:to-[#f8f9fa] flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 dark:from-pink-400 dark:to-cyan-400">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="rounded-2xl shadow-lg p-7 bg-[#2d2f38]/80 dark:bg-white/80 backdrop-blur-md flex flex-col items-center border border-[#383a47] dark:border-gray-200"
          >
            <h3 className="text-xl font-semibold mb-4 text-cyan-200 dark:text-gray-800">{cat.title}</h3>
            <ul className="flex flex-wrap justify-center gap-5">
              {cat.items.map((item) => (
                <li
                  key={item.name}
                  className="flex flex-col items-center mx-2 my-2"
                >
                  <span className="text-4xl mb-1">{item.icon}</span>
                  <span className="text-sm text-gray-200 dark:text-gray-700 mt-1">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;