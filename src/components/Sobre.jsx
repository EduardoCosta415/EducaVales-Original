export default function Sobre(){
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Sobre a EducaValestec</h1>
        
        <p className="text-lg text-gray-700 mb-6">
          Somos uma plataforma educacional focada em formar os melhores profissionais de tecnologia do mercado.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Certificação Reconhecida</h2>
            <p className="text-gray-700">
              Nossas certificações são reconhecidas pelo mercado e ajudam a preparar um ambiente em relação ao mercado tecnológico.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Instrutores Especialistas</h2>
            <p className="text-gray-700">
              Aprenda com profissionais que estão no mercado, com experiência em grandes projetos e empresas.
            </p>
          </div>
        </div>
        
        <div className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Nossa Experiência</h2>
          <p className="text-gray-700">
            Com mais de 2 anos de experiência no mercado, já formamos milhares de profissionais que hoje atuam em empresas de destaque no Brasil e no mundo.
          </p>
        </div>
      </div>
    </div>
  );
}