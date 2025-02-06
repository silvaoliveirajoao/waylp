"use client";

import { LuMenu, LuX } from "react-icons/lu";
import React, { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "", delay: 1 },
    { name: "Sobre", href: "#aboutUs", delay: 2 },
    { name: "Viaje em grupo", href: "#groups", delay: 3 },
    { name: "Viagens personalizadas", href: "#storyTelling", delay: 4 },
    { name: "Nossos serviços", href: "#solutions", delay: 5 },
    { name: "Nossas especialidades", href: "#roadmaps", delay: 6 },
    { name: "Feedbacks", href: "#feedbacks", delay: 7 },
  ];

  return (
    <header
      className="
        relative group top-0 left-0 w-full
        flex justify-between items-center
        z-[100]
        py-[1.3rem] px-[5%]
        md:px-[10%]
      "
    >
      {/* Efeito de blur (header-before) */}
      <div
        className="
          absolute top-0 left-0 w-full h-full
          bg-black/10
          backdrop-blur-[50px]
          z-[-1]
        "
      />
      {/* Efeito gradiente (header-after) */}
      <div
        className="
          absolute top-0 left-[-100%] w-full h-full
          bg-gradient-to-r from-transparent via-white/40 to-transparent
          transition-all duration-500
          group-hover:left-[100%]
          z-[-1]
        "
      />
        <Image src="/logo_sem_escrita.png" alt="Way" width={64} height={64} />
      <nav
        className={`
          absolute top-full left-0 w-full
          max-h-0 h-0 overflow-y-auto overflow-x-hidden
          bg-black/10 backdrop-blur-[50px]
          shadow-[0_0.5rem_1rem_rgba(0,0,0,0.1)]
          flex flex-col items-center gap-2
          transition-all duration-300
          py-0
          md:relative md:top-0 md:left-0 md:w-auto
          md:overflow-visible md:bg-transparent
          md:backdrop-blur-0 md:shadow-none
          md:flex-row md:gap-10 md:h-auto md:max-h-none
          md:py-0
          ${isOpen ? "max-h-[80vh] h-auto py-2" : ""}
        `}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            style={{ transitionDelay: `calc(0.1s * ${link.delay})` }}
            className={`
              block text-[0.75rem] text-white text-center no-underline font-medium
              transform-gpu translate-y-[-50px] opacity-0
              transition-all duration-300 ease
              md:translate-y-0 md:opacity-100 md:transition-none
              ${isOpen ? "translate-y-0 opacity-100" : ""}
            `}
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Botão para mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          absolute right-[5%]
          text-white text-[2.8rem] bg-none border-none p-0
          cursor-pointer
          block md:hidden
        "
      >
        {isOpen ? <LuX size={32} /> : <LuMenu size={32} />}
      </button>
    </header>
  );
};

export default Header;
