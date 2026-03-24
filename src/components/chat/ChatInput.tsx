"use client";

import { Send } from "lucide-react";
import { IconButton } from "../ui/Primitives";

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  sendMessage: (e?: React.FormEvent) => void;
  isLoading: boolean;
}

export function ChatInput({ input, setInput, sendMessage, isLoading }: ChatInputProps) {
  return (
    <form 
      onSubmit={sendMessage} 
      className="p-4 border-t border-border flex gap-2 bg-secondary/30"
      role="search"
      aria-label="Chat with Digital Twin"
    >
      <div className="flex-1 relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about my career..."
          maxLength={500}
          aria-label="Message to Digital Twin"
          className="w-full bg-background border border-border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          disabled={isLoading}
        />
        {input.length > 400 && (
          <span className="absolute right-3 bottom-0.5 text-[10px] text-muted-foreground bg-background/80 px-1 rounded">
            {input.length}/500
          </span>
        )}
      </div>
      <IconButton
        type="submit"
        disabled={isLoading || !input.trim()}
        icon={<Send size={18} />}
        aria-label="Send message"
        className="bg-primary text-primary-foreground shadow-md"
      />
    </form>
  );
}
