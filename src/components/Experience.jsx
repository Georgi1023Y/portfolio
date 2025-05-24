import React from "react";

const experiences = [
  {
    title: "Junior Full Stack Developer",
    date: "2022 - 2024",
    description:
      "Develop web applications with React, Node.js and MongoDB. Leading a small team and implementing innovative solutions for clients.",
  },
  {
    title: "Frontend Developer",
    date: "2020 - 2022",
    description:
      "Building modern and responsive user interfaces with React and Tailwind CSS. UX/UI optimization and working in an Agile environment.",
  },
  {
    title: "Trainee Programmer",
    date: "2019 - 2020",
    description:
      "Involvement in small project development, maintenance and testing of web applications. Gain hands-on experience with JavaScript and Git.",
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
        Experience
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