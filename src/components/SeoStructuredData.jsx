export function SeoStructuredData({ faqItems, contactMethods }) {
  const siteUrl =
    import.meta.env.VITE_SITE_URL ||
    (typeof window !== "undefined" ? window.location.origin : "https://www.kalebmekonen.dev");

  const email = contactMethods.find((method) => method.label === "Email")?.value || "";
  const telephone = contactMethods.find((method) => method.label === "WhatsApp")?.value || "";
  const github = contactMethods.find((method) => method.label === "GitHub")?.href || "";

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kaleb Mekonen",
    url: siteUrl,
    email,
    telephone,
    jobTitle: "Web Designer and Developer",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ET",
    },
    sameAs: github ? [github] : [],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Kaleb Mekonen Web Design",
    url: siteUrl,
    description:
      "Modern web design and development services for hotels, restaurants, real estate agencies, startups, and growing businesses.",
    areaServed: ["Ethiopia", "Worldwide"],
    founder: {
      "@type": "Person",
      name: "Kaleb Mekonen",
    },
    email,
    telephone,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kaleb Mekonen",
    url: siteUrl,
    description:
      "Modern business websites designed to build trust, attract customers, and strengthen online presence.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
