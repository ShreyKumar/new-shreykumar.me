import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shreykumar.me"),
  title: "Shreyansh Kumar | Senior Software Engineer & Tech Lead",
  description: "Personal and professional portfolio of Shreyansh Kumar. Explore my software engineering projects, e-commerce expertise, and career mentorship.",
  keywords: ["Shreyansh Kumar", "Software Engineer", "Tech Lead", "E-commerce", "Career Mentor", "Toronto", "Next.js", "React"],
  authors: [{ name: "Shreyansh Kumar" }],
  creator: "Shreyansh Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shreykumar.me",
    title: "Shreyansh Kumar | Senior Software Engineer",
    description: "Personal and professional portfolio of Shreyansh Kumar.",
    siteName: "Shreyansh Kumar Portfolio",
    images: [
      {
        url: "/professional.jpg",
        width: 800,
        height: 800,
        alt: "Shreyansh Kumar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shreyansh Kumar | Senior Software Engineer",
    description: "Personal and professional portfolio of Shreyansh Kumar.",
    images: ["/professional.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
