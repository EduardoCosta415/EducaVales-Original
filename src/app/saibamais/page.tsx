"use client";

import Footer from "@/components/Footer";
import { useState } from "react";

import {
  submitSubscription,
  normalizePhone,
  toSafeNumber,
} from "../../../lib/api"; // <- ajuste se precisar

// Helper seguro para extrair mensagem de erro sem usar `any`
function getErrorMessage(e: unknown): string {
  if (e instanceof Error) return e.message;
  if (typeof e === "string") return e;
  if (e && typeof e === "object") {
    const obj = e as Record<string, unknown>;
    if (typeof obj.message === "string") return obj.message;
    if (typeof obj.error === "string") return obj.error;
  }
  return "Ocorreu um erro inesperado.";
}

export default function SaibaMais() {
  const [activeTab, setActiveTab] = useState(0);

  const [showModalConsultor, setShowModalConsultor] = useState(false);
  const [showModalInscricao, setShowModalInscricao] = useState(false);
  const [loadingConsultor, setLoadingConsultor] = useState(false);
  const [statusConsultor, setStatusConsultor] = useState<string>("");

  const [loadingInscricao, setLoadingInscricao] = useState(false);
  const [statusInscricao, setStatusInscricao] = useState<string>("");

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cursoInteresse: "",
  });

const beneficios = [ 
  {
    titulo: "Aprendizado Prático",
    icone: "🎯",
    descricao:
      "Você aprende fazendo! Desenvolve habilidades reais que pode aplicar imediatamente no mercado de trabalho.",
    detalhes: [
      "Projetos baseados em situações reais",
      
      "Metodologia voltada para prática profissional",
    ],
  },
  {
    titulo: "Flexibilidade",
    icone: "⏱️",
    descricao:
      "Estude no seu ritmo! Reconhecemos suas experiências e adaptamos o curso às suas necessidades.",
    detalhes: [
      "Reconhecimento de conhecimentos prévios",
      "Opções de horários online",
   
    ],
  },
  {
    titulo: "Empregabilidade",
    icone: "💼",
    descricao:
      "Foco direto no mercado! Você adquire as competências que as empresas realmente procuram.",
    detalhes: [
      "Parcerias com empresas e programas de estágio",
      "Certificação valorizada no mercado",
      "Alta taxa de inserção profissional",
    ],
  },
  {
    titulo: "Custo-Benefício",
    icone: "💰",
    descricao:
      "Formação acessível e estratégica! Cursos de curta ou média duração, com retorno rápido no mercado.",
    detalhes: [
      "Mensalidades que cabem no bolso",
      "Tempo de formação menor que cursos tradicionais",
      
    ],
  },
];

  const depoimentos = [
    {
      nome: "Ana Silva",
      curso: "Marketing",
      texto:
        "Em 1 ano já estava trabalhando na área! A metodologia fez toda a diferença.",
      avatar: "👩‍💻",
    },
    {
      nome: "Carlos Santos",
      curso: "Logistica",
      texto:
        "Muito válida a experiência que tive na instituição. Cada dia foi um novo aprendizado. Sou muito grato!!!",
      avatar: "👨‍💼",
    },
    {
      nome: "Marina Costa",
      curso: "Enfermagem",
      texto:
        "A instituição me preparou tão bem, que ao sair do curso ja estava empregada!",
      avatar: "👩‍⚕️",
    },
  ];

  const cursos = [
    { nome: "Segurança do Trabalho", cargaHoraria: "70h" },
    { nome: "Curso de Edificações", cargaHoraria: "80h" },
    { nome: "Transações Imobiliarias", cargaHoraria: "60h" },
    { nome: "Enfermagem", cargaHoraria: "65h" },
    { nome: "Técnico Marketing", cargaHoraria: "75h" },
    { nome: "Técnico Logistica", cargaHoraria: "85h" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // === SUBMIT: Falar com Consultor ===
  const handleSubmitConsultor = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusConsultor("");
    if (!formData.nome || !formData.telefone || !formData.cursoInteresse) {
      setStatusConsultor("Preencha nome, telefone e curso de interesse.");
      return;
    }

    const enterpriseId = toSafeNumber(process.env.NEXT_PUBLIC_ENTERPRISE_ID, 1);
    const payload = {
      name: formData.nome.trim(),
      phone: normalizePhone(formData.telefone),
      areaOfInterest: `${formData.cursoInteresse} (contato com consultor)`,
      enterpriseId,
    };

    try {
      setLoadingConsultor(true);
      await submitSubscription(payload);
      setStatusConsultor(
        "Solicitação enviada! Um consultor entrará em contato em breve."
      );
      setFormData((prev) => ({
        ...prev,
        nome: "",
        email: "",
        telefone: "",
        cursoInteresse: "",
      }));
    } catch (e: unknown) {
      console.error("[consultor] erro:", e);
      setStatusConsultor(
        getErrorMessage(e) || "Erro ao enviar. Tente novamente."
      );
    } finally {
      setLoadingConsultor(false);
    }
  };

  // === SUBMIT: Inscrição ===
  const handleSubmitInscricao = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusInscricao("");
    if (!formData.nome || !formData.telefone || !formData.cursoInteresse) {
      setStatusInscricao("Preencha nome, telefone e curso de interesse.");
      return;
    }

    const enterpriseId = toSafeNumber(process.env.NEXT_PUBLIC_ENTERPRISE_ID, 1);
    const payload = {
      name: formData.nome.trim(),
      phone: normalizePhone(formData.telefone),
      areaOfInterest: `${formData.cursoInteresse} (inscrição)`,
      enterpriseId,
    };

    try {
      setLoadingInscricao(true);
      await submitSubscription(payload);
      setStatusInscricao(
        "Inscrição realizada com sucesso! Em breve enviaremos mais informações."
      );
      setFormData((prev) => ({
        ...prev,
        nome: "",
        email: "",
        telefone: "",
        cursoInteresse: "",
      }));
    } catch (e: unknown) {
      console.error("[inscricao] erro:", e);
      setStatusInscricao(
        getErrorMessage(e) || "Erro ao enviar inscrição. Tente novamente."
      );
    } finally {
      setLoadingInscricao(false);
    }
  };

  const downloadGradeCurricular = () => {
    const content = `
      GRADE CURRICULAR - CURSOS DISPONÍVEIS
      
      Confira abaixo a lista completa de cursos e suas respectivas cargas horárias:
      
      ${cursos
        .map((curso) => `• ${curso.nome} - ${curso.cargaHoraria}`)
        .join("\n      ")}
      
      Para mais informações sobre cada curso, entre em contato com nossos consultores!
      
      © ${new Date().getFullYear()} - Todos os direitos reservados
    `;
    const blob = new Blob([content], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "grade-curricular-cursos.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-black to-gray-900">
        {/* Hero */}
        <section className="relative bg-gradient-to-r from-gray-900 via-orange-600 to-gray-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 transform transition-transform duration-700 ease-out text-white">
              Educação que Transforma sua Carreira
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Descubra por que a formação é o caminho mais
              inteligente para o sucesso profissional
            </p>
            <button
              onClick={() => setShowModalInscricao(true)}
              className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Quero Me Inscrever
            </button>
          </div>
        </section>

        {/* Benefícios com Abas Interativas */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
              Vantagens Exclusivas da Nossa Metodologia
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Tabs */}
              <div className="space-y-4">
                {beneficios.map((beneficio, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                      activeTab === index
                        ? "bg-orange-500 text-white shadow-lg transform scale-105 border-2 border-orange-400"
                        : "bg-gray-800 text-gray-200 hover:bg-gray-700 border-2 border-gray-700"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">{beneficio.icone}</span>
                      <span className="text-xl font-semibold">
                        {beneficio.titulo}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Conteúdo da Aba */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
                <div className="animate-fade-in">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <span className="text-3xl mr-3">
                      {beneficios[activeTab].icone}
                    </span>
                    {beneficios[activeTab].titulo}
                  </h3>
                  <p className="text-gray-300 text-lg mb-6">
                    {beneficios[activeTab].descricao}
                  </p>
                  <ul className="space-y-3">
                    {beneficios[activeTab].detalhes.map((detalhe, idx) => (
                      <li key={idx} className="flex items-center text-gray-200">
                        <span className="text-orange-400 mr-2">✓</span>
                        {detalhe}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Números */}
        <section className="py-16 bg-orange-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="animate-bounce-in">
                <div className="text-4xl md:text-6xl font-bold mb-2">92%</div>
                <div className="text-orange-200">Empregabilidade</div>
              </div>
              <div
                className="animate-bounce-in"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="text-4xl md:text-6xl font-bold mb-2">18-24</div>
                <div className="text-orange-200">Meses de Duração</div>
              </div>
              <div
                className="animate-bounce-in"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="text-4xl md:text-6xl font-bold mb-2">
                  R$ 3.5k
                </div>
                <div className="text-orange-200">Salário Inicial Médio</div>
              </div>
              <div
                className="animate-bounce-in"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="text-4xl md:text-6xl font-bold mb-2">1000+</div>
                <div className="text-orange-200">Empresas Parceiras</div>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
              Quem Fez, Recomenda!
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {depoimentos.map((depoimento, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700"
                >
                  <div className="text-4xl mb-4">{depoimento.avatar}</div>
                  <p className="text-gray-300 italic mb-4">
                    {depoimento.texto}
                  </p>
                  <div className="border-t border-gray-600 pt-4">
                    <div className="font-bold text-white">
                      {depoimento.nome}
                    </div>
                    <div className="text-orange-400 text-sm">
                      {depoimento.curso}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Transformar sua Carreira?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Inscreva-se agora e dê o primeiro passo rumo ao sucesso
              profissional
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4">
              <button
                onClick={() => setShowModalConsultor(true)}
                className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Falar com um Consultor
              </button>
              <button
                onClick={downloadGradeCurricular}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-lg"
              >
                Baixar Grade Curricular
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Modal Falar com Consultor */}
      {showModalConsultor && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg max-w-md w-full p-6 animate-modal-in border border-orange-500">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">
                Fale com um Consultor
              </h3>
              <button
                onClick={() => setShowModalConsultor(false)}
                className="text-orange-400 hover:text-orange-300 text-xl"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleSubmitConsultor}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-orange-300 mb-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-600 bg-gray-800 text-white rounded-md focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-orange-300 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-600 bg-gray-800 text-white rounded-md focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-orange-300 mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    placeholder="Telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-600 bg-gray-800 text-white rounded-md focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-orange-300 mb-1">
                    Curso de Interesse
                  </label>
                  <select
                    name="cursoInteresse"
                    value={formData.cursoInteresse}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-600 bg-gray-800 text-white rounded-md focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    required
                  >
                    <option value="" className="bg-gray-800">Selecione um curso</option>
                    {cursos.map((curso, index) => (
                      <option key={index} value={curso.nome} className="bg-gray-800">
                        {curso.nome}
                      </option>
                    ))}
                  </select>
                </div>

                {statusConsultor && (
                  <p
                    className={`text-sm ${
                      statusConsultor.toLowerCase().includes("sucesso") ||
                      statusConsultor.toLowerCase().includes("enviada")
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {statusConsultor}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loadingConsultor}
                  className={`w-full text-white py-2 rounded-md transition-colors font-bold ${
                    loadingConsultor
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-orange-500 hover:bg-orange-600"
                  }`}
                >
                  {loadingConsultor ? "Enviando..." : "Solicitar Contato"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Quero Me Inscrever */}
      {showModalInscricao && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg max-w-md w-full p-6 animate-modal-in border border-orange-500">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">
                Inscreva-se Agora
              </h3>
              <button
                onClick={() => setShowModalInscricao(false)}
                className="text-orange-400 hover:text-orange-300 text-xl"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleSubmitInscricao}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-orange-300 mb-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    placeholder="Nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-600 bg-gray-800 text-white rounded-md focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-orange-300 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-600 bg-gray-800 text-white rounded-md focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-orange-300 mb-1">
                    Telefone
                  </label>
                  <input
                    placeholder="(31) 99999-9999"
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-600 bg-gray-800 text-white rounded-md focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-orange-300 mb-1">
                    Curso de Interesse
                  </label>
                  <select
                    name="cursoInteresse"
                    value={formData.cursoInteresse}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-600 bg-gray-800 text-white rounded-md focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    required
                  >
                    <option value="" className="bg-gray-800">Selecione um curso</option>
                    {cursos.map((curso, index) => (
                      <option key={index} value={curso.nome} className="bg-gray-800">
                        {curso.nome}
                      </option>
                    ))}
                  </select>
                </div>

                {statusInscricao && (
                  <p
                    className={`text-sm ${
                      statusInscricao.toLowerCase().includes("sucesso")
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {statusInscricao}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loadingInscricao}
                  className={`w-full text-white py-2 rounded-md transition-colors font-bold ${
                    loadingInscricao
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-orange-500 hover:bg-orange-600"
                  }`}
                >
                  {loadingInscricao ? "Enviando..." : "Finalizar Inscrição"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes modal-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out;
        }
        .animate-modal-in {
          animation: modal-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}