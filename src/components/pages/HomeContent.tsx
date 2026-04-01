"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail, Trophy } from "lucide-react";

export default function HomeContent() {
  return (
    <article className="flex flex-col gap-24 pb-12 w-full" itemScope itemType="https://schema.org/Person">
      <section className="flex flex-col items-center justify-center min-h-[80vh]">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-8 flex justify-center"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <Image
                src="/professional.jpg"
                alt="Shreyansh Kumar"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 128px, 160px"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary"
          >
            Available for new opportunities
          </motion.div>

          <h1 itemProp="name" className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight text-balance">
            Building <span className="text-primary">Intelligent</span> Systems.
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed font-light max-w-2xl mx-auto">
            Senior Software Engineer & Technical Lead specializing in architecting high-performance enterprise platforms and integrating advanced AI solutions. I transform complex business challenges into scalable, intelligent software.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mb-16"
          >
            <Link
              href="/clients"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              View Client Work <ArrowRight size={20} />
            </Link>
            <Link
              href="/achievements"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass font-semibold hover:bg-card hover:text-foreground transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              My Achievements <Trophy size={20} />
            </Link>
            <Link
              href="mailto:shreykumar961@gmail.com?subject=Resume Request"
              className="px-8 py-4 rounded-2xl bg-secondary text-secondary-foreground font-semibold flex items-center justify-center gap-2 hover:bg-secondary/80 transition-all border border-border shadow-sm"
            >
              Request Resume <Mail size={20} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex items-center justify-center gap-6 text-muted-foreground"
          >
            <a href="https://linkedin.com/in/shreykumar" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:-translate-y-1 transition-all p-2 bg-card rounded-full border border-border shadow-sm">
              <span className="sr-only">LinkedIn</span>
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/ShreyKumar" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:-translate-y-1 transition-all p-2 bg-card rounded-full border border-border shadow-sm">
              <span className="sr-only">GitHub</span>
              <Github size={24} />
            </a>
            <Link href="/contact" className="hover:text-primary hover:-translate-y-1 transition-all p-2 bg-card rounded-full border border-border shadow-sm">
              <span className="sr-only">Contact</span>
              <Mail size={24} />
            </Link>
          </motion.div>
        </motion.header>
      </section>
    </article>
  );
}
