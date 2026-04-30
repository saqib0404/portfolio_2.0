import type { Metadata } from "next";
import { Space_Grotesk, DotGothic16 } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const dotGothic = DotGothic16({
  variable: "--font-dot-gothic-16",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David Smith | Full-Stack Developer",
  description: "Portfolio of David Smith, Full-Stack Developer with 3 years of experience in React and Node.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${dotGothic.variable} antialiased bg-background-light dark:bg-background-dark text-background-dark dark:text-background-light selection:bg-primary selection:text-background-dark transition-colors duration-300`}
      >
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
