import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Isabella Miquelanti - Nutricionista Materno-Infantil | Belo Horizonte",
    template: "%s | Isabella Miquelanti"
  },
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
  authors: [{ name: "Isabella Miquelanti" }],
  creator: "Isabella Miquelanti",
  publisher: "Isabella Miquelanti",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://isabellamiquelanti.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://isabellamiquelanti.com.br',
    title: 'Isabella Miquelanti - Nutricionista Materno-Infantil',
    description: 'Nutricionista especializada em alimentação materno-infantil em Belo Horizonte. Especialista em reeducação alimentar, APLV e nutrição para autismo.',
    siteName: 'Isabella Miquelanti Nutrição',
    images: [
      {
        url: '/love.jpg',
        width: 1200,
        height: 630,
        alt: 'Isabella Miquelanti - Nutricionista',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Isabella Miquelanti - Nutricionista Materno-Infantil',
    description: 'Nutricionista especializada em alimentação materno-infantil em Belo Horizonte',
    images: ['/love.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#166534" />
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
