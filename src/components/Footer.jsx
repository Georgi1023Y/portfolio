import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#232526] py-6 flex flex-col items-center justify-center text-center">
      <div className="flex gap-6 mb-3">
        <a
          href="https://github.com/Georgi1023Y"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-cyan-400 text-2xl transition-colors"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/georgiyuliqnov/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-cyan-400 text-2xl transition-colors"
          aria-label="LinkedIn"
        >
          <FaInstagram />
        </a>
      </div>
      <div className="text-gray-400 text-sm">
        2025 Georgi Beshirov. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;