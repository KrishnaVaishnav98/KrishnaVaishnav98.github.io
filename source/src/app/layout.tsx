import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CommandPalette from "@/components/CommandPalette";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Krishna Vaishnav — Frontend Developer",
  description:
    "SDE at K12 Techno Services, Bengaluru. Building education platforms used by thousands of students across India.",
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
      <body className="min-h-full overflow-hidden">
        <div className="mesh-gradient">
          <div className="orb" />
          <div className="orb" />
          <div className="orb" />
        </div>

        <CustomCursor />
        <Navbar />
        <CommandPalette />
        {children}
      </body>
    </html>
  );
}
