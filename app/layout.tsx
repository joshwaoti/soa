import type { Metadata } from "next";
import "./globals.css";
import { SiteChrome } from "../components/site-chrome";

export const metadata: Metadata = {
  title: "Sound of Abundance Church International",
  description: "The Lord City on Kangundo Road, Nairobi. Miracles, deliverance, prophecy, prayer, and Kingdom Business.",
  openGraph: {
    title: "Sound of Abundance Church International",
    description: "A digital extension of The Lord City on Kangundo Road, Nairobi.",
    images: ["https://img.youtube.com/vi/HVYM0NHFm9w/maxresdefault.jpg"]
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
