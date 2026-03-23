import { ReactNode } from "react";

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
  return (
    <div className="mb-12 relative">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-foreground">{role}</h3>
          <p className="text-lg text-primary font-medium mt-1">
            {company} <span className="text-muted-foreground font-normal">• {location}</span>
          </p>
        </div>
        <p className="text-muted-foreground mt-2 md:mt-0 font-medium bg-secondary/50 px-3 py-1 rounded-full text-sm w-fit border border-border">
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
    </div>
  );
}
