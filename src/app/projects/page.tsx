import type { Metadata } from "next";
import ProjectsContent from "@/components/pages/ProjectsContent";

export const metadata: Metadata = {
  title: "Projects | AI Resume Builder & Open Source | Shrey Kumar",
  description: "Personal projects by Shrey Kumar — including an AI Resume Builder built with Next.js and Anthropic Claude, and SleekCarousal, a React NPM package with 100+ weekly downloads.",
  keywords: [
    "Shrey Kumar projects", "AI resume builder Next.js", "React NPM package",
    "open source software engineer", "Anthropic Claude project", "Vercel AI SDK project",
    "software engineer portfolio projects"
  ],
  alternates: { canonical: "https://shreykumar.me/projects" },
  openGraph: {
    title: "Projects | Shrey Kumar",
    description: "Personal and open-source projects including an AI Resume Builder and React NPM package.",
    url: "https://shreykumar.me/projects",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://shreykumar.me" },
    { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://shreykumar.me/projects" }
  ]
};

const projectListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Software Projects — Shrey Kumar",
  "description": "Personal and open-source software projects built by Shrey Kumar.",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "SoftwareSourceCode",
        "name": "AI Resume Builder",
        "description": "A multi-step, AI-driven Next.js web app enabling users to create resumes through an interview-style workflow. Built with Next.js, React Server Components, Vercel AI SDK, and Anthropic Claude.",
        "codeRepository": "https://github.com/ShreyKumar/ai-resume-builder",
        "url": "https://v0-resume-generator-app-jade.vercel.app/",
        "programmingLanguage": ["TypeScript", "JavaScript"],
        "runtimePlatform": "Next.js",
        "author": { "@id": "https://shreykumar.me/#person" }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "SoftwareSourceCode",
        "name": "SleekCarousal",
        "description": "A highly customizable and animated React Carousel NPM package using Framer Motion. Secured 100+ weekly downloads since publication.",
        "url": "https://npmjs.com/package/sleek-react-carousel",
        "programmingLanguage": ["TypeScript", "JavaScript"],
        "runtimePlatform": "React",
        "author": { "@id": "https://shreykumar.me/#person" }
      }
    }
  ]
};

export default function Projects() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectListSchema) }} />
      <ProjectsContent />
    </>
  );
}
