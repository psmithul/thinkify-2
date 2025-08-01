import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Elite Engineering Talent Network | Contingent Hiring Solutions | Thinkify",
  description: "Access elite engineering talent for contingent hiring and staffing needs. Top 1% developers from FAANG companies available for temporary staffing and contract hiring across Karnataka and India.",
  keywords: "elite engineering talent, contingent hiring developers, temporary staffing engineers, contract hiring IT professionals, contingent workforce engineering, staffing solutions Karnataka, contingent recruitment developers",
  openGraph: {
    title: "Elite Engineering Talent Network | Contingent Hiring Solutions",
    description: "Access elite engineering talent for contingent hiring and staffing needs. Top 1% developers from FAANG companies available for temporary staffing and contract hiring.",
    type: "website",
    url: "https://www.thinkify.io/developers",
    locale: "en_US",
  },
  twitter: {
    title: "Elite Engineering Talent Network | Contingent Hiring Solutions",
    description: "Access elite engineering talent for contingent hiring and staffing needs. Top 1% developers from FAANG companies available for temporary staffing and contract hiring.",
  },
  alternates: {
    canonical: "https://www.thinkify.io/developers",
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