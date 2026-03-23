"use client";

import { motion } from "framer-motion";
import ExperienceCard from "@/components/ExperienceCard";

export default function About() {
  const skills = [
    { category: "Frontend", items: "React, Next.js, Gatsby, Netlify, JavaScript, TypeScript, HTML/CSS, Tailwind, Chakra UI, Vercel" },
    { category: "Backend", items: "Node.js, GraphQL, Commercetools, Contentful, Oracle Commerce Cloud, Shopify, Vercel AI SDK" },
    { category: "DevOps", items: "Docker, Kubernetes, Git, CI/CD" },
    { category: "AI Tools", items: "ChatGPT, Github Copilot, Gemini Code Assist, Claude Code, V0.dev" },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-16">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          I am a Senior Software Engineer and Technical Lead with expertise in creating scalable web applications, 
          driving architectural modernizations, and leading cross-functional teams. I specialize in the modern frontend ecosystem
          and composable commerce, always striving for excellence in performance, code quality, and user experience.
        </p>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.category} className="glass p-6 rounded-xl">
                <h3 className="text-lg font-bold text-primary mb-2">{skill.category}</h3>
                <p className="text-muted-foreground leading-relaxed">{skill.items}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10 border-b pb-4">Professional Experience</h2>
        
        <ExperienceCard
          role="Senior Software Engineer, Dotcom"
          company="Ecobee"
          location="REMOTE"
          duration="Jan 2025 – Present"
          description="Architected scalable vendor integration frameworks and platforms driving revenue growth and operational efficiency. Led cross-functional initiatives modernizing API and frontend ecosystems."
          bullets={[
            "Spearheaded the design and implementation of an external vendor federation layer underpinning a new Referral Marketing platform, establishing scalable integration patterns that enabled seamless partner onboarding and drove a 63% month-over-month increase in purchase revenue.",
            "Directed and unblocked a BNPL (Buy Now, Pay Later) integration, aligning Engineering, Product, and external partners, establishing future vendor evaluation standards.",
            "Performed a rigorous weighted scoring analysis evaluating GraphQL and REST within a modernized Next.js ecosystem, directly informing API strategy and influencing long term architectural direction.",
            "Driving critical architectural modernization, advocating for and shaping the site’s migration from Gatsby to a self-hosted Next.js platform on GCP to improve performance, developer experience and deployment flexibility.",
            "Accelerated team capacity by onboarding a returning Software Engineer to full productivity in under a month through focused mentorship, pair programming and streamlined knowledge transfer."
          ]}
        />

        <ExperienceCard
          role="Technical Lead, Composable Commerce"
          company="Corra"
          location="REMOTE"
          duration="Sep 2023 – Dec 2024"
          description="Directed multiple R&D initiatives that boosted site performance, improved sprint velocity, and minimized technical debt across 10+ projects."
          bullets={[
            "Achieved a perfect 10/10 client satisfaction score by leading 3 global, cross-functional teams in delivering key revenue-generating e-commerce solutions.",
            "Quadrupled sprint velocity and mitigated project risk by resolving an ongoing dispute between team leaders.",
            "Transformed Corra’s e-commerce internationalization package, using TypeScript and Next.js, gaining a 96% bundle size reduction, 80% faster TBT, and 20% better LCP performance.",
            "Eliminated all instances of fraud and password breaches by mitigating recurring cyber-attacks on a client project.",
            "Upgraded Corra’s commercetools accelerator using TypeScript, leading to better code quality, enhanced stability, and improved developer experience."
          ]}
        />

        <ExperienceCard
          role="Software Developer II"
          company="Orium"
          location="TORONTO, ON"
          duration="Sep 2022 – Aug 2023"
          description="Designed, developed, and maintained scalable software applications to gather requirements, troubleshoot issues, and implement solutions that enhance user experience."
          bullets={[
            "Attained a 10-20% reduction in server response times and improved long-term application scalability by leading significant refactoring efforts.",
            "Engineered a tax integration feature by integrating 3 third-party APIs and microservices (Oracle commerce Cloud, Bold commerce, and a custom Tax Service) to ensure regulatory compliance and enhance user experience."
          ]}
        >
          <div className="pl-0 md:pl-6 border-l-2 border-border mt-8 pt-6">
            <h4 className="text-xl font-bold text-foreground mb-1">Software Developer</h4>
            <p className="text-muted-foreground mb-4 font-medium text-sm">Sep 2020 – Sep 2022</p>
            <ul className="list-disc leading-relaxed text-muted-foreground pl-5 space-y-3 marker:text-primary/50">
              <li>Bolstered site-wide conversions up to 40% via successful integration of Wishlist and Recently Viewed Items features for HarryRosen.com.</li>
              <li>Fostered professional development by training 4 new hires, transforming them into high-performing valuable developers.</li>
              <li>Improved frontend codebase performance by 40% in CLS score and increased ticket velocity per sprint by partnering with the Solutions Architect on strategic best practices.</li>
              <li>Designed and developed Spirent.com as part of a 4-member Agile team by employing modern web development technologies, notably Contentful, React, Next.js, and Tailwind CSS.</li>
              <li>Delivered projects 10+ weeks ahead of schedule, meeting all business requirements before contract termination.</li>
            </ul>
          </div>
        </ExperienceCard>

        <ExperienceCard
          role="Full Stack Engineer"
          company="Urbancoolab"
          location="Toronto, ON"
          duration="Oct 2019 – Sep 2020"
          bullets={[
            "Worked with PMs, Designers and Developers in a cross-functional Agile environment to build the fully responsive company website using ReactJS, SCSS, Contentful and NextJS.",
            "Architected UI functionality of the core product using React, SCSS, Framer Motion, successfully securing Series B funding.",
            "Utilized SEO and WAI-ARIA accessibility practices on all products achieving a perfect 100 SEO audit score.",
            "Developed brand websites using vanilla HTML/CSS/JS for in-house brands.",
            "Developed REST API endpoints in collaboration with the Backend Engineer using MVC software design patterns."
          ]}
        >
          <div className="pl-0 md:pl-6 border-l-2 border-border mt-8 pt-6">
            <h4 className="text-xl font-bold text-foreground mb-1">Full Stack Engineer Intern</h4>
            <p className="text-muted-foreground mb-4 font-medium text-sm">Jun 2019 – Sep 2019</p>
            <ul className="list-disc leading-relaxed text-muted-foreground pl-5 space-y-3 marker:text-primary/50">
              <li>Worked collaboratively with the Backend Engineer and CTO to develop an Asset Management application.</li>
              <li>Created the fully responsive company portfolio website in vanilla HTML/CSS.</li>
              <li>Developed the pre-Alpha release website using Contentful and NextJS.</li>
              <li>Led UI development of the MVP using ReactJS/SCSS which secured Series A funding.</li>
            </ul>
          </div>
        </ExperienceCard>

        <ExperienceCard
          role="Software Engineering Intern"
          company="Xesto"
          location="Toronto, ON"
          duration="Jan 2018 – Mar 2018"
          bullets={[
            "Collaborated with a team of 4 to help build a Gesture based API.",
            "Built the frontend UI using HTML, SCSS and Webpack.",
            "Designed the Email server with Express using Mailgun’s API to send automated emails.",
            "Integrated an interactive Wysiwyg editor using React communicating with the Express server."
          ]}
        />

        <ExperienceCard
          role="Intern Developer"
          company="Rush Hour Media"
          location="Hong Kong"
          duration="Jun 2016 – Aug 2016"
          bullets={[
            "Developed a franchise page for Studio Fitness using SCSS, WordPress CMS and JS.",
            "Rebuilt the UI of an outdated library website for Alliance Française naming Médiathèque using CSS and JavaScript.",
            "Integrated Google Maps API and Slick.js plugin to create 'Locations' and 'Testimonials' sections."
          ]}
        />

        <ExperienceCard
          role="Full-Stack Developer Intern"
          company="RightBlue Labs"
          location="Toronto, ON"
          duration="Jun 2015 – Nov 2015"
          bullets={[
            "Designed an athlete monitoring system named Logit using JavaScript and Django, growing to 300+ users and 5 Canadian Olympic teams.",
            "Enhanced front-end design of the calendar page reducing page redirects and improving UX by 25%.",
            "Improved user experience of personal sessions page by enhancing code efficiency."
          ]}
        />

        <ExperienceCard
          role="Research Engineer"
          company="MagicFlow"
          location="Toronto, ON"
          duration="May 2015 – Jun 2015"
          bullets={[
            "Implemented social media API features using MEAN stack and Passport OAuth API.",
            "Developed an opportunities section using leafletJS, jQuery and AngularJS reducing lines of code by 50%.",
            "Designed and developed the LikeMagic organization's website and MagicFlow's pre-release site."
          ]}
        />

        <ExperienceCard
          role="Web Developer Intern"
          company="Digital Butter"
          location="Hong Kong"
          duration="Jul 2013 – Aug 2014"
          bullets={[
            "Enhanced the Digital Butter website UI using Bootstrap and jQuery.",
            "Created a survey web application for a Guinness & Co. event to collect feedback.",
            "Enhanced storage efficiency using HTML5 LocalStorage, reducing server data transmission.",
            "Integrated a secret Konami code to unlock a flappy bird game via JavaScript event handlers."
          ]}
        />
      </motion.section>
    </div>
  );
}
