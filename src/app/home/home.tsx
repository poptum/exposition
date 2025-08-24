import Image from "next/image";
import Menu from "@/components/Menu";
import Testimonial from "@/components/Testimonial";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Menu Component */}
      <Menu />

      {/* Main Content */}
      <section className="relative z-10 md:py-10 flex items-center" aria-labelledby="hero-heading">

        <div className="container hidden md:flex mx-auto flex flex-col md:flex-row items-center justify-around bg-green-800/5 ">

          <div className="max-w-2xl flex flex-col justify-center align-center items-center">
            {/* Main Heading */}
            <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold  mb-6 leading-tight">
              <span className="block ">Isabella Miquelanti</span>
            </h1>

            <p className="text-xl   mb-6 leading-relaxed max-w-xl">
              Nutricionista especializada em alimentação materno-infantil situada em Belo Horizonte-MG
            </p> 
            <p className="text-2xl   mb-6 leading-relaxed max-w-xl">
              Trazendo amor e cuidado para a saúde da sua família
            </p> 


          </div>
          <div className="flex justify-center">
            <Image 
              src="/love.jpg" 
              alt="Isabella Miquelanti - Nutricionista especializada em alimentação materno-infantil em Belo Horizonte" 
              width={500} 
              height={300} 
              className="rounded-lg object-cover w-full max-w-md"
              priority
            />
          </div>
        </div>
        {/* Mobile introductionView */}
        <div className="container flex justify-center md:hidden">
          <div className="relative w-full max-w-md h-80 rounded-lg overflow-hidden">
            <Image 
              src="/love.jpg" 
              alt="Isabella Miquelanti - Nutricionista especializada em alimentação materno-infantil em Belo Horizonte" 
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40 flex items-end justify-end">
              <div className="text-center text-white p-6">
                <h2 className="text-2xl font-bold mb-3">Isabella Miquelanti</h2>
                <p className="text-sm leading-relaxed">
                  Nutricionista especializada em alimentação materno-infantil
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="relative z-10 bg-white pb-5" aria-labelledby="about-heading">
        <div className="container mx-auto px-8">
          <h2 id="about-heading" className="sr-only">Sobre Isabella Miquelanti</h2>
          <AboutMe
            image="/love2.jpg"
            text="Nutricionista especializada em nutrição materno-infantil, formada pela Universidade Federal de Minas Gerais (UFMG). Atuando em Belo Horizonte, minha missão é promover a saúde e o bem-estar desde os primeiros anos de vida através de um acompanhamento nutricional humanizado, baseado em ciência e empatia. Com uma abordagem acolhedora e individualizada, auxilio famílias na construção de hábitos alimentares saudáveis e sustentáveis para crianças e adolescentes. Meu compromisso com a qualidade do atendimento e a constante atualização profissional refletem-se na confiança de meus pacientes e suas famílias."
            alt="Isabella Miquelanti - Nutricionista especializada em nutrição materno-infantil"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10" aria-labelledby="services-heading">
        <div className="container mx-auto">

          {/* Services content */}
          <div className="space-y-10 md:space-y-20 bg-green-800/5 px-8 py-4 md:py-8">
            <h2 id="services-heading" className="text-4xl font-bold text-center text-gray-800 mb-8">
              Especialidades
            </h2>
          
            <article className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
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
                  alt="Reeducação Alimentar - Processo de aprendizado para hábitos alimentares saudáveis" 
                  width={500} 
                  height={300} 
                  className="rounded-lg object-cover w-full max-w-md"
                />
              </div>
            </article>

            {/* Section 2 */}
            <article className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 flex justify-center">
                <Image 
                  src="/aplv.jpg" 
                  alt="Alergia à proteína do leite de vaca (APLV) - Tratamento nutricional especializado" 
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
            </article>

            {/* Section 3 */}
            <article className="grid md:grid-cols-2 gap-12 items-center">
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
                  alt="Nutrição e Autismo - Acompanhamento nutricional especializado para crianças com autismo" 
                  width={500} 
                  height={300} 
                  className="rounded-lg object-cover w-full max-w-md"
                />
              </div>
            </article>
          </div>

          {/* Testimonials Section */}
          <section className="mt-4 md:mt-20 px-8" aria-labelledby="testimonials-heading">
            <h2 id="testimonials-heading" className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Depoimentos dos Pacientes
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              <Testimonial
                image="/andre.jpeg"
                text="Você me faz mais feliz, me faz dormir melhor, me deixa mais tranquilo durante a semana, me dá motivos para anseiar os feriados. A minha maior sorte foi te conhecer e o meu maior prazer vai ser crescer ao seu lado. Te amo, muito mais"
                name="Andre Muniz"
                alt="Andre Muniz - Depoimento sobre Isabella Miquelanti"
              />
              <Testimonial
                image="/cool_cat.jpeg"
                text="THE hottest nutritionist i've ever seen, too bad she's already taken. 10/10 would recommend"
                name="Andrew Javier"
                alt="Andrew Javier - Depoimento sobre Isabella Miquelanti"
              />
              <Testimonial
                image="/waterfall_andre.jpeg"
                text="Eu nunca tive tanta certeza de algo, como a certeza de que eu te amo, seja na cidade ou no campo, nas montanhas ou no mar, se eu tiver você, eu terei tudo que eu preciso	"
                name="Erdna Zinum"
                alt="Erdna Zinum - Depoimento sobre Isabella Miquelanti"
              />
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="text-center mt-4 md:mt-20 py-16 bg-gray-50 rounded-2xl bg-green-800/5 px-8" aria-labelledby="cta-heading">
            <h2 id="cta-heading" className="text-3xl font-bold text-gray-800 mb-6">
              Gostaria de conversar com a Nutri ?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Atendemos presencialmente e online. Entre em contato para agendar sua consulta.
            </p>
            <div className="space-x-4">
              <a 
                href="/booking" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-block"
                aria-label="Agendar consulta com Isabella Miquelanti"
              >
                Agende uma consulta
              </a>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
