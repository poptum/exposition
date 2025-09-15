import type { Metadata } from "next";
import Home from "./home/home";

export const metadata: Metadata = {
  title: "Isabella Miquelanti - Nutricionista Materno-Infantil | Belo Horizonte",
  description: "Nutricionista especializada em alimentação materno-infantil em Belo Horizonte. Especialista em reeducação alimentar, APLV e nutrição para autismo. Agende sua consulta.",
  keywords: [
    "nutricionista",
    "nutrição materno-infantil", 
    "Belo Horizonte",
    "reeducação alimentar",
    "APLV",
    "autismo",
    "nutrição infantil",
    "consultoria nutricional"
  ],
  openGraph: {
    title: "Isabella Miquelanti - Nutricionista Materno-Infantil",
    description: "Nutricionista especializada em alimentação materno-infantil em Belo Horizonte. Especialista em reeducação alimentar, APLV e nutrição para autismo.",
    images: [
      {
        url: '/love.jpg',
        width: 1200,
        height: 630,
        alt: 'Isabella Miquelanti - Nutricionista',
      },
    ],
  },
  alternates: {
    canonical: '/',
  },
};

export default function Page() {
  return <Home />;
}
