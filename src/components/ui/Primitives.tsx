"use client";

import { motion } from "framer-motion";
import { ReactNode, ButtonHTMLAttributes } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  role?: string;
  "aria-labelledby"?: string;
}

export function Card({ children, className = "", delay = 0, role, "aria-labelledby": ariaLabelledBy }: CardProps) {
  return (
    <motion.div
      role={role}
      aria-labelledby={ariaLabelledBy}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={`glass p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all ${className}`}
    >
      {children}
    </motion.div>
  );
}

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "high-contrast";
}

export function Badge({ children, className = "", variant = "default" }: BadgeProps) {
  const variantStyles = {
    default: "bg-secondary text-secondary-foreground",
    "high-contrast": "bg-primary text-primary-foreground",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4;
  className?: string;
  id?: string;
}

export function Heading({ children, level = 2, className = "", id }: HeadingProps) {
  const styles = {
    1: "text-4xl md:text-5xl font-bold mb-6",
    2: "text-2xl md:text-3xl font-bold mb-6",
    3: "text-xl font-bold mb-2",
    4: "text-lg font-bold mb-2",
  };

  const Component = ({ children, className }: { children: ReactNode; className: string }) => {
    if (level === 1) return <h1 id={id} className={className}>{children}</h1>;
    if (level === 3) return <h3 id={id} className={className}>{children}</h3>;
    if (level === 4) return <h4 id={id} className={className}>{children}</h4>;
    return <h2 id={id} className={className}>{children}</h2>;
  };

  return (
    <Component className={`${styles[level as keyof typeof styles]} ${className}`}>
      {children}
    </Component>
  );
}

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  "aria-label": string; // Enforce aria-label
}

export function IconButton({ icon, "aria-label": ariaLabel, className = "", ...props }: IconButtonProps) {
  return (
    <button
      {...props}
      aria-label={ariaLabel}
      className={`p-2 rounded-xl transition-all active:scale-95 disabled:opacity-50 ${className}`}
    >
      {icon}
    </button>
  );
}
