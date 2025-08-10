import Image from "next/image";
import Menu from "@/components/Menu";
import Testimonial from "@/components/Testimonial";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <div className="relative  overflow-hidden">
      {/* Menu Component */}
      <Menu />

      {/* Main Content */}
      <div className="relative z-10 py-10 flex items-center bg-green-800/5 ">

        <div className="container mx-auto flex flex-col md:flex-row items-center justify-around">

          <div className="max-w-2xl">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold  mb-6 leading-tight">
              <span className="block ">Isabella Miquellanti</span>
            </h1>

            <p className="text-2xl  mb-6 leading-relaxed max-w-xl">
              Nutricionista especializada em alimentação infantil atuando em Belo Horizonte-MG
            </p> 
            <p className="text-2xl  mb-6 leading-relaxed max-w-xl">
              Trazendo amor e cuidado para a saúde da sua família
            </p> 


          </div>
          <div className="flex justify-center">
            <Image 
              src="/love.jpg" 
              alt="Nutri Bella Miquellanti" 
              width={500} 
              height={300} 
              className="rounded-lg object-cover w-full max-w-md"
            />
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="relative z-10 bg-white py-20">
        <div className="container mx-auto px-8">
          <AboutMe
            image="/love2.jpg"
            text="Nutricionista especializada em nutrição infantil com formação pela Universidade Federal de Minas Gerais (UFMG). Atuando em Belo Horizonte, minha missão é promover a saúde e o bem-estar desde os primeiros anos de vida através de um acompanhamento nutricional humanizado, baseado em ciência e empatia. Com uma abordagem acolhedora e individualizada, auxilio famílias na construção de hábitos alimentares saudáveis e sustentáveis para crianças e adolescentes. Meu compromisso com a qualidade do atendimento e a constante atualização profissional refletem-se na confiança de meus pacientes e suas famílias."
            alt="Nutri Bella Miquellanti"
          />
        </div>
      </div>

      {/* Infinite Scroll Section */}
      <div className="relative z-10 bg-white">
        <div className="container mx-auto px-8 py-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Especialidades
          </h2>
          
          {/* Infinite scroll content */}
          <div className="space-y-20">
            {/* Section 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Reeducação Alimentar
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  O processo de aprender a comer melhor, com equilíbrio e consciência. Em vez de dietas restritivas, ela propõe mudanças graduais nos hábitos, promovendo saúde e bem-estar de forma duradoura.
                </p>
              </div>
              <div className="flex justify-center">
                <Image 
                  src="/reed_alimentar.jpg" 
                  alt="Reeducação Alimentar" 
                  width={500} 
                  height={300} 
                  className="rounded-lg object-cover w-full max-w-md"
                />
              </div>
            </div>

            {/* Section 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 flex justify-center">
                <Image 
                  src="/aplv.jpg" 
                  alt="Alergia à proteína do leite de vaca" 
                  width={500} 
                  height={300} 
                  className="rounded-lg object-cover w-full max-w-md"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Alergia à proteína do leite de vaca (APLV)
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  É uma reação do sistema imunológico às proteínas presentes no leite e seus derivados. É mais comum em bebês e crianças pequenas, podendo causar sintomas como diarreia, vômitos, cólicas, dermatites e dificuldades respiratórias. O tratamento envolve a exclusão completa do leite de vaca e produtos que o contenham, com acompanhamento nutricional para garantir o crescimento e desenvolvimento adequados.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Nutrição e Autismo
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  O acompanhamento nutricional de crianças com autismo é essencial para promover saúde, bem-estar e qualidade de vida. Muitas vezes, essas crianças apresentam seletividade alimentar, dificuldades sensoriais ou restrições específicas que podem impactar o crescimento e a nutrição. Com orientação profissional, é possível adaptar a alimentação às necessidades individuais, respeitando preferências e promovendo uma relação mais tranquila com os alimentos.
                </p>
              </div>
              <div className="flex justify-center">
                <Image 
                  src="/autismo.jpg" 
                  alt="Nutrição e Autismo" 
                  width={500} 
                  height={300} 
                  className="rounded-lg object-cover w-full max-w-md"
                />
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Depoimentos dos Pacientes
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              <Testimonial
                image="/logo.png"
                text="A Nutri Bella transformou a alimentação da minha filha. Sua abordagem carinhosa e profissional fez toda a diferença no nosso dia a dia."
                alt="Mãe de paciente"
              />
              <Testimonial
                image="/logo.png"
                text="Excelente profissional! Conseguiu resolver os problemas alimentares do meu filho com autismo de forma muito eficaz e respeitosa."
                alt="Pai de paciente"
              />
              <Testimonial
                image="/logo.png"
                text="Recomendo muito! Bella é uma nutricionista excepcional que realmente se importa com o bem-estar das crianças e suas famílias."
                alt="Família de paciente"
              />
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="text-center mt-20 py-16 bg-gray-50 rounded-2xl">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Gostaria de conversar com a Nutri ?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Atendemos presencialmente e online. Entre em contato para agendar sua consulta.
            </p>
            <div className="space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Agende uma consulta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
