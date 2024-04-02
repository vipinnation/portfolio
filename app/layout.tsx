import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Be_Vietnam_Pro } from "next/font/google";

const font_init = Be_Vietnam_Pro({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-primary",
});

export const metadata: Metadata = {
  title: "Vipin Meghwal - Full Stack Developer for Web & Software Solutions",
  description:
    "Vipin Meghwal - Web & Software Developer | Explore Creative Portfolio with HTML, CSS, and JavaScript Skills. Specializing in Full Stack Development, Software Solutions, and Responsive Design. Offering Expertise in Backend and Frontend Development, API Integration, and Mobile App Development. Contact for Custom Web Services and Innovative Technology Solutions.",
  keywords:
    "developer, portfolio, web development, software development, HTML, CSS, JavaScript, freelance, freelancer, freelance developer, software engineer, programming, coding, web services, API development, backend development, frontend development, full-stack development, web applications, software solutions, technology consulting, software architecture, DevOps, cloud computing, database management, system integration, mobile app development, responsive design, user experience (UX), user interface (UI) design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen ${font_init.variable}`}>
        <SpeedInsights />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
