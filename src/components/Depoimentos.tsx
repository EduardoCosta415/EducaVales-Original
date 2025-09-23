export default function Depoimentos() {
  const depoimentos = [
    {
      nome: "Maria Silva",
      curso: "Técnico em Marketing",
      texto: "A metodologia dos cursos é prática e direto ao ponto. O resultado é muito satisfatório e superou minhas expectativas!",
      avatar: "/avatar1.jpg"
    },
    {
      nome: "João Santos",
      curso: "Técnico em Enfermagem",
      texto: "Consegui uma promoção apenas 3 meses após concluir o curso. Agora atuo em uma grande empresa com um salário muito melhor.",
      avatar: "/avatar2.jpg"
    },
    {
      nome: "Ana Costa",
      curso: "Técnico em Segurança do Trabalho",
      texto: "O curso é muito completo e me preparou para as exigências do mercado. Recomendo para todos que querem crescer na área.",
      avatar: "/avatar3.jpg"
    }
  ];

  return (
    <section id="depoimentos" className="py-16 bg-gradient-to-tr from-white to-orange-50">
      <div className="container mx-auto px-4 bg-gradient-to-tr from-white to-orange-50">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">O que nossos alunos dizem</h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Depoimentos de quem já transformou sua carreira e conquistou novas oportunidades.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {depoimentos.map((depoimento, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={depoimento.avatar}
                  alt={depoimento.nome}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-semibold text-black">{depoimento.nome}</h3>
                  <p className="text-sm text-black">{depoimento.curso}</p>
                </div>
              </div>
              <p className="text-black italic">{depoimento.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
