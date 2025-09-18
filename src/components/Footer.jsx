import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-10 pb-10 border-b border-gray-700">
          {/* Informações da empresa */}
          <div className="flex flex-col">
            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold text-orange-500 mr-2">🎓</span>
              <h3 className="text-2xl font-bold text-white">EducaValesTec</h3>
            </div>
            <p className="text-gray-400 max-w-md mb-6">
              Formando os melhores profissionais técnicos do mercado com excelência 
              e comprometimento. Nossa missão é transformar vidas através da educação.
            </p>
            
            {/* Redes sociais */}
            <div className="flex space-x-4">
              <a href="#" className="bg-orange-500 hover:bg-orange-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="bg-orange-500 hover:bg-orange-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.293 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
              <a href="#" className="bg-orange-500 hover:bg-orange-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
              <a href="#" className="bg-orange-500 hover:bg-orange-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Grade de informações */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Institucional */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-white relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-orange-500">
                Institucional
              </h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Sobre nós</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Trabalhe conosco</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Políticas de privacidade</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Termos de uso</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Tutoriais</a></li>
              </ul>
            </div>
            
            {/* Suporte */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-white relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-orange-500">
                Suporte
              </h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Área do Aluno</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Certificados</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Fale Conosco</a></li>
              </ul>
            </div>
            
            {/* Contato */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-white relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-orange-500">
                Contato
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-400">Av. Paulista, 1000, São Paulo - SP, 01310-100</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-400">(11) 3000-1000</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-400">contato@educavalestec.com</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-400">Seg à Sex: 8h às 18h</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="py-8 border-b border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Assine nossa newsletter</h4>
              <p className="text-gray-400">Receba novidades e atualizações sobre nossos cursos.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-gray-800 text-white px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 w-full md:w-64"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-r-lg transition-colors whitespace-nowrap">
                Assinar
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright e pagamentos */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2023 EducaValesTec. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 text-sm mr-2">Métodos de pagamento:</span>
            <div className="flex space-x-1">
              <div className="bg-gray-800 p-1 rounded">
                <svg className="w-8 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 18h-2v-9h2v9zm5 0h-2v-9h2v9zm-2.5-12h-2.5l-2.5 3h2.5l2.5-3z"/>
                </svg>
              </div>
              <div className="bg-gray-800 p-1 rounded">
                <svg className="w-8 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17h-2v-7h2v7zm4 0h-2v-7h2v7zm-6-9c0-.552.447-1 1-1s1 .448 1 1-.447 1-1 1-1-.448-1-1zm4 0c0-.552.447-1 1-1s1 .448 1 1-.447 1-1 1-1-.448-1-1z"/>
                </svg>
              </div>
              <div className="bg-gray-800 p-1 rounded">
                <svg className="w-8 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16h-2v-5h2v5zm-1-6c-.553 0-1-.447-1-1s.447-1 1-1 1 .447 1 1-.447 1-1 1z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}