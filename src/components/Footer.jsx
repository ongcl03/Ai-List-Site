import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1D2951] text-white py-10 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-lg font-semibold">Contact Me</div>
          <a
            href="mailto:ongchangle03@gmail.com"
            className="text-indigo-400 hover:text-indigo-300"
          >
            ongchangle03@gmail.com
          </a>
          <div className="flex space-x-6">
            <a
              href="mailto:ongchangle03@gmail.com"
              className="hover:text-indigo-300"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/ong-chang-le-b85249136/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ongcl03"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-300"
            >
              Github
            </a>
            <a
              href="https://ongcl03.github.io/#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-300"
            >
              My Portfolio
            </a>
          </div>
          <div className="text-sm text-gray-400">
            © 2024 Ong Chang Le | AI Tools Collection. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
