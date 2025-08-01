import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Thinkify Presentation | Strategic Contingent Staffing Solutions",
  description: "Discover Thinkify's strategic approach to contingent staffing. Learn how we deploy elite engineering teams in 72 hours with zero risk hiring.",
  keywords: "contingent staffing, engineering teams, rapid deployment, elite talent, strategic hiring, tech staffing",
  openGraph: {
    title: "Thinkify Presentation | Strategic Contingent Staffing",
    description: "Discover Thinkify's strategic approach to contingent staffing. Elite engineering teams deployed in 72 hours.",
    type: "website",
    url: "https://www.thinkify.io/ppt",
  },
  twitter: {
    title: "Thinkify Presentation | Strategic Contingent Staffing",
    description: "Discover Thinkify's strategic approach to contingent staffing. Elite engineering teams deployed in 72 hours.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function PPTLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 