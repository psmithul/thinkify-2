import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Elite Developer Network | Thinkify - Top Engineering Talent",
  description: "Meet our elite network of engineers from FAANG and unicorn companies. Success stories, career journeys, and proven track records of rapid deployment.",
  keywords: "elite developers, engineering talent, FAANG engineers, tech careers, software engineers, developer network",
  openGraph: {
    title: "Elite Developer Network | Thinkify",
    description: "Meet our elite network of engineers from FAANG and unicorn companies. Success stories and proven track records.",
    type: "website",
    url: "https://www.thinkify.io/developers",
  },
  twitter: {
    title: "Elite Developer Network | Thinkify",
    description: "Meet our elite network of engineers from FAANG and unicorn companies. Success stories and proven track records.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function DevelopersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 