import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CommandPalette from "@/components/CommandPalette";
import ThemeToggle from "@/components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Krishna Vaishnav | SDE1 — Frontend Developer",
  description:
    "Built in Public: Krishna v1 → v5. SDE1 at K12 Techno Services, Bengaluru. Building education platforms used by thousands across India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="noise min-h-full flex flex-col pt-8">
        <Navbar />
        <CommandPalette />
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
