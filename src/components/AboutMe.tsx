"use client"
import Image from "next/image";

interface AboutMeProps {
  image: string;
  text: string;
  alt?: string;
}

export default function AboutMe({ image, text, alt = "About Me" }: AboutMeProps) {
  return (
    <div className="bg-white rounded-2xl md:shadow-xl py-8 md:px-8 md:mt-4 md:p-12">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Image Section */}
        <div className="flex justify-center md:justify-start">
          <div className="relative">
            <Image
              src={image}
              alt={alt}
              width={400}
              height={500}
              className="rounded-xl object-cover w-full max-w-sm shadow-lg"
            />
          </div>
        </div>
        
        {/* Text Content Section */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Sobre A Bella
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
          Uma pessoa boa demais para o mundo <br />
           Gentil a ponto de se doar sem medida <br />
           Mais gostosa que o melhor cheesecake <br />
           Com um sorriso que ilumina dias nublados <br /> 

          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
          Artística de alma <br />
          Engraçada sem esforço <br />
          Mágica sem saber <br />
          Capaz de conjurar grandes feitiços usando apenas uvas. <br />


          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
          A mulher da minha vida. <br />
          Incrível. Completa. Suficiente. <br />
          Desejo apenas que ela enxergue e aceite tudo que ela é. <br />

          </p>
          <div className="pt-4">
            <button className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            onClick={() => {
              window.open('https://wa.me/5531975039639', 'Olá, gostaria de agendar uma consulta com a Bella');
            }}
            >
              Converse com a Nutri
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 