export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Isabella Miquelanti",
    "description": "Nutricionista especializada em alimentação materno-infantil em Belo Horizonte",
    "url": "https://isabellamiquelanti.com.br",
    "telephone": "+5531999999999",
    "email": "contato@isabellamiquelanti.com.br",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Belo Horizonte",
      "addressRegion": "MG",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-19.9167",
      "longitude": "-43.9345"
    },
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 08:00-12:00"
    ],
    "sameAs": [
      "https://www.instagram.com/isabellamiquelanti",
      "https://www.facebook.com/isabellamiquelanti"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços Nutricionais",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Reeducação Alimentar",
            "description": "Processo de aprendizado para hábitos alimentares saudáveis"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Nutrição e Autismo",
            "description": "Acompanhamento nutricional especializado para crianças com autismo"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "APLV - Alergia à Proteína do Leite de Vaca",
            "description": "Tratamento nutricional para alergia à proteína do leite de vaca"
          }
        }
      ]
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Andre Muniz"
        },
        "reviewBody": "Você me faz mais feliz, me faz dormir melhor, me deixa mais tranquilo durante a semana, me dá motivos para anseiar os feriados. A minha maior sorte foi te conhecer e o meu maior prazer vai ser crescer ao seu lado. Te amo, muito mais"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "3",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
