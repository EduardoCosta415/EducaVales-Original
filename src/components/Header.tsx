"use client";

import { useState } from "react";
import Link from "next/link";
import {
  submitSubscription,
  normalizePhone,
  toSafeNumber,
} from "../../lib/api";

type FormState = {
  tipoCadastro: "cadastro" | "pre-cadastro";
  interestArea: string;
  curso: string;
  name: string;
  whatsapp: string;
  email: string; //API nao requisita e nem usa o email , mas fica a criterio caso haja um update no futuro
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState<FormState>({
    tipoCadastro: "cadastro",
    interestArea: "",
    curso: "",
    name: "",
    whatsapp: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsMenuOpen(false);
    setStatusMessage("");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({
      tipoCadastro: "cadastro",
      interestArea: "",
      curso: "",
      name: "",
      whatsapp: "",
      email: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    try {
      // Se o usuário escolheu pelo "curso", usamos como área de interesse
      const areaOfInterest = (
        formData.interestArea ||
        formData.curso ||
        ""
      ).trim();

      // enterpriseId vem das envs (helper tem um toSafeNumber também, mas usamos aqui por clareza)
      const enterpriseId = toSafeNumber(
        process.env.NEXT_PUBLIC_ENTERPRISE_ID,
        6
      );

      const payload = {
        name: formData.name.trim(),
        phone: normalizePhone(formData.whatsapp), // -> "55" + dígitos
        areaOfInterest,
        enterpriseId,
      };

      // Dica: se quiser incluir o tipo de cadastro no texto:
      // payload.areaOfInterest = `${areaOfInterest} (${formData.tipoCadastro})`;

      await submitSubscription(payload);

      setStatusMessage("Cadastro realizado com sucesso!");
      // opcional: limpar campos
      setFormData((prev) => ({
        ...prev,
        interestArea: "",
        curso: "",
        name: "",
        whatsapp: "",
        email: "",
      }));
    } catch (err: any) {
      console.error("Erro ao enviar:", err);
      setStatusMessage(
        err?.message || "Erro ao enviar o cadastro. Tente novamente."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
                href="/#sobre"
                className="text-gray-800 hover:text-orange-500 font-medium transition-colors relative group"
              >
                Sobre
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/#cursos"
                className="text-gray-800 hover:text-orange-500 font-medium transition-colors relative group"
              >
                Cursos
                <span className="absolute -bottom-1 left-0 w-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/#depoimentos"
                className="text-gray-800 hover:text-orange-500 font-medium transition-colors relative group"
              >
                Depoimentos
                <span className="absolute -bottom-1 left-0 w-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
              </Link>

              <div className="flex space-x-4 ml-4">
                <button
                  onClick={handleOpenModal}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-5 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg flex items-center"
                >
                  <span className="mr-2">Cadastre-se</span>
                  <span>→</span>
                </button>
              </div>
            </nav>

            {/* Botão Mobile */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 hover:text-orange-500 focus:outline-none"
                aria-label="Abrir menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
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
                <button
                  onClick={handleOpenModal}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors mt-2 w-full"
                >
                  Cadastre-se Grátis
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Modal de Cadastro */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900/90 bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-lg w-full shadow-2xl relative transform transition-all scale-100 opacity-100 duration-300">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Fechar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h2 className="text-2xl font-bold text-center text-orange-500 mb-6">
              Cadastre-se
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Tipo de Cadastro */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Tipo de Cadastro
                </label>
                <select
                  name="tipoCadastro"
                  value={formData.tipoCadastro}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 transition-colors text-black"
                >
                  <option value="cadastro">Cadastro (para alunos)</option>
                  <option value="pre-cadastro">
                    Pré-cadastro (para mais informações)
                  </option>
                </select>
              </div>

              {/* Curso / Área de Interesse */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Curso de Interesse
                </label>
                <select
                  name="curso"
                  value={formData.curso}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors text-black"
                >
                  <option value="">Selecione um curso</option>
                  <option value="Enfermagem">Enfermagem</option>
                  <option value="Curso de Logística">Curso de Logística</option>
                  <option value="Técnico de Logística">
                    Técnico de Logística
                  </option>
                  <option value="Transações Imobiliárias">
                    Transações Imobiliárias
                  </option>
                  <option value="Edificações">Cursos de Edificações</option>
                  <option value="Gestão de RH">
                    Gestão de Recursos Humanos
                  </option>
                </select>
              </div>

              {/* Nome */}
              <div>
                <label className="block text-gray-900 font-medium mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors text-black"
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="(xx) xxxxx-xxxx"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors text-black"
                />
              </div>

              {/* E-mail (opcional, não enviado nessa API) */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  E-mail (opcional)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu-email@exemplo.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors text-black"
                />
              </div>

              {statusMessage && (
                <p
                  className={`text-center font-medium ${
                    statusMessage.toLowerCase().includes("sucesso")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {statusMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`w-full text-white font-medium py-3 rounded-lg transition-all duration-300 transform shadow-md hover:shadow-lg ${
                  loading
                    ? "bg-gray-400"
                    : "bg-orange-500 hover:bg-orange-600 hover:-translate-y-0.5"
                }`}
              >
                {loading ? "Enviando..." : "Confirmar Cadastro"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
