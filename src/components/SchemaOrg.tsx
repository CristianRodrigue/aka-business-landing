export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "AKA Business",
    "alternateName": "AKA Business Web Systems",
    "url": "https://akabusiness.tech",
    "logo": "https://akabusiness.tech/icon.png",
    "image": "https://akabusiness.tech/opengraph-image.png",
    "description": "Full-stack web systems studio focused on fast business websites, e-commerce flows, performance optimization, and practical automation.",
    "founder": {
      "@type": "Person",
      "name": "Christian Camilo",
      "sameAs": [
        "https://github.com/CristianRodrigue",
        "https://www.linkedin.com/in/christian-camilo-dev/"
      ]
    },
    "knowsAbout": [
      "Full-Stack Development",
      "Next.js",
      "Web Performance",
      "E-commerce Development",
      "Digital Automation",
      "Software Engineering",
      "React Development"
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
