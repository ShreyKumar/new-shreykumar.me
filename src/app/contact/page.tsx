"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s Connect</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Interested in working together, or just want to chat about tech? Feel free to reach out.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <motion.a
          href="mailto:shreykumar961@gmail.com"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex flex-col items-center justify-center p-10 glass rounded-3xl hover:bg-card/80 transition-all hover:shadow-xl hover:-translate-y-1 border border-border group"
        >
          <div className="p-4 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
            <Mail size={40} className="text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Email Me</h2>
          <p className="text-muted-foreground">Let&apos;s talk about your next project.</p>
        </motion.a>

        <motion.a
          href="https://linkedin.com/in/shreykumar"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="flex flex-col items-center justify-center p-10 glass rounded-3xl hover:bg-card/80 transition-all hover:shadow-xl hover:-translate-y-1 border border-border group"
        >
          <div className="p-4 bg-[#0A66C2]/10 rounded-full mb-6 group-hover:bg-[#0A66C2]/20 transition-colors">
            <Linkedin size={40} className="text-[#0A66C2]" />
          </div>
          <h2 className="text-2xl font-bold mb-2">LinkedIn</h2>
          <p className="text-muted-foreground">Connect with me professionally.</p>
        </motion.a>
      </div>


    </div>
  );
}
