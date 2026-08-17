import type { Metadata } from "next";
import { DM_Sans, Fraunces, Kalam } from "next/font/google";
import "./globals.css";
import PageFrame from "@/components/PageFrame";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kalam",
});

export const metadata: Metadata = {
  title: "Krishna Vaishnav — Software Development Engineer",
  description:
    "Full-stack engineer at K12 Techno Services, Bengaluru. I build the web platforms Indian schools run on — React/Next.js frontends backed by Django REST APIs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${fraunces.variable} ${kalam.variable} antialiased`}
    >
      <body>
        <PageFrame />
        {children}
      </body>
    </html>
  );
}
