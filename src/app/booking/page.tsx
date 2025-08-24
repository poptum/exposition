import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agendar Consulta - Isabella Miquelanti",
  description: "Agende sua consulta nutricional com Isabella Miquelanti. Atendimento presencial e online em Belo Horizonte. Especialista em nutrição materno-infantil.",
  keywords: ["agendar consulta", "consulta nutricional", "nutricionista", "Belo Horizonte", "agendamento online"],
  openGraph: {
    title: "Agendar Consulta - Isabella Miquelanti",
    description: "Agende sua consulta nutricional presencial ou online",
  },
};

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Agende sua Consulta
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transforme a saúde da sua família com acompanhamento nutricional especializado
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          {/* Services Overview */}
          <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Nossos Serviços
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Reeducação Alimentar</h3>
                <p className="text-gray-600 text-sm">
                  Aprenda a comer melhor com equilíbrio e consciência
                </p>
              </div>

              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Nutrição Infantil</h3>
                <p className="text-gray-600 text-sm">
                  Acompanhamento especializado para crianças e adolescentes
                </p>
              </div>

              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Consultas Especializadas</h3>
                <p className="text-gray-600 text-sm">
                  APLV, autismo e outras condições específicas
                </p>
              </div>
            </div>
          </section>

          {/* Booking Form */}
          <section className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Formulário de Agendamento
            </h2>
            
            <form className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Sobrenome *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Seu sobrenome"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="(31) 9XXXX-XXXX"
                  />
                </div>
              </div>

              {/* Consultation Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="consultationType" className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo de Consulta *
                  </label>
                  <select
                    id="consultationType"
                    name="consultationType"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Selecione o tipo</option>
                    <option value="presencial">Presencial</option>
                    <option value="online">Online</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Serviço de Interesse *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Selecione o serviço</option>
                    <option value="reeducacao">Reeducação Alimentar</option>
                    <option value="infantil">Nutrição Infantil</option>
                    <option value="aplv">APLV - Alergia à Proteína do Leite de Vaca</option>
                    <option value="autismo">Nutrição e Autismo</option>
                    <option value="primeira-consulta">Primeira Consulta</option>
                    <option value="retorno">Retorno</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Data Preferencial *
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
                    Horário Preferencial *
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Selecione o horário</option>
                    <option value="08:00">08:00</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
                  Informações Adicionais
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Descreva sua necessidade, histórico médico relevante ou outras informações importantes..."
                ></textarea>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  required
                  className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  Concordo com os <a href="/terms" className="text-green-600 hover:text-green-700 underline">termos de serviço</a> e 
                  <a href="/privacy" className="text-green-600 hover:text-green-700 underline"> política de privacidade</a> *
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300 text-lg"
              >
                Solicitar Agendamento
              </button>
            </form>
          </section>

          {/* Additional Information */}
          <section className="mt-12 text-center">
            <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                📞 Precisa de ajuda?
              </h3>
              <p className="text-blue-700 mb-4">
                Se preferir, você também pode entrar em contato diretamente:
              </p>
              <div className="space-y-2 text-blue-700">
                <p><strong>Email:</strong> contato@isabellamiquelanti.com.br</p>
                <p><strong>Telefone:</strong> (31) 9XXXX-XXXX</p>
                <p><strong>WhatsApp:</strong> (31) 9XXXX-XXXX</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
