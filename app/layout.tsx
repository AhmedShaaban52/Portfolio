import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://ahmed-portfolio-nine-phi.vercel.app/";
const SITE_NAME = "Ahmed Shaaban - Full-stack Web Developer";
const SITE_DESCRIPTION =
  "Portfolio of Ahmed Shaaban, a full-stack web developer building fast, accessible e-commerce and web applications with React, Next.js, TypeScript and Laravel.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s | Ahmed Shaaban",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Ahmed Shaaban",
    "full-stack developer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "Laravel developer",
    "web developer portfolio",
  ],
  authors: [{ name: "Ahmed Shaaban", url: SITE_URL }],
  creator: "Ahmed Shaaban",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Ahmed Shaaban - Full-stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#07070a",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ahmed Shaaban",
  url: SITE_URL,
  jobTitle: "Full-stack Web Developer",
  sameAs: [
    "https://github.com/AhmedShaaban52",
    "https://www.linkedin.com/in/ahmed-shaaban52/",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <CustomCursor />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}