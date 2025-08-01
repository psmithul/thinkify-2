import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Thinkify - Elite Engineering Teams On-Demand | Rapid Deployment",
  description: "Thinkify delivers world-class engineering teams in 72 hours. Connect with top 1% talent from FAANG and unicorn companies for rapid product development and innovation.",
  keywords: "engineering talent, contingent staffing, rapid deployment, elite engineers, tech teams, software development",
  authors: [{ name: "Thinkify" }],
  creator: "Thinkify",
  publisher: "Thinkify",
  robots: "index, follow",
  openGraph: {
    title: "Thinkify - Elite Engineering Teams On-Demand",
    description: "Deploy world-class engineering teams in 72 hours. Top 1% talent from FAANG and unicorn companies.",
    type: "website",
    url: "https://www.thinkify.io",
    siteName: "Thinkify",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thinkify - Elite Engineering Teams On-Demand",
    description: "Deploy world-class engineering teams in 72 hours. Top 1% talent from FAANG and unicorn companies.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Bree+Serif&family=DM+Serif+Text:ital@0;1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-nunito-sans antialiased bg-white text-neutral-900">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
