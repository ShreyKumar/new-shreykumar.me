import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Senior Software Engineer & Technical Lead";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          backgroundColor: "#0f172a",
          padding: "64px 72px",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Indigo accent bar — left edge */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "6px",
            backgroundColor: "#6366f1",
            display: "flex",
          }}
        />

        {/* Decorative glow — top right */}
        <div
          style={{
            position: "absolute",
            top: "-140px",
            right: "-140px",
            width: "420px",
            height: "420px",
            borderRadius: "210px",
            backgroundColor: "rgba(99, 102, 241, 0.12)",
            display: "flex",
          }}
        />

        {/* Decorative glow — bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "60px",
            width: "280px",
            height: "280px",
            borderRadius: "140px",
            backgroundColor: "rgba(99, 102, 241, 0.06)",
            display: "flex",
          }}
        />

        {/* Main content column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          {/* Available-for-hire badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "rgba(16, 185, 129, 0.12)",
              border: "1.5px solid rgba(16, 185, 129, 0.35)",
              borderRadius: "100px",
              padding: "8px 24px",
              marginBottom: "32px",
              width: "262px",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#10b981",
                marginRight: "12px",
                display: "flex",
              }}
            />
            <span
              style={{
                color: "#10b981",
                fontSize: "17px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                display: "flex",
              }}
            >
              AVAILABLE FOR HIRE
            </span>
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: "82px",
              fontWeight: 800,
              color: "#f8fafc",
              lineHeight: 1,
              marginBottom: "16px",
              display: "flex",
              letterSpacing: "-0.02em",
            }}
          >
            Shrey Kumar
          </div>

          {/* Title / subtitle */}
          <div
            style={{
              fontSize: "31px",
              color: "#94a3b8",
              fontWeight: 400,
              marginBottom: "48px",
              display: "flex",
            }}
          >
            {title}
          </div>

          {/* Tech stack tags */}
          <div style={{ display: "flex", gap: "10px" }}>
            {["React", "Next.js", "TypeScript", "Node.js", "GraphQL", "E-commerce"].map(
              (tag) => (
                <div
                  key={tag}
                  style={{
                    backgroundColor: "rgba(99, 102, 241, 0.12)",
                    border: "1px solid rgba(99, 102, 241, 0.25)",
                    color: "#a5b4fc",
                    padding: "7px 18px",
                    borderRadius: "6px",
                    fontSize: "19px",
                    fontWeight: 500,
                    display: "flex",
                  }}
                >
                  {tag}
                </div>
              )
            )}
          </div>

          {/* Bottom bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid rgba(148, 163, 184, 0.1)",
              paddingTop: "28px",
              marginTop: "auto",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ color: "#64748b", fontSize: "20px", display: "flex" }}>
                Vancouver, BC
              </span>
              <span style={{ color: "#334155", fontSize: "20px", display: "flex", margin: "0 8px" }}>|</span>
              <span style={{ color: "#64748b", fontSize: "20px", display: "flex" }}>
                Remote-Friendly
              </span>
              <span style={{ color: "#334155", fontSize: "20px", display: "flex", margin: "0 8px" }}>|</span>
              <span style={{ color: "#64748b", fontSize: "20px", display: "flex" }}>
                10+ Years Experience
              </span>
            </div>
            <span
              style={{
                color: "#6366f1",
                fontSize: "22px",
                fontWeight: 700,
                display: "flex",
                letterSpacing: "0.02em",
              }}
            >
              shreykumar.me
            </span>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
