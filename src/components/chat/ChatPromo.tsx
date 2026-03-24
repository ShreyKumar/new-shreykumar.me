"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, MessageSquareText } from "lucide-react";
import { IconButton } from "../ui/Primitives";

interface ChatPromoProps {
  show: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export function ChatPromo({ show, onClose, onOpen }: ChatPromoProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
           initial={{ opacity: 0, scale: 0.8, y: 20 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           exit={{ opacity: 0, scale: 0.8, y: 20 }}
           className="fixed bottom-24 right-6 z-50 pointer-events-auto"
           role="status"
           aria-live="polite"
        >
          <div 
            className="relative glass p-4 pr-10 rounded-2xl border border-primary/30 shadow-2xl max-w-xs cursor-pointer hover:scale-105 transition-transform"
            role="button"
            tabIndex={0}
            onClick={onOpen}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onOpen();
              }
            }}
            aria-label="Open Digital Twin Chat invitation"
          >
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              icon={<X size={14} />}
              aria-label="Dismiss invitation"
              className="absolute top-2 right-2 p-1 text-muted-foreground hover:text-foreground"
            />
            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0" aria-hidden="true">
                <MessageSquareText size={20} />
              </div>
              <p className="text-sm font-medium leading-snug">
                Hi! I&apos;m Shrey&apos;s Digital Twin. Ask me anything about his career! 👋
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
