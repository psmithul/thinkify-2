import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Contingent Hiring & Staffing Solutions | Thinkify - Elite Engineering Teams",
  description: "Leading contingent hiring and staffing solutions. Deploy elite engineering teams in 72 hours. Top contingent recruitment services for temporary staffing and contract hiring across India.",
  keywords: "contingent hiring, contingent staffing, contingent recruitment, temporary staffing solutions, contract hiring services, contingent workforce management, contingent hiring Mangaluru, contingent staffing Karnataka, engineering contingent hiring, IT contingent staffing",
  authors: [{ name: "Thinkify" }],
  creator: "Thinkify",
  publisher: "Thinkify",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.thinkify.io",
  },
  openGraph: {
    title: "Contingent Hiring & Staffing Solutions | Thinkify",
    description: "Leading contingent hiring and staffing solutions. Deploy elite engineering teams in 72 hours. Top contingent recruitment services for temporary staffing and contract hiring.",
    type: "website",
    url: "https://www.thinkify.io",
    siteName: "Thinkify",
    locale: "en_US",
    images: [
      {
        url: "https://www.thinkify.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Thinkify - Contingent Hiring Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contingent Hiring & Staffing Solutions | Thinkify",
    description: "Leading contingent hiring and staffing solutions. Deploy elite engineering teams in 72 hours.",
    images: ["https://www.thinkify.io/og-image.jpg"],
  },
  other: {
    "google-site-verification": "your-verification-code",
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
        
        {/* Google Jobs Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Thinkify",
              "url": "https://www.thinkify.io",
              "logo": "https://www.thinkify.io/logo.png",
              "description": "Leading contingent hiring and staffing solutions for elite engineering teams",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mangaluru",
                "addressRegion": "Karnataka",
                "addressCountry": "IN"
              },
                      "contactPoint": {
          "@type": "ContactPoint",
          "email": "kulkarni.karthik@thinkify.io",
          "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.linkedin.com/company/thinkify",
                "https://twitter.com/thinkify"
              ]
            })
          }}
        />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Thinkify",
              "image": "https://www.thinkify.io/logo.png",
              "description": "Contingent hiring and staffing solutions for engineering teams",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Thinkify Technologies",
                "addressLocality": "Mangaluru",
                "addressRegion": "Karnataka",
                "postalCode": "575001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 12.9716,
                "longitude": 77.5946
              },
              "url": "https://www.thinkify.io",
              "email": "kulkarni.karthik@thinkify.io",
              "priceRange": "$$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday", 
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              }
            })
          }}
        />
      </head>
      <body className="font-nunito-sans antialiased bg-white text-neutral-900">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
