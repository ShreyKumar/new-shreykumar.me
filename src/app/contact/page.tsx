import type { Metadata } from "next";
import ContactContent from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contact Shrey Kumar | Hire a Senior Software Engineer",
  description: "Get in touch with Shrey Kumar — Senior Software Engineer & Technical Lead available for full-time roles, contract work, and consulting. Based in Vancouver, open to remote opportunities worldwide.",
  keywords: [
    "contact Shrey Kumar", "hire senior software engineer", "hire React developer",
    "hire Next.js developer", "hire technical lead", "software engineer available",
    "remote software engineer for hire", "Vancouver software engineer contact"
  ],
  alternates: { canonical: "https://shreykumar.me/contact" },
  openGraph: {
    title: "Contact Shrey Kumar | Available for Hire",
    description: "Reach out to hire Shrey Kumar for full-time, contract, or consulting software engineering work.",
    url: "https://shreykumar.me/contact",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://shreykumar.me" },
    { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://shreykumar.me/contact" }
  ]
};

const hireFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I contact Shrey Kumar about a job opportunity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can reach Shrey Kumar directly at shreykumar961@gmail.com or connect with him on LinkedIn at linkedin.com/in/shreykumar. He typically responds within 24–48 hours."
      }
    },
    {
      "@type": "Question",
      "name": "Is Shrey Kumar open to remote work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Shrey Kumar is fully open to remote work globally. He has worked with distributed, cross-functional teams across North America, Europe, and APAC throughout his career and is experienced with remote-first engineering cultures."
      }
    },
    {
      "@type": "Question",
      "name": "What type of roles is Shrey Kumar looking for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shrey Kumar is interested in Senior Software Engineer, Staff Engineer, and Technical Lead roles at product companies or agencies working on scalable web platforms, e-commerce, or AI-integrated applications. He is open to full-time, contract, and consulting arrangements."
      }
    },
    {
      "@type": "Question",
      "name": "What industries has Shrey Kumar worked in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shrey Kumar has worked in smart home technology (ecobee), enterprise e-commerce and retail (Harry Rosen, Princess Auto, Movado Group), telecommunications (Spirent), and fintech/startup sectors. He has also worked extensively in coaching and education as a mentor and tutor."
      }
    },
    {
      "@type": "Question",
      "name": "Does Shrey Kumar have experience leading engineering teams?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Shrey Kumar has served as a Technical Lead at Corra (2023–2024), leading 3 global cross-functional teams to a perfect 10/10 client satisfaction score. He has a consistent track record of mentoring engineers, onboarding new hires to full productivity, and driving cross-functional technical decisions."
      }
    }
  ]
};

export default function Contact() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hireFaqSchema) }} />
      <ContactContent />
    </>
  );
}
