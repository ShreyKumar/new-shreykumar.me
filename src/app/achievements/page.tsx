"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Award, Star } from "lucide-react";
import Head from "next/head";

export default function AchievementsPage() {
  return (
    <div className="flex flex-col gap-24 pb-12 w-full pt-12 md:pt-20">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto w-full px-4 mb-20"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            <span className="text-primary">Achievements</span> & Education
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-light">
            A snapshot of my formal education, professional certifications, and industry recognition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Awards Column */}
          <div className="glass p-8 md:p-10 rounded-3xl border border-border shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-border/50 text-primary">
              <div className="p-3 bg-primary/10 rounded-2xl">
                <Trophy size={32} />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Awards & Recognition</h2>
            </div>
            <ul className="space-y-8">
              <li className="flex items-start gap-5">
                <div className="p-2.5 bg-secondary/80 rounded-xl shrink-0 mt-1 text-primary shadow-sm"><Medal size={22} /></div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">Best Retail Project</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">MACH Alliance Awards 2022 (Myplanet x Harry Rosen)</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="p-2.5 bg-secondary/80 rounded-xl shrink-0 mt-1 text-primary shadow-sm"><Award size={22} /></div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">Top 100 Mentors in UX Engineering</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">ADPList (3-time recipient: 2024–2025)</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="p-2.5 bg-secondary/80 rounded-xl shrink-0 mt-1 text-primary shadow-sm"><Medal size={22} /></div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">Web Excellence Award</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">Spirent.com CMS Platform</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="p-2.5 bg-secondary/80 rounded-xl shrink-0 mt-1 text-primary shadow-sm"><Star size={22} /></div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">Secured Series A & Series B Funding</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">Architected core applications for Urbancoolab</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Education Column */}
          <div className="glass p-8 md:p-10 rounded-3xl border border-border shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-border/50 text-primary">
              <div className="p-3 bg-primary/10 rounded-2xl">
                <Award size={32} />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Education & Certifications</h2>
            </div>
            <ul className="space-y-8">
              <li className="flex items-start gap-5">
                <div className="p-2.5 bg-secondary/80 rounded-xl shrink-0 mt-1 text-primary shadow-sm"><Medal size={22} /></div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">B.Sc. Computer Science (Honours)</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">University of Toronto, St. George Campus</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="p-2.5 bg-secondary/80 rounded-xl shrink-0 mt-1 text-primary shadow-sm"><Award size={22} /></div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">Engineering to Technical Manager</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">Udemy Certificate</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="p-2.5 bg-secondary/80 rounded-xl shrink-0 mt-1 text-primary shadow-sm"><Star size={22} /></div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">System Design & Rust Crash Course</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">Udemy (2023)</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="p-2.5 bg-secondary/80 rounded-xl shrink-0 mt-1 text-primary shadow-sm"><Award size={22} /></div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">Amplience Foundations Training</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">Amplience (2022)</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="p-2.5 bg-secondary/80 rounded-xl shrink-0 mt-1 text-primary shadow-sm"><Star size={22} /></div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">Haskell, Python & Web Accessibility</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">Various completions (2014–2021)</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
