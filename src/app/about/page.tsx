import type { Metadata } from "next";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import AboutContent from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "About Shrey Kumar | 10+ Years Software Engineering Experience",
  description: "Learn about Shrey Kumar — Senior Software Engineer & Technical Lead with 10+ years of experience in React, Next.js, TypeScript, Node.js, and composable commerce. Full work history from ecobee, Corra, Orium, and more.",
  keywords: [
    "Shrey Kumar about", "Shreyansh Kumar experience", "software engineer work history",
    "senior frontend engineer", "technical lead experience", "React Next.js TypeScript developer",
    "composable commerce engineer", "e-commerce technical lead", "software engineer Vancouver Canada"
  ],
  alternates: { canonical: "https://shreykumar.me/about" },
  openGraph: {
    title: "About Shrey Kumar | Senior Software Engineer",
    description: "10+ years of experience building scalable web applications. Full work history, technical skills, and career achievements.",
    url: "https://shreykumar.me/about",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://shreykumar.me" },
    { "@type": "ListItem", "position": 2, "name": "About", "item": "https://shreykumar.me/about" }
  ]
};

const workHistorySchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Work Experience — Shrey Kumar",
  "description": "Complete professional work history of Shrey Kumar, Senior Software Engineer & Technical Lead",
  "itemListElement": PORTFOLIO_DATA.experience.map((exp, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "EmployeeRole",
      "roleName": exp.role,
      "description": exp.description ?? exp.bullets[0],
      "startDate": exp.duration.split("–")[0].trim(),
      "endDate": exp.duration.includes("Present") ? undefined : exp.duration.split("–")[1]?.trim(),
      "worksFor": {
        "@type": "Organization",
        "name": exp.company,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": exp.location
        }
      }
    }
  }))
};

export default function About() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(workHistorySchema) }} />
      <AboutContent />
    </>
  );
}
