import type { Metadata } from "next";
import AchievementsContent from "@/components/pages/AchievementsContent";

export const metadata: Metadata = {
  title: "Achievements & Education | Shrey Kumar | University of Toronto CS",
  description: "Awards, education, and certifications of Shrey Kumar — MACH Alliance Best Retail Project 2022, 3x ADPList Top 100 Mentor, Web Excellence Award, B.Sc. Computer Science (Honours) from University of Toronto.",
  keywords: [
    "Shrey Kumar achievements", "MACH Alliance award", "ADPList top mentor award",
    "University of Toronto computer science", "software engineer awards",
    "web excellence award", "Shreyansh Kumar education"
  ],
  alternates: { canonical: "https://shreykumar.me/achievements" },
  openGraph: {
    title: "Achievements & Education | Shrey Kumar",
    description: "MACH Alliance award winner, 3x ADPList Top 100 Mentor, B.Sc. CS from University of Toronto.",
    url: "https://shreykumar.me/achievements",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://shreykumar.me" },
    { "@type": "ListItem", "position": 2, "name": "Achievements", "item": "https://shreykumar.me/achievements" }
  ]
};

export default function Achievements() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AchievementsContent />
    </>
  );
}
