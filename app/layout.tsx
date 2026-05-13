import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Syed Reejaul Hussain | Frontend Software Engineer",
  description: "Frontend Software Engineer with 11+ years of experience building high-performance, scalable web applications for enterprise SaaS in the regulated financial sector. React, Next.js, and JavaScript specialist.",
  keywords: [
    "Frontend Engineer",
    "React",
    "Next.js",
    "JavaScript",
    "Web Developer",
    "SaaS",
    "Enterprise Applications",
  ],
  creator: "Syed Reejaul Hussain",
  openGraph: {
    title: "Syed Reejaul Hussain | Frontend Software Engineer",
    description: "Frontend Software Engineer with 11+ years of experience building enterprise SaaS applications",
    type: "website",
  },
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
