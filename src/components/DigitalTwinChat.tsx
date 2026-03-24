"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Minus } from "lucide-react";
import { useEffect, useRef } from "react";
import { useDigitalTwin } from "@/hooks/useDigitalTwin";
import { ChatMessages } from "./chat/ChatMessages";
import { ChatInput } from "./chat/ChatInput";
import { ChatPromo } from "./chat/ChatPromo";
import { IconButton } from "./ui/Primitives";

export default function DigitalTwinChat() {
  const {
    messages,
    input,
    setInput,
    isLoading,
    isOpen,
    showPromo,
    mounted,
    scrollRef,
    sendMessage,
    toggleChat,
    closePromo
  } = useDigitalTwin();

  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  // Focus management
  useEffect(() => {
    if (isOpen) {
      // Focus the first focusable element in the chat (usually the close button or input)
      const inputElement = chatWindowRef.current?.querySelector('input');
      inputElement?.focus();
    } else if (mounted) {
      // Return focus to the toggle button when closed
      toggleButtonRef.current?.focus();
    }
  }, [isOpen, mounted]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        toggleChat();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, toggleChat]);

  if (!mounted) return null;

  return (
    <>
      <ChatPromo 
        show={showPromo && !isOpen} 
        onClose={closePromo} 
        onOpen={toggleChat} 
      />

      <motion.button
        ref={toggleButtonRef}
        onClick={toggleChat}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close Digital Twin Chat" : "Open Digital Twin Chat"}
        aria-expanded={isOpen}
        aria-controls="digital-twin-chat-window"
        className="fixed bottom-6 right-6 p-4 bg-primary text-primary-foreground rounded-full shadow-2xl z-50 hover:bg-primary/90 transition-all flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-primary/40"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <Minus size={24} aria-hidden="true" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageSquare size={24} aria-hidden="true" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatWindowRef}
            id="digital-twin-chat-window"
            role="dialog"
            aria-modal="true"
            aria-labelledby="chat-header-title"
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-6 w-[90vw] md:w-[400px] h-[70vh] max-h-[600px] bg-background border border-border rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden glass"
          >
            {/* Header */}
            <header className="p-4 border-b border-border bg-primary/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary" aria-hidden="true">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h3 id="chat-header-title" className="font-bold text-sm">Digital Twin</h3>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">AI Assistant</p>
                </div>
              </div>
              <IconButton 
                icon={<X size={20} />}
                onClick={toggleChat}
                aria-label="Close chat"
                className="hover:bg-secondary text-muted-foreground hover:text-foreground"
              />
            </header>

            {/* Messages */}
            <ChatMessages messages={messages} scrollRef={scrollRef} />

            {/* Input */}
            <ChatInput 
              input={input} 
              setInput={setInput} 
              sendMessage={sendMessage} 
              isLoading={isLoading} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
