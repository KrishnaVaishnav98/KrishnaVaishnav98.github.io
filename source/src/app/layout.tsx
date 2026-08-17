import type { Metadata } from "next";
import { Bricolage_Grotesque, Outfit } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Krishna Vaishnav — Software Development Engineer",
  description:
    "Full-stack engineer at K12 Techno Services, Bengaluru. I build web platforms used at scale across India — React/Next.js frontends backed by Django REST APIs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${outfit.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
