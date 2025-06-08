import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#232526] to-[#414345] dark:from-[#ffffff] dark:to-[#f8f9fa] text-gray-100 dark:text-gray-900 px-4 text-center"
      id="home"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2 bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text py-5">
        Georgi Beshirov
      </h1>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-400 dark:text-gray-600 mb-6">
        Junior Full Stack Developer
      </h2>
      <p className="text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-8 text-gray-200 dark:text-gray-700">
        I create robust and scalable web applications with attention to clean
        code, modern design and seamless user experience. Let create something
        amazing together!
      </p>
      <a
        href="#projects"
        className="inline-block bg-gradient-to-r from-cyan-400 to-pink-400 text-white dark:text-gray-900 font-semibold py-3 px-8 rounded-full shadow-md hover:scale-105 transition-transform mb-8"
      >
        See Projects
      </a>
      <div className="flex gap-8 mt-2 justify-center">
        <a
          href="https://github.com/Georgi1023Y"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-gray-100 dark:text-gray-900 hover:text-cyan-400 transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/georgiyuliqnov/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-gray-100 dark:text-gray-900 hover:text-cyan-400 transition-colors"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
};

export default Hero;
