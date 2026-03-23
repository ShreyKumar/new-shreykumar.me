"use client";

import { motion } from "framer-motion";
import { Users, GraduationCap, Briefcase } from "lucide-react";

export default function Mentorship() {
  const roles = [
    {
      title: "SWE Mentor",
      organization: "ADPList",
      years: "2024 - Present",
      icon: <Users size={32} className="text-primary mb-4" />,
      description: "Mentoring junior and mid-level software engineers globally, guiding them through technical challenges, career progression, and interview preparation."
    },
    {
      title: "Web Dev Instructor",
      organization: "CareerFoundry",
      years: "2021 - 2025",
      icon: <GraduationCap size={32} className="text-primary mb-4" />,
      description: "Educated students on full-stack web development principles, reviewing code, and providing actionable feedback to help them land their first engineering roles."
    },
    {
      title: "Career Expert",
      organization: "Wizco",
      years: "2022 - 2024",
      icon: <Briefcase size={32} className="text-primary mb-4" />,
      description: "Conducted mock technical and behavioral interviews, advising candidates on negotiation strategies and resume optimization."
    },
    {
      title: "Youth Coach™",
      organization: "Youthfully",
      years: "2022 - Present",
      icon: <Users size={32} className="text-primary mb-4" />,
      description: "Providing mentorship to ambitious youth looking to excel in Higher Education and beyond. Consistently maintaining a 4.7+/5 average rating with a 90%+ session satisfaction rate."
    },
    {
      title: "Private Tutor",
      organization: "Superprof",
      years: "2021 - 2022",
      icon: <GraduationCap size={32} className="text-primary mb-4" />,
      description: "Taught basic programming to beginners and helped them prepare for technical job interviews."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Mentorship</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          I am deeply passionate about giving back to the developer community. Over the years, I&apos;ve had the privilege
          of guiding aspiring engineers and career transitioners into the tech industry.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {roles.map((role, index) => (
          <motion.div
            key={role.organization}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            className="glass p-8 rounded-2xl flex flex-col items-center text-center hover:shadow-xl transition-shadow border border-border"
          >
            {role.icon}
            <h2 className="text-2xl font-bold mb-2 text-foreground">{role.title}</h2>
            <p className="text-lg font-medium text-primary mb-2">{role.organization}</p>
            <p className="text-sm font-semibold text-muted-foreground mb-6 bg-secondary px-3 py-1 rounded-full">{role.years}</p>
            <p className="text-muted-foreground leading-relaxed">{role.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-20 text-center glass p-10 rounded-3xl"
      >
        <h3 className="text-2xl font-bold mb-4">Looking for Guidance?</h3>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Whether you need advice on navigating engineering promotions, code reviews, or crushing a system design interview – let&apos;s connect!
        </p>
        <a 
          href="https://adplist.org/mentors/shreyansh-kumar" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-transform hover:-translate-y-1 shadow-lg cursor-pointer"
        >
          Book a Session on ADPList
        </a>
      </motion.div>
    </div>
  );
}
