import type { Metadata } from "next";
import ClientsContent from "@/components/pages/ClientsContent";

export const metadata: Metadata = {
  title: "Client Work | E-Commerce & Enterprise Projects | Shrey Kumar",
  description: "Enterprise client work by Shrey Kumar — including ecobee, Harry Rosen, General Electric, Princess Auto, Spirent, and more. Delivered headless commerce, platform migrations, and vendor integrations at scale.",
  keywords: [
    "Shrey Kumar clients", "enterprise software projects", "headless commerce developer",
    "ecobee engineer", "Harry Rosen e-commerce", "commercetools developer",
    "Next.js e-commerce", "composable commerce portfolio", "MACH alliance developer"
  ],
  alternates: { canonical: "https://shreykumar.me/clients" },
  openGraph: {
    title: "Client Work | Shrey Kumar",
    description: "Enterprise e-commerce and platform projects delivered for ecobee, Harry Rosen, GE, and more.",
    url: "https://shreykumar.me/clients",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://shreykumar.me" },
    { "@type": "ListItem", "position": 2, "name": "Clients", "item": "https://shreykumar.me/clients" }
  ]
};

const clientListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Enterprise Clients — Shrey Kumar",
  "description": "Major enterprise and e-commerce clients Shrey Kumar has delivered projects for as a Senior Software Engineer and Technical Lead.",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "item": { "@type": "Organization", "name": "General Electric", "url": "https://www.ge.com" } },
    { "@type": "ListItem", "position": 2, "item": { "@type": "Organization", "name": "ecobee", "url": "https://www.ecobee.com" } },
    { "@type": "ListItem", "position": 3, "item": { "@type": "Organization", "name": "Do It Center Panama", "url": "https://www.doitcenter.com.pa" } },
    { "@type": "ListItem", "position": 4, "item": { "@type": "Organization", "name": "Movado Group", "url": "https://www.movadogroup.com" } },
    { "@type": "ListItem", "position": 5, "item": { "@type": "Organization", "name": "Harry Rosen", "url": "https://www.harryrosen.com" } },
    { "@type": "ListItem", "position": 6, "item": { "@type": "Organization", "name": "Princess Auto", "url": "https://www.princessauto.com" } },
    { "@type": "ListItem", "position": 7, "item": { "@type": "Organization", "name": "Spirent Communications", "url": "https://www.spirent.com" } },
  ]
};

export default function Clients() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clientListSchema) }} />
      <ClientsContent />
    </>
  );
}
