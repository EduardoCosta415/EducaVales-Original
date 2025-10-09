// src/components/Hero.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Banner responsivo */}
      <div className="w-full h-[480px] md:h-[600px]">
        <picture>
          {/* >= 1536px */}
          <source
            media="(min-width: 1536px)"
            srcSet="images/cta_1024x600.png"
          />
          {/* >= 1280px */}
          <source
            media="(min-width: 1280px)"
            srcSet="images/cta_1920x600.png"
          />
          {/* >= 1024px */}
          <source
            media="(min-width: 1024px)"
            srcSet="images/cta_1024x600.png"
          />
          {/* Mobile (<1024px) */}
          <img
            src="images/cta_768x920.png"
            alt="Sua carreira técnica começa aqui! EDUCAVALES"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        </picture>
      </div>

      {/* Conteúdo por cima do banner */}
      <div className="absolute inset-0 flex flex-col justify-end items-center text-center px-4 z-10 pb-16">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <Link
              href="#cursos"
              className="bg-white text-orange-600 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
            >
              Ver Cursos
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </Link>

            <Link
              href="/saibamais"
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300"
            >
              Saiba Mais
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
