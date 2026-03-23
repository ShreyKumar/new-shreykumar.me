"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Globe, Building2, ExternalLink } from "lucide-react";

export default function Clients() {
  const clients = [
    {
      name: "Harry Rosen",
      url: "https://www.harryrosen.com",
      icon: <img src="https://www.google.com/s2/favicons?domain=harryrosen.com&sz=128" alt="Harry Rosen Logo" className="w-12 h-12 object-contain mb-4 rounded-xl bg-white p-1.5 shadow-sm" />,
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
      icon: <img src="https://www.google.com/s2/favicons?domain=princessauto.com&sz=128" alt="Princess Auto Logo" className="w-12 h-12 object-contain mb-4 rounded-xl bg-white p-1.5 shadow-sm" />,
      description: "Engineered robust checkout and compliance features for the major Canadian retail chain.",
      features: [
        "Delivered a comprehensive Checkout feature employing Bold Commerce’s Checkout APIs.",
        "Engineered a tax integration feature integrating Oracle Commerce Cloud, Bold Commerce, and a custom Tax Service outperforming compliance standards."
      ],
      tech: ["Next.js", "Chakra UI", "Vercel", "Oracle Commerce Cloud", "Bold Commerce"]
    },
    {
      name: "Spirent Communications",
      url: "https://www.spirent.com",
      icon: <img src="https://www.google.com/s2/favicons?domain=spirent.com&sz=128" alt="Spirent Communications Logo" className="w-12 h-12 object-contain mb-4 rounded-xl bg-white p-1.5 shadow-sm" />,
      description: "Developed a global CMS website for a leading telecommunications company.",
      features: [
        "Designed and developed the frontend utilizing Contentful CMS and Next.js.",
        "Delivered the project significantly ahead of schedule, contributing to a Web Excellence award."
      ],
      tech: ["Contentful", "Netlify", "React", "Next.js", "Tailwind CSS"]
    }
  ];

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

      <div className="space-y-12">
        {clients.map((client, index) => (
          <motion.div
            key={client.name}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            className="glass p-8 md:p-10 rounded-3xl flex flex-col md:flex-row gap-8 items-start border border-border shadow-sm hover:shadow-lg transition-all"
          >
            <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
              {client.icon}
              <h2 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
                {client.name}
              </h2>
              {client.url && (
                <a href={client.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary flex items-center gap-1 hover:underline mb-4">
                  Visit Site <ExternalLink size={14} />
                </a>
              )}
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {client.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {client.tech.map(t => (
                  <span key={t} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-semibold">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="md:w-2/3 md:pl-8 md:border-l border-border mt-6 md:mt-0 w-full">
              <h3 className="text-xl font-bold mb-4">What I Built</h3>
              <ul className="list-disc leading-relaxed text-muted-foreground pl-5 space-y-4 marker:text-primary/50 text-lg">
                {client.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
