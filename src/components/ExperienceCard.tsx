import { ReactNode } from "react";
import { Heading } from "./ui/Primitives";

interface ExperienceCardProps {
  role: string;
  company: string;
  location: string;
  duration: string;
  description?: string;
  bullets: string[];
  children?: ReactNode;
}

export default function ExperienceCard({
  role,
  company,
  location,
  duration,
  description,
  bullets,
  children,
}: ExperienceCardProps) {
  const cardId = `exp-${company.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <article 
      className="mb-12 relative" 
      aria-labelledby={`${cardId}-title`}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <div>
          <Heading level={3} id={`${cardId}-title`} className="mb-1">{role}</Heading>
          <p className="text-lg text-primary font-medium">
            {company} <span className="text-muted-foreground font-normal whitespace-nowrap">• {location}</span>
          </p>
        </div>
        <p 
          className="text-muted-foreground mt-2 md:mt-0 font-medium bg-secondary/50 px-3 py-1 rounded-full text-sm w-fit border border-border"
          aria-label={`Duration: ${duration}`}
        >
          {duration}
        </p>
      </div>
      
      {description && <p className="mb-6 text-muted-foreground text-lg leading-relaxed">{description}</p>}
      
      {bullets.length > 0 && (
        <ul className="list-disc leading-relaxed text-muted-foreground pl-5 space-y-3 marker:text-primary/50">
          {bullets.map((bullet, index) => (
            <li key={index} className="pl-1">{bullet}</li>
          ))}
        </ul>
      )}

      {children && <div className="mt-8">{children}</div>}
    </article>
  );
}
