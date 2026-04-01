"use client";

import { motion } from "framer-motion";
import { Users, GraduationCap, Briefcase, Star, Trophy, Award } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Heading, Badge } from "@/components/ui/Primitives";

export default function MentorshipContent() {
  const getIcon = (type: string, size = 32) => {
    switch (type) {
      case "users": return <Users size={size} className="text-primary mb-4" />;
      case "graduation": return <GraduationCap size={size} className="text-primary mb-4" />;
      case "briefcase": return <Briefcase size={size} className="text-primary mb-4" />;
      case "star": return <Star size={size} className="text-primary mb-4" />;
      case "trophy": return <Trophy size={size} className="text-primary mb-4" />;
      case "award": return <Award size={size} className="text-primary mb-4" />;
      default: return <Users size={size} className="text-primary mb-4" />;
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <Heading level={1}>Mentorship</Heading>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          I am deeply passionate about giving back to the developer community. Over the years, I&apos;ve had the privilege
          of guiding aspiring engineers and career transitioners into the tech industry.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PORTFOLIO_DATA.mentorship.roles.map((role, index) => (
          <motion.div
            key={`${role.organization}-${role.title}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            className="glass p-8 rounded-2xl flex flex-col items-center text-center hover:shadow-xl transition-shadow border border-border"
          >
            {getIcon(role.type)}
            <h2 className="text-2xl font-bold mb-2 text-foreground">{role.title}</h2>
            <p className="text-lg font-medium text-primary mb-2">{role.organization}</p>
            <Badge className="mb-6">{role.duration}</Badge>
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
