"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export interface Message {
  role: "user" | "assistant";
  content: string;
}

export function useDigitalTwin() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showPromo, setShowPromo] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setShowPromo(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = useCallback(async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setShowPromo(false);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (response.status === 429) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "You're sending messages too fast. Please wait a moment before trying again." },
        ]);
        setIsLoading(false);
        return;
      }

      if (!response.ok) throw new Error("Failed to send message");

      const reader = response.body?.getReader();
      if (!reader) throw new Error("No reader");

      const assistantMessage: Message = { role: "assistant", content: "" };
      setMessages((prev) => [...prev, assistantMessage]);

      const decoder = new TextDecoder();
      
      const readStream = async (): Promise<void> => {
        const { done, value } = await reader.read();
        if (done) {
          setIsLoading(false);
          return;
        }

        const chunk = decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const last = prev[prev.length - 1];
          const updated = { ...last, content: last.content + chunk };
          return [...prev.slice(0, -1), updated];
        });

        return readStream();
      };

      await readStream();
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I encountered an error. Please try again." },
      ]);
      setIsLoading(false);
    }
  }, [input, isLoading, messages]);

  const toggleChat = () => setIsOpen((prev) => !prev);
  const closePromo = () => setShowPromo(false);

  return {
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
    closePromo,
    MAX_CHARS: 500
  };
}
