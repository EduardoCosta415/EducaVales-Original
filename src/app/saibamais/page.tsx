'use client';


import Footer from "@/components/Footer";
import { useState} from "react";

export default function SaibaMais() {
  const [activeTab, setActiveTab] = useState(0);

  const [showModalConsultor, setShowModalConsultor] = useState(false);
  const [showModalInscricao, setShowModalInscricao] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cursoInteresse: ""
  });

 

  const beneficios = [
    {
      titulo: "Aprendizado Prático",
      icone: "🎯",
      descricao: "Você aprende fazendo! Desenvolve habilidades reais que pode aplicar imediatamente no mercado de trabalho.",
      detalhes: [
        "Projetos baseados em situações reais do mercado",
        "Laboratórios equipados com tecnologia atual",
        "Metodologia learning by doing"
      ]
    },
    {
      titulo: "Flexibilidade",
      icone: "⏱️",
      descricao: "Estude no seu ritmo! Reconhecemos suas experiências anteriores e adaptamos seu plano de estudos.",
      detalhes: [
        "Reconhecimento de conhecimentos prévios",
        "Horários flexíveis",
        "Possibilidade de acelerar sua formação"
      ]
    },
    {
      titulo: "Empregabilidade",
      icone: "💼",
      descricao: "Saia pronto para o mercado! Foco direto nas competências que as empresas realmente buscam.",
      detalhes: [
        "Contato com empresas desde o primeiro semestre",
        "Portfólio de competências reconhecido pelo mercado",
        "Taxa de empregabilidade acima de 85%"
      ]
    },
    {
      titulo: "Custo-Benefício",
      icone: "💰",
      descricao: "Investimento inteligente! Formação rápida e focada, com retorno garantido em pouco tempo.",
      detalhes: [
        "Duração menor que cursos tradicionais",
        "Mensalidades acessíveis",
        "Retorno do investimento em média em 6 meses"
      ]
    }
  ];

  const depoimentos = [
    {
      nome: "Ana Silva",
      curso: "Análise e Desenvolvimento de Sistemas",
      texto: "Em 1 ano já estava trabalhando na área! A metodologia por competências fez toda a diferença.",
      avatar: "👩‍💻"
    },
    {
      nome: "Carlos Santos",
      curso: "Gestão Comercial",
      texto: "Reconheceram minha experiência como vendedor e pude me formar em menos tempo!",
      avatar: "👨‍💼"
    },
    {
      nome: "Marina Costa",
      curso: "Enfermagem",
      texto: "A parte prática me preparou tão bem que fui contratada ainda durante o estágio!",
      avatar: "👩‍⚕️"
    }
  ];

  const cursos = [
    { nome: "Enfermagem", cargaHoraria: "70h" },
    { nome: "Análise e Desenvolvimento de Sistemas", cargaHoraria: "80h" },
    { nome: "Administração", cargaHoraria: "60h" },
    { nome: "Gestão Comercial", cargaHoraria: "65h" },
    { nome: "Psicologia", cargaHoraria: "75h" },
    { nome: "Engenharia Civil", cargaHoraria: "85h" }
  ];

const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};

  const handleSubmitConsultor = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de envio do formulário
    console.log("Dados do consultor:", formData);
    alert("Solicitação enviada! Um consultor entrará em contato em breve.");
    setShowModalConsultor(false);
    setFormData({ nome: "", email: "", telefone: "", cursoInteresse: "" });
  };

  const handleSubmitInscricao = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de inscrição
    console.log("Dados de inscrição:", formData);
    alert("Inscrição realizada com sucesso! Em breve enviaremos mais informações.");
    setShowModalInscricao(false);
    setFormData({ nome: "", email: "", telefone: "", cursoInteresse: "" });
  };

  const downloadGradeCurricular = () => {
    // Criar conteúdo do PDF em formato de texto simples
    const content = `
      GRADE CURRICULAR - CURSOS DISPONÍVEIS
      
      Confira abaixo a lista completa de cursos e suas respectivas cargas horárias:
      
      ${cursos.map(curso => `• ${curso.nome} - ${curso.cargaHoraria}`).join('\n      ')}
      
      Para mais informações sobre cada curso, entre em contato com nossos consultores!
      
      © ${new Date().getFullYear()} - Todos os direitos reservados
    `;

    // Criar blob e link para download
    const blob = new Blob([content], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'grade-curricular-cursos.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      
      
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 transform transition-transform duration-700 ease-out">
              Educação que Transforma sua Carreira
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Descubra por que a formação por competências é o caminho mais inteligente para o sucesso profissional
            </p>
            <button 
              onClick={() => setShowModalInscricao(true)}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 "
            >
              Quero Me Inscrever
            </button>
          </div>
        </section>

        {/* Benefícios com Abas Interativas */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Vantagens Exclusivas da Nossa Metodologia
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Navegação por Abas */}
              <div className="space-y-4">
                {beneficios.map((beneficio, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                      activeTab === index 
                        ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">{beneficio.icone}</span>
                      <span className="text-xl font-semibold">{beneficio.titulo}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Conteúdo da Aba Ativa */}
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <div className="animate-fade-in">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="text-3xl mr-3">{beneficios[activeTab].icone}</span>
                    {beneficios[activeTab].titulo}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6">
                    {beneficios[activeTab].descricao}
                  </p>
                  <ul className="space-y-3">
                    {beneficios[activeTab].detalhes.map((detalhe, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="text-green-500 mr-2">✓</span>
                        {detalhe}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Números Impactantes */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="animate-bounce-in">
                <div className="text-4xl md:text-6xl font-bold mb-2">92%</div>
                <div className="text-blue-200">Empregabilidade</div>
              </div>
              <div className="animate-bounce-in" style={{animationDelay: '0.2s'}}>
                <div className="text-4xl md:text-6xl font-bold mb-2">18-24</div>
                <div className="text-blue-200">Meses de Duração</div>
              </div>
              <div className="animate-bounce-in" style={{animationDelay: '0.4s'}}>
                <div className="text-4xl md:text-6xl font-bold mb-2">R$ 3.5k</div>
                <div className="text-blue-200">Salário Inicial Médio</div>
              </div>
              <div className="animate-bounce-in" style={{animationDelay: '0.6s'}}>
                <div className="text-4xl md:text-6xl font-bold mb-2">1000+</div>
                <div className="text-blue-200">Empresas Parceiras</div>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Quem Fez, Recomenda!
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {depoimentos.map((depoimento, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="text-4xl mb-4">{depoimento.avatar}</div>
                  <p className="text-gray-600 italic mb-4">{depoimento.texto}</p>
                  <div className="border-t pt-4">
                    <div className="font-bold text-gray-800">{depoimento.nome}</div>
                    <div className="text-blue-600 text-sm">{depoimento.curso}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-r from-green-500 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Transformar sua Carreira?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Inscreva-se agora e dê o primeiro passo rumo ao sucesso profissional
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4">
              <button 
                onClick={() => setShowModalConsultor(true)}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300"
              >
                Falar com um Consultor
              </button>
              <button 
                onClick={downloadGradeCurricular}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
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
          <div className="bg-white rounded-lg max-w-md w-full p-6 animate-modal-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Fale com um Consultor</h3>
              <button 
                onClick={() => setShowModalConsultor(false)}
                className="text-black hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleSubmitConsultor}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-1">Nome Completo</label>
                  <input
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300  rounded-md text-black placeholder-green-4000"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 text-black rounded-md placeholder-green-4000"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                  <input
                    type="tel"
                    name="telefone"
                    placeholder="Telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300  text-black rounded-md placeholder-green-4000"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Curso de Interesse</label>
                  <select
                    name="cursoInteresse"
                    value={formData.cursoInteresse}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 text-black rounded-md"
                    required
                  >
                    <option value="">Selecione um curso</option>
                    {cursos.map((curso, index) => (
                      <option key={index} value={curso.nome}>{curso.nome}</option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Solicitar Contato
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Quero Me Inscrever */}
      {showModalInscricao && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 animate-modal-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Inscreva-se Agora</h3>
              <button 
                onClick={() => setShowModalInscricao(false)}
                className="text-black hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleSubmitInscricao}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                  <input
                    type="text"
                    placeholder="Nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="w-full p-2 border text-black border-gray-300 rounded-md placeholder-green-4000"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border text-black border-gray-300 rounded-md placeholder-green-4000"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                  <input
                    placeholder="(31)9999-9999"
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    className="w-full p-2 border text-black border-gray-300 rounded-md placeholder-green-4000"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Curso de Interesse</label>
                  <select
                    name="cursoInteresse"
                    value={formData.cursoInteresse}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 text-black rounded-md"
                    required
                  >
                    <option value="">Selecione um curso</option>
                    {cursos.map((curso, index) => (
                      <option key={index} value={curso.nome}>{curso.nome}</option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors"
                >
                  Finalizar Inscrição
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes modal-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
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