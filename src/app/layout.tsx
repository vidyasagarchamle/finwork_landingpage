import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Finwork - AI-Powered CA Practice Management",
  description: "Streamline your chartered accountancy practice with intelligent automation, client management, and comprehensive tax solutions. Built specifically for modern CA firms.",
  keywords: "CA practice management, chartered accountant software, tax management, client CRM, accounting automation, CA firm software, practice analytics",
  authors: [{ name: "Vidyasagar Chamle" }],
  creator: "Vidyasagar Chamle",
  publisher: "Finwork",
  metadataBase: new URL("https://finwork-landing.vercel.app"),
  alternates: {
    canonical: "https://finwork-landing.vercel.app"
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/finwork-icon.svg", type: "image/svg+xml", sizes: "28x28" }
    ],
    shortcut: "/favicon.svg",
    apple: "/finwork-icon.svg"
  },
  openGraph: {
    title: "Finwork - AI-Powered CA Practice Management",
    description: "Streamline your chartered accountancy practice with intelligent automation, client management, and comprehensive tax solutions. Built specifically for modern CA firms.",
    url: "https://finwork-landing.vercel.app",
    siteName: "Finwork",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/mail2.webp",
        width: 1355,
        height: 776,
        alt: "Finwork CA Practice Management Dashboard"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Finwork - AI-Powered CA Practice Management",
    description: "Streamline your chartered accountancy practice with intelligent automation, client management, and comprehensive tax solutions. Built specifically for modern CA firms.",
    creator: "@vidyasagarchamle",
    images: ["/mail2.webp"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
