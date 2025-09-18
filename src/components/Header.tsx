"use client"
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-bold text-orange-500 hover:text-orange-600 transition-colors flex items-center"
          >
            <span className="mr-1">🎓</span>
            EducaValesTec
          </Link>
          
          {/* Menu Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-800 hover:text-orange-500 font-medium transition-colors relative group"
            >
              Início
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
            </Link>
            <Link 
              href="#sobre" 
              className="text-gray-800 hover:text-orange-500 font-medium transition-colors relative group"
            >
              Sobre
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
            </Link>
            <Link 
              href="#cursos" 
              className="text-gray-800 hover:text-orange-500 font-medium transition-colors relative group"
            >
              Cursos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
            </Link>
            <Link 
              href="#depoimentos" 
              className="text-gray-800 hover:text-orange-500 font-medium transition-colors relative group"
            >
              Depoimentos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
            </Link>
            
            <div className="flex space-x-4 ml-4">
              <button className="bg-white text-orange-500 border border-orange-500 hover:bg-orange-50 font-medium py-2 px-5 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg">
                Entrar
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-5 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg flex items-center">
                <span className="mr-2">Cadastre-se</span>
                <span>→</span>
              </button>
            </div>
          </nav>
          
          {/* Botão Mobile */}
          <div className="flex items-center lg:hidden">
            <button 
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors mr-3 shadow-md"
            >
              Entrar
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-orange-500 focus:outline-none"
              aria-label="Abrir menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-3 pt-4">
              <Link 
                href="/" 
                className="text-gray-800 hover:text-orange-500 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                href="#sobre" 
                className="text-gray-800 hover:text-orange-500 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link 
                href="#cursos" 
                className="text-gray-800 hover:text-orange-500 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Cursos
              </Link>
              <Link 
                href="#depoimentos" 
                className="text-gray-800 hover:text-orange-500 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Depoimentos
              </Link>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors mt-2 w-full">
                Cadastre-se Grátis
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}