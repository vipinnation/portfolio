import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title:
    "Vipin Meghwal - Full Stack Developer Portfolio | Innovative Web Solutions",
  description:
    "Vipin Meghwal- Web & Software Developer. Explore a creative portfolio showcasing HTML, CSS, JavaScript skills.",
  keywords:
    "developer, portfolio, web development, software development, HTML, CSS, JavaScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <SpeedInsights />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
