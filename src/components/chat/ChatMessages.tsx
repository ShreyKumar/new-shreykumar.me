"use client";

import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { Message } from "@/hooks/useDigitalTwin";

interface ChatMessagesProps {
  messages: Message[];
  scrollRef: React.RefObject<HTMLDivElement | null>;
}

export function ChatMessages({ messages, scrollRef }: ChatMessagesProps) {
  return (
    <div 
      ref={scrollRef}
      role="log"
      aria-live="polite"
      aria-relevant="additions"
      className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-primary/20"
    >
      <AnimatePresence initial={false}>
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              role="article"
              aria-label={m.role === "user" ? "Your message" : "Digital Twin's response"}
              className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                m.role === "user"
                  ? "bg-primary text-primary-foreground rounded-tr-none"
                  : "bg-secondary text-secondary-foreground rounded-tl-none border border-border/50"
              }`}
            >
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <ReactMarkdown 
                  components={{
                    p: ({ children }) => <p className="mb-0 last:mb-0">{children}</p>,
                    ul: ({ children }) => <ul className="list-disc pl-4 my-2">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal pl-4 my-2">{children}</ol>,
                    a: ({ href, children }) => (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
                        {children}
                      </a>
                    )
                  }}
                >
                  {m.content}
                </ReactMarkdown>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
