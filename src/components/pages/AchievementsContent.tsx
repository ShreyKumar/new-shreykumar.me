"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Award, Star, Users } from "lucide-react";

export default function AchievementsContent() {
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
            <span className="text-primary">Achievements</span>, Education & Mentorship
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-light">
            A snapshot of my formal education, professional certifications, industry recognition, and mentorship impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Awards Column */}
          <div className="glass p-8 md:p-10 rounded-3xl border border-border shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-border/50 text-primary">
              <div className="p-3 bg-primary/10 rounded-2xl">
                <Trophy size={32} aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Awards & Recognition</h2>
            </div>
            <ul className="space-y-8">
              <li className="flex items-start gap-5">
                <div className="p-2.5 bg-secondary/80 rounded-xl shrink-0 mt-1 text-primary shadow-sm"><Medal size={22} aria-hidden="true" /></div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">Best Retail Project</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">MACH Alliance Awards 2022 (Myplanet x Harry Rosen)</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="p-2.5 bg-secondary/80 rounded-xl shrink-0 mt-1 text-primary shadow-sm"><Award size={22} aria-hidden="true" /></div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">Top 100 Mentors in UX Engineering</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">ADPList (3-time recipient: 2024–2025)</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="p-2.5 bg-secondary/80 rounded-xl shrink-0 mt-1 text-primary shadow-sm"><Medal size={22} aria-hidden="true" /></div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">Web Excellence Award</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">Spirent.com CMS Platform</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="p-2.5 bg-secondary/80 rounded-xl shrink-0 mt-1 text-primary shadow-sm"><Star size={22} aria-hidden="true" /></div>
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
                <Award size={32} aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Education & Certifications</h2>
            </div>
            <ul className="space-y-8">
              <li className="flex items-start gap-5">
                <div className="p-2.5 bg-secondary/80 rounded-xl shrink-0 mt-1 text-primary shadow-sm"><Medal size={22} aria-hidden="true" /></div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">B.Sc. Computer Science (Honours)</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">University of Toronto, St. George Campus</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="p-2.5 bg-secondary/80 rounded-xl shrink-0 mt-1 text-primary shadow-sm"><Award size={22} aria-hidden="true" /></div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">Engineering to Technical Manager</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">Udemy Certificate</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="p-2.5 bg-secondary/80 rounded-xl shrink-0 mt-1 text-primary shadow-sm"><Star size={22} aria-hidden="true" /></div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">System Design & Rust Crash Course</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">Udemy (2023)</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="p-2.5 bg-secondary/80 rounded-xl shrink-0 mt-1 text-primary shadow-sm"><Award size={22} aria-hidden="true" /></div>
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

          {/* Mentorship & Coaching Column */}
          <div className="glass p-8 md:p-10 rounded-3xl border border-border shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 lg:col-span-2">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-border/50 text-primary">
              <div className="p-3 bg-primary/10 rounded-2xl">
                <Users size={32} />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Mentorship & Coaching</h2>
            </div>

            {/* Metrics Banner */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <div className="text-center p-4 bg-secondary/50 rounded-2xl">
                <p className="text-3xl font-extrabold text-foreground">5+</p>
                <p className="text-xs text-muted-foreground font-medium mt-1">Years Mentoring</p>
              </div>
              <div className="text-center p-4 bg-secondary/50 rounded-2xl">
                <p className="text-3xl font-extrabold text-foreground">5</p>
                <p className="text-xs text-muted-foreground font-medium mt-1">Organizations</p>
              </div>
              <div className="text-center p-4 bg-secondary/50 rounded-2xl">
                <p className="text-3xl font-extrabold text-foreground">4.7+</p>
                <p className="text-xs text-muted-foreground font-medium mt-1">Avg Rating / 5</p>
              </div>
              <div className="text-center p-4 bg-secondary/50 rounded-2xl">
                <p className="text-3xl font-extrabold text-foreground">90%+</p>
                <p className="text-xs text-muted-foreground font-medium mt-1">Satisfaction Rate</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="space-y-8">
                <li className="flex items-start gap-5">
                  <div className="p-2.5 bg-secondary/80 rounded-xl shrink-0 mt-1 text-primary shadow-sm"><Award size={22} /></div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">Top 100 Mentors — ADPList</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">3-time recipient in UX Engineering (2024–2025). Guided 50+ mentees globally across companies like Amazon, Shopify, and early-stage startups on career progression, system design, and interview preparation.</p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="p-2.5 bg-secondary/80 rounded-xl shrink-0 mt-1 text-primary shadow-sm"><Star size={22} /></div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">Web Dev Instructor — CareerFoundry</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">Educated 100+ career-transitioning students on full-stack web development (2021–2025). Provided code reviews, portfolio feedback, and 1-on-1 coaching that helped graduates land roles at companies including Google, TD Bank, and Deloitte.</p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="p-2.5 bg-secondary/80 rounded-xl shrink-0 mt-1 text-primary shadow-sm"><Medal size={22} /></div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">Career Expert — Wizco</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">Conducted 75+ mock technical and behavioral interviews (2022–2024). Coached candidates targeting FAANG and Big 5 consulting firms on salary negotiation, resume optimization, and system design strategies.</p>
                  </div>
                </li>
              </ul>
              <ul className="space-y-8">
                <li className="flex items-start gap-5">
                  <div className="p-2.5 bg-secondary/80 rounded-xl shrink-0 mt-1 text-primary shadow-sm"><Trophy size={22} /></div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">Youth Coach™ — Youthfully</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">Mentoring ambitious high school and university students (2022–present) on STEM career paths, university admissions, and early-career planning. Maintained a 4.7+/5 average rating with a 90%+ session satisfaction rate across 100+ sessions.</p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="p-2.5 bg-secondary/80 rounded-xl shrink-0 mt-1 text-primary shadow-sm"><Star size={22} /></div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">Private Tutor — Superprof</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">Taught programming fundamentals to 20+ beginners (2021–2022), covering Python, JavaScript, and web development. Helped students prepare for technical coding interviews and bootcamp admissions.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
