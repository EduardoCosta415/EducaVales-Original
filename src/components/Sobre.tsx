export default function Sobre() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-orange-500">
            Sobre a EDUCAVALESTEC
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
            Instituição educacional inovadora, dedicada a formar os melhores
            profissionais de tecnologia do mercado. Nossa missão é transformar vidas por meio
            da educação de qualidade, acessível e focada nas demandas do mundo real.
          </p>
        </div>

        {/* Destaques */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Certificação Reconhecida
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Nossas certificações são amplamente reconhecidas pelo mercado, abrindo portas
              para oportunidades em grandes empresas e fortalecendo sua carreira na tecnologia.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Instrutores Especialistas
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Tenha aulas com profissionais experientes que atuam em grandes projetos, trazendo
              exemplos reais e práticas atualizadas para a sala de aula.
            </p>
          </div>
        </div>

        {/* Experiência */}
        <div className="bg-blue-50 p-10 rounded-2xl shadow-md mb-16 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
            Nossa Experiência
          </h2>
         <p className="text-gray-700 text-lg leading-relaxed">
  Já acumulamos{" "}
  <span className="font-bold text-orange-500">resultados consistentes</span>, 
  formando diversos profissionais que hoje aplicam seus conhecimentos em 
  empresas de destaque no Brasil.
</p>
        </div>

        {/* Parceiros */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-gray-900">
            Nossos Parceiros
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg">
              <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                {/* Espaço reservado para imagem */}
                <img 
                src="prefeitura.png"
                ></img>
                <span className="text-gray-500"></span>
              </div>
              <p className="text-sm font-medium text-gray-800">Prefeitura de Coronel Fabriciano</p>
            </div>

            <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg">
              <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                {/* Espaço reservado para imagem */}
                <img
                src="fsfx.jpg"
                alt="Prefeitura"
                className="w-full h-full object-contain rounded-full"
                ></img>

                <span className="text-gray-500"></span>
              </div>
              <p className="text-sm font-medium text-black">Hospital FSFX</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
