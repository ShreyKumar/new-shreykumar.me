export interface Skill {
  category: string;
  items: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  description?: string;
  bullets: string[];
  subRoles?: {
    role: string;
    duration: string;
    bullets: string[];
  }[];
}

export interface Client {
  name: string;
  url?: string;
  iconDomain?: string;
  description: string;
  features?: string[];
  tech: string[];
}

export interface AchievementItem {
  title: string;
  subtitle: string;
  type: "medal" | "award" | "star";
}

export interface MentorMetric {
  label: string;
  value: string;
}

export interface MentorOrganization {
  title: string;
  organization: string;
  duration: string;
  description: string;
  type: "award" | "star" | "medal" | "trophy" | "users" | "graduation" | "briefcase";
}

export const PORTFOLIO_DATA = {
  name: "Shreyansh Kumar",
  title: "Senior Software Engineer & Technical Lead",
  email: "shreykumar961@gmail.com",
  skills: [
    { category: "Frontend", items: "React, Next.js, JavaScript, TypeScript, HTML/CSS, Tailwind, Chakra UI, Framer Motion" },
    { category: "Backend", items: "Node.js, GraphQL, Commercetools, Contentful, Shopify, Vercel AI SDK" },
    { category: "DevOps", items: "Docker, Kubernetes, Git, CI/CD, GCP" },
    { category: "AI Tools", items: "ChatGPT, Github Copilot, Gemini Code Assist, Claude Code, V0.dev" },
  ],
  experience: [
    {
      role: "Senior Software Engineer, Dotcom",
      company: "ecobee",
      location: "REMOTE",
      duration: "Jan 2025 – Mar 2026",
      description: "Architected scalable vendor integration frameworks and platforms driving revenue growth and operational efficiency.",
      bullets: [
        "Spearheaded the design and implementation of an external vendor federation layer driving a 63% month-over-month increase in purchase revenue.",
        "Directed and unblocked a BNPL (Buy Now, Pay Later) integration, aligning Engineering, Product, and external partners.",
        "Performed a rigorous weighted scoring analysis evaluating GraphQL and REST within a modernized Next.js ecosystem.",
        "Driving critical architectural modernization from Gatsby to a self-hosted Next.js platform on GCP.",
        "Accelerated team capacity by onboarding engineers to full productivity in under a month through focused mentorship."
      ]
    },
    {
      role: "Technical Lead, Composable Commerce",
      company: "Corra",
      location: "REMOTE",
      duration: "Sep 2023 – Dec 2024",
      description: "Directed multiple R&D initiatives that boosted site performance and improved sprint velocity across 10+ projects.",
      bullets: [
        "Achieved a perfect 10/10 client satisfaction score by leading 3 global cross-functional teams.",
        "Quadrupled sprint velocity by resolving leadership disputes and streamlining communication.",
        "Transformed Corra’s e-commerce internationalization package, achieving 96% bundle size reduction and 20% better LCP.",
        "Eliminated fraud and password breaches by mitigating recurring cyber-attacks.",
        "Upgraded Corra’s commercetools accelerator using TypeScript for better stability and DX."
      ]
    },
    {
      role: "Software Developer II",
      company: "Orium",
      location: "TORONTO, ON",
      duration: "Sep 2022 – Aug 2023",
      description: "Designed, developed, and maintained scalable software applications to enhance user experience.",
      bullets: [
        "Attained a 10-20% reduction in server response times through significant refactoring efforts.",
        "Engineered a tax integration feature by integrating Oracle, Bold, and custom Tax Services."
      ],
      subRoles: [
        {
          role: "Software Developer",
          duration: "Sep 2020 – Sep 2022",
          bullets: [
            "Bolstered site-wide conversions by 40% via Wishlist and Recently Viewed features for HarryRosen.com.",
            "Trained 4 new hires into high-performing developers.",
            "Improved frontend performance by 40% in CLS score through strategic best practices.",
            "Developed Spirent.com using Contentful, React, Next.js, and Tailwind CSS."
          ]
        }
      ]
    },
    {
      role: "Full Stack Engineer",
      company: "Urbancoolab",
      location: "Toronto, ON",
      duration: "Oct 2019 – Sep 2020",
      bullets: [
        "Built fully responsive company website using ReactJS, SCSS, Contentful and NextJS.",
        "Architected UI functionality of the core product, successfully securing Series B funding.",
        "Achieved perfect 100 SEO audit scores through WAI-ARIA and SEO best practices.",
        "Developed REST API endpoints using MVC software design patterns.",
        "Collaborated with the CTO and DevOps Engineer to set up a CI/CD pipeline and Docker containers.",
        "Reported all progress in Sprint Planning, Sprint Review and daily Standup meetings."
      ],
      subRoles: [
        {
          role: "Full Stack Engineer Intern",
          duration: "Jun 2019 – Sep 2019",
          bullets: [
            "Worked collaboratively with the Backend Engineer and CTO to develop an Asset Management application.",
            "Created the fully responsive company portfolio website in vanilla HTML/CSS, attracting numerous investors.",
            "Developed the pre-Alpha release website using Contentful and NextJS attracting numerous clients.",
            "Led UI development of the MVP using ReactJS/SCSS which was demoed to investors and led to securing Series A funding."
          ]
        }
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "Xesto",
      location: "Toronto, ON",
      duration: "Jan 2018 – Mar 2018",
      bullets: [
        "Collaborated with a team of 4 to help build a Gesture based API.",
        "Built the frontend UI of the 'Enterprises' and 'Contact Us' page using HTML, SCSS and Webpack.",
        "Designed the Email server with Express using Mailgun's API to send automated emails.",
        "Integrated an interactive Wysiwyg editor using React communicating with the Express server, improving Xesto's overall client outreach."
      ]
    },
    {
      role: "Intern Developer",
      company: "Rush Hour Media",
      location: "Hong Kong",
      duration: "Jun 2016 – Aug 2016",
      bullets: [
        "Developed a franchise page for Studio Fitness, Hong Kong using SCSS, WordPress CMS and JS.",
        "Rebuilt the UI of an outdated library website for Alliance Française, Hong Kong (AFHK) named Médiathèque using CSS and JavaScript.",
        "Integrated the Google Maps API and Slick.js plugin to create the 'Locations' and 'Testimonials' sections of the main AFHK website.",
        "Performed routine QA checks on existent projects and reported any inconsistencies on JIRA and Trello.",
        "Worked collaboratively in an Agile environment with a team of 4, improving project efficiency by 50%."
      ]
    },
    {
      role: "Full-Stack Developer Intern",
      company: "RightBlue Labs",
      location: "Toronto, ON",
      duration: "Jun 2015 – Nov 2015",
      description: "Designed an athlete monitoring system known as Logit, which now has over 300 users and 5 Canadian Olympic teams.",
      bullets: [
        "Designed in collaboration with a team of 4 an athlete monitoring system using JavaScript and Django, now serving 300+ users and 5 Canadian Olympic teams.",
        "Enhanced front-end design of the calendar page where athletes and coaches book training sessions, improving user experience by 25% by reducing page redirects.",
        "Improved user experience of the personal sessions page where athletes record their progress after training sessions through enhanced code efficiency and reduced runtime."
      ]
    },
    {
      role: "Research Engineer",
      company: "MagicFlow",
      location: "Toronto, ON",
      duration: "May 2015 – Jun 2015",
      bullets: [
        "Implemented social media API features through MeanJS framework and Passport OAuth API, allowing users to sign in through their social media accounts.",
        "Developed an opportunities section allowing users to search for jobs and events using leafletJS map API, jQuery and AngularJS, reducing lines of code by 50%.",
        "Designed and Developed the LikeMagic organization's website, an organization affiliated with MagicFlow.",
        "Designed and Developed MagicFlow's pre-release website through Bootstrap and jQuery animations."
      ]
    },
    {
      role: "Web Developer Intern",
      company: "Digital Butter",
      location: "Hong Kong",
      duration: "Jul 2014 – Aug 2014",
      bullets: [
        "Enhanced the Digital Butter website's user interface through Bootstrap and jQuery library, reducing lines of code by 50%.",
        "Adapted website on multiple platforms and browsers with Xcode iOS simulator for optimum compatibility.",
        "Integrated a secret Konami code to unlock a flappy bird game through JavaScript and jQuery event handlers.",
        "Acquired experience with Bootstrap and Craft CMS as an alternative to hard coding for better reliability and performance."
      ],
      subRoles: [
        {
          role: "Web Developer Intern",
          duration: "Jul 2013 – Aug 2013",
          bullets: [
            "Created a survey web application for a Guinness & Co. event to collect feedback from attendees.",
            "Enhanced the website's storage efficiency through the use of LocalStorage in HTML5, reducing data transmission to the server by 100%.",
            "Built an effective page navigator so users would not require a page refresh to navigate through links."
          ]
        }
      ]
    }
  ],
  clients: [
    {
      name: "ecobee",
      url: "https://www.ecobee.com",
      iconDomain: "ecobee.com",
      description: "Spearheaded architectural strategy and vendor integrations for the leading smart home technology provider.",
      tech: ["Next.js", "Gatsby", "GCP", "GraphQL", "TypeScript"]
    },
    {
      name: "Do It Center Panama",
      url: "https://www.doitcenter.com.pa",
      iconDomain: "doitcenter.com.pa",
      description: "Made optimizations to improve the delivery of the project and alleviated project risk level.",
      tech: ["Adobe Commerce Cloud", "Node.js", "Next.js", "Tailwind CSS", "Headless Commerce"]
    },
    {
      name: "Movado Group",
      url: "https://www.movadogroup.com",
      iconDomain: "movadogroup.com",
      description: "Migration discovery project onto Builder.io CMS and Salesforce Commerce Cloud on Headless architecture.",
      tech: ["Builder.io CMS", "Salesforce Commerce Cloud", "Next.js", "Tailwind CSS"]
    },
    {
      name: "Harry Rosen",
      url: "https://www.harryrosen.com",
      iconDomain: "harryrosen.com",
      description: "Delivered headless commerce solutions serving millions of customers across Canada.",
      features: [
        "Architected scalable features including Wishlist and Cart.",
        "Implemented Dynamic Yield A/B testing for Product Recommendations.",
        "Integrated third-party solutions such as GoInStore and Automat."
      ],
      tech: ["Commercetools", "Amplience CMS", "Node.js", "Next.js", "Tailwind CSS"]
    },
    {
      name: "Princess Auto",
      url: "https://www.princessauto.com",
      iconDomain: "princessauto.com",
      description: "Engineered robust checkout and compliance features for the major Canadian retail chain.",
      features: [
        "Delivered a comprehensive Checkout feature employing Bold Commerce’s Checkout APIs.",
        "Engineered a tax integration feature performing above compliance standards."
      ],
      tech: ["Next.js", "Chakra UI", "Vercel", "Oracle Commerce Cloud", "Bold Commerce"]
    },
    {
      name: "Spirent Communications",
      url: "https://www.spirent.com",
      iconDomain: "spirent.com",
      description: "Developed a global CMS website for a leading telecommunications company.",
      features: [
        "Designed and developed the frontend utilizing Contentful CMS and Next.js.",
        "Delivered the project significantly ahead of schedule, contributing to a Web Excellence award."
      ],
      tech: ["Contentful", "Netlify", "React", "Next.js", "Tailwind CSS"]
    }
  ],
  achievements: [
    { title: "B.Sc. Computer Science (Honours)", subtitle: "University of Toronto, St. George Campus", type: "medal" },
    { title: "Engineering to Technical Manager", subtitle: "Udemy Certificate", type: "award" },
    { title: "System Design & Rust Crash Course", subtitle: "Udemy (2023)", type: "star" },
    { title: "Amplience Foundations Training", subtitle: "Amplience (2022)", type: "award" },
    { title: "Haskell, Python & Web Accessibility", subtitle: "Various completions (2014–2021)", type: "star" }
  ],
  mentorship: {
    metrics: [
      { label: "Years Mentoring", value: "5+" },
      { label: "Organizations", value: "5" },
      { label: "Avg Rating / 5", value: "4.7+" },
      { label: "Satisfaction Rate", value: "90%+" }
    ],
    roles: [
      { 
        title: "SWE Mentor", 
        organization: "ADPList",
        duration: "2024 - Present",
        description: "3-time recipient in UX Engineering (2024–2025). Guided 50+ mentees globally on career progression, system design, and interview preparation.", 
        type: "award" 
      },
      { 
        title: "Web Dev Instructor", 
        organization: "CareerFoundry",
        duration: "2021 - 2025",
        description: "Educated 100+ students on full-stack development, helping graduates land roles at companies including Google and TD Bank.", 
        type: "star" 
      },
      { 
        title: "Career Expert", 
        organization: "Wizco",
        duration: "2022 - 2024",
        description: "Conducted 75+ mock technical and behavioral interviews for candidates targeting FAANG and Big 5 firms.", 
        type: "briefcase" 
      },
      { 
        title: "Youth Coach™", 
        organization: "Youthfully",
        duration: "2022 - present",
        description: "Mentoring ambitious students on STEM career paths and university admissions with a 4.7+/5 average rating.", 
        type: "trophy" 
      },
      { 
        title: "Private Tutor", 
        organization: "Superprof",
        duration: "2021 - 2022",
        description: "Taught programming fundamentals to 20+ beginners covering Python, JavaScript, and web development.", 
        type: "users" 
      }
    ]
  }
};
