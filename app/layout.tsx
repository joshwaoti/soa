import type { Metadata } from "next";
import "./globals.css";
import { SiteChrome } from "../components/site-chrome";

export const metadata: Metadata = {
  metadataBase: new URL("https://soa-chi.vercel.app"),
  title: {
    default: "Sound of Abundance Church International",
    template: "%s | Sound of Abundance Church"
  },
  description: "The Lord City on Kangundo Road, Nairobi. Miracles, deliverance, prophecy, prayer, and Kingdom Business.",
  applicationName: "Sound of Abundance Church International",
  keywords: [
    "Sound of Abundance Church",
    "Rev B Akama",
    "The Lord City",
    "Kangundo Road church",
    "Nairobi prophetic ministry",
    "deliverance church Nairobi",
    "SOA TV"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: "https://soa-chi.vercel.app",
    siteName: "Sound of Abundance Church International",
    title: "Sound of Abundance Church International",
    description: "A digital extension of The Lord City on Kangundo Road, Nairobi.",
    images: [
      {
        url: "/images/social/hero-worship.jpg",
        width: 2048,
        height: 1365,
        alt: "Sound of Abundance Church worship service"
      },
      {
        url: "/images/social/ig-pastor-wide.jpg",
        width: 1365,
        height: 1365,
        alt: "Rev B Akama of Sound of Abundance Church"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sound of Abundance Church International",
    description: "The Lord City on Kangundo Road, Nairobi. Miracles, deliverance, prophecy, prayer, and Kingdom Business.",
    images: ["/images/social/hero-worship.jpg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
