import type { Metadata } from "next";
import MentorshipContent from "@/components/pages/MentorshipContent";

export const metadata: Metadata = {
  title: "Mentorship | Engineering Career Coaching | Shrey Kumar",
  description: "Shrey Kumar is a 3x Top 100 ADPList Mentor in UX Engineering. Book a session for software engineering career guidance, system design coaching, interview prep, and career transition advice.",
  keywords: [
    "software engineering mentor", "ADPList top mentor", "engineering career coach",
    "tech interview prep", "system design coaching", "career transition into tech",
    "Shrey Kumar mentor", "software engineer coaching Vancouver"
  ],
  alternates: { canonical: "https://shreykumar.me/mentorship" },
  openGraph: {
    title: "Mentorship | Shrey Kumar — 3x Top 100 ADPList Mentor",
    description: "Book a career coaching session with Shrey Kumar — 3x Top 100 ADPList Mentor in UX Engineering.",
    url: "https://shreykumar.me/mentorship",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://shreykumar.me" },
    { "@type": "ListItem", "position": 2, "name": "Mentorship", "item": "https://shreykumar.me/mentorship" }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Software Engineering Mentorship & Career Coaching",
  "description": "1-on-1 mentorship sessions covering software engineering career growth, system design, technical interviews, code reviews, and career transitions into tech. Provided by Shrey Kumar, a 3x ADPList Top 100 Mentor with 5+ years of mentoring experience and a 4.7+/5 average rating.",
  "provider": { "@id": "https://shreykumar.me/#person" },
  "serviceType": "Career Coaching and Mentorship",
  "url": "https://shreykumar.me/mentorship",
  "areaServed": { "@type": "Place", "name": "Worldwide (Remote)" },
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://adplist.org/mentors/shreyansh-kumar",
    "servicePlatform": "ADPList"
  },
  "review": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "bestRating": "5",
    "ratingCount": "100"
  }
};

export default function Mentorship() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <MentorshipContent />
    </>
  );
}
