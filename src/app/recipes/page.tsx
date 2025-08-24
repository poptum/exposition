import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Receitas Nutricionais - Isabella Miquelanti",
  description: "Receitas saudáveis e nutritivas para toda a família. Dicas de alimentação infantil, receitas para APLV e autismo. Nutrição que transforma vidas.",
  keywords: ["receitas saudáveis", "nutrição infantil", "alimentação saudável", "receitas para crianças", "dicas nutricionais", "APLV", "autismo"],
  openGraph: {
    title: "Receitas Nutricionais - Isabella Miquelanti",
    description: "Receitas saudáveis e nutritivas para toda a família",
  },
};

export default function RecipesPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Receitas Nutricionais
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Receitas deliciosas e nutritivas para toda a família, desenvolvidas com carinho para promover saúde e bem-estar
          </p>
        </header>

        {/* Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Categorias
          </h2>
          <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              Todas
            </button>
            <button className="bg-white text-gray-700 px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
              Infantil
            </button>
            <button className="bg-white text-gray-700 px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
              APLV
            </button>
            <button className="bg-white text-gray-700 px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
              Autismo
            </button>
          </div>
        </section>

        {/* Featured Recipes */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Receitas em Destaque
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Recipe 1 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/nutri_infantil.jpg"
                  alt="Smoothie de frutas para crianças - Receita nutritiva e colorida"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-sm font-medium">
                  Infantil
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Smoothie de Frutas Colorido
                </h3>
                <p className="text-gray-600 mb-4">
                  Smoothie nutritivo e colorido, perfeito para introduzir frutas na alimentação das crianças de forma divertida.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Tempo: 10 min</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                    Ver Receita
                  </button>
                </div>
              </div>
            </article>

            {/* Recipe 2 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/reed_alimentar.jpg"
                  alt="Salada nutritiva para reeducação alimentar - Opção saudável e saborosa"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">
                  Reeducação
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Salada Nutritiva Completa
                </h3>
                <p className="text-gray-600 mb-4">
                  Salada rica em nutrientes, ideal para quem está iniciando uma reeducação alimentar saudável e sustentável.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Tempo: 15 min</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                    Ver Receita
                  </button>
                </div>
              </div>
            </article>

            {/* Recipe 3 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/aplv.jpg"
                  alt="Receita sem leite para APLV - Opção segura e nutritiva"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded text-sm font-medium">
                  APLV
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Bolo de Banana sem Leite
                </h3>
                <p className="text-gray-600 mb-4">
                  Bolo delicioso sem leite, perfeito para crianças com APLV. Feito com ingredientes seguros e nutritivos.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Tempo: 45 min</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                    Ver Receita
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Nutritional Tips */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Dicas Nutricionais
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                🌱 Como Introduzir Novos Alimentos
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Apresente um novo alimento por vez</li>
                <li>• Ofereça o mesmo alimento várias vezes</li>
                <li>• Seja paciente e não force</li>
                <li>• Dê o exemplo comendo junto</li>
                <li>• Torne a refeição divertida</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                🥗 Planejamento de Refeições
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Planeje o cardápio semanal</li>
                <li>• Prepare ingredientes com antecedência</li>
                <li>• Inclua proteínas, carboidratos e vegetais</li>
                <li>• Varie as cores dos alimentos</li>
                <li>• Mantenha horários regulares</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="text-center">
          <div className="bg-green-800/5 p-8 rounded-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Receba Novas Receitas
            </h2>
            <p className="text-gray-600 mb-6">
              Cadastre-se para receber receitas exclusivas e dicas nutricionais semanais
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Cadastrar
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
