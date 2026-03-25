"use client";

import { motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import React, { ReactNode, useState } from "react";

interface ClientProject {
  name: string;
  url: string;
  icon: ReactNode;
  description: string;
  features?: string[];
  tech: string[];
}

export default function Clients() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const clients: ClientProject[] = [
    {
      name: "General Electric",
      url: "https://www.ge.com",
      icon: <img src="https://www.google.com/s2/favicons?domain=ge.com&sz=128" alt="GE Logo" className="w-16 h-16 object-contain rounded-xl bg-white p-2 shadow-sm" />,
      description: "Led the discovery phase for a strategic platform replatforming initiative, conducting a comprehensive evaluation of the existing architecture and delivering data-driven recommendations for a next-generation ecommerce solution.",
      features: [
        "Developed a weighted scoring framework to benchmark leading ecommerce platforms against core business and technical requirements.",
        "Synthesized findings into an executive presentation, delivering actionable recommendations to senior stakeholders that informed the final platform selection."
      ],
      tech: ["commercetools", "SAP Commerce Cloud", "Adobe Commerce"]
    },
    {
      name: "ecobee",
      url: "https://www.ecobee.com",
      icon: <img src="https://www.google.com/s2/favicons?domain=ecobee.com&sz=128" alt="ecobee Logo" className="w-16 h-16 object-contain rounded-xl bg-white p-2 shadow-sm" />,
      description: "Architected scalable vendor integration frameworks and platforms driving revenue growth and operational efficiency for a leading smart home technology company.",
      features: [
        "Spearheaded the design and implementation of an external vendor federation layer underpinning a new Referral Marketing platform, driving a 63% month-over-month increase in purchase revenue.",
        "Directed and unblocked a BNPL (Buy Now, Pay Later) integration, aligning Engineering, Product, and external partners.",
        "Performed a rigorous weighted scoring analysis evaluating GraphQL and REST within a modernized Next.js ecosystem, directly informing long-term API strategy.",
        "Drove the site\u2019s migration from Gatsby to a self-hosted Next.js platform on GCP to improve performance, developer experience, and deployment flexibility."
      ],
      tech: ["Next.js", "Gatsby", "GCP", "GraphQL", "TypeScript"]
    },
    {
      name: "Do It Center Panama",
      url: "https://www.doitcenter.com.pa",
      icon: <img src="https://www.google.com/s2/favicons?domain=doitcenter.com.pa&sz=128" alt="Do It Center Logo" className="w-16 h-16 object-contain rounded-xl bg-white p-2 shadow-sm" />,
      description: "Made optimizations to improve the delivery of the project and alleviated project risk level",
      tech: ["Adobe Commerce Cloud", "Node.js", "Next.js", "Tailwind CSS", "Headless Commerce"]
    },
    {
      name: "Movado Group",
      url: "https://www.movadogroup.com",
      icon: <img src="https://www.google.com/s2/favicons?domain=movadogroup.com&sz=128" alt="Movado Group Logo" className="w-16 h-16 object-contain rounded-xl bg-white p-2 shadow-sm" />,
      description: "Migration discovery project onto Builder.io CMS and Salesforce Commerce Cloud on Headless architecture",
      tech: ["Builder.io CMS", "Salesforce Commerce Cloud", "Next.js", "Tailwind CSS"]
    },
    {
      name: "Harry Rosen",
      url: "https://www.harryrosen.com",
      icon: <img src="https://www.google.com/s2/favicons?domain=harryrosen.com&sz=128" alt="Harry Rosen Logo" className="w-16 h-16 object-contain rounded-xl bg-white p-2 shadow-sm" />,
      description: "Delivered headless commerce solutions serving millions of customers across Canada.",
      features: [
        "Architected scalable features including Wishlist, Cart, Shop By Store, and Gift Message.",
        "Implemented Dynamic Yield A/B testing on the platform for the Product Recommendation Engine.",
        "Integrated third-party solutions such as GoInStore and Automat."
      ],
      tech: ["Commercetools", "Amplience CMS", "Node.js", "Next.js", "Tailwind CSS"]
    },
    {
      name: "Princess Auto",
      url: "https://www.princessauto.com",
      icon: <img src="https://www.google.com/s2/favicons?domain=princessauto.com&sz=128" alt="Princess Auto Logo" className="w-16 h-16 object-contain rounded-xl bg-white p-2 shadow-sm" />,
      description: "Engineered robust checkout and compliance features for the major Canadian retail chain.",
      features: [
        "Delivered a comprehensive Checkout feature employing Bold Commerce\u2019s Checkout APIs.",
        "Engineered a tax integration feature integrating Oracle Commerce Cloud, Bold Commerce, and a custom Tax Service outperforming compliance standards."
      ],
      tech: ["Next.js", "Chakra UI", "Vercel", "Oracle Commerce Cloud", "Bold Commerce"]
    },
    {
      name: "Spirent Communications",
      url: "https://www.spirent.com",
      icon: <img src="https://www.google.com/s2/favicons?domain=spirent.com&sz=128" alt="Spirent Communications Logo" className="w-16 h-16 object-contain rounded-xl bg-white p-2 shadow-sm" />,
      description: "Developed a global CMS website for a leading telecommunications company.",
      features: [
        "Designed and developed the frontend utilizing Contentful CMS and Next.js.",
        "Delivered the project significantly ahead of schedule, contributing to a Web Excellence award."
      ],
      tech: ["Contentful", "Netlify", "React", "Next.js", "Tailwind CSS"]
    }
  ];

  const hovered = hoveredIndex !== null ? clients[hoveredIndex] : null;

  const detailContent = hovered ? (
    <motion.div
      key={hoveredIndex}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="md:border-t md:border-border pt-6 md:pt-10"
    >
      <div className="flex flex-col md:flex-row gap-8 relative">
        {/* Mobile Close Button */}
        <button
          className="md:hidden absolute top-0 right-0 p-2 text-muted-foreground hover:text-foreground bg-secondary/80 rounded-full shadow-sm z-30 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          onClick={(e) => {
            e.stopPropagation();
            setHoveredIndex(null);
          }}
          aria-label="Close details"
        >
          <X size={18} />
        </button>
        {/* Left */}
        <div className={hovered.features?.length ? "md:w-2/5" : "w-full"}>
          <div className="flex items-center gap-3 mb-4 pr-12">
            <h2 className="text-2xl font-bold text-foreground">{hovered.name}</h2>
            {hovered.url && (
              <a
                href={hovered.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary flex items-center gap-1 hover:underline"
              >
                Visit <ExternalLink size={14} />
              </a>
            )}
          </div>
          <p className="text-muted-foreground text-base leading-relaxed mb-5">
            {hovered.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {hovered.tech.map(t => (
              <span key={t} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-semibold">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right: features */}
        {hovered.features && hovered.features.length > 0 && (
          <div className="md:w-3/5 md:pl-8 md:border-l border-border">
            <h3 className="text-lg font-bold mb-4 text-foreground">What I Built</h3>
            <ul className="list-disc leading-relaxed text-muted-foreground pl-5 space-y-3 marker:text-primary/40 text-base">
              {hovered.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  ) : null;

  return (
    <div className="max-w-5xl mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Clients & E-Commerce</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          A showcase of major e-commerce platforms and Enterprise clients I&apos;ve collaborated with
          to deliver high-performance, scalable software solutions.
        </p>
      </motion.div>

      {/* Hover container — keeps detail panel alive while mousing between logos and details */}
      <div className="relative" onMouseLeave={() => setHoveredIndex(null)}>

        {/* Logo Grid */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-16">
          {clients.map((client, index) => (
            <div key={client.name} className="relative flex flex-col items-center">
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * index, duration: 0.4 }}
                onHoverStart={() => setHoveredIndex(index)}
                onFocus={() => setHoveredIndex(index)}
                onClick={() => setHoveredIndex(hoveredIndex === index ? null : index)}
                aria-label={`Show details for ${client.name}`}
                aria-expanded={hoveredIndex === index}
                className={`flex flex-col items-center gap-3 cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${hoveredIndex !== null && hoveredIndex !== index
                  ? "opacity-30"
                  : "opacity-100"
                  }`}
              >
                {client.icon}
                <span className="text-sm font-semibold text-foreground text-center max-w-[120px] leading-tight break-words w-full">
                  {client.name}
                </span>
              </motion.button>
              
              {/* Mobile Absolute Detail Panel */}
              {hoveredIndex === index && (
                <div 
                  className="absolute top-[calc(100%+12px)] z-50 md:hidden bg-background/95 backdrop-blur-xl rounded-3xl p-6 border border-border shadow-2xl overflow-y-auto max-h-[65vh]"
                  style={{
                    width: 'calc(100vw - 48px)',
                    left: '50%',
                  }}
                  ref={(el) => {
                    if (el && typeof window !== 'undefined') {
                      const parent = el.parentElement;
                      if (!parent) return;
                      const parentRect = parent.getBoundingClientRect();
                      const viewportCenter = window.innerWidth / 2;
                      const parentCenter = parentRect.left + parentRect.width / 2;
                      const offset = viewportCenter - parentCenter;
                      el.style.transform = `translateX(calc(-50% + ${offset}px))`;
                    }
                  }}
                >
                  {detailContent}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Detail Panel — appears below logos on hover */}
        <div className="hidden md:block min-h-[280px]">
          {hovered ? detailContent : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center h-full text-foreground/60 pt-16"
            >
              <p className="text-lg">Hover over a client to see details</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}