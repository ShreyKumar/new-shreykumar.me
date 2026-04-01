import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DigitalTwinChat from "@/components/DigitalTwinChat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shreykumar.me"),
  title: {
    default: "Shrey Kumar | Senior Software Engineer & Technical Lead | Available for Hire",
    template: "%s | Shrey Kumar",
  },
  description: "Shrey Kumar (Shreyansh Kumar) — Senior Software Engineer & Technical Lead with 10+ years of experience. Specializing in React, Next.js, TypeScript, and composable commerce. Based in Vancouver, open to remote roles worldwide.",
  keywords: [
    "Shrey Kumar", "Shreyansh Kumar", "hire software engineer", "senior software engineer",
    "technical lead", "React developer", "Next.js developer", "TypeScript engineer",
    "frontend engineer Vancouver", "full stack developer Canada", "contract software engineer",
    "freelance software engineer", "e-commerce developer", "composable commerce",
    "headless commerce", "software engineer available for hire", "remote software engineer"
  ],
  authors: [{ name: "Shrey Kumar", url: "https://shreykumar.me" }],
  creator: "Shrey Kumar",
  publisher: "Shrey Kumar",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shreykumar.me",
    title: "Shrey Kumar | Senior Software Engineer & Technical Lead",
    description: "10+ years building high-performance web apps with React, Next.js & TypeScript. Available for full-time, contract, and consulting opportunities.",
    siteName: "Shrey Kumar — Portfolio",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Shrey Kumar — Senior Software Engineer & Technical Lead | Available for Hire",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shrey Kumar | Senior Software Engineer & Technical Lead",
    description: "10+ years of experience in React, Next.js & composable commerce. Available for hire.",
    creator: "@shreykumar",
    images: ["/api/og"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://shreykumar.me/#person",
  "name": "Shreyansh Kumar",
  "alternateName": ["Shrey Kumar", "Shrey"],
  "jobTitle": "Senior Software Engineer & Technical Lead",
  "description": "Senior Software Engineer & Technical Lead with 10+ years of experience building high-performance web applications. Specializing in React, Next.js, TypeScript, and composable commerce. Available for full-time, contract, and consulting opportunities.",
  "url": "https://shreykumar.me",
  "image": "https://shreykumar.me/professional.jpg",
  "email": "shreykumar961@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Vancouver",
    "addressRegion": "BC",
    "addressCountry": "CA"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "professional inquiry",
    "email": "shreykumar961@gmail.com",
    "url": "https://www.linkedin.com/in/shreykumar",
    "availableLanguage": ["English", "Hindi"]
  },
  "sameAs": [
    "https://linkedin.com/in/shreykumar",
    "https://github.com/ShreyKumar",
    "https://adplist.org/mentors/shreyansh-kumar"
  ],
  "knowsAbout": [
    "React", "Next.js", "TypeScript", "JavaScript", "Node.js",
    "GraphQL", "Headless Commerce", "Composable Commerce",
    "Technical Leadership", "Software Architecture", "AI Integration",
    "E-commerce Platforms", "Commercetools", "Contentful", "Tailwind CSS",
    "Docker", "CI/CD", "GCP", "Agile Development"
  ],
  "knowsLanguage": [
    { "@type": "Language", "name": "English", "alternateName": "en" },
    { "@type": "Language", "name": "Hindi", "alternateName": "hi" }
  ],
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "University of Toronto",
    "sameAs": "https://www.utoronto.ca"
  },
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "name": "Honors Bachelor of Science in Computer Science",
    "credentialCategory": "degree",
    "educationalLevel": "Bachelor's Degree",
    "recognizedBy": {
      "@type": "CollegeOrUniversity",
      "name": "University of Toronto",
      "sameAs": "https://www.utoronto.ca"
    }
  },
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Senior Software Engineer",
    "occupationLocation": { "@type": "City", "name": "Vancouver" },
    "skills": "React, Next.js, TypeScript, Node.js, GraphQL, Headless Commerce, Composable Commerce, Technical Leadership"
  },
  "worksFor": {
    "@type": "Organization",
    "name": "ecobee",
    "url": "https://www.ecobee.com"
  },
  "award": [
    "MACH Alliance Best Retail Project Award 2022 (Myplanet x Harry Rosen)",
    "ADPList Top 100 Mentors in UX Engineering (3x recipient, 2024–2025)",
    "Web Excellence Award — Spirent.com CMS Platform"
  ],
  "seeks": {
    "@type": "Demand",
    "name": "Senior Software Engineering or Technical Lead position",
    "description": "Open to full-time, contract, and consulting software engineering roles focusing on frontend, full-stack, composable commerce, and AI-integrated applications. Remote-friendly."
  }
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "dateCreated": "2026-03-01T00:00:00-08:00",
  "dateModified": "2026-03-31T00:00:00-07:00",
  "url": "https://shreykumar.me",
  "name": "Shrey Kumar — Senior Software Engineer & Technical Lead",
  "description": "Portfolio and professional profile of Shrey Kumar (Shreyansh Kumar). Available for hire.",
  "mainEntity": { "@id": "https://shreykumar.me/#person" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://shreykumar.me" }]
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Shrey Kumar — Portfolio",
  "url": "https://shreykumar.me",
  "description": "Portfolio of Shrey Kumar — Senior Software Engineer & Technical Lead available for hire.",
  "author": { "@id": "https://shreykumar.me/#person" }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* JSON-LD: plain <script> tags render in initial server HTML — critical for crawler visibility */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        {/* Identity verification — Google uses rel="me" to consolidate authority */}
        <link rel="me" href="https://linkedin.com/in/shreykumar" />
        <link rel="me" href="https://github.com/ShreyKumar" />
        <link rel="me" href="mailto:shreykumar961@gmail.com" />
        <link rel="author" href="https://shreykumar.me" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            {children}
          </main>
          <Footer />
          <DigitalTwinChat />
        </ThemeProvider>
      </body>
    </html>
  );
}
