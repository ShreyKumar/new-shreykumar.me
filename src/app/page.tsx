import type { Metadata } from "next";
import HomeContent from "@/components/pages/HomeContent";

export const metadata: Metadata = {
  title: "Shrey Kumar | Senior Software Engineer & Technical Lead | Available for Hire",
  description: "Shrey Kumar (Shreyansh Kumar) — Senior Software Engineer & Technical Lead based in Vancouver. 10+ years building high-performance web apps with React, Next.js & TypeScript. Open to full-time, contract, and consulting opportunities.",
  keywords: [
    "Shrey Kumar", "Shreyansh Kumar", "hire software engineer", "senior software engineer for hire",
    "technical lead for hire", "React developer", "Next.js developer", "TypeScript engineer",
    "frontend engineer Vancouver", "full stack developer Canada", "contract software engineer",
    "freelance software engineer", "software engineer portfolio", "e-commerce developer",
    "composable commerce engineer", "headless commerce developer"
  ],
  alternates: { canonical: "https://shreykumar.me" },
  openGraph: {
    type: "profile",
    url: "https://shreykumar.me",
    title: "Shrey Kumar | Senior Software Engineer & Technical Lead",
    description: "10+ years building high-performance web apps with React, Next.js & TypeScript. Available for full-time, contract, and consulting opportunities.",
    firstName: "Shreyansh",
    lastName: "Kumar",
    username: "shreykumar",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Shrey Kumar available for hire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Shrey Kumar is currently available for new opportunities including full-time senior software engineering roles, contract engagements, and technical consulting. He is based in Vancouver, BC and is open to remote work worldwide. Contact him at shreykumar961@gmail.com or via LinkedIn at linkedin.com/in/shreykumar."
      }
    },
    {
      "@type": "Question",
      "name": "What technologies does Shrey Kumar specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shrey Kumar specializes in React, Next.js, TypeScript, JavaScript, Node.js, GraphQL, and Tailwind CSS. He has deep expertise in headless and composable commerce platforms including Commercetools, Contentful, and Amplience CMS. He also works with GCP, Docker, CI/CD pipelines, and AI SDK integrations."
      }
    },
    {
      "@type": "Question",
      "name": "What is Shrey Kumar's most recent role?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shrey Kumar's most recent role is Senior Software Engineer, DotCom at ecobee (January 2025–present), where he architected scalable vendor integration frameworks, drove a 63% month-over-month increase in purchase revenue, and led the site's migration from Gatsby to Next.js on GCP."
      }
    },
    {
      "@type": "Question",
      "name": "How many years of experience does Shrey Kumar have?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shrey Kumar has over 10 years of professional software engineering experience, starting with internships at Digital Butter (2013) and RightBlue Labs (2015), and progressing through senior and lead roles at companies including ecobee, Corra, Orium, and Urbancoolab."
      }
    },
    {
      "@type": "Question",
      "name": "Can I hire Shrey Kumar for contract or freelance work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Shrey Kumar is open to contract, freelance, and consulting engagements in addition to full-time roles. He has experience leading technical initiatives across multiple companies simultaneously. Reach out via shreykumar961@gmail.com to discuss availability and rates."
      }
    },
    {
      "@type": "Question",
      "name": "Where is Shrey Kumar located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shrey Kumar is based in the Greater Vancouver Metropolitan Area, British Columbia, Canada. He is open to remote work globally and has worked with distributed teams across North America, Europe, and APAC throughout his career."
      }
    },
    {
      "@type": "Question",
      "name": "What kind of projects has Shrey Kumar worked on?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shrey Kumar has worked on high-traffic e-commerce platforms for enterprise clients including Harry Rosen, ecobee, General Electric, Princess Auto, Spirent Communications, and Movado Group. He has built headless commerce solutions, vendor integration frameworks, CMS platforms, and AI-powered applications."
      }
    }
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeContent />
    </>
  );
}
