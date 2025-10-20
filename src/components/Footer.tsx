'use client';
import { useState, MouseEvent } from "react";
import Image from "next/image";

type ModalType = "privacidade" | "termos" | null;

export default function Footer() {
  const [openModal, setOpenModal] = useState<ModalType>(null);

  const handleCloseModal = (e?: MouseEvent<HTMLButtonElement>) => {
    if (e) e.stopPropagation();
    setOpenModal(null);
  };

  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          {/* topo */}
          <div className="grid lg:grid-cols-2 gap-10 pb-10 border-b border-gray-700">
            {/* Informações da empresa */}
            <div className="flex flex-col">
              <div className="flex items-center mb-6">
                <span className="text-3xl font-bold text-orange-500 mr-2">🎓</span>
                <h3 className="text-2xl font-bold text-white">EducaValesTec</h3>
              </div>
              <p className="text-gray-400 max-w-md mb-6">
                Formando os melhores profissionais técnicos do mercado com
                excelência e comprometimento. Nossa missão é transformar vidas
                através da educação.
              </p>

              {/* Redes sociais */}
              <div className="flex space-x-4">
                {/* Facebook */}
                <a
                  href="#"
                  className="bg-orange-500 hover:bg-orange-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
               
              </div>
            </div>

            {/* Colunas */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Institucional */}
              <div>
                <h4 className="font-semibold text-lg mb-4 text-white relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-orange-500">
                  Institucional
                </h4>
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => setOpenModal("privacidade")}
                      className="text-gray-400 hover:text-orange-500 transition-colors"
                    >
                      Políticas de privacidade
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setOpenModal("termos")}
                      className="text-gray-400 hover:text-orange-500 transition-colors"
                    >
                      Termos de uso
                    </button>
                  </li>
                </ul>
              </div>

              {/* Contato */}
              <div>
                <h4 className="font-semibold text-lg mb-4 text-white relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-orange-500">
                  Contato
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-400">Rua Luiz Rodrigues dos Santos, nº 44, Coronel Fabriciano - MG</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-400">(11) 3619-0514</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-400">recepcao@educavalestecnico.com.br</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

          {/* Copyright */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2023 EducaValesTec. Todos os direitos reservados.</p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-gray-400 text-sm mr-2">Métodos de pagamento:</span>
              <div className="flex flex-wrap gap-2">
                <div className="bg-gray-800 p-2 rounded flex items-center justify-center">
                  <Image src="/credit.webp" alt="Cartão de Crédito" width={40} height={24} className="object-contain" />
                </div>
                <div className="bg-gray-800 p-2 rounded flex items-center justify-center">
                  <Image src="/Boleto.webp" alt="Boleto Bancário" width={40} height={24} className="object-contain" />
                </div>
                <div className="bg-gray-800 p-2 rounded flex items-center justify-center">
                  <Image src="/pix.png" alt="Pix" width={40} height={24} className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg shadow-lg max-w-4xl w-full p-6 relative text-gray-300 overflow-y-auto max-h-[80vh]">
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-orange-500 text-2xl"
            >
              &times;
            </button>

            {openModal === "privacidade" && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-6 text-white">Política de Privacidade</h2>
                
                <section className="space-y-3">
                  <h3 className="text-lg font-semibold text-orange-500">1. Coleta de Informações</h3>
                  <p>Coletamos informações pessoais quando você se cadastra em nossa plataforma, preenche formulários, realiza matrículas ou interage conosco. As informações podem incluir:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Nome completo e dados de contato</li>
                    <li>Informações de pagamento e cobrança</li>
                    <li>Dados acadêmicos e profissionais</li>
                    <li>Histórico de navegação e interações</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold text-orange-500">2. Uso das Informações</h3>
                  <p>Utilizamos suas informações para:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Processar matrículas e pagamentos</li>
                    <li>Fornecer suporte técnico e acadêmico</li>
                    <li>Personalizar sua experiência de aprendizado</li>
                    <li>Enviar comunicados importantes sobre cursos</li>
                    <li>Melhorar nossos serviços e plataforma</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold text-orange-500">3. Compartilhamento de Dados</h3>
                  <p>Não compartilhamos seus dados pessoais com terceiros, exceto quando necessário para:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Processamento de pagamentos através de gateways seguros</li>
                    <li>Cumprimento de obrigações legais</li>
                    <li>Parcerias educacionais autorizadas previamente</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold text-orange-500">4. Segurança</h3>
                  <p>Implementamos medidas de segurança técnicas e administrativas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.</p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold text-orange-500">5. Seus Direitos</h3>
                  <p>Você tem direito a:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Acessar e corrigir seus dados pessoais</li>
                    <li>Solicitar a exclusão de suas informações</li>
                    <li>Revogar consentimentos a qualquer momento</li>
                    <li>Opor-se ao processamento de dados</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold text-orange-500">6. Contato</h3>
                  <p>Para questões sobre privacidade, entre em contato através do e-mail: <span className="text-orange-500">privacidade@educavalestec.com</span></p>
                </section>

                <p className="text-sm text-gray-400 mt-6">Última atualização: Janeiro de 2024</p>
              </div>
            )}

            {openModal === "termos" && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-6 text-white">Termos de Uso</h2>
                
                <section className="space-y-3">
                  <h3 className="text-lg font-semibold text-orange-500">1. Aceitação dos Termos</h3>
                  <p>Ao acessar e utilizar a plataforma EducaValesTec, você concorda em cumprir estes Termos de Uso e nossa Política de Privacidade.</p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold text-orange-500">2. Cadastro e Conta</h3>
                  <p>Para utilizar nossos serviços, você deve:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Fornecer informações verdadeiras e atualizadas</li>
                    <li>Manter a confidencialidade de sua senha</li>
                    <li>Ser maior de 18 anos ou ter autorização parental</li>
                    <li>Notificar-nos imediatamente sobre uso não autorizado</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold text-orange-500">3. Conduta do Usuário</h3>
                  <p>É proibido:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Utilizar a plataforma para atividades ilegais</li>
                    <li>Compartilhar conteúdo ofensivo ou discriminatório</li>
                    <li>Tentar acessar áreas restritas do sistema</li>
                    <li>Realizar atividades que comprometam a segurança</li>
                    <li>Reproduzir ou distribuir materiais do curso sem autorização</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold text-orange-500">4. Propriedade Intelectual</h3>
                  <p>Todo o conteúdo disponibilizado na plataforma, incluindo vídeos, materiais didáticos, textos e software, é propriedade da EducaValesTec ou de seus licenciantes e está protegido por leis de direitos autorais.</p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold text-orange-500">5. Pagamentos e Reembolsos</h3>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Os valores dos cursos são divulgados no momento da matrícula</li>
                    <li>Pagamentos são processados através de gateways seguros</li>
                    <li>Política de reembolso segue as normas do Código de Defesa do Consumidor</li>
                    <li>Cancelamentos devem ser solicitados por escrito</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold text-orange-500">6. Limitação de Responsabilidade</h3>
                  <p>A EducaValesTec não se responsabiliza por:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Danos resultantes de uso inadequado da plataforma</li>
                    <li>Interrupções temporárias por manutenção técnica</li>
                    <li>Conteúdo de sites externos vinculados à nossa plataforma</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold text-orange-500">7. Modificações nos Termos</h3>
                  <p>Reservamo-nos o direito de modificar estes Termos a qualquer momento. Alterações significativas serão comunicadas com antecedência.</p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold text-orange-500">8. Lei Aplicável</h3>
                  <p>Estes Termos são regidos pelas leis brasileiras. Eventuais disputas serão resolvidas no foro da comarca de Coronel Fabriciano - MG.</p>
                </section>

                <p className="text-sm text-gray-400 mt-6">Última atualização: Janeiro de 2024</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}