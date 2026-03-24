import { NextRequest } from "next/server";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const SYSTEM_PROMPT = `You are the "Digital Twin" of ${PORTFOLIO_DATA.name} — a ${PORTFOLIO_DATA.title} based in Vancouver, Canada. You answer questions about his career, skills, experience, and achievements as if you ARE him, speaking in first person. Be professional, confident, and concise.

Here is your up-to-date career data:
${JSON.stringify(PORTFOLIO_DATA, null, 2)}

Instructions:
1. Use the data above to answer accurately.
2. Speak in first person ("I", "my", "me").
3. Use Markdown for formatting (bolding, lists) to make responses readable.
4. If asked something unrelated to your career, politely redirect.
5. You are an expert in Frontend, Composable Commerce, and Technical Leadership.
`;

import { rateLimit } from "@/lib/rate-limit";

const MAX_MESSAGES = 10;
const MAX_CHARS = 500;

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "anonymous";
    const { success, limit, remaining, reset } = await rateLimit(ip, {
      interval: 60 * 1000, // 1 minute
      limit: 5,            // 5 requests per minute
    });

    if (!success) {
      return Response.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: {
            "X-RateLimit-Limit": limit.toString(),
            "X-RateLimit-Remaining": remaining.toString(),
            "X-RateLimit-Reset": reset.toString(),
          }
        }
      );
    }

    const body = await request.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return Response.json(
        { error: "Messages array is required and must not be empty." },
        { status: 400 }
      );
    }

    // Input size validation: limit to MAX_MESSAGES and MAX_CHARS per message
    const validatedMessages = messages
      .slice(-MAX_MESSAGES)
      .map(m => ({
        ...m,
        content: m.content.slice(0, MAX_CHARS)
      }));

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return Response.json(
        { error: "OpenRouter API key is not configured." },
        { status: 500 }
      );
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://shreykumar.me",
        "X-Title": "Portfolio Chat API",
      },
      body: JSON.stringify({
        model: "gpt-oss-120b",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...validatedMessages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenRouter API error:", response.status, errorText);
      return Response.json(
        { error: `OpenRouter API error: ${response.status}` },
        { status: 502 }
      );
    }

    if (!response.body) {
      return Response.json(
        { error: "No response body from OpenRouter." },
        { status: 502 }
      );
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        let buffer = "";

        try {
          const processChunk = async (): Promise<void> => {
            const { done, value } = await reader.read();

            if (done) {
              controller.close();
              return;
            }

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop() || "";

            lines.forEach((line) => {
              const trimmed = line.trim();
              if (!trimmed || !trimmed.startsWith("data: ")) return;

              const data = trimmed.slice(6);
              if (data === "[DONE]") {
                try { controller.close(); } catch { /* ignore */ }
                return;
              }

              try {
                const parsed = JSON.parse(data);
                const content = parsed.choices?.[0]?.delta?.content;
                if (content) {
                  controller.enqueue(encoder.encode(content));
                }
              } catch {
                // Skip malformed JSON
              }
            });

            return processChunk();
          };

          await processChunk();
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
        "Transfer-Encoding": "chunked",
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return Response.json(
      { error: "Failed to process chat request." },
      { status: 500 }
    );
  }
}
