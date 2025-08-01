import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Contingent Staffing Presentation | Strategic Hiring Solutions | Thinkify",
  description: "Discover Thinkify's strategic approach to contingent staffing and hiring. Learn how we deploy elite engineering teams in 72 hours with zero risk hiring for temporary staffing solutions.",
  keywords: "contingent staffing presentation, strategic hiring solutions, temporary staffing services, contract hiring presentation, contingent workforce management, staffing solutions presentation",
  openGraph: {
    title: "Contingent Staffing Presentation | Strategic Hiring Solutions",
    description: "Discover Thinkify's strategic approach to contingent staffing and hiring. Elite engineering teams deployed in 72 hours for temporary staffing solutions.",
    type: "website",
    url: "https://www.thinkify.io/ppt",
    locale: "en_US",
  },
  twitter: {
    title: "Contingent Staffing Presentation | Strategic Hiring Solutions",
    description: "Discover Thinkify's strategic approach to contingent staffing and hiring. Elite engineering teams deployed in 72 hours for temporary staffing solutions.",
  },
  alternates: {
    canonical: "https://www.thinkify.io/ppt",
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