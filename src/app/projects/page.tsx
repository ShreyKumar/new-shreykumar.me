"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "AI Resume Builder",
      description: "A multi-step, AI-driven Next.js web app enabling users to create resumes through an interview-style workflow.",
      bullets: [
        "Built with Next.js 16, React Server Components, and Vercel AI SDK.",
        "Integrated AI-assisted UI generation via V0 to prototype user flows rapidly.",
        "Designed a robust API route for handling prompts with Anthropic Claude."
      ],
      tags: ["Next.js", "AI", "Anthropic Claude", "Vercel"],
      github: "https://github.com/ShreyKumar/ai-resume-builder",
      demo: "https://v0-resume-generator-app-jade.vercel.app/"
    },
    {
      title: "SleekCarousal",
      description: "A highly customizable and animated React Carousel NPM package.",
      bullets: [
        "Implemented panning, scrolling, and relay animations using the Framer Motion API.",
        "Created a clickable dot tracker to monitor active slides leveraging efficient React state management.",
        "Secured 100+ weekly downloads since publication."
      ],
      tags: ["React", "NPM Package", "Framer Motion", "TypeScript"],
      github: "#",
      demo: "https://npmjs.com/package/sleek-react-carousel"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A selection of personal initiatives, open-source packages, and AI integrations I&apos;ve built.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            className="glass rounded-2xl p-8 flex flex-col h-full hover:shadow-lg transition-all hover:-translate-y-1 border border-border"
          >
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
              <div className="flex gap-3">
                {project.github !== "#" && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110">
                    <span className="sr-only">GitHub</span>
                    <Github size={24} />
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110">
                    <span className="sr-only">Live Demo</span>
                    <ExternalLink size={24} />
                  </a>
                )}
              </div>
            </div>
            
            <p className="text-muted-foreground text-lg mb-6 flex-grow">{project.description}</p>
            
            <ul className="list-disc leading-relaxed text-muted-foreground pl-5 space-y-2 mb-8 marker:text-primary/50 text-sm">
              {project.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
