"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Card, Badge, Heading } from "@/components/ui/Primitives";
import ExperienceCard from "@/components/ExperienceCard";

export default function AboutContent() {
  return (
    <main className="max-w-4xl mx-auto space-y-16 px-4">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        aria-labelledby="about-title"
      >
        <Heading level={1} id="about-title">About Me</Heading>
        <p className="text-xl text-muted-foreground leading-relaxed">
          I am a {PORTFOLIO_DATA.title} with expertise in creating scalable web applications,
          driving architectural modernizations, and leading cross-functional teams. I specialize in the modern frontend ecosystem
          and composable commerce, always striving for excellence in performance, code quality, and user experience.
        </p>

        <div className="mt-12">
          <Heading level={2} className="border-b pb-2">Technical Skills</Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
            {PORTFOLIO_DATA.skills.map((skill, index) => (
              <Card
                key={skill.category}
                delay={0.1 * index}
                role="listitem"
                aria-labelledby={`skill-${index}-title`}
              >
                <Heading level={3} id={`skill-${index}-title`} className="text-lg mb-2">
                  {skill.category}
                </Heading>
                <p className="text-muted-foreground leading-relaxed">{skill.items}</p>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        aria-labelledby="experience-title"
      >
        <Heading level={2} id="experience-title" className="border-b pb-4 mb-10">Professional Experience</Heading>

        <div className="space-y-4">
          {PORTFOLIO_DATA.experience.map((exp, index) => (
            <ExperienceCard
              key={`${exp.company}-${exp.role}`}
              role={exp.role}
              company={exp.company}
              location={exp.location}
              duration={exp.duration}
              description={exp.description}
              bullets={exp.bullets}
            >
              {exp.subRoles?.map((sub) => (
                <div key={sub.role} className="pl-0 md:pl-6 border-l-2 border-border mt-8 pt-6">
                  <Heading level={4} className="text-xl mb-1">{sub.role}</Heading>
                  <p className="text-muted-foreground mb-4 font-medium text-sm">{sub.duration}</p>
                  <ul className="list-disc leading-relaxed text-muted-foreground pl-5 space-y-3 marker:text-primary/50">
                    {sub.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </ExperienceCard>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
