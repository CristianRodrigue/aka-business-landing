export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "AKA Business",
    "alternateName": "AKA Business Digital Infrastructure",
    "url": "https://akabusiness.tech",
    "logo": "https://akabusiness.tech/icon.png",
    "image": "https://akabusiness.tech/opengraph-image.png",
    "description": "High-Performance Infrastructure Architecture firm specialized in mission-critical industrial systems and SSR optimization.",
    "founder": {
      "@type": "Person",
      "name": "Christian Camilo",
      "sameAs": [
        "https://github.com/CristianRodrigue",
        "https://www.linkedin.com/in/christian-camilo-dev/"
      ]
    },
    "knowsAbout": [
      "Infrastructure Architecture",
      "Next.js",
      "SSR Optimization",
      "Industrial Systems",
      "Software Engineering",
      "Performance Engineering"
    ],
    "areaServed": "Global",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CO"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
